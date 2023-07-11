import React, {useState, memo} from 'react'
import Question from '../Question/Question';
import Input from '../Input/Input';
import Label from '../Label/Label';

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

                <Label labelFor="NumOfStaticQuestion" labelData="Dynamic Question :"/>

                <Input 
                    name="NumOfStaticQuestion"
                    fieldType="number" 
                    fieldValue={numOfStaticQuestion} 
                    fieldPlaceHolder="Type number of questions" 
                    onFieldChange={(e)=>setNumOfStaticQuestion(e.target.value)}
                    pattern='^[0-9]\d*$'
                    fieldErrorMessage="Must be a positive number or zero"
                />

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