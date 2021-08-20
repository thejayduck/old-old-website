import { motion } from 'framer-motion'
import styles from '../styles/MobileNav.module.css'

export default function MobileNav({ onExit }) {
    return (
        <motion.nav
            className={styles.nav}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <ul>
                <li><a onClick={onExit} href="#"><i class='bx bx-x' /></a></li>
                <br />
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Drawings</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </motion.nav>
    )
}