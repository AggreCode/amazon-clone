import React, { Component } from "react";
import {useState} from 'react'
import HeaderComponent from "./components/HeaderComponent.js";
import Tasks from './components/tasks'
import AddTask from './components/AddTask'


export const App = () => {
  const [showAdd,setShowAdd]= useState(false)
  const [tasks,setState]=useState([
    {
      id:1,
      text:'food shopping',
      Day:'today',
      remainder: false
    },
    {
      id:2,
      text:'Hair Cut',
      Day:'26 Feb',
      remainder: false
    },
    {
      id:3,
      text:'Movie Hall',
      Day:'27 Feb',
      remainder: false
    }

  ])
const addTask=(task)=>{
 const id= Math.floor(Math.random()*10000)+1

const newTask={id, ...task}
setState([...tasks,newTask])

}
  const deleteTask= (id)=>{
    setState(tasks.filter(task => task.id!==id))
  }
  const toggleRemainder=(id)=> {
    setState(tasks.map((task)=>{
    return task.id===id? {...task, remainder: !task.remainder}:task
    }))
  }
  return (
      
      <div className="container">
       {showAdd ? <AddTask onAdd={addTask}/>:''} 
        <HeaderComponent onAdd={()=> setShowAdd(!showAdd)} showAdd={showAdd}/>
        { tasks.length>0? <Tasks tasks={tasks} onDelete={deleteTask} toggleRemainder={toggleRemainder}/> :"No Tasks to shbow"}
     </div>
    )
   
}

export default App;
