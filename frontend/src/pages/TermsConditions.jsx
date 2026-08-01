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
            Terms &amp; Conditions
          </h1>
          <p className="mt-6 text-lg text-[#C1D9E8] max-w-2xl leading-relaxed">
            These Terms and Conditions explain the rules, responsibilities, and guidelines governing your
            access to and use of the {COMPANY} website and services.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-4xl mx-auto px-6 lg:px-10 py-20">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-[#526477] hover:text-[#0C2340] mb-12">
          <ArrowLeft size={14} /> Back to home
        </Link>

        <p className="text-[#0C2340] font-semibold text-lg mb-12">{COMPANY}</p>

        <Section title="Terms and Conditions">
          <p>
            By accessing and using {COMPANY}&apos;s website at {SITE}, you agree to be bound by these Terms and
            Conditions and our Privacy Policy. If you do not agree with any part of these Terms, you must
            discontinue use of the website.
          </p>
          <p>
            We may update these Terms from time to time by posting a revised version on this site, and your
            continued use of the website after changes are posted constitutes acceptance of the updated Terms.
          </p>
        </Section>

        <Section title="SMS Program Description">
          <p>
            {COMPANY} operates an SMS program that sends occasional promotional and non-promotional text
            messages, including surplus-fund notifications, property alerts, consultation reminders, order or
            case updates, and other important information related to your inquiry or services requested through
            our website or contact forms. You will only receive these messages if you explicitly opt in, for
            example by checking the SMS consent box on our web forms and providing your mobile number.
          </p>
          <p>After opting in, you may receive a confirmation such as:</p>
          <p className="italic">
            &ldquo;You&rsquo;re now subscribed to SMS updates from {COMPANY}. Expect occasional promotional and
            non-promotional texts like property alerts and reminders. Msg &amp; data rates may apply. Reply HELP
            for help or STOP to unsubscribe.&rdquo;
          </p>
        </Section>

        <Section title="Cancellations">
          <p>
            You can cancel the SMS service at any time. Just text &ldquo;STOP&rdquo; to the number that is sending
            you messages. After you send &ldquo;STOP&rdquo;, we will send a confirmation SMS to let you know you have
            been unsubscribed and you will no longer receive SMS messages from {COMPANY}. If you want to join
            again, simply sign up as you did the first time (or text &ldquo;START&rdquo; if available), and we will
            resume sending SMS messages to you.
          </p>
        </Section>

        <Section title="Help and Support">
          <p>
            If you are experiencing issues with the messaging program, reply &ldquo;HELP&rdquo; for assistance, or
            contact us directly:
          </p>
          <div className="text-[#0C2340]">
            <p>Email: {EMAIL}</p>
            <p>Phone: {PHONE}</p>
            <p>Address: {ADDRESS}</p>
          </div>
        </Section>

        <Section title="Message Frequency, Rates, and Carriers">
          <p>
            Message frequency varies based on your interaction with our services, such as consultation requests,
            claim activity, and reminders. Message and data rates may apply for any messages sent to you from us
            and from you to us; please contact your wireless provider for more information about your text or
            data plan. Our SMS services are supported by most major U.S. carriers, and carriers are not liable
            for delayed or undelivered messages. You must be at least 18 years of age to participate in our SMS
            program.
          </p>
        </Section>

        <Section title="Cookies">
          <p>
            Our website uses cookies to enable core functionality and improve your experience. By using the
            site, you agree to the use of cookies as described in our{" "}
            <Link to="/privacy" className="text-[#D4AF37] hover:underline">Privacy Policy</Link>.
          </p>
        </Section>

        <Section title="Intellectual Property and User Content">
          <p>
            Unless otherwise stated, {COMPANY} and/or its licensors own the intellectual property rights in all
            material on this website. You may view the content for your personal use only and may not republish,
            sell, rent, sub-license, reproduce, duplicate, or redistribute content from {COMPANY} without prior
            written consent.
          </p>
          <p>
            If the site allows you to submit comments or other content, you are responsible for the material you
            post. Content posted by users does not necessarily reflect the views of {COMPANY}, and we reserve the
            right (but not the obligation) to monitor and remove content we consider inappropriate, offensive, or
            in violation of these Terms.
          </p>
        </Section>

        <Section title="Links and Third-Party Sites">
          <p>
            Our website may contain links to third-party websites for your convenience. We are not responsible
            for the content, policies, or practices of third-party sites and you access them at your own risk.
            We may allow certain organizations to link to our website as long as the link is not deceptive, does
            not imply false sponsorship or endorsement, and fits the context of the linking site.
          </p>
        </Section>

        <Section title="Disclaimer and Limitation of Liability">
          <p>
            The website and its information and services are provided on an &ldquo;as is&rdquo; and &ldquo;as
            available&rdquo; basis, without any warranties as to completeness, accuracy, or continued
            availability. To the maximum extent permitted by applicable law, {COMPANY} disclaims all
            representations, warranties, and conditions relating to this website and your use of it.
          </p>
          <p>
            Nothing in these Terms will limit or exclude liability for death or personal injury caused by
            negligence, fraud or fraudulent misrepresentation, or any other liability that cannot be limited or
            excluded under applicable law. Subject to that, we will not be liable for any loss or damage of any
            kind arising from the use of, or inability to use, this website or its services, especially while the
            website and information are provided free of charge.
          </p>
        </Section>
      </div>
    </div>
  );
}
