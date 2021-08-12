import "./App.css"
import ListTodo from "./components/listTodo"
import AddTodo from "./components/addTodo"
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <h1>Todos list</h1>
      <Provider store={store}>
       <AddTodo/>
       <ListTodo/>
       </Provider>
    </div>
  );
}

export default App;
