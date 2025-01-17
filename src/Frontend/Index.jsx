import styles from './index.module.css'

function Index() {
    return (
        <div className={styles.indexDiv}>
            <i className={`${styles.icon} fa-solid fa-user-secret`} />
        </div>
    )
}

export default Index;