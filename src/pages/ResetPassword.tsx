import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Moon, Sun, Eclipse } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useTheme } from "@/contexts/ThemeContext";
import { hapticLight } from "@/lib/haptics";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [ready, setReady] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "oled" ? <Eclipse size={18} /> : theme === "dark" ? <Sun size={18} /> : <Moon size={18} />;

  useEffect(() => {
    const hash = window.location.hash;
    if (hash.includes("type=recovery")) {
      setReady(true);
    }
  }, []);

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await supabase.auth.updateUser({ password });
      if (error) throw error;
      toast({ title: "Senha atualizada!", description: "Você já pode fazer login com a nova senha." });
      navigate("/");
    } catch (err: any) {
      toast({ title: "Erro", description: err.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  if (!ready) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-4">
        <button
          onClick={() => {
            hapticLight();
            toggleTheme();
          }}
          aria-label="Alternar tema"
          className="fixed top-3 right-3 z-[95] rounded-2xl border border-border bg-card/95 p-2.5 text-muted-foreground shadow-lg backdrop-blur-md transition-colors hover:bg-accent hover:text-foreground"
        >
          {themeIcon}
        </button>
        <Card className="w-full max-w-sm">
          <CardContent className="p-6 text-center text-muted-foreground">
            Link inválido ou expirado. Solicite um novo link de redefinição.
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <button
        onClick={() => {
          hapticLight();
          toggleTheme();
        }}
        aria-label="Alternar tema"
        className="fixed top-3 right-3 z-[95] rounded-2xl border border-border bg-card/95 p-2.5 text-muted-foreground shadow-lg backdrop-blur-md transition-colors hover:bg-accent hover:text-foreground"
      >
        {themeIcon}
      </button>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="font-heading text-lg">Nova senha</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleReset} className="space-y-4">
            <Input
              type="password"
              placeholder="Nova senha (mínimo 6 caracteres)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
            />
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Aguarde..." : "Atualizar senha"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
