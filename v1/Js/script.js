
var timer;
var timerCount;
var startButton = document.querySelector(".start-button") //more testing
var isWin = false

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
        questions: "How Tall Am I", 
        answers: [
            {text: "11", correct: false},
            {text: "23", correct: false},
            {text: "19", correct: false},
            {text: "6ft 3", correct: true},
        ]
    },
    {
        questions: "What Lanuage creates this functionailty", 
        answers: [
            {text: "CSS", correct: false},
            {text: "HMTL", correct: false},
            {text: "JAVA", correct: true},
            {text: "APIs", correct: false},
        ]
    },
    {
        questions: "What Lanuage creates this functionailty", 
        answers: [
            {text: "CSS", correct: false},
            {text: "HMTL", correct: false},
            {text: "JAVA", correct: true},
            {text: "APIs", correct: false},
        ]
    }

];
var questionsElement = document.getElementById("questions");
var answerButtons = document.getElementById("answer-buttons");
var nextButton = document.getElementById("next-button");
var timerElement = document.querySelector(".timer-count")
var startButton = document.querySelector(".start-button")

let currentQuestionInedx = 0;
let score = 0;

function startGame(){
    isWin = false
    startButton = true;
    startTimer
    startTimer()
}


function startQuiz(){
    currentQuestionInedx = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    timerCount = 30;
    showQuestion();
    startTimer();
}
function startTimer(){
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount
        if (timerCount === 0){
            clearInterval(timer)
        }
    },1000)
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
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none"
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}


function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block"
}


function showScore(){
    resetState();
    var endQuizArea=document.getElementById("scorecard")

    questionsElement.innerHTML = `You scored ${score} out of ${questions.length}!`
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
    endQuizArea.classList.remove("hide")
}




function handleNextButton(){
    currentQuestionInedx++ //++ increases index by 1
    if(currentQuestionInedx < questions.length){
        showQuestion();
    }else{
        showScore();
    }

}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionInedx < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startButton.addEventListener("click", startQuiz)
console.log("Test for Java File")