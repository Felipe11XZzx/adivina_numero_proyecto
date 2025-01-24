// Calcular número aleatorio entre 1 y 20

const INITIAL_SCORE = 20
const MAX_NUMBER = 20

function initData() {
  let score = INITIAL_SCORE
  let highScore = 0
  let number = Math.trunc(Math.random() * MAX_NUMBER) + 1
}

const messageField = document.querySelector(".message")
const scoreField = document.querySelector(".score")
const highScoreField = document.querySelector(".highscore")
const numberField = document.querySelector(".number")
const checkButton = document.querySelector(".check")
const againButton = document.querySelector(".again")


console.log(messageField)
console.log(scoreField)
console.log("Me cago " + scoreField.textContent)
console.log(highScoreField)

console.log("En: " + highScoreField.textContent)
console.log("La: " + numberField.textContent)
console.log.log("Fucking: " + checkButton.textContent)
console.log("Puta: " + againButton.textContent)
