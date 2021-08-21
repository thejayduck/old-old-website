import styles from '../styles/Skillbar.module.scss'
import { motion } from "framer-motion"

export default function SkillBar({ title, icon, percentage }) {
    return (
        <motion.div
            className={styles.skillWrap}

            title={`${title} - ${percentage}%`}

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <div className={styles.nameWrap}>
                <i className={`${icon} ${styles.icon}`} />
                <span className={styles.title}>{title}</span>
            </div>
            <motion.div
                className={styles.bar}

                initial={{
                    width: 0,
                }}
                animate={{
                    width: `${percentage}%`
                }}
                transition={{ type: "spring", duration: 1 }}
            />
            <div>
                <span className={styles.percentage}>{percentage}%</span>
            </div>
        </motion.div>
    );
}