import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Search, ChevronDown, Mail, MessageCircle, HelpCircle, CreditCard, Shield, Bot, Wifi, User, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Category = {
  id: string;
  label: string;
  icon: typeof HelpCircle;
};

type FAQ = {
  category: string;
  q: string;
  a: string;
};

const CATEGORIES: Category[] = [
  { id: "all", label: "Todos", icon: HelpCircle },
  { id: "account", label: "Conta & Perfil", icon: User },
  { id: "billing", label: "Assinatura & Pagamento", icon: CreditCard },
  { id: "ai", label: "IA Clínica", icon: Bot },
  { id: "offline", label: "Offline & App", icon: Wifi },
  { id: "privacy", label: "Privacidade & LGPD", icon: Shield },
  { id: "content", label: "Conteúdo Clínico", icon: FileText },
];

const FAQS: FAQ[] = [
  // Account
  { category: "account", q: "Como altero meus dados de cadastro?", a: "Acesse **Perfil** no menu lateral. Você pode atualizar nome, CRM, especialidade, telefone e foto. Alterações são salvas automaticamente." },
  { category: "account", q: "Esqueci minha senha. O que faço?", a: "Na tela de login, clique em **Esqueci minha senha**. Enviaremos um link de redefinição para seu e-mail cadastrado." },
  { category: "account", q: "Como excluo minha conta?", a: "Vá em **Perfil → Excluir conta**, ou solicite por e-mail/WhatsApp. A exclusão é completa e dados são removidos em até 30 dias, conforme LGPD." },
  { category: "account", q: "Posso usar a mesma conta em vários dispositivos?", a: "Sim. Sua assinatura é vinculada à conta e funciona em smartphone, tablet e desktop simultaneamente." },

  // Billing
  { category: "billing", q: "Como funciona o período de teste gratuito?", a: "Você tem **7 dias** para testar todos os recursos Pro. Não cobramos nada durante o teste e você pode cancelar antes do fim sem qualquer custo." },
  { category: "billing", q: "Como cancelo minha assinatura?", a: "Acesse **Perfil → Gerenciar assinatura**. O cancelamento é imediato e mantém o acesso até o fim do período já pago. Não há reembolso proporcional." },
  { category: "billing", q: "Quais formas de pagamento são aceitas?", a: "Aceitamos **cartão de crédito** (renovação automática) com cobrança processada pela Stripe (PCI DSS). Não armazenamos dados do cartão." },
  { category: "billing", q: "A cobrança falhou. O que faço?", a: "Verifique limite e validade do cartão em **Perfil → Assinatura**. Após atualização, a próxima tentativa ocorre automaticamente em 24h." },
  { category: "billing", q: "Posso pedir reembolso?", a: "Reembolsos seguem o Código de Defesa do Consumidor: arrependimento em até 7 dias após a primeira cobrança. Solicite pelo WhatsApp ou e-mail de suporte." },

  // AI
  { category: "ai", q: "Como uso a IA Clínica?", a: "No menu, acesse **IA Clínica**. Descreva o caso ou cole achados; a IA sugere diagnósticos diferenciais, condutas e referências. Sempre revise criticamente." },
  { category: "ai", q: "A IA substitui o julgamento médico?", a: "**Não.** A IA é ferramenta de apoio à decisão. Toda conduta deve ser individualizada pelo profissional após avaliação direta do paciente." },
  { category: "ai", q: "Minhas consultas à IA são armazenadas?", a: "Não armazenamos o conteúdo das suas consultas clínicas. Apenas métricas anonimizadas de uso (quantidade, latência) são guardadas para melhorar o serviço." },
  { category: "ai", q: "Posso enviar imagens (raio-X, ECG) para análise?", a: "Sim, na aba **Visão** da IA Clínica. Não envie imagens com dados identificáveis do paciente — remova etiquetas antes." },

  // Offline
  { category: "offline", q: "O app funciona offline?", a: "Sim. Após o primeiro acesso, protocolos, bulário e calculadoras ficam disponíveis offline. IA Clínica e sincronização exigem internet." },
  { category: "offline", q: "Como instalo o PULSO no celular?", a: "**Android:** abra no Chrome → menu → *Instalar app*. **iOS:** abra no Safari → compartilhar → *Adicionar à Tela de Início*." },
  { category: "offline", q: "Quanto de espaço o app usa?", a: "Cache padrão: ~18 MB. Você pode escolher quais módulos baixar em **Perfil → Modo Offline**." },

  // Privacy
  { category: "privacy", q: "Quais dados vocês coletam de mim?", a: "Apenas dados de cadastro (nome, e-mail, CRM, especialidade), uso (módulos acessados) e técnicos (dispositivo). **Não coletamos dados de pacientes.**" },
  { category: "privacy", q: "Como solicito exclusão ou portabilidade dos meus dados?", a: "Envie pedido pelo **WhatsApp** ou e-mail de suporte com o assunto *Exclusão LGPD* ou *Portabilidade LGPD*. Atendemos em até 15 dias úteis, conforme Art. 19 da LGPD." },
  { category: "privacy", q: "Quais as bases legais do tratamento dos meus dados?", a: "**Execução de contrato** (acesso ao serviço), **legítimo interesse** (melhoria do produto), **consentimento** (notificações/marketing) e **obrigação legal** (registros fiscais). Detalhes na Política de Privacidade." },
  { category: "privacy", q: "Vocês compartilham meus dados?", a: "Apenas com **Stripe** (pagamento), provedor de **infraestrutura** (hospedagem) e autoridades quando exigido por lei. Não vendemos dados a terceiros." },

  // Content
  { category: "content", q: "Os protocolos são atualizados com qual frequência?", a: "Conteúdo é revisado continuamente com base em diretrizes nacionais (SBC, SBP, MS) e internacionais (AHA, ESC, UpToDate). Veja a data de atualização em cada protocolo." },
  { category: "content", q: "Posso sugerir um protocolo ou correção?", a: "Sim! Use o botão **Feedback** dentro do app ou fale com a gente pelo WhatsApp. Toda sugestão é avaliada pela equipe clínica." },
  { category: "content", q: "Posso usar o conteúdo do PULSO em aulas?", a: "Para uso educacional não comercial, entre em contato solicitando autorização. Reprodução comercial sem autorização é vedada." },
];

const WHATSAPP_URL = "https://wa.me/message/ZTQKMSJFBHPWG1";

export default function HelpCenter() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState("all");
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return FAQS.filter(f => {
      if (activeCat !== "all" && f.category !== activeCat) return false;
      if (!q) return true;
      return f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q);
    });
  }, [query, activeCat]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors">
          <ArrowLeft size={18} />
          <span className="text-sm">Voltar</span>
        </button>

        <header className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold mb-1">Central de Ajuda</h1>
          <p className="text-sm text-muted-foreground">Encontre respostas rápidas. Se não achar, fale com a gente.</p>
        </header>

        {/* Search */}
        <div className="relative mb-4">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Buscar (ex.: cancelar, IA, offline...)"
            className="w-full pl-10 pr-3 py-3 rounded-xl bg-muted/40 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
        </div>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-6 -mx-4 px-4 scrollbar-hide">
          {CATEGORIES.map(c => {
            const Icon = c.icon;
            const active = activeCat === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setActiveCat(c.id)}
                className={`shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold border transition-colors ${
                  active
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-foreground border-border hover:bg-muted"
                }`}
              >
                <Icon size={13} />
                {c.label}
              </button>
            );
          })}
        </div>

        {/* FAQ list */}
        <div className="space-y-2 mb-8">
          {filtered.length === 0 ? (
            <div className="text-center py-10 text-sm text-muted-foreground">
              Nenhuma pergunta encontrada. Fale com a gente abaixo.
            </div>
          ) : (
            filtered.map((f, i) => {
              const id = `${f.category}-${i}`;
              const open = openId === id;
              return (
                <div key={id} className="border border-border rounded-xl bg-card overflow-hidden">
                  <button
                    onClick={() => setOpenId(open ? null : id)}
                    className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left hover:bg-muted/40 transition-colors"
                  >
                    <span className="text-sm font-medium text-foreground">{f.q}</span>
                    <ChevronDown size={16} className={`text-muted-foreground shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                          {f.a.split(/\*\*(.+?)\*\*/g).map((part, idx) =>
                            idx % 2 === 1
                              ? <strong key={idx} className="text-foreground">{part}</strong>
                              : <span key={idx}>{part}</span>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          )}
        </div>

        {/* Contact shortcuts */}
        <section className="rounded-2xl border border-border bg-card p-5">
          <h2 className="font-heading font-bold text-base mb-1">Não resolveu sua dúvida?</h2>
          <p className="text-xs text-muted-foreground mb-4">Antes de contatar, nossa IA tenta responder pelo botão de suporte no canto da tela. Se preferir falar direto:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold py-3 text-sm transition-colors"
            >
              <MessageCircle size={16} />
              Falar pelo WhatsApp
            </a>
            <a
              href="mailto:suporte@pulsoemergencia.com.br"
              className="flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 text-sm transition-colors"
            >
              <Mail size={16} />
              Enviar e-mail
            </a>
          </div>
          <div className="mt-4 flex flex-wrap gap-3 text-xs text-muted-foreground">
            <button onClick={() => navigate("/terms")} className="underline hover:text-foreground">Termos de Uso</button>
            <button onClick={() => navigate("/privacy")} className="underline hover:text-foreground">Política de Privacidade</button>
          </div>
        </section>
      </div>
    </div>
  );
}
