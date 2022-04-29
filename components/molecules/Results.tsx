import styles from "../../styles/Test.module.scss";
import Subtitle from "../atoms/Subtitle";
import Title from "../atoms/Title";
import Button from "../atoms/Button";
import { ResultProps } from "../../utils/interfaces";

const Results = (props: ResultProps) => {
  const { children, className, onClick, result } = props;

  return (
    <div className={styles.results}>
      <div>
        <Subtitle>
          You are {result.extrovert}% Extroverted and {result.introvert}%
          Introverted, you are an
        </Subtitle>
        <Title>
          {result.extrovert > result.introvert ? "Extrovert!" : "Introvert!"}{" "}
        </Title>
        <Button onClick={onClick} className={styles.content__button}>
          Redo
        </Button>
      </div>
    </div>
  );
};

export default Results;
