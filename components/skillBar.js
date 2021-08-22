import styles from '../styles/Skillbar.module.scss'
import { motion } from "framer-motion"

export default function SkillBar({ data }) {
    return (
        <motion.div
            className={styles.skillWrap}

            title={`${data.title} - ${data.percentage}%`}

            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.5 } }}
        >
            <div className={styles.nameWrap}>
                <i
                    className={`${data.icon} ${styles.icon}`}
                />
                <span className={styles.title}>{data.title}</span>
            </div>
            <motion.div
                className={styles.bar}

                initial={{ width: 0 }}
                animate={{ width: `${data.percentage}%` }}
                transition=
                {{
                    type: "spring",
                    duration: 1,
                    delay: 0.5
                }}
            />
            <div>
                <span className={styles.percentage}>{data.percentage}%</span>
            </div>
        </motion.div>
    );
}