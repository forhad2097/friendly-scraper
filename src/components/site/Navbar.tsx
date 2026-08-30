import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { INSTITUTE, NAV_LINKS } from "@/lib/site-data";
import logo from "@/assets/logo.png.asset.json";

export function AnnouncementBar() {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-1 px-4 py-2 text-center text-[11px] font-medium sm:flex-row sm:justify-between sm:text-xs">
        <p>ভর্তি চলছে — Admission Open</p>
        <p className="opacity-90">
          BNMC Approved <span className="mx-1">•</span> Hospital Clinical Training
        </p>
      </div>
    </div>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <AnnouncementBar />
      <nav
        className={cn(
          "border-b border-border bg-background/95 backdrop-blur transition-shadow",
          scrolled && "shadow-soft",
        )}
        aria-label="Main navigation"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 lg:flex lg:justify-between">
          <a href="#home" className="flex min-w-0 items-center gap-3">
            <img
              src={logo.url}
              alt={`${INSTITUTE.name} logo`}
              width={48}
              height={48}
              className="h-11 w-11 shrink-0 rounded-full object-cover"
            />
            <span className="min-w-0">
              <span className="block truncate text-sm leading-tight font-bold sm:text-base">
                নাইটিঙ্গেল নার্সিং এন্ড মিডওয়াইফারি
              </span>
              <span className="block truncate text-[11px] tracking-wide text-muted-foreground uppercase">
                Nursing • Midwifery • BNMC Approved
              </span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-lg px-3 py-2 text-center text-[13px] leading-tight font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  {link.bn}
                  <span className="block text-[10px] text-muted-foreground">{link.en}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={`tel:${INSTITUTE.phoneTel}`}
              className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-2 text-xs font-semibold hover:bg-muted"
            >
              <Phone className="h-4 w-4 text-primary" aria-hidden />
              {INSTITUTE.phone}
            </a>
            <a
              href="#admission"
              className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.03]"
            >
              ভর্তি আবেদন
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open ? (
          <div className="border-t border-border bg-background lg:hidden">
            <ul className="mx-auto max-w-7xl px-4 py-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline justify-between rounded-lg px-2 py-3 text-sm font-medium hover:bg-muted"
                  >
                    {link.bn}
                    <span className="text-xs text-muted-foreground">{link.en}</span>
                  </a>
                </li>
              ))}
              <li className="mt-2 grid gap-2">
                <a
                  href="#admission"
                  onClick={() => setOpen(false)}
                  className="rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
                >
                  ভর্তি আবেদন
                </a>
                <a
                  href={`tel:${INSTITUTE.phoneTel}`}
                  className="rounded-xl border border-border px-4 py-3 text-center text-sm font-semibold"
                >
                  Call {INSTITUTE.phone}
                </a>
              </li>
            </ul>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
