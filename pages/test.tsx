import { NextPage } from "next";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Scroller from "../components/organisms/Scroller";
import styles from "../styles/Test.module.scss";
import Loader from "../components/molecules/Loader";
import Results from "../components/molecules/Results";
import Counter from "../components/atoms/Counter";
import { getAnsweredQuestionsCount } from "../utils/helpers";
import { QuestionProps,QuestionObj } from "../utils/interfaces";
import { Status } from "../utils/emuns";
import { fetchResult } from "../utils/services";

const Test: NextPage<QuestionProps> = (props) => {
  const [status, setStatus] = useState(0);
  const [data, setData] = useState(props.questions);
  const [result, setResult] = useState(props.questions);
  const router = useRouter();


  const trackSelectedAnswers = (question_key: any, answer_key: number) => {
  
    data[question_key].selected_answer_key = answer_key;
    setData([...data]);
  
    if (getAnsweredQuestionsCount(data) === data.length) {
      setStatus(Status.Loading);
      getresults(); 
    }
  };

  const getresults = async ()=>{
     try {
      const res = await fetchResult(data);
      setResult(res); 
      setTimeout(() => setStatus(Status.Results), 3000);
     } catch (error) {
       console.log(error)
     }

  }


  const renderTest = (
    <div className={styles.question_main}>
      <Counter total={data.length} current={getAnsweredQuestionsCount(data)} />

      {data.map((x: QuestionObj, index) => (
        <div key={index} className={styles.question_container}>
          <Scroller
            question_key={index}
            styles={styles} 
            track_selected_answers={trackSelectedAnswers}
            question={x.question}
            answers={x.answerOptions}
          />
        </div>
      ))}
    </div>
  );

  const renderLoader = <Loader>Analysing results</Loader>;

  const renderResults = (
    <Results result={result} onClick={() => router.reload()} />
  );

  const renderView = (type: Number) => {
    return type === Status.Test
      ? renderTest
      : type === Status.Loading
      ? renderLoader
      : type === Status.Results
      ? renderResults
      : null;
  };

  return <div className={styles.container}>{renderView(status)}</div>;
};

Test.getInitialProps = async () => {
  const url = `http://localhost:3000/api/questions`;
  const res = await fetch(url);
  const json = await res.json();
  return { questions: json };
};

export default Test;
