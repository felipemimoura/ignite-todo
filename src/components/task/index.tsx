import { BsTrash } from "react-icons/bs";
import styles from "./Task.module.css";
import {AiOutlineCheck} from 'react-icons/ai'
export function TaskList() {
  return (
    <>
      <header className={styles.header}>
        <p className={styles.taskCount}>
          Tarefas criadas <span className={styles.taskInfo}>5</span>
        </p>
        <p className={styles.taskCompleted}>
          Concluidas <span className={styles.taskCompletedInfo}>2 de 5</span>
        </p>
      </header>
      <main className={styles.main}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <div className={styles.itemCompleted}> <AiOutlineCheck /> </div>
            <p className={styles.itemContentCompleted}>
              Integer urna interdum massa libero auctor neque turpis turpis
              semper. Duis vel sed fames integer.
            </p>
            <button className={styles.buttonIcon}>
              <BsTrash size={24} />
            </button>
          </li>

          <li className={styles.listItem}>
            <div className={styles.itemNotCompleted}></div>
            <p className={styles.itemContent}>
              Integer urna interdum massa libero auctor neque turpis turpis
              semper. Duis vel sed fames integer.
            </p>
            <button className={styles.buttonIcon}>
              <BsTrash size={24} />
            </button>
          </li>
        </ul>
      </main>
    </>
  );
}
