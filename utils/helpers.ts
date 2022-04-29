import { QuestionObj } from './interfaces'



const getAnsweredQuestionsCount = (data: Array<QuestionObj>) => {
  const count = data.filter((x) => 
      Object.keys(x).filter((key) => key.includes("selected_answer_key"))
        .length > 0
  );
  return count.length;
};

export { getAnsweredQuestionsCount };
