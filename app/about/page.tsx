import MotionSection from "@/components/MotionSection";
import SectionHeader from "@/components/SectionHeader";

export default function AboutPage() {
  return (
    <div className="space-y-16 md:space-y-20">
      <MotionSection>
        <div className="section-shell">
          <div className="glass-card rounded-3xl p-8 md:p-10">
            <p className="badge-soft">About Lighthouse Innovation</p>
            <h1 className="mt-4 font-heading text-3xl font-semibold text-white md:text-4xl">
              The story behind Lighthouse.
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-slate-200 md:text-base">
              Lighthouse Innovation was founded with a simple belief: the same
              mind that keeps a teenager engaged in a learning journey can also
              keep a drone swarm talking when the network goes dark. We are
              building the connective tissue between education, resilient
              communications and frontier R&amp;D.
            </p>
          </div>
        </div>
      </MotionSection>

      <MotionSection>
        <div className="section-shell">
          <SectionHeader
            eyebrow="Timeline"
            title="From local tests to orbital thinking."
            description="Lighthouse is still early, but the trajectory is clear — start small, stay close to real users, then scale to the edge of what’s possible."
          />
          <div className="mt-8 space-y-6">
            <div className="relative pl-6">
              <div className="absolute left-0 top-2 h-full w-px bg-slate-700/60" />
              <div className="glass-card rounded-2xl p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lighthouse-lightBlue">
                  Phase 01 • Groundwork
                </p>
                <h3 className="mt-2 font-heading text-lg font-semibold text-white">
                  Early Lighthouse &amp; LUMEN prototypes
                </h3>
                <p className="mt-2 text-sm text-slate-200">
                  Initial Lighthouse experiments brought together community
                  learners, WordPress-based learning content and simple XP
                  systems — proving that &quot;serious&quot; learning can feel
                  like levelling up in a game.
                </p>
              </div>
            </div>

            <div className="relative pl-6">
              <div className="absolute left-0 top-2 h-full w-px bg-slate-700/60" />
              <div className="glass-card rounded-2xl p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lighthouse-lightBlue">
                  Phase 02 • EchoToken
                </p>
                <h3 className="mt-2 font-heading text-lg font-semibold text-white">
                  A new language for machines at the edge
                </h3>
                <p className="mt-2 text-sm text-slate-200">
                  EchoToken emerged from a simple question: what if your devices
                  could keep talking even if every conventional network failed?
                  The answer became a symbolic protocol that rides over light,
                  sound and vibration.
                </p>
              </div>
            </div>

            <div className="relative pl-6">
              <div className="absolute left-0 top-2 h-full w-px bg-slate-700/60" />
              <div className="glass-card rounded-2xl p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lighthouse-lightBlue">
                  Phase 03 • Athena Labs
                </p>
                <h3 className="mt-2 font-heading text-lg font-semibold text-white">
                  Dyson-swarm scale imagination
                </h3>
                <p className="mt-2 text-sm text-slate-200">
                  Athena Labs formalises the R&amp;D branch of Lighthouse —
                  looking past today&apos;s constraints to Dyson swarm concepts,
                  self-healing fleets and long-duration missions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection>
        <div className="section-shell">
          <SectionHeader
            eyebrow="Values"
            title="What keeps the beam steady."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="glass-card rounded-3xl p-6">
              <h3 className="font-heading text-lg font-semibold text-white">
                Youth first
              </h3>
              <p className="mt-3 text-sm text-slate-200">
                We design systems that open doors for people who were never
                &quot;meant&quot; to be engineers, founders or researchers.
              </p>
            </div>
            <div className="glass-card rounded-3xl p-6">
              <h3 className="font-heading text-lg font-semibold text-white">
                Resilient by default
              </h3>
              <p className="mt-3 text-sm text-slate-200">
                Our architectures assume failure — network loss, power
                constraints, human overload — and build graceful fallbacks in.
              </p>
            </div>
            <div className="glass-card rounded-3xl p-6">
              <h3 className="font-heading text-lg font-semibold text-white">
                Ethical AI
              </h3>
              <p className="mt-3 text-sm text-slate-200">
                We treat AI as an amplifier for human potential, not a
                replacement. Transparency, consent and agency are non-negotiable.
              </p>
            </div>
          </div>
        </div>
      </MotionSection>
    </div>
  );
}
