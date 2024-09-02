import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { navItems } from "./nav-items";
import BlogPost from "./pages/BlogPost";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import PendidikanPolitik from "./pages/PendidikanPolitik";
import AksiSosial from "./pages/AksiSosial";
import AdvokasiKebijakan from "./pages/AdvokasiKebijakan";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow pt-16">
            <Routes>
              {navItems.map(({ to, page }) => (
                <Route key={to} path={to} element={page} />
              ))}
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/fitur/pendidikan-politik" element={<PendidikanPolitik />} />
              <Route path="/fitur/aksi-sosial" element={<AksiSosial />} />
              <Route path="/fitur/advokasi-kebijakan" element={<AdvokasiKebijakan />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;