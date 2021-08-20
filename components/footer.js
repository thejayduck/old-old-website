import styles from '../styles/Footer.module.scss'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p className={styles.title}>Arda F. Armutcu</p>
                <ul className={styles.social}>
                    <li><a title="Twitter" href="#"><i class='bx bxl-twitter' /></a></li>
                    <li><a title="E-Mail" href="#"><i class='bx bxs-envelope' /></a></li>
                </ul>
            </div>
        </footer>
    );
}