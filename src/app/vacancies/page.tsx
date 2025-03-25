"use client";
import Image from "next/image";
import ContactCard from "../components/ContactCard";
import SectionHeader from "../components/SectionHeader";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import VacancyCard from "../components/VacancyCard";
import vacancies from "@/data/vacancyData.json";
import VacancyDialog from "../components/VacancyDialog";
import SecondaryHeader from "../components/SecondaryHeader";
import ApplyCard from "../components/ApplyCard";

export default function Vacancies() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [selectedVacancy, setSelectedVacancy] = useState<
    (typeof vacancies)[0] | null
  >(null);

  useEffect(() => {
    // Create an observer for the processes section
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If processes section is visible, hide the scroll indicator
        setShowScrollIndicator(!entry.isIntersecting);
      },
      {
        // Start observing when even 1px of the element is visible
        threshold: 0,
        // Use viewport as root
        root: null,
      }
    );

    // Start observing the processes section
    const processesSection = document.getElementById("processes");
    if (processesSection) {
      observer.observe(processesSection);
    }

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

  const openContactDialog = () => {
    const event = new Event("openContact");
    window.dispatchEvent(event);
  };

  const openApplyDialog = () => {
    const event = new Event("openApply");
    window.dispatchEvent(event);
  };

  const handleApply = (id: number) => {
    console.log(`Applying for position ${id}`);
    openApplyDialog();
  };

  return (
    <div className="flex flex-col mt-20">
      {/* Contact box */}
      <ContactCard />

      {/* Apply box */}
      <ApplyCard />

      {/* Hero section with responsive layout */}
      <SecondaryHeader />

      {/* Vacancies section */}
      <section
        className="bg-white py-10 px-6 lg:px-20 flex flex-col"
        id="processes"
      >
        <SectionHeader
          title="Vacant positions"
          description="Did not find what you were looking for?"
          onContactClick={openContactDialog}
          headerTextColor="text-black"
        />

        {/* Grid of vacancy cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {vacancies.map((vacancy) => (
            <VacancyCard
              key={vacancy.id}
              title={vacancy.title}
              description={vacancy.description}
              tags={vacancy.tags}
              location={vacancy.location}
              type={vacancy.type}
              onClick={() => setSelectedVacancy(vacancy)}
            />
          ))}
        </div>
      </section>

      {/* Vacancy Dialog */}
      {selectedVacancy && (
        <VacancyDialog
          isOpen={!!selectedVacancy}
          onClose={() => setSelectedVacancy(null)}
          vacancy={selectedVacancy}
          onApply={() => handleApply(selectedVacancy.id)}
        />
      )}
    </div>
  );
}
