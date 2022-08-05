/* Get button element and add event listener to them */
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }
    document.getElementById("answer-box").addEventListener("keydown",function(event){
        if( event.key === 'Enter'){
            checkAnswer();
        }
    });
    runGame("addition");
})
/**
 * The maim game loop is called when the script is first loaded 
 * and after that user answer has been processed
 */
function runGame(gameType) {
    let userInput = document.getElementById("answer-box");
    userInput.focus();
    userInput.innerText=''
    // create two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
    if (gameType === "addition") {
        displayAditionQuestion(num1, num2);
    } else if (gameType === "subtract") {
        displaySubstrationQuestion(num1,num2);
    } else if (gameType === "multiply") {
        displayMultiplicationQuestion(num1,num2);
    } else if (gameType === "division") {
        displayDivisionQuestion(num1,num2);
    } else {
        alert(`Unknow game type :${gameType}`);
        throw `Unknow game type : ${gameType}.Aborting!`;
    }
}
/**
 * Get the two random numbers and create 
 * add question to user
 * @param {*} operand1 
 * @param {*} operand2 
 */
function displayAditionQuestion(operand1, operand2) {
    document.getElementById('oprand1').textContent = operand1;
    document.getElementById('oprand2').textContent = operand2;
    document.getElementById('operator').textContent = '+';
}

function displaySubstrationQuestion(operand1,operand2) {

}

function displayMultiplicationQuestion(operand1,operand2) {

}

function displayDivisionQuestion(operand1,operand2) {

}

function checkAnswer() {
    let userAnswer = parseInt( document.getElementById("answer-box").value );
    let calculatedAnswer = calculateCorrectAnswer();
    if( userAnswer === calculatedAnswer[0]){
        alert("Congrajulation your answer is correct")
        incrementScore();
    } else {
        alert(`Your answer is : ${userAnswer} : expected answer is : ${calculatedAnswer[0]}`);
        incrementWrongAnswer();
    }
    runGame(calculatedAnswer[1]);
}
/**
 * Get the values directily from the DOM and 
 * return the correct answer
 */
function calculateCorrectAnswer() {
    let oprand1 = parseInt(document.getElementById("oprand1").innerText);
    let oprand2 = parseInt(document.getElementById("oprand2").innerText);
    let operator = document.getElementById('operator').innerText;
    if (operator === '+') {
        return [oprand1 + oprand2, "addition"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}.Aborting!`;
    }
}
/**
 * Read the score from DOM and increment by one 
 * update back to DOM
 */
function incrementScore() {
    let scoreElement = document.getElementById("score");
    scoreElement.innerText = ++(scoreElement.innerText);
}
/**
 * Read the score from DOM and increment the value by one
 * update the score back in DOM
 */
function incrementWrongAnswer() {
    let scoreElement = document.getElementById("incorrect");
    scoreElement.innerText = ++(scoreElement.innerText);
}