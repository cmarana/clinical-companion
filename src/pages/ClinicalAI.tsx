import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, Send, RotateCcw, MessageSquare, ClipboardList, Loader2, User, Bot, Mic, MicOff, Zap, FileText, Image as ImageIcon, Camera, Upload, X, ScanSearch, ShieldCheck, FileType2, History, Trash2, Eye, FileDown, Download } from "lucide-react";
import { downloadAnonymizedAttachments } from "@/lib/downloadAttachments";
import { extractPdfText, type ExtractedPdf } from "@/lib/pdfExtract";
import { useImageAnalysisHistory, makeThumbnail, type ImageAnalysisHistoryEntry } from "@/hooks/useImageAnalysisHistory";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import ReactMarkdown from "react-markdown";
import { exportAnalysisAsPdf, type PatientHeader } from "@/lib/exportAnalysisPdf";
import { supabase } from "@/integrations/supabase/client";
import PremiumPageGuard from "@/components/PremiumPageGuard";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { streamClinicalAi } from "@/lib/clinicalAiStream";
import { showClinicalAiError } from "@/lib/clinicalAiToast";
import { toast } from "sonner";
import ClinicalResponseCards from "@/components/ClinicalResponseCards";
import { motion } from "framer-motion";
import OfflineBadge from "@/components/OfflineBadge";
import { AiUsageBadge } from "@/components/AiUsageBadge";

type Msg = { role: "user" | "assistant"; content: string };

// Persistent patient context for the session
interface PatientContext {
  weight?: string;
  age?: string;
  creatinine?: string;
  allergies?: string;
  sex?: string;
  scenario?: string;
}

function ClinicalAIContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const prefillHandled = useRef(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState<"chat" | "structured" | "plantao" | "narrative" | "image">("chat");
  // Image / Document analysis state — suporta lote
  const MAX_IMAGES = 5;
  const MAX_DOCS = 3;
  const [originalImages, setOriginalImages] = useState<string[]>([]); // raw uploads
  const [imageFiles, setImageFiles] = useState<string[]>([]); // versões enviadas (possivelmente anonimizadas)
  const [documents, setDocuments] = useState<ExtractedPdf[]>([]); // PDFs com texto extraído
  const [imageContext, setImageContext] = useState("");
  const [imageAnalyzing, setImageAnalyzing] = useState(false);
  const [pdfLoading, setPdfLoading] = useState(false);
  const [anonymize, setAnonymize] = useState(true);
  const [anonTopPct, setAnonTopPct] = useState(12);
  const [anonBottomPct, setAnonBottomPct] = useState(8);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const [narrative, setNarrative] = useState("");
  const [plantaoQuery, setPlantaoQuery] = useState("");
  const [patientCtx, setPatientCtx] = useState<PatientContext>({});
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Histórico local de análises de exames (Imagem/PDF)
  const { history: imageHistory, addEntry: addImageHistoryEntry, removeEntry: removeImageHistoryEntry, clearHistory: clearImageHistory } = useImageAnalysisHistory();
  const [historyOpen, setHistoryOpen] = useState(false);
  const [historyFilter, setHistoryFilter] = useState<string>("ALL");
  const [historyDetail, setHistoryDetail] = useState<ImageAnalysisHistoryEntry | null>(null);
  const [compareSelection, setCompareSelection] = useState<string[]>([]);
  const [compareOpen, setCompareOpen] = useState(false);
  const [patientHeader, setPatientHeader] = useState<PatientHeader>(() => {
    try {
      const raw = localStorage.getItem("psguide_pdf_patient_header");
      return raw ? JSON.parse(raw) : {};
    } catch { return {}; }
  });
  const updatePatientHeader = (patch: Partial<PatientHeader>) => {
    setPatientHeader((prev) => {
      const next = { ...prev, ...patch };
      try { localStorage.setItem("psguide_pdf_patient_header", JSON.stringify(next)); } catch {}
      return next;
    });
  };
  /**
   * Reaproveita o contexto de uma análise antiga: garante o modo "Exames",
   * pré-preenche a indicação clínica com a hipótese/modalidade esperada
   * e abre o seletor de arquivo para o usuário anexar o novo PDF/imagem.
   */
  const handleReanalyze = (entry: ImageAnalysisHistoryEntry) => {
    // Sair de qualquer dialog aberto
    setHistoryDetail(null);
    setHistoryOpen(false);
    setCompareOpen(false);

    // Forçar a aba "Exames" (modo image)
    setMode("image");

    // Limpar uploads atuais para evitar mistura com o item anterior
    setOriginalImages([]);
    setImageFiles([]);
    setDocuments([]);

    // Montar a indicação clínica pré-preenchida
    const parts: string[] = [];
    if (entry.context?.trim()) parts.push(entry.context.trim());
    if (entry.classifications.length > 0) {
      const tags = entry.classifications
        .map((c) => `${c.modality}${c.region ? ` (${c.region})` : ""}`)
        .join(", ");
      parts.push(`Comparar com exame anterior: ${tags}.`);
    } else if (entry.docsCount > 0 && entry.docNames.length > 0) {
      parts.push(`Comparar com documento anterior: ${entry.docNames.join(", ")}.`);
    }
    setImageContext(parts.join(" "));

    toast.success("Contexto reaproveitado. Anexe o novo arquivo.");

    // Abrir o seletor de arquivo após o React aplicar o estado
    setTimeout(() => {
      fileInputRef.current?.click();
    }, 150);
  };

  const handleExportPdf = (entry: ImageAnalysisHistoryEntry) => {
    exportAnalysisAsPdf({
      modality: entry.primaryModality,
      timestamp: entry.timestamp,
      context: entry.context,
      classifications: entry.classifications,
      analysisMarkdown: entry.analysis,
      patient: patientHeader,
      thumbnail: entry.thumbnail,
      docNames: entry.docNames,
      imagesCount: entry.imagesCount,
      docsCount: entry.docsCount,
    });
  };

  const historyModalities = useMemo(() => {
    const set = new Set<string>();
    imageHistory.forEach((h) => {
      if (h.classifications.length === 0 && h.docsCount > 0) set.add("DOC");
      h.classifications.forEach((c) => set.add(c.modality || "OUTRO"));
    });
    return Array.from(set).sort();
  }, [imageHistory]);

  const filteredHistory = useMemo(() => {
    if (historyFilter === "ALL") return imageHistory;
    return imageHistory.filter((h) => {
      if (historyFilter === "DOC") return h.classifications.length === 0 && h.docsCount > 0;
      return h.classifications.some((c) => c.modality === historyFilter);
    });
  }, [imageHistory, historyFilter]);

  const toggleCompare = (id: string) => {
    setCompareSelection((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      if (prev.length >= 2) return [prev[1], id];
      return [...prev, id];
    });
  };

  const compareEntries = useMemo(
    () => compareSelection.map((id) => imageHistory.find((h) => h.id === id)).filter(Boolean) as ImageAnalysisHistoryEntry[],
    [compareSelection, imageHistory],
  );

  // Structured form
  const [symptoms, setSymptoms] = useState("");
  const [history, setHistory] = useState("");
  const [vitals, setVitals] = useState("");
  const [exams, setExams] = useState("");
  const [medications, setMedications] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [voiceTarget, setVoiceTarget] = useState<"chat" | "symptoms" | "history" | "vitals" | "exams">("chat");
  const recognitionRef = useRef<any>(null);

  const speechSupported = typeof window !== "undefined" && ("SpeechRecognition" in window || "webkitSpeechRecognition" in window);

  const startVoice = useCallback((target: typeof voiceTarget) => {
    if (isListening && recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
      return;
    }

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) { toast.error("Navegador não suporta reconhecimento de voz"); return; }

    const recognition = new SpeechRecognition();
    recognition.lang = "pt-BR";
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;
    recognitionRef.current = recognition;
    setVoiceTarget(target);

    let finalTranscript = "";

    recognition.onstart = () => setIsListening(true);

    recognition.onresult = (event: any) => {
      let interim = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const t = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += t + " ";
        } else {
          interim = t;
        }
      }
      const combined = (finalTranscript + interim).trim();
      
      switch (target) {
        case "chat": setInput(combined); break;
        case "symptoms": setSymptoms(combined); break;
        case "history": setHistory(combined); break;
        case "vitals": setVitals(combined); break;
        case "exams": setExams(combined); break;
      }
    };

    recognition.onerror = () => { setIsListening(false); toast.error("Erro no reconhecimento de voz"); };
    recognition.onend = () => setIsListening(false);

    recognition.start();
    toast.success("🎤 Ouvindo... fale o relato do paciente");
  }, [isListening]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Handle prefilled context from protocol pages
  useEffect(() => {
    const state = location.state as { prefill?: string } | null;
    if (state?.prefill && !prefillHandled.current) {
      prefillHandled.current = true;
      setInput(state.prefill);
      // Auto-send after a short delay
      setTimeout(() => {
        sendMessage(state.prefill!, "chat");
      }, 300);
    }
  }, [location.state]);

  const buildContextPrefix = () => {
    const parts: string[] = [];
    if (patientCtx.weight) parts.push(`Peso: ${patientCtx.weight}kg`);
    if (patientCtx.age) parts.push(`Idade: ${patientCtx.age}`);
    if (patientCtx.creatinine) parts.push(`Creatinina: ${patientCtx.creatinine}`);
    if (patientCtx.allergies) parts.push(`Alergias: ${patientCtx.allergies}`);
    if (patientCtx.sex) parts.push(`Sexo: ${patientCtx.sex}`);
    if (patientCtx.scenario) parts.push(`Cenário: ${patientCtx.scenario}`);
    return parts.length ? `[CONTEXTO DO PACIENTE: ${parts.join(" | ")}]\n\n` : "";
  };

  const sendMessage = async (text: string, sendMode: "chat" | "structured" | "plantao" | "narrative" = "chat") => {
    if (!text.trim() || isLoading) return;

    const fullText = buildContextPrefix() + text;
    const userMsg: Msg = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    let assistantSoFar = "";
    const upsertAssistant = (chunk: string) => {
      assistantSoFar += chunk;
      setMessages((prev) => {
        const last = prev[prev.length - 1];
        if (last?.role === "assistant") {
          return prev.map((m, i) => (i === prev.length - 1 ? { ...m, content: assistantSoFar } : m));
        }
        return [...prev, { role: "assistant", content: assistantSoFar }];
      });
    };

    // Build message history with context injected in latest user msg
    const apiMessages = messages.map(m => ({ role: m.role, content: m.content }));
    apiMessages.push({ role: "user", content: fullText });

    try {
      await streamClinicalAi({
        messages: apiMessages,
        mode: sendMode,
        onDelta: upsertAssistant,
        onDone: () => setIsLoading(false),
        onError: (err, code) => { showClinicalAiError(err, code); setIsLoading(false); },
      });
    } catch {
      toast.error("Erro ao conectar com a IA");
      setIsLoading(false);
    }
  };

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input, "chat");
  };

  const handleStructuredSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parts: string[] = [];
    if (symptoms) parts.push(`**Sintomas/Queixas:** ${symptoms}`);
    if (history) parts.push(`**História Clínica:** ${history}`);
    if (vitals) parts.push(`**Sinais Vitais:** ${vitals}`);
    if (exams) parts.push(`**Exames:** ${exams}`);
    if (medications) parts.push(`**Medicações em uso:** ${medications}`);
    if (additionalInfo) parts.push(`**Informações adicionais:** ${additionalInfo}`);
    if (patientCtx.weight) parts.push(`**Peso:** ${patientCtx.weight}kg`);
    if (patientCtx.age) parts.push(`**Idade:** ${patientCtx.age}`);
    if (patientCtx.creatinine) parts.push(`**Creatinina:** ${patientCtx.creatinine}`);
    if (patientCtx.allergies) parts.push(`**Alergias:** ${patientCtx.allergies}`);
    if (patientCtx.sex) parts.push(`**Sexo:** ${patientCtx.sex}`);
    if (patientCtx.scenario) parts.push(`**Cenário:** ${patientCtx.scenario}`);

    if (!symptoms && !history && !vitals && !exams) {
      toast.error("Preencha ao menos sintomas, história ou exames");
      return;
    }

    const text = "**CASO CLÍNICO ESTRUTURADO**\n\n" + parts.join("\n\n");
    sendMessage(text, "structured");
    setSymptoms(""); setHistory(""); setVitals("");
    setExams(""); setMedications(""); setAdditionalInfo("");
  };

  const handlePlantaoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!plantaoQuery.trim()) {
      toast.error("Descreva a situação em 1-2 linhas");
      return;
    }
    const text = `[MODO PLANTÃO — RESPOSTA DIRETA]\n\nSituação: ${plantaoQuery}`;
    sendMessage(text, "plantao");
    setPlantaoQuery("");
  };

  const handleNarrativeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (narrative.trim().length < 30) {
      toast.error("Cole o relato completo do paciente (mínimo 30 caracteres)");
      return;
    }
    const text = `[RELATO LIVRE — ESTRUTURE E ANALISE]\n\n${narrative}`;
    sendMessage(text, "narrative");
    setNarrative("");
  };

  const clearChat = () => { setMessages([]); };

  // ─── Image / Document analysis (lote) ───
  const handleImageSelect = async (files: FileList | File[] | null) => {
    if (!files) return;
    const incoming = Array.from(files as ArrayLike<File>);
    if (incoming.length === 0) return;

    // Separa imagens, PDFs e o que for ignorado
    const imageFiles2: File[] = [];
    const pdfFiles: File[] = [];
    let skippedType = 0;
    let skippedSize = 0;
    for (const f of incoming) {
      const isImage = f.type.startsWith("image/");
      const isPdf = f.type === "application/pdf" || /\.pdf$/i.test(f.name);
      if (!isImage && !isPdf) { skippedType++; continue; }
      if (isImage && f.size > 6 * 1024 * 1024) { skippedSize++; continue; }
      if (isPdf && f.size > 15 * 1024 * 1024) { skippedSize++; continue; }
      if (isImage) imageFiles2.push(f);
      else pdfFiles.push(f);
    }
    if (skippedType) toast.error(`${skippedType} arquivo(s) ignorado(s) — formato inválido`);
    if (skippedSize) toast.error(`${skippedSize} arquivo(s) acima do limite ignorado(s)`);

    // Imagens
    const remainingImg = MAX_IMAGES - originalImages.length;
    const acceptedImgs = imageFiles2.slice(0, Math.max(0, remainingImg));
    if (imageFiles2.length > acceptedImgs.length) {
      toast.message(`Apenas ${acceptedImgs.length} imagem(ns) adicionada(s) (limite ${MAX_IMAGES})`);
    }
    if (acceptedImgs.length > 0) {
      const urls = await Promise.all(
        acceptedImgs.map(
          (file) =>
            new Promise<string | null>((resolve) => {
              const reader = new FileReader();
              reader.onload = () => resolve(typeof reader.result === "string" ? reader.result : null);
              reader.onerror = () => resolve(null);
              reader.readAsDataURL(file);
            }),
        ),
      );
      const valid = urls.filter((u): u is string => !!u);
      if (valid.length > 0) {
        setOriginalImages((prev) => [...prev, ...valid].slice(0, MAX_IMAGES));
      } else {
        toast.error("Falha ao ler as imagens");
      }
    }

    // PDFs
    const remainingPdf = MAX_DOCS - documents.length;
    const acceptedPdfs = pdfFiles.slice(0, Math.max(0, remainingPdf));
    if (pdfFiles.length > acceptedPdfs.length) {
      toast.message(`Apenas ${acceptedPdfs.length} PDF(s) adicionado(s) (limite ${MAX_DOCS})`);
    }
    if (acceptedPdfs.length > 0) {
      setPdfLoading(true);
      try {
        for (const file of acceptedPdfs) {
          try {
            const extracted = await extractPdfText(file);
            if (!extracted.text || extracted.text.trim().length < 20) {
              toast.error(`PDF "${file.name}" sem texto legível (digitalizado?). Tire foto de cada página.`);
              continue;
            }
            setDocuments((prev) => [...prev, extracted].slice(0, MAX_DOCS));
            toast.success(`📄 ${file.name} — ${extracted.pagesAnalyzed}/${extracted.pages} páginas processadas`);
          } catch (e) {
            console.error("PDF extract error:", e);
            toast.error(`Falha ao processar "${file.name}"`);
          }
        }
      } finally {
        setPdfLoading(false);
      }
    }
  };

  const removeImageAt = (idx: number) => {
    setOriginalImages((prev) => prev.filter((_, i) => i !== idx));
  };

  const removeDocumentAt = (idx: number) => {
    setDocuments((prev) => prev.filter((_, i) => i !== idx));
  };

  // Aplica tarjas pretas nas faixas superior e inferior (onde geralmente há nome,
  // prontuário, data, instituição). Retorna data URL JPEG.
  const applyAnonymization = useCallback(
    (src: string, topPct: number, bottomPct: number): Promise<string> => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          try {
            const canvas = document.createElement("canvas");
            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;
            const ctx = canvas.getContext("2d");
            if (!ctx) return reject(new Error("Canvas indisponível"));
            ctx.drawImage(img, 0, 0);
            ctx.fillStyle = "#000";
            const topH = Math.round((canvas.height * topPct) / 100);
            const botH = Math.round((canvas.height * bottomPct) / 100);
            if (topH > 0) ctx.fillRect(0, 0, canvas.width, topH);
            if (botH > 0) ctx.fillRect(0, canvas.height - botH, canvas.width, botH);
            ctx.fillStyle = "rgba(255,255,255,0.85)";
            ctx.font = `${Math.max(10, Math.round(canvas.height * 0.018))}px sans-serif`;
            ctx.fillText("ANONIMIZADO • PULSO", 8, Math.max(14, topH - 6));
            resolve(canvas.toDataURL("image/jpeg", 0.9));
          } catch (e) {
            reject(e);
          }
        };
        img.onerror = () => reject(new Error("Falha ao processar imagem"));
        img.src = src;
      });
    },
    [],
  );

  // Recalcula as imagens enviadas sempre que originais / toggle / faixas mudam
  useEffect(() => {
    if (originalImages.length === 0) {
      setImageFiles([]);
      return;
    }
    if (!anonymize) {
      setImageFiles(originalImages);
      return;
    }
    let cancelled = false;
    Promise.all(
      originalImages.map((src) =>
        applyAnonymization(src, anonTopPct, anonBottomPct).catch(() => src),
      ),
    ).then((urls) => {
      if (!cancelled) setImageFiles(urls);
    });
    return () => {
      cancelled = true;
    };
  }, [originalImages, anonymize, anonTopPct, anonBottomPct, applyAnonymization]);

  const handleImageAnalyze = async () => {
    if (imageFiles.length === 0 && documents.length === 0) {
      toast.error("Anexe ao menos uma imagem ou PDF");
      return;
    }
    setImageAnalyzing(true);

    const ctxParts: string[] = [];
    if (patientCtx.age) ctxParts.push(`Idade: ${patientCtx.age}`);
    if (patientCtx.sex) ctxParts.push(`Sexo: ${patientCtx.sex}`);
    if (patientCtx.weight) ctxParts.push(`Peso: ${patientCtx.weight}kg`);
    if (patientCtx.scenario) ctxParts.push(`Cenário: ${patientCtx.scenario}`);
    if (imageContext.trim()) ctxParts.push(`Indicação clínica: ${imageContext.trim()}`);
    if (imageFiles.length > 0 && anonymize) ctxParts.push("Imagens anonimizadas (faixas superior/inferior cobertas — ignore áreas pretas)");
    if (imageFiles.length > 1) ctxParts.push(`Lote com ${imageFiles.length} imagens da mesma investigação — analise como sequência`);
    if (documents.length > 0) ctxParts.push(`${documents.length} PDF(s) anexado(s) com texto extraído`);
    const fullContext = ctxParts.join(" | ");

    // Monta payload de documentos (texto extraído dos PDFs)
    const docsPayload = documents.map((d) => ({
      fileName: d.fileName,
      pages: d.pages,
      pagesAnalyzed: d.pagesAnalyzed,
      truncated: d.truncated,
      text: d.text,
    }));

    const parts: string[] = [];
    if (imageFiles.length > 0) parts.push(`${imageFiles.length} imagem(ns)`);
    if (documents.length > 0) parts.push(`${documents.length} PDF(s)`);
    const userLabel = `📎 **Análise solicitada — ${parts.join(" + ")}**${
      documents.length > 0
        ? `\n${documents.map((d) => `📄 ${d.fileName} (${d.pagesAnalyzed}/${d.pages} pág.)`).join("\n")}`
        : ""
    }${fullContext ? `\n${fullContext}` : ""}`;
    setMessages((prev) => [...prev, { role: "user", content: userLabel }]);

    try {
      const { data: { session } } = await supabase.auth.getSession();
      const token = session?.access_token || import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
      const url = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/image-analysis`;
      const resp = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({
          imageDataUrls: imageFiles,
          imageDataUrl: imageFiles[0],
          documents: docsPayload,
          context: fullContext,
        }),
      });
      const data = await resp.json().catch(() => ({}));
      if (!resp.ok) {
        const msg = data?.error || `Erro ${resp.status} ao analisar`;
        showClinicalAiError(
          msg,
          resp.status === 402 ? "credits" : resp.status === 429 ? "rate_limit" : resp.status === 401 ? "auth" : "server",
        );
        setMessages((prev) => prev.slice(0, -1));
      } else {
        const analysis: string = data?.analysis || "Sem resposta da IA.";
        const cls: Array<{ i: number; modality: string; region: string }> = Array.isArray(data?.classifications) ? data.classifications : [];
        const summary: string = typeof data?.summary === "string" ? data.summary : "";
        const alerts: import("@/hooks/useImageAnalysisHistory").CriticalAlert[] = Array.isArray(data?.alerts) ? data.alerts : [];
        const clsBanner = cls.length > 0
          ? `> 🔎 **Classificação automática:** ${cls.map((c) => `Imagem ${c.i} — ${c.modality} (${c.region})`).join(" · ")}\n\n`
          : "";

        // Banner de resumo + alertas (markdown) no topo da resposta no chat
        let summaryBanner = "";
        if (summary || alerts.length > 0) {
          const lines: string[] = [];
          if (summary) lines.push(`> 📝 **Resumo clínico:** ${summary}`);
          if (alerts.length > 0) {
            const icon = (l: string) => (l === "critico" ? "🚨" : l === "atencao" ? "⚠️" : "ℹ️");
            lines.push(`>`);
            lines.push(`> **Alertas (${alerts.length}):**`);
            alerts.forEach((a) => {
              const value = a.value ? ` — ${a.value}` : "";
              const ref = a.reference ? ` (ref: ${a.reference})` : "";
              const action = a.action ? ` · ${a.action}` : "";
              lines.push(`> ${icon(a.level)} **${a.label}**${value}${ref}${action}`);
            });
          }
          summaryBanner = lines.join("\n") + "\n\n";
        }

        setMessages((prev) => [...prev, { role: "assistant", content: summaryBanner + clsBanner + analysis }]);

        // Salva no histórico (best-effort, não bloqueia UX)
        try {
          const thumb = originalImages[0] ? await makeThumbnail(originalImages[0]) : undefined;
          const primaryModality = cls[0]?.modality || (documents.length > 0 ? "DOC" : "OUTRO");
          addImageHistoryEntry({
            imagesCount: originalImages.length,
            docsCount: documents.length,
            docNames: documents.map((d) => d.fileName),
            context: imageContext.trim(),
            classifications: cls,
            primaryModality,
            analysis: summaryBanner + clsBanner + analysis,
            thumbnail: thumb,
            summary,
            alerts,
          });
        } catch (err) {
          console.warn("[history] save failed:", err);
        }

        setOriginalImages([]);
        setImageFiles([]);
        setDocuments([]);
        setImageContext("");
      }
    } catch (e) {
      console.error(e);
      toast.error("Falha de conexão com a IA");
      setMessages((prev) => prev.slice(0, -1));
    } finally {
      setImageAnalyzing(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-border bg-card/80 backdrop-blur-sm">
        <button onClick={() => navigate(-1)} className="p-1.5 rounded-md hover:bg-accent text-muted-foreground">
          <ArrowLeft size={18} />
        </button>
        <div className="flex-1 min-w-0">
          <h1 className="font-heading font-bold text-sm">IA Clínica</h1>
          <p className="text-[10px] text-muted-foreground truncate">Diagnóstico • Conduta • Prescrição • Interações</p>
        </div>
        <div className="hidden sm:block">
          <AiUsageBadge feature="clinical-ai" />
        </div>
        <button onClick={clearChat} className="p-1.5 rounded-md hover:bg-accent text-muted-foreground" title="Nova consulta">
          <RotateCcw size={16} />
        </button>
      </div>

      {/* Patient Context Bar */}
      <div className="px-3 py-1.5 border-b border-border bg-muted/30 flex gap-2 items-center overflow-x-auto">
        <span className="text-[9px] font-heading font-semibold text-muted-foreground shrink-0">PACIENTE:</span>
        <input placeholder="Peso (kg)" value={patientCtx.weight || ""} onChange={e => setPatientCtx(p => ({...p, weight: e.target.value}))}
          className="w-16 h-6 text-[10px] px-1.5 rounded border border-border bg-background" />
        <input placeholder="Idade" value={patientCtx.age || ""} onChange={e => setPatientCtx(p => ({...p, age: e.target.value}))}
          className="w-14 h-6 text-[10px] px-1.5 rounded border border-border bg-background" />
        <input placeholder="Cr (mg/dL)" value={patientCtx.creatinine || ""} onChange={e => setPatientCtx(p => ({...p, creatinine: e.target.value}))}
          className="w-20 h-6 text-[10px] px-1.5 rounded border border-border bg-background" />
        <input placeholder="Alergias" value={patientCtx.allergies || ""} onChange={e => setPatientCtx(p => ({...p, allergies: e.target.value}))}
          className="w-24 h-6 text-[10px] px-1.5 rounded border border-border bg-background" />
        <select value={patientCtx.sex || ""} onChange={e => setPatientCtx(p => ({...p, sex: e.target.value}))}
          className="w-14 h-6 text-[10px] px-1 rounded border border-border bg-background text-foreground">
          <option value="">Sexo</option>
          <option value="masculino">M</option>
          <option value="feminino">F</option>
        </select>
        <select value={patientCtx.scenario || ""} onChange={e => setPatientCtx(p => ({...p, scenario: e.target.value}))}
          className="w-20 h-6 text-[10px] px-1 rounded border border-border bg-background text-foreground">
          <option value="">Cenário</option>
          <option value="PS">PS</option>
          <option value="UTI">UTI</option>
          <option value="UBS">UBS</option>
          <option value="SAMU">SAMU</option>
          <option value="Enfermaria">Enferm.</option>
        </select>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center px-4">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-3">
              <Bot size={24} className="text-primary" />
            </div>
            <h2 className="font-heading font-bold text-base mb-1">Assistente Clínico IA</h2>
            <p className="text-[10px] text-muted-foreground max-w-sm mb-1">
              Respostas estruturadas em 10 seções: resumo, diagnóstico, diferenciais, algoritmo, exames, conduta, prescrição, interações, alertas e referências.
            </p>
            <p className="text-[10px] text-muted-foreground/70 max-w-sm mb-4">
              Preencha o contexto do paciente acima para cálculos de dose automáticos.
            </p>
            <div className="flex flex-wrap gap-1.5 justify-center">
              {[
                "Dor torácica tipo A em homem 55a, HAS, DM",
                "Sepse pulmonar — conduta completa",
                "Criança 3a, febre 39°C + petéquias",
                "Gestante 32sem, PA 160x110, proteinúria",
              ].map((s) => (
                <button key={s} onClick={() => { setInput(s); setMode("chat"); }}
                  className="px-3 py-1.5 rounded-lg border border-border bg-muted/50 hover:bg-accent text-[10px] font-heading text-left">
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg, i) => (
          <div key={i} className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            {msg.role === "assistant" && (
              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                <Bot size={14} className="text-primary" />
              </div>
            )}
            <div className={`max-w-[95%] rounded-lg text-sm ${
              msg.role === "user"
                ? "bg-primary text-primary-foreground rounded-br-sm px-4 py-3"
                : "rounded-bl-sm"
            }`}>
              {msg.role === "assistant" ? (
                <ClinicalResponseCards content={msg.content} />
              ) : (
                <div className="whitespace-pre-wrap text-[13px]">{msg.content}</div>
              )}
            </div>
            {msg.role === "user" && (
              <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0 mt-1">
                <User size={14} className="text-primary-foreground" />
              </div>
            )}
          </div>
        ))}

        {isLoading && messages[messages.length - 1]?.role !== "assistant" && (
          <div className="flex gap-2 justify-start">
            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Bot size={14} className="text-primary" />
            </div>
            <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-3 flex items-center gap-2">
              <Loader2 size={14} className="animate-spin text-muted-foreground" />
              <span className="text-[11px] text-muted-foreground">Analisando caso clínico...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="border-t border-border bg-card/80 backdrop-blur-sm p-3">
        <Tabs value={mode} onValueChange={(v) => setMode(v as typeof mode)} className="w-full">
          <TabsList className="w-full mb-2 h-8 grid grid-cols-5">
            <TabsTrigger value="chat" className="text-[10px] gap-1 h-7 px-1">
              <MessageSquare size={11} /> Chat
            </TabsTrigger>
            <TabsTrigger value="structured" className="text-[10px] gap-1 h-7 px-1">
              <ClipboardList size={11} /> Caso
            </TabsTrigger>
            <TabsTrigger value="image" className="text-[10px] gap-1 h-7 px-1 data-[state=active]:bg-primary/15 data-[state=active]:text-primary">
              <ImageIcon size={11} /> Exames
            </TabsTrigger>
            <TabsTrigger value="plantao" className="text-[10px] gap-1 h-7 px-1 data-[state=active]:bg-destructive data-[state=active]:text-destructive-foreground">
              <Zap size={11} /> Plantão
            </TabsTrigger>
            <TabsTrigger value="narrative" className="text-[10px] gap-1 h-7 px-1">
              <FileText size={11} /> Texto
            </TabsTrigger>
          </TabsList>

          <TabsContent value="chat" className="mt-0">
            <form onSubmit={handleChatSubmit} className="flex gap-2">
              <Textarea value={input} onChange={(e) => setInput(e.target.value)}
                placeholder={isListening && voiceTarget === "chat" ? "🎤 Ouvindo..." : "Descreva sintomas, caso clínico ou dúvida..."}
                className="min-h-[44px] max-h-32 text-sm resize-none rounded-xl"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleChatSubmit(e); }
                }}
              />
              {speechSupported && (
                <Button type="button" size="icon" variant={isListening && voiceTarget === "chat" ? "destructive" : "outline"}
                  onClick={() => startVoice("chat")}
                  className={`shrink-0 rounded-xl h-[44px] w-[44px] ${isListening && voiceTarget === "chat" ? "animate-pulse" : ""}`}
                  title={isListening ? "Parar gravação" : "Ditar relato por voz"}
                >
                  {isListening && voiceTarget === "chat" ? <MicOff size={18} /> : <Mic size={18} />}
                </Button>
              )}
              <Button type="submit" size="icon" disabled={isLoading || !input.trim()} className="shrink-0 rounded-xl h-[44px] w-[44px]">
                {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
              </Button>
            </form>
            {isListening && voiceTarget === "chat" && (
              <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }}
                className="mt-2 flex items-center justify-center gap-2 py-1.5 px-3 rounded-lg bg-destructive/10 border border-destructive/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-destructive" />
                </span>
                <span className="text-[10px] font-heading text-destructive font-medium">Gravando relato... toque no microfone para parar</span>
              </motion.div>
            )}
          </TabsContent>

          <TabsContent value="structured" className="mt-0">
            <form onSubmit={handleStructuredSubmit} className="space-y-2">
              {speechSupported && (
                <button type="button" onClick={() => startVoice("symptoms")}
                  className={`w-full flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-heading font-semibold transition-all ${
                    isListening && voiceTarget === "symptoms"
                      ? "bg-destructive/15 text-destructive animate-pulse border border-destructive/30"
                      : "bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20"
                  }`}>
                  {isListening && voiceTarget === "symptoms" ? <><MicOff size={14} /> Parar gravação</> : <><Mic size={14} /> 🎤 Gravar relato do paciente</>}
                </button>
              )}
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[10px] font-heading font-medium text-muted-foreground mb-0.5 block">Sintomas / QP *</label>
                  <div className="flex gap-1">
                    <Input value={symptoms} onChange={(e) => setSymptoms(e.target.value)} placeholder={isListening && voiceTarget === "symptoms" ? "🎤 Ouvindo..." : "Dor torácica, dispneia..."} className="h-8 text-xs" />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-heading font-medium text-muted-foreground mb-0.5 block">Sinais Vitais</label>
                  <Input value={vitals} onChange={(e) => setVitals(e.target.value)} placeholder="PA, FC, SpO2, FR, Tax..." className="h-8 text-xs" />
                </div>
              </div>
              <div>
                <label className="text-[10px] font-heading font-medium text-muted-foreground mb-0.5 block">História Clínica</label>
                <div className="flex gap-1">
                  <Input value={history} onChange={(e) => setHistory(e.target.value)} placeholder="HAS, DM, antecedentes..." className="h-8 text-xs flex-1" />
                  {speechSupported && (
                    <button type="button" onClick={() => startVoice("history")}
                      className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                        isListening && voiceTarget === "history" ? "bg-destructive/15 text-destructive animate-pulse" : "bg-muted hover:bg-accent text-muted-foreground"
                      }`}>
                      {isListening && voiceTarget === "history" ? <MicOff size={12} /> : <Mic size={12} />}
                    </button>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[10px] font-heading font-medium text-muted-foreground mb-0.5 block">Exames</label>
                  <Input value={exams} onChange={(e) => setExams(e.target.value)} placeholder="ECG, Labs, imagem..." className="h-8 text-xs" />
                </div>
                <div>
                  <label className="text-[10px] font-heading font-medium text-muted-foreground mb-0.5 block">Medicações em uso</label>
                  <Input value={medications} onChange={(e) => setMedications(e.target.value)} placeholder="Losartana, Metformina..." className="h-8 text-xs" />
                </div>
              </div>
              <div>
                <label className="text-[10px] font-heading font-medium text-muted-foreground mb-0.5 block">Info adicional</label>
                <Input value={additionalInfo} onChange={(e) => setAdditionalInfo(e.target.value)} placeholder="Alergias, observações..." className="h-8 text-xs" />
              </div>
              <Button type="submit" disabled={isLoading} className="w-full h-9 text-xs rounded-xl">
                {isLoading ? <><Loader2 size={14} className="animate-spin mr-1.5" /> Analisando...</> : "🔍 Analisar Caso Clínico"}
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="image" className="mt-0">
            <div className="space-y-2">
              <div className="flex items-center gap-1.5">
                <div className="flex-1 flex items-center gap-1.5 px-2 py-1 rounded-lg bg-primary/10 border border-primary/20">
                  <ScanSearch size={11} className="text-primary shrink-0" />
                  <p className="text-[10px] text-primary font-medium leading-tight">
                    Fotos de exames (RX, TC, USG, ECG, lesão) ou PDFs (laboratório, laudos).
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setHistoryOpen(true)}
                  className="relative flex items-center gap-1 px-2 py-1 rounded-lg border border-border bg-card hover:bg-muted/60 text-[10px] font-heading font-semibold transition-colors"
                  title="Histórico de análises"
                >
                  <History size={12} />
                  Histórico
                  {imageHistory.length > 0 && (
                    <span className="ml-0.5 px-1 rounded-full bg-primary text-primary-foreground text-[8px] font-bold leading-none py-0.5">
                      {imageHistory.length}
                    </span>
                  )}
                </button>
              </div>

              {/* Hidden inputs */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*,application/pdf,.pdf"
                multiple
                className="hidden"
                onChange={(e) => {
                  handleImageSelect(e.target.files);
                  e.target.value = "";
                }}
              />
              <input
                ref={cameraInputRef}
                type="file"
                accept="image/*"
                capture="environment"
                className="hidden"
                onChange={(e) => {
                  handleImageSelect(e.target.files);
                  e.target.value = "";
                }}
              />

              {originalImages.length === 0 && documents.length === 0 ? (
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => cameraInputRef.current?.click()}
                    className="flex flex-col items-center justify-center gap-1.5 py-4 rounded-xl border-2 border-dashed border-primary/40 bg-primary/5 hover:bg-primary/10 active:scale-[0.98] transition-all"
                  >
                    <Camera size={22} className="text-primary" />
                    <span className="text-[11px] font-heading font-semibold text-primary">Tirar foto</span>
                    <span className="text-[9px] text-muted-foreground">Câmera traseira</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={pdfLoading}
                    className="flex flex-col items-center justify-center gap-1.5 py-4 rounded-xl border-2 border-dashed border-border bg-muted/30 hover:bg-muted/60 active:scale-[0.98] transition-all disabled:opacity-60"
                  >
                    {pdfLoading ? (
                      <Loader2 size={22} className="text-muted-foreground animate-spin" />
                    ) : (
                      <Upload size={22} className="text-muted-foreground" />
                    )}
                    <span className="text-[11px] font-heading font-semibold">Enviar arquivos</span>
                    <span className="text-[9px] text-muted-foreground">Imagem ou PDF</span>
                  </button>
                </div>
              ) : (
                <>
                  {/* Galeria de imagens */}
                  {originalImages.length > 0 && (
                    <div className="rounded-xl border border-border bg-muted/30 p-2">
                      <div className="flex items-center justify-between mb-1.5 px-0.5">
                        <span className="text-[10px] font-heading font-semibold text-muted-foreground">
                          {originalImages.length} de {MAX_IMAGES} imagem{originalImages.length > 1 ? "ns" : ""}
                        </span>
                        {originalImages.length < MAX_IMAGES && (
                          <div className="flex gap-1">
                            <button
                              type="button"
                              onClick={() => cameraInputRef.current?.click()}
                              className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-primary/10 text-primary text-[10px] font-heading font-semibold hover:bg-primary/20 transition-colors"
                            >
                              <Camera size={11} /> Foto
                            </button>
                          </div>
                        )}
                      </div>
                      <div className="grid grid-cols-3 gap-1.5">
                        {originalImages.map((src, idx) => {
                          const preview = imageFiles[idx] || src;
                          return (
                            <div key={idx} className="relative aspect-square rounded-lg overflow-hidden border border-border bg-black/5 group">
                              <img src={preview} alt={`Imagem ${idx + 1}`} className="w-full h-full object-cover" />
                              <div className="absolute top-0.5 left-0.5 px-1.5 py-0.5 rounded bg-background/80 backdrop-blur-sm text-[9px] font-heading font-bold">
                                {idx + 1}
                              </div>
                              <button
                                type="button"
                                onClick={() => removeImageAt(idx)}
                                className="absolute top-0.5 right-0.5 w-5 h-5 rounded-full bg-background/90 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-destructive hover:text-destructive-foreground transition-colors"
                                title="Remover"
                              >
                                <X size={11} />
                              </button>
                              {anonymize && (
                                <div className="absolute bottom-0.5 left-0.5 right-0.5 flex items-center justify-center gap-0.5 px-1 py-0.5 rounded bg-emerald-500/90 text-white text-[8px] font-heading font-semibold backdrop-blur-sm">
                                  <ShieldCheck size={8} /> Anon.
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Galeria de PDFs */}
                  {documents.length > 0 && (
                    <div className="rounded-xl border border-border bg-muted/30 p-2">
                      <div className="flex items-center justify-between mb-1.5 px-0.5">
                        <span className="text-[10px] font-heading font-semibold text-muted-foreground">
                          {documents.length} de {MAX_DOCS} PDF{documents.length > 1 ? "s" : ""}
                        </span>
                      </div>
                      <div className="space-y-1.5">
                        {documents.map((doc, idx) => (
                          <div key={idx} className="flex items-center gap-2 p-2 rounded-lg border border-border bg-card/60">
                            <div className="w-9 h-9 rounded-lg bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0">
                              <FileType2 size={18} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-[11px] font-heading font-semibold truncate">{doc.fileName}</div>
                              <div className="text-[9px] text-muted-foreground">
                                {doc.pagesAnalyzed}/{doc.pages} pág. • {Math.round(doc.text.length / 1000)}k caracteres
                                {doc.truncated && " • truncado"}
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeDocumentAt(idx)}
                              className="w-7 h-7 rounded-full bg-background/90 border border-border flex items-center justify-center hover:bg-destructive hover:text-destructive-foreground transition-colors shrink-0"
                              title="Remover"
                            >
                              <X size={12} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Botões para adicionar mais */}
                  <div className="flex gap-1.5">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      disabled={pdfLoading || (originalImages.length >= MAX_IMAGES && documents.length >= MAX_DOCS)}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg border border-dashed border-border bg-muted/30 hover:bg-muted/60 text-[11px] font-heading font-semibold transition-all disabled:opacity-50"
                    >
                      {pdfLoading ? (
                        <><Loader2 size={13} className="animate-spin" /> Processando PDF...</>
                      ) : (
                        <><Upload size={13} /> Adicionar imagem ou PDF</>
                      )}
                    </button>
                  </div>

                  {/* Anonymization controls — só faz sentido com imagens */}
                  {originalImages.length > 0 && (
                    <div className="rounded-xl border border-border bg-card/60 p-2.5 space-y-2">
                      <label className="flex items-center justify-between gap-2 cursor-pointer">
                        <span className="flex items-center gap-1.5 text-[11px] font-heading font-semibold">
                          <ShieldCheck size={13} className="text-emerald-600 dark:text-emerald-400" />
                          Anonimizar dados sensíveis
                        </span>
                        <button
                          type="button"
                          role="switch"
                          aria-checked={anonymize}
                          onClick={() => setAnonymize((v) => !v)}
                          className={`relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors ${
                            anonymize ? "bg-primary" : "bg-muted"
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-background shadow transition-transform ${
                              anonymize ? "translate-x-4" : "translate-x-0.5"
                            }`}
                          />
                        </button>
                      </label>
                      <p className="text-[9px] text-muted-foreground leading-tight">
                        Cobre nome, prontuário, data e instituição (faixas superior e inferior) em todas as imagens.
                      </p>
                      {anonymize && (
                        <div className="grid grid-cols-2 gap-2 pt-1">
                          <div>
                            <div className="flex items-center justify-between text-[9px] text-muted-foreground mb-0.5">
                              <span>Topo</span>
                              <span className="font-mono">{anonTopPct}%</span>
                            </div>
                            <input
                              type="range"
                              min={0}
                              max={30}
                              step={1}
                              value={anonTopPct}
                              onChange={(e) => setAnonTopPct(Number(e.target.value))}
                              className="w-full accent-primary"
                            />
                          </div>
                          <div>
                            <div className="flex items-center justify-between text-[9px] text-muted-foreground mb-0.5">
                              <span>Rodapé</span>
                              <span className="font-mono">{anonBottomPct}%</span>
                            </div>
                            <input
                              type="range"
                              min={0}
                              max={30}
                              step={1}
                              value={anonBottomPct}
                              onChange={(e) => setAnonBottomPct(Number(e.target.value))}
                              className="w-full accent-primary"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </>
              )}

              <Input
                value={imageContext}
                onChange={(e) => setImageContext(e.target.value)}
                placeholder="Indicação clínica (opcional): ex.: dor torácica, dispneia, trauma..."
                className="h-9 text-xs rounded-xl"
                maxLength={500}
              />

              {(imageFiles.length > 0 || documents.length > 0) && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={async () => {
                    try {
                      const count = await downloadAnonymizedAttachments({
                        images: imageFiles,
                        pdfs: documents.map((d) => ({ fileName: d.fileName, blob: d.originalBlob })),
                      });
                      if (count === 0) {
                        toast.error("Nenhum anexo disponível para baixar.");
                      } else {
                        toast.success(`ZIP gerado com ${count} arquivo(s) ${anonymize ? "anonimizado(s)" : ""}.`);
                      }
                    } catch (e) {
                      console.error(e);
                      toast.error("Falha ao gerar o ZIP.");
                    }
                  }}
                  disabled={imageAnalyzing || pdfLoading}
                  className="w-full h-9 text-xs rounded-xl"
                  title="Baixar imagens (com faixas pretas) e PDFs em um único ZIP local"
                >
                  <Download size={14} className="mr-1.5" />
                  Baixar anexos {anonymize && imageFiles.length > 0 ? "anonimizados" : ""} (.zip)
                </Button>
              )}

              <Button
                type="button"
                onClick={handleImageAnalyze}
                disabled={(imageFiles.length === 0 && documents.length === 0) || imageAnalyzing || pdfLoading}
                className="w-full h-9 text-xs rounded-xl"
              >
                {imageAnalyzing ? (
                  <><Loader2 size={14} className="animate-spin mr-1.5" /> Analisando...</>
                ) : (
                  <><ScanSearch size={14} className="mr-1.5" /> Analisar {imageFiles.length + documents.length > 1 ? `${imageFiles.length + documents.length} arquivos` : "arquivo"}</>
                )}
              </Button>

              <p className="text-[9px] text-muted-foreground text-center leading-tight">
                ⚠️ Análise auxiliar por IA — <strong>não substitui laudo formal de radiologista</strong>. Correlação clínica obrigatória.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="plantao" className="mt-0">
            <form onSubmit={handlePlantaoSubmit} className="space-y-2">
              <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-destructive/10 border border-destructive/20">
                <Zap size={11} className="text-destructive shrink-0" />
                <p className="text-[10px] text-destructive font-medium leading-tight">
                  Resposta direta beira-leito: ações 0-10min, prescrição, alertas. Sem texto longo.
                </p>
              </div>
              <Textarea
                value={plantaoQuery}
                onChange={(e) => setPlantaoQuery(e.target.value)}
                placeholder="Ex.: Homem 60a, dor torácica 2h + sudorese, PA 90x60, ECG supra V1-V4"
                className="min-h-[60px] max-h-32 text-sm resize-none rounded-xl"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey && (e.ctrlKey || e.metaKey)) {
                    e.preventDefault();
                    handlePlantaoSubmit(e);
                  }
                }}
              />
              <Button
                type="submit"
                disabled={isLoading || !plantaoQuery.trim()}
                variant="destructive"
                className="w-full h-9 text-xs rounded-xl font-heading font-bold"
              >
                {isLoading ? <><Loader2 size={14} className="animate-spin mr-1.5" /> Calculando...</> : <><Zap size={14} className="mr-1.5" /> RESPOSTA DE PLANTÃO</>}
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="narrative" className="mt-0">
            <form onSubmit={handleNarrativeSubmit} className="space-y-2">
              <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-primary/10 border border-primary/20">
                <FileText size={11} className="text-primary shrink-0" />
                <p className="text-[10px] text-primary font-medium leading-tight">
                  Cole o relato corrido do paciente. A IA estrutura e analisa.
                </p>
              </div>
              <Textarea
                value={narrative}
                onChange={(e) => setNarrative(e.target.value)}
                placeholder="Ex.: Paciente do sexo masculino, 58 anos, hipertenso, diabético, deu entrada com dor torácica retroesternal há 3 horas, irradiando para braço esquerdo, associada a náuseas. PA 150x90, FC 98, sat 96%. Em uso de losartana e metformina. Nega alergias..."
                className="min-h-[140px] max-h-[260px] text-sm resize-y rounded-xl leading-relaxed"
              />
              <div className="flex gap-2">
                {speechSupported && (
                  <Button
                    type="button"
                    variant={isListening && voiceTarget === "history" ? "destructive" : "outline"}
                    size="sm"
                    onClick={() => {
                      // Reuse history voice target to fill narrative via setHistory; we instead reuse "history" trick
                      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
                      if (!SpeechRecognition) { toast.error("Sem suporte de voz"); return; }
                      if (isListening && recognitionRef.current) { recognitionRef.current.stop(); setIsListening(false); return; }
                      const r = new SpeechRecognition();
                      r.lang = "pt-BR"; r.continuous = true; r.interimResults = true;
                      recognitionRef.current = r; setVoiceTarget("history");
                      let final = "";
                      r.onstart = () => setIsListening(true);
                      r.onresult = (ev: any) => {
                        let interim = "";
                        for (let i = ev.resultIndex; i < ev.results.length; i++) {
                          const t = ev.results[i][0].transcript;
                          if (ev.results[i].isFinal) final += t + " ";
                          else interim = t;
                        }
                        setNarrative((prev) => (prev ? prev + " " : "") + (final + interim).trim());
                        final = "";
                      };
                      r.onerror = () => { setIsListening(false); toast.error("Erro voz"); };
                      r.onend = () => setIsListening(false);
                      r.start();
                      toast.success("🎤 Ditando relato...");
                    }}
                    className="rounded-xl h-9"
                  >
                    {isListening ? <MicOff size={14} className="mr-1.5" /> : <Mic size={14} className="mr-1.5" />}
                    {isListening ? "Parar" : "Ditar"}
                  </Button>
                )}
                <Button
                  type="submit"
                  disabled={isLoading || narrative.trim().length < 30}
                  className="flex-1 h-9 text-xs rounded-xl"
                >
                  {isLoading ? <><Loader2 size={14} className="animate-spin mr-1.5" /> Estruturando...</> : <><FileText size={14} className="mr-1.5" /> Estruturar e Analisar</>}
                </Button>
              </div>
              <p className="text-[9px] text-muted-foreground text-center">
                A IA primeiro organiza o caso (sem inventar nada), depois analisa.
              </p>
            </form>
          </TabsContent>
        </Tabs>

        <p className="text-[9px] text-muted-foreground text-center mt-1.5">
          ⚠️ Apoio à decisão clínica — não substitui o julgamento médico
        </p>
      </div>

      {/* ─── Histórico de análises ─── */}
      <Dialog open={historyOpen} onOpenChange={setHistoryOpen}>
        <DialogContent className="max-w-lg max-h-[85vh] flex flex-col overflow-hidden">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-sm">
              <History size={16} /> Histórico de análises
            </DialogTitle>
          </DialogHeader>

          {imageHistory.length === 0 ? (
            <div className="py-10 text-center text-xs text-muted-foreground">
              Nenhuma análise salva ainda.<br />
              Suas próximas análises aparecerão aqui automaticamente.
            </div>
          ) : (
            <>
              {/* Filtros + ações */}
              <div className="flex items-center gap-1.5 flex-wrap pb-1">
                <button
                  onClick={() => setHistoryFilter("ALL")}
                  className={`px-2 py-0.5 rounded-full text-[10px] font-heading font-semibold border transition-colors ${
                    historyFilter === "ALL" ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border hover:bg-muted/60"
                  }`}
                >
                  Todos ({imageHistory.length})
                </button>
                {historyModalities.map((m) => (
                  <button
                    key={m}
                    onClick={() => setHistoryFilter(m)}
                    className={`px-2 py-0.5 rounded-full text-[10px] font-heading font-semibold border transition-colors ${
                      historyFilter === m ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border hover:bg-muted/60"
                    }`}
                  >
                    {m}
                  </button>
                ))}
                <div className="ml-auto flex items-center gap-1">
                  {compareSelection.length === 2 && (
                    <button
                      onClick={() => setCompareOpen(true)}
                      className="px-2 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-heading font-semibold hover:bg-emerald-700"
                    >
                      Comparar 2
                    </button>
                  )}
                  <button
                    onClick={() => {
                      if (confirm("Limpar todo o histórico de análises?")) {
                        clearImageHistory();
                        setCompareSelection([]);
                      }
                    }}
                    className="p-1 rounded-md text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                    title="Limpar tudo"
                  >
                    <Trash2 size={12} />
                  </button>
                </div>
              </div>

              <p className="text-[9px] text-muted-foreground -mt-1 mb-1">
                Marque até 2 itens para comparar lado a lado.
              </p>

              <div className="flex-1 overflow-y-auto space-y-1.5 pr-1">
                {filteredHistory.map((h) => {
                  const date = new Date(h.timestamp);
                  const dateLabel = date.toLocaleString("pt-BR", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" });
                  const tags = h.classifications.length > 0
                    ? h.classifications.map((c) => `${c.modality} ${c.region}`).join(" · ")
                    : h.docsCount > 0 ? `${h.docsCount} PDF(s)` : "—";
                  const checked = compareSelection.includes(h.id);
                  return (
                    <div
                      key={h.id}
                      className={`flex items-stretch gap-2 p-2 rounded-lg border transition-colors ${
                        checked ? "border-primary bg-primary/5" : "border-border bg-card/60 hover:bg-muted/40"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleCompare(h.id)}
                        className="mt-1 accent-primary shrink-0"
                        aria-label="Selecionar para comparar"
                      />
                      {h.thumbnail ? (
                        <img src={h.thumbnail} alt="" className="w-12 h-12 rounded-md object-cover border border-border shrink-0" />
                      ) : (
                        <div className="w-12 h-12 rounded-md bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-border flex items-center justify-center shrink-0">
                          <FileType2 size={18} />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[11px] font-heading font-semibold truncate">
                            {h.primaryModality}
                            <span className="text-muted-foreground font-normal"> · {dateLabel}</span>
                          </span>
                        </div>
                        <div className="text-[10px] text-muted-foreground truncate">{tags}</div>
                        {h.context && (
                          <div className="text-[9px] text-muted-foreground italic truncate">"{h.context}"</div>
                        )}
                        <div className="flex items-center gap-1 mt-1">
                          <button
                            onClick={() => setHistoryDetail(h)}
                            className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-primary/10 text-primary text-[10px] font-heading font-semibold hover:bg-primary/20"
                          >
                            <Eye size={10} /> Reabrir
                          </button>
                          <button
                            onClick={() => handleReanalyze(h)}
                            className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-[10px] font-heading font-semibold hover:bg-emerald-500/20"
                            title="Reaproveitar contexto e anexar novo arquivo"
                          >
                            <RotateCcw size={10} /> Reanalisar
                          </button>
                          <button
                            onClick={() => {
                              if (confirm("Remover esta análise do histórico?")) {
                                removeImageHistoryEntry(h.id);
                                setCompareSelection((prev) => prev.filter((x) => x !== h.id));
                              }
                            }}
                            className="p-1 rounded text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                            title="Remover"
                          >
                            <X size={11} />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
                {filteredHistory.length === 0 && (
                  <p className="text-center text-xs text-muted-foreground py-6">
                    Nenhuma análise para esse filtro.
                  </p>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* ─── Detalhe (reabrir análise individual) ─── */}
      <Dialog open={!!historyDetail} onOpenChange={(o) => !o && setHistoryDetail(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] flex flex-col overflow-hidden">
          <DialogHeader>
            <DialogTitle className="text-sm flex items-center gap-2">
              <Eye size={14} />
              {historyDetail?.primaryModality} ·{" "}
              {historyDetail && new Date(historyDetail.timestamp).toLocaleString("pt-BR")}
            </DialogTitle>
          </DialogHeader>
          {historyDetail && (
            <div className="flex-1 overflow-y-auto pr-1 space-y-2">
              {historyDetail.context && (
                <p className="text-[11px] text-muted-foreground italic">
                  Indicação clínica: {historyDetail.context}
                </p>
              )}

              {/* Cabeçalho do paciente para PDF */}
              <details className="rounded-lg border border-border bg-muted/30 p-2 text-[11px]" open>
                <summary className="cursor-pointer font-heading font-semibold flex items-center gap-1.5">
                  <FileDown size={12} className="text-primary" />
                  Cabeçalho do paciente (para o PDF)
                </summary>
                <div className="grid grid-cols-2 gap-1.5 mt-2">
                  <Input
                    value={patientHeader.name || ""}
                    onChange={(e) => updatePatientHeader({ name: e.target.value })}
                    placeholder="Nome do paciente"
                    className="h-8 text-xs col-span-2"
                  />
                  <Input
                    value={patientHeader.age || ""}
                    onChange={(e) => updatePatientHeader({ age: e.target.value })}
                    placeholder="Idade"
                    className="h-8 text-xs"
                  />
                  <Input
                    value={patientHeader.sex || ""}
                    onChange={(e) => updatePatientHeader({ sex: e.target.value })}
                    placeholder="Sexo (M/F)"
                    className="h-8 text-xs"
                  />
                  <Input
                    value={patientHeader.record || ""}
                    onChange={(e) => updatePatientHeader({ record: e.target.value })}
                    placeholder="Prontuário/Atendimento"
                    className="h-8 text-xs"
                  />
                  <Input
                    value={patientHeader.professional || ""}
                    onChange={(e) => updatePatientHeader({ professional: e.target.value })}
                    placeholder="Médico responsável"
                    className="h-8 text-xs"
                  />
                </div>
                <p className="text-[9px] text-muted-foreground mt-1.5 leading-tight">
                  Os dados ficam salvos localmente neste dispositivo para reuso. Nunca são enviados ao servidor.
                </p>
              </details>

              <div className="flex items-center gap-2">
                <Button
                  type="button"
                  onClick={() => handleExportPdf(historyDetail)}
                  className="flex-1 h-9 text-xs rounded-xl"
                >
                  <FileDown size={14} className="mr-1.5" />
                  Exportar PDF
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => handleReanalyze(historyDetail)}
                  className="flex-1 h-9 text-xs rounded-xl"
                  title="Reaproveitar este contexto clínico para um novo exame"
                >
                  <RotateCcw size={14} className="mr-1.5" />
                  Reanalisar
                </Button>
              </div>

              <div className="prose prose-sm dark:prose-invert max-w-none text-xs">
                <ReactMarkdown>{historyDetail.analysis}</ReactMarkdown>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* ─── Comparação lado a lado ─── */}
      <Dialog open={compareOpen} onOpenChange={setCompareOpen}>
        <DialogContent className="max-w-5xl max-h-[90vh] flex flex-col overflow-hidden">
          <DialogHeader>
            <DialogTitle className="text-sm flex items-center gap-2">
              <ScanSearch size={14} /> Comparar análises
            </DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-1 overflow-hidden">
            {compareEntries.map((h) => (
              <div key={h.id} className="flex flex-col rounded-lg border border-border bg-card/60 overflow-hidden">
                <div className="px-2 py-1.5 border-b border-border bg-muted/40">
                  <div className="text-[11px] font-heading font-semibold">
                    {h.primaryModality}
                    <span className="text-muted-foreground font-normal"> · {new Date(h.timestamp).toLocaleString("pt-BR")}</span>
                  </div>
                  {h.context && (
                    <div className="text-[10px] text-muted-foreground italic truncate">"{h.context}"</div>
                  )}
                </div>
                <div className="flex-1 overflow-y-auto p-2 prose prose-sm dark:prose-invert max-w-none text-[11px]">
                  <ReactMarkdown>{h.analysis}</ReactMarkdown>
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default function ClinicalAI() {
  return (
    <PremiumPageGuard feature="IA Clínica" title="IA Clínica">
      <OfflineBadge message="A IA Clínica requer conexão com a internet para funcionar" />
      <ClinicalAIContent />
    </PremiumPageGuard>
  );
}
