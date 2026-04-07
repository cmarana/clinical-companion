import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { FavoritesProvider } from "@/contexts/FavoritesContext";
import { NotesProvider } from "@/contexts/NotesContext";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import { NotificationsProvider } from "@/contexts/NotificationsContext";
import AppLayout from "@/components/AppLayout";
import { PWAInstallPrompt, OfflineIndicator } from "@/components/PWAInstallPrompt";

import { lazy, Suspense } from "react";
import { ProtocolListSkeleton, ProtocolDetailSkeleton, MedicationListSkeleton } from "@/components/PageSkeleton";

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
const CPRTimer = lazy(() => import("@/pages/CPRTimer"));
const Checklists = lazy(() => import("@/pages/Checklists"));
const CIDSearch = lazy(() => import("@/pages/CIDSearch"));
const EvolutionTemplates = lazy(() => import("@/pages/EvolutionTemplates"));
const DrugCompatibility = lazy(() => import("@/pages/DrugCompatibility"));
const LabReference = lazy(() => import("@/pages/LabReference"));
const ClinicalAtlas = lazy(() => import("@/pages/ClinicalAtlas"));
const Flashcards = lazy(() => import("@/pages/Flashcards"));
const ResidencyQuiz = lazy(() => import("@/pages/ResidencyQuiz"));
const IVDilutions = lazy(() => import("@/pages/IVDilutions"));
const StudyDashboard = lazy(() => import("@/pages/StudyDashboard"));
const Profile = lazy(() => import("@/pages/Profile"));
const Notifications = lazy(() => import("@/pages/Notifications"));
const AntimicrobialGuide = lazy(() => import("@/pages/AntimicrobialGuide"));
const PediatricDoseCalculator = lazy(() => import("@/pages/PediatricDoseCalculator"));
const DocumentGenerator = lazy(() => import("@/pages/DocumentGenerator"));
const ProcedureGuides = lazy(() => import("@/pages/ProcedureGuides"));
const AnamnesisGuide = lazy(() => import("@/pages/AnamnesisGuide"));
const OfflineSetup = lazy(() => import("@/pages/OfflineSetup"));
const PushNotificationSettings = lazy(() => import("@/pages/PushNotificationSettings"));
const AdminAnalytics = lazy(() => import("@/pages/AdminAnalytics"));
const AdminFeedback = lazy(() => import("@/pages/AdminFeedback"));
const AdminDashboard = lazy(() => import("@/pages/AdminDashboard"));
const UserAnalytics = lazy(() => import("@/pages/UserAnalytics"));
const UpdatesFeed = lazy(() => import("@/pages/UpdatesFeed"));

const TermsOfUse = lazy(() => import("@/pages/TermsOfUse"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const Referral = lazy(() => import("@/pages/Referral"));
const Unsubscribe = lazy(() => import("@/pages/Unsubscribe"));

const Onboarding = lazy(() => import("@/pages/Onboarding"));
const Landing = lazy(() => import("@/pages/Landing"));
const ClinicalCaseSimulator = lazy(() => import("@/pages/ClinicalCaseSimulator"));
const InstitutionalProtocols = lazy(() => import("@/pages/InstitutionalProtocols"));
const VoiceEvolution = lazy(() => import("@/pages/VoiceEvolution"));
const PrescriptionChecker = lazy(() => import("@/pages/PrescriptionChecker"));
const Rounds = lazy(() => import("@/pages/Rounds"));
const DischargeSummary = lazy(() => import("@/pages/DischargeSummary"));
const ConductComparator = lazy(() => import("@/pages/ConductComparator"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      gcTime: 10 * 60 * 1000,
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading, profileComplete } = useAuth();
  if (loading) return <div className="min-h-screen flex items-center justify-center bg-background text-muted-foreground">Carregando...</div>;
  if (!user) return <Navigate to="/auth" replace />;
  // Wait for profile check to finish
  if (profileComplete === null) return <div className="min-h-screen flex items-center justify-center bg-background"><div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" /></div>;
  // Skip onboarding redirect if user just completed it (heading to /pricing)
  const justOnboarded = sessionStorage.getItem("pulso_just_onboarded") === "1";
  if (!profileComplete && !justOnboarded) return <Navigate to="/onboarding" replace />;
  return <>{children}</>;
}

const LazyFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="flex flex-col items-center gap-3">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      <span className="text-muted-foreground text-sm">Carregando...</span>
    </div>
  </div>
);

const SmartRoot = () => {
  const { user, loading } = useAuth();
  if (loading) return <LazyFallback />;
  if (!user) return <Landing />;
  return <ProtectedRoute><AppLayout /></ProtectedRoute>;
};

const AppRoutes = () => (
  <Suspense fallback={<LazyFallback />}>
    <Routes>
      <Route path="/index" element={<Navigate to="/" replace />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/terms" element={<TermsOfUse />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/unsubscribe" element={<Unsubscribe />} />
      <Route path="/onboarding" element={<Onboarding />} />
      
      <Route element={<ProtectedRoute><AppLayout /></ProtectedRoute>}>
        <Route path="/home" element={<Home />} />
        <Route path="/protocols" element={<Navigate to="/full-protocols" replace />} />
        <Route path="/protocols/:id" element={<ProtocolDetail />} />
        <Route path="/medications" element={<Navigate to="/bulario" replace />} />
        <Route path="/medications/:id" element={<Navigate to="/bulario" replace />} />
        <Route path="/calculators" element={<Calculators />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/emergency" element={<Suspense fallback={<ProtocolListSkeleton />}><EmergencyMode /></Suspense>} />
        <Route path="/emergency/:id" element={<Suspense fallback={<ProtocolDetailSkeleton />}><EmergencyProtocolDetail /></Suspense>} />
        <Route path="/duty" element={<DutyMode />} />
        <Route path="/prescriptions" element={<Suspense fallback={<ProtocolListSkeleton />}><Prescriptions /></Suspense>} />
        <Route path="/prescriptions/:id" element={<Suspense fallback={<ProtocolDetailSkeleton />}><PrescriptionDetail /></Suspense>} />
        <Route path="/diagnosis" element={<DiagnosisBySymptom />} />
        <Route path="/pediatrics" element={<Pediatrics />} />
        <Route path="/obstetrics" element={<Obstetrics />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/clinical-ai" element={<ClinicalAI />} />
        <Route path="/drug-interactions" element={<DrugInteractions />} />
        <Route path="/full-protocols" element={<Suspense fallback={<ProtocolListSkeleton />}><FullProtocols /></Suspense>} />
        <Route path="/full-protocols/:id" element={<Suspense fallback={<ProtocolDetailSkeleton />}><FullProtocolDetail /></Suspense>} />
        <Route path="/bulario" element={<Suspense fallback={<MedicationListSkeleton />}><Bulario /></Suspense>} />
        <Route path="/bulario/:id" element={<Suspense fallback={<ProtocolDetailSkeleton />}><BularioDetail /></Suspense>} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/cpr-timer" element={<CPRTimer />} />
        <Route path="/checklists" element={<Checklists />} />
        <Route path="/cid" element={<CIDSearch />} />
        <Route path="/evolution-templates" element={<EvolutionTemplates />} />
        <Route path="/drug-compatibility" element={<DrugCompatibility />} />
        <Route path="/lab-reference" element={<LabReference />} />
        <Route path="/clinical-atlas" element={<ClinicalAtlas />} />
        <Route path="/flashcards" element={<Flashcards />} />
        <Route path="/residency-quiz" element={<ResidencyQuiz />} />
        <Route path="/iv-dilutions" element={<IVDilutions />} />
        <Route path="/study-dashboard" element={<StudyDashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/antimicrobials" element={<AntimicrobialGuide />} />
        <Route path="/pediatric-doses" element={<PediatricDoseCalculator />} />
        <Route path="/documents" element={<DocumentGenerator />} />
        <Route path="/procedure-guides" element={<ProcedureGuides />} />
        <Route path="/anamnesis-guide" element={<AnamnesisGuide />} />
        <Route path="/offline" element={<OfflineSetup />} />
        <Route path="/push-notifications" element={<PushNotificationSettings />} />
          <Route path="/admin/analytics" element={<AdminAnalytics />} />
          <Route path="/admin/feedback" element={<AdminFeedback />} />
          <Route path="/admin/users" element={<UserAnalytics />} />
          <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/updates" element={<UpdatesFeed />} />
        
        <Route path="/referral" element={<Referral />} />
        <Route path="/case-simulator" element={<ClinicalCaseSimulator />} />
        <Route path="/institutional-protocols" element={<InstitutionalProtocols />} />
        <Route path="/voice-evolution" element={<VoiceEvolution />} />
        <Route path="/prescription-checker" element={<PrescriptionChecker />} />
        <Route path="/rounds" element={<Rounds />} />
        <Route path="/discharge-summary" element={<DischargeSummary />} />
        <Route path="/conduct-comparator" element={<ConductComparator />} />
      </Route>
      <Route path="/" element={<SmartRoot />}>
        <Route index element={<Home />} />
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
          <NotificationsProvider>
            <FavoritesProvider>
              <NotesProvider>
                <TooltipProvider>
                <Toaster />
                  <Sonner />
                   <OfflineIndicator />
                   <PWAInstallPrompt />
                   
                   <AppRoutes />
                </TooltipProvider>
              </NotesProvider>
            </FavoritesProvider>
          </NotificationsProvider>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
