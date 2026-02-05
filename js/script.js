// Nav highlight
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        if (link.href === window.location.href) link.style.background = '#0056b3';
    });
});

// Quiz data (drone-themed, 5 questions)
const droneQuiz = [
    { question: "What does UAV stand for?", optionA: "Unmanned Aerial Vehicle", optionB: "Underwater Air Vehicle", optionC: "Urban Air Vehicle", optionD: "Unique Aerial View", correctOption: "optionA" },
    { question: "Main use of drones in Nepal?", optionA: "Gaming only", optionB: "Disaster relief and farming", optionC: "Cooking", optionD: "Music", correctOption: "optionB" },
    { question: "DJI is a famous brand for?", optionA: "Phones", optionB: "Drones", optionC: "Cars", optionD: "Bikes", correctOption: "optionB" },
    { question: "Drones use what for flight?", optionA: "Wheels", optionB: "Propellers", optionC: "Sails", optionD: "Rockets", correctOption: "optionB" },
    { question: "Battery life challenge for drones?", optionA: "Too long", optionB: "Short flight time", optionC: "Too heavy", optionD: "Noisy", correctOption: "optionB" }
];
let quizIndex = 0, quizScore = 0;
// Quiz functions (adapted from tutorial) - full impl on quiz.html
function loadQuizQuestion() { /* Populate from droneQuiz */ }
