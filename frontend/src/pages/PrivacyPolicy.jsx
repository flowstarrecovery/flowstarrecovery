import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const COMPANY = "Flowstar Asset Recovery, LLC";
const EMAIL = "hello@flowstarrecovery.com";
const PHONE = "513-409-3935";
const ADDRESS = "2775 Orchard Run Rd PMB 322, Dayton, OH 45449";
const SITE = "https://flowstarrecovery.com";

function Section({ title, children }) {
  return (
    <div className="mb-10">
      <h2 className="font-serif text-2xl lg:text-3xl text-[#0C2340] mb-4">{title}</h2>
      <div className="space-y-4 text-[#526477] leading-relaxed text-base lg:text-lg">{children}</div>
    </div>
  );
}

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div data-testid="privacy-policy-page" className="bg-[#F8FBFC]">
      {/* Hero */}
      <div className="relative pt-40 pb-20 bg-[#0C2340] text-white overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -right-40 w-[560px] h-[560px] rounded-full bg-[#1a3556] opacity-60 blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-10">
          <div className="uppercase tracking-[0.25em] text-xs text-[#D4AF37] mb-4">Legal</div>
          <h1 className="font-serif font-light text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
            Privacy Policy
          </h1>
          <p className="mt-6 text-lg text-[#C1D9E8] max-w-2xl leading-relaxed">
            Your privacy matters to us. This policy explains how {COMPANY} collects, uses, shares, and
            protects your information when you visit our site or use our services.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-4xl mx-auto px-6 lg:px-10 py-20">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-[#526477] hover:text-[#0C2340] mb-12">
          <ArrowLeft size={14} /> Back to home
        </Link>

        <p className="text-[#0C2340] font-semibold text-lg mb-12">{COMPANY}</p>

        <Section title="Privacy Policy">
          <p>
            This Privacy Policy explains how {COMPANY} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) collects,
            uses, and protects information when you visit {SITE} or communicate with us, including by SMS.
          </p>
        </Section>

        <Section title="Information We Collect and Use">
          <p>
            We may collect your name, phone number, email address, mailing address, and case or claim details
            when you submit a form, request a consultation, or contact us. We use this information to evaluate
            and process surplus-fund or related claims, contact you about your inquiry, send reminders and
            updates, and improve our website and services.
          </p>
        </Section>

        <Section title="SMS Communications">
          <p>
            If you provide your mobile number and consent on our forms, you agree to receive text messages from
            {" "}{COMPANY} about surplus funds, case alerts, appointment reminders, order or case updates, and
            related services. Required consent language includes:
          </p>
          <p className="italic">
            &ldquo;I consent to receive occasional promotional text messages from {COMPANY} at the phone number
            provided. Frequency may vary. Message &amp; data rates may apply. Text HELP for assistance, reply STOP
            to opt out.&rdquo;
          </p>
          <p className="italic">
            &ldquo;I consent to receive non-marketing text messages from {COMPANY} about my order updates,
            appointment reminder, etc. Frequency may vary. Message &amp; data rates may apply. Text HELP for
            assistance, reply STOP to opt out.&rdquo;
          </p>
          <p>
            You can cancel SMS at any time by texting &ldquo;STOP&rdquo; to the number that is messaging you; after
            you send &ldquo;STOP,&rdquo; we will send a confirmation SMS and you will no longer receive SMS from us.
            For help, reply &ldquo;HELP&rdquo; or contact us at {EMAIL} or {PHONE}. Message and data rates may apply,
            frequency may vary, most major U.S. carriers support the service but are not liable for delayed or
            undelivered messages, and you must be at least 18; we follow TCPA and CTIA guidelines.
          </p>
        </Section>

        <Section title="Cookies and Tracking">
          <p>
            Our website uses cookies to enable core functionality, remember preferences, analyze traffic, and
            enhance your experience. By using the site, you agree to the use of cookies as described in this
            Privacy Policy; some third parties we use may also set cookies under their own policies.
          </p>
        </Section>

        <Section title="Sharing and Security">
          <p className="text-[#0C2340] font-semibold">
            No mobile information will be shared with third parties or affiliates for marketing or promotional
            purposes. Limited sharing with subcontractors is permitted only for essential services (such as
            customer service), and under strict confidentiality requirements. Opt-in data and consent
            information related to text messaging will never be disclosed to any third party.
          </p>
          <p>
            We do not sell your personal information. We may share it with attorneys, professional partners,
            service providers, or relevant government or county offices as needed to evaluate or process your
            claim, under appropriate safeguards. We use reasonable security measures to help protect your
            information, though no method of transmission or storage is completely secure.
          </p>
        </Section>

        <Section title="Your Choices and Changes">
          <p>
            You may update your contact details by reaching out to us and may opt out of marketing SMS at any
            time as described above. We may update this Privacy Policy periodically; your continued use of the
            site after changes are posted means you accept the updated policy.
          </p>
        </Section>

        <Section title="Contact">
          <p>For questions about this Privacy Policy or our data practices, contact:</p>
          <div className="text-[#0C2340]">
            <p>{COMPANY}</p>
            <p>{ADDRESS}</p>
            <p>{EMAIL}</p>
            <p>{PHONE}</p>
          </div>
        </Section>
      </div>
    </div>
  );
}
