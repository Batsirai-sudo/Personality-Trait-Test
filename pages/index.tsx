import { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.scss";
import Hero from "../components/molecules/Hero";
import Subtitle from "../components/atoms/Subtitle";
import Button from "../components/atoms/Button";

interface QuestionObj {
  question: any;
  answerOptions: Array<String>;
}

interface Props {
  questions: Array<QuestionObj>;
}  

const Home: NextPage<Props> = (props) => {
  const { questions } = props;
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Hero styles={styles} />

      <div className={styles.content}>
        <Subtitle className={styles.content__description}>
          You probably have a hunch about which one you are, <br />
          but why not take this quiz. The test on this page uses researched data
          to identify if you are extroverted or introverted. <br />
          It simulates social situations to stimulate the four cognitive
          functions (feeling, thinking, sensation, and intuition)
          <br /> <br />
          Discover where you fall on the introvert-extrovert spectrum.
        </Subtitle>
        <div>
          <Button
            onClick={() => router.push("/test")}
            className={styles.content__button}>
            Start 
          </Button>
          <div className={styles.content__small}>
            press <strong>Start ↵</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
