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
                <li><a onClick={onExit} href="#"><i className={"bx bx-x"} /></a></li>
                <br />
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#work">Work</a></li>
                <li><a href="#">Drawings</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </motion.nav>
    )
}