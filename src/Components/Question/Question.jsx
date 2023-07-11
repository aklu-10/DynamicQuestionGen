import React, {useState} from 'react'

const Question = () => {

    // options counter
    const [numOfOptions, setNumOfOptions] = useState([]);

     // function to generate questions options
    function generateOptions()
    {
        setNumOfOptions([...numOfOptions, 0])
    }

    return (
        <div>

            <div>
                <label>Question :</label>
                <input type='text'/>
            </div>

            {
                numOfOptions.map((element, index)=>(
                    <div key={index}>
                        <label>{String.fromCharCode(`${65+index}`)}. </label>
                        <input type='text' placeholder='Type the Options here'/>
                    </div>
                ))
            }

            {
                (numOfOptions.length<4) &&
                <button onClick={generateOptions}> + Add Options </button> 
            }

            <div>
                <label>Correct Answer : </label>
                
                {
                    numOfOptions.map((element, index)=>(
                        <div key={index}>
                            <label>{String.fromCharCode(`${65+index}`)}. </label>
                            <input type='radio' name='question1'/>
                        </div>
                    ))
                }

            </div>

        </div>

    )
}

export default Question
