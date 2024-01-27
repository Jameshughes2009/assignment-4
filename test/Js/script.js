var questions = [
    {
        questions: "Choose the correct HTML element for the largest heading", 
        answers: [
            {text: "h6", correct: false},
            {text: "h1", correct: true},
            {text: "head", correct: false},
            {text: "heading", correct: false},
        ]
    },
    {
        questions: "Which operator can be used to compare two values?", 
        answers: [
            {text: "=", correct: false},
            {text: "><", correct: false},
            {text: "<>", correct: false},
            {text: "==", correct: true},
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
        questions: "How do you insert a comment in a CSS file?", 
        answers: [
            {text: "/* this is a comment */", correct: true},
            {text: "' this is a comment", correct: false},
            {text: "// this is a comment", correct: false},
            {text: "// this is a comment //", correct: false},
        ]
    },
    {
        questions: " Bonus - How Many Gods has Kratos Defeated", 
        answers: [
            {text: "11", correct: false},
            {text: "23", correct: true},
            {text: "19", correct: false},
            {text: "6", correct: false},
        ]
    },

];
var questionsElement = document.getElementById("questions");
var answerButtons = document.getElementById("answer-buttons");
var nextButton = document.getElementById("next-button");
console.log (nextButton)

let currentQuestionInedx = 0;
let score = 0;


function startQuiz(){
    currentQuestionInedx = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    timerCount = 10;
    showQuestion();
    startTimer();
}
function startTimer(){
    timer = setInterval(function() {
        if (timerCount>=0){
            return;
        }
    })
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
        console.log (button)
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
    questionsElement.innerHTML = `You scored ${score} out of ${questions.length}!`
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
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

startQuiz();
console.log("Test Changes and commits")