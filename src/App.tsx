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
import Home from "@/pages/Home";
import Protocols from "@/pages/Protocols";
import ProtocolDetail from "@/pages/ProtocolDetail";
import Medications from "@/pages/Medications";
import MedicationDetail from "@/pages/MedicationDetail";
import Calculators from "@/pages/Calculators";
import Quiz from "@/pages/Quiz";
import SearchPage from "@/pages/SearchPage";
import Favorites from "@/pages/Favorites";
import Notes from "@/pages/Notes";
import EmergencyMode from "@/pages/EmergencyMode";
import DutyMode from "@/pages/DutyMode";
import Prescriptions from "@/pages/Prescriptions";
import PrescriptionDetail from "@/pages/PrescriptionDetail";
import DiagnosisBySymptom from "@/pages/DiagnosisBySymptom";
import Pediatrics from "@/pages/Pediatrics";
import Obstetrics from "@/pages/Obstetrics";
import Internship from "@/pages/Internship";
import ClinicalAI from "@/pages/ClinicalAI";
import DrugInteractions from "@/pages/DrugInteractions";
import Auth from "@/pages/Auth";
import ResetPassword from "@/pages/ResetPassword";
import Pricing from "@/pages/Pricing";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  if (loading) return <div className="min-h-screen flex items-center justify-center bg-background text-muted-foreground">Carregando...</div>;
  if (!user) return <Navigate to="/auth" replace />;
  return <>{children}</>;
}

const AppRoutes = () => (
  <Routes>
    <Route path="/auth" element={<Auth />} />
    <Route path="/reset-password" element={<ResetPassword />} />
    <Route element={<ProtectedRoute><AppLayout /></ProtectedRoute>}>
      <Route path="/" element={<Home />} />
      <Route path="/protocols" element={<Protocols />} />
      <Route path="/protocols/:id" element={<ProtocolDetail />} />
      <Route path="/medications" element={<Medications />} />
      <Route path="/medications/:id" element={<MedicationDetail />} />
      <Route path="/calculators" element={<Calculators />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/emergency" element={<EmergencyMode />} />
      <Route path="/duty" element={<DutyMode />} />
      <Route path="/prescriptions" element={<Prescriptions />} />
      <Route path="/prescriptions/:id" element={<PrescriptionDetail />} />
      <Route path="/diagnosis" element={<DiagnosisBySymptom />} />
      <Route path="/pediatrics" element={<Pediatrics />} />
      <Route path="/obstetrics" element={<Obstetrics />} />
      <Route path="/internship" element={<Internship />} />
      <Route path="/clinical-ai" element={<ClinicalAI />} />
      <Route path="/drug-interactions" element={<DrugInteractions />} />
      <Route path="/pricing" element={<Pricing />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <AuthProvider>
        <FavoritesProvider>
          <NotesProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <AppRoutes />
              </BrowserRouter>
            </TooltipProvider>
          </NotesProvider>
        </FavoritesProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
