import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { LuNewspaper } from "react-icons/lu";

export default function ContactInfo() {

    const contacts = [
        {
            type: 'Email',
            contact: 'cleanstack@gmail.com',
            icon: <MdOutlineEmail/>
        },
        {
            type: 'Blog',
            contact: 'https://www.cleanstack.com.br',
            icon: <LuNewspaper/>
        },
        {
            type: 'Telefone',
            contact: '11 3333-0089',
            icon: <BsTelephone/>
        },
        {
            type: 'Localização',
            contact: 'São Paulo, Brasil',
            icon: <MdOutlineEmail/>
        },
    ]

    return (
        <ul className="flex flex-col gap-5">

            {contacts.map((contact, index) => (
                <li key={index} className="flex items-center gap-2.5">

                    <div className="
                    h-10 w-10 bg-background grid place-items-center text-2xl
                    border border-border-custom rounded-md
                    ">
                        {contact.icon}
                    </div>

                    <div>
                        <span
                            className="text-text-muted text-[14px]"
                        >{contact.type}</span>
                        <p>{contact.contact}</p>
                    </div>

                </li>
            ))}

        </ul>
    )
}