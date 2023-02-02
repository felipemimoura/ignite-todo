import { FormEvent } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

import { Header } from "./components/Header";
import { TaskList } from "./components/task";

import "./global.css";
import styles from "./App.module.css";

function App() {
  
  const handleAddNewText = (event: FormEvent) => {};

  return (
    <div className="App">
      <Header />
      <div className={styles.wrapper}>
        <form onSubmit={handleAddNewText} className={styles.todoForm}>
          <input
            type="text"
            className={styles.textInput}
            placeholder="Adicione um a nova tarefa"
          />
          <button type="submit">
            Criar <AiOutlinePlusCircle />
          </button>
        </form>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
