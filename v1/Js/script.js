var questions = [
    {
        questions: "How Many Gods has Kratos Defeated", 
        answers: [
            {text: "11", correct: false},
            {text: "23", correct: true},
            {text: "19", correct: false},
            {text: "6", correct: false},
        ]
    },
    {
        questions: "How Many Gods has Kratos Defeated", 
        answers: [
            {text: "11", correct: false},
            {text: "23", correct: false},
            {text: "19", correct: false},
            {text: "6", correct: true},
        ]
    },
    {
        questions: "How Many Gods has Kratos Defeated", 
        answers: [
            {text: "11", correct: false},
            {text: "23", correct: true},
            {text: "19", correct: false},
            {text: "6", correct: false},
        ]
    }

];
var questionsElement = document.getElementById("questions");
var answerButtons = document.getElementById("answer-buttons");
var nextButton = document.getElementById("next-button");

let currentQuestionInedx = 0;
let score = 0;


function startQuiz(){
    currentQuestionInedx = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionInedx];
    let questionsNo = currentQuestionInedx + 1;
    questionsElement.innerHTML = questionsNo + ". " +currentQuestion.questions;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
    });
}

function resetState(){
    nextButton.style.display = "none"
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}


startQuiz();
console.log("Test for Java File")