const difficulty = document.querySelectorAll(".difficulty");
const gameBoard = document.querySelector("#gameboard");
const questionDiv = document.querySelector("#question");
const backButton = document.querySelector('#backBtn')
const correct = document.querySelector('#correct')
const input = document.querySelector('input')
const image = document.querySelector('img')
const incorrect = document.querySelector('#incorrect')
const another = document.querySelector('#another')
const scoreTag = document.querySelector('#score')

let score = 0
let lvl;

let easyQuestions = [
  {
    name: "china",
    image: "./imgs/easy/china.png",
  },
  {
    name: "india",
    image: "./imgs/easy/india.png",
  },
  {
    name: "uk",
    image: "./imgs/easy/uk.png",
  },
  {
    name: "america",
    image: "./imgs/easy/usa.png",
  },
];
let mediumQuestions = [
  {
    name: "france",
    image: "./imgs/Medium/france.png",
  },
  {
    name: "spain",
    image: "./imgs/Medium/spain.png",
  },
  {
    name: "germany",
    image: "./imgs/Medium/germany.png",
  },
  {
    name: "australia",
    image: "./imgs/Medium/australia.png",
  },
  {
    name: "canada",
    image: "./imgs/Medium/canada.png",
  },
  {
    name: "italy",
    image: "./imgs/Medium/italy.jpg",
  },
  {
    name: "japan",
    image: "./imgs/Medium/japan.png",
  },
  {
    name: "russia",
    image: "./imgs/Medium/russia.png",
  },
]
let hardQuestions = [
  {
    name: "bangladesh",
    image: "./imgs/Hard/bangladesh.png",
  },
  {
    name: "burma",
    image: "./imgs/Hard/burma.png",
  },
  {
    name: "lebanon",
    image: "./imgs/Hard/lebanon.png",
  },
  {
    name: "afghanistan",
    image: "./imgs/Hard/afghanistan.png",
  },
  {
    name: "indonesia",
    image: "./imgs/Hard/indonesia.png",
  },
  {
    name: "malaysia",
    image: "./imgs/Hard/new zealand.png",
  },
  {
    name: "pakistan",
    image: "./imgs/Hard/pakistan.png",
  },
  {
    name: "portugal",
    image: "./imgs/Hard/portugal.png",
  },
  {
    name: "singapore",
    image: "./imgs/Hard/singapore.png",
  },
  {
    name: "south korea",
    image: "./imgs/Hard/south korea.jpg",
  }
]
let solved = [

]
let unsolved = [

]
for (let i = 0; i < difficulty.length; i++) {
  difficulty[i].addEventListener("click", (e) => {
    gameBoard.classList.toggle("hidden");
    displayQuestion(e.target.innerText);
  });
}


function displayQuestion(level) {
  lvl=level
  if (level === "Easy") {
    let randomIdx = Math.floor(easyQuestions.length * Math.random())
    image.src = easyQuestions[randomIdx].image;
    image.alt= easyQuestions[randomIdx].name
  } else if (level === "Medium") {
    let randomIdx = Math.floor(mediumQuestions.length * Math.random())
    image.src = mediumQuestions[randomIdx].image;
    image.alt= mediumQuestions[randomIdx].name
  } else {
    let randomIdx = Math.floor(hardQuestions.length * Math.random())
    image.src = hardQuestions[randomIdx].image;
    image.alt= hardQuestions[randomIdx].name
  }
  questionDiv.className="shown";
}


backButton.addEventListener('click', () => {
  gameBoard.classList.toggle("hidden");
  questionDiv.classList.toggle("hidden");
  questionDiv.classList.toggle("shown");
  correct.className='hidden'
  incorrect.className='hidden'
})

another.addEventListener('click', () => {
  displayQuestion(lvl);
})

input.addEventListener('keypress', (e) => {
  if (e.key==='Enter'){
    if (image.alt===input.value) {
      incorrect.className = 'hidden'
      correct.className='shown'
      score++
      scoreTag.innerHTML = `your score so far: ${score}`
      displayQuestion(lvl)
    }
    else{
      correct.className = 'hidden'
      incorrect.className='shown'
      score--
      scoreTag.innerHTML = `your score so far: ${score}`
    }
    input.value = ''
  }
})

