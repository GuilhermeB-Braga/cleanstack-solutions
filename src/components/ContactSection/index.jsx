import ContactInfo from "../ContactInfo";
import EmailForm from "../EmailForm";
import TitleSection from "../TitleSection";

export default function ContactSection() {
    return (
        <section className="flex flex-col p-10 items-center w-full bg-background-dark">

            <TitleSection
                title='Vamos Conversar?'
                subtitle='Entre em contato e vamos transformar sua ideia em realidade'
            />

            <div className="grid md:grid-cols-2 h-full w-full">

                <div className="flex flex-col gap-5">

                    <h2 className="text-[18px] font-bold mb-5">Informações de contato</h2>

                    <ContactInfo />

                    <div className="p-5 my-5 rounded-custom bg-linear-233 from-primary to-cyan-600 md:w-[90%]">

                        <h3 className="font-bold text-[18px] mb-1">Pronto para começar seu projeto?</h3>

                        <p>Estou disponível para novos projetos e sempre ansioso para trabalhar em ideias inovadoras.</p>

                    </div>


                </div>

                <EmailForm />

            </div>

        </section>
    )
}