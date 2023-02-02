import { ChangeEvent, FormEvent, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";

import { Header } from "./components/Header";
import { TaskList } from "./components/task";

import "./global.css";
import styles from "./App.module.css";

interface Task {
  content: string;
  id: string;
  completed: boolean;
}
function App() {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  const handleNewTodo = (event: FormEvent) => {
    event.preventDefault();
    const newTaskToAdd: Task = {
      completed: false,
      content: newTask,
      id: uuidv4(),
    };

    setTaskList([...taskList, newTaskToAdd]);

    setNewTask("");
  };

  const handleNewTask = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  const handleDeleteTask = (id: string) => {
    console.log('id', id)
    const taskWithoutDeleteOne = taskList.filter(task => task.id !== id)

    setTaskList(taskWithoutDeleteOne);
  }

  const handleToggleTaskComplete = (id: string) => {
    const handleTaskList = taskList.map(task => task.id === id ? {...task, completed: !task.completed} : task)

    setTaskList(handleTaskList);
  }
  return (
    <div className="App">
      <Header />
      <div className={styles.wrapper}>
        <form onSubmit={handleNewTodo} className={styles.todoForm}>
          <input
            type="text"
            className={styles.textInput}
            value={newTask}
            onChange={handleNewTask}
            placeholder="Adicione um a nova tarefa"
          />
          <button type="submit">
            Criar <AiOutlinePlusCircle />
          </button>
        </form>
        <TaskList taskList={taskList} onDeleteTask={handleDeleteTask} onCompleteTask={handleToggleTaskComplete} />
      </div>
    </div>
  );
}

export default App;
