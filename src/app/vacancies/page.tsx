import { Metadata } from "next";
import SecondaryHeader from "../components/SecondaryHeader";
import VacancyCard from "../components/VacancyCard";
import contactData from "@/data/vacancyHeaderData.json";
import vacancyData from "@/data/vacancyData.json";

export const metadata: Metadata = {
  title: "Careers at NQ Studios s.r.o. | Join Our Team",
  description:
    "Explore exciting career opportunities at NQ Studios. Join our team of technology experts and help build innovative digital solutions.",
  keywords:
    "careers, jobs, vacancies, technology jobs, web development careers, NQ Studios careers",
  alternates: {
    canonical: "https://nqstudios.com/vacancies",
  },
};

export default function Vacancies() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "JobPosting",
            hiringOrganization: {
              "@type": "Organization",
              name: "NQ Studios s.r.o.",
              sameAs: "https://nqstudios.com",
            },
            jobLocation: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                addressCountry: "CZ",
              },
            },
            title: "Multiple Positions",
            description:
              "We are hiring talented professionals in web development, design, and digital marketing.",
            datePosted: new Date().toISOString(),
          }),
        }}
      />

      <SecondaryHeader
        title={contactData.title}
        description={contactData.description}
        imageUrl={contactData.image}
      />
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {vacancyData.map((vacancy) => (
            <VacancyCard key={vacancy.id} vacancy={vacancy} />
          ))}
        </div>
      </div>
    </>
  );
}
