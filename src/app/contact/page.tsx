import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Contact | ZenTen Vending",
  description:
    "Get in touch with ZenTen Vending. Call, text, or book a free site visit. Serving North Dallas from Uptown to Denton to McKinney.",
};

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
              Let&apos;s Talk
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/70 leading-relaxed">
              Whether you&apos;re ready to get started or just have questions,
              we&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact options */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Contact info */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-navy mb-8">
                Get in Touch
              </h2>

              {/* Phone */}
              <div className="mb-10">
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-text-muted">Call or text</p>
                    <a
                      href="tel:2144949985"
                      className="text-2xl font-heading font-bold text-navy hover:text-accent transition-colors duration-200 cursor-pointer"
                    >
                      214-494-9985
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="mb-10">
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-text-muted">Email</p>
                    <a
                      href="mailto:Admin@ZenTenVending.com"
                      className="text-lg font-semibold text-navy hover:text-accent transition-colors duration-200 cursor-pointer"
                    >
                      Admin@ZenTenVending.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Service Area */}
              <div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-text-muted">Service area</p>
                    <p className="text-lg font-semibold text-navy">
                      North Dallas — Uptown to Denton to McKinney
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Calendly embed */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-navy mb-8">
                Book a Call
              </h2>
              <div
                className="calendly-inline-widget rounded-2xl overflow-hidden"
                data-url="https://calendly.com/bryan-zentenvending/15-minute-meeting?hide_gdpr_banner=1"
                style={{ minWidth: "320px", height: "700px" }}
              />
            </div>
          </div>
        </div>
      </section>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </>
  );
}
