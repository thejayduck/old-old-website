import styles from '../styles/Skillbar.module.scss'

export default function SkillBar({ title, icon, percentage }) {
    return (
        <div className={styles.skillWrap}>
            <div className={styles.nameWrap}>
                <i className={`${icon} ${styles.icon}`} />
                <span className={styles.title}>{title}</span>
            </div>
            <div style={{ width: `${percentage}%` }} className={styles.bar} />
            <div>
                <span className={styles.percentage}>{percentage}%</span>
            </div>
        </div>
    );
}