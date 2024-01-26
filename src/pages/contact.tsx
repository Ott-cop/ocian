import SectionContact from "@/components/Contact/SectionContact/SectionContact";
import SectionHero from "@/components/Contact/SectionHero/SectionHero";
import { useEffect } from "react";

export default function Contact() {
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
            <SectionContact></SectionContact>
        </>
    );
}