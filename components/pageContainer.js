import styles from '../styles/PageContainer.module.css'
import Footer from './footer';
import Navigation from './navbar';
import MobileNav from './mobileNav';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useTransform, useViewportScroll } from 'framer-motion';

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
            <main className={styles.Container}>
                {children}
                <motion.div
                    animate={{ opacity: showScroll ? 0 : 1 }}
                    className={styles.scrollUp}
                >
                    <a href="#">
                        <i className={"fas fa-fw fa-angle-up"} />
                    </a>
                </motion.div>
            </main>
            <Footer />

            <AnimatePresence>
                {mobileNav &&
                    <MobileNav onExit={() => setMobileNav(false)} />
                }
            </AnimatePresence>

        </>
    );
}