import Container from '../atoms/Container';
import Question from '../molecules/Question';
import Answer from '../molecules/Answer'; 
import { useRef } from 'react';     
import { SliderProps } from '../../utils/interfaces';

   
const Scroller = (props:SliderProps) => {
      const { question,
              answers,
              styles,
              question_key,
              track_selected_answers } = props;
      const firstItemRef = useRef(null);

      const next = (answer_key:Number)=>{     
          track_selected_answers(question_key,answer_key) 
          firstItemRef.current?.scrollIntoView({ behavior: "smooth" });       
      }       
    
     return (     
         <div>   
            <Container className={styles.question}>   
                <Question 
                    className={styles.question__title}>{question_key+1}) {question}</Question>
                { 
                    answers.map((x,index) =>(         
                        <Answer   
                        key={index}    
                        data={x}  
                        question_key={question_key} 
                        answer_key={index}   
                        answer_wrapper_style={styles.question__answer_flex}  
                        onClick={next} 
                        className={styles.question__answer}/>  
                    ))   
                }    
            </Container>    
            <div ref={firstItemRef}> </div>
         </div>   
        )
  };  
  
  export default Scroller;