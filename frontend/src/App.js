import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import Home from "@/pages/Home";
import BlogIndex from "@/pages/BlogIndex";
import BlogPost from "@/pages/BlogPost";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsConditions from "@/pages/TermsConditions";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";

function App() {
  return (
    <div className="App bg-[#F8FBFC] text-[#0C2340]" data-testid="app-root">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resources" element={<BlogIndex />} />
            <Route path="/resources/:slug" element={<BlogPost />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsConditions />} />
          </Routes>
        </main>
        <Footer />
        <Toaster richColors position="top-right" />
        <SpeedInsights />
        <Analytics />
      </BrowserRouter>
    </div>
  );
}

export default App;
