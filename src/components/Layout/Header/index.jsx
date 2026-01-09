import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";

export default function Header() {

    const links = [
        {
            title: 'Sobre a terapia',
            to: '/#terapia'
        },
        {
            title: 'Serviços',
            to: '/#servicos'
        },
        {
            title: 'Fases da terapia',
            to: '/#fases'
        },
        {
            title: 'Psicólogo',
            to: '/#psicologo'
        },
    ]

    return (
        <header
            className=" flex items-center px-7.5 h-20 bg-background-light"
        >

            <nav className="flex gap-5">

                {links.map((link, index) => (
                    <Link
                        key={index}
                        href={link.to}
                        className=""
                    >{link.title}</Link>
                ))}


            </nav>

            <button
                id="menu"
                className="h-10 w-10 bg-background-dark flex justify-center items-center text-2xl cursor-pointer rounded-md"
            >

                <RxHamburgerMenu />

            </button>

        </header>
    )
}