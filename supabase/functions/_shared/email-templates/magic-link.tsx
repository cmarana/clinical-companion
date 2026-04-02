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

interface MagicLinkEmailProps {
  siteName: string
  confirmationUrl: string
}

export const MagicLinkEmail = ({
  siteName,
  confirmationUrl,
}: MagicLinkEmailProps) => (
  <Html lang="pt-BR" dir="ltr">
    <Head />
    <Preview>Seu link de acesso ao PULSO</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={brand}>PULSO</Text>
        <Heading style={h1}>Seu link de acesso</Heading>
        <Text style={text}>
          Clique no botão abaixo para acessar o PULSO. Este link expira em breve.
        </Text>
        <Button style={button} href={confirmationUrl}>
          Acessar PULSO
        </Button>
        <Text style={footer}>
          Se você não solicitou este link, pode ignorar este email com segurança.
        </Text>
      </Container>
    </Body>
  </Html>
)

export default MagicLinkEmail

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
