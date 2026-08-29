import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero, TrustBar } from "@/components/site/Hero";
import {
  About,
  CareerPathway,
  CaregivingSection,
  Courses,
  JapaneseSection,
  NursingSection,
  WhyChooseUs,
} from "@/components/site/Sections";
import { Gallery } from "@/components/site/Gallery";
import { Admission, Contact, FinalCta } from "@/components/site/Admission";
import { Footer } from "@/components/site/Footer";

const TITLE =
  "Nightingale Nursing & Midwifery Institute | Nursing, Caregiving & Japanese Language Training";
const DESC =
  "Nightingale Nursing & Midwifery Institute provides nursing, midwifery, caregiving and Japanese language training with Bangladesh and Japan career pathway support.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "Nightingale Nursing & Midwifery Institute",
          description: DESC,
          telephone: "+8801727127356",
          email: "nightingalennmi2020@gmail.com",
          url: "https://www.nightingalennmi.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Adabor, Mohammadpur",
            addressLocality: "Dhaka",
            addressCountry: "BD",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Courses />
        <JapaneseSection />
        <CaregivingSection />
        <NursingSection />
        <CareerPathway />
        <WhyChooseUs />
        <Gallery />
        <Admission />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
