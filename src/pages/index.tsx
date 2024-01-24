import SectionContact from "@/components/Home/Contact/SectionContact";
import SectionDifferential from "@/components/Home/Differential/SectionDifferential";
import SectionHero from "@/components/Home/SectionHero/SectionHero";
import SectionServices from "@/components/Home/Services/SectionServices";
import { useEffect } from "react";

export default function Home() {
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
        <SectionServices></SectionServices>
        <SectionDifferential></SectionDifferential>
        <SectionContact></SectionContact>
        </>
        
    )
}