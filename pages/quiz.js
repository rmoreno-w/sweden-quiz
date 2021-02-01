/* eslint-disable react/prop-types */
import React from 'react';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Button from '../src/components/Button';

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>

      <Widget.Content>
        [Desafio do Loading]
      </Widget.Content>
    </Widget>
  );
}

function QuestionWidget ({ question, questionIndex, totalQuestions, onSubmit }) {
  const questionId = `question__${questionIndex}`;

  return (
    <Widget>
      <Widget.Header>
        {/* <BackLinkArrow href="/" /> */}
        <h3> {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}</h3>
      </Widget.Header>

      <img alt="Imagem da Pergunta"
      style={{
        width: '100%',
        height: '150px',
        objectFit: 'cover',
      }}
      src={question.image}
      />
      <Widget.Content>
        <h2>
          { question.title }
        </h2>
        <p>
          { question.description }
        </p>

        <form onSubmit= {(infosDoSubmit) => {
          infosDoSubmit.preventDefault();
          onSubmit();
        }}>
          {/* For do React */}
        { question.alternatives.map((alternativa, alternativaIndex) => {
          const alternativaId = `alternativa__${alternativaIndex}`;
          // console.log('Alternativa ', alternativaId, alternativa);

          return (
          <Widget.Topic htmlFor={alternativaId} as="label">
            <input 
            // style = {{ display: 'none'}}
            type="radio" name={questionId} id={alternativaId} />
            {alternativa}
          </Widget.Topic>
          );
        })}

        {/* <pre>
          {JSON.stringify(question, null, 4)}
        </pre> */}
        <Button type="submit">Confirmar</Button>
        </form>
      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  LOADING: 'LOADING',
  QUIZ: 'QUIZ',
  SCORE: 'SCORE',
};

export default function QuizPage() {
  console.log('Perguntas registradas:', db.questions)
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const totalQuestions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

  // [React chama de: Efeitos || Effects]
  // React.useEffect
  // nasce === didMount
  // atualizado === willUpdate
  // morre === willUnmount
  React.useEffect(() => {
    //Aqui poderia vir um fetch pra API
    setTimeout(() => {
      setScreenState(screenStates.QUIZ)
    }, 900);
    // Vai executra como se fosse IonViewWill enter (didMount)
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if( nextQuestion < totalQuestions) {
      setCurrentQuestion(questionIndex+1);
    }
    else {
      setScreenState(screenStates.SCORE);
    }
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        
        
        {screenState === screenStates.LOADING && <LoadingWidget />}
        {screenState === screenStates.QUIZ &&
         <QuestionWidget
          question={ question } questionIndex= {questionIndex} totalQuestions={totalQuestions} onSubmit={handleSubmitQuiz} />
        }
        {screenState === screenStates.SCORE && <div>Voce acertou x questoes, parabens!</div>}
      </QuizContainer>
    </QuizBackground>
  );
}
