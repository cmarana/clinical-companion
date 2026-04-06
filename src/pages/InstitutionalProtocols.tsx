import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft, Plus, Building2, Users, FileText, Copy, Check,
  Settings, UserPlus, Trash2, Edit3, Eye, Send, Search,
  ChevronRight, Shield, Pencil, EyeIcon, LogOut, Share2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import ReactMarkdown from "react-markdown";
import { motion, AnimatePresence } from "framer-motion";
import PremiumPageGuard from "@/components/PremiumPageGuard";

interface Institution {
  id: string;
  name: string;
  description: string;
  invite_code: string;
  created_by: string;
  created_at: string;
}

interface Member {
  id: string;
  user_id: string;
  role: string;
  joined_at: string;
  profile?: { full_name: string; email: string; specialty: string };
}

interface Protocol {
  id: string;
  institution_id: string;
  title: string;
  category: string;
  content: string;
  status: string;
  author_id: string;
  created_at: string;
  updated_at: string;
}

const protocolCategories = [
  "Geral", "Emergência", "UTI", "Cirurgia", "Clínica Médica", "Pediatria",
  "Obstetrícia", "Cardiologia", "Neurologia", "Infectologia", "Enfermagem",
  "Farmácia", "Administrativo", "Segurança do Paciente",
];

type View = "list" | "institution" | "create-institution" | "protocol-editor" | "protocol-view" | "join";

function InstitutionalContent() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [view, setView] = useState<View>("list");
  const [institutions, setInstitutions] = useState<Institution[]>([]);
  const [selectedInst, setSelectedInst] = useState<Institution | null>(null);
  const [members, setMembers] = useState<Member[]>([]);
  const [protocols, setProtocols] = useState<Protocol[]>([]);
  const [myRole, setMyRole] = useState<string>("");
  const [loading, setLoading] = useState(true);

  // Form states
  const [instName, setInstName] = useState("");
  const [instDesc, setInstDesc] = useState("");
  const [joinCode, setJoinCode] = useState("");
  const [protocolTitle, setProtocolTitle] = useState("");
  const [protocolCategory, setProtocolCategory] = useState("Geral");
  const [protocolContent, setProtocolContent] = useState("");
  const [protocolStatus, setProtocolStatus] = useState("draft");
  const [editingProtocol, setEditingProtocol] = useState<Protocol | null>(null);
  const [viewingProtocol, setViewingProtocol] = useState<Protocol | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedCode, setCopiedCode] = useState(false);
  const [tab, setTab] = useState("protocols");

  const fetchInstitutions = useCallback(async () => {
    if (!user) return;
    setLoading(true);
    // Get institutions where user is a member
    const { data: memberData } = await supabase
      .from("institution_members")
      .select("institution_id")
      .eq("user_id", user.id);

    if (memberData && memberData.length > 0) {
      const ids = memberData.map(m => m.institution_id);
      const { data } = await supabase
        .from("institutions")
        .select("*")
        .in("id", ids)
        .order("created_at", { ascending: false });
      setInstitutions((data as Institution[]) || []);
    } else {
      setInstitutions([]);
    }
    setLoading(false);
  }, [user]);

  useEffect(() => { fetchInstitutions(); }, [fetchInstitutions]);

  const openInstitution = useCallback(async (inst: Institution) => {
    setSelectedInst(inst);
    setView("institution");
    setTab("protocols");

    // Fetch role
    const { data: roleData } = await supabase
      .from("institution_members")
      .select("role")
      .eq("institution_id", inst.id)
      .eq("user_id", user!.id)
      .single();
    setMyRole(roleData?.role || "viewer");

    // Fetch members with profiles
    const { data: membersData } = await supabase
      .from("institution_members")
      .select("*")
      .eq("institution_id", inst.id);

    if (membersData) {
      // Fetch profiles for each member
      const userIds = membersData.map(m => m.user_id);
      const { data: profilesData } = await supabase
        .from("profiles")
        .select("user_id, full_name, email, specialty")
        .in("user_id", userIds);

      const membersWithProfiles = membersData.map(m => ({
        ...m,
        profile: profilesData?.find(p => p.user_id === m.user_id),
      }));
      setMembers(membersWithProfiles as Member[]);
    }

    // Fetch protocols
    const { data: protocolsData } = await supabase
      .from("institutional_protocols")
      .select("*")
      .eq("institution_id", inst.id)
      .order("updated_at", { ascending: false });
    setProtocols((protocolsData as Protocol[]) || []);
  }, [user]);

  const createInstitution = async () => {
    if (!instName.trim()) { toast.error("Nome da instituição é obrigatório"); return; }
    const { data, error } = await supabase
      .from("institutions")
      .insert({ name: instName.trim(), description: instDesc.trim(), created_by: user!.id })
      .select()
      .single();

    if (error) { toast.error("Erro ao criar instituição"); return; }

    // Add creator as admin
    await supabase.from("institution_members").insert({
      institution_id: data.id,
      user_id: user!.id,
      role: "admin",
    });

    toast.success("Instituição criada! Você é o administrador.");
    setInstName("");
    setInstDesc("");
    setView("list");
    fetchInstitutions();
  };

  const joinInstitution = async () => {
    if (!joinCode.trim()) { toast.error("Insira o código de convite"); return; }

    // Find institution by invite code
    const { data: inst, error } = await supabase
      .from("institutions")
      .select("*")
      .eq("invite_code", joinCode.trim().toLowerCase())
      .single();

    if (error || !inst) { toast.error("Código de convite inválido"); return; }

    // Check if already a member
    const { data: existing } = await supabase
      .from("institution_members")
      .select("id")
      .eq("institution_id", inst.id)
      .eq("user_id", user!.id)
      .maybeSingle();

    if (existing) { toast.info("Você já faz parte desta instituição"); return; }

    // Join as viewer
    const { error: joinError } = await supabase.from("institution_members").insert({
      institution_id: inst.id,
      user_id: user!.id,
      role: "viewer",
    });

    if (joinError) { toast.error("Erro ao entrar na instituição"); return; }

    toast.success(`Você entrou em ${inst.name}!`);
    setJoinCode("");
    setView("list");
    fetchInstitutions();
  };

  const saveProtocol = async () => {
    if (!protocolTitle.trim() || !protocolContent.trim()) {
      toast.error("Título e conteúdo são obrigatórios");
      return;
    }

    if (editingProtocol) {
      const { error } = await supabase
        .from("institutional_protocols")
        .update({
          title: protocolTitle.trim(),
          category: protocolCategory,
          content: protocolContent.trim(),
          status: protocolStatus,
          updated_by: user!.id,
        })
        .eq("id", editingProtocol.id);

      if (error) { toast.error("Erro ao atualizar protocolo"); return; }
      toast.success("Protocolo atualizado!");
    } else {
      const { error } = await supabase
        .from("institutional_protocols")
        .insert({
          institution_id: selectedInst!.id,
          title: protocolTitle.trim(),
          category: protocolCategory,
          content: protocolContent.trim(),
          status: protocolStatus,
          author_id: user!.id,
        });

      if (error) { toast.error("Erro ao criar protocolo"); return; }
      toast.success("Protocolo criado!");
    }

    resetProtocolForm();
    setView("institution");
    openInstitution(selectedInst!);
  };

  const deleteProtocol = async (id: string) => {
    const { error } = await supabase.from("institutional_protocols").delete().eq("id", id);
    if (error) { toast.error("Erro ao excluir"); return; }
    toast.success("Protocolo excluído");
    openInstitution(selectedInst!);
  };

  const updateMemberRole = async (memberId: string, newRole: string) => {
    const { error } = await supabase
      .from("institution_members")
      .update({ role: newRole })
      .eq("id", memberId);
    if (error) { toast.error("Erro ao atualizar papel"); return; }
    toast.success("Papel atualizado");
    openInstitution(selectedInst!);
  };

  const removeMember = async (memberId: string) => {
    const { error } = await supabase.from("institution_members").delete().eq("id", memberId);
    if (error) { toast.error("Erro ao remover membro"); return; }
    toast.success("Membro removido");
    openInstitution(selectedInst!);
  };

  const leaveInstitution = async () => {
    const { error } = await supabase
      .from("institution_members")
      .delete()
      .eq("institution_id", selectedInst!.id)
      .eq("user_id", user!.id);
    if (error) { toast.error("Erro ao sair"); return; }
    toast.success("Você saiu da instituição");
    setView("list");
    fetchInstitutions();
  };

  const copyInviteCode = () => {
    navigator.clipboard.writeText(selectedInst!.invite_code);
    setCopiedCode(true);
    toast.success("Código copiado!");
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const resetProtocolForm = () => {
    setProtocolTitle("");
    setProtocolCategory("Geral");
    setProtocolContent("");
    setProtocolStatus("draft");
    setEditingProtocol(null);
  };

  const startEditProtocol = (p: Protocol) => {
    setEditingProtocol(p);
    setProtocolTitle(p.title);
    setProtocolCategory(p.category);
    setProtocolContent(p.content);
    setProtocolStatus(p.status);
    setView("protocol-editor");
  };

  const filteredProtocols = protocols.filter(p =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const roleIcon = (role: string) => {
    if (role === "admin") return <Shield className="h-3.5 w-3.5 text-amber-500" />;
    if (role === "editor") return <Pencil className="h-3.5 w-3.5 text-blue-500" />;
    return <EyeIcon className="h-3.5 w-3.5 text-muted-foreground" />;
  };

  const roleLabel = (role: string) => {
    if (role === "admin") return "Admin";
    if (role === "editor") return "Editor";
    return "Visualizador";
  };

  const goBack = () => {
    if (view === "protocol-view") { setView("institution"); setViewingProtocol(null); }
    else if (view === "protocol-editor") { setView("institution"); resetProtocolForm(); }
    else if (view === "institution") { setView("list"); setSelectedInst(null); }
    else if (view === "create-institution" || view === "join") setView("list");
    else navigate(-1);
  };

  // ── HEADER ──
  const header = (
    <div className="sticky top-0 z-30 bg-background/95 backdrop-blur-md border-b border-border/50 px-4 py-3">
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" onClick={goBack} className="shrink-0">
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div className="min-w-0">
          <h1 className="text-lg font-bold text-foreground truncate">
            {view === "list" && "Protocolos Institucionais"}
            {view === "create-institution" && "Nova Instituição"}
            {view === "join" && "Entrar em Instituição"}
            {view === "institution" && selectedInst?.name}
            {view === "protocol-editor" && (editingProtocol ? "Editar Protocolo" : "Novo Protocolo")}
            {view === "protocol-view" && viewingProtocol?.title}
          </h1>
          <p className="text-xs text-muted-foreground">
            {view === "list" && "Crie e compartilhe protocolos com sua equipe"}
            {view === "institution" && `${members.length} membros • ${protocols.length} protocolos`}
            {view === "protocol-view" && viewingProtocol?.category}
          </p>
        </div>
      </div>
    </div>
  );

  // ── LIST VIEW ──
  if (view === "list") {
    return (
      <div className="min-h-screen bg-background">
        {header}
        <div className="px-4 py-6 max-w-lg mx-auto space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Button onClick={() => setView("create-institution")} className="h-20 flex-col gap-2" variant="outline">
              <Plus className="h-6 w-6 text-primary" />
              <span className="text-xs font-medium">Criar Instituição</span>
            </Button>
            <Button onClick={() => setView("join")} className="h-20 flex-col gap-2" variant="outline">
              <UserPlus className="h-6 w-6 text-emerald-500" />
              <span className="text-xs font-medium">Entrar com Código</span>
            </Button>
          </div>

          {loading ? (
            <div className="text-center text-muted-foreground text-sm py-8">Carregando...</div>
          ) : institutions.length === 0 ? (
            <div className="text-center py-12 space-y-3">
              <Building2 className="h-12 w-12 mx-auto text-muted-foreground/40" />
              <p className="text-muted-foreground text-sm">Nenhuma instituição ainda</p>
              <p className="text-xs text-muted-foreground/60">Crie uma ou entre com código de convite</p>
            </div>
          ) : (
            <div className="space-y-2">
              <h2 className="text-sm font-semibold text-foreground">Minhas Instituições</h2>
              {institutions.map(inst => (
                <motion.button
                  key={inst.id}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  onClick={() => openInstitution(inst)}
                  className="w-full flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all text-left"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Building2 className="h-5 w-5 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-sm text-foreground truncate">{inst.name}</p>
                    {inst.description && (
                      <p className="text-xs text-muted-foreground truncate">{inst.description}</p>
                    )}
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0" />
                </motion.button>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  // ── CREATE INSTITUTION ──
  if (view === "create-institution") {
    return (
      <div className="min-h-screen bg-background">
        {header}
        <div className="px-4 py-6 max-w-lg mx-auto space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Nome da Instituição *</label>
            <Input value={instName} onChange={e => setInstName(e.target.value)} placeholder="Hospital São Lucas" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Descrição</label>
            <Textarea value={instDesc} onChange={e => setInstDesc(e.target.value)} placeholder="Breve descrição da instituição..." rows={3} />
          </div>
          <Button className="w-full" onClick={createInstitution} disabled={!instName.trim()}>
            <Building2 className="h-4 w-4 mr-2" />
            Criar Instituição
          </Button>
        </div>
      </div>
    );
  }

  // ── JOIN INSTITUTION ──
  if (view === "join") {
    return (
      <div className="min-h-screen bg-background">
        {header}
        <div className="px-4 py-6 max-w-lg mx-auto space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Código de Convite</label>
            <Input value={joinCode} onChange={e => setJoinCode(e.target.value)} placeholder="Ex: a1b2c3d4" className="text-center text-lg tracking-widest" />
          </div>
          <p className="text-xs text-muted-foreground">Peça ao administrador da instituição o código de convite.</p>
          <Button className="w-full" onClick={joinInstitution} disabled={!joinCode.trim()}>
            <UserPlus className="h-4 w-4 mr-2" />
            Entrar na Instituição
          </Button>
        </div>
      </div>
    );
  }

  // ── PROTOCOL EDITOR ──
  if (view === "protocol-editor") {
    return (
      <div className="min-h-screen bg-background">
        {header}
        <div className="px-4 py-6 max-w-lg mx-auto space-y-4 pb-32">
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Título *</label>
            <Input value={protocolTitle} onChange={e => setProtocolTitle(e.target.value)} placeholder="Nome do protocolo" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Categoria</label>
              <Select value={protocolCategory} onValueChange={setProtocolCategory}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {protocolCategories.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Status</label>
              <Select value={protocolStatus} onValueChange={setProtocolStatus}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">Rascunho</SelectItem>
                  <SelectItem value="published">Publicado</SelectItem>
                  <SelectItem value="archived">Arquivado</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Conteúdo (Markdown) *</label>
            <Textarea
              value={protocolContent}
              onChange={e => setProtocolContent(e.target.value)}
              placeholder="Use Markdown para formatar: # Título, ## Subtítulo, - Lista, **negrito**, etc."
              rows={16}
              className="font-mono text-sm"
            />
          </div>

          <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border/50 p-4 safe-area-bottom z-20">
            <div className="max-w-lg mx-auto flex gap-3">
              <Button variant="outline" className="flex-1" onClick={() => { setView("institution"); resetProtocolForm(); }}>
                Cancelar
              </Button>
              <Button className="flex-1" onClick={saveProtocol} disabled={!protocolTitle.trim() || !protocolContent.trim()}>
                <Send className="h-4 w-4 mr-2" />
                {editingProtocol ? "Salvar" : "Criar"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── PROTOCOL VIEW ──
  if (view === "protocol-view" && viewingProtocol) {
    return (
      <div className="min-h-screen bg-background">
        {header}
        <div className="px-4 py-6 max-w-2xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant={viewingProtocol.status === "published" ? "default" : "secondary"}>
              {viewingProtocol.status === "published" ? "Publicado" : viewingProtocol.status === "draft" ? "Rascunho" : "Arquivado"}
            </Badge>
            <Badge variant="outline">{viewingProtocol.category}</Badge>
            <span className="text-xs text-muted-foreground ml-auto">
              Atualizado em {new Date(viewingProtocol.updated_at).toLocaleDateString("pt-BR")}
            </span>
          </div>
          <div className="bg-card border border-border/50 rounded-2xl p-6 prose prose-sm dark:prose-invert max-w-none">
            <ReactMarkdown>{viewingProtocol.content}</ReactMarkdown>
          </div>

          {(myRole === "admin" || myRole === "editor") && (
            <div className="flex gap-3 mt-4">
              <Button variant="outline" className="flex-1" onClick={() => startEditProtocol(viewingProtocol)}>
                <Edit3 className="h-4 w-4 mr-2" />
                Editar
              </Button>
              {myRole === "admin" && (
                <Button variant="destructive" size="icon" onClick={() => { deleteProtocol(viewingProtocol.id); setView("institution"); }}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

  // ── INSTITUTION DETAIL ──
  return (
    <div className="min-h-screen bg-background">
      {header}
      <div className="px-4 py-4 max-w-lg mx-auto">
        <Tabs value={tab} onValueChange={setTab}>
          <TabsList className="w-full mb-4">
            <TabsTrigger value="protocols" className="flex-1 gap-1.5"><FileText className="h-3.5 w-3.5" />Protocolos</TabsTrigger>
            <TabsTrigger value="members" className="flex-1 gap-1.5"><Users className="h-3.5 w-3.5" />Equipe</TabsTrigger>
            <TabsTrigger value="settings" className="flex-1 gap-1.5"><Settings className="h-3.5 w-3.5" />Config</TabsTrigger>
          </TabsList>

          {/* PROTOCOLS TAB */}
          <TabsContent value="protocols" className="space-y-3">
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Buscar protocolo..."
                  className="pl-9"
                />
              </div>
              {(myRole === "admin" || myRole === "editor") && (
                <Button size="icon" onClick={() => { resetProtocolForm(); setView("protocol-editor"); }}>
                  <Plus className="h-4 w-4" />
                </Button>
              )}
            </div>

            {filteredProtocols.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground text-sm">
                {protocols.length === 0 ? "Nenhum protocolo criado ainda" : "Nenhum resultado encontrado"}
              </div>
            ) : (
              <div className="space-y-2">
                {filteredProtocols.map(p => (
                  <motion.button
                    key={p.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={() => { setViewingProtocol(p); setView("protocol-view"); }}
                    className="w-full flex items-center gap-3 p-3 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all text-left"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <p className="font-medium text-sm text-foreground truncate">{p.title}</p>
                        {p.status === "draft" && <Badge variant="secondary" className="text-[10px] px-1.5 py-0">Rascunho</Badge>}
                        {p.status === "archived" && <Badge variant="outline" className="text-[10px] px-1.5 py-0">Arquivado</Badge>}
                      </div>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-xs text-muted-foreground">{p.category}</span>
                        <span className="text-xs text-muted-foreground/50">•</span>
                        <span className="text-xs text-muted-foreground">{new Date(p.updated_at).toLocaleDateString("pt-BR")}</span>
                      </div>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0" />
                  </motion.button>
                ))}
              </div>
            )}
          </TabsContent>

          {/* MEMBERS TAB */}
          <TabsContent value="members" className="space-y-3">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-semibold text-foreground">{members.length} membros</h3>
            </div>

            <div className="space-y-2">
              {members.map(m => (
                <div key={m.id} className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border/50">
                  <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-xs font-bold text-muted-foreground">
                    {(m.profile?.full_name || "?")[0]?.toUpperCase()}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-foreground truncate">
                      {m.profile?.full_name || "Usuário"}
                      {m.user_id === user!.id && <span className="text-muted-foreground"> (você)</span>}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">{m.profile?.specialty || m.profile?.email || ""}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {roleIcon(m.role)}
                    {myRole === "admin" && m.user_id !== user!.id ? (
                      <Select value={m.role} onValueChange={v => updateMemberRole(m.id, v)}>
                        <SelectTrigger className="h-7 w-28 text-xs"><SelectValue /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="admin">Admin</SelectItem>
                          <SelectItem value="editor">Editor</SelectItem>
                          <SelectItem value="viewer">Visualizador</SelectItem>
                        </SelectContent>
                      </Select>
                    ) : (
                      <Badge variant="outline" className="text-[10px]">{roleLabel(m.role)}</Badge>
                    )}
                    {myRole === "admin" && m.user_id !== user!.id && (
                      <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => removeMember(m.id)}>
                        <Trash2 className="h-3.5 w-3.5 text-destructive" />
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* SETTINGS TAB */}
          <TabsContent value="settings" className="space-y-4">
            <div className="bg-card border border-border/50 rounded-xl p-4 space-y-3">
              <h3 className="text-sm font-semibold text-foreground">Código de Convite</h3>
              <p className="text-xs text-muted-foreground">Compartilhe este código para que colegas entrem na instituição.</p>
              <div className="flex items-center gap-2">
                <code className="flex-1 bg-muted/50 px-4 py-2.5 rounded-lg text-center text-lg font-mono tracking-[0.3em] text-foreground">
                  {selectedInst?.invite_code}
                </code>
                <Button variant="outline" size="icon" onClick={copyInviteCode}>
                  {copiedCode ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            <div className="bg-card border border-border/50 rounded-xl p-4 space-y-3">
              <h3 className="text-sm font-semibold text-foreground">Seu papel</h3>
              <div className="flex items-center gap-2">
                {roleIcon(myRole)}
                <span className="text-sm text-foreground">{roleLabel(myRole)}</span>
              </div>
              <p className="text-xs text-muted-foreground">
                {myRole === "admin" && "Você pode gerenciar membros, criar/editar/excluir protocolos e configurar a instituição."}
                {myRole === "editor" && "Você pode criar e editar protocolos. Não pode gerenciar membros."}
                {myRole === "viewer" && "Você pode visualizar protocolos publicados. Não pode criar ou editar."}
              </p>
            </div>

            <Button variant="outline" className="w-full text-destructive hover:text-destructive gap-2" onClick={leaveInstitution}>
              <LogOut className="h-4 w-4" />
              Sair da Instituição
            </Button>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default function InstitutionalProtocols() {
  return (
    <PremiumPageGuard feature="institutional-protocols" title="Protocolos Institucionais">
      <InstitutionalContent />
    </PremiumPageGuard>
  );
}
