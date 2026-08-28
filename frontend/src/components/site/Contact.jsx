import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { Loader2, Mail, Phone, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Contact() {
  const [form, setForm] = useState({ full_name: "", email: "", phone: "", message: "" });
  const [consentTransactional, setConsentTransactional] = useState(false);
  const [consentPromotional, setConsentPromotional] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!form.full_name || !form.email || !form.message) {
      toast.error("Please complete the required fields.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, {
        ...form,
        message: `${form.message}\n\n[SMS consent — transactional: ${consentTransactional ? "yes" : "no"}, promotional: ${consentPromotional ? "yes" : "no"}]`,
      });
      toast.success("Thanks — we'll be in touch shortly.");
      setForm({ full_name: "", email: "", phone: "", message: "" });
      setConsentTransactional(false);
      setConsentPromotional(false);
    } catch (err) {
      toast.error("Could not send. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section data-testid="contact" id="contact" className="relative py-24 lg:py-32 bg-[#0C2340] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-14">
        <div className="lg:col-span-5">
          <img
            src="/flowstar-lighthouse.png"
            alt="Flowstar Asset Recovery"
            className="w-32 h-auto -mt-10 lg:-mt-16 mb-8"
            data-testid="contact-logo"
          />
          <div className="uppercase tracking-[0.25em] text-xs text-[#D4AF37] mb-4">Speak With Us</div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-light leading-[1.05]">
            Have a case in mind? <em className="font-medium text-[#D4AF37]">Let&apos;s talk.</em>
          </h2>
          <p className="mt-6 text-lg text-[#C1D9E8] leading-relaxed max-w-md">
            Prefer to speak to a person? Send a note and a senior associate will respond personally
            within one business day. Our team is approachable, experienced, and here to help you explore your options. No pressure, no confusing terms, just clear answers and genuine support.
          </p>

          <div className="mt-10 space-y-4">
            <div className="flex items-center gap-3 text-[#C1D9E8]"><Mail size={16} className="text-[#D4AF37]" /> hello@flowstarrecovery.com</div>
            <div className="flex items-center gap-3 text-[#C1D9E8]"><Phone size={16} className="text-[#D4AF37]" /> 513-409-3935</div>
            <div className="flex items-start gap-3 text-[#C1D9E8]"><MapPin size={16} className="text-[#D4AF37] mt-0.5" /> <span>2775 Orchard Run Rd PMB 322<br />Dayton, OH 45449</span></div>
          </div>
        </div>

        <form onSubmit={submit} className="lg:col-span-7 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 lg:p-10 space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <Label className="text-xs uppercase tracking-[0.2em] text-[#C1D9E8]">Full Name *</Label>
              <Input
                data-testid="contact-full-name"
                value={form.full_name}
                onChange={(e) => setForm({ ...form, full_name: e.target.value })}
                className="mt-2 h-12 rounded-xl bg-white/5 border-white/10 text-white placeholder:text-white/40"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <Label className="text-xs uppercase tracking-[0.2em] text-[#C1D9E8]">Email *</Label>
              <Input
                data-testid="contact-email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-2 h-12 rounded-xl bg-white/5 border-white/10 text-white placeholder:text-white/40"
                placeholder="jane@example.com"
              />
            </div>
          </div>
          <div>
            <Label className="text-xs uppercase tracking-[0.2em] text-[#C1D9E8]">Phone (optional)</Label>
            <Input
              data-testid="contact-phone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="mt-2 h-12 rounded-xl bg-white/5 border-white/10 text-white placeholder:text-white/40"
              placeholder="(555) 555-5555"
            />
          </div>
          <div>
            <Label className="text-xs uppercase tracking-[0.2em] text-[#C1D9E8]">Message *</Label>
            <textarea
              data-testid="contact-message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={5}
              className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
              placeholder="Briefly describe your situation..."
            />
          </div>
          <div className="space-y-4 pt-1">
            <label className="flex items-start gap-3 cursor-pointer" data-testid="consent-transactional-label">
              <Checkbox
                data-testid="consent-transactional"
                checked={consentTransactional}
                onCheckedChange={(v) => setConsentTransactional(!!v)}
                className="mt-1 border-white/30 data-[state=checked]:bg-[#D4AF37] data-[state=checked]:border-[#D4AF37] data-[state=checked]:text-[#0C2340]"
              />
              <span className="text-sm text-[#C1D9E8] leading-relaxed">
                I consent to receive occasional promotional text messages from Flowstar Asset Recovery LLC at
                the phone number provided. Frequency may vary. Message &amp; data rates may apply. Text Help for
                assistance, reply STOP to opt out.
              </span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer" data-testid="consent-promotional-label">
              <Checkbox
                data-testid="consent-promotional"
                checked={consentPromotional}
                onCheckedChange={(v) => setConsentPromotional(!!v)}
                className="mt-1 border-white/30 data-[state=checked]:bg-[#D4AF37] data-[state=checked]:border-[#D4AF37] data-[state=checked]:text-[#0C2340]"
              />
              <span className="text-sm text-[#C1D9E8] leading-relaxed">
                I consent to receive non-marketing text messages from Flowstar Asset Recovery LLC about my order
                updates, appointment reminder, etc. Frequency may vary. Message &amp; data rates may apply. Text
                Help for assistance, reply STOP to opt out.
              </span>
            </label>
          </div>
          <button
            data-testid="contact-submit"
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-2 px-7 h-12 rounded-full bg-[#D4AF37] hover:bg-[#B5952F] text-[#0C2340] font-semibold disabled:opacity-60"
          >
            {loading ? <Loader2 size={16} className="animate-spin" /> : null}
            Send Message
          </button>

          <div className="pt-4 border-t border-white/10 text-xs text-[#C1D9E8]" data-testid="contact-legal-links">
            By submitting, you agree to our{" "}
            <Link to="/privacy" className="text-[#D4AF37] hover:underline">Privacy Policy</Link>{" "}
            and{" "}
            <Link to="/terms" className="text-[#D4AF37] hover:underline">Terms &amp; Conditions</Link>.
          </div>
        </form>
      </div>
    </section>
  );
}
