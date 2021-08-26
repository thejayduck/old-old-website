import styles from '@styles/Project.module.scss'

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Project({ data }) {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <motion.div title={showDetails ? `${data.title} - Shrink Details` : `${data.title} - Expand Details`} onClick={() => setShowDetails(prev => !prev)} className={styles.projectWrap}>
            <div className={styles.social} >
                <ul>
                    {
                        data.links.map(q =>
                            <li key={q.title}>
                                <a
                                    aria-label={q.title}
                                    title={q.title}
                                    href={q.url}
                                    className={q.icon}
                                    target="_blank"
                                    rel="noreferrer"
                                />
                            </li>)
                    }
                </ul>
            </div>

            <div className={styles.imageWrap}>
                <img
                    className={styles.image}
                    alt={`${data.title} Cover`}
                    height={256}
                    width={500}
                    src={data.image}

                />
            </div>
            <motion.div
                className={styles.showDetails}

                initial={{ rotate: 0 }}
                animate={{ rotate: showDetails ? 180 : 0 }}
            >
                <i className='bx bxs-down-arrow' />
            </motion.div>
            <div className={styles.details}>
                <h2>{data.title ?? "No Title"}</h2>
                <AnimatePresence>
                    {showDetails &&
                        <motion.div
                            layout
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "max-content", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ type: "spring", duration: 0.4 }}
                        >
                            <p>
                                {data.description}
                            </p>
                        </motion.div>
                    }
                </AnimatePresence>
            </div>
        </motion.div>
    );
}