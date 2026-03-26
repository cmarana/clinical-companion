import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { BularioFilters } from "@/types/bulario";

export interface BularioMedicationRow {
  id: string;
  nome: string;
  principio_ativo: string;
  nomes_comerciais: string[];
  classe: string;
  subclasse: string;
  categoria: string;
  forma_farmaceutica: string;
  via: string;
  controlado: boolean;
  receituario: string;
  gestacao: string;
  lactacao: string;
  pediatria: boolean;
  idoso: string;
  mecanismo: string;
  indicacoes: string;
  posologia_adulto: string;
  posologia_pediatrica: string;
  ajuste_renal: string;
  ajuste_hepatico: string;
  contraindicacoes: string;
  efeitos_adversos: string;
  interacoes: string;
  monitorizacao: string;
  diluicao_ev: string;
  compatibilidade_ev: string;
  apresentacoes: string;
  observacoes: string;
  referencias: string;
  gestacao_seguro: boolean;
  tags: string[];
  categoria_anvisa: string;
  descricao: string;
  mecanismo_acao: string;
  indicacoes_detalhadas: string;
  dose_adulto: string;
  dose_pediatrica: string;
  dose_por_peso: string;
  dose_maxima: string;
  efeitos_adversos_comuns: string;
  efeitos_adversos_graves: string;
  interacoes_medicamentosas: string;
  diluicao: string;
  tempo_infusao: string;
  categoria_farmacologica: string;
  grupo_terapeutico: string;
  tarja: string;
  receita_tipo: string;
}

const PAGE_SIZE = 50;

/** Fetch paginated & filtered medications with infinite scroll */
export function useBularioInfiniteList(filters: BularioFilters) {
  return useInfiniteQuery({
    queryKey: ["bulario-infinite", filters],
    queryFn: async ({ pageParam = 0 }) => {
      let query = supabase
        .from("bulario_medications")
        .select("id, nome, principio_ativo, nomes_comerciais, classe, categoria, forma_farmaceutica, via, controlado, pediatria, gestacao_seguro, tags")
        .order("nome")
        .range(pageParam, pageParam + PAGE_SIZE - 1);

      const q = filters.search.trim();
      if (q.length >= 2) {
        query = query.or(
          `nome.ilike.%${q}%,principio_ativo.ilike.%${q}%,classe.ilike.%${q}%,indicacoes.ilike.%${q}%`
        );
      }

      if (filters.drugClass) query = query.eq("classe", filters.drugClass);
      if (filters.category) query = query.eq("categoria", filters.category);
      if (filters.dosageForm) query = query.eq("forma_farmaceutica", filters.dosageForm);
      if (filters.route) query = query.eq("via", filters.route);
      if (filters.controlled === true) query = query.eq("controlado", true);
      if (filters.pediatric === true) query = query.eq("pediatria", true);
      if (filters.pregnancySafe === true) query = query.eq("gestacao_seguro", true);

      const { data, error } = await query;
      if (error) throw error;
      return {
        items: (data ?? []) as BularioMedicationRow[],
        nextOffset: (data?.length ?? 0) < PAGE_SIZE ? undefined : pageParam + PAGE_SIZE,
      };
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextOffset,
    staleTime: 5 * 60 * 1000,
  });
}

/** Fetch single medication detail */
export function useBularioDetail(id: string | undefined) {
  return useQuery({
    queryKey: ["bulario-detail", id],
    queryFn: async () => {
      if (!id) return null;
      const { data, error } = await supabase
        .from("bulario_medications")
        .select("*")
        .eq("id", id)
        .maybeSingle();
      if (error) throw error;
      return data as BularioMedicationRow | null;
    },
    enabled: !!id,
    staleTime: 10 * 60 * 1000,
  });
}

/** Fetch total count for display */
export function useBularioCount() {
  return useQuery({
    queryKey: ["bulario-count"],
    queryFn: async () => {
      const { count, error } = await supabase
        .from("bulario_medications")
        .select("id", { count: "exact", head: true });
      if (error) throw error;
      return count ?? 0;
    },
    staleTime: 10 * 60 * 1000,
  });
}
