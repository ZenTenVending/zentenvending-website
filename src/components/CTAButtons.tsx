export function CTAButtons({ center = true }: { center?: boolean }) {
  return (
    <div
      className={`flex flex-col sm:flex-row gap-4 ${center ? "justify-center" : ""}`}
    >
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
        className="inline-flex items-center justify-center rounded-lg border-2 border-navy px-8 py-3.5 text-base font-semibold text-navy hover:bg-navy hover:text-white transition-colors duration-200 cursor-pointer"
      >
        Book a Call
      </a>
    </div>
  );
}
