// Dark mode toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark');
    localStorage.setItem('darkMode', document.body.classList.contains('dark'));
}
if (localStorage.getItem('darkMode') === 'true') document.body.classList.add('dark');

// Flying drone animation enhancement
function enhanceDrone() {
    const drone = document.getElementById('flying-drone');
    if (drone) {
        drone.style.animationDuration = '6s';
        drone.style.filter = 'drop-shadow(0 10px 20px rgba(255,255,255,0.5))';
    }
}

// 10 Drone Quiz Questions (perfect for ICT exhibit)
const questions = [
    { q: "Who leads consumer drone market?", a: "DJI", options: ["Parrot", "Autel", "DJI", "Ryze"] },
    { q: "FPV stands for?", a: "First Person View", options: ["Fast Performance Vehicle", "Flight Path Vector", "First Person View", "Future Pilot Vision"] },
    { q: "Nepal drone weight limit?", a: "25kg", options: ["7kg", "25kg", "50kg", "100kg"] },
    { q: "Drone blades called?", a: "Propellers", options: ["Rotors", "Wings", "Propellers", "Blades"] },
    { q: "Agriculture drone use?", a: "Crop spraying", options: ["Racing", "Filming", "Crop spraying", "Delivery"] },
    { q: "Fastest drone speed?", a: "200+ km/h", options: ["100 km/h", "150 km/h", "200+ km/h", "300 km/h"] },
    { q: "Drone registration in Nepal?", a: "CAAN", options: ["DOT", "MoIT", "CAAN", "NAC"] },
    { q: "Military drone example?", a: "Predator", options: ["DJI Mini", "Predator", "Mavic Air", "Phantom"] },
    { q: "Drone flight time typical?", a: "20-30 minutes", options: ["5-10 min", "20-30 minutes", "1 hour", "2 hours"] },
    { q: "No-fly zone reason?", a: "Airports", options: ["Parks", "Schools", "Airports", "Markets"] }
];

let currentQuestion = 0;
let score = 0;
let timer = 60;
let interval;
let selectedOption = null;

function loadQuestion() {
    const q = questions[currentQuestion];
    document.getElementById('question').innerHTML = `<strong>${q.q}</strong>`;
    document.getElementById('qnum').textContent = currentQuestion + 1;
    
    const opts = document.getElementById('options');
    opts.innerHTML = '';
    q.options.forEach((opt, i) => {
        const div = document.createElement('div');
        div.className = 'option';
        div.textContent = opt;
        div.onclick = () => selectOption(i, div);
        opts.appendChild(div);
    });
    
    document.getElementById('next-btn').disabled = true;
    document.getElementById('result').innerHTML = '';
    
    if (currentQuestion === 0) {
        score = 0;
        document.getElementById('score').textContent = score;
        timer = 60;
        document.getElementById('timer').textContent = timer;
        interval = setInterval(() => {
            timer--;
            document.getElementById('timer').textContent = timer;
            if (timer <= 0) nextQuestion();
        }, 1000);
    }
}

function selectOption(index, elem) {
    document.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
    elem.classList.add('selected');
    selectedOption = index;
    document.getElementById('next-btn').disabled = false;
}

function nextQuestion() {
    clearInterval(interval);
    const q = questions[currentQuestion];
    const result = document.getElementById('result');
    
    if (selectedOption !== null && q.options[selectedOption] === q.a) {
        score++;
        result.innerHTML = '✅ Correct! 🚁';
        result.style.color = '#feca57';
        result.style.background = 'rgba(254,202,87,0.2)';
    } else {
        result.innerHTML = `❌ Wrong! Answer: <strong>${q.a}</strong>`;
        result.style.color = '#ff6b6b';
        result.style.background = 'rgba(255,107,107,0.2)';
    }
    
    document.getElementById('score').textContent = score;
    
    setTimeout(() => {
        currentQuestion = (currentQuestion + 1) % questions.length;
        if (currentQuestion === 0) {
            clearInterval(interval);
            setTimeout(() => {
                alert(`🎉 Quiz Complete!\nFinal Score: ${score}/10\nExcellent ICT exhibit material!`);
                score = 0;
                timer = 60;
                loadQuestion();
            }, 500);
        } else {
            loadQuestion();
        }
    }, 2500);
}

// Initialize
enhanceDrone();
if (document.querySelector('.quiz-container')) loadQuestion();
