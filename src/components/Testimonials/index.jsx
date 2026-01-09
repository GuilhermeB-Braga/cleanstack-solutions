import TestmonialsCard from "../TestimonialsCard"

export default function Testimonials (){

    const testmonials = [
        {
            name: 'Maria Silva',
            company: 'CEO, TechStart',
            text: 'Trabalho excepcional! O site ficou exatamente como imaginamos, com um design moderno e funcional. A comunicação durante o projeto foi impecável.'
        },
        {
            name: 'João Santos',
            company: 'Proprietário, Café & Cia',
            text: 'Superou todas as expectativas! Meu site institucional está lindo e trouxe muitos novos clientes. Recomendo de olhos fechados!'
        },
        {
            name: 'Ana Costa',
            company: 'Diretora de Marketing, Inova Digital',
            text: 'Profissional dedicado e atencioso. Entregou o projeto antes do prazo e com qualidade superior. Já estamos planejando novos projetos juntos'
        },
    ]
    
    return(
        <ul className="grid md:grid-cols-3 gap-5">

            { testmonials.map((testmonial, index) => (
                <TestmonialsCard
                    key={index}
                    text={testmonial.text}
                    name={testmonial.name}
                    company={testmonial.company}
                />
            )) }
            
        </ul>
    )
}