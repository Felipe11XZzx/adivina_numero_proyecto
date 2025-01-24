// Calcular número aleatorio entre 1 y 20

const INITIAL_SCORE = 20
const MAX_NUMBER = 20

initData()

function initData() {
  let score = INITIAL_SCORE
  let highScore = 0
  let number = Math.trunc(Math.random() * MAX_NUMBER) + 1
}

// Seleccionar todos los elementos del arbol DOM que necesitamos.
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

checkButton.addEventListener("click", checkNumber)

function checkNumber() {
  // Obtenemos el número pulsado.
  // Si no es número que lo corrija.
  // Si es un número y no es correcto. -> Xomprobamos score: ¿Perdemos partida?
  // Si es un número y es correcto. -> Actualizamos nuestras variables y el DOM.

  console.log("Ahora comprobaríamos el número")
}
