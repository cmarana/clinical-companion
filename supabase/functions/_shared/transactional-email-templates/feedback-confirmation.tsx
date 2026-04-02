/// <reference types="npm:@types/react@18.3.1" />

import * as React from 'npm:react@18.3.1'

import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'PULSO'

interface FeedbackConfirmationProps {
  type?: string
}

const typeLabels: Record<string, string> = {
  bug: 'reporte de bug',
  suggestion: 'sugestão',
  other: 'mensagem',
}

const FeedbackConfirmationEmail = ({ type }: FeedbackConfirmationProps) => (
  <Html lang="pt-BR" dir="ltr">
    <Head />
    <Preview>Recebemos seu feedback — obrigado!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={brand}>{SITE_NAME}</Text>
        <Heading style={h1}>Feedback recebido!</Heading>
        <Text style={text}>
          Obrigado por enviar {type ? `seu ${typeLabels[type] || 'feedback'}` : 'seu feedback'} para o {SITE_NAME}.
          Cada mensagem nos ajuda a melhorar a plataforma para todos os profissionais de saúde.
        </Text>
        <Text style={text}>
          Nossa equipe irá analisar sua mensagem e, se necessário, entraremos em contato.
        </Text>
        <Text style={footer}>Equipe {SITE_NAME}</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: FeedbackConfirmationEmail,
  subject: 'Recebemos seu feedback — obrigado!',
  displayName: 'Confirmação de feedback',
  previewData: { type: 'suggestion' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Inter, Arial, sans-serif' }
const container = { padding: '20px 25px' }
const brand = {
  fontSize: '28px',
  fontWeight: 'bold' as const,
  color: '#0a6dd9',
  margin: '0 0 24px',
  letterSpacing: '-0.5px',
}
const h1 = {
  fontSize: '22px',
  fontWeight: 'bold' as const,
  color: '#1e293b',
  margin: '0 0 20px',
}
const text = {
  fontSize: '14px',
  color: '#64748b',
  lineHeight: '1.5',
  margin: '0 0 25px',
}
const footer = { fontSize: '12px', color: '#999999', margin: '30px 0 0' }
