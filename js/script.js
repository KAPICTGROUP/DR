// Drone Quiz Data (5 Nepal-relevant questions)
const droneQuiz = [
    { q: "What does UAV stand for?", a: "Unmanned Aerial Vehicle", b: "Underwater Air Vehicle", c: "Urban Air Vehicle", d: "Unique Air View", correct: "a" },
    { q: "Drones help Nepal with?", a: "Gaming only", b: "Agriculture & Disaster Relief", c: "Traffic control", d: "Movie making", correct: "b" },
    { q: "Famous drone brand?", a: "Samsung", b: "DJI", c: "Apple", d: "Sony", correct: "b" },
    { q: "Drones fly using?", a: "Wheels", b: "Propellers", c: "Jet engines", d: "Rockets", correct: "b" },
    { q: "Biggest drone challenge?", a: "Too expensive", b: "Short battery life", c: "Too slow", d: "Heavy weight", correct: "b" }
    { q: "Which early military technology is most directly considered a predecessor of modern unmanned aerial vehicles (UAVs)?", a: "Hot air balloons used for entertainment shows", b: "Manned biplanes used in World War I", c: "Weather balloons used for atmospheric measurements", d: "V-1 flying bombs used in World War II", correct: "d" }
]; { q: "A conservation group in Nepal wants to monitor glacier melt in the Himalayas with minimal disturbance to wildlife. Which drone setup is most appropriate for this long-term environmental monitoring task?", a: "
Long-endurance fixed-wing drones with environmental sensors and scheduled flights at set intervals", b: "
Heavy-lift cargo drones regularly landing on glaciers to collect ice samples", c: "Small multirotor drones doing frequent low-altitude flights over the same paths all day", d: "
High-speed racing drones flown manually by hobbyists to capture quick video clips", correct: "a" }

", correct: "a" }

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
