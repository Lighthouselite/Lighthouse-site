import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-slate-800/70 bg-slate-950/60">
      <div className="section-shell py-6 text-xs text-slate-400 md:flex md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-br from-lighthouse-blue to-lighthouse-lightBlue text-[10px] font-bold text-slate-950">
            LI
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-[11px] font-semibold text-slate-100">
              Lighthouse Innovation
            </span>
            <span>LUMEN · EchoToken · Athena Labs</span>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-3 md:mt-0">
          <span>© {new Date().getFullYear()} Lighthouse Innovation.</span>
          <span>Future-ready systems for learning and resilience.</span>
          <Link
            href="/contact"
            className="text-slate-300 underline-offset-4 hover:text-lighthouse-lightBlue hover:underline"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </footer>
  );
}
