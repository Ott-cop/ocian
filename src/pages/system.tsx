

import SectionAllSystems from "@/components/System/SectionAllSystems/SectionAllSystems";
import SectionHero from "@/components/System/SectionHero/SectionHero";
import SectionSystem from "@/components/System/SectionSystem/SectionSystem";
import { useEffect } from "react";

export default function System() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry);
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        });
        const hiddenableElements = document.querySelectorAll('.hiddenable');
        hiddenableElements.forEach((el) => observer.observe(el));
    }, []);
    return (
        <>
            <SectionHero></SectionHero>
            <SectionSystem></SectionSystem>
            <SectionAllSystems></SectionAllSystems>
        </>
    );
}