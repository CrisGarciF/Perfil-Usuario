import Image from 'next/image';
import styles from './Header.module.css'
import UserImg from '../../../public/user-profile.jpg'

const Header = () => (
    <header className={styles.header}>
        <Image src={UserImg} alt='Usuario' className={styles.userImg} />
        <h1 className={styles.name}>Thomas Mesa</h1>
    </header>
);

export default Header;