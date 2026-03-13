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
          classe: string
          compatibilidade_ev: string
          contraindicacoes: string
          controlado: boolean
          created_at: string
          diluicao_ev: string
          efeitos_adversos: string
          forma_farmaceutica: string
          gestacao: string
          gestacao_seguro: boolean
          id: string
          idoso: string
          indicacoes: string
          interacoes: string
          lactacao: string
          mecanismo: string
          monitorizacao: string
          nome: string
          nomes_comerciais: string[]
          observacoes: string
          pediatria: boolean
          posologia_adulto: string
          posologia_pediatrica: string
          principio_ativo: string
          receituario: string
          referencias: string
          subclasse: string
          tags: string[]
          via: string
        }
        Insert: {
          ajuste_hepatico?: string
          ajuste_renal?: string
          apresentacoes?: string
          categoria?: string
          categoria_anvisa?: string
          classe?: string
          compatibilidade_ev?: string
          contraindicacoes?: string
          controlado?: boolean
          created_at?: string
          diluicao_ev?: string
          efeitos_adversos?: string
          forma_farmaceutica?: string
          gestacao?: string
          gestacao_seguro?: boolean
          id: string
          idoso?: string
          indicacoes?: string
          interacoes?: string
          lactacao?: string
          mecanismo?: string
          monitorizacao?: string
          nome: string
          nomes_comerciais?: string[]
          observacoes?: string
          pediatria?: boolean
          posologia_adulto?: string
          posologia_pediatrica?: string
          principio_ativo: string
          receituario?: string
          referencias?: string
          subclasse?: string
          tags?: string[]
          via?: string
        }
        Update: {
          ajuste_hepatico?: string
          ajuste_renal?: string
          apresentacoes?: string
          categoria?: string
          categoria_anvisa?: string
          classe?: string
          compatibilidade_ev?: string
          contraindicacoes?: string
          controlado?: boolean
          created_at?: string
          diluicao_ev?: string
          efeitos_adversos?: string
          forma_farmaceutica?: string
          gestacao?: string
          gestacao_seguro?: boolean
          id?: string
          idoso?: string
          indicacoes?: string
          interacoes?: string
          lactacao?: string
          mecanismo?: string
          monitorizacao?: string
          nome?: string
          nomes_comerciais?: string[]
          observacoes?: string
          pediatria?: boolean
          posologia_adulto?: string
          posologia_pediatrica?: string
          principio_ativo?: string
          receituario?: string
          referencias?: string
          subclasse?: string
          tags?: string[]
          via?: string
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
