import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | The Bliss Events",
  description: "Terms and conditions for using The Bliss Events website and services.",
};

export default function TermsPage() {
  return (
    <section className="bg-[#fbf5e9] py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Title */}
        <h1 className="text-center font-serif text-4xl font-semibold text-[#8B2E2E] sm:text-5xl">
          Terms & Conditions
        </h1>

        <p className="mt-4 text-center text-sm text-[#241a16]/70">
          Last updated: {new Date().getFullYear()}
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-[#241a16]/80">
          <Section title="1. Introduction">
            Welcome to <strong>The Bliss Events</strong>. By accessing or using our website,
            you agree to be bound by these Terms & Conditions. If you do not agree with any part
            of these terms, please do not use our website or services.
          </Section>

          <Section title="2. Services">
            The Bliss Events provides professional event planning and management services,
            including weddings, corporate events, social gatherings, and related services.
            All services are subject to availability and mutual agreement.
          </Section>

          <Section title="3. Use of Website">
            You agree to use this website only for lawful purposes. You must not use this site
            in any way that causes damage, disrupts accessibility, or attempts unauthorized
            access to our systems.
          </Section>

          <Section title="4. Intellectual Property">
            All content on this website, including text, images, logos, designs, and graphics,
            is the property of The Bliss Events and may not be copied, reproduced, or distributed
            without prior written consent.
          </Section>

          <Section title="5. User Submissions">
            Any information you submit through our forms (such as contact or enquiry forms)
            must be accurate and truthful. You are responsible for the information you provide.
          </Section>

          <Section title="6. Limitation of Liability">
            While we strive to provide accurate and reliable information, The Bliss Events
            shall not be held liable for any indirect, incidental, or consequential damages
            arising from the use of our website or services.
          </Section>

          <Section title="7. Third-Party Links">
            Our website may contain links to third-party services (such as WhatsApp).
            We are not responsible for the content, policies, or practices of these third parties.
          </Section>

          <Section title="8. Changes to Terms">
            We reserve the right to update or modify these Terms & Conditions at any time.
            Continued use of the website after changes implies acceptance of the updated terms.
          </Section>

          <Section title="9. Governing Law">
            These terms shall be governed by and interpreted in accordance with the laws of India.
          </Section>

          <Section title="10. Contact Us">
            If you have any questions regarding these Terms & Conditions, please contact us at:
            <br />
            <strong>Email:</strong> Theblissevents1985@gmail.com
          </Section>
        </div>
      </div>
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
