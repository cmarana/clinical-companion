import { useLocation, useNavigate } from "react-router-dom";
import {
  Bot, AlertTriangle, Zap, Pill, ClipboardList, BookOpen,
  Calculator, FlaskConical, Baby, Heart, Stethoscope, HelpCircle,
  Search, Star, User, StickyNote, Home, Gift
} from "lucide-react";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel,
  SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton,
  SidebarHeader,
} from "@/components/ui/sidebar";

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
];

const specialtyItems = [
  { title: "Pediatria", url: "/pediatrics", icon: Baby },
  { title: "Obstetrícia", url: "/obstetrics", icon: Heart },
  { title: "Clínica", url: "/diagnosis", icon: Stethoscope },
];

const userItems = [
  { title: "Favoritos", url: "/favorites", icon: Star },
  { title: "Notas", url: "/notes", icon: StickyNote },
  { title: "Questões", url: "/quiz", icon: HelpCircle },
  { title: "Conta", url: "/pricing", icon: User },
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

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" className="hidden md:flex">
      <SidebarHeader className="p-4">
        <span className="font-heading font-bold text-sm tracking-tight">PS Guide</span>
      </SidebarHeader>
      <SidebarContent>
        <NavGroup label="Principal" items={mainItems} />
        <NavGroup label="Clínico" items={clinicalItems} />
        <NavGroup label="Especialidades" items={specialtyItems} />
        <NavGroup label="Pessoal" items={userItems} />
      </SidebarContent>
    </Sidebar>
  );
}
