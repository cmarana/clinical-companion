import { useEffect, useState } from "react";

import { supabase } from "@/integrations/supabase/client";
import { useIsAdmin } from "@/hooks/useIsAdmin";
import { Navigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { buildAllChunks } from "@/lib/knowledgeIngest";
import { askMedicalRag, type RagAnswer } from "@/lib/medicalRag";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Database, Sparkles, FileText } from "lucide-react";

interface Stats {
  total: number;
  bySource: Record<string, number>;
  recentQueries: number;
  cacheHits: number;
}

export default function AdminMedicalKnowledge() {
  const { isAdmin, loading: roleLoading } = useIsAdmin();
  const { toast } = useToast();
  const [stats, setStats] = useState<Stats | null>(null);
  const [loadingStats, setLoadingStats] = useState(true);
  const [ingesting, setIngesting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [progressTotal, setProgressTotal] = useState(0);
  const [question, setQuestion] = useState("");
  const [testAnswer, setTestAnswer] = useState<RagAnswer | null>(null);
  const [testing, setTesting] = useState(false);

  const loadStats = async () => {
    setLoadingStats(true);
    const { count: total } = await supabase
      .from("medical_knowledge")
      .select("*", { count: "exact", head: true })
      .eq("is_active", true);
    const { data: rows } = await supabase
      .from("medical_knowledge")
      .select("source_type")
      .eq("is_active", true)
      .limit(10000);
    const bySource: Record<string, number> = {};
    (rows || []).forEach((r: any) => {
      bySource[r.source_type] = (bySource[r.source_type] || 0) + 1;
    });
    const since = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
    const { count: recentQueries } = await supabase
      .from("ai_query_log")
      .select("*", { count: "exact", head: true })
      .gte("created_at", since);
    const { count: cacheHits } = await supabase
      .from("ai_query_log")
      .select("*", { count: "exact", head: true })
      .gte("created_at", since)
      .eq("cache_hit", true);
    setStats({
      total: total || 0,
      bySource,
      recentQueries: recentQueries || 0,
      cacheHits: cacheHits || 0,
    });
    setLoadingStats(false);
  };

  useEffect(() => {
    if (isAdmin) loadStats();
  }, [isAdmin]);

  const handleIngest = async () => {
    setIngesting(true);
    setProgress(0);
    try {
      const chunks = buildAllChunks();
      setProgressTotal(chunks.length);
      const BATCH = 25;
      let inserted = 0, failed = 0;
      for (let i = 0; i < chunks.length; i += BATCH) {
        const batch = chunks.slice(i, i + BATCH);
        const { data, error } = await supabase.functions.invoke("ingest-medical-knowledge", {
          body: { items: batch },
        });
        if (error) {
          console.error("ingest batch error", error);
          failed += batch.length;
        } else {
          inserted += (data as any)?.inserted || 0;
          failed += (data as any)?.failed || 0;
        }
        setProgress(i + batch.length);
      }
      toast({
        title: "Ingestão concluída",
        description: `${inserted} chunks indexados, ${failed} falharam.`,
      });
      await loadStats();
    } catch (e) {
      toast({ title: "Erro na ingestão", description: String(e), variant: "destructive" });
    } finally {
      setIngesting(false);
    }
  };

  const handleTest = async () => {
    if (!question.trim()) return;
    setTesting(true);
    setTestAnswer(null);
    try {
      const ans = await askMedicalRag(question.trim());
      setTestAnswer(ans);
    } catch (e) {
      toast({ title: "Erro no teste", description: String(e), variant: "destructive" });
    } finally {
      setTesting(false);
    }
  };

  if (roleLoading) {
    return <div className="flex items-center justify-center h-64"><Loader2 className="animate-spin" /></div>;
  }
  if (!isAdmin) return <Navigate to="/home" replace />;

  return (
    <div className="container max-w-5xl py-8 space-y-6">
      

      <header>
        <h1 className="text-3xl font-bold tracking-tight">Base Médica RAG</h1>
        <p className="text-muted-foreground mt-1">
          Conteúdo interno do PULSO indexado para a IA Clínica responder com fonte.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2"><CardTitle className="text-sm flex items-center gap-2"><Database className="h-4 w-4" />Chunks indexados</CardTitle></CardHeader>
          <CardContent><p className="text-3xl font-bold">{loadingStats ? "…" : stats?.total ?? 0}</p></CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2"><CardTitle className="text-sm flex items-center gap-2"><Sparkles className="h-4 w-4" />Consultas (7d)</CardTitle></CardHeader>
          <CardContent><p className="text-3xl font-bold">{loadingStats ? "…" : stats?.recentQueries ?? 0}</p></CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2"><CardTitle className="text-sm flex items-center gap-2"><FileText className="h-4 w-4" />Cache hits (7d)</CardTitle></CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{loadingStats ? "…" : stats?.cacheHits ?? 0}</p>
            {stats && stats.recentQueries > 0 && (
              <p className="text-xs text-muted-foreground">
                {Math.round((stats.cacheHits / stats.recentQueries) * 100)}% do volume
              </p>
            )}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Distribuição por fonte</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {stats && Object.entries(stats.bySource).map(([k, v]) => (
              <Badge key={k} variant="secondary">{k}: {v}</Badge>
            ))}
            {stats && Object.keys(stats.bySource).length === 0 && (
              <p className="text-sm text-muted-foreground">Nenhum conteúdo indexado ainda.</p>
            )}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Reindexar base do PULSO</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground">
            Lê os protocolos completos e o dataset de medicamentos do app, gera embeddings (Gemini text-embedding-004 — gratuito) e faz upsert na base. Usa lotes de 25 itens.
          </p>
          <Button onClick={handleIngest} disabled={ingesting}>
            {ingesting ? <><Loader2 className="h-4 w-4 mr-2 animate-spin" />{progress}/{progressTotal}</> : "Iniciar ingestão"}
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Testar RAG</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ex.: Dose de ceftriaxona para pneumonia comunitária"
            rows={3}
          />
          <Button onClick={handleTest} disabled={testing || !question.trim()}>
            {testing ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : null}
            Perguntar à IA Clínica
          </Button>
          {testAnswer && (
            <div className="space-y-3 rounded-lg border bg-muted/30 p-4">
              <div className="flex flex-wrap gap-2 text-xs">
                <Badge>fonte: {testAnswer.source}</Badge>
                <Badge variant="outline">intent: {testAnswer.intent}</Badge>
                <Badge variant="outline">complexity: {testAnswer.complexity}</Badge>
                {testAnswer.model && <Badge variant="outline">{testAnswer.model}</Badge>}
              </div>
              <div className="prose prose-sm dark:prose-invert max-w-none whitespace-pre-wrap">
                {testAnswer.answer}
              </div>
              {testAnswer.chunks?.length > 0 && (
                <div>
                  <p className="text-xs font-semibold mb-1">Chunks usados:</p>
                  <ul className="text-xs space-y-1">
                    {testAnswer.chunks.map((c, i) => (
                      <li key={i} className="text-muted-foreground">
                        • [{c.source_type}] {c.title} {c.score && `(${c.score.toFixed(4)})`}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
