import type { Metadata } from "next";
import Image from "next/image";
import { CTAButtons } from "@/components/CTAButtons";

export const metadata: Metadata = {
  title: "Smart Vending | ZenTen Vending",
  description:
    "AI-powered smart coolers with touchscreen displays, cashless payment, and real-time inventory tracking. Installed and maintained for free.",
};

const features = [
  {
    title: "Cashless & Contactless",
    description:
      "Apple Pay, Google Pay, credit, and debit cards. No coins, no dollar bills, no jammed bill acceptors. Your people tap and go.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
  },
  {
    title: "Touchscreen Display",
    description:
      "A modern, intuitive interface lets users browse the full product selection, check nutrition information, and complete purchases — all in a few taps.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
  {
    title: "Smart Inventory Tracking",
    description:
      "Our coolers know exactly what's inside them. We track what's selling and what's not, so your machine is always stocked with the products people actually want.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: "Custom Product Mix",
    description:
      "Want healthy options? Energy drinks? Local favorites? We tailor the product selection to your location and update it based on what your people are buying.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
  },
];

const highlights = [
  { label: "Cost to You", value: "$0" },
  { label: "Contracts Required", value: "None" },
  { label: "Setup Time", value: "1–2 Weeks" },
  { label: "Payment Options", value: "All Digital" },
];

export default function SmartVending() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
              Not Your Average Vending Machine
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/70 leading-relaxed">
              AI-powered smart coolers with touchscreen displays, cashless
              payment, and real-time inventory tracking.
            </p>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-white border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {highlights.map((item) => (
              <div key={item.label}>
                <p className="font-heading text-2xl sm:text-3xl font-bold text-accent">
                  {item.value}
                </p>
                <p className="mt-1 text-sm text-text-muted">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy">
              Everything a Modern Space Needs
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {features.map((feature) => (
              <div key={feature.title} className="flex gap-6">
                <div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-navy mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real machine photos */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy">
              Our Coolers in Action
            </h2>
            <p className="mt-4 text-lg text-text-muted">
              A real ZenTen setup at luxury apartment homes in Denton, TX.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/machine-snacks.jpeg"
                alt="ZenTen smart cooler stocked with snacks at luxury apartments in Denton TX"
                width={600}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/machine-full.jpeg"
                alt="ZenTen smart cooler stocked with drinks at luxury apartments in Denton TX"
                width={600}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4">
            Want to learn more?
          </h2>
          <p className="text-lg text-text-muted mb-10 max-w-2xl mx-auto">
            We&apos;ll visit your space, walk you through how it all works, and
            figure out the best setup for your location. No commitment, no
            pressure.
          </p>
          <CTAButtons />
        </div>
      </section>
    </>
  );
}
