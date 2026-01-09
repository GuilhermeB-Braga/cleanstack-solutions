import Button from "@/components/Layout/Button/Button";
import Metrics from "@/components/Metrics";
import { FaAngleRight, FaWhatsapp } from "react-icons/fa";
import Logo from "../Logo";

export default function HeroSection() {
    return (
        <section className="flex flex-col p-10 items-center justify-between w-full min-h-screen bg-background-dark">

            <Logo />

            <div className="text-center mt-7.5 mb-15">

                <h1 className="text-[26px] md:text-[40px] font-extrabold">
                    Transformando ideias em<br />
                    <span
                        className="bg-linear-to-r from-primary-hover to-primary bg-clip-text text-transparent"
                    > Experiências Digitais</span>

                </h1>

                <p className="mt-5 md:text-[18px] font-medium text-text-muted">Empresa de <span className="text-primary">desenvolvimento web</span> especializada em criar sites modernos, responsivos e de <span className="text-primary">alta performance</span> que impulsionam seu negócio.</p>

            </div>


            <div className="flex flex-col md:flex-row gap-5 mb-15">

                <Button
                    name='Ver meu trabalho'
                    icon={<FaAngleRight />}
                    bordered
                />

                <Button
                    name='Fale comigo'
                    icon={<FaWhatsapp />}
                    reverse
                />

            </div>

            <Metrics />

        </section>
    )
}