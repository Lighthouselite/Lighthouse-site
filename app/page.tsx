// HomePage
import ParallaxHero from "@/components/ParallaxHero";
import MotionSection from "@/components/MotionSection";
import FeatureCard from "@/components/FeatureCard";
import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <ParallaxHero
        badge="Lighthouse Innovation • Future-ready systems"
        title="Building the systems that teach, connect, and protect."
        subtitle="Lighthouse Innovation is the umbrella for LUMEN, EchoToken and Athena Labs — a pipeline from local learning hubs to orbital-scale infrastructure."
        ctaPrimary={{ label: "Explore LUMEN", href: "/lumen" }}
        ctaSecondary={{ label: "Talk to Lighthouse", href: "/contact" }}
      />

      <div className="space-y-20 md:space-y-24">
        <MotionSection>
          <div className="section-shell">
            <SectionHeader
              eyebrow="Mission & Vision"
              title="From neighbourhood learning hubs to planetary-scale resilience."
              description="We design systems that start grounded in community education and scale all the way to extreme environments — disaster zones, deep space, and beyond."
            />
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <div className="glass-card rounded-3xl p-8">
                <h3 className="font-heading text-xl font-semibold text-white">
                  What Lighthouse does
                </h3>
                <p className="mt-4 text-sm text-slate-300">
                  Lighthouse Innovation is a systems studio focused on three
                  strands: LUMEN (ed-tech), EchoToken (fallback communications)
                  and Athena Labs (advanced R&amp;D). Together they form a
                  pipeline from learning content to hardened field technology.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-300">
                  <li>• Design &amp; architecture for real-world deployments</li>
                  <li>• Prototype tooling for drones, wearables and hubs</li>
                  <li>• Ethical AI and youth-focused learning journeys</li>
                </ul>
              </div>
              <div className="glass-card rounded-3xl p-8">
                <h3 className="font-heading text-xl font-semibold text-white">
                  Why it matters
                </h3>
                <p className="mt-4 text-sm text-slate-300">
                  Network failures, climate risk and skill gaps are converging.
                  We believe the same design thinking that can make a teenager
                  stick with a learning path can also keep a drone swarm talking
                  when everything else is offline.
                </p>
                <p className="mt-4 text-sm text-slate-300">
                  Lighthouse exists to bridge those worlds — giving communities,
                  responders and explorers tools that are simple at the edge and
                  rigorous under the hood.
                </p>
              </div>
            </div>
          </div>
        </MotionSection>

        <MotionSection>
          <div className="section-shell">
            <SectionHeader
              eyebrow="LUMEN"
              title="Gamified digital skills with a belt system, not a grade sheet."
              description="LUMEN turns digital skills and AI literacy into a belt-based journey — Levels 1 to 4 — backed by an AI tutor and real-world projects."
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-[2fr,3fr]">
              <div className="space-y-4">
                <FeatureCard
                  title="Belt-based progression"
                  description="Learners move from White to Black belt across Levels 1–4 with clear milestones, XP, and visible progress."
                  tag="Levels 1–4"
                />
                <FeatureCard
                  title="AI tutor at the core"
                  description="A guided chat-based tutor that explains concepts, checks understanding and adapts to pace and style."
                  tag="AI-first"
                />
                <FeatureCard
                  title="Free up to Level 3"
                  description="Opening pathways for people who were never invited into tech — with optional accreditation layers on top."
                  tag="Access"
                />
              </div>
              <div className="glass-card relative overflow-hidden rounded-3xl p-6 shadow-glow-cyan">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-lighthouse-blue/40 via-transparent to-lighthouse-yellow/20 opacity-70" />
                <div className="relative space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="badge-soft">LUMEN Dashboard • Preview</span>
                    <span className="text-xs text-slate-400">Alpha build</span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-white">
                    Learner Journey – Level 2
                  </h3>
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-300">
                      <span>XP Progress</span>
                      <span>3,420 / 5,000</span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-slate-800">
                      <div className="h-full w-3/5 rounded-full bg-gradient-to-r from-lighthouse-lightBlue to-lighthouse-yellow shadow-glow-cyan" />
                    </div>
                    <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-lighthouse-lightBlue">
                      Belt status: Green • 2 modules to Blue
                    </p>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-3 text-xs">
                    <div className="glass-card rounded-2xl p-3">
                      <p className="text-[11px] font-medium text-slate-400">
                        Today&apos;s focus
                      </p>
                      <p className="mt-1 font-semibold text-white">
                        Prompt basics
                      </p>
                      <p className="mt-1 text-[11px] text-slate-400">
                        3 short missions • 12 mins
                      </p>
                    </div>
                    <div className="glass-card rounded-2xl p-3">
                      <p className="text-[11px] font-medium text-slate-400">
                        Streak
                      </p>
                      <p className="mt-1 text-2xl font-semibold text-lighthouse-yellow">
                        7
                      </p>
                      <p className="mt-1 text-[11px] text-slate-400">
                        Days in a row
                      </p>
                    </div>
                    <div className="glass-card rounded-2xl p-3">
                      <p className="text-[11px] font-medium text-slate-400">
                        Badges
                      </p>
                      <div className="mt-2 flex gap-1 text-[11px]">
                        <span className="rounded-full bg-lighthouse-blue/40 px-2 py-0.5">
                          • Explorer
                        </span>
                        <span className="rounded-full bg-lighthouse-yellow/40 px-2 py-0.5">
                          • Builder
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-xs text-slate-300">
                      Designed for community hubs, colleges and councils.
                    </p>
                    <Link
                      href="/lumen"
                      className="btn-primary text-xs shadow-none"
                    >
                      Explore LUMEN
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MotionSection>

        <MotionSection>
          <div className="section-shell">
            <SectionHeader
              eyebrow="EchoToken"
              title="Fallback communication when networks fail."
              description="EchoToken is a symbolic protocol that pushes small, critical messages over light, sound and vibration — designed for drones, wearables and extreme environments."
            />
            <div className="mt-10 grid gap-8 lg:grid-cols-[3fr,2fr]">
              <div className="grid gap-4 md:grid-cols-3">
                <FeatureCard
                  title="Light channel"
                  description="High-speed optical bursts via cameras and LEDs for close-range, line-of-sight links."
                  tag="Optical"
                />
                <FeatureCard
                  title="Sound channel"
                  description="Robust audio tones that cut through noisy environments when RF is jammed."
                  tag="Acoustic"
                />
                <FeatureCard
                  title="Vibration & haptics"
                  description="Last-resort patterns for wearables and edge devices when everything else is gone."
                  tag="Haptic"
                />
              </div>
              <div className="glass-card relative overflow-hidden rounded-3xl p-6">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-lighthouse-blue/40 via-transparent to-lighthouse-lightBlue/30 opacity-70" />
                <div className="relative space-y-4">
                  <h3 className="font-heading text-lg font-semibold text-white">
                    EchoToken rollout roadmap
                  </h3>
                  <ol className="space-y-3 text-sm text-slate-200">
                    <li>
                      <span className="font-semibold text-lighthouse-lightBlue">
                        01 • MVP demo
                      </span>
                      <br />
                      Phone-to-phone optical + acoustic link for test teams.
                    </li>
                    <li>
                      <span className="font-semibold text-lighthouse-lightBlue">
                        02 • Prototype kits
                      </span>
                      <br />
                      Drone + wearable reference kits for field partners.
                    </li>
                    <li>
                      <span className="font-semibold text-lighthouse-lightBlue">
                        03 • Field testing
                      </span>
                      <br />
                      Disaster-response, energy and mining environments.
                    </li>
                    <li>
                      <span className="font-semibold text-lighthouse-lightBlue">
                        04 • Licensing
                      </span>
                      <br />
                      Integrated into third-party platforms and toolchains.
                    </li>
                  </ol>
                  <p className="pt-2 text-xs text-slate-400">
                    Lighthouse Innovation is actively exploring pilots with
                    universities, emergency services and infrastructure partners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </MotionSection>

        <MotionSection>
          <div className="section-shell">
            <SectionHeader
              eyebrow="Athena Labs"
              title="R&D for the Dyson-swarm future."
              description="Athena Labs is Lighthouse Innovation’s deep R&D branch — from resilient comms to self-healing swarms and Dyson-structure concepts."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <FeatureCard
                title="EdTech systems"
                description="Turn local learners into system maintainers, operators and, eventually, mission designers."
                tag="LUMEN"
              />
              <FeatureCard
                title="Resilient comms"
                description="Push EchoToken-like protocols into drones, wearables and robotic fleets."
                tag="EchoToken"
              />
              <FeatureCard
                title="Space & Dyson concepts"
                description="Explore Dyson structures, swarm coordination and off-world infrastructure patterns."
                tag="Dyson Swarms"
              />
            </div>
          </div>
        </MotionSection>

        <MotionSection>
          <div className="section-shell">
            <div className="glass-card overflow-hidden rounded-3xl p-8 md:p-10">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-lighthouse-blue/30 via-transparent to-lighthouse-yellow/30 opacity-80" />
              <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div>
                  <h2 className="font-heading text-2xl font-semibold text-white md:text-3xl">
                    Join Lighthouse Innovation.
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm text-slate-200 md:text-base">
                    Whether you&apos;re a council looking to run LUMEN hubs, a
                    university exploring EchoToken research, or a partner
                    thinking about Dyson-scale futures — Lighthouse is designed
                    for long-term collaboration.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact" className="btn-primary">
                    Partnerships &amp; pilots
                  </Link>
                  <Link href="/contact" className="btn-secondary">
                    Book a conversation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </MotionSection>
      </div>
    </>
  );
}
