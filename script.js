const quizData = [
  {
    question: "Q1: Which planet is known as the Red Planet?",
    a: "Mars",
    b: "Venus",
    c: "Jupiter",
    d: "Saturn",
    correct: "a",
  },
  {
    question: "Q2: What is the largest organ in the human body?",
    a: "Heart",
    b: "Liver",
    c: "Skin",
    d: "Brain",
    correct: "c",
  },
  {
    question: "Q3: Who painted the Mona Lisa?",
    a: "Pablo Picasso",
    b: "Vincent van Gogh",
    c: "Leonardo da Vinci",
    d: "Michelangelo",
    correct: "c",
  },
  {
    question: "Q4: What is the capital city of Australia?",
    a: "Melbourne",
    b: "Sydney",
    c: "Canberra",
    d: "Perth",
    correct: "c",
  },
  {
    question: "Q5: Which country is famous for the Taj Mahal?",
    a: "India",
    b: "China",
    c: "Egypt",
    d: "Brazil",
    correct: "a",
  },
  {
    question: "Q6: What is the chemical symbol for gold?",
    a: "Go",
    b: "Au",
    c: "G",
    d: "Gl",
    correct: "b",
  },
  {
    question: "Q7: Which famous scientist developed the theory of general relativity?",
    a: "Albert Einstein",
    b: "Isaac Newton",
    c: "Marie Curie",
    d: "Stephen Hawking",
    correct: "a",
  },
  {
    question: "Q8: Who wrote the novel 'To Kill a Mockingbird'?",
    a: "Mark Twain",
    b: "Harper Lee",
    c: "George Orwell",
    d: "J.K. Rowling",
    correct: "b",
  },
  {
    question: "Q9: Which country is known as the 'Land of the Rising Sun'?",
    a: "China",
    b: "Japan",
    c: "South Korea",
    d: "Thailand",
    correct: "b",
  },
  {
    question: "Q10: What is the largest ocean on Earth?",
    a: "Atlantic Ocean",
    b: "Indian Ocean",
    c: "Arctic Ocean",
    d: "Pacific Ocean",
    correct: "d",
  },
];
const question = document.querySelector('#question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');

let questionCount = 0;
let score = 0;

const loadQuestions = () => {
  const questionList = quizData[questionCount];
  question.textContent = questionList.question;
  option1.textContent = questionList.a;
  option2.textContent = questionList.b;
  option3.textContent = questionList.c;
  option4.textContent = questionList.d;
};

loadQuestions();

const getCheckedAnswer = () => {
  let answer;
  answers.forEach((currentAnswer) => {
    if (currentAnswer.checked) {
      answer = currentAnswer.id;
    }
  });
  return answer;
};

submit.addEventListener('click', () => {
  const checkedAnswer = getCheckedAnswer();
  if (checkedAnswer === quizData[questionCount].correct) {
    score++;
  }
  questionCount++;
  if (questionCount < quizData.length) {
    loadQuestions();
  } else {
    question.innerHTML = `Your score is: ${score} / ${quizData.length}`;
    document.querySelector('ul').style.display = 'none';
    submit.innerHTML = 'Play Again'
    submit.addEventListener('click', ()=>{
      location.reload()
    })
  }
});

