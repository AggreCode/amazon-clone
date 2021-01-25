import React from 'react'

const Button = ({showAdd,onclick}) => {
    return (
        <div>
               <button className="btn" onClick={onclick}
              >add</button>
        </div>
    )
}

export default Button
