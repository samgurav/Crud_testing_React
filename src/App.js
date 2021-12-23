import logo from './logo.svg';
import './App.css';
import CrudOperation from './components/CrudOperation';
import { useState } from 'react';
import Input from './components/Input';
import TodoList from './components/TodoList';
function App() {
  const [todos,setTodos]=useState('');
  const [listToDos,setListToDos]=useState([])
  const [update,setUpdate]=useState(0);
  const handleSubmitToDo=(userToDo)=>{
    let data=listToDos
    data.push(userToDo)
    setListToDos(data)
  }
  return (
    <div className="App">
     <h2>To Do List</h2>
     <Input initialToDo={todos} setTodo={setTodos} onSubmitToDo={handleSubmitToDo}
      setUpdate={setUpdate} update={update} listToDos={listToDos} setListToDos={setListToDos} />
     <TodoList listToDos={listToDos} setListToDos={setListToDos} setTodo={setTodos} setUpdate={setUpdate}/>
   
    </div>
  );
}

export default App;
