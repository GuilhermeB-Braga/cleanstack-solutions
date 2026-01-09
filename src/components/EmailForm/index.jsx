'use client'
import { sendEmail } from "./actions";
import { GoPaperAirplane } from "react-icons/go";

import Input from "../Input";
import Button from "../Layout/Button/Button";
import { useActionState } from "react";

export default function EmailForm() {

    const [state, formAction] = useActionState(sendEmail, null)

    return (
        <form
            action={formAction}
            className="flex flex-col gap-5"
        >

            {state?.success && <p className="text-green-500">E-mail enviado com sucesso!</p>}
            {state?.error && <p className="text-red-500">{state.error}</p>}

            <Input
                type='text'
                label='Nome'
                name='name'
                placeholder='Seu nome completo'
            />

            <Input
                type='email'
                label='Email'
                name='email'
                placeholder='seu@email.com'
            />

            <Input
                type='text'
                name='subject'
                label='Assunto'
                placeholder='Sobre o que você quer falar?'
            />

            <Input
                type='textarea'
                label='Mensagem'
                name='message'
                placeholder='Conte-me sobre sua ideia. Descreva seu projeto.'
            />

            <Button
                name="Enviar"
                radius={12}
                icon={<GoPaperAirplane />}
            />

        </form>
    )
}