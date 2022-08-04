/* Get button element and add event listener to them */
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked submit")
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }
    runGame("addition");
})
/**
 * The maim game loop is called when the script is first loaded 
 * and after that user answer has been processed
 */
function runGame(gameType) {
    // create two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
    if (gameType === "addition") {
        displayAditionQuestion(num1, num2);
    } else {
        alert(`Unknow game type :${gameType}`);
        throw `Unknow game type : ${gameType}.Aborting!`;
    }
}

function displayAditionQuestion(operand1, operand2) {
    document.getElementById('oprand1').textContent = operand1;
    document.getElementById('oprand2').textContent = operand2;
    document.getElementById('operator').textContent = '+';
}

function displaySubstrationQuestion() {

}

function displayMultiplicationQuestion() {

}

function displayDivisionQuestion() {

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}