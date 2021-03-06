/* eslint-disable react/prop-types */
import React from 'react';
// import db from '../../db.json';
import Widget from '../../components/Widget';
// import Footer from '../../src/components/Footer';
import AlternativesForm from '../../components/AlternativesForm';
import QuizLogo from '../../components/QuizLogo';
import QuizBackground from '../../components/QuizBackground';
import QuizContainer from '../../components/QuizContainer';
import Button from '../../components/Button';
import BackLinkArrow from '../../components/BackLinkArrow';

function ResultWidget({ results }) {
  return (
    <Widget>
      <Widget.Header>
        Resultados:
      </Widget.Header>

      <Widget.Content>
        <p>
          Você acertou
          {' '}
          {/* {results.reduce((somatoriaAtual, resultAtual) => {
            const isAcerto = resultAtual === true;
            if (isAcerto) {
              return somatoriaAtual + 1;
            }
            return somatoriaAtual;
          }, 0)} */}
          {results.filter((x) => x).length}
          {' '}
          perguntas
        </p>
        <ul>
          {results.map((result, index) => (
            <li key={`result__${result}`}>
              #
              {index + 1}
              {' '}
              Resultado:
              {result === true
                ? ' Acertou'
                : ' Errou'}
            </li>
          ))}
        </ul>
      </Widget.Content>
    </Widget>
  );
}


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

function QuestionWidget ({ question, questionIndex, totalQuestions, onSubmit, addResults }) {
  const questionId = `question__${questionIndex}`;
  const [selectedAlternative, setSelectedAlternative] = React.useState(undefined);
  const isCorrect = selectedAlternative === question.answer;
  const [isQuestionSubmitted, setIsQuestionSubmitted] = React.useState(false);
  const hasAlternativeSelected = selectedAlternative !== undefined;

  return (
    <Widget>
      <Widget.Header>
        <BackLinkArrow href="/" />
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

        <AlternativesForm onSubmit= {(infosDoSubmit) => {
          infosDoSubmit.preventDefault();
          setIsQuestionSubmitted(true);
          addResults(isCorrect);
          setTimeout(() => {
            onSubmit();
            setIsQuestionSubmitted(false);
            setSelectedAlternative(undefined);
          }, 1200 );
        }}>
          {/* For do React */}
        { question.alternatives.map((alternative, alternativeIndex) => {
          const alternativeId = `alternative__${alternativeIndex}`;
          const alternativeStatus =  isCorrect ? 'SUCESS' : 'ERROR';
          const isSelected =  selectedAlternative === alternativeIndex;
          // console.log('alternative ', alternativeId, alternative);

          return (
          <Widget.Topic htmlFor={alternativeId} as="label" key={alternativeId} data-selected={isSelected} data-status={isQuestionSubmitted && alternativeStatus}>
            <input 
            style = {{ display: 'none'}} onChange={() => setSelectedAlternative(alternativeIndex)} type="radio" name={questionId} id={alternativeId} />
            {alternative}
          </Widget.Topic>
          );
        })}

        {/* <pre>
          {JSON.stringify(question, null, 4)}
        </pre> */}
        {/* <p>{`alternative: ${selectedAlternative}`}</p> */}
        {isQuestionSubmitted && isCorrect && <p>Voce acertou!</p>}
        {isQuestionSubmitted && !isCorrect && <p>Voce errou!</p>}
        <Button type="submit" disabled={!hasAlternativeSelected}>Confirmar</Button>
        </AlternativesForm>
      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  LOADING: 'LOADING',
  QUIZ: 'QUIZ',
  SCORE: 'SCORE',
};

export default function QuizPage({ externalQuestions, externalBg }) {
  console.log('Perguntas registradas:', externalQuestions)
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const totalQuestions = externalQuestions.length;
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = externalQuestions[questionIndex];
  const [results, setResults] = React.useState([]);
  const [] = externalBg;
  const bg = externalBg;

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

  function addResults(result){
    setResults([
      ...results,
      result
    ])
  }
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
    <QuizBackground backgroundImage={bg}>
      <QuizContainer>
        <QuizLogo />
        
        
        {screenState === screenStates.LOADING && <LoadingWidget />}
        {screenState === screenStates.QUIZ &&
         <QuestionWidget
          question={ question } questionIndex= {questionIndex} totalQuestions={totalQuestions} onSubmit={handleSubmitQuiz} addResults={addResults} />
        }
        {screenState === screenStates.SCORE && <ResultWidget results={results} />}
      </QuizContainer>
    </QuizBackground>
  );
}
