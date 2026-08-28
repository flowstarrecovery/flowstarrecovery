import { useEffect } from "react";
import { motion } from "framer-motion";
import Contact from "@/components/site/Contact";

export default function ContactUs() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <motion.div
      data-testid="contact-us-page"
      className="bg-[#F8FBFC]"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      {/* Page heading */}
      <div className="relative pt-40 pb-16 bg-[#F8FBFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <div className="uppercase tracking-[0.25em] text-xs text-[#D4AF37] mb-4">Get in Touch</div>
          <h1 className="font-serif font-light text-5xl sm:text-6xl lg:text-7xl text-[#0C2340] leading-[1.02]">
            Contact <em className="font-medium">Us</em>
          </h1>
        </div>
      </div>

      <Contact />
    </motion.div>
  );
}
