import styles from '../styles/Navigation.module.scss'

import { scrollToAnchor } from '../pages/_app'

export default function Navigation({ onBurgerMenuClick }) {

    return (
        <nav id="navbar" className={styles.nav}>
            <div className={styles.container}>
                <h1>Arda Fevzi Armutcu</h1>
                <ul className={styles.linkWrap}>
                    <li><a aria-label="Home" onClick={() => scrollToAnchor("#home")}>Home</a></li>
                    <li><a aria-label="About" onClick={() => scrollToAnchor("#about")}>About</a></li>
                    <li><a aria-label="Skills" onClick={() => scrollToAnchor("#skills")}>Skills</a></li>
                    <li><a aria-label="Works" onClick={() => scrollToAnchor("#works")}>Works</a></li>
                    {/* <li><a aria-label="Contact" href="#">Contact</a></li> */}
                </ul>
                <div onClick={onBurgerMenuClick} className={styles.mobileNav}><i className={"bx bx-menu"} /></div>
            </div>
        </nav>
    );
}