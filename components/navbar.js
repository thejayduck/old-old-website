import styles from '../styles/Navigation.module.scss'

import { scrollToAnchor } from '../pages/_app'
import { AnimateSharedLayout, motion } from 'framer-motion';
import { useState } from 'react';

const navigationItems = [
    {
        label: "Home",
        anchor: "home"
    },
    {
        label: "About",
        anchor: "about"
    },
    {
        label: "Skills",
        anchor: "skills"
    },
    {
        label: "Works",
        anchor: "works"
    }
]

export default function Navigation({ onBurgerMenuClick }) {
    const [selected, setSelected] = useState("");

    return (
        <nav id="navbar" className={styles.nav}>
            <div className={styles.container}>
                <h1>Arda Fevzi Armutcu</h1>
                <AnimateSharedLayout>
                    <ul className={styles.linkWrap}>
                        {
                            navigationItems.map(q =>
                                <NavigationItem
                                    key={q.anchor}
                                    label={q.label}
                                    anchor={q.anchor}
                                    onClick={() => setSelected(q.anchor)}
                                    isSelected={selected === q.anchor}
                                />
                            )
                        }
                    </ul>
                </AnimateSharedLayout>
                <a onClick={onBurgerMenuClick} className={styles.burgerNav}><i className={"bx bx-menu"} /></a>
            </div>
        </nav>
    );
}

function NavigationItem({ label, anchor, isSelected, onClick }) {

    return (
        <li className={styles.item} onClick={onClick}>
            {isSelected && (
                <motion.div
                    className={styles.underline}

                    layoutId="underline"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
            )}
            <a aria-label={label} onClick={() => {
                scrollToAnchor(`#${anchor}`)
            }}>
                {label}
            </a>
        </li>
    );
}