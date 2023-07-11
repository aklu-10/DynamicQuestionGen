import React, { useState } from 'react'

const Input = ({name, fieldType, fieldValue, fieldPlaceHolder, onFieldChange, pattern, fieldErrorMessage}) => {

    const [isValidPattern, setIsValidPattern] = useState(null);   

    function handleChange(e)
    {
        onFieldChange(e);
        setIsValidPattern(new RegExp(pattern).test(e.target.value))
    }

    return (
        
        <>
            <input type={fieldType} value={fieldValue} placeholder={fieldPlaceHolder} onChange={handleChange} id={name}/>
            {
                (isValidPattern!=null) &&
                !isValidPattern && 
                <span>{fieldErrorMessage}</span>
            }
        </>
    )
}

export default Input