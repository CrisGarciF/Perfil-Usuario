import About from "@/components/About/About"
import ContactForm from "@/components/ContactForm/ContactForm"
import Header from "@/components/Header/Header"
import Interests from "@/components/Interests/Interests"
import Head from "next/head"
import './globals.css'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Perfil de Usuario</title>
                <meta name="description" content="Perfil de Usuario" />
                <link rel="icon" href="" />
            </Head>

            <Header />
            <section className='section'>
                <About />
                <Interests />
            </section>
            <ContactForm />
        </div>
    )
}