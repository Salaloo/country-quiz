const difficulty = document.querySelectorAll(".difficulty");
const gameBoard = document.querySelector("#gameboard");
const questionDiv = document.querySelector("#question");
const backButton = document.querySelector('#backBtn')
const correct = document.querySelector('#correct')
const input = document.querySelector('input')
const image = document.querySelector('img')
const incorrect = document.querySelector('#incorrect')
const done = document.querySelector("#done")
const another = document.querySelector('#another')
const scoreTag = document.querySelector('#score')
const completedContainer = document.querySelector(".countries-completed")
const winLose = document.querySelector('#winLose')

let score = 0
let lvl;
const completedCountries = []
let currentQuestion;
let wrongs = 0;

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
    image: "./imgs/easy/usa.jpg",
  },
  {
    name: "mexico",
    image: "./imgs/easy/mexico.jpg",
  }
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


for (let i = 0; i < difficulty.length; i++) {
  difficulty[i].addEventListener("click", (e) => {
    gameBoard.classList.toggle("hidden");
    displayQuestion(e.target.innerText);
  });
}


function displayQuestion(level) {
  lvl=level
  if (level === "Easy") {
    if (!easyQuestions.length) {
      done.className = "shown"
      return
    }
    let randomIdx = Math.floor(easyQuestions.length * Math.random())
    currentQuestion = easyQuestions.splice(randomIdx, 1)[0]
    image.src = currentQuestion.image;
    image.alt= currentQuestion.name
  } else if (level === "Medium") {
    if (!mediumQuestions.length) {
      done.className = "shown"
      return
    }
    let randomIdx = Math.floor(mediumQuestions.length * Math.random())
    currentQuestion = mediumQuestions.splice(randomIdx, 1)[0]
    image.src = currentQuestion.image;
    image.alt= currentQuestion.name
  } else {
    if (!hardQuestions.length) {
      done.className = "shown"
      return
    }
    let randomIdx = Math.floor(hardQuestions.length * Math.random())
    currentQuestion = hardQuestions.splice(randomIdx, 1)[0]
    image.src = currentQuestion.image;
    image.alt= currentQuestion.name
  }
  questionDiv.className="shown";
}


backButton.addEventListener('click', () => {
  gameBoard.classList.toggle("hidden");
  questionDiv.classList.toggle("hidden");
  questionDiv.classList.toggle("shown");
  correct.className='hidden'
  incorrect.className='hidden'
  done.className = 'hidden'
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
      if(score > 19){
        winLose.innerText='You win!!!'
      }
      completedCountries.push(currentQuestion)
      displayCompleted()
      displayQuestion(lvl)
    }
    else{
      correct.className = 'hidden'
      incorrect.className='shown'
      score--
      wrongs++
      if(wrongs > 3){
        winLose.innerText='You lose'
      }
      scoreTag.innerHTML = `your score so far: ${score}`
    }
    input.value = ''
  }
})


function displayCompleted(){
  let countryHTML = `
    <div class="completed-items">
      <img src="${currentQuestion.image}" alt="${currentQuestion.name}">
      <p>${currentQuestion.name}</p>
    </div>
  `

  completedContainer.insertAdjacentHTML("beforeend", countryHTML)
}