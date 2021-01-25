import PropTypes from 'prop-types'

import React from 'react';
import Button from './button';
const HeaderComponent = ({onAdd, showAdd}) => {
 
    return (
        <div>
            <header className="header">
                <h2>Task Scheduler</h2>
                <Button  onclick={onAdd} showAdd={showAdd}/>

            </header>
        </div>
    )
}
HeaderComponent.defaultProps ={
    title:"Task runner",
}
HeaderComponent.propTypes={
    title: PropTypes.string.isRequired,
}
export default HeaderComponent;
