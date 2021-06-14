import React , { useState } from 'react';
import Todolist from './Todolist';
import './style_addTodo';
import AddTodo from './AddTodo';
import './Single_Todo.css'

var for_card_index="";

const for_body_cont={
    zIndex:10,
    display:"flex",
    justifyContent:"center",
    alignItems: "center",
    textDecoration:"none"
}
const for_title={
    color:"black",
    zIndex: 1000,
    position:"absolute",
    top:"40px",
    fontSize:"20px",
    fontWeight: "bolder",
    background: "transparent",   
    wordBreak: "break-all",
}
const for_desc={
    color:"black",
    zIndex: 100,
    position:"absolute",
    top:"80px",
    fontSize:"17px",
    fontWeight: "lighter",
    background: "transparent",   
    wordBreak: "break",
    textDecoration:"none"
}
const for_check_img={
    position:"absolute",
    top:"160px",
    width: "50px",
    height: "50px",
    background: "transparent",
    border:"none",
    textDecoration:"none"
}
const check_img={
  background: "transparent",
  textDecoration:"none"
}
const for_ul={
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    textDecoration:"none"
}
const card_styling = (id)=>{
    var z=130
    var left;
    var top;
    var right;
    if (id%4===1){
        left="683px";
        z=130
        top="390px"
    }
    else if(id%4===0){
        // z=-13;
        top="390px"
    }
    else if(id%4===2){
        left="530px";
        top="410px"
        // z=-111;
    }
    else if(id%4===3){
        right="500px"
        top="410px"
        // z=-111;
    }
    var small_card_todo={
        zIndex: z,
        border:"1px solid white",
        borderRadius: "20px",
        width: "200px",
        height:"250px",
        position:"absolute",
        top:top,
        left:left,
        right:right,
        background:"transparent",
        boxShadow: "0px 0px 10px #045de9",
        backdropFilter: "blur(18px)",
        display:"flex",
        justifyContent:" center",
        alignItems: "center",
        flexWrap: "wrap",
    }
    return small_card_todo
}

function Single_Todo(props){
    for_card_index="small_card_todo"+(props.todo.id).toString()
    let result_card_style=card_styling(props.todo.id)
    let for_id_hover="title"+(props.todo.id).toString()
  return(
      <ul style={for_ul}>
        <AddTodo addTodo_to_list={props.addTodo_to_list}/>
        <li style={for_body_cont}>
            <div style={result_card_style}>
                <div id={for_id_hover} style={for_title} >{props.todo.task}</div>
                {props.todo.desc? <div style={for_desc}>{props.todo.desc}</div> :<></>}
                <button onMouseEnter={()=>{
                    let element=document.getElementById(for_id_hover)
                    element.style.textDecoration="line-through"
                    element.style.color="grey"
                }}
                onMouseLeave={()=>{
                    let element=document.getElementById(for_id_hover)
                    element.style.textDecoration="none"
                    element.style.color="black"
                }}
                style={for_check_img} onClick={()=>{props.onDelete(props.todo)}} ><svg    style={check_img} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg></button>
            </div>
        </li>
      </ul>
    )
}



export default Single_Todo;