import React, {useState} from 'react';
import './App.css';
import Header from "./MyComponents/Header";
import AddTodo from './MyComponents/AddTodo'
import Todolist from "./MyComponents/Todolist"

function App(){ 
  const onDelete = (todo)=>{
    settodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }

  const addTodo_to_list = (task)=> {
    let curr_id;
    if(todos.length==0){
      curr_id=0;
    }
    else{
      curr_id=todos[todos.length-1].id+1;  
    }
    const mycurrtodo={
      id:curr_id,
      task:task,
    }
    console.log(mycurrtodo)
    settodos([...todos,mycurrtodo])
  }

  const [todos,settodos] = useState([{id:0,task:"Task",desc:"Add Your Todo"}]);
  return (
        <>
        <Header/>
        <Todolist todolist={todos} addfun={addTodo_to_list}  onDelete={onDelete}/>
        </>
    )
}

export default App;