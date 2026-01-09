'use server'

import { Resend } from "resend"
import ContactEmail from "../EmailTemplate"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(prevState, formData) {
    const name = formData.get('name')
    const email = formData.get('email')
    const subject = formData.get('subject')
    const message = formData.get('message')

    if (!name || !email || !message || !message) {
        return { error: 'Por favor preencha todos os campos' }
    }

    try {

        await resend.emails.send({
            from: 'CleanStack Solutions <onboarding@resend.dev>',
            to: ['bbraga.guilherme@gmail.com'],
            subject: subject,
            replyTo: email,
            react: ContactEmail({name, message, email})
        })

        return { success: true }

    } catch (error) {
        return { error: "Falha ao enviar o e-mail. Tente novamente." }
    }

}