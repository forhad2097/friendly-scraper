import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import classroom from "@/assets/classroom.jpg.asset.json";
import training1 from "@/assets/training-photo-1.jpg.asset.json";
import training2 from "@/assets/training-photo-2.jpg.asset.json";
import groupPhoto from "@/assets/image.png.asset.json";
import caregivingTraining from "@/assets/caregiving-training.jpg";
import careerPoster from "@/assets/poster-career-opportunities.png.asset.json";
import internationalPoster from "@/assets/poster-international-career.png.asset.json";
import coursesPoster from "@/assets/poster-courses-programs.png.asset.json";
import whyChoosePoster from "@/assets/poster-why-choose-us.png.asset.json";
import admissionProcessPoster from "@/assets/poster-admission-process.png.asset.json";
import admissionOpenPoster from "@/assets/poster-admission-open.png.asset.json";

const IMAGES = [
  { src: groupPhoto.url, alt: "ইনস্টিটিউটের শিক্ষার্থী ও শিক্ষকদের দলগত ছবি", tall: true },
  {
    src: caregivingTraining,
    alt: "শিক্ষার্থীরা রোগীর সেবা ও বেডসাইড কেয়ারের হাতে-কলমে প্রশিক্ষণ নিচ্ছেন",
  },
  { src: training1.url, alt: "ইউনিফর্ম পরা নার্সিং শিক্ষার্থী লাইব্রেরিতে" },
  { src: classroom.url, alt: "শ্রেণিকক্ষে নার্সিং শিক্ষার্থীদের দলগত পাঠ" },
  { src: training2.url, alt: "নার্সিং শিক্ষার্থী পড়াশোনায় মগ্ন", tall: true },
  { src: careerPoster.url, alt: "বাংলাদেশে নার্সিং ও কেয়ারগিভিং ক্যারিয়ারের সুযোগ নিয়ে তথ্যবহুল পোস্টার", poster: true },
  { src: internationalPoster.url, alt: "দেশ থেকে আন্তর্জাতিক স্বাস্থ্যসেবা ক্যারিয়ারের পথ নিয়ে তথ্যবহুল পোস্টার", poster: true },
  { src: coursesPoster.url, alt: "নার্সিং ও মিডওয়াইফারি কোর্সের তথ্যবহুল পোস্টার", poster: true },
  { src: whyChoosePoster.url, alt: "নাইটিঙ্গেল ইনস্টিটিউট বেছে নেওয়ার কারণসমূহের পোস্টার", poster: true },
  { src: admissionProcessPoster.url, alt: "চার ধাপে ভর্তি প্রক্রিয়ার তথ্যবহুল পোস্টার", poster: true },
  { src: admissionOpenPoster.url, alt: "সীমিত আসনে ভর্তি চলছে—নাইটিঙ্গেল ইনস্টিটিউটের পোস্টার", poster: true },
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const current = active === null ? null : IMAGES[active];

  return (
    <section id="gallery" className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
      <SectionHeading
        eyebrow="Gallery"
        title="ক্যাম্পাস, প্রশিক্ষণ ও তথ্যচিত্র"
        subtitle="বাস্তব প্রশিক্ষণ কার্যক্রমের ছবি এবং আমাদের নিজস্ব তথ্যবহুল পোস্টার।"
      />
      <div className="mt-12 columns-2 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {IMAGES.map((img, i) => (
          <Reveal key={img.src} delay={(i % 3) * 70} className="break-inside-avoid">
            <button
              type="button"
              onClick={() => setActive(i)}
              className="group block w-full overflow-hidden rounded-2xl shadow-soft focus:ring-2 focus:ring-ring focus:outline-none"
              aria-label={`ছবি বড় করে দেখুন: ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                  img.poster ? "aspect-square" : img.tall ? "aspect-[3/4]" : "aspect-[4/3]"
                }`}
              />
            </button>
          </Reveal>
        ))}
      </div>

      {current ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image"
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[60] flex items-center animate-in fade-in duration-200 justify-center bg-foreground/85 p-4"
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            aria-label="Close"
            className="absolute top-4 right-4 grid h-11 w-11 place-items-center rounded-full bg-background text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={current.src}
            alt={current.alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] w-auto max-w-full animate-in zoom-in-95 duration-200 rounded-xl object-contain"
          />
        </div>
      ) : null}
    </section>
  );
}
