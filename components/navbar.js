import styles from '../styles/Navigation.module.scss'

export default function Navigation({ onBurgerMenuClick }) {

    return (
        <nav id="navbar" className={styles.nav}>
            <div className={styles.container}>
                <div className={styles.titleWrap}>
                    <h1>Arda Fevzi Armutcu</h1>
                </div>
                <ul className={styles.linkWrap}>
                    <li><a aria-label="Home" href="#home">Home</a></li>
                    <li><a aria-label="About" href="#about">About</a></li>
                    <li><a aria-label="Skills" href="#skills">Skills</a></li>
                    <li><a aria-label="Works" href="#works">Works</a></li>
                    <li><a aria-label="Drawings" href="#">Drawings</a></li>
                </ul>
                <a onClick={onBurgerMenuClick} className={styles.mobileNav} href="#"><i className={"bx bx-menu"} /></a>
            </div>
        </nav>
    );
}