import React,{memo} from 'react'

const Input = ({type, label, regexp, fieldMessage}) => {

    return (
        <>
            {
                label && <label>{label}</label>
            }
            <input type={type} pattern={regexp}/>
            <span className='fieldMsg'>{fieldMessage}</span>
        </>
    )
}

export default memo(Input)