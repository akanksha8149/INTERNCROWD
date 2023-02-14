
let questions = [
  {
    id: 1,
    question: "What does the abbreviation HTML stand for?",
    answer: "HyperText Markup Language",
    options: [
      "HyperText Markup Language",
      "HighText Markup Language",
      "Hhightext Markdown Language",
      "None of these"
    ]
  },
  {
    id: 2,
    question: "What is the full form of CSS",
    answer: "Cascading Style Sheets",
    options: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Color and Style Sheets",
      "Coloured Special Sheets"
    ]
  },
  {
    id: 3,
    question: "Which of the following keywords is used to define a variable in Javascript?",
    answer: "Both A and B",
    options: [
      "var",
      "let",
      "Both A and B",
      "None of these"
    ]
  },
  {
    id: 4,
    question: "What is the smallest header in HTML by default?",
    answer: "h6",
    options: [
      "h1",
      "h3",
      "h4",
      "h6"
    ]
  },
  {
    id: 5,
    question: "How can we change the text color of an element?",
    answer: "color",
    options: [
      "background-color",
      "color",
      "Both A and B",
      "text-color"
    ]
  }
];

let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};

function next() {

   
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
