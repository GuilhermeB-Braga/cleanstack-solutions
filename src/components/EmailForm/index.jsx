import { GoPaperAirplane } from "react-icons/go";

import Input from "../Input";
import Button from "../Layout/Button/Button";

export default function EmailForm() {
    return (
        <form
            className="flex flex-col gap-5"
        >

            <Input
                type='text'
                label='Nome'
                placeholder='Seu nome completo'
            />

            <Input
                type='email'
                label='Email'
                placeholder='seu@email.com'
            />

            <Input
                type='Assunto'
                label='Sobre o que você quer falar?'
                placeholder='Seu nome completo'
            />

            <Input
                type='textarea'
                label='Mensagem'
                placeholder='Conte-me sobre sua ideia. Descreva seu projeto.'
            />

            <Button
                name="Enviar"
                radius={12}
                icon={<GoPaperAirplane/>}
            />

        </form>
    )
}