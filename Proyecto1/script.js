// Calcular número aleatorio entre 1 y 20

const INITIAL_SCORE = 20
const MAX_NUMBER = 20

let score, highScore, number

// El estado de mi aplicación se basa en:
// - number: Número aleatorio entre 1 y 20.
// - score.
// - highScore: Puntuación máxima.

initData()

function initData() {
  score = INITIAL_SCORE
  highScore = 0
  number = Math.trunc(Math.random() * MAX_NUMBER) + 1
}

// Seleccionar todos los elementos del arbol DOM que necesitamos.
const messageField = document.querySelector(".message")
const scoreField = document.querySelector(".score")
const guessField = document.querySelector(".guess")
const highScoreField = document.querySelector(".highscore")
const numberField = document.querySelector(".number")
const checkButton = document.querySelector(".check")
const againButton = document.querySelector(".again")

console.log(messageField)
console.log(scoreField)
console.log(scoreField.textContent)
console.log(highScoreField)
console.log(highScoreField.textContent)
console.log(numberField.textContent)
console.log(checkButton.textContent)
console.log(againButton.textContent)

checkButton.addEventListener("click", checkNumber)

function checkNumber() {
  // Obtenemos el número pulsado.
  const guessPuntuation = Number(guessField.value)
  // Si no es número que lo corrija Y tiene que estar entre 1 y 20.
  if (!guessPuntuation || guessPuntuation < 1 || guessPuntuation > 20) {
    messageField.textContent = "El numero debe estar entre 1 y 20"
  } else if (guessPuntuation === number) {
    messageField.textContent = "Correcto!"
  } else if (guessPuntuation > number) {
    messageField.textContent = "¡El Número es Menor!"
    score--
    scoreField.textContent = score
  } else if (guessPuntuation < number) {
    messageField.textContent = "¡El Número es Mayor!"
    score--
    scoreField.textContent = score
  } else {
    messageField.textContent = "El numero debe estar entre 1 y 20"
  }

  // Si es un número y no es correcto. -> Comprobamos score: ¿Perdemos partida?

  // Si es un número y es correcto. -> Actualizamos nuestras variables y el DOM.
  console.log("Ahora comprobaríamos el número: " + guessPuntuation)
}
