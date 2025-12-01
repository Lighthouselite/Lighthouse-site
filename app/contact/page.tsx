import MotionSection from "@/components/MotionSection";
import SectionHeader from "@/components/SectionHeader";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="space-y-16 md:space-y-20">
      <MotionSection>
        <div className="section-shell">
          <div className="glass-card rounded-3xl p-8 md:p-10">
            <p className="badge-soft">Contact</p>
            <h1 className="mt-4 font-heading text-3xl font-semibold text-white md:text-4xl">
              Talk to Lighthouse Innovation.
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-slate-200 md:text-base">
              Interested in LUMEN pilots, EchoToken research collaborations or
              the long-range work of Athena Labs? Share a little about what
              you&apos;re working on and we&apos;ll follow up.
            </p>
          </div>
        </div>
      </MotionSection>

      <MotionSection>
        <div className="section-shell">
          <SectionHeader
            eyebrow="Get in touch"
            title="Share your idea, challenge or opportunity."
          />
          <div className="mt-8 grid gap-8 lg:grid-cols-[3fr,2fr]">
            <ContactForm />
            <div className="space-y-4 text-sm text-slate-200">
              <p>
                Lighthouse Innovation is currently prioritising partnerships
                that:
              </p>
              <ul className="space-y-2 text-sm text-slate-200">
                <li>• Run LUMEN cohorts in hubs, colleges or councils.</li>
                <li>
                  • Explore EchoToken in disaster-response, energy or remote
                  settings.
                </li>
                <li>
                  • Co-develop research and pilots under the Athena Labs banner.
                </li>
              </ul>
              <p className="text-xs text-slate-400">
                We aim to respond to serious enquiries within a few business
                days. Please avoid including sensitive or confidential details
                at this stage.
              </p>
            </div>
          </div>
        </div>
      </MotionSection>
    </div>
  );
}
