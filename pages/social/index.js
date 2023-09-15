import Head from "next/head"

export default function Social() {
    return (
        <>
            <Head>
                <title>Social</title>
            </Head>
            <div className='w-full h-screen flex flex-col justify-center items-center'>
                <div class="social-icons">
                    <a href="https://api.whatsapp.com/send?phone=NUMERO_DE_TELEFONO" target="_blank">
                        <img src="https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN" alt="WhatsApp" />
                        <p>Whatsapp</p>
                    </a>
                    <a href="https://www.instagram.com/TU_USUARIO_DE_INSTAGRAM" target="_blank">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" alt="Instagram" />
                        <p>Instagram</p>
                    </a>
                    <a href="mailto:correo@gmail.com">
                        <img src="https://play-lh.googleusercontent.com/KSuaRLiI_FlDP8cM4MzJ23ml3og5Hxb9AapaGTMZ2GgR103mvJ3AAnoOFz1yheeQBBI" alt="Gmail" />
                        <p>Gmail</p>
                    </a>
                </div>
            </div>
        </>
    )
}