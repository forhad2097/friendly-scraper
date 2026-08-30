import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  FlaskConical,
  GraduationCap,
  Globe2,
  Home,
  Languages,
  Library,
  ShieldCheck,
  Stethoscope,
  Trophy,
  Users,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  CAREER_INTERNATIONAL,
  CAREER_LOCAL,
  CAREER_SUPPORT,
  CLINICAL_TRAINING,
  COURSES,
  FACILITIES,
  FACULTY_ROLES,
  HIGHER_STUDY_OPTIONS,
  MANAGEMENT_TEAM,
} from "@/lib/site-data";
import classroom from "@/assets/classroom.jpg.asset.json";
import caregivingTraining from "@/assets/caregiving-training.jpg";

const FACILITY_ICONS: Record<
  string,
  React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>
> = {
  BookOpen,
  FlaskConical,
  Library,
  Languages,
  Trophy,
  Home,
};

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <span className="inline-block rounded-full bg-accent px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-accent-foreground uppercase">
            About Us
          </span>
          <h2 className="mt-4 text-3xl leading-tight font-bold sm:text-4xl">
            "Enter to Learn,
            <br />
            <span className="text-forest">Leave to Serve"</span>
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            ফ্লোরেন্স নাইটিঙ্গেল—আধুনিক নার্সিংয়ের পথিকৃৎ—এর নামে প্রতিষ্ঠিত নাইটিঙ্গেল নার্সিং
            অ্যান্ড মিডওয়াইফারি ইনস্টিটিউট (NNMI) বাংলাদেশ ও আন্তর্জাতিক অঙ্গনে সফল ক্যারিয়ারের
            জন্য প্রস্তুত করে এমন মানসম্পন্ন নার্সিং ও মিডওয়াইফারি শিক্ষা প্রদান করে।
          </p>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            আমাদের লক্ষ্য নার্সিং ও মিডওয়াইফারি শিক্ষায় একটি Center of Excellence হয়ে
            ওঠা—বাংলাদেশের স্বাস্থ্যসেবার মান উন্নয়ন এবং শিক্ষার্থীদের বৈশ্বিক পর্যায়ে সক্ষম করে
            তোলা।
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "BNMC অনুমোদিত ডিপ্লোমা প্রোগ্রাম",
              "হাসপাতাল-ভিত্তিক ক্লিনিক্যাল ট্রেনিং",
              "স্বাস্থ্য মন্ত্রণালয় কর্তৃক অনুমোদিত",
              "দক্ষিণ কোরিয়ার বিশেষজ্ঞদের প্রশিক্ষণ",
              "মহিলা শিক্ষার্থীদের জন্য হোস্টেল",
              "ক্যারিয়ার গাইডেন্স সহায়তা",
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
              { big: "৩ বছর", small: "ডিপ্লোমা প্রোগ্রাম" },
              { big: "BNMC", small: "Approved" },
              { big: "IACIB", small: "Associate" },
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
          subtitle="BNMC অনুমোদিত ডিপ্লোমা প্রোগ্রাম—হাসপাতাল-ভিত্তিক প্র্যাকটিক্যাল ট্রেনিংসহ।"
        />
        <ul className="mt-12 grid gap-6 lg:grid-cols-2">
          {COURSES.map((course, i) => (
            <Reveal
              as="li"
              key={course.title}
              delay={i * 90}
              className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-7"
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
              <p className="text-sm font-medium text-forest">{course.titleBn}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{course.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-semibold">
                <span className="rounded-full bg-muted px-3 py-1">মেয়াদ: {course.duration}</span>
                <span className="rounded-full bg-leaf/50 px-3 py-1 text-leaf-foreground">
                  আসন সংখ্যা: {course.seats}
                </span>
              </div>

              <Accordion type="single" collapsible className="mt-5">
                <AccordionItem value="curriculum">
                  <AccordionTrigger className="text-sm font-semibold text-forest">
                    বছরভিত্তিক কারিকুলাম দেখুন
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid gap-4">
                      {course.years.map((y) => (
                        <div key={y.label}>
                          <p className="text-xs font-bold tracking-wide text-primary uppercase">
                            {y.label}
                          </p>
                          <ul className="mt-1.5 grid gap-1 text-sm text-muted-foreground">
                            {y.topics.map((t) => (
                              <li key={t} className="flex items-start gap-2">
                                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-forest" />
                                {t}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      <div>
                        <p className="text-xs font-bold tracking-wide text-primary uppercase">
                          ক্লিনিক্যাল ট্রেনিং সাইট
                        </p>
                        <ul className="mt-1.5 grid gap-1 text-sm text-muted-foreground">
                          {course.clinicalSites.map((s) => (
                            <li key={s} className="flex items-start gap-2">
                              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-forest" />
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="mt-5 flex items-center justify-between gap-3 border-t border-border pt-4">
                <a
                  href="#admission"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-forest hover:underline"
                >
                  ভর্তি ও ফি জানুন
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

export function Facilities() {
  return (
    <section id="facilities" className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
      <SectionHeading
        eyebrow="Facilities"
        title="আমাদের সুযোগ-সুবিধা"
        subtitle="শিক্ষার্থীদের বাস্তবভিত্তিক শেখার জন্য প্রয়োজনীয় সব সুবিধা এক ক্যাম্পাসে।"
      />
      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FACILITIES.map((f, i) => {
          const Icon = FACILITY_ICONS[f.icon] ?? BookOpen;
          return (
            <Reveal
              as="li"
              key={f.title}
              delay={(i % 3) * 90}
              className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-accent-foreground">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mt-4 text-base font-bold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </Reveal>
          );
        })}
      </ul>

      <div className="mt-12 grid items-center gap-10 rounded-3xl border border-border bg-muted/40 p-6 lg:grid-cols-2 lg:p-10">
        <Reveal>
          <img
            src={caregivingTraining}
            alt="শিক্ষার্থীরা রোগীর সেবা ও বেডসাইড কেয়ারের হাতে-কলমে প্রশিক্ষণ নিচ্ছেন"
            loading="lazy"
            width={1408}
            height={1008}
            className="h-[260px] w-full rounded-2xl object-cover shadow-soft sm:h-[320px]"
          />
        </Reveal>
        <Reveal delay={100}>
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-primary uppercase">
            <Stethoscope className="h-3.5 w-3.5" aria-hidden />
            Clinical Training
          </span>
          <h3 className="mt-4 text-2xl font-bold">{CLINICAL_TRAINING.title}</h3>
          <p className="mt-3 leading-relaxed text-muted-foreground">{CLINICAL_TRAINING.desc}</p>
          <ul className="mt-4 grid gap-2">
            {CLINICAL_TRAINING.sites.map((s) => (
              <li key={s} className="flex items-start gap-2 text-sm font-medium">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {s}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <p className="mt-8 text-center text-sm text-muted-foreground">
        আমাদের Faculty ও Management টিম সম্পর্কে জানুন{" "}
        <a href="#faculty" className="font-semibold text-forest hover:underline">
          নিচে দেখুন ↓
        </a>
      </p>
    </section>
  );
}

export function FacultyManagement() {
  return (
    <section id="faculty" className="bg-muted/50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Faculty & Management"
          title="আমাদের শিক্ষক ও পরিচালনা পর্ষদ"
          subtitle="অভিজ্ঞ চিকিৎসক, নার্সিং প্রশিক্ষক এবং দক্ষিণ কোরিয়ার বিশেষজ্ঞদের অতিথি সেশনের সমন্বয়ে গঠিত একাডেমিক টিম।"
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-5">
          <Reveal className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft lg:col-span-3">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>পদবি</TableHead>
                  <TableHead>যোগ্যতা</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {FACULTY_ROLES.map((f) => (
                  <TableRow key={f.role}>
                    <TableCell className="font-medium">{f.role}</TableCell>
                    <TableCell className="text-muted-foreground">{f.qualification}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-2">
            <h3 className="flex items-center gap-2 text-base font-bold">
              <Users className="h-5 w-5 text-primary" aria-hidden />
              Management Team
            </h3>
            <ul className="mt-4 grid gap-3">
              {MANAGEMENT_TEAM.map((m) => (
                <li
                  key={m.name}
                  className="rounded-xl border border-border bg-card px-4 py-3 shadow-soft"
                >
                  <p className="text-sm font-bold">{m.name}</p>
                  <p className="text-xs text-muted-foreground">{m.role}</p>
                </li>
              ))}
            </ul>
            <p className="mt-4 rounded-xl bg-background px-4 py-3 text-xs leading-relaxed text-muted-foreground shadow-soft">
              ইনস্টিটিউট নিয়মিতভাবে অভিজ্ঞ চিকিৎসক, সিনিয়র স্বাস্থ্যসেবা পেশাজীবী এবং দক্ষিণ
              কোরিয়ার বিশেষজ্ঞ চিকিৎসকদের অতিথি সেশনের জন্য আমন্ত্রণ জানায়।
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function CareerOpportunities() {
  return (
    <section id="career" className="bg-forest py-16 text-forest-foreground sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Career Opportunities"
          tone="dark"
          title="দেশে ও বিদেশে ক্যারিয়ারের সুযোগ"
          subtitle="নার্সিং ও মিডওয়াইফারি ডিপ্লোমা সম্পন্নকারীদের জন্য বাংলাদেশ ও আন্তর্জাতিক পর্যায়ে বিস্তৃত কর্মক্ষেত্র।"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Reveal className="rounded-2xl border border-forest-foreground/15 bg-forest-foreground/5 p-6">
            <h3 className="flex items-center gap-2 text-base font-bold">
              <Building2 className="h-5 w-5" aria-hidden />
              দেশীয় কর্মক্ষেত্র
            </h3>
            <ul className="mt-4 grid gap-2.5 text-sm">
              {CAREER_LOCAL.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-forest-foreground/60" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            delay={100}
            className="rounded-2xl border border-forest-foreground/15 bg-forest-foreground/5 p-6"
          >
            <h3 className="flex items-center gap-2 text-base font-bold">
              <Globe2 className="h-5 w-5" aria-hidden />
              আন্তর্জাতিক সুযোগ
            </h3>
            <ul className="mt-4 grid gap-3 text-sm">
              {CAREER_INTERNATIONAL.map((c) => (
                <li key={c.region}>
                  <p className="font-semibold">{c.region}</p>
                  <p className="mt-0.5 opacity-80">{c.desc}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <Reveal className="rounded-2xl border border-forest-foreground/15 bg-forest-foreground/5 p-6">
            <h3 className="flex items-center gap-2 text-base font-bold">
              <BriefcaseBusiness className="h-5 w-5" aria-hidden />
              ক্যারিয়ার সহায়তা
            </h3>
            <ul className="mt-4 grid gap-2.5 text-sm sm:grid-cols-2">
              {CAREER_SUPPORT.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-forest-foreground/60" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            delay={100}
            className="rounded-2xl border border-forest-foreground/15 bg-forest-foreground/5 p-6"
          >
            <h3 className="flex items-center gap-2 text-base font-bold">
              <GraduationCap className="h-5 w-5" aria-hidden />
              ডিপ্লোমা শেষে উচ্চশিক্ষার সুযোগ
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2 text-xs font-semibold">
              {HIGHER_STUDY_OPTIONS.map((item) => (
                <li key={item} className="rounded-full bg-forest-foreground/10 px-3 py-1.5">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs leading-relaxed opacity-75">
              উপরের উচ্চশিক্ষা প্রোগ্রামগুলো NNMI কর্তৃক পরিচালিত নয়—এগুলো ডিপ্লোমা সম্পন্নের পর
              শিক্ষার্থীরা অন্যান্য প্রতিষ্ঠানে অনুসরণ করতে পারেন এমন সম্ভাব্য পথ।
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function WhyChooseUs() {
  const features = [
    {
      Icon: ShieldCheck,
      title: "BNMC Approved Curriculum",
      bn: "সরকার অনুমোদিত কারিকুলাম",
      desc: "Bangladesh Nursing & Midwifery Council এবং স্বাস্থ্য মন্ত্রণালয়ের অনুমোদনপ্রাপ্ত প্রোগ্রাম।",
    },
    {
      Icon: Stethoscope,
      title: "Hospital Clinical Training",
      bn: "হাসপাতাল-ভিত্তিক প্র্যাকটিস",
      desc: "Dhaka Medical College Hospital-সহ স্বীকৃত হাসপাতালে নিয়মিত ক্লিনিক্যাল ট্রেনিং।",
    },
    {
      Icon: GraduationCap,
      title: "South Korea Partnership",
      bn: "দক্ষিণ কোরিয়ার বিশেষজ্ঞ প্রশিক্ষণ",
      desc: "দক্ষিণ কোরিয়ার চিকিৎসক ও স্বাস্থ্যসেবা বিশেষজ্ঞদের বিশেষায়িত প্রশিক্ষণ সেশন।",
    },
    {
      Icon: Home,
      title: "Hostel Support",
      bn: "হোস্টেল সুবিধা",
      desc: "মহিলা সুপারিনটেনডেন্টের তত্ত্বাবধানে নিরাপদ থাকা-খাওয়ার ব্যবস্থা।",
    },
    {
      Icon: Languages,
      title: "English Language Club",
      bn: "ইংলিশ ল্যাঙ্গুয়েজ ক্লাব",
      desc: "স্পোকেন ইংলিশ ও পাবলিক স্পিকিং চর্চার মাধ্যমে পেশাদার যোগাযোগ দক্ষতা।",
    },
    {
      Icon: BriefcaseBusiness,
      title: "Career Guidance",
      bn: "ক্যারিয়ার গাইডেন্স",
      desc: "সিভি, ইন্টারভিউ প্রস্তুতি এবং দেশে-বিদেশে চাকরির সুযোগে দিকনির্দেশনা।",
    },
  ];
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
      <SectionHeading
        eyebrow="Why NNMI"
        title="কেন আমাদের প্রতিষ্ঠান বেছে নেবেন?"
        subtitle="স্বীকৃত কারিকুলাম, হাতে-কলমে ক্লিনিক্যাল ট্রেনিং এবং ক্যারিয়ার সহায়তা—এক জায়গায়।"
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
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
