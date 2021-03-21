<h3 align="center">
	Você pode ler este documento em português 🇧🇷 <a href="README.pt-br.md">aqui</a>
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
    <img alt="Author: Rodrigo Moreno" src="https://img.shields.io/badge/Author:-Rodrigo%20Moreno-%231b9?style=for-the-badge">
  </a>

</p>


<h1 align="center">
	🔩 Sweden Quiz  🇸🇪  - In Progress 🔩<br/><br/>
    <img alt="Project Screenshot" src="https://raw.githubusercontent.com/rmoreno-w/sweden-quiz/main/public/screenshot.jpg" /> <br/>
</h1>

<h3 align="center">
You can test this project live using <a href="https://sweden-quiz-git-main-rmoreno-w.vercel.app/" target="_blank">this link</a>
</h3></br>


<p align="center">
  <a href="#-about-the-project">About</a> •
  <a href="#-utilized-technologies">Utilized Technologies</a> •
  <a href="#%EF%B8%8F-funcionalities">Funcionalities</a> •
  <a href="#-how-to-run-the-project">How to Run</a> •
  <a href="#-future-improvements">Future Improvements</a> •
  <a href="#-author">Author</a> •
  <a href="#-licence">Licence</a>
  
</p></br>


## 🗒 About the Project

This is a project developed during <a href="https://www.alura.com.br/" target="_blank">Alura</a>'s event called **React Immersion V2 - Next.JS**, with the goal of creating a web application with React and Next.JS in 5 lessons.

The initial application was a quiz model with a "database" simulated by a file (`db.js` - located at the project root). This data modeling was used to make it possible to integrate the developed project with other immersion students' databases, exposing the database publicly through Next.JS's Lambda Functions.

This project is linked to quizzes from the students <a href="https://github.com/Markkop/meta-quiz-imersao-react" target="_blank">Marcelo Kopmann</a>, <a href="https://github.com/afuscella/bitter-brewing-quiz" target="_blank">Arthur Fuscella Silva</a> e <a href="https://github.com/itsjessmenezes/aluraquiz" target="_blank">Jéssica Menezes</a>. Also, although not linked inside the application, <a href="https://github.com/BrunoSaibert/brunoquiz" target="_blank">Bruno Saibert </a>'s project is excellent and inspired me in some of my features.

To develop this project **React.JS**, **Next.JS** and **Styled Components** were used.

The initial project contained only two random sample questions. It was modified and personalized based on the author's dream of living and working in Sweden, and aims to test your knowledge about some curiosities from this amazing country 🥰

--- 
</br>


## 🛠 Utilized Technologies



#### **Application** 

- **<a href="https://reactjs.org/" target="_blank">React</a>** + **<a href="https://nextjs.org/" target="_blank">Next.JS</a>**
- **<a href="https://styled-components.com" target="_blank">Styled Components</a>**
- **<a href="https://www.framer.com/motion/" target="_blank">Framer Motion</a>**
- **<a href="https://react-icons.github.io/react-icons/" target="_blank">React Icons</a>**


#### **To generate this Readme:**

- **<a href="https://markeditor.netlify.app/" target="_blank">Markdown Editor</a>** (developed by <a href="https://github.com/BrunoSaibert" target="_blank">Bruno Saibert</a>, another immersion student. Quite an interesting project!)

#### **Hosting** 

- **<a href="https://vercel.com/" target="_blank">Vercel</a>**

---
</br>


## ⚙️ Funcionalities

An API is simulated with the `db.json` file and, using Next.JS's Lambda Functions, it is exposed so other students can access it.

The user must inform its name on the home screen in order to play the quiz. They can also access other students quizzes in the Section `"Other Alura Students' Quizzes"`.

When entering a quiz, after answering a question, the system informs whether the user answered the current question correctly or not and moves on to the next question.

When the quiz is over, a message with the number of correct and wrong questions is presented to the user. 

---
</br>


## 🚀 How to Run the Project

### Pre-requisites

Before starting, you will need to have <a href="https://git-scm.com" target="_blank">Git</a> and <a href="https://nodejs.org/en/" target="_blank">Node.JS</a> installed in your computer.
In adition to these tools, a code editor is needed to work with the code, for example <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>.

#### 🖥 Running the application

```bash

#1 - Clone repository
$ git clone git@github.com:rmoreno-w/sweden-quiz.git

#2 - Access the project folder in the terminal
$ cd sweden-quiz

#3 - Install the dependencies to run the project. Type this in the terminal:
$ npm install

#4 Now you can run the application! Again, type in the terminal:
$ npm run dev

#5 Finally, you can acces the application on your browser using the address:
$ http://localhost:3000

```

---
</br>


## 🗒 Future Improvements

- [ ] Personalized message based on the number of correct questions
- [ ] TypeScript implementation
- [ ] 404 Error personalized page
- [ ] Internationalized project (English, Portuguese, Swedish)
- [ ] Automated Tests

---
</br>


## 🤓 Author

<a href="https://github.com/rmoreno-w">
 <img src="https://avatars.githubusercontent.com/u/65390774?s=460&u=19fcc2d1c87d8e841aa03bdd29d5bda783ec8cef&v=4" alt="Rodrigo Oliveira Moreno" width="200px;"/>
 <br />
 <sub><b>Rodrigo Oliveira Moreno</b></sub></a>
 <br />

Made with 💙 by Rodrigo Oliveira Moreno
<br/><br/>👋😊 Get in Contact!

[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/rmoreno-w)](https://www.linkedin.com/in/rmoreno-w)
[![Instagram Badge](https://img.shields.io/badge/-Instagram-blueviolet?style=flat&logo=Instagram&logoColor=white&link=https://www.instagram.com/rmoreno.w/)](https://www.instagram.com/rmoreno.w/)
[![Gmail Badge](https://img.shields.io/badge/-rmoreno.w@gmail.com-c14438?style=flat&logo=Gmail&logoColor=white&link=mailto:rmoreno.w@gmail.com)](mailto:rmoreno.w@gmail.com)

---
</br>


## 📝 Licence

This project is under MIT Licence.
<br/><br/>