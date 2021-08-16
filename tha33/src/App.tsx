import './App.css';
import React , { useState } from "react";
import ThemeContext from './ThemeContext';
import { useContext } from "react"
import ThemeToggle from './ThemeTogggle';
import TodoList from './components/TodoList';

interface TodoType {
  title:String,
  done:false
}
function App() {
  const [theme , setTheme ] =useState<boolean>(false);
  const [todos,setTodos] = useState<TodoType[]>([]);
  const [todo,setTodo] = useState<string>("");
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
    <div className={theme ? "App " : "App dark"}>
      <div className="todos">
        <input type="text" value={todo} onChange={(e)=>{
          setTodo(e.target.value);
        }}/>
        <button className={theme ? "btn dark":"btn"} onClick={() => {
          setTodos([...todos,{title:todo,done:false}]);
          setTodo("");
        }}>Add Todo</button>
        {todos.map((item,index)=>(
          <TodoList title={item.title} done = {item.done}/>
        ))}
      </div>
      <ThemeToggle/>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
