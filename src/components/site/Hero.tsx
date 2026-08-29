import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "./Reveal";
import heroImage from "@/assets/hero-caregiver.jpg";

const TRUST = [
  "Practical Training",
  "Japanese Language Support",
  "Japan-focused Career Pathway",
  "Hostel Support*",
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-cream">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-28 -right-24 h-80 w-80 rounded-full bg-leaf/40 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 lg:grid-cols-2 lg:py-20">
        <Reveal>
          <span className="inline-block rounded-full bg-accent px-3 py-1 text-[11px] font-semibold tracking-[0.2em] text-accent-foreground uppercase">
            Japan • Nursing • Caregiving
          </span>
          <h1 className="mt-5 text-4xl leading-[1.15] font-extrabold sm:text-5xl xl:text-6xl">
            দক্ষতা শিখুন,
            <br />
            <span className="text-primary">ভবিষ্যৎ গড়ুন</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            নার্সিং, মিডওয়াইফারি, কেয়ারগিভিং ও জাপানি ভাষার প্রশিক্ষণ—হাতে-কলমে
            দক্ষতা, ভাষা প্রস্তুতি এবং দেশ-বিদেশে ক্যারিয়ার সহায়তার এক জায়গা।
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#courses"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.03]"
            >
              কোর্স দেখুন <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a
              href="#admission"
              className="inline-flex items-center gap-2 rounded-full border border-forest/25 bg-background px-6 py-3 text-sm font-semibold text-forest transition-colors hover:bg-accent"
            >
              ভর্তি সম্পর্কে জানুন
            </a>
          </div>

          <ul className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2">
            {TRUST.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-leaf text-leaf-foreground">
                  <Check className="h-3 w-3" aria-hidden />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-muted-foreground">
            *নির্দিষ্ট ব্যাচ/প্রোগ্রাম ও আসন সাপেক্ষে।
          </p>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div className="relative overflow-hidden rounded-[2rem] shadow-lift">
            <img
              src={heroImage}
              alt="নাইটিঙ্গেল ইনস্টিটিউটের প্রশিক্ষিত বাংলাদেশি কেয়ারগিভার একজন জাপানি প্রবীণ নারীর সেবা করছেন"
              width={1200}
              height={1408}
              className="h-[380px] w-full object-cover sm:h-[480px] lg:h-[560px]"
            />
          </div>
          <div className="absolute top-5 left-5 rounded-full bg-primary px-4 py-2 text-xs font-bold text-primary-foreground shadow-soft">
            ভর্তি চলছে
          </div>
          <div className="mx-auto -mt-10 w-[92%] rounded-2xl border border-border bg-background/95 p-4 shadow-lift backdrop-blur sm:absolute sm:right-4 sm:bottom-5 sm:mt-0 sm:w-64">
            <p className="text-xs font-bold tracking-widest text-primary uppercase">
              Career Support
            </p>
            <p className="mt-1 text-sm font-semibold">Bangladesh → Japan 🇯🇵</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Language + Caregiving + Job Guidance
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function TrustBar() {
  const items = [
    { no: "01", bn: "প্র্যাকটিক্যাল ট্রেনিং", en: "Hands-on Learning" },
    { no: "02", bn: "জাপানি ভাষা", en: "N5 → N4 Pathway" },
    { no: "03", bn: "কেয়ারগিভিং স্কিল", en: "Level 2 / Level 3" },
    { no: "04", bn: "ক্যারিয়ার সহায়তা", en: "Bangladesh & Japan" },
  ];
  return (
    <section className="bg-forest text-forest-foreground">
      <ul className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <Reveal as="li" key={item.no} delay={i * 80}>
            <span className="text-xs font-bold tracking-widest opacity-60">
              {item.no}
            </span>
            <p className="mt-1 text-lg font-bold">{item.bn}</p>
            <p className="text-sm opacity-80">{item.en}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
