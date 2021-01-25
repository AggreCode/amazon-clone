import React from 'react'
import {FaTimes} from 'react-icons/fa'
const Task = ({task, onDelete,toggleRemainder}) => {
    return (
        <div className={`task ${task.remainder ? 'reminder':''}`} onDoubleClick={toggleRemainder}>
            <h3>
                {task.text}<FaTimes style={{color:'red',cursor:'pointer'}} onClick={onDelete}/>
                </h3>
            <p>{task.Day}</p>
        </div>
    )
}

export default Task
