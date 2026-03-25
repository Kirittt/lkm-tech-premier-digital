import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
// Solutions page removed from navigation per user request
import Solutions from "./pages/Solutions";
import ITServices from "./pages/ITServices";
import Recruitment from "./pages/Recruitment";
import BenchSales from "./pages/BenchSales";
import PlacementServices from "./pages/PlacementServices";
import JobCategories from "./pages/JobCategories";
import AdminServices from "./pages/AdminServices";
import AlumniNetwork from "./pages/AlumniNetwork";
import ContingentStaffing from "./pages/ContingentStaffing";
import DirectPermanent from "./pages/DirectPermanent";
import AdditionalServices from "./pages/AdditionalServices";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import CookiePolicy from "./pages/CookiePolicy";
import DMCAPolicy from "./pages/DMCAPolicy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <main className="pt-16 md:pt-20">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/it-services" element={<ITServices />} />
            <Route path="/recruitment" element={<Recruitment />} />
            <Route path="/bench-sales" element={<BenchSales />} />
            <Route path="/placement-services" element={<PlacementServices />} />
            <Route path="/job-categories" element={<JobCategories />} />
            <Route path="/admin-services" element={<AdminServices />} />
            <Route path="/alumni-network" element={<AlumniNetwork />} />
            <Route path="/contingent-staffing" element={<ContingentStaffing />} />
            <Route path="/direct-permanent" element={<DirectPermanent />} />
            <Route path="/additional-services" element={<AdditionalServices />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
