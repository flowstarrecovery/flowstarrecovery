import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

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
            Flowstar Asset Recovery LLC
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-4xl mx-auto px-6 lg:px-10 py-20">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-[#526477] hover:text-[#0C2340] mb-12">
          <ArrowLeft size={14} /> Back to home
        </Link>

        <p className="text-[#526477] leading-relaxed text-base lg:text-lg mb-12">
          This Privacy Policy explains how Flowstar Asset Recovery LLC (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
          collects, uses, and protects information when you visit https://flowstarrecovery.com or
          communicate with us, including by SMS.
        </p>

        <Section title="Information We Collect and Use">
          <p>
            We may collect your name, phone number, email address, mailing address, and case or claim details
            when you submit a form, request a consultation, or contact us.
          </p>
          <p>
            We use this information to evaluate and process surplus-fund, asset-recovery, or related claims;
            contact you about your inquiry; send reminders and updates; and improve our website and services.
          </p>
        </Section>

        <Section title="SMS Communications">
          <p>
            If you provide your mobile number and consent through our forms, you agree to receive text messages
            from Flowstar Asset Recovery LLC regarding surplus funds, property or asset alerts, appointment
            reminders, order or case updates, and related services.
          </p>
          <p>Required consent language includes:</p>
          <p className="italic">
            &ldquo;I consent to receive occasional promotional text messages from Flowstar Asset Recovery LLC at
            the phone number provided. Frequency may vary. Message &amp; data rates may apply. Text Help for
            assistance, reply STOP to opt out.&rdquo;
          </p>
          <p className="italic">
            &ldquo;I consent to receive non-marketing text messages from Flowstar Asset Recovery LLC about my
            order updates, appointment reminder, etc. Frequency may vary. Message &amp; data rates may apply.
            Text Help for assistance, reply STOP to opt out.&rdquo;
          </p>
          <p>
            You can cancel SMS messages at any time by texting &ldquo;STOP&rdquo; to the number that is messaging
            you. After you send &ldquo;STOP,&rdquo; we will send a confirmation SMS and you will no longer receive
            SMS messages from us.
          </p>
          <p>
            For help, reply &ldquo;HELP&rdquo; or contact us at hello@flowstarrecovery.com or +1 513-409-3935.
          </p>
          <p>
            Message and data rates may apply. Message frequency may vary. Most major U.S. carriers support the
            service but are not liable for delayed or undelivered messages. You must be at least 18 years old to
            use the SMS service. We follow applicable TCPA and CTIA guidelines.
          </p>
        </Section>

        <Section title="Cookies and Tracking">
          <p>
            Our website uses cookies to enable core functionality, remember preferences, analyze traffic, and
            enhance your experience.
          </p>
          <p>
            By using the site, you agree to the use of cookies as described in this Privacy Policy at
            https://flowstarrecovery.com/privacy-policy. Some third parties we use may also set cookies under
            their own privacy policies.
          </p>
        </Section>

        <Section title="Sharing and Security">
          <p className="text-[#0C2340] font-semibold">
            No mobile information will be shared with third parties or affiliates for marketing or promotional
            purposes.
          </p>
          <p>
            Limited sharing with subcontractors is permitted only when necessary to provide essential services,
            such as customer service, website operations, or claim processing, and is subject to appropriate
            confidentiality requirements.
          </p>
          <p>
            Opt-in data and consent information related to text messaging will never be disclosed to any third
            party for marketing or promotional purposes.
          </p>
          <p>
            We do not sell your personal information. We may share information with attorneys, professional
            partners, service providers, or relevant government, county, or other public offices when reasonably
            necessary to evaluate or process your claim, subject to appropriate safeguards.
          </p>
          <p>
            We use reasonable administrative, technical, and organizational security measures to help protect
            your information. However, no method of transmission over the internet or method of electronic
            storage is completely secure, and we cannot guarantee absolute security.
          </p>
        </Section>

        <Section title="Your Choices and Changes">
          <p>You may update your contact information by contacting us using the information provided below.</p>
          <p>
            You may opt out of marketing SMS messages at any time by following the instructions above. You may
            also contact us if you have questions about your personal information or our data practices.
          </p>
          <p>
            We may update this Privacy Policy periodically. Any changes will be posted on this page. Your
            continued use of our website after changes are posted constitutes acceptance of the updated Privacy
            Policy.
          </p>
        </Section>

        <Section title="Contact">
          <p>For questions about this Privacy Policy or our data practices, please contact:</p>
          <div className="text-[#0C2340] space-y-1">
            <p className="font-semibold">Flowstar Asset Recovery LLC</p>
            <p>Email: hello@flowstarrecovery.com</p>
            <p>Phone: +1 513-409-3935</p>
            <p>Website: https://flowstarrecovery.com</p>
            <p>Address: 2775 Orchard Run Rd PMB 322, Dayton, OH 45449, USA</p>
          </div>
        </Section>
      </div>
    </div>
  );
}
