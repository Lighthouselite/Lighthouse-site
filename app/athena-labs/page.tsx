import MotionSection from "@/components/MotionSection";
import SectionHeader from "@/components/SectionHeader";
import FeatureCard from "@/components/FeatureCard";

export default function AthenaLabsPage() {
  return (
    <div className="space-y-16 md:space-y-20">
      <MotionSection>
        <div className="section-shell">
          <div className="glass-card rounded-3xl p-8 md:p-10">
            <p className="badge-soft">Athena Labs • R&amp;D</p>
            <h1 className="mt-4 font-heading text-3xl font-semibold text-white md:text-4xl">
              Athena Labs – Advanced systems R&amp;D for the Dyson-swarm era.
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-slate-200 md:text-base">
              Athena Labs is the deep R&amp;D branch of Lighthouse Innovation.
              It explores the long arc of our work — from LUMEN learners and
              EchoToken prototypes to self-healing swarms and Dyson-scale
              infrastructure.
            </p>
          </div>
        </div>
      </MotionSection>

      <MotionSection>
        <div className="section-shell">
          <SectionHeader
            eyebrow="R&amp;D Pillars"
            title="Three pillars, one trajectory."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <FeatureCard
              title="EdTech systems"
              description="Turning learners into maintainers and designers of the systems we deploy."
              tag="LUMEN"
            />
            <FeatureCard
              title="Resilient communications"
              description="EchoToken-inspired protocols that operate where conventional networks fail."
              tag="EchoToken"
            />
            <FeatureCard
              title="Space &amp; Dyson structures"
              description="Exploring Dyson-swarm concepts, distributed power and long-duration operations."
              tag="Space"
            />
          </div>
        </div>
      </MotionSection>

      <MotionSection>
        <div className="section-shell">
          <SectionHeader
            eyebrow="R&amp;D Focus"
            title="From local hubs to orbit."
            description="We deliberately start grounded — in real neighbourhoods, with real learners — and extend designs outward until they reach orbital and deep-space contexts."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="glass-card rounded-3xl p-6">
              <h3 className="font-heading text-lg font-semibold text-white">
                Local Lighthouse hubs
              </h3>
              <p className="mt-3 text-sm text-slate-200">
                LUMEN cohorts in youth centres, community halls and colleges —
                building early-stage confidence and technical fluency.
              </p>
            </div>
            <div className="glass-card rounded-3xl p-6">
              <h3 className="font-heading text-lg font-semibold text-white">
                Disaster &amp; remote environments
              </h3>
              <p className="mt-3 text-sm text-slate-200">
                EchoToken deployed into disaster-response, energy, mining and
                humanitarian settings where robustness is non-negotiable.
              </p>
            </div>
            <div className="glass-card rounded-3xl p-6">
              <h3 className="font-heading text-lg font-semibold text-white">
                Orbital &amp; Dyson concepts
              </h3>
              <p className="mt-3 text-sm text-slate-200">
                Long-range R&amp;D into Dyson-swarm architectures, self-healing
                fleets and symbolic communication for off-world operations.
              </p>
            </div>
          </div>
        </div>
      </MotionSection>
    </div>
  );
}
