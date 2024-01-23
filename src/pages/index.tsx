import SectionContact from "@/components/Home/Contact/SectionContact";
import SectionDifferential from "@/components/Home/Differential/SectionDifferential";
import SectionHero from "@/components/Home/SectionHero/SectionHero";
import SectionServices from "@/components/Home/Services/SectionServices";

export default function Home() {
    return(
        <>
        <SectionHero></SectionHero>
        <SectionServices></SectionServices>
        <SectionDifferential></SectionDifferential>
        <SectionContact></SectionContact>
        </>
        
    )
}