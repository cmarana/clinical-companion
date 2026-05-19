import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  Download,
  Loader2,
  Activity,
} from "lucide-react";
import {
  CURRENT_BUILD_ID,
  checkBuildVersion,
  fetchRemoteVersion,
  getVersionStatus,
  type VersionStatus,
} from "@/lib/version-check";

interface RemoteInfo {
  buildId: string;
  builtAt?: string;
}

function formatTime(ts: number | null): string {
  if (!ts) return "Nunca";
  const d = new Date(ts);
  return d.toLocaleString("pt-BR", { dateStyle: "short", timeStyle: "medium" });
}

function shortId(id: string): string {
  if (!id || id === "dev") return id || "—";
  return id.length > 12 ? `${id.slice(0, 8)}…${id.slice(-4)}` : id;
}

export default function Status() {
  const [status, setStatus] = useState<VersionStatus>(() => getVersionStatus());
  const [remote, setRemote] = useState<RemoteInfo | null>(null);
  const [checking, setChecking] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [tick, setTick] = useState(0);

  // Re-render every 30s so "último check" stays fresh
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 30_000);
    return () => clearInterval(id);
  }, []);

  // Set page metadata + initial fetch
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Status do App | PULSO";
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex";
    document.head.appendChild(meta);
    void runCheck();
    return () => {
      document.title = prevTitle;
      meta.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function runCheck() {
    setChecking(true);
    setError(null);
    try {
      const [next, remoteData] = await Promise.all([
        checkBuildVersion("status_page", true),
        fetchRemoteVersion(),
      ]);
      setStatus(next);
      setRemote(remoteData);
      if (!remoteData) setError("Não foi possível contactar o servidor de versões.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro desconhecido");
    } finally {
      setChecking(false);
    }
  }

  const updateAvailable =
    !!remote && remote.buildId !== CURRENT_BUILD_ID && CURRENT_BUILD_ID !== "dev";
  const isDev = CURRENT_BUILD_ID === "dev";

  return (
    <div className="container mx-auto max-w-3xl px-4 py-8">


      <header className="mb-6 flex items-center gap-3">
        <Activity className="h-7 w-7 text-primary" aria-hidden />
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Status do aplicativo</h1>
          <p className="text-sm text-muted-foreground">
            Informações de build, cache e atualizações em tempo real.
          </p>
        </div>
      </header>

      {/* ── Update banner ─────────────────────────────────────────── */}
      {updateAvailable && (
        <Card className="mb-6 border-primary/40 bg-primary/5">
          <CardHeader className="flex flex-row items-center justify-between gap-4 space-y-0">
            <div>
              <CardTitle className="text-base text-primary">Atualização disponível</CardTitle>
              <CardDescription>
                Build remoto: <code className="font-mono text-xs">{shortId(remote!.buildId)}</code>
              </CardDescription>
            </div>
            <Button onClick={() => window.location.reload()}>
              <Download className="mr-2 h-4 w-4" />
              Atualizar agora
            </Button>
          </CardHeader>
        </Card>
      )}

      {!updateAvailable && status.lastResult === "ok" && !isDev && (
        <Card className="mb-6 border-primary0/30 bg-primary0/5">
          <CardHeader className="flex flex-row items-center gap-3 space-y-0">
            <CheckCircle2 className="h-5 w-5 text-primary dark:text-primary" aria-hidden />
            <div>
              <CardTitle className="text-base">Você está na versão mais recente</CardTitle>
              <CardDescription>Nenhuma atualização pendente.</CardDescription>
            </div>
          </CardHeader>
        </Card>
      )}

      {/* ── Build details ─────────────────────────────────────────── */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-lg">Build atual</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <Row label="ID do build instalado">
            <code className="font-mono text-xs">{shortId(CURRENT_BUILD_ID)}</code>
            {isDev && (
              <Badge variant="secondary" className="ml-2">
                Desenvolvimento
              </Badge>
            )}
          </Row>
          <Row label="ID do build no servidor">
            {remote ? (
              <code className="font-mono text-xs">{shortId(remote.buildId)}</code>
            ) : (
              <span className="text-muted-foreground">—</span>
            )}
          </Row>
          <Row label="Publicado em">
            {remote?.builtAt ? (
              new Date(remote.builtAt).toLocaleString("pt-BR")
            ) : (
              <span className="text-muted-foreground">—</span>
            )}
          </Row>
          <Row label="Último check (por tick #)">
            <span data-tick={tick}>{formatTime(status.lastCheckAt)}</span>
          </Row>
          <Row label="Resultado do último check">
            <ResultBadge result={status.lastResult} />
          </Row>
        </CardContent>
      </Card>

      {/* ── Actions ─────────────────────────────────────────────── */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Ações</CardTitle>
          <CardDescription>
            Verificar manualmente ou limpar o cache local em caso de problemas.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <Button onClick={() => void runCheck()} disabled={checking} variant="outline">
            {checking ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Verificando…
              </>
            ) : (
              <>
                <RefreshCw className="mr-2 h-4 w-4" />
                Verificar agora
              </>
            )}
          </Button>
        </CardContent>
        {error && (
          <CardContent className="pt-0">
            <p className="flex items-center gap-2 text-sm text-destructive">
              <AlertCircle className="h-4 w-4" />
              {error}
            </p>
          </CardContent>
        )}
      </Card>

      <p className="mt-6 text-xs text-muted-foreground">
        O PULSO é uma ferramenta de apoio à decisão clínica. O julgamento médico é soberano.
      </p>
    </div>
  );
}

function Row({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium">{children}</span>
    </div>
  );
}

function ResultBadge({ result }: { result: VersionStatus["lastResult"] }) {
  switch (result) {
    case "ok":
      return (
        <Badge className="bg-primary hover:bg-primary">
          <CheckCircle2 className="mr-1 h-3 w-3" /> Atualizado
        </Badge>
      );
    case "update":
      return (
        <Badge className="bg-primary">
          <Download className="mr-1 h-3 w-3" /> Atualização disponível
        </Badge>
      );
    case "error":
      return (
        <Badge variant="destructive">
          <AlertCircle className="mr-1 h-3 w-3" /> Erro
        </Badge>
      );
    default:
      return <Badge variant="secondary">Aguardando</Badge>;
  }
}
