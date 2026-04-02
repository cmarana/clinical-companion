import { useLocation, useNavigate } from "react-router-dom";
import {
  Bot, AlertTriangle, Zap, Pill, ClipboardList, BookOpen,
  Calculator, FlaskConical, Baby, Heart, Stethoscope, HelpCircle,
  Search, Star, User, StickyNote, Home, Gift, Timer, Hash, 
  TestTubes, Droplets, Brain, GraduationCap, BarChart3, FileEdit,
  Syringe, ScanLine, WifiOff, ChevronRight
} from "lucide-react";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel,
  SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton,
  SidebarHeader, SidebarFooter,
} from "@/components/ui/sidebar";
import { useFavorites } from "@/contexts/FavoritesContext";
import { useAuth } from "@/contexts/AuthContext";
import { ScrollArea } from "@/components/ui/scroll-area";
import pulsoLogo from "@/assets/pulso-logo.png";

const mainItems = [
  { title: "Início", url: "/", icon: Home },
  { title: "Busca", url: "/search", icon: Search },
  { title: "IA Clínica", url: "/clinical-ai", icon: Bot },
];

const clinicalItems = [
  { title: "Modo Plantão", url: "/duty", icon: AlertTriangle },
  { title: "Emergência / UTI", url: "/emergency", icon: Zap },
  { title: "Protocolos", url: "/full-protocols", icon: BookOpen },
  { title: "Bulário", url: "/bulario", icon: Pill },
  { title: "Prescrições", url: "/prescriptions", icon: ClipboardList },
  { title: "Calculadoras", url: "/calculators", icon: Calculator },
  { title: "Interações", url: "/drug-interactions", icon: FlaskConical },
  { title: "Diluições IV", url: "/iv-dilutions", icon: Droplets },
  { title: "Timer PCR", url: "/cpr-timer", icon: Timer },
];

const specialtyItems = [
  { title: "Pediatria", url: "/pediatrics", icon: Baby },
  { title: "Doses Pediátricas", url: "/pediatric-doses", icon: Calculator },
  { title: "Obstetrícia", url: "/obstetrics", icon: Heart },
  { title: "Clínica", url: "/diagnosis", icon: Stethoscope },
  { title: "Atlas Clínico", url: "/clinical-atlas", icon: ScanLine },
  { title: "Antimicrobianos", url: "/antimicrobials", icon: Syringe },
  { title: "Procedimentos", url: "/procedure-guides", icon: Syringe },
  { title: "CID-10", url: "/cid", icon: Hash },
  { title: "Valores de Ref.", url: "/lab-reference", icon: TestTubes },
];

const studyItems = [
  { title: "Questões", url: "/quiz", icon: HelpCircle },
  { title: "Flashcards", url: "/flashcards", icon: Brain },
  { title: "Residência", url: "/residency-quiz", icon: GraduationCap },
  { title: "Dashboard", url: "/study-dashboard", icon: BarChart3 },
  { title: "Evoluções", url: "/evolution-templates", icon: FileEdit },
];

const userItems = [
  { title: "Favoritos", url: "/favorites", icon: Star },
  { title: "Notas", url: "/notes", icon: StickyNote },
  { title: "Indique e Ganhe", url: "/referral", icon: Gift },
  { title: "Conta", url: "/pricing", icon: User },
  { title: "Modo Offline", url: "/offline", icon: WifiOff },
];

function NavGroup({ label, items }: { label: string; items: typeof mainItems }) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>{label}</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => {
            const active = item.url === "/"
              ? location.pathname === "/"
              : location.pathname.startsWith(item.url);
            return (
              <SidebarMenuItem key={item.url}>
                <SidebarMenuButton
                  isActive={active}
                  onClick={() => navigate(item.url)}
                  tooltip={item.title}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}

function FavoritesQuickAccess() {
  const { favorites } = useFavorites();
  const navigate = useNavigate();
  const recentFavs = favorites.slice(0, 5);

  if (recentFavs.length === 0) return null;

  return (
    <SidebarGroup>
      <SidebarGroupLabel>
        <Star className="h-3 w-3 mr-1 text-amber-500" />
        Favoritos Rápidos
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {recentFavs.map((fav) => {
            const path = fav.type === "protocol"
              ? `/full-protocols/${fav.id}`
              : fav.type === "medication"
              ? `/bulario/${fav.id}`
              : fav.type === "prescription"
              ? `/prescriptions/${fav.id}`
              : `/full-protocols/${fav.id}`;
            return (
              <SidebarMenuItem key={fav.id}>
                <SidebarMenuButton
                  onClick={() => navigate(path)}
                  tooltip={fav.title}
                  className="text-xs"
                >
                  <Star className="h-3 w-3 text-amber-500 fill-amber-500" />
                  <span className="truncate">{fav.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
          {favorites.length > 5 && (
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => navigate("/favorites")}
                className="text-xs text-muted-foreground"
              >
                <ChevronRight className="h-3 w-3" />
                <span>Ver todos ({favorites.length})</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}

export function AppSidebar() {
  const { user } = useAuth();

  return (
    <Sidebar collapsible="icon" className="hidden md:flex">
      <SidebarHeader className="p-3">
        <div className="flex items-center gap-2">
          <img src={pulsoLogo} alt="PULSO" width={28} height={28} className="rounded-lg" />
          <div className="flex flex-col group-data-[collapsible=icon]:hidden">
            <span className="font-heading font-bold text-sm tracking-tight text-primary">PULSO</span>
            <span className="text-[9px] text-muted-foreground -mt-0.5">Emergência Médica</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <ScrollArea className="flex-1">
          <NavGroup label="Principal" items={mainItems} />
          {user && <FavoritesQuickAccess />}
          <NavGroup label="Clínico" items={clinicalItems} />
          <NavGroup label="Especialidades" items={specialtyItems} />
          <NavGroup label="Estudo" items={studyItems} />
          <NavGroup label="Pessoal" items={userItems} />
        </ScrollArea>
      </SidebarContent>
      <SidebarFooter className="p-3 group-data-[collapsible=icon]:hidden">
        <p className="text-[9px] text-muted-foreground text-center">
          © 2025 PULSO
        </p>
      </SidebarFooter>
    </Sidebar>
  );
}
