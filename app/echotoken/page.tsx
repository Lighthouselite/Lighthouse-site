import MotionSection from "@/components/MotionSection";
import SectionHeader from "@/components/SectionHeader";
import FeatureCard from "@/components/FeatureCard";

export default function EchoTokenPage() {
  return (
    <div className="space-y-16 md:space-y-20">
      <MotionSection>
        <div className="section-shell">
          <div className="glass-card rounded-3xl p-8 md:p-10">
            <p className="badge-soft">EchoToken • Fallback Communication</p>
            <h1 className="mt-4 font-heading text-3xl font-semibold text-white md:text-4xl">
              EchoToken – Multi-modal fallback communication.
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-slate-200 md:text-base">
              EchoToken is a symbolic protocol for moving small, critical
              messages over light, sound and vibration. It&apos;s built for
              situations where Wi-Fi, mobile data and even RF are unreliable or
              deliberately disrupted.
            </p>
          </div>
        </div>
      </MotionSection>

      <MotionSection>
        <div className="section-shell">
          <SectionHeader
            eyebrow="Channels"
            title="Three channels, one shared language."
            description="EchoToken defines a compact symbol set that can be carried over multiple physical channels, each with its own strengths."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="glass-card flex flex-col rounded-3xl p-6">
              <h3 className="font-heading text-lg font-semibold text-white">
                Light channel
              </h3>
              <p className="mt-3 text-sm text-slate-200">
                Short bursts of encoded light using phone flashes, LEDs or
                optical beacons. Perfect for close-range drone-to-drone and
                phone-to-phone communication.
              </p>
              <div className="mt-4 h-16 rounded-2xl bg-gradient-to-r from-lighthouse-lightBlue via-lighthouse-blue to-lighthouse-yellow opacity-80" />
            </div>
            <div className="glass-card flex flex-col rounded-3xl p-6">
              <h3 className="font-heading text-lg font-semibold text-white">
                Sound channel
              </h3>
              <p className="mt-3 text-sm text-slate-200">
                Encoded audio tone sequences that push through noisy environments
                or partial obstruction — useful for phones, speakers and cheap
                microcontrollers.
              </p>
              <div className="mt-4 h-16 rounded-2xl bg-[radial-gradient(circle_at_10%_20%,rgba(86,192,224,0.8),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(253,203,47,0.7),transparent_55%)]" />
            </div>
            <div className="glass-card flex flex-col rounded-3xl p-6">
              <h3 className="font-heading text-lg font-semibold text-white">
                Vibration / haptics
              </h3>
              <p className="mt-3 text-sm text-slate-200">
                Short vibration patterns or actuator pulses used as the ultimate
                fallback for wearables and handhelds when every other channel
                fails.
              </p>
              <div className="mt-4 flex h-16 items-center justify-between rounded-2xl bg-slate-900/70 px-4">
                <div className="h-4 w-4 rounded-full bg-lighthouse-yellow" />
                <div className="h-6 w-6 rounded-full bg-lighthouse-lightBlue" />
                <div className="h-4 w-4 rounded-full bg-lighthouse-blue" />
              </div>
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection>
        <div className="section-shell">
          <SectionHeader
            eyebrow="Problem"
            title="What EchoToken is built to survive."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <FeatureCard
              title="Loss of network"
              description="Floods, power cuts, remote terrain — EchoToken assumes zero bars and no Wi-Fi."
              tag="Offline"
            />
            <FeatureCard
              title="RF disruption"
              description="Jamming, interference or sensitive environments where RF is limited."
              tag="Resilient"
            />
            <FeatureCard
              title="Human overload"
              description="Clear, symbolic messages instead of overloaded voice or text channels."
              tag="Focused"
            />
          </div>
        </div>
      </MotionSection>

      <MotionSection>
        <div className="section-shell">
          <SectionHeader
            eyebrow="Principles"
            title="Small, symbolic, resilient."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <FeatureCard
              title="Symbolic protocol"
              description="A compact symbol set designed for low bandwidth and deterministic decoding."
              tag="EchoLang"
            />
            <FeatureCard
              title="Channel-agnostic"
              description="Encode once, transmit over light, sound or vibration depending on context."
              tag="Flexible"
            />
            <FeatureCard
              title="Designed for edge devices"
              description="Phones, drones, wearables and small controllers first — heavyweight systems optional."
              tag="Edge-first"
            />
          </div>
        </div>
      </MotionSection>

      <MotionSection>
        <div className="section-shell">
          <SectionHeader
            eyebrow="Roadmap"
            title="From demo apps to licensed protocol."
          />
          <div className="mt-6 grid gap-6 md:grid-cols-4 text-sm text-slate-200">
            <div className="glass-card rounded-3xl p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lighthouse-lightBlue">
                01 • Phone demo
              </p>
              <p className="mt-2">
                Back-to-back phone demo using flash + speaker for high-intensity
                testing.
              </p>
            </div>
            <div className="glass-card rounded-3xl p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lighthouse-lightBlue">
                02 • Drone &amp; wearable kits
              </p>
              <p className="mt-2">
                Reference implementations for small drone fleets and low-cost
                wearable devices.
              </p>
            </div>
            <div className="glass-card rounded-3xl p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lighthouse-lightBlue">
                03 • Field trials
              </p>
              <p className="mt-2">
                Tested with emergency services, humanitarian teams and
                industrial partners.
              </p>
            </div>
            <div className="glass-card rounded-3xl p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lighthouse-lightBlue">
                04 • Licensing
              </p>
              <p className="mt-2">
                Licensed protocol and SDKs for platform vendors and integrators.
              </p>
            </div>
          </div>
        </div>
      </MotionSection>
    </div>
  );
}
