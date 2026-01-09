import Accordion from "@/components/Accordion";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import Button from "@/components/Layout/Button/Button";
import Solutions from "@/components/Solutions";
import Testimonials from "@/components/Testimonials";
import TitleSection from "@/components/TitleSection";
import { IoCodeSlash } from "react-icons/io5";

export default function Home() {

  return (
    <main className="flex flex-col gap-15">

      <HeroSection />

      <section className="min-h-[45vh] px-7.5">

        <TitleSection
          title='Serviços'
          subtitle='Soluçoes completas para sua prensença digital'
        />

        <Solutions />

      </section>

      <section className="min-h-[45vh] px-7.5">

        <TitleSection
          title='O que dizem nossos clientes'
          subtitle='Depoimentos reais de clientes satisfeitos'
        />

        <Testimonials />

      </section>

      <section className="min-h-[45vh] px-7.5">

        <TitleSection
          title='Perguntas Frequentes'
          subtitle='Tire suas dúvidas sobre o desenvolvimento do seu site'
        />

        <Accordion />

        <div
          className="flex flex-col text-center items-center bg-background-light border border-border-custom rounded-custom p-5 mt-10"
        >

          <div className="mb-5">

            <h4 className="text-[18px] font-medium mb-1">Ainda tem dúvidas</h4>

            <p className="text-text-muted">Estou aqui para ajudar! Entre em contato e terei prazer em responder todas as suas questões.</p>

          </div>

          <Button
            name='Falar com o Desenvolvedor'
            radius={16}
            icon={<IoCodeSlash/>}
          />

        </div>

      </section>

      <ContactSection />

    </main>
  );
}
