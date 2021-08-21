import styles from '../styles/Project.module.scss'
import Image from 'next/image'
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Project({ title, description }) {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <motion.div onClick={() => setShowDetails(prev => !prev)} className={styles.projectWrap}>
            <Image
                alt={`${title} Cover`}
                className={styles.image}
                height={256}
                width={500}
                objectFit="cover"
                src={"/work5.jpg"}

            />
            <motion.div
                className={styles.showDetails}

                initial={{ rotate: 0 }}
                animate={{ rotate: showDetails ? 180 : 0 }}
            >
                <i className='bx bxs-down-arrow' />
            </motion.div>
            <div className={styles.details}>
                <h2>{title ?? "No Title"}</h2>
                <AnimatePresence>
                    {showDetails &&
                        <motion.div
                            layout
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "max-content", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                        >
                            <p>
                                {description}
                            </p>
                            <div className={styles.social} >
                                <span>Find It On:</span>
                                <ul>
                                    <li><a aria-label="Github" title="Github" href="#"><i className='bx bxl-github' /></a></li>
                                    <li><a aria-label="E-Mail" title="E-Mail" href="#"><i className='bx bxs-envelope' /></a></li>
                                </ul>
                            </div>
                        </motion.div>
                    }
                </AnimatePresence>
            </div>
        </motion.div>
    );
}