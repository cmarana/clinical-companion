/// <reference types="npm:@types/react@18.3.1" />

import * as React from 'npm:react@18.3.1'

import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'PULSO'

interface TwoFactorCodeProps {
  code?: string
  purpose?: 'enable' | 'login'
  expiresInMinutes?: number
  userAgent?: string
}

const TwoFactorCode = ({ code = '000000', purpose = 'login', expiresInMinutes = 10, userAgent }: TwoFactorCodeProps) => {
  const title =
    purpose === 'enable'
      ? 'Confirme a ativação do segundo fator'
      : 'Seu código de verificação'
  const intro =
    purpose === 'enable'
      ? 'Para ativar a autenticação em dois fatores na sua conta PULSO, use o código abaixo. Após confirmar, todo novo login pedirá um código enviado para este e-mail.'
      : 'Detectamos uma tentativa de login na sua conta PULSO. Use o código abaixo para concluir o acesso.'

  return (
    <Html lang="pt-BR" dir="ltr">
      <Head />
      <Preview>Seu código PULSO: {code} (válido por {expiresInMinutes} min)</Preview>
      <Body style={main}>
        <Container style={container}>
          <Text style={brand}>{SITE_NAME}</Text>
          <Heading style={h1}>{title}</Heading>
          <Text style={text}>{intro}</Text>

          <Section style={codeBox}>
            <Text style={codeText}>{code}</Text>
          </Section>

          <Text style={small}>
            Este código expira em <strong>{expiresInMinutes} minutos</strong> e só pode ser usado uma vez.
          </Text>

          <Text style={warning}>
            Se você não solicitou este código, ignore este e-mail e troque sua senha imediatamente.
            Ninguém da equipe PULSO pedirá seu código por telefone, e-mail ou WhatsApp.
          </Text>

          {userAgent && (
            <Text style={meta}>Solicitado por: {userAgent}</Text>
          )}

          <Text style={footer}>Equipe {SITE_NAME} · pulsoemergencia.com.br</Text>
        </Container>
      </Body>
    </Html>
  )
}

export const template = {
  component: TwoFactorCode,
  subject: (data: Record<string, any>) =>
    `Seu código PULSO: ${data?.code ?? '------'}`,
  displayName: 'Código de verificação 2FA',
  previewData: { code: '482915', purpose: 'login', expiresInMinutes: 10 },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Inter, Arial, sans-serif' }
const container = { padding: '32px 28px', maxWidth: '480px' }
const brand = {
  fontSize: '28px',
  fontWeight: 'bold' as const,
  color: '#0a6dd9',
  margin: '0 0 24px',
  letterSpacing: '-0.5px',
}
const h1 = {
  fontSize: '20px',
  fontWeight: 'bold' as const,
  color: '#1e293b',
  margin: '0 0 16px',
}
const text = {
  fontSize: '14px',
  color: '#475569',
  lineHeight: '1.6',
  margin: '0 0 24px',
}
const codeBox = {
  backgroundColor: '#f1f5f9',
  border: '2px solid #0a6dd9',
  borderRadius: '12px',
  padding: '20px',
  textAlign: 'center' as const,
  margin: '0 0 20px',
}
const codeText = {
  fontSize: '36px',
  fontWeight: 'bold' as const,
  color: '#0a6dd9',
  letterSpacing: '10px',
  margin: 0,
  fontFamily: 'Menlo, Consolas, monospace',
}
const small = {
  fontSize: '13px',
  color: '#64748b',
  lineHeight: '1.5',
  margin: '0 0 20px',
}
const warning = {
  fontSize: '12px',
  color: '#b45309',
  backgroundColor: '#fef3c7',
  borderRadius: '8px',
  padding: '12px 14px',
  lineHeight: '1.5',
  margin: '0 0 16px',
}
const meta = { fontSize: '11px', color: '#94a3b8', margin: '0 0 12px' }
const footer = { fontSize: '12px', color: '#94a3b8', margin: '24px 0 0' }
