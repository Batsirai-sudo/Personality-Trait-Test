import React from "react";

export interface CommonProps{
    children?: any;
    className?: string;  
    styles?: any;  
    onClick?:  React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;     
}

export interface QuestionObj {
    question: String;
    answerOptions: Array<String>;
    selected_answer_key: Number;
  }
  
export interface QuestionProps {
    questions: Array<QuestionObj>;
  }

export interface SliderProps {  
    question: String;   
    styles: any; 
    track_selected_answers: any; 
    question_key: any; 
    answers: Array<Object>;
  } 
 
export interface AnswerProps extends CommonProps {
    answer_wrapper_style?: any;    
    answer_key?: number;     
    question_key?: number;     
    data?: {
        answer?:String;
        value?: String;
    }; 
  } 
  

export interface CounterProps {
    total: number;
    current: number;
}

export interface ResultProps extends CommonProps {
    result?: any; 
}