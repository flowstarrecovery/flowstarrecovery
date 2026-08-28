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
      <div className="pt-24">
        <Contact />
      </div>
    </motion.div>
  );
}
