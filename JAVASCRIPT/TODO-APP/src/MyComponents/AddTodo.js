import React , { useState } from 'react';
import Todolist from './Todolist';
import './AddTodo.css'
import './style_addTodo'



function AddTodo(props){
  
  const [task,settask]=useState("");

  const setTitle = (e)=>{
    settask(e.target.value)
  }
  const submit = (e)=>{
    e.preventDefault(); 
    if(task){
      props.addTodo_to_list(task);
      settask('')
    }
    else{
      alert("Task can't be empty");
    }
  }
  return(
      <>
        <form onSubmit={submit}>
        <div className="input_container">
          <div className="task_head">Task:<input value={task} onChange={setTitle}  type="text"  className="task" id="task"/></div>
          <button className="button" type="submit" >Submit</button>
        </div>
        </form>
      </>
    )
}



export default AddTodo;