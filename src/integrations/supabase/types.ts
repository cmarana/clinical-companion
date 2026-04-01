export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      bulario_medications: {
        Row: {
          ajuste_hepatico: string
          ajuste_renal: string
          apresentacoes: string
          categoria: string
          categoria_anvisa: string
          categoria_farmacologica: string
          classe: string
          compatibilidade_ev: string
          contraindicacoes: string
          controlado: boolean
          created_at: string
          descricao: string
          diluicao: string
          diluicao_ev: string
          dose_adulto: string
          dose_maxima: string
          dose_pediatrica: string
          dose_por_peso: string
          efeitos_adversos: string
          efeitos_adversos_comuns: string
          efeitos_adversos_graves: string
          forma_farmaceutica: string
          gestacao: string
          gestacao_seguro: boolean
          grupo_terapeutico: string
          id: string
          idoso: string
          indicacoes: string
          indicacoes_detalhadas: string
          interacoes: string
          interacoes_medicamentosas: string
          lactacao: string
          mecanismo: string
          mecanismo_acao: string
          monitorizacao: string
          nome: string
          nomes_comerciais: string[]
          observacoes: string
          pediatria: boolean
          posologia_adulto: string
          posologia_pediatrica: string
          principio_ativo: string
          receita_tipo: string
          receituario: string
          referencias: string
          subclasse: string
          tags: string[]
          tarja: string
          tempo_infusao: string
          via: string
        }
        Insert: {
          ajuste_hepatico?: string
          ajuste_renal?: string
          apresentacoes?: string
          categoria?: string
          categoria_anvisa?: string
          categoria_farmacologica?: string
          classe?: string
          compatibilidade_ev?: string
          contraindicacoes?: string
          controlado?: boolean
          created_at?: string
          descricao?: string
          diluicao?: string
          diluicao_ev?: string
          dose_adulto?: string
          dose_maxima?: string
          dose_pediatrica?: string
          dose_por_peso?: string
          efeitos_adversos?: string
          efeitos_adversos_comuns?: string
          efeitos_adversos_graves?: string
          forma_farmaceutica?: string
          gestacao?: string
          gestacao_seguro?: boolean
          grupo_terapeutico?: string
          id: string
          idoso?: string
          indicacoes?: string
          indicacoes_detalhadas?: string
          interacoes?: string
          interacoes_medicamentosas?: string
          lactacao?: string
          mecanismo?: string
          mecanismo_acao?: string
          monitorizacao?: string
          nome: string
          nomes_comerciais?: string[]
          observacoes?: string
          pediatria?: boolean
          posologia_adulto?: string
          posologia_pediatrica?: string
          principio_ativo: string
          receita_tipo?: string
          receituario?: string
          referencias?: string
          subclasse?: string
          tags?: string[]
          tarja?: string
          tempo_infusao?: string
          via?: string
        }
        Update: {
          ajuste_hepatico?: string
          ajuste_renal?: string
          apresentacoes?: string
          categoria?: string
          categoria_anvisa?: string
          categoria_farmacologica?: string
          classe?: string
          compatibilidade_ev?: string
          contraindicacoes?: string
          controlado?: boolean
          created_at?: string
          descricao?: string
          diluicao?: string
          diluicao_ev?: string
          dose_adulto?: string
          dose_maxima?: string
          dose_pediatrica?: string
          dose_por_peso?: string
          efeitos_adversos?: string
          efeitos_adversos_comuns?: string
          efeitos_adversos_graves?: string
          forma_farmaceutica?: string
          gestacao?: string
          gestacao_seguro?: boolean
          grupo_terapeutico?: string
          id?: string
          idoso?: string
          indicacoes?: string
          indicacoes_detalhadas?: string
          interacoes?: string
          interacoes_medicamentosas?: string
          lactacao?: string
          mecanismo?: string
          mecanismo_acao?: string
          monitorizacao?: string
          nome?: string
          nomes_comerciais?: string[]
          observacoes?: string
          pediatria?: boolean
          posologia_adulto?: string
          posologia_pediatrica?: string
          principio_ativo?: string
          receita_tipo?: string
          receituario?: string
          referencias?: string
          subclasse?: string
          tags?: string[]
          tarja?: string
          tempo_infusao?: string
          via?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string
          created_at: string
          crm: string
          crm_state: string
          full_name: string
          id: string
          specialty: string
          updated_at: string
          user_id: string
        }
        Insert: {
          avatar_url?: string
          created_at?: string
          crm?: string
          crm_state?: string
          full_name?: string
          id?: string
          specialty?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          avatar_url?: string
          created_at?: string
          crm?: string
          crm_state?: string
          full_name?: string
          id?: string
          specialty?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_favorites: {
        Row: {
          created_at: string
          id: string
          item_id: string
          item_type: string
          specialty: string | null
          title: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          item_id: string
          item_type: string
          specialty?: string | null
          title: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          item_id?: string
          item_type?: string
          specialty?: string | null
          title?: string
          user_id?: string
        }
        Relationships: []
      }
      user_notes: {
        Row: {
          category: string
          content: string
          created_at: string
          id: string
          patient: string | null
          template_id: string | null
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          category?: string
          content?: string
          created_at?: string
          id?: string
          patient?: string | null
          template_id?: string | null
          title?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          category?: string
          content?: string
          created_at?: string
          id?: string
          patient?: string | null
          template_id?: string | null
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_study_progress: {
        Row: {
          card_id: string
          ease: number
          id: string
          interval: number
          last_review: number
          next_review: number
          repetitions: number
          user_id: string
        }
        Insert: {
          card_id: string
          ease?: number
          id?: string
          interval?: number
          last_review?: number
          next_review?: number
          repetitions?: number
          user_id: string
        }
        Update: {
          card_id?: string
          ease?: number
          id?: string
          interval?: number
          last_review?: number
          next_review?: number
          repetitions?: number
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
