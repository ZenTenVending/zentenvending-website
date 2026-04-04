import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* CTA Banner */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            Ready to add a smart cooler to your space?
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Zero cost. No contracts. We handle everything.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:2144949985"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-3.5 text-base font-semibold text-white hover:bg-accent-light transition-colors duration-200 cursor-pointer"
            >
              Call or Text 214-494-9985
            </a>
            <a
              href="https://calendly.com/bryan-zentenvending/15-minute-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/20 px-8 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors duration-200 cursor-pointer"
            >
              Book a Call
            </a>
          </div>
        </div>
      </div>

      {/* Footer links */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">
              ZenTen Vending
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Local, family-owned smart vending serving North Dallas from Uptown
              to Denton to McKinney.
            </p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Pages</h3>
            <ul className="space-y-2">
              {[
                { href: "/smart-vending", label: "Smart Vending" },
                { href: "/pantry-service", label: "Pantry Service" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <a
                  href="tel:2144949985"
                  className="hover:text-white transition-colors duration-200"
                >
                  214-494-9985
                </a>
              </li>
              <li>
                <a
                  href="mailto:Admin@ZenTenVending.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  Admin@ZenTenVending.com
                </a>
              </li>
              <li>North Dallas, TX</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/40">
          &copy; {new Date().getFullYear()} ZenTen Vending. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
