<h3 align="center">
	You can check an 🇺🇸 English version of this document <a href="/../../">here</a>
</h3>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/rmoreno-w/sweden-quiz?color=%2304D361&style=for-the-badge">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/rmoreno-w/sweden-quiz?style=for-the-badge">

  <a href="https://github.com/rmoreno-w/sweden-quiz/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/rmoreno-w/sweden-quiz?style=for-the-badge">
  </a>

   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen?style=for-the-badge">
   <a href="https://github.com/rmoreno-w/sweden-quiz/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/rmoreno-w/sweden-quiz?style=for-the-badge">
  </a>

  <a href="https://github.com/rmoreno-w/">
    <img alt="Autor: Rodrigo Moreno" src="https://img.shields.io/badge/Autor:-Rodrigo%20Moreno-%231b9?style=for-the-badge">
  </a>

</p>


<h1 align="center">
	🔩 Sweden Quiz  🇸🇪  - Em progresso 🔩<br/><br/>
    <img alt="Project Screenshot" src="https://raw.githubusercontent.com/rmoreno-w/sweden-quiz/main/public/screenshot.jpg" /> <br/>
</h1>

<h3 align="center">
Você pode testar este projeto usando <a href="https://sweden-quiz-git-main-rmoreno-w.vercel.app/" target="_blank">este link</a>
</h3></br>


<p align="center">
  <a href="#-sobre-o-projeto">Sobre</a> •
  <a href="#-tecnologias-utilizadas">Tecnologias Utilizadas</a> •
  <a href="#%EF%B8%8F-funcionalidades">Funcionalidades</a> •
  <a href="#-como-executar-o-projeto">Como executar</a> •
  <a href="#-melhorias-futuras">Melhorias Futuras</a> •
  <a href="#-autor">Autor</a> •
  <a href="#-licença">Licença</a>
 
</p></br>


## 🗒 Sobre o projeto

Este é um projeto desenvolvido durante o evento **Imersão React V2 - Next.JS** da <a href="https://www.alura.com.br/" target="_blank">Alura</a>, com o objetivo de criar uma aplicação web com React e Next.JS em 5 aulas. 

A aplicação desenvolvida inicialmente era um modelo de quiz com uma "database" simulada por um arquivo (`db.js` - na raiz do projeto). Esta modelagem dos dados foi usada para possibilitar a integração do projeto desenvolvido com outras databases de alunos da imersão, expondo a database publicamente através das lambda functions do Next.JS. 

Neste projeto estão linkados os quizes dos alunos <a href="https://github.com/Markkop/meta-quiz-imersao-react" target="_blank">Marcelo Kopmann</a>, <a href="https://github.com/afuscella/bitter-brewing-quiz" target="_blank">Arthur Fuscella Silva</a> e <a href="https://github.com/itsjessmenezes/aluraquiz" target="_blank">Jéssica Menezes</a>. Além disso, apesar de não estar linkado dentro da aplicação, o projeto do <a href="https://github.com/BrunoSaibert/brunoquiz" target="_blank">Bruno Saibert </a> está excelente e me influenciou em algumas das minhas funcionalidades.

Para o desenvolvimento foram utilizados **React.JS**, **Next.JS** e **Styled Components**.

O projeto inicial continha apenas duas perguntas de exemplo aleatórias. Foi modificado e personalizado baseado num sonho do autor de morar e trabalhar na Suécia e visa testar conhecimentos sobre algumas curiosidades deste país incrível 🥰

--- 
</br>


## 🛠 Tecnologias Utilizadas



#### **Aplicação** 

- **<a href="https://reactjs.org/" target="_blank">React</a>** + **<a href="https://nextjs.org/" target="_blank">Next.JS</a>**
- **<a href="https://styled-components.com" target="_blank">Styled Components</a>**
- **<a href="https://www.framer.com/motion/" target="_blank">Framer Motion</a>**
- **<a href="https://react-icons.github.io/react-icons/" target="_blank">React Icons</a>**


#### **Para gerar este Readme:**

- **<a href="https://markeditor.netlify.app/" target="_blank">Markdown Editor</a>** (desenvolvido por um outro aluno da Alura, o <a href="https://github.com/BrunoSaibert" target="_blank">Bruno Saibert</a>. Projeto muito interessante!)

#### **Hospedagem** 

- **<a href="https://vercel.com/" target="_blank">Vercel</a>**

---
</br>


## ⚙️ Funcionalidades

Uma API é simulada com o arquivo `db.json` e, utilizando as `Lambda Functions` do Next.JS, este arquivo é exposto para que outros usuários tenham acesso.

Na tela inicial o usuário deve informar seu nome para poder jogar o quiz ou também pode acessar o quiz de outros alunos na Seção `"Quiz da galera"`.

Ao entrar num quiz e responder uma pergunta, o sistema informa se o usuário acertou ou não a questão atual e passa para a próxima pergunta.

Ao finalizar o questionário, o usuário recebe uma mensagem com o número de acertos e são exibidas quais as questões corretas e as erradas.

---
</br>


## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instaladas em sua máquina as ferramentas <a href="https://git-scm.com" target="_blank">Git</a> e <a href="https://nodejs.org/en/" target="_blank">Node.JS</a>.
Além disto é preciso de  um editor para trabalhar com o código, por exemplo o <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>.

#### 🖥 Rodando a aplicação

```bash

#1 - Clonar repositório
$ git clone git@github.com:rmoreno-w/sweden-quiz.git

#2 - Acesse a pasta do projeto através do terminal
$ cd sweden-quiz

#3 - Instale as dependências para poder rodar o projeto. Digite isto no terminal:
$ npm install

#4 Agora é só executar a aplicação! Novamente, digite no terminal
$ npm run dev

#5 Por fim, você pode acessar a aplicação no seu navegador usando o endereço:
$ http://localhost:3000

```

---
</br>


## 🗒 Melhorias Futuras

- [ ] Mensagem personalizada baseada no número de acertos
- [ ] Implementação em TypeScript
- [ ] Página de Erro 404 personalizada
- [ ] Projeto internacionalizado (inglês, português, sueco)
- [ ] Testes Automatizados

---
</br>


## 🤓 Autor

<a href="https://github.com/rmoreno-w">
 <img src="https://avatars.githubusercontent.com/u/65390774?s=460&u=19fcc2d1c87d8e841aa03bdd29d5bda783ec8cef&v=4" alt="Rodrigo Oliveira Moreno" width="200px;"/>
 <br />
 <sub><b>Rodrigo Oliveira Moreno</b></sub></a>
 <br />

Feito com 💙 por Rodrigo Oliveira Moreno
<br/><br/>👋😊 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/rmoreno-w)](https://www.linkedin.com/in/rmoreno-w)
[![Instagram Badge](https://img.shields.io/badge/-Instagram-blueviolet?style=flat&logo=Instagram&logoColor=white&link=https://www.instagram.com/rmoreno.w/)](https://www.instagram.com/rmoreno.w/)
[![Gmail Badge](https://img.shields.io/badge/-rmoreno.w@gmail.com-c14438?style=flat&logo=Gmail&logoColor=white&link=mailto:rmoreno.w@gmail.com)](mailto:rmoreno.w@gmail.com)

---
</br>


## 📝 Licença

Este projeto esta sobe a licença MIT.
<br/><br/>