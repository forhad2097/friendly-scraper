import {
  ArrowRight,
  BriefcaseBusiness,
  GraduationCap,
  Home,
  Languages,
  Stethoscope,
  HeartHandshake,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { COURSES } from "@/lib/site-data";
import classroom from "@/assets/classroom.jpg.asset.json";
import caregivingTraining from "@/assets/caregiving-training.jpg";
import japaneseClass from "@/assets/japanese-class.jpg";
import groupPhoto from "@/assets/image.png.asset.json";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <span className="inline-block rounded-full bg-accent px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-accent-foreground uppercase">
            About Us
          </span>
          <h2 className="mt-4 text-3xl leading-tight font-bold sm:text-4xl">
            প্রশিক্ষণ থেকে ক্যারিয়ার—
            <br />
            <span className="text-forest">একটি পূর্ণ পথচলা</span>
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            আমাদের লক্ষ্য হলো শিক্ষার্থীদের নার্সিং, মিডওয়াইফারি, কেয়ারগিভিং
            এবং জাপানি ভাষায় বাস্তবমুখী দক্ষতা তৈরি করা। কোর্স শেষে যোগ্যতা ও
            ভাষাগত প্রস্তুতির ভিত্তিতে বাংলাদেশ ও জাপানে চাকরির সুযোগের জন্য
            গাইড করা হয়।
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "প্র্যাকটিক্যাল প্রশিক্ষণ",
              "পেশাদার শিক্ষার পরিবেশ",
              "কেয়ারগিভিং স্কিল",
              "জাপানি ভাষা প্রস্তুতি",
              "ক্যারিয়ার প্রস্তুতি",
              "Japan pathway গাইডেন্স",
            ].map((item) => (
              <li
                key={item}
                className="rounded-xl border border-border bg-muted/40 px-4 py-3 text-sm font-medium"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120} className="relative">
          <img
            src={classroom.url}
            alt="ইনস্টিটিউটের শ্রেণিকক্ষে ইউনিফর্ম পরা নার্সিং শিক্ষার্থীরা পড়াশোনা করছেন"
            loading="lazy"
            width={1000}
            height={800}
            className="h-[320px] w-full rounded-[2rem] object-cover shadow-lift sm:h-[420px]"
          />
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {[
              { big: "৬ মাস", small: "নির্দিষ্ট প্রশিক্ষণ প্রোগ্রাম" },
              { big: "N5 / N4", small: "Japanese Language" },
              { big: "Level 2 / 3", small: "Caregiving" },
            ].map((s) => (
              <div
                key={s.big}
                className="rounded-2xl border border-border bg-card p-4 text-center shadow-soft"
              >
                <p className="text-lg font-extrabold text-primary">{s.big}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.small}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Courses() {
  return (
    <section id="courses" className="bg-muted/50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Courses"
          title="আপনার জন্য সঠিক কোর্স"
          subtitle="Courses designed for practical skills, professional growth and career preparation."
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((course, i) => (
            <Reveal
              as="li"
              key={course.title}
              delay={(i % 3) * 90}
              className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent text-2xl">
                  <span aria-hidden>{course.icon}</span>
                </span>
                <span className="rounded-full bg-forest/10 px-3 py-1 text-[11px] font-semibold text-forest">
                  {course.tag}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-bold">{course.title}</h3>
              <p className="text-sm font-medium text-forest">
                {course.titleBn}
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {course.desc}
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-semibold">
                <span className="rounded-full bg-muted px-3 py-1">
                  {course.level}
                </span>
                <span className="rounded-full bg-leaf/50 px-3 py-1 text-leaf-foreground">
                  Practical Training
                </span>
              </div>
              <div className="mt-5 flex items-center justify-between gap-3 border-t border-border pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-forest hover:underline"
                >
                  বিস্তারিত দেখুন
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
                <a
                  href="#admission"
                  className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-transform hover:scale-105"
                >
                  Apply Now
                </a>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function JapaneseSection() {
  return (
    <section id="japan" className="relative overflow-hidden bg-background py-16 sm:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1">
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-primary uppercase">
            Japanese Language Training
          </span>
          <h2 className="mt-4 text-3xl leading-tight font-bold sm:text-4xl">
            জাপানি ভাষা শিখুন,
            <br />
            জাপান ক্যারিয়ারের জন্য প্রস্তুত হোন 🇯🇵
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              {
                level: "Japanese N5",
                desc: "মৌলিক শব্দভাণ্ডার, হিরাগানা-কাতাকানা ও দৈনন্দিন কথাবার্তা।",
              },
              {
                level: "Japanese N4",
                desc: "কর্মক্ষেত্রের যোগাযোগ, শ্রবণ দক্ষতা ও ইন্টারভিউ প্রস্তুতি।",
              },
            ].map((n) => (
              <div
                key={n.level}
                className="rounded-2xl border border-border bg-card p-5 shadow-soft"
              >
                <p className="text-base font-bold text-primary">{n.level}</p>
                <p className="mt-2 text-sm text-muted-foreground">{n.desc}</p>
              </div>
            ))}
          </div>
          <ul className="mt-6 grid gap-2 text-sm sm:grid-cols-2">
            {[
              "Basic Japanese communication",
              "Workplace communication",
              "Japan-focused preparation",
              "Caregiver pathway support",
              "Interview preparation",
              "Career guidance",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 rounded-xl bg-muted px-4 py-3 text-xs leading-relaxed text-muted-foreground">
            যোগ্যতা ও সংশ্লিষ্ট শর্ত পূরণ সাপেক্ষে Japan employment pathway-এর
            জন্য সহায়তা করা হয়।
          </p>
        </Reveal>

        <Reveal delay={100} className="order-1 lg:order-2">
          <img
            src={japaneseClass}
            alt="জাপানি ভাষা শিক্ষা ক্লাসে শিক্ষার্থীরা হিরাগানা শিখছেন"
            loading="lazy"
            width={1408}
            height={1008}
            className="h-[300px] w-full rounded-[2rem] object-cover shadow-lift sm:h-[420px]"
          />
        </Reveal>
      </div>
    </section>
  );
}

export function CaregivingSection() {
  return (
    <section className="bg-leaf/25 py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
        <Reveal>
          <img
            src={caregivingTraining}
            alt="ইনস্টিটিউটের ইউনিফর্ম পরা কেয়ারগিভিং শিক্ষার্থীরা প্রবীণ পরিচর্যার হাতে-কলমে প্রশিক্ষণ নিচ্ছেন"
            loading="lazy"
            width={1408}
            height={1008}
            className="h-[300px] w-full rounded-[2rem] object-cover shadow-lift sm:h-[420px]"
          />
        </Reveal>
        <Reveal delay={100}>
          <h2 className="text-3xl leading-tight font-bold sm:text-4xl">
            হাতে-কলমে কেয়ারগিভিং প্রশিক্ষণ
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            প্রশিক্ষকের সরাসরি তত্ত্বাবধানে বাস্তব পরিবেশে কেয়ারগিভিং দক্ষতা
            অর্জনের সুযোগ।
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "প্রবীণ পরিচর্যা (Elderly care)",
              "রোগীকে সহায়তা (Patient assistance)",
              "বেডসাইড কেয়ার",
              "চলাচলে সহায়তা (Mobility)",
              "পরিচ্ছন্নতা ও হাইজিন সাপোর্ট",
              "পেশাদার যোগাযোগ",
            ].map((item) => (
              <li
                key={item}
                className="rounded-xl bg-background px-4 py-3 text-sm font-medium shadow-soft"
              >
                {item}
              </li>
            ))}
          </ul>
          <a
            href="#courses"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.03]"
          >
            Caregiving Course দেখুন <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function NursingSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <h2 className="text-3xl leading-tight font-bold sm:text-4xl">
            প্র্যাকটিক্যাল নার্সিং প্রশিক্ষণ
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            শুধু বই নয়—বাস্তবভিত্তিক skill development-এর ওপর গুরুত্ব।
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Patient care ও বেডসাইড প্র্যাকটিস",
              "Basic clinical procedures",
              "নার্সিং প্র্যাকটিস ও ডকুমেন্টেশন",
              "মেডিকেল ইকুইপমেন্ট পরিচিতি",
              "ক্লাসরুম ও ডেমো ট্রেনিং",
              "টিম লার্নিং ও পেশাদার আচরণ",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm leading-relaxed"
              >
                <Stethoscope
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={100}>
          <img
            src={groupPhoto.url}
            alt="নার্সিং শিক্ষার্থীরা ইনস্টিটিউটের একটি প্রোগ্রামে দলগতভাবে অংশ নিচ্ছেন"
            loading="lazy"
            width={960}
            height={1280}
            className="h-[340px] w-full rounded-[2rem] object-cover object-top shadow-lift sm:h-[460px]"
          />
        </Reveal>
      </div>
    </section>
  );
}

export function CareerPathway() {
  const steps = [
    { no: "01", en: "Course", bn: "কোর্সে ভর্তি" },
    { no: "02", en: "Skill", bn: "Practical Training" },
    { no: "03", en: "Language", bn: "Japanese N5/N4" },
    { no: "04", en: "Assessment", bn: "যোগ্যতা যাচাই" },
    { no: "05", en: "Job Support", bn: "Bangladesh / Japan" },
  ];
  return (
    <section className="bg-forest py-16 text-forest-foreground sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Career Pathway 🇯🇵"
          tone="dark"
          title="শিখুন → প্রস্তুত হোন → ক্যারিয়ার শুরু করুন"
        />
        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <Reveal
              as="li"
              key={s.no}
              delay={i * 80}
              className="rounded-2xl border border-forest-foreground/15 bg-forest-foreground/5 p-5"
            >
              <span className="text-xs font-bold tracking-widest opacity-60">
                {s.no}
              </span>
              <p className="mt-2 text-base font-bold">{s.en}</p>
              <p className="mt-1 text-sm opacity-80">{s.bn}</p>
            </Reveal>
          ))}
        </ol>
        <p className="mx-auto mt-10 max-w-3xl rounded-xl bg-forest-foreground/10 px-5 py-4 text-center text-xs leading-relaxed opacity-90">
          চাকরি/ভিসা/জাপান যাত্রা নির্ভর করে শিক্ষার্থীর যোগ্যতা, ভাষা, পরীক্ষা,
          নিয়োগকর্তা ও সংশ্লিষ্ট সরকারি নিয়মের ওপর।
        </p>
      </div>
    </section>
  );
}

export function WhyChooseUs() {
  const features = [
    {
      Icon: GraduationCap,
      title: "Professional Training",
      bn: "পেশাদার প্রশিক্ষণ",
      desc: "অভিজ্ঞ প্রশিক্ষকদের তত্ত্বাবধানে গঠনমূলক ও শৃঙ্খলাবদ্ধ শিক্ষা।",
    },
    {
      Icon: Languages,
      title: "Japanese Language",
      bn: "জাপানি ভাষা শিক্ষা",
      desc: "N5 থেকে N4 পর্যন্ত ধাপে ধাপে ভাষা প্রস্তুতির ব্যবস্থা।",
    },
    {
      Icon: HeartHandshake,
      title: "Practical Caregiving",
      bn: "প্র্যাকটিক্যাল কেয়ারগিভিং",
      desc: "বাস্তব পরিবেশে হাতে-কলমে কেয়ারগিভিং দক্ষতা অর্জন।",
    },
    {
      Icon: Stethoscope,
      title: "Japan-focused Preparation",
      bn: "জাপান-কেন্দ্রিক প্রস্তুতি",
      desc: "জাপানের কর্মপরিবেশ ও যোগাযোগ-রীতি অনুযায়ী প্রস্তুতি।",
    },
    {
      Icon: Home,
      title: "Hostel Support",
      bn: "হোস্টেল সুবিধা",
      desc: "নির্দিষ্ট ব্যাচ ও আসন সাপেক্ষে থাকা-খাওয়ার সহায়তা।",
    },
    {
      Icon: BriefcaseBusiness,
      title: "Career Guidance",
      bn: "ক্যারিয়ার গাইডেন্স",
      desc: "সিভি, ইন্টারভিউ ও ক্যারিয়ার পরিকল্পনায় দিকনির্দেশনা।",
    },
  ];
  return (
    <section id="services" className="bg-muted/50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Services"
          title="কেন আমাদের প্রতিষ্ঠান বেছে নেবেন?"
          subtitle="Training, language, skills and career guidance — one place."
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ Icon, title, bn, desc }, i) => (
            <Reveal
              as="li"
              key={title}
              delay={(i % 3) * 90}
              className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-accent-foreground">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mt-4 text-base font-bold">{title}</h3>
              <p className="text-sm font-medium text-forest">{bn}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {desc}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
