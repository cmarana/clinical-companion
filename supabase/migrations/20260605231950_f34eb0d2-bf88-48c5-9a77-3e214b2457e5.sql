
CREATE OR REPLACE FUNCTION public.match_medical_knowledge(
  query_embedding vector,
  query_text text DEFAULT ''::text,
  filter_source_types text[] DEFAULT NULL::text[],
  match_count integer DEFAULT 8,
  similarity_threshold double precision DEFAULT 0.5
)
RETURNS TABLE(
  id uuid, source_type text, source_id text, specialty text, category text,
  title text, subtitle text, content text, chunk_index integer, tags text[],
  similarity double precision, text_rank double precision, combined_score double precision
)
LANGUAGE plpgsql STABLE SECURITY DEFINER SET search_path TO 'public'
AS $function$
BEGIN
  RETURN QUERY
  WITH vector_matches AS (
    SELECT mk.id,
           (1 - (mk.embedding <=> query_embedding))::double precision AS similarity,
           ROW_NUMBER() OVER (ORDER BY mk.embedding <=> query_embedding) AS v_rank
    FROM public.medical_knowledge mk
    WHERE mk.is_active = TRUE
      AND mk.embedding IS NOT NULL
      AND (filter_source_types IS NULL OR mk.source_type = ANY(filter_source_types))
      AND (1 - (mk.embedding <=> query_embedding)) >= similarity_threshold
    ORDER BY mk.embedding <=> query_embedding
    LIMIT match_count * 3
  ),
  text_matches AS (
    SELECT mk.id,
           ts_rank(mk.keywords, plainto_tsquery('portuguese', query_text))::double precision AS rank,
           ROW_NUMBER() OVER (ORDER BY ts_rank(mk.keywords, plainto_tsquery('portuguese', query_text)) DESC) AS t_rank
    FROM public.medical_knowledge mk
    WHERE mk.is_active = TRUE
      AND query_text <> ''
      AND mk.keywords @@ plainto_tsquery('portuguese', query_text)
      AND (filter_source_types IS NULL OR mk.source_type = ANY(filter_source_types))
    LIMIT match_count * 3
  ),
  combined AS (
    SELECT COALESCE(v.id, t.id) AS id,
           COALESCE(v.similarity, 0)::double precision AS similarity,
           COALESCE(t.rank, 0)::double precision AS text_rank,
           (COALESCE(1.0 / (60 + v.v_rank), 0) + COALESCE(1.0 / (60 + t.t_rank), 0))::double precision AS rrf_score
    FROM vector_matches v
    FULL OUTER JOIN text_matches t ON v.id = t.id
  )
  SELECT mk.id, mk.source_type, mk.source_id, mk.specialty, mk.category,
         mk.title, mk.subtitle, mk.content, mk.chunk_index, mk.tags,
         c.similarity, c.text_rank, c.rrf_score
  FROM combined c
  JOIN public.medical_knowledge mk ON mk.id = c.id
  ORDER BY c.rrf_score DESC
  LIMIT match_count;
END;
$function$;
