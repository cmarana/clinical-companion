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
      email_send_log: {
        Row: {
          created_at: string
          error_message: string | null
          id: string
          message_id: string | null
          metadata: Json | null
          recipient_email: string
          status: string
          template_name: string
        }
        Insert: {
          created_at?: string
          error_message?: string | null
          id?: string
          message_id?: string | null
          metadata?: Json | null
          recipient_email: string
          status: string
          template_name: string
        }
        Update: {
          created_at?: string
          error_message?: string | null
          id?: string
          message_id?: string | null
          metadata?: Json | null
          recipient_email?: string
          status?: string
          template_name?: string
        }
        Relationships: []
      }
      email_send_state: {
        Row: {
          auth_email_ttl_minutes: number
          batch_size: number
          id: number
          retry_after_until: string | null
          send_delay_ms: number
          transactional_email_ttl_minutes: number
          updated_at: string
        }
        Insert: {
          auth_email_ttl_minutes?: number
          batch_size?: number
          id?: number
          retry_after_until?: string | null
          send_delay_ms?: number
          transactional_email_ttl_minutes?: number
          updated_at?: string
        }
        Update: {
          auth_email_ttl_minutes?: number
          batch_size?: number
          id?: number
          retry_after_until?: string | null
          send_delay_ms?: number
          transactional_email_ttl_minutes?: number
          updated_at?: string
        }
        Relationships: []
      }
      email_unsubscribe_tokens: {
        Row: {
          created_at: string
          email: string
          id: string
          token: string
          used_at: string | null
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          token: string
          used_at?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          token?: string
          used_at?: string | null
        }
        Relationships: []
      }
      feedback: {
        Row: {
          created_at: string
          id: string
          message: string
          page_url: string
          status: string
          type: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          message: string
          page_url?: string
          status?: string
          type?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          message?: string
          page_url?: string
          status?: string
          type?: string
          user_id?: string
        }
        Relationships: []
      }
      module_analytics: {
        Row: {
          accessed_at: string
          id: string
          module_label: string
          module_path: string
          specialty: string
          user_id: string
        }
        Insert: {
          accessed_at?: string
          id?: string
          module_label?: string
          module_path: string
          specialty?: string
          user_id: string
        }
        Update: {
          accessed_at?: string
          id?: string
          module_label?: string
          module_path?: string
          specialty?: string
          user_id?: string
        }
        Relationships: []
      }
      pix_purchases: {
        Row: {
          access_end: string | null
          access_start: string | null
          amount: number
          created_at: string
          id: string
          plan_type: string
          status: string
          stripe_session_id: string
          user_id: string
        }
        Insert: {
          access_end?: string | null
          access_start?: string | null
          amount: number
          created_at?: string
          id?: string
          plan_type?: string
          status?: string
          stripe_session_id: string
          user_id: string
        }
        Update: {
          access_end?: string | null
          access_start?: string | null
          amount?: number
          created_at?: string
          id?: string
          plan_type?: string
          status?: string
          stripe_session_id?: string
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          academic_status: string
          avatar_url: string
          birth_date: string | null
          city: string
          course: string
          cpf: string
          created_at: string
          crm: string
          crm_state: string
          email: string
          first_name: string
          full_name: string
          gender: string
          graduation_year: number | null
          id: string
          last_name: string
          phone: string
          provider: string
          registration_number: string
          registration_state: string
          registration_type: string
          specialty: string
          state: string
          university: string
          updated_at: string
          user_id: string
          zip_code: string
        }
        Insert: {
          academic_status?: string
          avatar_url?: string
          birth_date?: string | null
          city?: string
          course?: string
          cpf?: string
          created_at?: string
          crm?: string
          crm_state?: string
          email?: string
          first_name?: string
          full_name?: string
          gender?: string
          graduation_year?: number | null
          id?: string
          last_name?: string
          phone?: string
          provider?: string
          registration_number?: string
          registration_state?: string
          registration_type?: string
          specialty?: string
          state?: string
          university?: string
          updated_at?: string
          user_id: string
          zip_code?: string
        }
        Update: {
          academic_status?: string
          avatar_url?: string
          birth_date?: string | null
          city?: string
          course?: string
          cpf?: string
          created_at?: string
          crm?: string
          crm_state?: string
          email?: string
          first_name?: string
          full_name?: string
          gender?: string
          graduation_year?: number | null
          id?: string
          last_name?: string
          phone?: string
          provider?: string
          registration_number?: string
          registration_state?: string
          registration_type?: string
          specialty?: string
          state?: string
          university?: string
          updated_at?: string
          user_id?: string
          zip_code?: string
        }
        Relationships: []
      }
      protocol_views: {
        Row: {
          created_at: string
          duration_seconds: number | null
          id: string
          protocol_category: string
          protocol_id: string
          protocol_title: string
          source: string
          user_id: string
        }
        Insert: {
          created_at?: string
          duration_seconds?: number | null
          id?: string
          protocol_category?: string
          protocol_id: string
          protocol_title?: string
          source?: string
          user_id: string
        }
        Update: {
          created_at?: string
          duration_seconds?: number | null
          id?: string
          protocol_category?: string
          protocol_id?: string
          protocol_title?: string
          source?: string
          user_id?: string
        }
        Relationships: []
      }
      push_subscriptions: {
        Row: {
          auth: string
          created_at: string
          endpoint: string
          id: string
          p256dh: string
          protocol_updates: boolean
          study_reminders: boolean
          updated_at: string
          user_id: string
        }
        Insert: {
          auth: string
          created_at?: string
          endpoint: string
          id?: string
          p256dh: string
          protocol_updates?: boolean
          study_reminders?: boolean
          updated_at?: string
          user_id: string
        }
        Update: {
          auth?: string
          created_at?: string
          endpoint?: string
          id?: string
          p256dh?: string
          protocol_updates?: boolean
          study_reminders?: boolean
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      referrals: {
        Row: {
          completed_at: string | null
          created_at: string
          id: string
          referred_user_id: string | null
          referrer_id: string
          reward_months: number
          status: string
        }
        Insert: {
          completed_at?: string | null
          created_at?: string
          id?: string
          referred_user_id?: string | null
          referrer_id: string
          reward_months?: number
          status?: string
        }
        Update: {
          completed_at?: string | null
          created_at?: string
          id?: string
          referred_user_id?: string | null
          referrer_id?: string
          reward_months?: number
          status?: string
        }
        Relationships: []
      }
      suppressed_emails: {
        Row: {
          created_at: string
          email: string
          id: string
          metadata: Json | null
          reason: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          metadata?: Json | null
          reason: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          metadata?: Json | null
          reason?: string
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
      delete_email: {
        Args: { message_id: number; queue_name: string }
        Returns: boolean
      }
      enqueue_email: {
        Args: { payload: Json; queue_name: string }
        Returns: number
      }
      move_to_dlq: {
        Args: {
          dlq_name: string
          message_id: number
          payload: Json
          source_queue: string
        }
        Returns: number
      }
      read_email_batch: {
        Args: { batch_size: number; queue_name: string; vt: number }
        Returns: {
          message: Json
          msg_id: number
          read_ct: number
        }[]
      }
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
