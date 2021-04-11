const quizData = [
  {
    question: "capital of india",
    a: "Kashmir",
    b: "gujarat",
    c: "delhi",
    d: "mumbai",
    correct: "c",
  },
  {
    question: "most used programming lang in 2020",
    a: "java",
    b: "python",
    c: "javascript",
    d: "c",
    correct: "a",
  },
  {
    question: "what comes after 1",
    a: "0",
    b: "1",
    c: "2",
    d: "3",
    correct: "c",
  },
  {
    question: "president of us?",
    a: "marzia",
    b: "donald trump",
    c: "narendra modi",
    d: "joe",
    correct: "d",
  },
  {
    question: "what does html stands for",
    a: "H T M L",
    b: "hyper text markup language",
    c: "hyper text markup league",
    d: "hyper text markup list",
    correct: "b",
  },
  {
    question: "what year was javascript launched?",
    a: "2020",
    b: "2015",
    c: "1996",
    d: "1995",
    correct: "d",
  },
];

const questionE1 = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAns();
  const currentQuizData = quizData[currentQuiz];
  questionE1.innerText = currentQuizData.question;

  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAns() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      //todo : show result
      quiz.innerHTML = `<h2>you answered correctly at ${score}/${quizData.length}</h2>`;
    }
  }
});
