import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function TermsOfUse() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors">
          <ArrowLeft size={18} />
          <span className="text-sm">Voltar</span>
        </button>

        <h1 className="text-2xl font-bold mb-2">Termos de Uso</h1>
        <p className="text-xs text-muted-foreground mb-8">Última atualização: 02 de abril de 2026</p>

        <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-base font-semibold text-foreground mb-2">1. Aceitação dos Termos</h2>
            <p>Ao acessar e utilizar o aplicativo PULSO ("Aplicativo"), você concorda integralmente com estes Termos de Uso. Caso não concorde, interrompa o uso imediatamente.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-2">2. Descrição do Serviço</h2>
            <p>O PULSO é uma ferramenta digital de <strong className="text-foreground">apoio à decisão clínica</strong> destinada exclusivamente a profissionais de saúde habilitados. O Aplicativo fornece protocolos médicos, calculadoras clínicas, guias de medicamentos, prescrições-modelo e inteligência artificial para consulta rápida durante a prática clínica.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-2">3. Isenção de Responsabilidade Médica</h2>
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 space-y-2">
              <p className="font-medium text-foreground">⚠️ AVISO IMPORTANTE:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>O PULSO <strong className="text-foreground">NÃO substitui</strong> o julgamento médico profissional.</li>
                <li>As informações fornecidas são de caráter orientativo e educacional.</li>
                <li>Toda conduta clínica deve ser individualizada conforme avaliação do paciente.</li>
                <li>O uso das informações é de <strong className="text-foreground">inteira responsabilidade do profissional</strong>.</li>
                <li>Não nos responsabilizamos por decisões clínicas baseadas exclusivamente no conteúdo do Aplicativo.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-2">4. Cadastro e Conta</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>O uso do Aplicativo requer cadastro com dados verídicos.</li>
              <li>Você é responsável por manter a confidencialidade de suas credenciais.</li>
              <li>Reservamo-nos o direito de suspender contas com uso indevido.</li>
              <li>Menores de 18 anos não devem utilizar o Aplicativo.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-2">5. Planos e Pagamentos</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>O Aplicativo oferece modalidade gratuita (Freemium) com acesso limitado e assinatura Premium.</li>
              <li>Assinaturas por cartão/boleto são renovadas automaticamente; PIX requer renovação manual.</li>
              <li>O período de teste gratuito (7 dias) inicia na data do cadastro.</li>
              <li>Cancelamentos podem ser realizados a qualquer momento pelo perfil do usuário.</li>
              <li>Não há reembolso proporcional para períodos parciais.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-2">6. Propriedade Intelectual</h2>
            <p>Todo o conteúdo do Aplicativo — incluindo textos, protocolos, algoritmos, design, marca e código — é protegido por direitos autorais. É vedada a reprodução, distribuição ou modificação sem autorização expressa.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-2">7. Uso Aceitável</h2>
            <p>É proibido:</p>
            <ul className="list-disc list-inside space-y-1 mt-1">
              <li>Compartilhar credenciais de acesso com terceiros.</li>
              <li>Utilizar o Aplicativo para fins ilegais ou antiéticos.</li>
              <li>Tentar acessar sistemas, dados ou funcionalidades não autorizadas.</li>
              <li>Copiar ou revender conteúdo do Aplicativo.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-2">8. Disponibilidade</h2>
            <p>Não garantimos disponibilidade ininterrupta do serviço. Manutenções programadas ou problemas técnicos podem causar indisponibilidade temporária. O modo offline permite acesso a conteúdo previamente salvo.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-2">9. Alterações nos Termos</h2>
            <p>Reservamo-nos o direito de modificar estes Termos a qualquer momento. Alterações significativas serão comunicadas por notificação no Aplicativo. O uso continuado após alterações constitui aceitação dos novos termos.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-2">10. Foro e Legislação</h2>
            <p>Estes Termos são regidos pela legislação brasileira. Fica eleito o foro da comarca do domicílio do responsável pelo Aplicativo para dirimir quaisquer controvérsias.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-2">11. Contato</h2>
            <p>Para dúvidas sobre estes Termos, entre em contato pelo e-mail disponível na seção de Suporte do Aplicativo.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
