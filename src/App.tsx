import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { FavoritesProvider } from "@/contexts/FavoritesContext";
import { NotesProvider } from "@/contexts/NotesContext";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import AppLayout from "@/components/AppLayout";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("@/pages/Home"));
const Protocols = lazy(() => import("@/pages/Protocols"));
const ProtocolDetail = lazy(() => import("@/pages/ProtocolDetail"));
const Calculators = lazy(() => import("@/pages/Calculators"));
const Quiz = lazy(() => import("@/pages/Quiz"));
const SearchPage = lazy(() => import("@/pages/SearchPage"));
const Favorites = lazy(() => import("@/pages/Favorites"));
const Notes = lazy(() => import("@/pages/Notes"));
const EmergencyMode = lazy(() => import("@/pages/EmergencyMode"));
const EmergencyProtocolDetail = lazy(() => import("@/pages/EmergencyProtocolDetail"));
const DutyMode = lazy(() => import("@/pages/DutyMode"));
const Prescriptions = lazy(() => import("@/pages/Prescriptions"));
const PrescriptionDetail = lazy(() => import("@/pages/PrescriptionDetail"));
const DiagnosisBySymptom = lazy(() => import("@/pages/DiagnosisBySymptom"));
const Pediatrics = lazy(() => import("@/pages/Pediatrics"));
const Obstetrics = lazy(() => import("@/pages/Obstetrics"));
const Internship = lazy(() => import("@/pages/Internship"));
const ClinicalAI = lazy(() => import("@/pages/ClinicalAI"));
const DrugInteractions = lazy(() => import("@/pages/DrugInteractions"));
const Auth = lazy(() => import("@/pages/Auth"));
const ResetPassword = lazy(() => import("@/pages/ResetPassword"));
const Pricing = lazy(() => import("@/pages/Pricing"));
const FullProtocols = lazy(() => import("@/pages/FullProtocols"));
const FullProtocolDetail = lazy(() => import("@/pages/FullProtocolDetail"));
const Bulario = lazy(() => import("@/pages/Bulario"));
const BularioDetail = lazy(() => import("@/pages/BularioDetail"));
const NotFound = lazy(() => import("@/pages/NotFound"));

const queryClient = new QueryClient();

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  if (loading) return <div className="min-h-screen flex items-center justify-center bg-background text-muted-foreground">Carregando...</div>;
  if (!user) return <Navigate to="/auth" replace />;
  return <>{children}</>;
}

const LazyFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-background text-muted-foreground text-sm">Carregando...</div>
);

const AppRoutes = () => (
  <Suspense fallback={<LazyFallback />}>
    <Routes>
      <Route path="/index" element={<Navigate to="/" replace />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/protocols" element={<Navigate to="/full-protocols" replace />} />
        <Route path="/protocols/:id" element={<ProtocolDetail />} />
        <Route path="/medications" element={<Navigate to="/bulario" replace />} />
        <Route path="/medications/:id" element={<Navigate to="/bulario" replace />} />
        <Route path="/calculators" element={<Calculators />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/emergency" element={<EmergencyMode />} />
        <Route path="/emergency/:id" element={<EmergencyProtocolDetail />} />
        <Route path="/duty" element={<DutyMode />} />
        <Route path="/prescriptions" element={<Prescriptions />} />
        <Route path="/prescriptions/:id" element={<PrescriptionDetail />} />
        <Route path="/diagnosis" element={<DiagnosisBySymptom />} />
        <Route path="/pediatrics" element={<Pediatrics />} />
        <Route path="/obstetrics" element={<Obstetrics />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/clinical-ai" element={<ClinicalAI />} />
        <Route path="/drug-interactions" element={<DrugInteractions />} />
        <Route path="/full-protocols" element={<FullProtocols />} />
        <Route path="/full-protocols/:id" element={<FullProtocolDetail />} />
        <Route path="/bulario" element={<Bulario />} />
        <Route path="/bulario/:id" element={<BularioDetail />} />
        <Route path="/pricing" element={<Pricing />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Suspense>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>
          <FavoritesProvider>
            <NotesProvider>
              <TooltipProvider>
                <Toaster />
                <Sonner />
                <AppRoutes />
              </TooltipProvider>
            </NotesProvider>
          </FavoritesProvider>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
