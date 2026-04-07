import type { Metadata } from "next";
import Image from "next/image";
import { CTAButtons } from "@/components/CTAButtons";

export const metadata: Metadata = {
  title: "About | ZenTen Vending",
  description:
    "ZenTen Vending is a family-owned smart vending business serving North Dallas. When you call, you get Bryan or Chris — not a call center.",
};

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
              Local Owners. Real Service.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/70 leading-relaxed">
              ZenTen Vending is a family-owned business serving North Dallas.
              When you call, you get Bryan or Chris — not a call center.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">
              Meet the Team
            </h2>
            <p className="text-text-muted text-lg leading-relaxed mb-12">
              We started ZenTen because we saw an industry full of unreliable
              vendors — companies that don&apos;t pick up the phone, don&apos;t
              restock on time, and don&apos;t treat their locations like real
              partners. We do things differently.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Bryan */}
              <div>
                <div className="rounded-2xl overflow-hidden aspect-[4/5] mb-6">
                  <Image
                    src="/bryan.jpeg"
                    alt="Bryan - Co-Owner of ZenTen Vending"
                    width={400}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-heading text-xl font-bold text-navy">
                  Bryan
                </h3>
                <p className="text-accent font-medium mb-3">Co-Owner</p>
                <p className="text-text-muted leading-relaxed">
                  Bryan is a multi-venture entrepreneur based in Prosper,
                  Texas, with a background in technology, operations, and
                  building systems that run without friction. He founded ZenTen
                  Vending after noticing the same problem across industries —
                  employees, residents, and visitors want convenient access to
                  cold drinks, snacks, and essentials, but traditional vending
                  is clunky, outdated, and a hassle for the businesses hosting
                  it.
                </p>
                <p className="text-text-muted leading-relaxed mt-4">
                  ZenTen&apos;s approach is different. The company places and
                  fully operates modern smart coolers and pantry solutions at
                  client locations — no upfront cost, no maintenance burden, and
                  a better experience for the people they serve. Whether
                  it&apos;s an apartment community, a hospital break room, or a
                  corporate office, ZenTen handles everything from stocking to
                  servicing so clients can offer more without doing more.
                </p>
                <p className="text-text-muted leading-relaxed mt-4">
                  Bryan&apos;s philosophy is simple: if a service creates work
                  for the client, it&apos;s not a service. ZenTen is built
                  around that principle.
                </p>
              </div>

              {/* Chris */}
              <div>
                <div className="rounded-2xl bg-bg border-2 border-dashed border-border aspect-[4/5] flex items-center justify-center mb-6">
                  <div className="text-center">
                    <svg className="mx-auto h-16 w-16 text-text-muted/30" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    <p className="mt-2 text-sm text-text-muted/60">
                      Chris&apos;s photo
                    </p>
                  </div>
                </div>
                <h3 className="font-heading text-xl font-bold text-navy">
                  Chris
                </h3>
                <p className="text-accent font-medium mb-3">Co-Owner</p>
                <p className="text-text-muted leading-relaxed">
                  Bio goes here — a couple sentences about Chris&apos;s
                  background and role at ZenTen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why ZenTen */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-navy mb-12">
              Why ZenTen
            </h2>
            <div className="space-y-8">
              {[
                {
                  title: "We actually pick up the phone",
                  description:
                    "When you call, you get one of us. Not a recording, not a ticket system — a real person who knows your location.",
                },
                {
                  title: "We show up when we say we will",
                  description:
                    "Restocking, maintenance, product changes — we handle it on schedule, every time. No chasing us down.",
                },
                {
                  title: "We follow through",
                  description:
                    "If we say we'll do something, we do it. Restocking day, service calls, product changes — you'll never have to chase us down twice.",
                },
                {
                  title: "We're local",
                  description:
                    "We live and work in North Dallas. Your location isn't a number on a spreadsheet — it's down the road from us.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="border-l-4 border-accent pl-6"
                >
                  <h3 className="font-heading text-lg font-semibold text-navy mb-1">
                    {item.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-navy mb-4">
            Serving North Dallas
          </h2>
          <p className="text-lg text-text-muted mb-4 max-w-2xl mx-auto">
            From Uptown Dallas to Denton to McKinney — and everywhere in
            between. If you&apos;re in North DFW, we&apos;re in your area.
          </p>
          <p className="text-text-muted mb-10">
            Currently serving locations in Dallas, Frisco, and Denton.
          </p>
          <CTAButtons />
        </div>
      </section>
    </>
  );
}
