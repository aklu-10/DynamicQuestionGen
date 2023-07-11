import React from 'react'

const Label = ({labelFor, labelData}) => {



    return (
        <label htmlFor={labelFor}>{labelData}</label>
    )
}

export default Label