import { Link } from "react-router-dom";
import { Lock, Sparkles, ArrowRight, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { PulsoLogo } from "@/components/PulsoLogo";

export default function ComingSoon() {
  const { user } = useAuth();
  return (
    <div className="min-h-screen bg-[#0A0F1F] text-slate-100 flex flex-col items-center justify-center px-6 text-center">
      <PulsoLogo size={36} forceVariant="dark" className="mb-8 opacity-90" priority />
      <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
        <Sparkles className="h-3.5 w-3.5" /> Pré-lançamento
      </div>
      <h1 className="mt-5 text-3xl sm:text-4xl font-semibold tracking-tight max-w-xl">
        O acesso ao app será liberado em breve.
      </h1>
      <p className="mt-4 text-slate-300 max-w-md">
        O PULSO está em fase final de preparação. Seu cadastro está confirmado — você será avisado(a)
        assim que o acesso for liberado.
      </p>
      <div className="mt-8 flex flex-wrap gap-3 justify-center">
        <Button asChild className="bg-primary hover:bg-primary text-[#0A0F1F] font-semibold rounded-full">
          <Link to="/">Voltar à página inicial <ArrowRight className="h-4 w-4" /></Link>
        </Button>
        {user && (
          <Button
            variant="outline" onClick={() => supabase.auth.signOut()}
            className="rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            <LogOut className="h-4 w-4" /> Sair
          </Button>
        )}
      </div>
      <p className="mt-10 text-[11px] text-slate-500 inline-flex items-center gap-1.5">
        <Lock className="h-3 w-3" /> Acesso temporariamente restrito a equipe e usuários de teste.
      </p>
    </div>
  );
}
