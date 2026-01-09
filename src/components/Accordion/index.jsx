
import AccordionQuestion from "../AccordionQuestion";

export default function Accordion() {

    const questions = [
        {
            question: 'Quanto tempo demora pra desenvolver um site?',
            answer: 'O prazo varia de acordo com a complexidade do projeto. Um site institucional simples pode ficar pronto em 2-3 semanas, enquanto projetos mais complexos como e-commerce ou aplicações web podem levar de 1 a 3 meses. Sempre forneço um cronograma detalhado antes de iniciar.'
        },
        {
            question: 'Qual o investimento necessário?',
            answer: 'Cada projeto é único e o valor depende de diversos fatores como funcionalidades, design personalizado e integrações necessárias. Após entender suas necessidades, preparo um orçamento detalhado sem compromisso. Entre em contato para conversarmos sobre seu projeto!'
        },
        {
            question: 'O site será responsivo e funcionará em celulares?',
            answer: 'Sim! Todos os sites que desenvolvo são 100% responsivos e otimizados para funcionar perfeitamente em todos os dispositivos - smartphones, tablets e desktops. A experiência mobile é uma prioridade em todos os meus projetos.'
        },
        {
            question: 'Vou conseguir atualizar o site sozinho?',
            answer: 'Absolutamente! Desenvolvo sites com sistemas de gerenciamento de conteúdo (CMS) intuitivos, onde você pode facilmente atualizar textos, imagens e outras informações. Também ofereço treinamento completo para você e sua equipe.'
        },
        {
            question: 'O site terá otimização para motores de busca (SEO)?',
            answer: 'Sim! Todos os sites são desenvolvidos seguindo as melhores práticas de SEO, incluindo estrutura de código otimizada, velocidade de carregamento, meta tags apropriadas e compatibilidade mobile. Isso ajuda seu site a ser encontrado mais facilmente no Google.'
        },
        {
            question: 'Vou conseguir atualizar o site sozinho?',
            answer: 'Absolutamente! Desenvolvo sites com sistemas de gerenciamento de conteúdo (CMS) intuitivos, onde você pode facilmente atualizar textos, imagens e outras informações. Também ofereço treinamento completo para você e sua equipe.'
        },
        {
            question: 'Oferece suporte após a entrega do site?',
            answer: 'Sim! Ofereço suporte técnico e manutenção após a entrega. Isso inclui correção de bugs, atualizações de segurança e pequenos ajustes. Também disponibilizo planos de manutenção mensal para quem precisa de suporte contínuo.'
        },
        {
            question: 'Quais tecnologias você utiliza?',
            answer: 'Trabalho com as tecnologias mais modernas e confiáveis do mercado, incluindo React, TypeScript, Next.js, Tailwind CSS, Node.js, e outras. A escolha da stack tecnológica é sempre feita considerando as necessidades específicas de cada projeto.'
        },
        {
            question: 'Preciso fornecer conteúdo e imagens?',
            answer: 'Idealmente sim, pois você conhece melhor seu negócio. Porém, se necessário, posso auxiliar na criação de conteúdo, copywriting e seleção de imagens profissionais. Também trabalho em parceria com redatores e fotógrafos quando necessário.'
        }
    ]

    return (
        <div className="flex flex-col gap-5">

            {questions.map((question, index) => (

                <AccordionQuestion
                    key={index}
                    question={question.question}
                    answer={question.answer}
                />

            ))}


        </div>
    )
}