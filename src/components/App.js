import { useEffect, useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import QuestionTypes from "./QuestionTypes";
import Error from "./Error";
import Start from "./Start";
import Question from "./Question";
import Controls from "./Controls";
import Progress from "./Progress";
import End from "./End";
import Loader from "./Loader";

const initialState = {
  status: "selecting",
  questionType: null,
  questions: [],
  index: 0,
  answer: null,
  points: 0,
  time: 300
};
function reducer(state, action) {
  switch (action.type) {
    case "selecting":
      return { ...state, status: "selecting", questions: [] };
    case "chooseQuizType":
      return { ...state, questionType: action.payload };
    case "loading":
      return { ...state, status: "loading" };
    case "dataReceived":
      return { ...state, status: "ready", questions: action.payload };
    case "dataFailed":
      return { ...state, status: "error", questionType: null };
    case "start":
      return { ...state, status: "active" };
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          question.correctOption === action.payload
            ? state.points + 10
            : state.points,
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    case "lastQuestion":
      return { ...state, questions: [], status: "finished" };
    case 'counter' :
      return {...state, time: state.time -1}
    default:
      break;
  }
}

const subject = new Map();
subject.set("geographyQuestions", "GEOGRAPHY");
subject.set("historyQuestions", "HISTORY");
subject.set("mathsQuestions", "MATTHEMATICS");
subject.set("generalKnowledgeQuestions", "GENERAL KNOWLEDGE");

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { status, questionType, questions, index, answer, points, time } = state;

  const numberOfQuestions = questions.length;
  const maxPoints = numberOfQuestions * 10;

  useEffect(
    function () {
      let isMounted = true;
    
      async function fetchQuestions() {
        if (questionType === null) return;
      
        try {
          dispatch({ type: "loading" });
          const res = await fetch(`http://localhost:8000/${questionType}`);
          const data = await res.json();
          // console.log(data);
          if (isMounted) {
            dispatch({ type: "dataReceived", payload: data });
          }
        } catch (error) {
          if (isMounted) {
            dispatch({ type: "dataFailed" });
          }
        }
      }
    
      fetchQuestions();
    
      return () => {
        isMounted = false;
      };
    },
    [questionType]
  );

  return (
    <div className="container bg-primary app">
      <Header />
      <Main>
        {status === "selecting" && <QuestionTypes dispatch={dispatch} />}
        {status === "loading" && <Loader />}
        {status === "error" && <Error dispatch={dispatch} />}
        {status === "ready" && (
          <Start
            dispatch={dispatch}
            numberOfQuestions={numberOfQuestions}
            subject={subject.get(questionType)}
          />
        )}
        {status === "active" && (
          <>
            <Progress
              numberOfQuestions={numberOfQuestions}
              index={index}
              points={points}
              maxPoints={maxPoints}
            />
            <Question
              questions={questions}
              index={index}
              dispatch={dispatch}
              answer={answer}
              numberOfQuestions={numberOfQuestions}
            />
          </>
        )}
        {status === "finished" && <End points={points} maxPoints={maxPoints} dispatch={dispatch}/>}
      </Main>
      <Footer>{status === "active" && <Controls answer={answer} time={time} dispatch={dispatch} />}</Footer>
    </div>
  );
}

export default App;
