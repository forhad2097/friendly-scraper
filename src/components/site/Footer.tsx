import { INSTITUTE, NAV_LINKS } from "@/lib/site-data";
import logo from "@/assets/logo.png.asset.json";

export function Footer() {
  return (
    <footer className="bg-forest text-forest-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="flex min-w-0 items-center gap-3">
            <img
              src={logo.url}
              alt={`${INSTITUTE.name} logo`}
              loading="lazy"
              width={52}
              height={52}
              className="h-13 w-13 shrink-0 rounded-full object-cover"
            />
            <div className="min-w-0">
              <p className="text-base font-bold">{INSTITUTE.name}</p>
              <p className="truncate text-sm opacity-80">{INSTITUTE.nameBn}</p>
            </div>
          </div>
          <ul className="mt-5 flex flex-wrap gap-2 text-xs font-semibold">
            {["Nursing", "Midwifery", "Caregiving", "Japanese Language"].map(
              (t) => (
                <li
                  key={t}
                  className="rounded-full bg-forest-foreground/10 px-3 py-1"
                >
                  {t}
                </li>
              ),
            )}
          </ul>
          <p className="mt-5 max-w-md text-sm leading-relaxed opacity-80">
            নার্সিং, মিডওয়াইফারি, কেয়ারগিভিং ও জাপানি ভাষার প্রশিক্ষণের মাধ্যমে
            দেশ-বিদেশে ক্যারিয়ার প্রস্তুতিতে সহায়তা।
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold tracking-widest uppercase opacity-70">
            Quick Links
          </h2>
          <ul className="mt-4 grid gap-2 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="opacity-85 hover:underline">
                  {link.en}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold tracking-widest uppercase opacity-70">
            Contact
          </h2>
          <ul className="mt-4 grid gap-2 text-sm">
            <li>
              <a href={`tel:${INSTITUTE.phoneTel}`} className="hover:underline">
                {INSTITUTE.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${INSTITUTE.email}`}
                className="break-all hover:underline"
              >
                {INSTITUTE.email}
              </a>
            </li>
            <li className="opacity-85">{INSTITUTE.website}</li>
            <li className="opacity-85">{INSTITUTE.addressEn}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-forest-foreground/15">
        <p className="mx-auto max-w-7xl px-4 py-5 text-center text-xs opacity-75">
          © 2026 {INSTITUTE.name}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
