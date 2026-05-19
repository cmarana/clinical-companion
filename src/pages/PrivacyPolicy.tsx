import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors">
          <ArrowLeft size={18} />
          <span className="text-sm">Voltar</span>
        </button>

        <h1 className="text-2xl font-bold mb-2">Política de Privacidade</h1>
        <p className="text-xs text-muted-foreground mb-2">Em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018)</p>
        <p className="text-xs text-muted-foreground mb-8">Última atualização: 02 de abril de 2026</p>

        <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-base font-semibold text-foreground mb-2">1. Controlador dos Dados</h2>
            <p>O PULSO é o controlador dos dados pessoais coletados por meio deste Aplicativo, nos termos da LGPD.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-2">2. Dados Coletados</h2>
            <p className="mb-2">Coletamos os seguintes dados pessoais:</p>
            <ul className="list-disc list-inside space-y-1">
              <li><strong className="text-foreground">Dados de cadastro:</strong> nome completo, e-mail, CRM, estado do CRM, especialidade médica.</li>
              <li><strong className="text-foreground">Dados de uso:</strong> protocolos acessados, módulos utilizados, tempo de uso, preferências de configuração.</li>
              <li><strong className="text-foreground">Dados de pagamento:</strong> processados diretamente pelo Stripe; não armazenamos dados de cartão.</li>
              <li><strong className="text-foreground">Dados técnicos:</strong> tipo de dispositivo, sistema operacional, versão do navegador.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-2">3. Dados NÃO Coletados</h2>
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
              <p className="font-medium text-foreground mb-2">🔒 Compromisso com a privacidade:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>O PULSO <strong className="text-foreground">NÃO coleta</strong> dados de pacientes.</li>
                <li>Consultas à IA Clínica <strong className="text-foreground">NÃO são armazenadas</strong> em nossos servidores.</li>
                <li>Gravações de voz são processadas localmente no dispositivo e <strong className="text-foreground">NÃO são enviadas</strong> aos nossos servidores.</li>
                <li>Notas e anotações clínicas são armazenadas de forma criptografada.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-2">4. Bases Legais e Finalidades do Tratamento</h2>
            <p className="mb-2">Tratamos seus dados com fundamento nas seguintes <strong className="text-foreground">bases legais</strong> previstas no Art. 7º da LGPD:</p>
            <ul className="list-disc list-inside space-y-1">
              <li><strong className="text-foreground">Execução de contrato (Art. 7º, V):</strong> criação de conta, autenticação, fornecimento dos recursos do Aplicativo e processamento de pagamentos.</li>
              <li><strong className="text-foreground">Legítimo interesse (Art. 7º, IX):</strong> métricas de uso anonimizadas, prevenção a fraude, segurança da plataforma e melhoria contínua do produto.</li>
              <li><strong className="text-foreground">Consentimento (Art. 7º, I):</strong> envio de notificações push, e-mails de marketing e participação em pesquisas. Pode ser revogado a qualquer momento em Perfil → Notificações.</li>
              <li><strong className="text-foreground">Cumprimento de obrigação legal (Art. 7º, II):</strong> guarda de registros fiscais, contábeis e atendimento a requisições de autoridades competentes.</li>
              <li><strong className="text-foreground">Proteção ao crédito (Art. 7º, X):</strong> análise antifraude no processamento de assinaturas.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-2">5. Uso de Inteligência Artificial</h2>
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 space-y-2">
              <p className="font-medium text-foreground">🤖 Como a IA trata seus dados:</p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong className="text-foreground">IA Clínica:</strong> consultas são enviadas a provedores de modelos (Google Gemini) via gateway seguro. <strong className="text-foreground">Não armazenamos</strong> o conteúdo das consultas em nossos servidores.</li>
                <li><strong className="text-foreground">Suporte com IA:</strong> mensagens enviadas ao chat de suporte são processadas por IA generativa para gerar a primeira resposta. Mensagens podem ser registradas para auditoria e melhoria do atendimento.</li>
                <li>Não usamos seus dados pessoais para <strong className="text-foreground">treinar modelos de IA de terceiros</strong>. Os provedores contratados não retêm os prompts.</li>
                <li>Você não deve inserir dados identificáveis de pacientes em nenhuma interação com IA.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-2">6. Compartilhamento de Dados</h2>
            <p className="mb-2">Seus dados podem ser compartilhados com:</p>
            <ul className="list-disc list-inside space-y-1">
              <li><strong className="text-foreground">Stripe:</strong> processamento de pagamentos (certificado PCI DSS).</li>
              <li><strong className="text-foreground">Provedores de infraestrutura:</strong> hospedagem (Supabase, Vercel) e banco de dados com servidores seguros.</li>
              <li><strong className="text-foreground">Provedores de IA:</strong> Google (Gemini) para IA Clínica e suporte, via gateway seguro.</li>
              <li><strong className="text-foreground">Autoridades legais:</strong> quando exigido por lei ou ordem judicial.</li>
            </ul>
            <p className="mt-2">Não vendemos, alugamos ou comercializamos seus dados pessoais a terceiros.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-2">7. Seus Direitos (Art. 18, LGPD)</h2>
            <p className="mb-2">Como titular dos dados, você tem direito a:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>✅ Confirmar a existência de tratamento.</li>
              <li>✅ Acessar e obter cópia dos seus dados.</li>
              <li>✅ Corrigir dados incompletos, inexatos ou desatualizados.</li>
              <li>✅ Solicitar anonimização, bloqueio ou eliminação de dados desnecessários.</li>
              <li>✅ <strong className="text-foreground">Portabilidade</strong> dos dados a outro fornecedor.</li>
              <li>✅ Revogar consentimento a qualquer momento.</li>
              <li>✅ Solicitar <strong className="text-foreground">exclusão completa</strong> da conta e dados associados.</li>
              <li>✅ Obter informações sobre uso compartilhado dos seus dados.</li>
            </ul>

            <div className="mt-4 bg-muted/40 border border-border rounded-lg p-4 space-y-2">
              <p className="font-medium text-foreground">📩 Como exercer seus direitos:</p>
              <ol className="list-decimal list-inside space-y-1">
                <li><strong className="text-foreground">Auto-atendimento:</strong> em <em>Perfil → Privacidade</em> você pode baixar seus dados (portabilidade) e excluir sua conta diretamente.</li>
                <li><strong className="text-foreground">WhatsApp:</strong> <a href="https://wa.me/message/ZTQKMSJFBHPWG1" target="_blank" rel="noopener noreferrer" className="text-primary underline">fale com o suporte</a> usando o assunto <em>"Exclusão LGPD"</em> ou <em>"Portabilidade LGPD"</em>.</li>
                <li><strong className="text-foreground">E-mail:</strong> envie para <em>privacidade@pulsoemergencia.com.br</em> com cópia do documento de identidade.</li>
              </ol>
              <p className="text-xs">Respondemos solicitações em até <strong className="text-foreground">15 dias úteis</strong>, conforme Art. 19 da LGPD. Exclusão completa ocorre em até 30 dias após confirmação.</p>
            </div>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-2">7. Segurança dos Dados</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Comunicação criptografada via HTTPS/TLS.</li>
              <li>Autenticação segura com tokens JWT.</li>
              <li>Políticas de segurança em nível de linha (RLS) no banco de dados.</li>
              <li>Dados de pagamento processados em ambiente PCI DSS.</li>
              <li>Dados offline armazenados localmente com cache do Service Worker.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-2">8. Retenção de Dados</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Dados de conta: mantidos enquanto a conta estiver ativa.</li>
              <li>Dados de uso/analytics: retidos por até 12 meses.</li>
              <li>Dados de pagamento: conforme obrigação fiscal (5 anos).</li>
              <li>Após exclusão da conta, dados são removidos em até 30 dias.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-2">9. Cookies e Tecnologias Similares</h2>
            <p>Utilizamos armazenamento local (localStorage/sessionStorage) para preferências do usuário e dados de sessão. Não utilizamos cookies de rastreamento de terceiros.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-2">10. Transferência Internacional</h2>
            <p>Alguns dados podem ser processados em servidores fora do Brasil, sempre em conformidade com o Art. 33 da LGPD, utilizando provedores que garantem nível adequado de proteção.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-2">11. Alterações nesta Política</h2>
            <p>Alterações serão comunicadas por notificação no Aplicativo com antecedência mínima de 15 dias antes de entrarem em vigor.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-2">12. Encarregado de Dados (DPO)</h2>
            <p>Para questões relacionadas à proteção de dados pessoais, entre em contato com nosso Encarregado de Dados pelo canal de suporte disponível no Aplicativo.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
