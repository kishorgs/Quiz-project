let questions = [
  {
    id: 1,
    question: "What is the full form of RAM ?",
    answer: "Random Access Memory",
    options: [
      "Random Access Memory",
      "Randomely Access Memory",
      "Run Aceapt Memory",
      "None of these"
    ]
  },
  {
    id: 2,
    question: "What is the full form of CPU?",
    answer: "Central Processing Unit",
    options: [
      "Central Program Unit",
      "Central Processing Unit",
      "Central Preload Unit",
      "None of these"
    ]
  },
  {
    id: 3,
    question: "What is the full form of E-mail",
    answer: "Electronic Mail",
    options: [
      "Electronic Mail",
      "Electric Mail",
      "Engine Mail",
      "None of these"
    ]
  },
  {
  id: 4,
  question: "What is the full form of smps",
  answer: "Switch mode power supply",
  options: [
  	"Switch mode power supply",
  	"Simple mode power supply",
 	"Sample modal power supply",
  	"None of these"
  ]
  },
  {
  id: 5,
  question: "What is the full form of SMS",
  answer: "Short message service",
  options: [
 	 "Short message service",
 	 "Short message supply",
  	 "Sample mode supply",
 	 "None of these"
  ]
  },
  {
  id: 6,
  question: "What is the full form of USB",
  answer: "Universal serial bus",
  options: [
  	"Universal serial bus",
 	"University school bus ",
 	"Universal sample bus",
  	"Universal super bus"
  ]
  },
  {
  id: 7,
  question: "What is the full form of URL",
  answer: "Universal resource locater",
  options: [
  	"Universal resource locker",
 	"Universal resource locater",
  	"Universal real locater",
  	"None of these"
  ]
  },
  {
  id: 8,
  question: "What is the full form of ROM",
  answer: "Read only memory",
  options: [
 	 "Read once memory",
  	 "Read only memory",
  	 "Read or move",
  	 "Read our memory"
  ]
  },
  {
  id: 9,
  question: "What is the full form of LED",
  answer: "Light emitting diode",
  options: [
  	"Light emitting device",
	"Light energy device",
    "Light emitting diode",
    "None of these"
  ]
  },
  {
  id: 10,
  question: "What is the full form of LCD",
  answer: "Liquid crystal display",
  options: [
  	"Look clear display",
 	"Liquid crystal display",
  	"Liquid content divice",
  	"None of these"
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
    localStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "../../../html_files/end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 10;
    localStorage.setItem("points", points);
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

