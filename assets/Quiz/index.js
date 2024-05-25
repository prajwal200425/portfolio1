const questions = [
  {
    questions: "What dose HTML stands for?",
    answers: [
      { Text: "Hypertext multi language", correct: false },
      { Text: "Hypertext Markup language", correct: true },
      { Text: "Hypertext multiple language", correct: false },
      { Text: "Home text multi language", correct: false },
    ],
  },
  {
    questions: "What dose XML stands for?",
    answers: [
      { Text: "Excellent Multiple Language", correct: false },
      { Text: "Explore Multiple Language", correct: false },
      { Text: "Extra Markup Language", correct: false },
      { Text: "Extensible Markup Language", correct: true },
    ],
  },
  {
    questions: "what dose SQl stands for ?",
    answers: [
      { Text: "Strength Query Language ", correct: false },
      { Text: "Structured Query Language", correct: true },
      { Text: "Science Question language", correct: false },
      { Text: "Stylesheet Query language", correct: false },
    ],
  },
  {
    questions: "What dose CSS stands for?",
    answers: [
      { Text: "Cascading style Sheet", correct: true },
      { Text: "Cute Style Sheet", correct: false },
      { Text: "Computer style Sheet", correct: false },
      { Text: "Code style sheet", correct: false },
    ],
  },
  {
    questions: "What dose PHP stands for?",
    answers: [
      { Text: "Hypertext multi language", correct: false },
      { Text: "HomeText Programming", correct: false },
      { Text: "Hypertext Programming", correct: false },
      { Text: "Hypertext Preprocessor", correct: true },
    ],
  },
];

const QuestionElement = document.getElementById("question");
const AnswerButton = document.getElementById("answer-buttons");
const NextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  NextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetQ();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  QuestionElement.innerHTML = questionNo + ". " + currentQuestion.questions;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.Text;
    button.classList.add("btn");
    AnswerButton.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}
function resetQ() {
  NextButton.style.display = "none";
  while (AnswerButton.firstChild) {
    AnswerButton.removeChild(AnswerButton.firstChild);
  }
}
function selectAnswer(e) {
  const selectedbtn = e.target;
  const isCorrect = selectedbtn.dataset.correct === "true";
  if (isCorrect) {
    selectedbtn.classList.add("correct");
    score++;
  } else {
    selectedbtn.classList.add("incorrect");
  }
  Array.from(AnswerButton.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  NextButton.style.display = "block";
}

function showScore() {
  resetQ();
  QuestionElement.innerHTML = `Your Score is ${score} out of ${questions.length}.`;
  NextButton.innerHTML = "Play Again";
  NextButton.style.display = "block";
}
function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

NextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
