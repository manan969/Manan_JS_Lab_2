// Quiz data (questions, choices, and correct answers)
const quizData = [
    {
        question: "What is the capital of France?",
        choices: ["Paris", "London", "Berlin", "Madrid"],
        correctAnswer: 0
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Mars", "Jupiter", "Saturn", "Earth"],
        correctAnswer: 0
    },
    {
        question: "Who wrote 'Harry Potter' series?",
        choices: ["J.K. Rowling", "Stephen King", "George R.R. Martin", "J.R.R. Tolkien"],
        correctAnswer: 0
    }
    // Add more questions as needed
];

const quiz = document.getElementById('quiz');
const questionElement = document.getElementById('question');
const choiceElements = [
    document.getElementById('choice0'),
    document.getElementById('choice1'),
    document.getElementById('choice2'),
    document.getElementById('choice3')
];
const progressElement = document.getElementById('progress');

let currentQuestionIndex = 0;
let score = 0;

// Function to initialize the quiz
function initializeQuiz() {
    showQuestion();
}

// Function to display current question and choices
function showQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    currentQuestion.choices.forEach((choice, index) => {
        choiceElements[index].textContent = choice;
    });
    updateProgress();
}

// Function to update progress indicator
function updateProgress() {
    progressElement.textContent = `Question ${currentQuestionIndex + 1} of ${quizData.length}`;
}

// Function to handle user's choice selection
function selectChoice(choiceIndex) {
    const correctAnswerIndex = quizData[currentQuestionIndex].correctAnswer;

    if (choiceIndex === correctAnswerIndex) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// Function to display quiz result
function showResult() {
    quiz.innerHTML = `
        <h1>Quiz Results</h1>
        <p>You scored ${score} out of ${quizData.length}.</p>
    `;
}

// Event listeners for choice buttons
choiceElements.forEach((choiceElement, index) => {
    choiceElement.addEventListener('click', () => {
        selectChoice(index);
    });
});

// Initialize quiz
initializeQuiz();
