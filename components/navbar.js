import styles from '../styles/Navigation.module.scss'

export default function Navigation({ onBurgerMenuClick }) {

    return (
        <nav className={styles.nav}>
            <div className={styles.container}>
                <div className={styles.titleWrap}>
                    {/* <img src="https://i.ibb.co/HHmj7BT/icon-circle-64.png" /> */}
                    <h1>Arda Fevzi Armutcu</h1>
                </div>
                <ul className={styles.linkWrap}>
                    <li><a id="index" href="#">Home</a></li>
                    <li><a id="about" href="#">About</a></li>
                    <li><a id="projects" href="#">Projects</a></li>
                    <li><a id="drawings" href="#">Drawings</a></li>
                    <li><a id="contact" href="#">Contact</a></li>
                </ul>
                <a onClick={onBurgerMenuClick} className={styles.mobileNav} href="#"><i class='bx bx-menu' /></a>
            </div>
        </nav>
    );
}