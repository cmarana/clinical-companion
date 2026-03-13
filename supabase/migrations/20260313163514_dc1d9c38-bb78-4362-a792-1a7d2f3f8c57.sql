
-- Delete duplicate medications keeping the one with most content per lower(nome) group
DELETE FROM bulario_medications
WHERE id IN (
  SELECT unnest(ids_to_delete) FROM (
    SELECT 
      (array_agg(id ORDER BY length(coalesce(indicacoes,'') || coalesce(posologia_adulto,'') || coalesce(contraindicacoes,'') || coalesce(efeitos_adversos,'') || coalesce(apresentacoes,'') || coalesce(mecanismo,'') || coalesce(interacoes,'') || coalesce(monitorizacao,'') || coalesce(diluicao_ev,'') || coalesce(observacoes,'')) DESC))[2:] as ids_to_delete
    FROM bulario_medications
    GROUP BY lower(nome)
    HAVING count(*) > 1
  ) sub
  WHERE ids_to_delete IS NOT NULL AND array_length(ids_to_delete, 1) > 0
);
