import React from 'react'

import Task from './task'
 const Tasks = ({tasks,onDelete,toggleRemainder,addTask}) => {
 return (
     <div>
      {
         tasks.map((task)=>{
          return<Task key={task.id} task={task} onDelete={()=>onDelete(task.id)} toggleRemainder={()=> toggleRemainder(task.id)}
          />
            }  
               )
      }
     </div>
      )
     
    
}
export default Tasks
