import { motion } from 'framer-motion'
import styles from '../styles/MobileNav.module.css'

export default function MobileNav({ onExit }) {
    return (
        <motion.nav
            className={styles.navigation}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <ul>
                <li><div aria-label="Exit" onClick={onExit}><i className={"bx bx-x"} /></div></li>
                <li><a aria-label="Home" onClick={onExit} href="#home">Home</a></li>
                <li><a aria-label="About" onClick={onExit} href="#about">About</a></li>
                <li><a aria-label="Skills" onClick={onExit} href="#skills">Skills</a></li>
                <li><a aria-label="Works" onClick={onExit} href="#works">Works</a></li>
                {/* <li><a aria-label="Contact" onClick={onExit} href="#">Contact</a></li> */}
            </ul>
        </motion.nav>
    )
}