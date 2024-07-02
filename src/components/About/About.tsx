import styles from './About.module.css'

const About = () => {
    return (
        <section className={styles.about} >
            <h2>Sobre mi</h2>
            <div className={styles.card}>
            <p>Siempre estoy buscando nueva información y disfruto profundizar en los detalles de cada asunto que aborda la vida. Además, soy curioso y abierto a nuevos conocimientos y perspectivas.</p>
            </div>
        </section>
    )
};

export default About;
