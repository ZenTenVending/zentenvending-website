import type { Metadata } from "next";
import { CTAButtons } from "@/components/CTAButtons";

export const metadata: Metadata = {
  title: "Pantry Service | ZenTen Vending",
  description:
    "We deliver curated snacks and drinks directly to your office pantry. No machine needed, no hassle — just a fully stocked kitchen your team loves.",
};

const benefits = [
  {
    title: "We Handle Everything",
    description:
      "Selection, purchasing, delivery, and restocking. You never have to think about your office pantry again.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    title: "Tailored to Your Team",
    description:
      "We learn what your people like and adjust the mix over time. From healthy snacks to energy drinks to coffee supplies — we curate it for you.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: "Flexible & Simple",
    description:
      "No vending machine needed. No equipment in your space. Just tell us what you want and we deliver on a regular schedule that works for you.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.079-.481 1.09-1.101l.164-10.025A1.125 1.125 0 0021.064 6H18M2.25 14.25h3.146a1.5 1.5 0 011.44 1.085l.16.614a1.5 1.5 0 001.44 1.085h2.107a1.5 1.5 0 001.44-1.085l.16-.614a1.5 1.5 0 011.44-1.085H21.75" />
      </svg>
    ),
  },
];

export default function PantryService() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
              A Fully Stocked Kitchen, Without the Work
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/70 leading-relaxed">
              We deliver curated snacks, drinks, and essentials to your office
              pantry on a regular schedule.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className={`flex flex-col md:flex-row gap-8 items-start ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-shrink-0 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  {benefit.icon}
                </div>
                <div className="max-w-xl">
                  <h2 className="font-heading text-2xl font-bold text-navy mb-3">
                    {benefit.title}
                  </h2>
                  <p className="text-text-muted text-lg leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing note */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto max-w-2xl rounded-2xl border border-border p-10">
            <h2 className="font-heading text-2xl font-bold text-navy mb-4">
              Custom to Your Office
            </h2>
            <p className="text-text-muted text-lg leading-relaxed">
              Pantry service is customized to your team size and preferences.
              Every office is different, so let&apos;s talk about what works for
              yours.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4">
            Let&apos;s set up your pantry
          </h2>
          <p className="text-lg text-text-muted mb-10 max-w-2xl mx-auto">
            Tell us about your office and we&apos;ll put together a plan that
            fits your team.
          </p>
          <CTAButtons />
        </div>
      </section>
    </>
  );
}
