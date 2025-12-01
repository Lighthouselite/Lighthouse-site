import MotionSection from "@/components/MotionSection";
import SectionHeader from "@/components/SectionHeader";
import FeatureCard from "@/components/FeatureCard";
import Link from "next/link";

export default function LumenPage() {
  return (
    <div className="space-y-16 md:space-y-20">
      <MotionSection>
        <div className="section-shell">
          <div className="glass-card rounded-3xl p-8 md:p-10">
            <p className="badge-soft">LUMEN • Gamified Digital Skills</p>
            <h1 className="mt-4 font-heading text-3xl font-semibold text-white md:text-4xl">
              LUMEN – Gamified digital skills for the AI era.
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-slate-200 md:text-base">
              LUMEN turns digital skills, AI literacy and prompt engineering
              into a belt system. Learners progress from Level 1 to Level 4 with
              belts, badges and real-world projects that feel more like a
              training montage than a classroom.
            </p>
          </div>
        </div>
      </MotionSection>

      <MotionSection>
        <div className="section-shell">
          <SectionHeader
            eyebrow="Progression"
            title="Levels 1–4, mapped to belts."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-4">
            <FeatureCard
              title="Level 1 – White / Yellow"
              description="Foundations: basic digital skills, safe AI use and confidence building."
              tag="Entry"
            />
            <FeatureCard
              title="Level 2 – Green"
              description="Intermediate: web presence, simple automations and prompt patterns."
              tag="Builder"
            />
            <FeatureCard
              title="Level 3 – Blue"
              description="Advanced: small projects, basic data, AI-assisted workflows."
              tag="Maker"
            />
            <FeatureCard
              title="Level 4 – Brown / Black"
              description="Expert: project ownership, prompt engineering, and real-world delivery."
              tag="Advanced"
            />
          </div>
        </div>
      </MotionSection>

      <MotionSection>
        <div className="section-shell">
          <SectionHeader
            eyebrow="Mechanics"
            title="XP, streaks and belts instead of grades."
            description="LUMEN borrows from martial arts and games. Learners always know exactly what they’re working towards and what comes next."
          />
          <div className="mt-8 grid gap-8 md:grid-cols-[3fr,2fr]">
            <div className="space-y-4">
              <FeatureCard
                title="XP & streaks"
                description="Every mission awards XP. Daily streaks build momentum and unlock small cosmetic rewards."
                tag="Motivation"
              />
              <FeatureCard
                title="Badges & belts"
                description="Badges capture specific skills (e.g. ‘Prompt Fundamentals’), while belts represent whole-level mastery."
                tag="Recognition"
              />
              <FeatureCard
                title="AI-aligned curriculum"
                description="Units explicitly train learners to collaborate with AI — not compete with it."
                tag="AI-native"
              />
            </div>
            <div className="glass-card rounded-3xl p-6">
              <h3 className="font-heading text-lg font-semibold text-white">
                XP &amp; badges preview
              </h3>
              <div className="mt-4 space-y-5 text-sm text-slate-200">
                <div>
                  <div className="flex items-center justify-between text-xs">
                    <span>Level 2 – Green Belt</span>
                    <span>2,850 / 3,000 XP</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-slate-800">
                    <div className="h-full w-[95%] rounded-full bg-gradient-to-r from-lighthouse-lightBlue to-lighthouse-yellow" />
                  </div>
                  <p className="mt-2 text-[11px] text-slate-400">
                    150 XP to Blue Belt promotion.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lighthouse-lightBlue">
                    Recently unlocked badges
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
                    <span className="rounded-full bg-lighthouse-blue/40 px-3 py-1">
                      🧠 Prompt Fundamentals
                    </span>
                    <span className="rounded-full bg-lighthouse-yellow/40 px-3 py-1">
                      🚀 Launch-ready Portfolio
                    </span>
                    <span className="rounded-full bg-slate-700/60 px-3 py-1">
                      🤝 Community Mentor
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lighthouse-lightBlue">
                    Streak
                  </p>
                  <p className="mt-1 text-2xl font-semibold text-lighthouse-yellow">
                    12 days
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Missed days don&apos;t reset progress — learners just pick up
                    from where they left off.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection>
        <div className="section-shell">
          <SectionHeader
            eyebrow="AI Tutor"
            title="An AI tutor that feels like a coach, not a lecturer."
            description="LUMEN ships with an AI tutor that explains, questions and nudges learners forward — while programme leads keep full control over curriculum and outcomes."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <FeatureCard
              title="Guided conversations"
              description="Structured prompts, guided reflections and check-ins keep learners moving, not lost in an AI rabbit hole."
              tag="Guided"
            />
            <FeatureCard
              title="Configurable rails"
              description="Programme teams define the guardrails, tone of voice and approved tools."
              tag="Safe"
            />
            <FeatureCard
              title="Prompt engineering tracks"
              description="Optional Level 3–4 routes that turn learners into power users and junior prompt engineers."
              tag="Advanced"
            />
          </div>
        </div>
      </MotionSection>

      <MotionSection>
        <div className="section-shell">
          <SectionHeader
            eyebrow="Deploy LUMEN"
            title="Built for hubs, councils and colleges."
            description="LUMEN is designed for community centres, youth hubs, local authorities and FE providers who want to offer serious digital skills without boring anyone to tears."
          />
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <p className="max-w-2xl text-sm text-slate-200 md:text-base">
              We&apos;re actively looking for pilot partners to run LUMEN cohorts
              — from small community tests to multi-site rollouts.{" "}
              <span className="text-lighthouse-lightBlue">
                Access up to Level 3 is free.
              </span>{" "}
              Level 4 and accreditation layers can be scoped together.
            </p>
            <Link href="/contact" className="btn-primary">
              Launch LUMEN
            </Link>
          </div>
        </div>
      </MotionSection>
    </div>
  );
}
