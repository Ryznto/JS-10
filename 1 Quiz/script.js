let questions = [
        "apa hukum mencuri dalam islam?",
        "pada tanggal berapa dan tahun berapa indonesia merdeka?",
        "Apa arti singkatan dari IKN?",
        "Siapakah presiden pertama Indonesia?",
        "Berapa hasil dari 110 + 10?"
];

let correctAnswers = [
    "haram",
    "17 agustus 1945",
    "Ibu kota nusantara",
    "Soekarno",
    "120"
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    document.getElementById("question").innerHTML = questions[currentQuestion];
}

function checkAnswer() {
    let userAnswer = document.getElementById("answer").value.toLowerCase();
    let correctAnswer = correctAnswers[currentQuestion].toLowerCase();

    if (userAnswer === correctAnswer) {
        score++;
        document.getElementById("result").innerHTML = "Jawaban Anda benar!";
    } else {
        document.getElementById("result").innerHTML = "Jawaban Anda salah.";
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
        document.getElementById("answer").value = "";
    } else {
        endQuiz();
    }

    document.getElementById("score").innerHTML = score;
}

function endQuiz() {
    document.getElementById("question").innerHTML = "Kuis Selesai!";
    document.getElementById("answer").style.display = "none";
    document.getElementById("result").style.display = "none";
}

loadQuestion();