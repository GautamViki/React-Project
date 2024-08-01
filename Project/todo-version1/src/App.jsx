import { AppName } from "./components/AppName";
import { TODOItems } from "./components/TodoItems";
import { AddTODO } from "./components/AddTodo";
import "./App.css"

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddTODO />
      <div className="item-container">
        <TODOItems />
        <TODOItems />
      </div>
    </center>
  );
}

export default App;
