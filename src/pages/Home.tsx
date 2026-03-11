import { useNavigate } from "react-router-dom";
import TopBar from "@/components/TopBar";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Zap, FileText, Pill, GraduationCap, Calculator, Crown, LogOut,
  Lock, ClipboardList, Stethoscope, Baby, Heart, Search,
  BookOpen, Activity, Brain, Syringe, AlertTriangle
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { PremiumBadge } from "@/components/PremiumGate";
import { useState } from "react";

const modules = [
  { label: "Emergência", icon: Zap, path: "/emergency", color: "bg-destructive text-destructive-foreground", premium: true },
  { label: "Modo Plantão", icon: Activity, path: "/duty", color: "bg-destructive/90 text-destructive-foreground", premium: true },
  { label: "Protocolos", icon: FileText, path: "/protocols", color: "", premium: false },
  { label: "Medicações", icon: Pill, path: "/medications", color: "", premium: true },
  { label: "Prescrições", icon: ClipboardList, path: "/prescriptions", color: "", premium: true },
  { label: "Calculadoras", icon: Calculator, path: "/calculators", color: "", premium: true },
  { label: "Diagnóstico", icon: Stethoscope, path: "/diagnosis", color: "", premium: true },
  { label: "Pediatria", icon: Baby, path: "/pediatrics", color: "", premium: true },
  { label: "Obstetrícia", icon: Heart, path: "/obstetrics", color: "", premium: true },
  { label: "Internato", icon: BookOpen, path: "/internship", color: "", premium: true },
  { label: "Neurologia", icon: Brain, path: "/protocols?cat=neurology", color: "", premium: true },
  { label: "Quiz", icon: GraduationCap, path: "/quiz", color: "", premium: true },
];

const emergencyShortcuts = [
  { label: "PCR", path: "/protocols/pcr" },
  { label: "Sepse", path: "/protocols/sepse" },
  { label: "IAM", path: "/protocols/iam" },
  { label: "AVC", path: "/protocols/avc" },
  { label: "Anafilaxia", path: "/protocols/anafilaxia" },
  { label: "Choque", path: "/protocols/choque-hipovolemico" },
  { label: "Intubação", path: "/protocols/iot" },
  { label: "Convulsão", path: "/protocols/convulsao" },
];

export default function Home() {
  const navigate = useNavigate();
  const { user, subscription, signOut } = useAuth();
  const isPremium = subscription.subscribed;
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim().length >= 2) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <>
      <TopBar showBack={false} rightContent={
        <div className="flex items-center gap-1">
          <button onClick={() => navigate("/pricing")} className="p-1.5 rounded-md hover:bg-accent transition-colors text-muted-foreground">
            <Crown size={18} className={isPremium ? "text-primary" : ""} />
          </button>
        </div>
      } />
      <div className="px-4 py-4 max-w-lg mx-auto space-y-5 pb-24">
        {/* Header */}
        <div className="space-y-1">
          <h1 className="font-heading text-2xl font-bold tracking-tight">Pronto Socorro Guide</h1>
          <p className="text-xs text-muted-foreground">Guia rápido para plantão e emergência — Ed. 2026</p>
          {user && (
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-2">
                <p className="text-xs text-muted-foreground truncate max-w-[180px]">{user.email}</p>
                {isPremium && <PremiumBadge />}
              </div>
              <Button variant="ghost" size="sm" onClick={signOut} className="text-xs gap-1 h-7 px-2">
                <LogOut size={12} /> Sair
              </Button>
            </div>
          )}
        </div>

        {/* Search bar */}
        <form onSubmit={(e) => { e.preventDefault(); handleSearch(); }} className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Buscar medicamento, protocolo, doença..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 h-11 text-sm rounded-xl"
          />
        </form>

        {/* Trial / Premium banners */}
        {subscription.isTrial && (
          <Card onClick={() => navigate("/pricing")} className="cursor-pointer border-primary bg-accent/30 hover:bg-accent/50 transition-colors">
            <CardContent className="flex items-center gap-3 p-3">
              <Crown size={20} className="text-primary" />
              <div className="flex-1">
                <p className="font-heading font-semibold text-sm">Teste gratuito — {subscription.trialDaysLeft} {subscription.trialDaysLeft === 1 ? "dia" : "dias"}</p>
                <p className="text-xs text-muted-foreground">Assine para manter acesso completo</p>
              </div>
            </CardContent>
          </Card>
        )}

        {!isPremium && !subscription.isTrial && (
          <Card onClick={() => navigate("/pricing")} className="cursor-pointer border-primary bg-primary/5 hover:bg-primary/10 transition-colors">
            <CardContent className="flex items-center gap-3 p-3">
              <Crown size={20} className="text-primary" />
              <div className="flex-1">
                <p className="font-heading font-semibold text-sm">Assine o Manual Pro</p>
                <p className="text-xs text-muted-foreground">A partir de R$ 12,49/mês</p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Duty Mode CTA */}
        <button
          onClick={() => navigate("/duty")}
          className="w-full flex items-center justify-center gap-3 p-4 rounded-xl bg-destructive text-destructive-foreground font-heading font-bold text-base active:scale-[0.98] transition-transform shadow-lg"
        >
          <AlertTriangle size={22} />
          MODO PLANTÃO
        </button>

        {/* Main Grid */}
        <div className="grid grid-cols-3 gap-2.5">
          {modules.map((m) => (
            <button
              key={m.path}
              onClick={() => navigate(m.path)}
              className={`flex flex-col items-center gap-2 p-4 rounded-xl border border-border transition-all active:scale-[0.96] hover:shadow-md ${
                m.color || "bg-card"
              }`}
            >
              <m.icon size={24} />
              <span className="font-heading font-semibold text-[11px] leading-tight text-center">{m.label}</span>
              {m.premium && !isPremium && (
                <Lock size={10} className="opacity-50" />
              )}
            </button>
          ))}
        </div>

        {/* Emergency shortcuts */}
        <div className="space-y-2.5">
          <h2 className="font-heading font-semibold text-sm flex items-center gap-2">
            <Zap size={14} className="text-destructive" />
            Acesso Rápido — Emergência
          </h2>
          <div className="flex flex-wrap gap-2">
            {emergencyShortcuts.map((s) => (
              <button
                key={s.path}
                onClick={() => navigate(s.path)}
                className="px-3 py-2 rounded-lg border border-destructive/20 bg-destructive/5 hover:bg-destructive/10 active:scale-[0.97] transition-all font-heading font-semibold text-xs"
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
