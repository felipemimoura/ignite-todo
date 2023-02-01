import { Header } from "./components/Header";
import { AiOutlinePlusCircle } from "react-icons/ai";
import "./global.css";
import styles from './App.module.css'

function App() {
  return (
    <div className="App">
      <Header />
      <div className={styles.wrapper}>
        <form className={styles.todoForm}>
          <input type="text" className={styles.textInput} placeholder="Adicione um a nova tarefa" />
          <button type="submit">
            Criar <AiOutlinePlusCircle />
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
