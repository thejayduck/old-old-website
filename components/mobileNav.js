import { motion } from 'framer-motion'
import styles from '@styles/MobileNav.module.scss'

import { scrollToAnchor } from '../pages/_app'

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
                <li>
                    <a aria-label="Home" onClick={() => {
                        scrollToAnchor("#home")
                        onExit()
                    }}>
                        Home
                    </a>
                </li>
                <li>
                    <a aria-label="About" onClick={() => {
                        scrollToAnchor("#about")
                        onExit()
                    }}>
                        About
                    </a>
                </li>
                <li>
                    <a aria-label="Skills" onClick={() => {
                        scrollToAnchor("#skills")
                        onExit()
                    }}>
                        Skills
                    </a>
                </li>
                <li>
                    <a aria-label="Works" onClick={() => {
                        scrollToAnchor("#works")
                        onExit()
                    }}>
                        Works
                    </a>
                </li>
                {/* <li><a aria-label="Contact" onClick={onExit} href="#">Contact</a></li> */}
            </ul>
        </motion.nav>
    )
}