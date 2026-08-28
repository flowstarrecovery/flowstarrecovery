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

export default function TermsConditions() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div data-testid="terms-conditions-page" className="bg-[#F8FBFC]">
      {/* Hero */}
      <div className="relative pt-40 pb-20 bg-[#0C2340] text-white overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -right-40 w-[560px] h-[560px] rounded-full bg-[#1a3556] opacity-60 blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-10">
          <div className="uppercase tracking-[0.25em] text-xs text-[#D4AF37] mb-4">Legal</div>
          <h1 className="font-serif font-light text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
            Terms and Conditions
          </h1>
          <p className="mt-6 text-lg text-[#C1D9E8] leading-relaxed">
            Flowstar Asset Recovery LLC
          </p>
          <p className="mt-2 text-sm text-[#C1D9E8]/80">Last updated: August 28, 2026</p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-4xl mx-auto px-6 lg:px-10 py-20">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-[#526477] hover:text-[#0C2340] mb-12">
          <ArrowLeft size={14} /> Back to home
        </Link>

        <div className="space-y-4 text-[#526477] leading-relaxed text-base lg:text-lg mb-12">
          <p>
            By accessing and using Flowstar Asset Recovery LLC&apos;s website at https://flowstarrecovery.com,
            you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree
            with any part of these Terms, you must discontinue use of the website.
          </p>
          <p>
            We may update these Terms from time to time by posting a revised version on this site. Your
            continued use of the website after changes are posted constitutes acceptance of the updated Terms.
          </p>
        </div>

        <Section title="SMS Program Description">
          <p>
            Flowstar Asset Recovery LLC operates an SMS program that sends occasional promotional and
            non-promotional text messages, including surplus-fund notifications, property or asset alerts,
            consultation reminders, order or case updates, and other important information related to your
            inquiry or services requested through our website or contact forms.
          </p>
          <p>
            You will only receive these messages if you explicitly opt in, for example, by checking the SMS
            consent box on our web forms and providing your mobile number.
          </p>
          <p>After opting in, you may receive a confirmation such as:</p>
          <p className="italic">
            &ldquo;You&rsquo;re now subscribed to SMS updates from Flowstar Asset Recovery LLC. Expect occasional
            promotional and non-promotional texts like property alerts and reminders. Msg &amp; data rates may
            apply. Reply HELP for help or STOP to unsubscribe.&rdquo;
          </p>
        </Section>

        <Section title="Cancellations">
          <p>
            You can cancel the SMS service at any time. Simply text &ldquo;STOP&rdquo; to the number that is
            sending you messages.
          </p>
          <p>
            After you send &ldquo;STOP,&rdquo; we will send a confirmation SMS to let you know that you have been
            unsubscribed, and you will no longer receive SMS messages from Flowstar Asset Recovery LLC.
          </p>
          <p>
            If you want to join again, you may sign up as you did the first time, or text &ldquo;START&rdquo; if
            that option is available, and we will resume sending SMS messages to you.
          </p>
        </Section>

        <Section title="Help and Support">
          <p>
            If you are experiencing issues with the messaging program, reply &ldquo;HELP&rdquo; for assistance, or
            contact us directly:
          </p>
          <div className="text-[#0C2340] space-y-1">
            <p>Email: hello@flowstarrecovery.com</p>
            <p>Phone: +1 513-409-3935</p>
            <p>Address: 2775 Orchard Run Rd PMB 322, Dayton, OH 45449, USA</p>
          </div>
        </Section>

        <Section title="Message Frequency, Rates, and Carriers">
          <p>
            Message frequency varies based on your interaction with our services, including consultation
            requests, claim activity, updates, and reminders.
          </p>
          <p>
            Message and data rates may apply to messages sent to you by us and messages sent by you to us.
            Please contact your wireless provider for more information about your text or data plan.
          </p>
          <p>
            Our SMS services are supported by most major U.S. carriers. Carriers are not liable for delayed or
            undelivered messages.
          </p>
          <p>You must be at least 18 years of age to participate in our SMS program.</p>
        </Section>

        <Section title="Cookies">
          <p>
            Our website uses cookies to enable core functionality, remember preferences, analyze traffic, and
            improve your experience.
          </p>
          <p>
            By using the site, you agree to the use of cookies as described in our{" "}
            <Link to="/privacy" className="text-[#D4AF37] hover:underline">Privacy Policy</Link> at
            https://flowstarrecovery.com/privacy-policy.
          </p>
        </Section>

        <Section title="Intellectual Property and User Content">
          <p>
            Unless otherwise stated, Flowstar Asset Recovery LLC and/or its licensors own the intellectual
            property rights in all material on this website.
          </p>
          <p>
            You may view and use the website content for your personal, non-commercial use only. You may not
            republish, sell, rent, sublicense, reproduce, duplicate, modify, distribute, or redistribute
            content from Flowstar Asset Recovery LLC without prior written consent.
          </p>
          <p>
            If the website allows you to submit comments, inquiries, forms, or other content, you are
            responsible for the material and information you submit.
          </p>
          <p>
            Content submitted by users does not necessarily reflect the views of Flowstar Asset Recovery LLC.
            We reserve the right, but not the obligation, to monitor, review, or remove content that we consider
            inappropriate, offensive, unlawful, or in violation of these Terms.
          </p>
        </Section>

        <Section title="Links and Third-Party Sites">
          <p>
            Our website may contain links to third-party websites for your convenience. We are not responsible
            for the content, privacy policies, security, availability, or practices of third-party websites.
            You access third-party websites at your own risk.
          </p>
          <p>
            We may allow certain organizations or websites to link to our website provided that the link is not
            deceptive, does not falsely imply sponsorship, endorsement, or affiliation, and is appropriate in
            the context of the linking website.
          </p>
        </Section>

        <Section title="Disclaimer and Limitation of Liability">
          <p>
            The website and its information and services are provided on an &ldquo;as is&rdquo; and &ldquo;as
            available&rdquo; basis, without warranties regarding completeness, accuracy, reliability, suitability,
            or continued availability.
          </p>
          <p>
            To the maximum extent permitted by applicable law, Flowstar Asset Recovery LLC disclaims all
            representations, warranties, and conditions relating to this website and your use of it.
          </p>
          <p>
            Information provided on this website is for general informational purposes and does not constitute
            legal, financial, tax, or other professional advice. You should consult an appropriately qualified
            professional regarding your specific circumstances where necessary.
          </p>
          <p>
            Nothing in these Terms will limit or exclude liability for death or personal injury caused by
            negligence, fraud or fraudulent misrepresentation, or any other liability that cannot be limited or
            excluded under applicable law.
          </p>
          <p>
            Subject to the foregoing, to the maximum extent permitted by applicable law, Flowstar Asset
            Recovery LLC will not be liable for any loss or damage of any kind arising from your use of, or
            inability to use, this website or its services, including any direct, indirect, incidental,
            consequential, or other losses.
          </p>
        </Section>

        <Section title="Contact">
          <p>If you have questions about these Terms and Conditions, please contact:</p>
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
