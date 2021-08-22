import styles from '../styles/Footer.module.scss'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p className={styles.title}>Arda F. Armutcu</p>

                <ul className={styles.social}>
                    <li><a aria-label="Github" target="_blank" title="Github" href="https://github.com/thejayduck" rel="noreferrer"><i className={"bx bxl-github"} /></a></li>
                    <li><a aria-label="E-Mail" title="E-Mail" href="mailto:ardafevzi.armutcu@gmail.com"><i className={"bx bxs-envelope"} /></a></li>
                </ul>
            </div>
        </footer>
    );
}