import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import "@/styles/Home/styles.module.css";

export default function SectionHero() {
    return (
        <>
        <section className="flex w-full h-[100vh] background-HeroAboutUsBanner-overlay !bg-no-repeat !bg-cover !bg-center">
            <Container>
                <div className="title-hero flex w-full h-full justify-end items-center hiddenable">
                    <div className="flex-1 max-w-[520px] mt-[100px]">
                        <h1 className="text-black text-[50px] font-semibold text-right">SUPORTE</h1>
                    </div>
                </div>
            </Container>
        </section>
        </>
    )
}