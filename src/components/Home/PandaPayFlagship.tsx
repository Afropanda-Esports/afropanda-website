import { Zap, Wallet } from "lucide-react";
import FadeReveal from "../FadeReveal";
import { PANDAPAY_URL } from "../../constant";

export default function PandaPayFlagship() {
  return (
    <section
      className="relative overflow-hidden py-16"
      style={{
        background:
          "linear-gradient(135deg, #1a0a00 0%, #0d0d0d 60%, #1a0800 100%)",
      }}
    >
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <FadeReveal>
          <div className="mx-auto flex items-center justify-center gap-3">
            <span className="inline-block h-px w-10 bg-[#CC5500]" />
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-copy">
              Powered by AfroPanda
            </p>
            <span className="inline-block h-px w-10 bg-[#CC5500]" />
          </div>
          <h2
            className="mx-auto mt-6 max-w-4xl font-semibold leading-tight tracking-tight text-copy"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            Pay for games the smart way.
          </h2>
          <p className="mx-auto mt-6 max-w-[600px] text-base leading-relaxed text-copy md:text-lg">
            The fastest way to buy game credits, passes, and gift cards across Africa. No payment
            drama.
          </p>
        </FadeReveal>

        <FadeReveal delay={0.08} className="mt-14">
          <div className="mx-auto flex max-w-xl flex-col items-center justify-center gap-10 text-center sm:flex-row sm:gap-12">
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#CC5500]/20 text-[#CC5500]">
                <Zap className="h-6 w-6" aria-hidden />
              </div>
              <div>
                <p className="font-semibold text-copy">Instant delivery</p>
                <p className="mt-1 text-sm leading-6 text-copy">Get your codes in seconds</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#CC5500]/20 text-[#CC5500]">
                <Wallet className="h-6 w-6" aria-hidden />
              </div>
              <div>
                <p className="font-semibold text-copy">Pay your way</p>
                <p className="mt-1 text-sm leading-6 text-copy">
                  Bank transfer, crypto, or gift cards
                </p>
              </div>
            </div>
          </div>
        </FadeReveal>

        <FadeReveal delay={0.14} className="mt-14 flex justify-center">
          <a
            href={PANDAPAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#CC5500] px-8 py-3.5 text-sm font-semibold tracking-wide text-white transition-colors duration-300 hover:bg-[#da6c28]"
          >
            Visit PandaPay →
          </a>
        </FadeReveal>
      </div>
    </section>
  );
}
