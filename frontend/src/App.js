import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Home from "@/pages/Home";
import BlogIndex from "@/pages/BlogIndex";
import BlogPost from "@/pages/BlogPost";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
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
          </Routes>
        </main>
        <Footer />
        <Toaster richColors position="top-right" />
      </BrowserRouter>
    </div>
  );
}

export default App;
