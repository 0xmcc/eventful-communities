import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Communities from "./pages/Communities";
import CreateEvent from "./pages/CreateEvent";
import Map from "./pages/Map";
import Onboarding from "./pages/Onboarding";
import EventDetailPage from './pages/EventDetailPage';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Map />} />
          <Route path="/communities" element={<Communities />} />
          <Route path="/create-event" element={<CreateEvent />} />
          <Route path="/map" element={<Navigate to="/" replace />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/events/:id" element={<EventDetailPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;