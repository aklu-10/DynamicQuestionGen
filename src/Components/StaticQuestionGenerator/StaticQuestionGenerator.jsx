import React, {useState, memo} from 'react'
import Question from '../Question/Question';

const DynamicQuestionGenerator = () => {

    // Number of static questions to generate
    const [numOfStaticQuestion, setNumOfStaticQuestion] = useState(0);

    // all mcq questions data
    const [mcqQuestionsData, setMcqQuestionsData] = useState([]);

    // hide add question button
    const [isGreaterThanNumOfStaticQuestion, setIsGreaterThanNumOfStaticQuestion] = useState(false);

    // function to generate new mcq based question
    function generateMcqQuestion()
    {
        let mcqQuestionBaseStructure = {
            question:'',
            options:[],
            correctAnswer:''
        }

        setMcqQuestionsData([...mcqQuestionsData, mcqQuestionBaseStructure]);

        if([...mcqQuestionsData, mcqQuestionBaseStructure].length>numOfStaticQuestion-1)
            setIsGreaterThanNumOfStaticQuestion(true);
    }

    return (

        <div>
            
            <div>
                <label>Static Question : </label>
                <input type='number' value={numOfStaticQuestion} placeholder='Type number of questions' onChange={(e)=>setNumOfStaticQuestion(e.target.value)}/>
            </div>
            
            {
                isGreaterThanNumOfStaticQuestion || numOfStaticQuestion.length>0 &&   
                <button onClick={generateMcqQuestion}> + Add Questions </button>
            }

            {
                mcqQuestionsData.map(element=>(
                    <Question/>
                ))
            }

        </div>
    )
}

export default memo(DynamicQuestionGenerator)