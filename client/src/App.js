import './App.css';
import { useState } from 'react';
import { CreateToDo } from './components/CreateToDo';
import { DisplayToDo } from './components/DisplayToDo';

function App() {
  const [todos, setToDos] = useState([])

    fetch("http://localhost:5005/todos")
      .then(async function(res){
        const json = await res.json();
        setToDos(json.todoList);
      })
      .catch((err) => console.error("error fetching todos: ", err))


  return (
    <div>
      hi there
      <CreateToDo></CreateToDo>
      <DisplayToDo todos={todos} ></DisplayToDo>
    </div>
  );
}

export default App;
