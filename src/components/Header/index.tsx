import rocketLaunch from "../../assets/rocket.svg"
import styles from "./Header.module.css"
export function Header () {
    return (
        <header className={styles.header}>
            <img className={styles.image} src={rocketLaunch} alt="Logo de um foguete decolando" />
            <h1 className={styles.title}>
                to<span>do</span>
            </h1>
        </header>
    )
}