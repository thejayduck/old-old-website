import styles from '../styles/Footer.module.scss'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <ul className={styles.social}>
                    <li><a title="Twitter" href="#"><i type='logo' name='twitter' /></a></li>
                    <li><a title="E-Mail" href="#"><i name='envelope' type='solid' /></a></li>
                </ul>
                {/* <ul className={styles.navigation}>
                    <li><a href="#">Scroll Up</a></li>
                </ul> */}
            </div>
        </footer>
    );
}