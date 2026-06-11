import EpidemiologicalMonitoring from "@/pages/EpidemiologicalMonitoring";
import PatientLoop from "@/pages/PatientLoop";
import MunicipalEpidemiology from "@/pages/MunicipalEpidemiology";
import EpidemicMap from "@/pages/EpidemicMap";
import RemumeConsulta from "@/pages/RemumeConsulta";
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

import UpdatePromptDialog from "@/components/UpdatePromptDialog";
import StatusBarScrim from "@/components/StatusBarScrim";

import { lazy, Suspense, useEffect } from "react";
import { ProtocolListSkeleton, ProtocolDetailSkeleton, MedicationListSkeleton } from "@/components/PageSkeleton";
import { APP_LAUNCH_STATUS } from "@/config/launchStatus";
import { useAppAccess } from "@/hooks/useAppAccess";
import { useTwoFactor } from "@/hooks/useTwoFactor";
import TwoFactorGate from "@/components/TwoFactorGate";
import { SessionRevokedListener } from "@/components/SessionRevokedListener";
import { isDemoMode } from "@/lib/demoMode";

const Home = lazy(() => import("@/pages/Home"));
const Protocols = lazy(() => import("@/pages/Protocols"));
const ProtocolDetail = lazy(() => import("@/pages/ProtocolDetail"));
const Calculators = lazy(() => import("@/pages/Calculators"));
const Tools = lazy(() => import("@/pages/Tools"));
const Specialties = lazy(() => import("@/pages/Specialties"));
const Quiz = lazy(() => import("@/pages/Quiz"));
const SearchPage = lazy(() => import("@/pages/SearchPage"));
const Favorites = lazy(() => import("@/pages/Favorites"));
const Notes = lazy(() => import("@/pages/Notes"));
const EmergencyMode = lazy(() => import("@/pages/EmergencyMode"));
const EmergencyProtocolDetail = lazy(() => import("@/pages/EmergencyProtocolDetail"));
const EmergencyCategoryPage = lazy(() => import("@/pages/EmergencyCategoryPage"));
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
const Status = lazy(() => import("@/pages/Status"));
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
const Toxicology = lazy(() => import("@/pages/Toxicology"));
const ShiftManager = lazy(() => import("@/pages/ShiftManager"));
const PediatricDoseCalculator = lazy(() => import("@/pages/PediatricDoseCalculator"));
const DocumentGenerator = lazy(() => import("@/pages/DocumentGenerator"));
const ProcedureGuides = lazy(() => import("@/pages/ProcedureGuides"));
const AnamnesisGuide = lazy(() => import("@/pages/AnamnesisGuide"));
const OfflineSetup = lazy(() => import("@/pages/OfflineSetup"));
const PushNotificationSettings = lazy(() => import("@/pages/PushNotificationSettings"));
const AdminAnalytics = lazy(() => import("@/pages/AdminAnalytics"));
const AdminFeedback = lazy(() => import("@/pages/AdminFeedback"));
const AdminSamuAudit = lazy(() => import("@/pages/AdminSamuAudit"));
const AdminDashboard = lazy(() => import("@/pages/AdminDashboard"));
const GovernanceDashboard = lazy(() => import("@/pages/GovernanceDashboard"));
const AdminAiCosts = lazy(() => import("@/pages/AdminAiCosts"));
const AdminMedicalKnowledge = lazy(() => import("@/pages/AdminMedicalKnowledge"));
const AdminTestUsers = lazy(() => import("@/pages/AdminTestUsers"));
const AdminGuidelineReview = lazy(() => import("@/pages/AdminGuidelineReview"));
const ValidationChecklist = lazy(() => import("@/pages/ValidationChecklist"));
const CoverageAudit = lazy(() => import("@/pages/CoverageAudit"));
const UserAnalytics = lazy(() => import("@/pages/UserAnalytics"));
const UpdatesFeed = lazy(() => import("@/pages/UpdatesFeed"));

const TermsOfUse = lazy(() => import("@/pages/TermsOfUse"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const Referral = lazy(() => import("@/pages/Referral"));
const Unsubscribe = lazy(() => import("@/pages/Unsubscribe"));
const About = lazy(() => import("@/pages/About"));
const HelpCenter = lazy(() => import("@/pages/HelpCenter"));

const Onboarding = lazy(() => import("@/pages/Onboarding"));
const Landing = lazy(() => import("@/pages/Landing"));
const PrelaunchLanding = lazy(() => import("@/pages/PrelaunchLanding"));
const ComingSoon = lazy(() => import("@/pages/ComingSoon"));
const AdminLaunchSignups = lazy(() => import("@/pages/AdminLaunchSignups"));
const ClinicalCaseSimulator = lazy(() => import("@/pages/ClinicalCaseSimulator"));
const InstitutionalProtocols = lazy(() => import("@/pages/InstitutionalProtocols"));
const VoiceEvolution = lazy(() => import("@/pages/VoiceEvolution"));
const PrescriptionChecker = lazy(() => import("@/pages/PrescriptionChecker"));
const Rounds = lazy(() => import("@/pages/Rounds"));
const DischargeSummary = lazy(() => import("@/pages/DischargeSummary"));
const ConductComparator = lazy(() => import("@/pages/ConductComparator"));
const Demo = lazy(() => import("@/pages/Demo"));
const WebSummitLanding = lazy(() => import("@/pages/WebSummit/WebSummitLanding"));
const DemoBooth = lazy(() => import("@/pages/DemoBooth/DemoBooth"));
import EventAccessClaimer from "@/integrations/event-access/EventAccessClaimer";
import EventAccessBadgePortal from "@/integrations/event-access/EventAccessBadgePortal";
import SamuCodeRedirect from "@/pages/SamuCodeRedirect";

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
  const { hasAccess, loading: accessLoading } = useAppAccess();
  const twoFa = useTwoFactor();
  // Demo mode bypasses all gates (auth, prelaunch, onboarding, 2FA).
  if (isDemoMode()) return <>{children}</>;
  if (loading) return <LazyFallback />;
  if (!user) return <Navigate to="/auth" replace />;
  if (APP_LAUNCH_STATUS === "prelaunch") {
    if (accessLoading || hasAccess === null) return <LazyFallback />;
    if (!hasAccess) return <Navigate to="/coming-soon" replace />;
  }
  if (profileComplete === null) return <LazyFallback />;
  const justOnboarded = sessionStorage.getItem("pulso_just_onboarded") === "1";
  if (!profileComplete && !justOnboarded) return <Navigate to="/onboarding" replace />;
  if (twoFa.loading) return <LazyFallback />;
  if (twoFa.needsVerification) {
    return <TwoFactorGate onVerified={() => twoFa.refresh()} />;
  }
  return <>{children}</>;
}

const LazyFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-transparent">
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-2 border-primary/20" />
        <div className="absolute inset-0 rounded-full border-2 border-primary border-t-transparent animate-spin" />
      </div>
    </div>
  </div>
);

const SmartRoot = () => {
  const { user, loading } = useAuth();
  const { hasAccess, loading: accessLoading } = useAppAccess();
  if (APP_LAUNCH_STATUS === "prelaunch") {
    // Provisional landing for everyone; authorized users get sent to /home.
    if (loading) return <LazyFallback />;
    if (user) {
      if (accessLoading || hasAccess === null) return <LazyFallback />;
      if (hasAccess) return <Navigate to="/home" replace />;
    }
    return <PrelaunchLanding />;
  }
  if (loading) return <LazyFallback />;
  if (!user) return <Landing />;
  return <Navigate to="/home" replace />;
};

const AppRoutes = () => (
  <Suspense fallback={<LazyFallback />}>
    <Routes>
      <Route path="/index" element={<Navigate to="/" replace />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/landing-original" element={<Landing />} />
      <Route path="/coming-soon" element={<ComingSoon />} />
      <Route path="/prelaunch" element={<PrelaunchLanding />} />
      <Route path="/demo" element={<Demo />} />
      <Route path="/websummit" element={<WebSummitLanding />} />
      <Route path="/demo-booth" element={<DemoBooth />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/terms" element={<TermsOfUse />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/unsubscribe" element={<Unsubscribe />} />
      <Route path="/about" element={<About />} />
      <Route path="/help" element={<HelpCenter />} />
      <Route path="/ajuda" element={<Navigate to="/help" replace />} />
      <Route path="/faq" element={<Navigate to="/help" replace />} />
      <Route path="/onboarding" element={<Onboarding />} />
      
      <Route element={<ProtectedRoute><AppLayout /></ProtectedRoute>}>
        <Route path="/home" element={<Home />} />
        <Route path="/protocols" element={<Navigate to="/full-protocols" replace />} />
        <Route path="/protocols/:id" element={<ProtocolDetail />} />
        <Route path="/medications" element={<Navigate to="/bulario" replace />} />
        <Route path="/medications/:id" element={<Navigate to="/bulario" replace />} />
        <Route path="/calculators" element={<Calculators />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/specialties" element={<Specialties />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/emergency" element={<Suspense fallback={<ProtocolListSkeleton />}><EmergencyMode /></Suspense>} />
        <Route path="/emergency/category/:categoryId" element={<Suspense fallback={<ProtocolListSkeleton />}><EmergencyCategoryPage /></Suspense>} />
        <Route path="/emergency/:id" element={<Suspense fallback={<ProtocolDetailSkeleton />}><EmergencyProtocolDetail /></Suspense>} />
        <Route path="/emergency-doses" element={<Navigate to="/emergency" replace />} />
        <Route path="/doses-emergencia" element={<Navigate to="/emergency" replace />} />
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
        <Route path="/toxicology" element={<Toxicology />} />
        <Route path="/shift-manager" element={<ShiftManager />} />
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
          <Route path="/admin/governance" element={<GovernanceDashboard />} />
          <Route path="/admin/ai-costs" element={<AdminAiCosts />} />
          <Route path="/admin/medical-knowledge" element={<AdminMedicalKnowledge />} />
          <Route path="/admin/test-users" element={<AdminTestUsers />} />
          <Route path="/admin/guideline-review" element={<AdminGuidelineReview />} />
          <Route path="/admin/validation" element={<ValidationChecklist />} />
          <Route path="/admin/coverage-audit" element={<CoverageAudit />} />
          <Route path="/admin/samu-audit" element={<AdminSamuAudit />} />
          <Route path="/admin/launch-signups" element={<AdminLaunchSignups />} />
        <Route path="/updates" element={<UpdatesFeed />} />
        
        <Route path="/referral" element={<Referral />} />
        <Route path="/case-simulator" element={<ClinicalCaseSimulator />} />
        <Route path="/institutional-protocols" element={<InstitutionalProtocols />} />
        <Route path="/voice-evolution" element={<VoiceEvolution />} />
        <Route path="/prescription-checker" element={<PrescriptionChecker />} />
        <Route path="/rounds" element={<Rounds />} />
        <Route path="/discharge-summary" element={<DischargeSummary />} />
        <Route path="/conduct-comparator" element={<ConductComparator />} />
          <Route path="/epidemiology" element={<EpidemiologicalMonitoring />} />
          <Route path="/patient-loop" element={<PatientLoop />} />
          <Route path="/epidemiology/municipal" element={<MunicipalEpidemiology />} />
          <Route path="/epidemiology/map" element={<EpidemicMap />} />
          <Route path="/remume" element={<RemumeConsulta />} />
        <Route path="/samu-protocols" element={<Navigate to="/emergency" replace />} />
        <Route path="/samu-protocols/gaps" element={<Navigate to="/emergency" replace />} />
        <Route path="/samu-protocols/:code" element={<SamuCodeRedirect />} />
      </Route>
      <Route path="/" element={<SmartRoot />} />
      <Route path="/status" element={<Status />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Suspense>
);

const SplashHider = () => {
  useEffect(() => {
    // Hide splash as soon as React has mounted (next frame after first paint)
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const fn = (window as any).__pulsoHideSplash;
        if (typeof fn === "function") fn();
      });
    });
    return () => cancelAnimationFrame(id);
  }, []);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>
          <NotificationsProvider>
            <FavoritesProvider>
              <NotesProvider>
                <TooltipProvider>
                  <SplashHider />
                  <StatusBarScrim />
                  <Toaster />
                  <Sonner />
                  <SessionRevokedListener />
                  <OfflineIndicator />
                  <PWAInstallPrompt />
                  
                  <UpdatePromptDialog />
                  <EventAccessClaimer />
                  <EventAccessBadgePortal />
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
