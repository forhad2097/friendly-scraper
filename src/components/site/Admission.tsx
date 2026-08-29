import { useState } from "react";
import { ArrowRight, Mail, MapPin, Globe, Phone, MessageCircle } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { COURSE_OPTIONS, INSTITUTE } from "@/lib/site-data";
import logo from "@/assets/logo.png.asset.json";

const field =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20";

export function Admission() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const text = [
      "ভর্তি আবেদন — Nightingale Nursing & Midwifery Institute",
      `নাম: ${data.get("name")}`,
      `মোবাইল: ${data.get("mobile")}`,
      `ইমেইল: ${data.get("email") || "-"}`,
      `কোর্স: ${data.get("course")}`,
      `শিক্ষাগত যোগ্যতা: ${data.get("qualification") || "-"}`,
      `Japan pathway: ${data.get("japan")}`,
      `বার্তা: ${data.get("message") || "-"}`,
    ].join("\n");

    window.open(
      `https://wa.me/${INSTITUTE.whatsapp}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener",
    );
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <section id="admission" className="bg-primary py-16 text-primary-foreground sm:py-20">
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 lg:grid-cols-2">
        <Reveal>
          <span className="inline-block rounded-full bg-primary-foreground/15 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] uppercase">
            Admission Open
          </span>
          <h2 className="mt-4 text-3xl leading-tight font-bold sm:text-4xl">
            আপনার ক্যারিয়ার শুরু হোক আজ থেকেই
          </h2>
          <p className="mt-4 leading-relaxed opacity-90">
            আপনি কোন কোর্সে আগ্রহী, আপনার শিক্ষাগত যোগ্যতা এবং Japan pathway-তে
            আগ্রহ আছে কি না—এই তথ্য দিয়ে আবেদন পাঠান।
          </p>
          <div className="mt-8 grid gap-3 text-sm">
            <a
              href={`tel:${INSTITUTE.phoneTel}`}
              className="inline-flex w-fit items-center gap-2 rounded-full bg-primary-foreground/12 px-5 py-3 font-semibold hover:bg-primary-foreground/20"
            >
              <Phone className="h-4 w-4" aria-hidden /> {INSTITUTE.phone}
            </a>
            <a
              href={`mailto:${INSTITUTE.email}`}
              className="inline-flex w-fit items-center gap-2 rounded-full bg-primary-foreground/12 px-5 py-3 font-semibold break-all hover:bg-primary-foreground/20"
            >
              <Mail className="h-4 w-4 shrink-0" aria-hidden /> {INSTITUTE.email}
            </a>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <form
            onSubmit={onSubmit}
            className="grid gap-4 rounded-3xl bg-background p-6 text-foreground shadow-lift sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-1.5 text-sm font-medium">
                পূর্ণ নাম / Full Name *
                <input name="name" required className={field} placeholder="আপনার নাম" />
              </label>
              <label className="grid gap-1.5 text-sm font-medium">
                মোবাইল নম্বর *
                <input
                  name="mobile"
                  required
                  inputMode="tel"
                  className={field}
                  placeholder="01XXXXXXXXX"
                />
              </label>
            </div>
            <label className="grid gap-1.5 text-sm font-medium">
              ইমেইল / Email
              <input name="email" type="email" className={field} placeholder="you@example.com" />
            </label>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-1.5 text-sm font-medium">
                কোর্স নির্বাচন করুন *
                <select name="course" required defaultValue="" className={field}>
                  <option value="" disabled>
                    Select Course
                  </option>
                  {COURSE_OPTIONS.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </label>
              <label className="grid gap-1.5 text-sm font-medium">
                শিক্ষাগত যোগ্যতা
                <input name="qualification" className={field} placeholder="SSC / HSC / অন্যান্য" />
              </label>
            </div>
            <label className="grid gap-1.5 text-sm font-medium">
              Japan pathway-তে আগ্রহ?
              <select name="japan" defaultValue="Yes" className={field}>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </label>
            <label className="grid gap-1.5 text-sm font-medium">
              বার্তা / Message
              <textarea name="message" rows={3} className={field} placeholder="আপনার প্রশ্ন লিখুন" />
            </label>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              আবেদন পাঠান <ArrowRight className="h-4 w-4" aria-hidden />
            </button>
            {sent ? (
              <p
                role="status"
                className="rounded-xl bg-accent px-4 py-3 text-sm font-medium text-accent-foreground"
              >
                ধন্যবাদ! আপনার তথ্য প্রস্তুত হয়েছে—WhatsApp-এ পাঠিয়ে দিন অথবা{" "}
                {INSTITUTE.phone} নম্বরে কল করুন।
              </p>
            ) : null}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
      <SectionHeading
        eyebrow="Contact"
        title="যোগাযোগ করুন"
        subtitle="Visit our campus or reach us over phone, email and WhatsApp."
      />
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <Reveal className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
          <div className="flex min-w-0 items-center gap-3">
            <img
              src={logo.url}
              alt={`${INSTITUTE.name} logo`}
              loading="lazy"
              width={56}
              height={56}
              className="h-14 w-14 shrink-0 rounded-full object-cover"
            />
            <div className="min-w-0">
              <h3 className="text-base font-bold sm:text-lg">{INSTITUTE.name}</h3>
              <p className="truncate text-sm text-muted-foreground">
                {INSTITUTE.nameBn}
              </p>
            </div>
          </div>
          <ul className="mt-6 grid gap-4 text-sm">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
              <a href={`tel:${INSTITUTE.phoneTel}`} className="hover:underline">
                {INSTITUTE.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
              <a
                href={`mailto:${INSTITUTE.email}`}
                className="break-all hover:underline"
              >
                {INSTITUTE.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Globe className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
              <span>{INSTITUTE.website}</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
              <span>
                {INSTITUTE.address}
                <span className="block text-muted-foreground">
                  {INSTITUTE.addressEn}
                </span>
              </span>
            </li>
          </ul>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={`tel:${INSTITUTE.phoneTel}`}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:scale-[1.03]"
            >
              <Phone className="h-4 w-4" aria-hidden /> Call Now
            </a>
            <a
              href={`mailto:${INSTITUTE.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold hover:bg-muted"
            >
              <Mail className="h-4 w-4" aria-hidden /> Email Us
            </a>
            <a
              href={`https://wa.me/${INSTITUTE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-forest px-5 py-3 text-sm font-semibold text-forest-foreground hover:scale-[1.03]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden /> WhatsApp
            </a>
          </div>
        </Reveal>

        <Reveal delay={100} className="overflow-hidden rounded-3xl border border-border shadow-soft">
          <iframe
            title="Institute location map — Adabor, Mohammadpur, Dhaka"
            src="https://www.google.com/maps?q=Adabor,%20Mohammadpur,%20Dhaka&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[320px] w-full border-0 sm:h-full sm:min-h-[420px]"
          />
        </Reveal>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="bg-leaf/30 py-16">
      <Reveal className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-3xl leading-tight font-bold sm:text-4xl">
          আপনার স্বপ্নের ক্যারিয়ার শুরু হোক এখান থেকেই
        </h2>
        <p className="mt-3 text-sm font-medium text-forest sm:text-base">
          Nursing • Caregiving • Japanese Language • Japan Career Pathway
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a
            href="#admission"
            className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.03]"
          >
            ভর্তি আবেদন করুন
          </a>
          <a
            href={`tel:${INSTITUTE.phoneTel}`}
            className="rounded-full border border-forest/30 bg-background px-6 py-3 text-sm font-semibold text-forest hover:bg-background/70"
          >
            Call Now — {INSTITUTE.phone}
          </a>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">{INSTITUTE.email}</p>
      </Reveal>
    </section>
  );
}
