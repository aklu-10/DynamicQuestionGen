import React,{memo} from 'react'

const Select = ({optValues, required}) => {

    return (
        <select required={required}>
            {
                <>
                <option selected disabled>Please Select - </option>
                {
                    optValues?.map((element)=>
                    (
                        <option value={element}>{element}</option>        
                    ))
                }
                </>
            }
        </select>
    )
}

export default memo(Select);