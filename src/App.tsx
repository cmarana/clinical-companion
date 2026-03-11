import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { FavoritesProvider } from "@/contexts/FavoritesContext";
import { NotesProvider } from "@/contexts/NotesContext";
import AppLayout from "@/components/AppLayout";
import Home from "@/pages/Home";
import Protocols from "@/pages/Protocols";
import ProtocolDetail from "@/pages/ProtocolDetail";
import Medications from "@/pages/Medications";
import MedicationDetail from "@/pages/MedicationDetail";
import Quiz from "@/pages/Quiz";
import SearchPage from "@/pages/SearchPage";
import Favorites from "@/pages/Favorites";
import Notes from "@/pages/Notes";
import EmergencyMode from "@/pages/EmergencyMode";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <FavoritesProvider>
        <NotesProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route element={<AppLayout />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/protocols" element={<Protocols />} />
                  <Route path="/protocols/:id" element={<ProtocolDetail />} />
                  <Route path="/medications" element={<Medications />} />
                  <Route path="/medications/:id" element={<MedicationDetail />} />
                  <Route path="/quiz" element={<Quiz />} />
                  <Route path="/search" element={<SearchPage />} />
                  <Route path="/favorites" element={<Favorites />} />
                  <Route path="/notes" element={<Notes />} />
                  <Route path="/emergency" element={<EmergencyMode />} />
                </Route>
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </NotesProvider>
      </FavoritesProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
