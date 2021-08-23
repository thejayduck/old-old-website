import styles from '../styles/PageContainer.module.scss'

import Footer from './footer';
import Navigation from './navbar';
import MobileNav from './mobileNav';
import { scrollToAnchor } from '../pages/_app'

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function PageContainer({ children }) {
    const [mobileNav, setMobileNav] = useState(false);
    const [lastYPos, setYPos] = useState(0);
    const [showScroll, setShowScroll] = useState(0);

    useEffect(() => {
        function handleYScroll() {
            const yPos = window.scrollY;
            const isScrolling = yPos < lastYPos;

            setShowScroll(isScrolling);
            setYPos(yPos);
        }

        window.addEventListener('scroll', handleYScroll, false);

        return () => {
            window.removeEventListener('scroll', handleYScroll, false);
        };

    }, [lastYPos])

    return (
        <>
            <Navigation onBurgerMenuClick={() => setMobileNav(prev => !prev)} />
            <main className={styles.container}>
                {children}
            </main>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: showScroll ? 0 : 1 }}
                transition={{ opacity: { duration: 0.2 } }}

                className={styles.scrollUp}
                title={"Scroll Up"}
            >
                <a aria-label="Scroll Up" onClick={() => scrollToAnchor("#home")}>
                    <i className={"bx bxs-up-arrow"} />
                </a>
            </motion.div>
            <Footer />
            <AnimatePresence>
                {mobileNav &&
                    <MobileNav onExit={() => setMobileNav(false)} />
                }
            </AnimatePresence>
        </>
    );
}