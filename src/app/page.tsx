import { CTAButtons } from "@/components/CTAButtons";
import Link from "next/link";

const steps = [
  {
    number: "1",
    title: "We Visit Your Space",
    description:
      "We assess your location, foot traffic, and what products your people want.",
  },
  {
    number: "2",
    title: "We Install for Free",
    description:
      "We place a smart cooler customized to your space. No contracts, no cost, no hassle.",
  },
  {
    number: "3",
    title: "We Keep It Running",
    description:
      "We handle stocking, maintenance, and everything in between. You just enjoy the amenity.",
  },
];

const features = [
  {
    title: "Cashless & Contactless",
    description:
      "Apple Pay, Google Pay, credit, and debit. No coins, no dollar bills, no jams.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
  },
  {
    title: "Touchscreen Display",
    description:
      "Browse products, see nutrition info, and pay — all on a modern interface.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
  {
    title: "Smart Inventory",
    description:
      "Our coolers track what sells so the machine always has what your people want.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-1.5-3-1.5" />
      </svg>
    ),
  },
  {
    title: "Custom Product Mix",
    description:
      "Healthy options, energy drinks, local favorites — tailored to your location.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      {/* Hero with video background */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Video background - replace src with your actual video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/video-poster.jpg"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-navy/80" />
        {/* Gradient accent at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <p className="text-accent-light font-heading font-semibold text-sm sm:text-base tracking-wide uppercase mb-4">
              North Dallas&apos;s Smart Vending Partner
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white">
              Smart Vending for Modern Businesses
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl">
              We install, stock, and maintain modern vending machines at your
              location — at zero cost to you.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="tel:2144949985"
                className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 text-base font-semibold text-white hover:bg-accent-light transition-colors duration-200 cursor-pointer shadow-lg shadow-accent/25"
              >
                Call or Text 214-494-9985
              </a>
              <a
                href="https://calendly.com/bryan-zentenvending/15-minute-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white/20 bg-white/5 backdrop-blur-sm px-8 py-4 text-base font-semibold text-white hover:bg-white/15 transition-colors duration-200 cursor-pointer"
              >
                Book a Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-white border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm text-text-muted font-medium">
            <span className="flex items-center gap-2">
              <svg className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
              </svg>
              Zero Cost to You
            </span>
            <span className="flex items-center gap-2">
              <svg className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
              </svg>
              No Contracts
            </span>
            <span className="flex items-center gap-2">
              <svg className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
              </svg>
              We Handle Everything
            </span>
            <span className="flex items-center gap-2">
              <svg className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
              </svg>
              Local &amp; Family-Owned
            </span>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent font-heading font-semibold text-sm tracking-wide uppercase mb-3">
              Simple Process
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-text-muted max-w-2xl mx-auto">
              Getting a smart cooler in your space takes three simple steps.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={step.number} className="relative text-center">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-accent/30 to-accent/10" />
                )}
                <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-white shadow-lg shadow-accent/20">
                  <span className="font-heading text-2xl font-bold">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-navy mb-3">
                  {step.title}
                </h3>
                <p className="text-text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24 sm:py-32 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #0F172A 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent font-heading font-semibold text-sm tracking-wide uppercase mb-3">
              Our Services
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy">
              What We Offer
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Smart Vending Card */}
            <div className="group rounded-2xl bg-white border border-border p-8 lg:p-10 hover:shadow-xl hover:border-accent/20 transition-all duration-300">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <h3 className="font-heading text-2xl font-bold text-navy mb-4">
                Smart Vending
              </h3>
              <p className="text-text-muted leading-relaxed mb-6">
                Touchscreen smart coolers with cashless payment, stocked with
                drinks and snacks your team actually wants. Perfect for lobbies,
                breakrooms, and common areas.
              </p>
              <Link
                href="/smart-vending"
                className="inline-flex items-center text-accent font-semibold hover:text-accent-light transition-colors duration-200 cursor-pointer group/link"
              >
                Learn More
                <svg className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

            {/* Pantry Service Card */}
            <div className="group rounded-2xl bg-white border border-border p-8 lg:p-10 hover:shadow-xl hover:border-accent/20 transition-all duration-300">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-2xl font-bold text-navy mb-4">
                Pantry Service
              </h3>
              <p className="text-text-muted leading-relaxed mb-6">
                We deliver curated snacks and drinks directly to your office
                pantry. No machine needed — just a fully stocked kitchen your
                team loves.
              </p>
              <Link
                href="/pantry-service"
                className="inline-flex items-center text-accent font-semibold hover:text-accent-light transition-colors duration-200 cursor-pointer group/link"
              >
                Learn More
                <svg className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-24 sm:py-32 bg-navy text-white relative overflow-hidden">
        {/* Decorative gradient blobs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-light/10 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent-light font-heading font-semibold text-sm tracking-wide uppercase mb-3">
              The Technology
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold">
              Smart Technology, Simple Experience
            </h2>
            <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto">
              Our smart coolers use the latest technology so your people get a
              seamless, modern experience.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="text-center rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/20 text-accent-light">
                  {feature.icon}
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent font-heading font-semibold text-sm tracking-wide uppercase mb-3">
              Our Clients
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy">
              Trusted Across North Dallas
            </h2>
            <p className="mt-4 text-lg text-text-muted">
              Serving locations in Dallas, Frisco, and Denton.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="rounded-2xl border border-border bg-bg p-8 relative">
              <svg className="absolute top-6 right-6 h-8 w-8 text-accent/10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <p className="text-text-muted italic leading-relaxed mb-6">
                &ldquo;The vending machine looks great!! Love it. Our residents
                and guests are going to love it being here.&rdquo;
              </p>
              <div>
                <p className="font-heading font-semibold text-navy">
                  John Thacker
                </p>
                <p className="text-sm text-text-muted">
                  Assistant Manager, Wade Crossing Apartments — Frisco
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-bg p-8 relative">
              <svg className="absolute top-6 right-6 h-8 w-8 text-accent/10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <p className="text-text-muted italic leading-relaxed mb-6">
                &ldquo;I was the first customer! We show the smart cooler
                during our property tours and include it in our monthly
                resident emails.&rdquo;
              </p>
              <div>
                <p className="font-heading font-semibold text-navy">
                  Christopher Guilliani
                </p>
                <p className="text-sm text-text-muted">
                  Community Manager, City North Apartments — Dallas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-bg via-white to-bg" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4">
            Let&apos;s find the right fit for your space
          </h2>
          <p className="text-lg text-text-muted mb-10 max-w-2xl mx-auto">
            Whether you need a smart cooler in your lobby or a stocked pantry
            in your breakroom, we&apos;ll make it happen.
          </p>
          <CTAButtons />
        </div>
      </section>
    </>
  );
}
