import { BsDisplay } from "react-icons/bs";
import { CiMobile1 } from "react-icons/ci";
import { GoZap } from "react-icons/go";
import { MdOutlinePalette } from "react-icons/md";
import { IoIosCode } from "react-icons/io";
import { LuRocket } from "react-icons/lu";

import SolutionsCard from "../SolutionsCard";


export default function Solutions() {

    const solutions = [
        {
            title: 'Sites Institucionais',
            description: 'Sites profissionais e elegantes que representam perfeitamente sua marca e transmitem credibilidade.',
            icon: <BsDisplay />
        },
        {
            title: 'Design Responsivo',
            description: 'Experiências perfeitas em todos os dispositivos - desktop, tablet e smartphone.',
            icon: <CiMobile1 />
        },
        {
            title: 'Alta Performance',
            description: 'Sites otimizados para velocidade e performance, garantindo a melhor experiência do usuário.',
            icon: <GoZap />
        },
        {
            title: 'UI/UX',
            description: 'Interfaces bonitas e intuitivas que encantam usuários e aumentam conversões.',
            icon: <MdOutlinePalette />
        },
        {
            title: 'Design Custom',
            description: 'Soluções personalizadas desenvolvidas com as tecnologias mais modernas do mercado.',
            icon: <IoIosCode />
        },
        {
            title: 'SEO Otimizado',
            description: 'Sites otimizados para mecanismos de busca, aumentando sua visibilidade online.',
            icon: <LuRocket />
        },
    ]

    return (
        <ul className="grid md:grid-cols-3 gap-5">

            {solutions.map((solution, index) => (
                <SolutionsCard
                    key={index}
                    title={solution.title}
                    desc={solution.description}
                    icon={solution.icon}
                />
            ))}

        </ul>
    )
}