import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import classroom from "@/assets/classroom.jpg.asset.json";
import training1 from "@/assets/training-photo-1.jpg.asset.json";
import training2 from "@/assets/training-photo-2.jpg.asset.json";
import groupPhoto from "@/assets/image.png.asset.json";
import adJapanCaregiver from "@/assets/ad-japan-caregiver.png.asset.json";
import adCourses from "@/assets/ad-institute-courses.png.asset.json";
import adJapanLanguage from "@/assets/ad-japan-language.png.asset.json";
import adCaregiverJob from "@/assets/ad-caregiver-job.png.asset.json";
import adCourseDetails from "@/assets/ad-course-details.png.asset.json";
import caregivingTraining from "@/assets/caregiving-training.jpg";
import japaneseClass from "@/assets/japanese-class.jpg";

const IMAGES = [
  { src: groupPhoto.url, alt: "ইনস্টিটিউটের শিক্ষার্থী ও শিক্ষকদের দলগত ছবি", tall: true },
  { src: caregivingTraining, alt: "কেয়ারগিভিং প্রশিক্ষণ চলাকালীন শিক্ষার্থীরা" },
  { src: training1.url, alt: "ইউনিফর্ম পরা নার্সিং শিক্ষার্থী লাইব্রেরিতে" },
  { src: japaneseClass, alt: "জাপানি ভাষা শিক্ষার ক্লাস" },
  { src: classroom.url, alt: "শ্রেণিকক্ষে নার্সিং শিক্ষার্থীদের দলগত পাঠ" },
  { src: training2.url, alt: "নার্সিং শিক্ষার্থী পড়াশোনায় মগ্ন", tall: true },
  { src: adJapanCaregiver.url, alt: "জাপান কেয়ারগিভিং প্রশিক্ষণ সম্পর্কিত পোস্টার", tall: true },
  { src: adCourses.url, alt: "ইনস্টিটিউটের কোর্স সমূহের পোস্টার" },
  { src: adJapanLanguage.url, alt: "জাপানি ভাষা ও কেয়ারগিভিং কোর্সের পোস্টার" },
  { src: adCaregiverJob.url, alt: "জাপানে কেয়ারগিভার প্রশিক্ষণ বিজ্ঞাপন" },
  { src: adCourseDetails.url, alt: "কেয়ারগিভার ও জাপানি ভাষা কোর্সের বিস্তারিত পোস্টার", tall: true },
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
        title="আমাদের প্রশিক্ষণ ও কার্যক্রম"
        subtitle="Training sessions, classrooms, trainees and campaign materials."
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
                  img.tall ? "aspect-[3/4]" : "aspect-[4/3]"
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
