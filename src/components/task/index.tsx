import { BsTrash } from "react-icons/bs";
import styles from "./Task.module.css";
import { AiOutlineCheck } from "react-icons/ai";

interface Task {
  content: string;
  id: string;
  completed: boolean;
}
interface Props {
  taskList: Task[];
  onDeleteTask: (id: string) => void;
  onCompleteTask: (id: string) => void;
}

export function TaskList({ taskList, onDeleteTask, onCompleteTask }: Props) {
  const countTaskCompleted = taskList.reduce((sum, task) => {
    if (task.completed) {
      return sum + 1;
    }
    return sum;
  }, 0);

  const handleCompleteTask = (id: string) => {
    onCompleteTask(id);
  };

  return (
    <>
      <header className={styles.header}>
        <p className={styles.taskCount}>
          Tarefas criadas{" "}
          <span className={styles.taskInfo}>{taskList.length}</span>
        </p>
        <p className={styles.taskCompleted}>
          Concluidas{" "}
          <span
            className={styles.taskCompletedInfo}
          >{`${countTaskCompleted} de ${taskList.length}`}</span>
        </p>
      </header>
      <main className={styles.main}>
        <ul className={styles.list}>
          {taskList.map((task) => {
            return (
              <li key={task.id} className={styles.listItem}>
                <div
                  onClick={() => handleCompleteTask(task.id)}
                  className={
                    task.completed
                      ? styles.itemCompleted
                      : styles.itemNotCompleted
                  }
                >
                  {task.completed ? <AiOutlineCheck /> : null}
                </div>
                <p
                  className={
                    task.completed
                      ? styles.itemContentCompleted
                      : styles.itemContent
                  }
                >
                  {task.content}
                </p>
                <button
                  onClick={() => onDeleteTask(task.id)}
                  className={styles.buttonIcon}
                >
                  <BsTrash size={24} />
                </button>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}
