import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Search, Users } from "lucide-react";

interface Signup {
  id: string;
  nome: string;
  email: string;
  whatsapp: string;
  perfil_profissional: string;
  especialidade: string;
  cidade_estado: string;
  origem: string;
  aceitou_comunicacao: boolean;
  created_at: string;
}

export default function AdminLaunchSignups() {
  const { user, loading } = useAuth();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [rows, setRows] = useState<Signup[]>([]);
  const [q, setQ] = useState("");
  const [perfil, setPerfil] = useState("");
  const [busy, setBusy] = useState(true);

  useEffect(() => {
    document.title = "Cadastros do Pré-lançamento · PULSO";
  }, []);

  useEffect(() => {
    if (!user) return;
    supabase
      .rpc("has_role", { _user_id: user.id, _role: "admin" })
      .then(({ data }) => setIsAdmin(!!data));
  }, [user]);

  useEffect(() => {
    if (!isAdmin) return;
    setBusy(true);
    supabase
      .from("launch_signups")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(2000)
      .then(({ data }) => {
        setRows((data ?? []) as Signup[]);
        setBusy(false);
      });
  }, [isAdmin]);

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return rows.filter((r) => {
      if (perfil && r.perfil_profissional !== perfil) return false;
      if (!term) return true;
      return [r.nome, r.email, r.whatsapp, r.especialidade, r.cidade_estado]
        .filter(Boolean)
        .some((v) => v!.toLowerCase().includes(term));
    });
  }, [rows, q, perfil]);

  const perfis = useMemo(
    () => Array.from(new Set(rows.map((r) => r.perfil_profissional).filter(Boolean))),
    [rows]
  );

  const exportCSV = () => {
    const header = [
      "Data", "Nome", "Email", "WhatsApp", "Perfil",
      "Especialidade", "Cidade/Estado", "Origem", "Aceita comunicação",
    ];
    const lines = filtered.map((r) =>
      [
        new Date(r.created_at).toLocaleString("pt-BR"),
        r.nome, r.email, r.whatsapp, r.perfil_profissional,
        r.especialidade, r.cidade_estado, r.origem,
        r.aceitou_comunicacao ? "Sim" : "Não",
      ]
        .map((v) => `"${String(v ?? "").replace(/"/g, '""')}"`)
        .join(",")
    );
    const csv = [header.join(","), ...lines].join("\n");
    const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `pulso-cadastros-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (loading || isAdmin === null) {
    return <div className="p-6 text-muted-foreground">Carregando…</div>;
  }
  if (!user) return <Navigate to="/auth" replace />;
  if (!isAdmin) return <Navigate to="/home" replace />;

  return (
    <div className="container max-w-7xl mx-auto p-4 md:p-6 space-y-4">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <Users className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-bold">Cadastros do Pré-lançamento</h1>
            <p className="text-sm text-muted-foreground">
              {filtered.length} de {rows.length} registros
            </p>
          </div>
        </div>
        <Button onClick={exportCSV} variant="outline" size="sm">
          <Download className="h-4 w-4 mr-2" /> Exportar CSV
        </Button>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Filtros</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="relative md:col-span-2">
            <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Buscar por nome, e-mail, WhatsApp, cidade…"
              className="pl-9"
            />
          </div>
          <select
            className="h-10 rounded-md border bg-background px-3 text-sm"
            value={perfil}
            onChange={(e) => setPerfil(e.target.value)}
          >
            <option value="">Todos os perfis</option>
            {perfis.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-0 overflow-x-auto">
          {busy ? (
            <div className="p-8 text-center text-muted-foreground">Carregando…</div>
          ) : filtered.length === 0 ? (
            <div className="p-8 text-center text-muted-foreground">Nenhum cadastro encontrado.</div>
          ) : (
            <table className="w-full text-sm">
              <thead className="bg-muted/50 text-left">
                <tr>
                  <th className="p-3 font-medium">Data</th>
                  <th className="p-3 font-medium">Nome</th>
                  <th className="p-3 font-medium">Contato</th>
                  <th className="p-3 font-medium">Perfil</th>
                  <th className="p-3 font-medium">Local</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((r) => (
                  <tr key={r.id} className="border-t hover:bg-muted/30">
                    <td className="p-3 whitespace-nowrap text-muted-foreground">
                      {new Date(r.created_at).toLocaleString("pt-BR")}
                    </td>
                    <td className="p-3 font-medium">{r.nome || "—"}</td>
                    <td className="p-3">
                      <div>{r.email}</div>
                      {r.whatsapp && (
                        <div className="text-xs text-muted-foreground">{r.whatsapp}</div>
                      )}
                    </td>
                    <td className="p-3">
                      {r.perfil_profissional && (
                        <Badge variant="secondary">{r.perfil_profissional}</Badge>
                      )}
                      {r.especialidade && (
                        <div className="text-xs text-muted-foreground mt-1">{r.especialidade}</div>
                      )}
                    </td>
                    <td className="p-3 text-muted-foreground">{r.cidade_estado || "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
