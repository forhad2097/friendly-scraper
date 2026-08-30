import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero, TrustBar } from "@/components/site/Hero";
import {
  About,
  CareerOpportunities,
  Courses,
  Facilities,
  FacultyManagement,
  WhyChooseUs,
} from "@/components/site/Sections";
import { Gallery } from "@/components/site/Gallery";
import { Admission, Contact, FinalCta } from "@/components/site/Admission";
import { Footer } from "@/components/site/Footer";
import { INSTITUTE } from "@/lib/site-data";

const TITLE =
  "Nightingale Nursing and Midwifery Institute (NNMI) | BNMC Approved Diploma in Nursing & Midwifery, Dhaka";
const DESC =
  "NNMI Dhaka offers BNMC-approved Diploma in Nursing Science & Midwifery and Diploma in Midwifery, with hospital clinical training, hostel facility and career guidance. Enter to Learn, Leave to Serve.";

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
          name: INSTITUTE.name,
          description: DESC,
          telephone: INSTITUTE.phoneTel,
          email: INSTITUTE.email,
          url: "https://www.nightingalennmi.com",
          sameAs: [INSTITUTE.facebook],
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
        <Facilities />
        <FacultyManagement />
        <CareerOpportunities />
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
