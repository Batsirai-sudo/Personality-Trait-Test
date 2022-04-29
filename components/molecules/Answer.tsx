import Subtitle from '../atoms/Subtitle';
import { AnswerProps } from '../../utils/interfaces';


function Answer(props: AnswerProps){    
    const {
            answer_wrapper_style,
            answer_key,question_key,
            data,
            onClick } = props; 
 
    return (      
        <label onClick={()=>onClick(answer_key)} className={answer_wrapper_style}> 
           <input type="radio" name={`question-${question_key}`} value={data.value} />    
           <Subtitle {...props}>{data.answer}</Subtitle> 
        </label>
    )
}

export default Answer