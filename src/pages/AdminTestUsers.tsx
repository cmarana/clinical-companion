import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Loader2, Shield, KeyRound, Download, Copy, AlertTriangle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface CreatedAccount {
  email: string;
  password: string;
  status: string;
  user_id?: string;
  error?: string;
}

export default function AdminTestUsers() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [authorized, setAuthorized] = useState(false);
  const [checking, setChecking] = useState(true);
  const [count, setCount] = useState(20);
  const [days, setDays] = useState(90);
  const [prefix, setPrefix] = useState("teste");
  const [emailDomain, setEmailDomain] = useState("pulsoemergencia.com.br");
  const [note, setNote] = useState("Lote de testadores Pro");
  const [creating, setCreating] = useState(false);
  const [results, setResults] = useState<CreatedAccount[] | null>(null);
  const [expiresAt, setExpiresAt] = useState<string | null>(null);

  useEffect(() => {
    if (!user) return;
    (async () => {
      const { data } = await supabase.rpc("has_role", { _user_id: user.id, _role: "admin" });
      if (!data) {
        toast.error("Acesso restrito a administradores");
        navigate("/admin");
        return;
      }
      setAuthorized(true);
      setChecking(false);
    })();
  }, [user, navigate]);

  const handleCreate = async () => {
    if (!confirm(`Criar ${count} contas de teste com Pro por ${days} dias?`)) return;
    setCreating(true);
    setResults(null);
    try {
      const { data, error } = await supabase.functions.invoke("admin-create-test-users", {
        body: { count, days, prefix, emailDomain, note },
      });
      if (error) throw error;
      if (!data?.success) throw new Error(data?.error || "Falha ao criar contas");
      setResults(data.results);
      setExpiresAt(data.expires_at);
      toast.success(`${data.results.filter((r: CreatedAccount) => r.status === "ok").length} contas criadas`);
    } catch (e: any) {
      toast.error(e?.message || "Erro ao criar contas");
    } finally {
      setCreating(false);
    }
  };

  const downloadCsv = () => {
    if (!results) return;
    const header = "email,senha,status,user_id,erro\n";
    const rows = results.map(r =>
      `${r.email},${r.password},${r.status},${r.user_id ?? ""},"${(r.error ?? "").replace(/"/g, '""')}"`
    ).join("\n");
    const blob = new Blob([header + rows], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `pulso-contas-teste-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const copyAll = () => {
    if (!results) return;
    const text = results
      .filter(r => r.status === "ok")
      .map(r => `${r.email}  |  ${r.password}`)
      .join("\n");
    navigator.clipboard.writeText(text);
    toast.success("Lista copiada");
  };

  if (checking || !authorized) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="sticky top-0 z-30 bg-background/95 backdrop-blur border-b border-border px-4 py-3">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate("/admin")} className="p-1.5 rounded-lg hover:bg-muted">
            <ArrowLeft size={18} />
          </button>
          <div className="flex items-center gap-2">
            <Shield size={16} className="text-primary" />
            <h1 className="font-heading font-bold text-base">Contas de Teste Pro</h1>
          </div>
        </div>
      </div>

      <div className="px-4 py-5 max-w-2xl mx-auto space-y-5">
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-3 flex gap-2 text-xs">
          <AlertTriangle size={16} className="text-amber-500 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-amber-500">Importante</p>
            <p className="text-muted-foreground mt-1">
              As senhas são geradas e mostradas <b>apenas uma vez</b>. Baixe o CSV ou copie a lista
              imediatamente após criar — depois disso, não há como recuperar as senhas.
            </p>
          </div>
        </div>

        <div className="bg-card rounded-xl border border-border p-4 space-y-4">
          <h2 className="font-heading font-bold text-sm flex items-center gap-2">
            <KeyRound size={14} className="text-primary" /> Parâmetros do lote
          </h2>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label className="text-xs">Quantidade</Label>
              <Input type="number" min={1} max={50} value={count} onChange={e => setCount(parseInt(e.target.value) || 1)} />
            </div>
            <div>
              <Label className="text-xs">Dias de Pro</Label>
              <Input type="number" min={1} max={730} value={days} onChange={e => setDays(parseInt(e.target.value) || 1)} />
            </div>
            <div>
              <Label className="text-xs">Prefixo do e-mail</Label>
              <Input value={prefix} onChange={e => setPrefix(e.target.value)} placeholder="teste" />
            </div>
            <div>
              <Label className="text-xs">Domínio</Label>
              <Input value={emailDomain} onChange={e => setEmailDomain(e.target.value)} />
            </div>
            <div className="col-span-2">
              <Label className="text-xs">Nota interna</Label>
              <Input value={note} onChange={e => setNote(e.target.value)} />
            </div>
          </div>

          <p className="text-[11px] text-muted-foreground">
            Gerará: <code>{prefix}01@{emailDomain}</code> … <code>{prefix}{String(count).padStart(2, "0")}@{emailDomain}</code>
          </p>

          <Button onClick={handleCreate} disabled={creating} className="w-full">
            {creating ? <><Loader2 size={14} className="animate-spin mr-2" /> Criando…</> : `Criar ${count} contas`}
          </Button>
        </div>

        {results && (
          <div className="bg-card rounded-xl border border-border p-4 space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="font-heading font-bold text-sm">Resultado</h2>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" onClick={copyAll} className="gap-1.5">
                  <Copy size={12} /> Copiar
                </Button>
                <Button size="sm" onClick={downloadCsv} className="gap-1.5">
                  <Download size={12} /> CSV
                </Button>
              </div>
            </div>
            {expiresAt && (
              <p className="text-[11px] text-muted-foreground">
                Pro válido até <b>{new Date(expiresAt).toLocaleString("pt-BR")}</b>
              </p>
            )}
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="text-left border-b border-border">
                    <th className="py-1.5 pr-2">E-mail</th>
                    <th className="py-1.5 pr-2">Senha</th>
                    <th className="py-1.5">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((r, i) => (
                    <tr key={i} className="border-b border-border/50">
                      <td className="py-1.5 pr-2 font-mono text-[11px]">{r.email}</td>
                      <td className="py-1.5 pr-2 font-mono text-[11px] select-all">{r.password || "—"}</td>
                      <td className={`py-1.5 ${r.status === "ok" ? "text-green-500" : "text-red-500"}`}>
                        {r.status}{r.error ? ` (${r.error})` : ""}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
