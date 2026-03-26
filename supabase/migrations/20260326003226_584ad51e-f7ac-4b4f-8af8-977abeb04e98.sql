
-- Remove duplicates keeping the record with the longest combined content (most complete)
DELETE FROM bulario_medications
WHERE id IN (
  SELECT id FROM (
    SELECT id,
      ROW_NUMBER() OVER (
        PARTITION BY nome
        ORDER BY
          LENGTH(COALESCE(descricao,'')) + LENGTH(COALESCE(indicacoes,'')) + LENGTH(COALESCE(mecanismo_acao,'')) +
          LENGTH(COALESCE(posologia_adulto,'')) + LENGTH(COALESCE(efeitos_adversos,'')) + LENGTH(COALESCE(contraindicacoes,'')) +
          LENGTH(COALESCE(dose_adulto,'')) + LENGTH(COALESCE(interacoes,'')) DESC
      ) as rn
    FROM bulario_medications
  ) ranked
  WHERE rn > 1
);
