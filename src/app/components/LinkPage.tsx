import styles from "./styles/link-page.module.css"

export const LinkPage = () => {
    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <div className={styles.link}>Software</div>
                <div className={styles.link}>Blog</div>
                <div className={styles.link}>Music</div>
                <div className={styles.link}>Art</div>
            </div>
        </div>
    )
}