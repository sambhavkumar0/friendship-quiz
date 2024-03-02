const quizData = [
    {
       
    },
    {
        
    },
    // Add more quiz questions here...
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const feedbackElement = document.getElementById("feedback");

    questionElement.textContent = currentQuestion.question;

    optionsElement.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.setAttribute("data-index", index);
        optionsElement.appendChild(button);
    });

    feedbackElement.textContent = "";
}

function checkAnswer(selectedOption) {
    const selectedOptionIndex = parseInt(selectedOption.getAttribute("data-index"));
    const currentQuestion = quizData[currentQuestionIndex];

    if (currentQuestion.options[selectedOptionIndex] === currentQuestion.correctAnswer) {
        document.getElementById("feedback").textContent = "Correct!";
        score++;
    } else {
        document.getElementById("feedback").textContent = "Incorrect!";
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz").innerHTML = `<h2>Quiz Completed!</h2><div id="score">Score: ${score}/${quizData.length}</div>`;
}

loadQuestion();
