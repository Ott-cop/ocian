import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import "@/styles/Home/styles.module.css";

export default function SectionHero() {
    return (
        <>
        <section className="flex w-full h-[100vh] background-HeroBanner-overlay bg-no-repeat bg-cover">
            <Container>
                <div className="flex w-full h-full justify-end items-center">
                    <div className="flex-1 max-w-[520px] mt-[100px]">
                        <h1 className="text-black text-[45px] font-semibold text-right">APROVADO POR QUEM <span className="text-primary-color font-bold">USA.</span></h1>
                        <p className=" text-black text-[45px] font-semibold text-right mb-8">DESENVOLVIDO POR QUEM <span className="text-primary-color font-bold">ENTENDE.</span></p>
                        <div className="flex justify-end">
                        <Button>SAIBA MAIS</Button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
        </>
    )
}