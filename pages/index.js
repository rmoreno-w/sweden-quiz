import styled from 'styled-components';
import Head from 'next/head';
import React from 'react';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

// const BackgroundImage = styled.div`
//   background-image: url(${ db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

const QuizContainer = styled.div`
  width: 100%;  
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width:500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Sweden Quiz @Imersao Next - Alura</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{ db.title }</h1>
          </Widget.Header>

          <Widget.Content>
            {/* <p>{ db.description }</p> */}
            <form onSubmit={(infoDoEvento) => {
              infoDoEvento.preventDefault(); // Necessario p/ evitar padrao do browser de recarregar a pagina
              router.push(`quiz?name=${name}`);

              console.log('Submissao react');
            }}
            >

              <Input
                name="nomeDoUsuario"
                placeholder="Digite seu nome"
                onChange={ (infosDaMudanca) => {
                  console.log('Mudou o input para', infosDaMudanca.target.value);
                  setName(infosDaMudanca.target.value);
                }}
                value={name}
              />

              <Button type="submit" disabled={!name.length}>Jogar!</Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes dos Alunos</h1>

            <p>lorem ipsum</p>
          </Widget.Content>
        </Widget>

        <Footer />
      </QuizContainer>

      <GitHubCorner projectUrl="https://github.com/rmoreno-w/rmoreno-w" />
    </QuizBackground>
  );
}
