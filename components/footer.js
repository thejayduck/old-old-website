import styles from '../styles/Footer.module.scss'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <ul className={styles.social}>
                    <li><a title="Twitter" href="#"><i className={"fab fa-fw fa-twitter"} /></a></li>
                    <li><a title="E-Mail" href="#"><i className={"fas fa-fw fa-envelope"} /></a></li>
                    <li><a title="Itch.io" href="#"><i className={"fab fa-fw fa-itch-io"} /></a></li>
                </ul>
                {/* <ul className={styles.navigation}>
                    <li><a href="#">Scroll Up</a></li>
                </ul> */}
            </div>
        </footer>
    );
}