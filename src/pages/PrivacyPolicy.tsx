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
            <h2 className="text-base font-semibold text-foreground mb-2">4. Finalidade do Tratamento</h2>
            <p className="mb-2">Os dados são tratados para as seguintes finalidades (Art. 7º, LGPD):</p>
            <ul className="list-disc list-inside space-y-1">
              <li><strong className="text-foreground">Execução do contrato:</strong> fornecer acesso ao Aplicativo e seus recursos.</li>
              <li><strong className="text-foreground">Legítimo interesse:</strong> melhorar a experiência do usuário e personalizar conteúdo.</li>
              <li><strong className="text-foreground">Consentimento:</strong> envio de notificações push e comunicações promocionais.</li>
              <li><strong className="text-foreground">Obrigação legal:</strong> manter registros conforme legislação vigente.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-2">5. Compartilhamento de Dados</h2>
            <p className="mb-2">Seus dados podem ser compartilhados com:</p>
            <ul className="list-disc list-inside space-y-1">
              <li><strong className="text-foreground">Stripe:</strong> processamento de pagamentos (certificado PCI DSS).</li>
              <li><strong className="text-foreground">Provedores de infraestrutura:</strong> hospedagem e banco de dados com servidores seguros.</li>
              <li><strong className="text-foreground">Autoridades legais:</strong> quando exigido por lei ou ordem judicial.</li>
            </ul>
            <p className="mt-2">Não vendemos, alugamos ou comercializamos seus dados pessoais a terceiros.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-2">6. Seus Direitos (Art. 18, LGPD)</h2>
            <p className="mb-2">Você tem direito a:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>✅ Confirmar a existência de tratamento de seus dados.</li>
              <li>✅ Acessar seus dados pessoais.</li>
              <li>✅ Corrigir dados incompletos ou desatualizados.</li>
              <li>✅ Solicitar anonimização ou eliminação de dados desnecessários.</li>
              <li>✅ Portabilidade dos dados a outro fornecedor.</li>
              <li>✅ Revogar consentimento a qualquer momento.</li>
              <li>✅ Solicitar exclusão completa da conta e dados associados.</li>
            </ul>
            <p className="mt-2">Para exercer seus direitos, utilize a seção de perfil no Aplicativo ou entre em contato pelo canal de suporte.</p>
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
