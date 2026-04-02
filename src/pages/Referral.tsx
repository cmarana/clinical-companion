import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Copy, Gift, Users, CheckCircle2, Clock, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export default function Referral() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [referrals, setReferrals] = useState<any[]>([]);
  const [loaded, setLoaded] = useState(false);

  const referralCode = user?.id?.slice(0, 8).toUpperCase() || "PULSO";
  const referralLink = `${window.location.origin}/auth?ref=${referralCode}`;

  const loadReferrals = async () => {
    if (!user || loaded) return;
    const { data } = await supabase
      .from("referrals")
      .select("*")
      .eq("referrer_id", user.id)
      .order("created_at", { ascending: false });
    setReferrals(data || []);
    setLoaded(true);
  };

  if (!loaded && user) loadReferrals();

  const handleInvite = async () => {
    if (!user || !email.trim()) return;
    setSending(true);
    try {
      const { error } = await supabase.from("referrals").insert({
        referrer_id: user.id,
        referred_email: email.trim().toLowerCase(),
      });
      if (error) throw error;
      toast.success("Convite registrado!");
      setEmail("");
      setLoaded(false);
    } catch (e: any) {
      toast.error(e.message || "Erro ao enviar convite");
    } finally {
      setSending(false);
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(referralLink);
    toast.success("Link copiado!");
  };

  const shareLink = async () => {
    if (navigator.share) {
      await navigator.share({
        title: "PULSO — Emergência Médica",
        text: "Use o PULSO para protocolos médicos rápidos no plantão! Cadastre-se com meu link:",
        url: referralLink,
      });
    } else {
      copyLink();
    }
  };

  const completedCount = referrals.filter((r) => r.status === "completed" || r.status === "rewarded").length;
  const pendingCount = referrals.filter((r) => r.status === "pending").length;

  return (
    <div className="px-4 pt-4 pb-24 max-w-lg mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <button onClick={() => navigate(-1)} className="p-2 rounded-xl hover:bg-accent text-muted-foreground">
          <ArrowLeft size={18} />
        </button>
        <div>
          <h1 className="font-heading font-bold text-lg">Convide Colegas</h1>
          <p className="text-xs text-muted-foreground">Ganhe 1 mês grátis por indicação</p>
        </div>
      </div>

      {/* Hero Card */}
      <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl p-6 mb-6 border border-primary/20">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-12 w-12 rounded-2xl bg-primary/15 flex items-center justify-center">
            <Gift className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h2 className="font-heading font-bold text-base">1 mês grátis</h2>
            <p className="text-xs text-muted-foreground">para cada colega que assinar</p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Compartilhe seu link com colegas médicos. Quando eles assinarem o PULSO Pro, você ganha 1 mês de acesso premium gratuitamente.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="bg-card rounded-2xl p-4 shadow-sm text-center">
          <CheckCircle2 size={20} className="text-green-500 mx-auto mb-1" />
          <p className="font-heading font-bold text-xl">{completedCount}</p>
          <p className="text-[10px] text-muted-foreground">Confirmados</p>
        </div>
        <div className="bg-card rounded-2xl p-4 shadow-sm text-center">
          <Clock size={20} className="text-amber-500 mx-auto mb-1" />
          <p className="font-heading font-bold text-xl">{pendingCount}</p>
          <p className="text-[10px] text-muted-foreground">Pendentes</p>
        </div>
      </div>

      {/* Share Link */}
      <div className="bg-card rounded-2xl p-4 shadow-sm mb-4">
        <label className="text-xs font-heading font-semibold text-muted-foreground mb-2 block">Seu link de indicação</label>
        <div className="flex gap-2">
          <Input value={referralLink} readOnly className="text-xs font-mono" />
          <Button size="icon" variant="outline" onClick={copyLink}>
            <Copy size={16} />
          </Button>
          <Button size="icon" variant="default" onClick={shareLink}>
            <Share2 size={16} />
          </Button>
        </div>
      </div>

      {/* Invite by Email */}
      <div className="bg-card rounded-2xl p-4 shadow-sm mb-6">
        <label className="text-xs font-heading font-semibold text-muted-foreground mb-2 block">Convidar por e-mail</label>
        <div className="flex gap-2">
          <Input
            type="email"
            placeholder="email@colega.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-sm"
          />
          <Button onClick={handleInvite} disabled={!email.trim() || sending} size="sm">
            {sending ? "..." : "Enviar"}
          </Button>
        </div>
      </div>

      {/* Referral History */}
      {referrals.length > 0 && (
        <div>
          <h3 className="font-heading font-semibold text-sm mb-3 flex items-center gap-2">
            <Users size={16} className="text-primary" /> Histórico
          </h3>
          <div className="space-y-2">
            {referrals.map((r) => (
              <div key={r.id} className="flex items-center justify-between bg-card rounded-xl p-3 shadow-sm">
                <span className="text-sm truncate mr-2">{r.referred_email}</span>
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                  r.status === "completed" || r.status === "rewarded"
                    ? "bg-green-500/10 text-green-600"
                    : "bg-amber-500/10 text-amber-600"
                }`}>
                  {r.status === "pending" ? "Pendente" : r.status === "completed" ? "Confirmado" : "Recompensado"}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
