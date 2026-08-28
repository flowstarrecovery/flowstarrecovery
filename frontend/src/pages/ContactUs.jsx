import { useEffect } from "react";
import Contact from "@/components/site/Contact";

export default function ContactUs() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div data-testid="contact-us-page" className="bg-[#F8FBFC]">
      <div className="pt-24">
        <Contact />
      </div>
    </div>
  );
}
