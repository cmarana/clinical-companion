import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { cacheContent } from "@/lib/offlineCache";
import ProtocolSplitList from "@/components/ProtocolSplitList";
import TopBar from "@/components/TopBar";
import { useAuth } from "@/contexts/AuthContext";
import { useFavorites } from "@/contexts/FavoritesContext";
import PremiumGate from "@/components/PremiumGate";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Star, ShieldCheck, GitBranch, Calculator, ChevronRight, Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";
import { FULL_SECTION_ORDER } from "@/data/fullProtocols/types";
import { getEvidence } from "@/data/fullProtocols/evidenceMap";
import { fullProtocolCategories } from "@/data/fullProtocols/categories";
import { getFullProtocolAsync } from "@/data/fullProtocols/lazyLoader";
import { fullProtocolMetas } from "@/data/fullProtocols/metadata";
import type { FullProtocol } from "@/data/fullProtocols/types";
import ProtocolActionBar from "@/components/ProtocolActionBar";
import { GuidelinesPanel } from "@/components/protocols/GuidelinesPanel";
import { EmptyHint } from "@/components/protocols/EmptyHint";
import { useRecentHistory } from "@/hooks/useRecentHistory";
import { useProtocolAnalytics } from "@/hooks/useProtocolAnalytics";
import { useTTPTracking } from "@/hooks/useTTPTracking";
import { ProtocolDetailSkeleton } from "@/components/PageSkeleton";
import DecisionTree from "@/components/DecisionTree";
import { decisionTrees } from "@/data/decisionTrees";
import EmbeddedCalculators, { findCalcsForProtocol } from "@/components/EmbeddedCalculators";
import { getProtocolUpdateLabel } from "@/data/protocolChangelog";
import { CalendarCheck } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

export default function FullProtocolDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { subscription } = useAuth();
  const { isFavorite, toggleFavorite } = useFavorites();
  const { addEntry } = useRecentHistory();
  const { trackView } = useProtocolAnalytics(id);
  const { trackProtocolOpened } = useTTPTracking();
  const [protocol, setProtocol] = useState<FullProtocol | null | undefined>(undefined);
  const [focusMode, setFocusMode] = useState(false);
  const evidence = protocol ? getEvidence(protocol.id) : undefined;

  // Category label for breadcrumbs
  const categoryLabel = useMemo(() => {
    if (!protocol) return "";
    return fullProtocolCategories.find(c => c.id === protocol.categoryId)?.title || protocol.category;
  }, [protocol]);

  // Arrow key navigation between protocols in same category
  const siblings = useMemo(() => {
    if (!protocol) return [];
    return fullProtocolMetas.filter(p => p.categoryId === protocol.categoryId);
  }, [protocol]);

  const currentIdx = useMemo(() => siblings.findIndex(s => s.id === id), [siblings, id]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === "ArrowLeft" && currentIdx > 0) {
        navigate(`/full-protocols/${siblings[currentIdx - 1].id}`);
      } else if (e.key === "ArrowRight" && currentIdx < siblings.length - 1) {
        navigate(`/full-protocols/${siblings[currentIdx + 1].id}`);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [currentIdx, siblings, navigate]);

  // Find matching decision tree for this protocol
  const matchedTree = useMemo(() => {
    if (!protocol) return null;
    const pid = protocol.id.toLowerCase();
    if (decisionTrees[pid]) return decisionTrees[pid];
    for (const key of Object.keys(decisionTrees)) {
      if (pid.includes(key) || key.includes(pid)) return decisionTrees[key];
    }
    if (protocol.tags) {
      for (const tag of protocol.tags) {
        const t = tag.toLowerCase();
        if (decisionTrees[t]) return decisionTrees[t];
      }
    }
    return null;
  }, [protocol]);

  // Find matching embedded calculators
  const hasCalcs = useMemo(() => {
    if (!protocol) return false;
    return findCalcsForProtocol(protocol.id).length > 0;
  }, [protocol]);

  useEffect(() => {
    let cancelled = false;
    setProtocol(undefined);
    getFullProtocolAsync(id || "").then(p => {
      if (!cancelled) setProtocol(p ?? null);
    });
    return () => { cancelled = true; };
  }, [id]);

  useEffect(() => {
    if (protocol) {
      addEntry({ path: `/full-protocols/${id}`, title: protocol.title, type: "fullProtocol" });
      trackView(protocol.title, protocol.category, "browse");
      trackProtocolOpened(protocol.id, protocol.title);
      cacheContent(`fullProtocol:${id}`, { id: protocol.id, title: protocol.title, category: protocol.category, sections: protocol.sections, tags: protocol.tags });
    }
  }, [protocol, id]);

  // Loading
  if (protocol === undefined) {
    return (
      <>
        <TopBar title="Carregando..." />
        <ProtocolDetailSkeleton />
      </>
    );
  }

  if (!protocol) {
    return (
      <>
        <TopBar title="Protocolo" />
        <div className="flex items-center justify-center h-64 text-muted-foreground">
          Protocolo nao encontrado.
        </div>
      </>
    );
  }

  if (!subscription.subscribed) {
    return (
      <>
        <TopBar title={protocol.title} />
        <PremiumGate />
      </>
    );
  }

  const fav = isFavorite(protocol.id);
  const updateLabel = getProtocolUpdateLabel(protocol.id);

  const orderedSections = FULL_SECTION_ORDER
    .map(so => protocol.sections.find(s => s.id === so.id))
    .filter(Boolean) as typeof protocol.sections;

  const defaultTab = orderedSections[0]?.id || "";

  return (
    <div className="flex w-full">
      {/* Split panel - desktop only (hidden in focus mode) */}
      {!focusMode && (
        <div className="hidden lg:block w-80 xl:w-96 shrink-0 h-[calc(100vh-2.5rem)] sticky top-10">
          <ProtocolSplitList activeProtocolId={id} />
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 min-w-0">
        <TopBar
          title={protocol.title}
          rightContent={
            <div className="flex items-center gap-1">
              {/* Focus mode toggle - desktop only */}
              <button
                onClick={() => setFocusMode(f => !f)}
                className="hidden lg:inline-flex p-1.5 rounded-md hover:bg-accent transition-colors"
                title={focusMode ? "Sair do modo foco" : "Modo foco"}
              >
                {focusMode ? <EyeOff size={16} className="text-primary" /> : <Eye size={16} className="text-muted-foreground" />}
              </button>
              <button
                onClick={() => toggleFavorite({ id: protocol.id, type: "protocol", title: protocol.title })}
                className="p-1.5 rounded-md hover:bg-accent transition-colors"
              >
                <Star size={18} className={cn(fav ? "fill-warning text-warning" : "text-muted-foreground")} />
              </button>
            </div>
          }
        />
        <div className={cn("px-4 py-4 pb-24 mx-auto", focusMode ? "max-w-2xl" : "max-w-lg md:max-w-3xl lg:max-w-4xl")}>
          {/* Breadcrumbs */}
          <Breadcrumb className="mb-3">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/full-protocols" className="text-xs font-heading hover:text-primary transition-colors">
                  Protocolos
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight size={12} />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href={`/full-protocols?cat=${protocol.categoryId}`}
                  className="text-xs font-heading hover:text-primary transition-colors"
                >
                  {categoryLabel}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight size={12} />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage className="text-xs font-heading font-semibold text-foreground truncate max-w-[200px]">
                  {protocol.title}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex items-center gap-2 mb-3">
            <p className="text-xs text-muted-foreground font-heading">{protocol.category}</p>
            {evidence && (
              <span className={cn(
                "inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full",
                evidence.class === "I" && "bg-primary0/15 text-primary dark:text-primary",
                evidence.class === "IIa" && "bg-primary0/15 text-primary dark:text-primary",
                evidence.class === "IIb" && "bg-destructive0/15 text-destructive dark:text-destructive",
                evidence.class === "III" && "bg-destructive0/15 text-destructive dark:text-destructive",
              )}>
                <ShieldCheck size={12} />
                Classe {evidence.class} · Nível {evidence.level}
              </span>
            )}
            {protocol.lastReviewed && (
              <span
                className={cn(
                  "inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full ring-1",
                  protocol.lastReviewed.startsWith("2026")
                    ? "bg-primary0/15 text-primary dark:text-primary ring-primary0/30"
                    : "bg-primary0/10 text-primary dark:text-primary ring-primary0/20",
                )}
                title="Revisão editorial PULSO com diretrizes 2025/2026"
              >
                <CalendarCheck size={10} />
                {protocol.lastReviewed.startsWith("2026")
                  ? `Atualizado em ${protocol.lastReviewed.replace("-", "/")}`
                  : `Revisado ${protocol.lastReviewed.replace("-", "/")}`}
              </span>
            )}
            {updateLabel && (
              <span className="inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                <CalendarCheck size={10} />
                {updateLabel}
              </span>
            )}
          </div>

          <ProtocolActionBar
            protocolId={protocol.id}
            protocolTitle={protocol.title}
            protocolCategory={protocol.category}
            protocolSections={orderedSections.map(s => ({ title: s.title, content: s.content }))}
          />

          <Tabs defaultValue={matchedTree ? "flowchart" : defaultTab} className="w-full">
            <TabsList className="w-full flex flex-wrap h-auto gap-1.5 bg-transparent p-0 mb-5 justify-start">
              {matchedTree && (
                <TabsTrigger
                  value="flowchart"
                  className="shrink-0 inline-flex items-center gap-1.5 text-[11px] tracking-tight px-3 py-1.5 rounded-full font-heading font-medium text-primary bg-primary/8 ring-1 ring-primary/15 hover:bg-primary/12 transition-all duration-200 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:ring-transparent data-[state=active]:shadow-[0_2px_8px_-2px_hsl(var(--primary)/0.4)]"
                >
                  <GitBranch size={11} strokeWidth={2.25} /> Fluxograma
                </TabsTrigger>
              )}
              {hasCalcs && (
                <TabsTrigger
                  value="calculadoras"
                  className="shrink-0 inline-flex items-center gap-1.5 text-[11px] tracking-tight px-3 py-1.5 rounded-full font-heading font-medium text-destructive dark:text-destructive bg-destructive0/8 ring-1 ring-destructive0/15 hover:bg-destructive0/12 transition-all duration-200 data-[state=active]:bg-destructive0 data-[state=active]:text-white data-[state=active]:ring-transparent data-[state=active]:shadow-[0_2px_8px_-2px_hsl(38_92%_50%/0.45)]"
                >
                  <Calculator size={11} strokeWidth={2.25} /> Calculadoras
                </TabsTrigger>
              )}
              {orderedSections.map(s => (
                <TabsTrigger
                  key={s.id}
                  value={s.id}
                  className="shrink-0 text-[11px] tracking-tight px-3 py-1.5 rounded-full font-heading font-medium text-muted-foreground bg-muted/50 hover:bg-muted hover:text-foreground transition-all duration-200 data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=active]:shadow-[0_2px_8px_-2px_hsl(var(--foreground)/0.25)]"
                >
                  {s.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {matchedTree && (
              <TabsContent value="flowchart">
                <DecisionTree
                  title={matchedTree.title}
                  root={matchedTree.tree}
                  guideline={matchedTree.guideline}
                />
              </TabsContent>
            )}

            {hasCalcs && (
              <TabsContent value="calculadoras">
                <EmbeddedCalculators protocolId={protocol.id} />
              </TabsContent>
            )}

            {orderedSections.map(s => {
              const hasGuidelines = !!(protocol.guidelines && protocol.guidelines.length > 0);
              const trimmed = s.content?.trim() ?? "";
              const isEmpty = trimmed.length === 0;
              return (
                <TabsContent key={s.id} value={s.id} className="protocol-content">
                  <h2 className="text-xl font-semibold mb-3 border-b border-border pb-2 font-display tracking-tight">
                    {s.title}
                  </h2>
                  {s.id === "references" && (
                    <div className="mb-4">
                      <GuidelinesPanel guidelines={protocol.guidelines ?? []} />
                    </div>
                  )}
                  {isEmpty ? (
                    s.id === "references" && hasGuidelines ? null : (
                      <EmptyHint
                        title={`Sem conteúdo em "${s.title}"`}
                        description="Esta seção ainda não foi preenchida para este protocolo. Outras abas podem conter as informações que você procura."
                      />
                    )
                  ) : (
                    s.content.split("\n").map((line, i) => (
                      <p key={i} className="mb-2 text-sm leading-relaxed whitespace-pre-wrap">
                        {line}
                      </p>
                    ))
                  )}
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </div>

      {/* Área imprimível — só visível durante window.print() (PDF/print export) */}
      <div className="print-area" aria-hidden="true">
        <div className="print-header">
          <h1>{protocol.title}</h1>
          <p style={{ fontSize: "10pt", color: "#444", margin: "4px 0" }}>
            {protocol.category}
            {evidence && ` · Classe ${evidence.class} · Nível ${evidence.level}`}
          </p>
          <p style={{ fontSize: "9pt", color: "#666", margin: "4px 0" }}>
            ID: {protocol.id}
            {protocol.lastReviewed && ` · Revisão PULSO: ${protocol.lastReviewed.replace("-", "/")}`}
            {` · Exportado em ${new Date().toLocaleDateString("pt-BR")}`}
          </p>
        </div>

        {orderedSections.map((s) => {
          const trimmed = s.content?.trim() ?? "";
          if (!trimmed) return null;
          return (
            <div key={s.id} className="print-section">
              <h2>{s.title}</h2>
              <div style={{ whiteSpace: "pre-wrap", fontSize: "10.5pt" }}>{s.content}</div>
            </div>
          );
        })}

        {protocol.guidelines && protocol.guidelines.length > 0 && (
          <div className="print-section">
            <h2>Fontes e diretrizes oficiais</h2>
            <ol style={{ paddingLeft: "18px", margin: 0 }}>
              {[...protocol.guidelines].sort((a, b) => b.year - a.year).map((g, i) => (
                <li key={i} style={{ marginBottom: "8px", fontSize: "9.5pt" }}>
                  <strong>{g.society} ({g.year})</strong>
                  {g.class ? ` — Classe ${g.class}${g.level ? `/${g.level}` : ""}` : ""}<br />
                  <em>{g.title}</em><br />
                  <span>{g.recommendation}</span><br />
                  <span style={{ fontSize: "8.5pt", color: "#0a6dd9", wordBreak: "break-all" }}>{g.url}</span>
                </li>
              ))}
            </ol>
          </div>
        )}

        <div className="print-footer">
          PULSO Emergência · pulsoemergencia.com.br · Conteúdo de apoio à decisão clínica.
          Verifique sempre a versão mais recente das diretrizes nos sites oficiais. Não substitui julgamento médico.
        </div>
      </div>
    </div>
  );
}
