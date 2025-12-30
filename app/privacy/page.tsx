import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | The Bliss Events",
  description: "Privacy policy explaining how The Bliss Events collects and uses personal data.",
};

export default function PrivacyPage() {
  return (
    <section className="bg-[#fbf5e9] py-16 sm:py-20">
        <Navbar />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 mt-14">
        {/* Title */}
        <h1 className="text-center font-serif text-4xl font-semibold text-[#8B2E2E] sm:text-5xl">
          Privacy Policy
        </h1>

        <p className="mt-4 text-center text-sm text-[#241a16]/70">
          Last updated: {new Date().getFullYear()}
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-[#241a16]/80">
          <Section title="1. Introduction">
            At <strong>The Bliss Events</strong>, we respect your privacy and are committed
            to protecting your personal information. This Privacy Policy explains how
            we collect, use, and safeguard your data.
          </Section>

          <Section title="2. Information We Collect">
            We only collect information that you voluntarily provide through our website forms,
            including:
            <ul className="mt-2 list-disc pl-5">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Event type, date, and message details</li>
            </ul>
          </Section>

          <Section title="3. How We Use Your Information">
            Your information is used strictly for:
            <ul className="mt-2 list-disc pl-5">
              <li>Responding to enquiries</li>
              <li>Contacting you regarding our event services</li>
              <li>Providing quotations or service-related communication</li>
            </ul>
            <strong>We do not sell, rent, or share your personal data</strong> with third parties
            for marketing or advertising purposes.
          </Section>

          <Section title="4. Data Storage & Security">
            All submitted information is securely stored using trusted third-party services
            (such as our database provider). We take reasonable measures to protect your data
            from unauthorized access, loss, or misuse.
          </Section>

          <Section title="5. WhatsApp & External Communication">
            When you choose to contact us via WhatsApp, your communication is governed by
            WhatsApp’s own privacy policy. We only use WhatsApp to respond to your enquiries.
          </Section>

          <Section title="6. Cookies">
            Our website may use basic cookies to improve functionality and user experience.
            We do not use cookies for advertising or tracking purposes.
          </Section>

          <Section title="7. Data Retention">
            We retain your information only as long as necessary to respond to your enquiry
            or provide our services, unless a longer retention period is required by law.
          </Section>

          <Section title="8. Your Rights">
            You have the right to request access to, correction of, or deletion of your
            personal data. To exercise these rights, please contact us directly.
          </Section>

          <Section title="9. Changes to This Policy">
            We may update this Privacy Policy from time to time. Any changes will be posted
            on this page with an updated revision date.
          </Section>

          <Section title="10. Contact Information">
            If you have any questions or concerns about this Privacy Policy, you can reach us at:
            <br />
            <strong>Email:</strong> Theblissevents1985@gmail.com
          </Section>
        </div>
      </div>
      <Footer />
    </section>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="mb-2 text-lg font-semibold text-[#8B2E2E]">
        {title}
      </h2>
      <p>{children}</p>
    </div>
  );
}
