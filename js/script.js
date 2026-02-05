// Drone Quiz Data (5 Nepal-relevant questions)
const droneQuiz = [
    { q: "What does UAV stand for?", a: "Unmanned Aerial Vehicle", b: "Underwater Air Vehicle", c: "Urban Air Vehicle", d: "Unique Air View", correct: "a" },
    { q: "Drones help Nepal with?", a: "Gaming only", b: "Agriculture & Disaster Relief", c: "Traffic control", d: "Movie making", correct: "b" },
    { q: "Famous drone brand?", a: "Samsung", b: "DJI", c: "Apple", d: "Sony", correct: "b" },
    { q: "Drones fly using?", a: "Wheels", b: "Propellers", c: "Jet engines", d: "Rockets", correct: "b" },
    { q: "Biggest drone challenge?", a: "Too expensive", b: "Short battery life", c: "Too slow", d: "Heavy weight", correct: "b" }
];

let currentQuiz = 0, score = 0, selectedAnswer = '';

// Navigation highlight
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        if (link.href === location.href) link.classList.add('active');
    });
});

// FULL QUIZ FUNCTIONS
function loadQuizQuestion() {
    if (currentQuiz >= droneQuiz.length) {
        showQuizResult();
        return;
    }
    document.getElementById('quiz-question').textContent = droneQuiz[currentQuiz].q;
    document.getElementById('optA').textContent = droneQuiz[currentQuiz].a;
    document.getElementById('optB').textContent = droneQuiz[currentQuiz].b;
    document.getElementById('optC').textContent = droneQuiz[currentQuiz].c;
    document.getElementById('optD').textContent = droneQuiz[currentQuiz].d;
    document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
    document.getElementById('next-btn').textContent = currentQuiz === droneQuiz.length - 1 ? 'Finish!' : 'Next';
}

function selectOption(selected) {
    selectedAnswer = selected;
    document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
    event.target.parentElement.classList.add('selected');
}

function nextQuiz() {
    if (!selectedAnswer) return alert('Select an answer!');
    
    if (selectedAnswer === droneQuiz[currentQuiz].correct) score++;
    document.getElementById('quiz-score').textContent = score;
    
    currentQuiz++;
    selectedAnswer = '';
    loadQuizQuestion();
}

function showQuizResult() {
    document.getElementById('quiz-container').innerHTML = `
        <h2>🎉 Quiz Complete!</h2>
        <div style="font-size:2rem; color:#28a745; margin:2rem 0;">Your Score: ${score}/${droneQuiz.length}</div>
        <button class="btn" onclick="location.reload()">Play Again</button>
    `;
}

// Game controls (spacebar restart)
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        document.querySelector('.drone').style.animation = 'none';
        setTimeout(() => {
            document.querySelector('.drone').style.animation = 'flyPath 15s linear infinite';
        }, 10);
    }
});
