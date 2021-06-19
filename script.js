const Question = document.querySelector(".question");
const ans1 = document.querySelector("#option1");
const ans2 = document.querySelector("#option2");
const ans3 = document.querySelector("#option3");
const ans4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const score = document.querySelector("#showScore");

const answers = document.querySelectorAll(".answer");

const quizDB = [
  {
    question: "Q1: What is the full form of html?",
    a: "Hello to my land",
    b: "Hey text markup language",
    c: "HyperText Markup language",
    d: "HyperText MakeUp language",
    ans: "ans3",
  },
  {
    question: "Q2: what is the full form of css?",
    a: "Cascading Style sheets",
    b: "Cascading style Sheep",
    c: "Cartoon style Sheets",
    d: "Cascading Super Sheets",
    ans: "ans1",
  },
  {
    question: "Q3: what is the full form HTTP?",
    a: "Hypertext Transfer product",
    b: "HyperText Test Protocol",
    c: "Hey transfer protocol",
    d: " HyperText Transfer Protocol",
    ans: "ans4",
  },
];
let ScoreCount = 0;
let questionCount = 0;

function displayQuestions() {
  const questionList = quizDB[questionCount];
  Question.textContent = questionList.question;
  ans1.innerHTML = questionList.a;
  ans2.textContent = questionList.b;
  ans3.textContent = questionList.c;
  ans4.textContent = questionList.d;
}

displayQuestions();

function getCheckAnswer() {
  let answer;
  answers.forEach((curAnsEle) => {
    if (curAnsEle.checked) {
      answer = curAnsEle.id;

    };
   });
  return answer;
  
}


const  unCheckedAll= () => {answers.forEach((curAnsEle)=> curAnsEle.checked = false)}





submit.addEventListener("click", () => {
  const checkAnswer = getCheckAnswer();

   if(checkAnswer=== undefined){
      alert('atleast select one answer');
       questionCount = 0;
      
   }


  if (checkAnswer == quizDB[questionCount].ans){
    ScoreCount++;
    }
  
  unCheckedAll()

  questionCount++;
  if (questionCount < quizDB.length) {
    displayQuestions();
  } else {
    score.innerHTML = `
      <h3> You Scored ${ScoreCount}/${quizDB.length} <h3>
      <button class ="btn" onclick = "location.reload()">Play Again</button> `;

    score.classList.remove("scoreArea");

  
  }
});
