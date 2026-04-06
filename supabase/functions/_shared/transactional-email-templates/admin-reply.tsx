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
  Hr,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'PULSO'

interface AdminReplyProps {
  replyMessage?: string
  originalMessage?: string
  originalType?: string
}

const typeLabels: Record<string, string> = {
  bug: 'reporte de bug',
  suggestion: 'sugestão',
  support: 'mensagem de suporte',
  other: 'mensagem',
}

const AdminReplyEmail = ({ replyMessage, originalMessage, originalType }: AdminReplyProps) => (
  <Html lang="pt-BR" dir="ltr">
    <Head />
    <Preview>Resposta da equipe PULSO</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={brand}>{SITE_NAME}</Text>
        <Heading style={h1}>Resposta ao seu {originalType ? typeLabels[originalType] || 'feedback' : 'feedback'}</Heading>
        <Text style={text}>{replyMessage || 'Obrigado pelo contato.'}</Text>
        {originalMessage && (
          <>
            <Hr style={divider} />
            <Text style={quoteLabel}>Sua mensagem original:</Text>
            <Text style={quote}>{originalMessage}</Text>
          </>
        )}
        <Text style={footer}>Equipe {SITE_NAME}</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: AdminReplyEmail,
  subject: 'Resposta ao seu feedback — PULSO',
  displayName: 'Resposta do admin',
  previewData: { replyMessage: 'Obrigado pelo feedback! Já corrigimos o problema.', originalMessage: 'O botão X não funciona', originalType: 'bug' },
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
  color: '#334155',
  lineHeight: '1.6',
  margin: '0 0 25px',
}
const divider = { borderColor: '#e2e8f0', margin: '20px 0' }
const quoteLabel = { fontSize: '12px', color: '#94a3b8', margin: '0 0 8px' }
const quote = {
  fontSize: '13px',
  color: '#64748b',
  lineHeight: '1.5',
  margin: '0 0 20px',
  padding: '12px',
  backgroundColor: '#f8fafc',
  borderLeft: '3px solid #e2e8f0',
  borderRadius: '4px',
}
const footer = { fontSize: '12px', color: '#999999', margin: '30px 0 0' }
