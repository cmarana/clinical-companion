import { useNavigate } from "react-router-dom";
import TopBar from "@/components/TopBar";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, FileText, Pill, GraduationCap, Stethoscope, Baby, Heart, Syringe, Crown, LogOut, Lock } from "lucide-react";
import { protocolCategories } from "@/data/protocols";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { PremiumBadge } from "@/components/PremiumGate";

const iconMap: Record<string, React.ReactNode> = {
  Zap: <Zap size={22} />,
  Stethoscope: <Stethoscope size={22} />,
  Baby: <Baby size={22} />,
  Heart: <Heart size={22} />,
  Syringe: <Syringe size={22} />,
};

export default function Home() {
  const navigate = useNavigate();
  const { user, subscription, signOut } = useAuth();
  const isPremium = subscription.subscribed;

  const quickActions = [
    { label: "Modo Emergência", icon: <Zap size={24} />, path: "/emergency", accent: true, premium: true },
    { label: "Protocolos", icon: <FileText size={24} />, path: "/protocols", premium: false },
    { label: "Medicamentos", icon: <Pill size={24} />, path: "/medications", premium: false },
    { label: "Quiz", icon: <GraduationCap size={24} />, path: "/quiz", premium: true },
  ];

  return (
    <>
      <TopBar showBack={false} rightContent={
        <button onClick={() => navigate("/pricing")} className="p-1.5 rounded-md hover:bg-accent transition-colors text-muted-foreground">
          <Crown size={18} className={isPremium ? "text-primary" : ""} />
        </button>
      } />
      <div className="px-4 py-5 max-w-lg mx-auto space-y-6 pb-20">
        {/* Hero */}
        <div className="space-y-1">
          <h1 className="font-heading text-2xl font-bold tracking-tight">Manual de Plantão</h1>
          <p className="text-sm text-muted-foreground">Guia de sobrevivência na emergência — Ed. 2026</p>
          {user && (
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-2">
                <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                {isPremium && <PremiumBadge />}
              </div>
              <Button variant="ghost" size="sm" onClick={signOut} className="text-xs gap-1 h-7 px-2">
                <LogOut size={12} /> Sair
              </Button>
            </div>
          )}
        </div>

        {/* Subscription banner */}
        {!isPremium && (
          <Card onClick={() => navigate("/pricing")} className="cursor-pointer border-primary bg-primary/5 hover:bg-primary/10 transition-colors">
            <CardContent className="flex items-center gap-3 p-4">
              <Crown size={20} className="text-primary" />
              <div className="flex-1">
                <p className="font-heading font-semibold text-sm">Assine o Manual Pro</p>
                <p className="text-xs text-muted-foreground">A partir de R$ 12,49/mês — Acesso completo</p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          {quickActions.map((a) => (
            <Card
              key={a.path}
              onClick={() => navigate(a.path)}
              className={`cursor-pointer transition-all hover:shadow-md active:scale-[0.98] ${
                a.accent ? "bg-destructive text-destructive-foreground border-destructive" : ""
              }`}
            >
              <CardContent className="flex items-center gap-3 p-4">
                {a.icon}
                <span className="font-heading font-semibold text-sm flex-1">{a.label}</span>
                {a.premium && !isPremium && (
                  <Lock size={12} className={a.accent ? "text-destructive-foreground/60" : "text-muted-foreground"} />
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Protocol Categories */}
        <div className="space-y-3">
          <h2 className="font-heading font-semibold text-base">Protocolos por Categoria</h2>
          <div className="space-y-2">
            {protocolCategories.map((cat) => (
              <Card
                key={cat.id}
                onClick={() => navigate(`/protocols?cat=${cat.id}`)}
                className="cursor-pointer hover:shadow-sm active:scale-[0.99] transition-all"
              >
                <CardContent className="flex items-center gap-3 p-3.5">
                  <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center text-accent-foreground">
                    {iconMap[cat.icon] || <FileText size={20} />}
                  </div>
                  <div className="flex-1">
                    <p className="font-heading font-semibold text-sm">{cat.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
