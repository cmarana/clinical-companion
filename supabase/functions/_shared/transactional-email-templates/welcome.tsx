/// <reference types="npm:@types/react@18.3.1" />

import * as React from 'npm:react@18.3.1'

import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'PULSO'
const SITE_URL = 'https://pulsoemergencia.com.br'

interface WelcomeEmailProps {
  name?: string
}

const WelcomeEmail = ({ name }: WelcomeEmailProps) => (
  <Html lang="pt-BR" dir="ltr">
    <Head />
    <Preview>Bem-vindo ao PULSO — sua referência médica de emergência</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={brand}>{SITE_NAME}</Text>
        <Heading style={h1}>
          {name ? `Bem-vindo, ${name}!` : 'Bem-vindo ao PULSO!'}
        </Heading>
        <Text style={text}>
          Sua conta foi criada com sucesso. O PULSO é a sua referência rápida
          para protocolos médicos, calculadoras clínicas, bulário e muito mais.
        </Text>
        <Text style={text}>
          Explore os recursos disponíveis e comece a usar agora:
        </Text>
        <Button style={button} href={SITE_URL}>
          Acessar o PULSO
        </Button>
        <Text style={footer}>Equipe {SITE_NAME}</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: WelcomeEmail,
  subject: 'Bem-vindo ao PULSO! 🩺',
  displayName: 'Email de boas-vindas',
  previewData: { name: 'Dr. João' },
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
const button = {
  backgroundColor: '#0a6dd9',
  color: '#ffffff',
  fontSize: '14px',
  borderRadius: '8px',
  padding: '12px 20px',
  textDecoration: 'none',
}
const footer = { fontSize: '12px', color: '#999999', margin: '30px 0 0' }
