import type { NextApiRequest, NextApiResponse } from 'next'

interface AnswerOptions{ 
    answer:String; 
    value:String; 
}
interface Question { 
    question: String;
    answerOptions: Array<AnswerOptions>;
    selected_answer_key: any;
}

const questions = [
    {
      "id": "1",
      "question": "Being around people makes me feel?", 
      "answerOptions": [
        { "answer": "Like I'm alive!","value":"extrovert" },    
        { "answer": "Inspired. I feed off of others' energy but there are times when I'd rather be alone.","value":"extrovert" },
        { "answer": "A bit exhausted. Being around others can be draining.","value":"introvert" }
      ]  
    },
    { 
      "question": "You're leaving your office holiday party, you...",  
      "answerOptions": [  
        { "answer": "Lead the way to the after party","value":"extrovert" },     
        { "answer": "Break off with a few work besties for a nightcap at your favorite wine bar","value":"introvert" },
        { "answer": "Go home and prepare to spend the next 48 hours recharging","value":"introvert" },  
      ]
    }, 
    {
      "question": "When a friend cancels your dinner plans, you feel",   
      "answerOptions": [
        { "answer": "Bummed","value":"extrovert" },   
        { "answer": "Thrilled","value":"introvert" }, 
        { "answer": "Devastated","value":"extrovert" },
      ]
    },
    {
      "question": "How big is your circle of friends?",
      "answerOptions": [
        { "answer": "Less than ten. I prefer quality over quantity.","value":"introvert" },
        { "answer": "I make friends wherever I go, so I have a lot of good friends","value":"extrovert" }, 
        { "answer": "I have different groups of friends (work, college, etc.) that I see periodically","value":"extrovert" },
      ] 
    },
    {    
      "question": "You had a really tough day at work. What does your idea of unwinding include?",
      "answerOptions": [   
        { "answer": "Calling up some friends to grab a drink at the newest bar in town","value":"extrovert" },
        { "answer": "Dinner with my best friend over a bottle of wine","value":"extrovert" }, 
        { "answer": "My couch, my pet, and my favorite book or television showy","value":"introvert" },
      ]
    },
  ];

export default (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method == 'GET'){
        res.status(200).send(questions)  
    }else if(req.method == 'POST'){  
        const result = process_results(req.body);
        res.status(200).send(result); 
    } 
}   

const process_results = (data:Array<Question>) => {
    var extrovert = 0; 
    var introvert = 0; 
    
    data.map((x)=>{ 
       if(x.answerOptions[x.selected_answer_key].value ==="introvert"){
        introvert+=1;  
       }
       if(x.answerOptions[x.selected_answer_key].value ==="extrovert"){
        extrovert+=1; 
       }
    }) 

    return {
        introvert: convert_to_percentage(introvert),
        extrovert: convert_to_percentage(extrovert)
    }
}

const convert_to_percentage = (num:any)=>{
     return (num/questions.length) * 100
};
   
// const process_data =()=>{

//   const fgdgd=   questions.map((x)=>{
//        return x.answerOptions.map(z=>{
//         const { ['value']: omitted, ...rest } = z;
//         return {rest}; 
//         })    
//      });
  
//      console.log("fgdgd",fgdgd,"questions",questions)
// }

