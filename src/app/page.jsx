import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import Solutions from "@/components/Solutions";
import Testimonials from "@/components/Testimonials";
import TitleSection from "@/components/TitleSection";

export default function Home() {

  return (
    <main className="flex flex-col gap-15">

      <HeroSection />

      <section className="min-h-[45vh] px-7.5">

        <TitleSection
          title='Serviços'
          subtitle='Soluçoes completas para sua prensença digital'
        />

       <Solutions/>

      </section>

      <section className="min-h-[45vh] px-7.5">

        <TitleSection
          title='O que dizem nossos clientes'
          subtitle='Depoimentos reais de clientes satisfeitos'
        />

        <Testimonials/>

      </section>

      <ContactSection/>

    </main>
  );
}
