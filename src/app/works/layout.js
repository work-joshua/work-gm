
import styles from "./page.module.scss";

export default async function Works({ children }) {

    return (
        <>
            <div className={styles.works_body}>
                { children }
            </div>
        </>
    )
}
