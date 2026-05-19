import { Link } from "react-router-dom";
import { Lock, Sparkles, ArrowRight, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { PulsoLogo } from "@/components/PulsoLogo";

export default function ComingSoon() {
  const { user } = useAuth();
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-6 text-center">
      <PulsoLogo size={36} forceVariant="dark" className="mb-8 opacity-90" priority />
      <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
        <Sparkles className="h-3.5 w-3.5" /> Pré-lançamento
      </div>
      <h1 className="mt-5 text-3xl sm:text-4xl font-bold tracking-tight max-w-xl text-foreground">
        O acesso ao app será liberado em breve.
      </h1>
      <p className="mt-4 text-base text-muted-foreground max-w-md leading-relaxed">
        O PULSO está em fase final de preparação. Seu cadastro está confirmado — avisaremos você
        assim que o acesso for liberado.
      </p>
      <div className="mt-8 flex flex-wrap gap-3 justify-center">
        <Button asChild className="font-semibold rounded-full gap-2 min-w-[13rem]">
          <Link to="/">Voltar à página inicial <ArrowRight className="h-4 w-4" /></Link>
        </Button>
        {user && (
          <Button
            variant="outline" onClick={() => supabase.auth.signOut()}
            className="rounded-full gap-2"
          >
            <LogOut className="h-4 w-4" /> Sair
          </Button>
        )}
      </div>
      <p className="mt-10 text-xs text-muted-foreground inline-flex items-center gap-1.5">
        <Lock className="h-3 w-3" /> Acesso temporariamente restrito à equipe e usuários de teste.
      </p>
    </div>
  );
}
