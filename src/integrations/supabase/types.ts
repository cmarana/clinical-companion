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
      clinical_checklist_executions: {
        Row: {
          checklist_id: string
          completed_at: string | null
          completed_items: number
          completion_pct: number
          id: string
          institution_id: string | null
          notes: string
          shift: string
          started_at: string
          total_items: number
          unit: string
          user_id: string
        }
        Insert: {
          checklist_id: string
          completed_at?: string | null
          completed_items?: number
          completion_pct?: number
          id?: string
          institution_id?: string | null
          notes?: string
          shift?: string
          started_at?: string
          total_items?: number
          unit?: string
          user_id: string
        }
        Update: {
          checklist_id?: string
          completed_at?: string | null
          completed_items?: number
          completion_pct?: number
          id?: string
          institution_id?: string | null
          notes?: string
          shift?: string
          started_at?: string
          total_items?: number
          unit?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "clinical_checklist_executions_checklist_id_fkey"
            columns: ["checklist_id"]
            isOneToOne: false
            referencedRelation: "clinical_checklists"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "clinical_checklist_executions_institution_id_fkey"
            columns: ["institution_id"]
            isOneToOne: false
            referencedRelation: "institutions"
            referencedColumns: ["id"]
          },
        ]
      }
      clinical_checklist_items: {
        Row: {
          checklist_id: string
          created_at: string
          critical: boolean
          id: string
          position: number
          text: string
        }
        Insert: {
          checklist_id: string
          created_at?: string
          critical?: boolean
          id?: string
          position?: number
          text: string
        }
        Update: {
          checklist_id?: string
          created_at?: string
          critical?: boolean
          id?: string
          position?: number
          text?: string
        }
        Relationships: [
          {
            foreignKeyName: "clinical_checklist_items_checklist_id_fkey"
            columns: ["checklist_id"]
            isOneToOne: false
            referencedRelation: "clinical_checklists"
            referencedColumns: ["id"]
          },
        ]
      }
      clinical_checklist_responses: {
        Row: {
          checked: boolean
          checked_at: string | null
          execution_id: string
          id: string
          item_id: string
        }
        Insert: {
          checked?: boolean
          checked_at?: string | null
          execution_id: string
          id?: string
          item_id: string
        }
        Update: {
          checked?: boolean
          checked_at?: string | null
          execution_id?: string
          id?: string
          item_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "clinical_checklist_responses_execution_id_fkey"
            columns: ["execution_id"]
            isOneToOne: false
            referencedRelation: "clinical_checklist_executions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "clinical_checklist_responses_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "clinical_checklist_items"
            referencedColumns: ["id"]
          },
        ]
      }
      clinical_checklists: {
        Row: {
          active: boolean
          category: string
          code: string
          created_at: string
          created_by: string | null
          description: string
          id: string
          institution_id: string | null
          is_global: boolean
          title: string
          updated_at: string
        }
        Insert: {
          active?: boolean
          category?: string
          code: string
          created_at?: string
          created_by?: string | null
          description?: string
          id?: string
          institution_id?: string | null
          is_global?: boolean
          title: string
          updated_at?: string
        }
        Update: {
          active?: boolean
          category?: string
          code?: string
          created_at?: string
          created_by?: string | null
          description?: string
          id?: string
          institution_id?: string | null
          is_global?: boolean
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "clinical_checklists_institution_id_fkey"
            columns: ["institution_id"]
            isOneToOne: false
            referencedRelation: "institutions"
            referencedColumns: ["id"]
          },
        ]
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
      error_baselines: {
        Row: {
          baseline_period_end: string
          baseline_period_start: string
          baseline_unit: string
          baseline_value: number
          category: string
          code: string
          created_at: string
          id: string
          label: string
          notes: string
          source: string
        }
        Insert: {
          baseline_period_end: string
          baseline_period_start: string
          baseline_unit?: string
          baseline_value: number
          category?: string
          code: string
          created_at?: string
          id?: string
          label: string
          notes?: string
          source?: string
        }
        Update: {
          baseline_period_end?: string
          baseline_period_start?: string
          baseline_unit?: string
          baseline_value?: number
          category?: string
          code?: string
          created_at?: string
          id?: string
          label?: string
          notes?: string
          source?: string
        }
        Relationships: []
      }
      error_events: {
        Row: {
          baseline_code: string
          category: string
          created_at: string
          description: string
          id: string
          institution_id: string | null
          occurred_at: string
          severity: string
          user_id: string | null
          was_mitigated: boolean
        }
        Insert: {
          baseline_code: string
          category?: string
          created_at?: string
          description?: string
          id?: string
          institution_id?: string | null
          occurred_at?: string
          severity?: string
          user_id?: string | null
          was_mitigated?: boolean
        }
        Update: {
          baseline_code?: string
          category?: string
          created_at?: string
          description?: string
          id?: string
          institution_id?: string | null
          occurred_at?: string
          severity?: string
          user_id?: string | null
          was_mitigated?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "error_events_institution_id_fkey"
            columns: ["institution_id"]
            isOneToOne: false
            referencedRelation: "institutions"
            referencedColumns: ["id"]
          },
        ]
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
      guideline_curation: {
        Row: {
          created_at: string
          current_version: string
          evidence_grade: string
          guideline_code: string
          id: string
          last_review_date: string | null
          next_review_date: string
          notes: string
          responsible_committee: string
          responsible_user: string | null
          source: string
          specialty: string
          status: string
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          current_version?: string
          evidence_grade?: string
          guideline_code: string
          id?: string
          last_review_date?: string | null
          next_review_date: string
          notes?: string
          responsible_committee?: string
          responsible_user?: string | null
          source?: string
          specialty?: string
          status?: string
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          current_version?: string
          evidence_grade?: string
          guideline_code?: string
          id?: string
          last_review_date?: string | null
          next_review_date?: string
          notes?: string
          responsible_committee?: string
          responsible_user?: string | null
          source?: string
          specialty?: string
          status?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      guideline_curation_history: {
        Row: {
          action: string
          actor_id: string
          comment: string
          created_at: string
          from_status: string
          guideline_id: string
          id: string
          to_status: string
          version_after: string
        }
        Insert: {
          action: string
          actor_id: string
          comment?: string
          created_at?: string
          from_status?: string
          guideline_id: string
          id?: string
          to_status?: string
          version_after?: string
        }
        Update: {
          action?: string
          actor_id?: string
          comment?: string
          created_at?: string
          from_status?: string
          guideline_id?: string
          id?: string
          to_status?: string
          version_after?: string
        }
        Relationships: [
          {
            foreignKeyName: "guideline_curation_history_guideline_id_fkey"
            columns: ["guideline_id"]
            isOneToOne: false
            referencedRelation: "guideline_curation"
            referencedColumns: ["id"]
          },
        ]
      }
      institution_members: {
        Row: {
          id: string
          institution_id: string
          joined_at: string
          role: string
          user_id: string
        }
        Insert: {
          id?: string
          institution_id: string
          joined_at?: string
          role?: string
          user_id: string
        }
        Update: {
          id?: string
          institution_id?: string
          joined_at?: string
          role?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "institution_members_institution_id_fkey"
            columns: ["institution_id"]
            isOneToOne: false
            referencedRelation: "institutions"
            referencedColumns: ["id"]
          },
        ]
      }
      institutional_protocols: {
        Row: {
          author_id: string
          category: string
          content: string
          created_at: string
          id: string
          institution_id: string
          status: string
          title: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          author_id: string
          category?: string
          content?: string
          created_at?: string
          id?: string
          institution_id: string
          status?: string
          title: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          author_id?: string
          category?: string
          content?: string
          created_at?: string
          id?: string
          institution_id?: string
          status?: string
          title?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "institutional_protocols_institution_id_fkey"
            columns: ["institution_id"]
            isOneToOne: false
            referencedRelation: "institutions"
            referencedColumns: ["id"]
          },
        ]
      }
      institutions: {
        Row: {
          created_at: string
          created_by: string
          description: string
          id: string
          invite_code: string
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          created_by: string
          description?: string
          id?: string
          invite_code?: string
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          created_by?: string
          description?: string
          id?: string
          invite_code?: string
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      kpi_phase_progress: {
        Row: {
          created_at: string
          id: string
          kpi_code: string
          measured_at: string
          measured_value: number
          notes: string
          phase: string
          sample_size: number
          source: string
        }
        Insert: {
          created_at?: string
          id?: string
          kpi_code: string
          measured_at?: string
          measured_value: number
          notes?: string
          phase: string
          sample_size?: number
          source?: string
        }
        Update: {
          created_at?: string
          id?: string
          kpi_code?: string
          measured_at?: string
          measured_value?: number
          notes?: string
          phase?: string
          sample_size?: number
          source?: string
        }
        Relationships: []
      }
      kpi_phase_targets: {
        Row: {
          active: boolean
          created_at: string
          description: string
          direction: string
          id: string
          kpi_code: string
          kpi_label: string
          phase: string
          target_value: number
          unit: string
          updated_at: string
        }
        Insert: {
          active?: boolean
          created_at?: string
          description?: string
          direction?: string
          id?: string
          kpi_code: string
          kpi_label: string
          phase: string
          target_value: number
          unit?: string
          updated_at?: string
        }
        Update: {
          active?: boolean
          created_at?: string
          description?: string
          direction?: string
          id?: string
          kpi_code?: string
          kpi_label?: string
          phase?: string
          target_value?: number
          unit?: string
          updated_at?: string
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
          neighborhood: string
          phone: string
          provider: string
          registration_number: string
          registration_state: string
          registration_type: string
          specialty: string
          state: string
          street: string
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
          neighborhood?: string
          phone?: string
          provider?: string
          registration_number?: string
          registration_state?: string
          registration_type?: string
          specialty?: string
          state?: string
          street?: string
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
          neighborhood?: string
          phone?: string
          provider?: string
          registration_number?: string
          registration_state?: string
          registration_type?: string
          specialty?: string
          state?: string
          street?: string
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
      rounds_patients: {
        Row: {
          admission_date: string | null
          bed_number: string
          created_at: string
          diagnosis: string
          id: string
          notes: string
          patient_name: string
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          admission_date?: string | null
          bed_number?: string
          created_at?: string
          diagnosis?: string
          id?: string
          notes?: string
          patient_name?: string
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          admission_date?: string | null
          bed_number?: string
          created_at?: string
          diagnosis?: string
          id?: string
          notes?: string
          patient_name?: string
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      rounds_tasks: {
        Row: {
          completed: boolean
          created_at: string
          description: string
          id: string
          patient_id: string
          priority: string
          user_id: string
        }
        Insert: {
          completed?: boolean
          created_at?: string
          description?: string
          id?: string
          patient_id: string
          priority?: string
          user_id: string
        }
        Update: {
          completed?: boolean
          created_at?: string
          description?: string
          id?: string
          patient_id?: string
          priority?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "rounds_tasks_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "rounds_patients"
            referencedColumns: ["id"]
          },
        ]
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
      ttp_events: {
        Row: {
          created_at: string
          id: string
          institution_id: string | null
          is_outlier: boolean
          protocol_id: string
          protocol_opened_at: string
          protocol_title: string
          shift: string
          started_at: string
          trigger_label: string
          trigger_source: string
          ttp_seconds: number
          unit: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          institution_id?: string | null
          is_outlier?: boolean
          protocol_id?: string
          protocol_opened_at?: string
          protocol_title?: string
          shift?: string
          started_at: string
          trigger_label?: string
          trigger_source?: string
          ttp_seconds?: number
          unit?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          institution_id?: string | null
          is_outlier?: boolean
          protocol_id?: string
          protocol_opened_at?: string
          protocol_title?: string
          shift?: string
          started_at?: string
          trigger_label?: string
          trigger_source?: string
          ttp_seconds?: number
          unit?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "ttp_events_institution_id_fkey"
            columns: ["institution_id"]
            isOneToOne: false
            referencedRelation: "institutions"
            referencedColumns: ["id"]
          },
        ]
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
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
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
      create_institution_with_admin: {
        Args: { _description?: string; _name: string }
        Returns: string
      }
      delete_email: {
        Args: { message_id: number; queue_name: string }
        Returns: boolean
      }
      enqueue_email: {
        Args: { payload: Json; queue_name: string }
        Returns: number
      }
      get_institution_role: {
        Args: { _institution_id: string; _user_id: string }
        Returns: string
      }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      is_institution_member: {
        Args: { _institution_id: string; _user_id: string }
        Returns: boolean
      }
      join_institution_by_invite: {
        Args: { _invite_code: string }
        Returns: string
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
      app_role: "admin" | "moderator" | "user"
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
    Enums: {
      app_role: ["admin", "moderator", "user"],
    },
  },
} as const
