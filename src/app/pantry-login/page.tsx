"use client";

import Image from "next/image";

export default function PantryLogin() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center py-24">
      <div className="w-full max-w-md mx-auto px-4">
        <div className="text-center mb-8">
          <Image
            src="/logo-square.jpeg"
            alt="ZenTen Vending"
            width={80}
            height={80}
            className="mx-auto rounded-2xl mb-6"
          />
          <h1 className="font-heading text-2xl font-bold text-navy">
            Pantry Service Login
          </h1>
          <p className="mt-2 text-text-muted text-sm">
            Sign in to manage your pantry orders
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-navy mb-1.5"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  className="w-full rounded-lg border border-border bg-bg px-4 py-2.5 text-sm text-text placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors duration-200"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-navy mb-1.5"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full rounded-lg border border-border bg-bg px-4 py-2.5 text-sm text-text placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors duration-200"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white hover:bg-accent-light transition-colors duration-200 cursor-pointer"
              >
                Sign In
              </button>
            </div>
          </form>
          <p className="mt-6 text-center text-xs text-text-muted">
            Don&apos;t have an account? Contact us at{" "}
            <a
              href="mailto:Admin@ZenTenVending.com"
              className="text-accent hover:text-accent-light transition-colors duration-200"
            >
              Admin@ZenTenVending.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
