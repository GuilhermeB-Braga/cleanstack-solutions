import {
    Html,
    Body,
    Head,
    Container,
    Text,
    Section,
    Tailwind,
    Heading,
} from "@react-email/components";
import Logo from "../Logo";

export default function ContactEmail({ name, message, email }) {
    return (
        <Html>
            <Head />
            <Tailwind
                config={{
                    theme: {
                        extend: {
                            colors: {
                                // Substitua pelos códigos hexadecimais do seu projeto
                                background: "hsl(240, 28%, 10%)",
                                primary: "hsl(180, 79%, 44%)",
                                "text-muted": "hsl(0, 0%, 70%)",
                                "background-light": "hsl(240, 28%, 15%)",
                            },
                            borderRadius: {
                                custom: "20px",
                            },
                        },
                    },
                }}
            >
                <Body className="bg-background px-7.5 py-10 my-auto mx-auto text-white">


                    <div className="max-w-2xl mx-auto">
                        <Logo />
                        
                        <h1 className="mt-7.5 text-2xl font-bold text-primary">Olá!</h1>
                        <p className="mt-4 text-text-muted">Você recebeu uma nova mensagem:</p>

                        <div className="p-4 rounded-custom mt-4 bg-background-light">
                            "{message}"
                        </div>

                        <hr className="my-6 border-text-muted" />

                        <p className="text-sm text-text-muted">
                            Enviado por: <b>{name}</b> ({email})
                        </p>
                    </div>



                </Body>
            </Tailwind>
        </Html>
    );
};