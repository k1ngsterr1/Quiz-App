let trueBtn = document.getElementById("true");
let falseBtn = document.getElementById("false");
let nextBtn = document.getElementById("next");
let startBtn = document.getElementById("start");
let quizText = document.querySelector(".quiz");
let arrayQuestions = [
  {
    question: "Mars has two kinds of motion.",

    answers: {
      green: true,
      red: false,
    },

    correctAnswer: "green",
  },
  {
    question:
      "A meteor would burn up more rapidly in the atmosphere of Mars than it would passing through the Earth’s atmosphere.",

    answers: {
      green: true,
      red: false,
    },
    correctAnswer: "red",
  },
  {
    question:
      "The path of a light ray can be bent as it travels past a massive object.",

    answers: {
      green: true,
      red: false,
    },
    correctAnswer: "green",
  },
  {
    question: "The wavelength of red light is shorter than that of blue light.",
    answers: {
      green: true,
      red: false,
    },
    correctAnswer: "red",
  },
  {
    question: "A rubber band stores potential energy when stretched.",
    answers: {
      green: true,
      red: false,
    },
    correctAnswer: "green",
  },
];

let usedQuestions = [];

function start() {
  let random_pattern = Math.floor(
    Math.random() * arrayQuestions(question).length
  );
  let random_question = arrayQuestions[random_pattern];
  usedQuestions.push(random_question);
  arrayQuestions.splice(random_pattern, 1);
  quizText.textContent = random_question;
  startBtn.style.visibility = "hidden";
  trueBtn.style.visibility = "visible";
  nextBtn.style.visibility = "visible";
  falseBtn.style.visibility = "visible";
}

function next() {
  let random_pattern = Math.floor(Math.random() * arrayQuestions.length);
  let random_question = arrayQuestions[random_pattern];
  usedQuestions.push(random_question);
  arrayQuestions.splice(random_pattern, 1);
  quizText.textContent = random_question;
}
