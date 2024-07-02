import styles from './Interests.module.css'

const Interests = () => {
    return (
        <section className={styles.interests}>
            <h2>Intereses</h2>
            <div className={styles.card}>
                <ul>
                    <li>Viajar</li>
                    <li>Trabajar</li>
                    <li>Aprender</li>
                </ul>
            </div>
        </section>
    )
};

export default Interests;
