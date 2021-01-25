import React from 'react'
import {useState} from 'react'
const AddTask = ({onAdd}) => {
    const [text,setText]= useState('')
    const [Day,setDay]= useState('')
    const [remainder,setRemainder]= useState(false)
    const onSubmit=(e)=>{
       e.preventDefault()
       if(!text){
           alert('please add task')
           return
       }
      
        onAdd({text,Day, remainder})
        setText('')
        setDay('')
        setRemainder(false)
       
       }
    
        return (
        <form action="" className="addform" onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="task">Task</label>
              <input type="text" placeholder="add Task" value={text}
              onChange={(e)=>setText(e.target.value)}/>
            </div>
            <div className="form-control">
                <label htmlFor="day">day</label>
              <input type="text" placeholder="add Day"
              value={Day}
              onChange={(e)=>setDay(e.target.value)}/>
            </div>
            <div className="form-control form-control-check">
                <label htmlFor="remainder"> Set Reminder</label>
              <input id="remainder" type="checkbox"
              checked={remainder}
              value={remainder}
              onChange={(e)=>setRemainder(e.currentTarget.checked)}/>
            </div>
                 <input type="submit" value="Save Task" className='btn btn-block'/>
        </form>
    )
}

export default AddTask
