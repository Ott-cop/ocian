import SectionHero from "@/components/Support/SectionHero/SectionHero";
import SectionSupport from "@/components/Support/SectionSupport/SectionSupport";
import { useEffect } from "react";

export default function Support() {
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
    return(
        <>
        <SectionHero></SectionHero>
        <SectionSupport></SectionSupport>
        </>
    );
}