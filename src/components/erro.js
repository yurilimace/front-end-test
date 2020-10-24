import React from 'react'


const erro = (props) => {
    return (
        <div className={props.style.class}>
            <span className='span'>{props.msg}</span>
        </div>
    )
}

export default erro