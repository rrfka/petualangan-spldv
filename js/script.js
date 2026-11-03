
// =========================================
// 1. DATA PROGRES DAN VARIABEL GAME
// =========================================

const STORAGE_KEY = "petualanganSPLDV_v2";

let progress = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
    unlocked: 1,
    completed: [],
    stars: {},
    score: 0
};

let currentLevel = 1;
let selectedAnswer = null;
let attempts = 0;
let lives = 5;
let answered = false;
let gameOver = false;
let hintUsed = false;


// =========================================
// 2. NAVIGASI HALAMAN
// =========================================

function showPage(pageId) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");

    if (pageId === "map") {
        renderMap();
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// =========================================
// 3. MENYIMPAN PROGRES
// =========================================

function saveProgress() {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(progress)
    );
}


// =========================================
// 4. PESAN KARAKTER MATHO
// =========================================

function updateMascotMessage(message) {
    const mascotMessage = document.getElementById("mascotMessage");

    if (mascotMessage) {
        mascotMessage.textContent = message;
    }
}


// =========================================
// 5. EFEK SIHIR KETIKA JAWABAN BENAR
// =========================================

function showMagicBurst() {
    const symbols = ["✨", "⭐", "🌟", "💫", "🪄"];

    for (let i = 0; i < 18; i++) {
        const particle = document.createElement("span");

        particle.className = "magic-burst";

        particle.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        particle.style.left =
            (40 + Math.random() * 20) + "%";

        particle.style.top =
            (40 + Math.random() * 20) + "%";

        particle.style.animationDelay =
            (Math.random() * 0.3) + "s";

        document.body.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 1200);
    }
}


// =========================================
// 6. MEMBUAT PETA PETUALANGAN
// =========================================

function renderMap() {
    const map = document.getElementById("levelMap");

    if (!map) return;

    map.innerHTML = "";

    const totalStars = Object.values(progress.stars)
        .reduce((total, value) => total + value, 0);

    document.getElementById("totalStars").textContent = totalStars;
    document.getElementById("totalScore").textContent = progress.score;

    document.getElementById("completedCount").textContent =
        progress.completed.length + "/12";

    const worlds = [
        {
            name: "🌳 HUTAN PENGETAHUAN",
            subtitle: "Dunia 1 • Tingkat Mudah",
            start: 1,
            end: 4,
            className: "forest",
            description: "Mulailah perjalananmu di hutan penuh misteri!"
        },
        {
            name: "🌊 LAUTAN PERSAMAAN",
            subtitle: "Dunia 2 • Tingkat Sedang",
            start: 5,
            end: 8,
            className: "sea",
            description: "Arungi lautan dan pecahkan persamaan!"
        },
        {
            name: "🏰 KASTEL MASTER SPLDV",
            subtitle: "Dunia 3 • Tingkat Sulit",
            start: 9,
            end: 12,
            className: "castle",
            description: "Taklukkan tantangan terakhir di kastel!"
        }
    ];

    worlds.forEach(world => {
        const section = document.createElement("div");

        section.className = `world-section ${world.className}`;

        // Dekorasi animasi setiap dunia
        const effects = document.createElement("div");

        effects.className =
            `world-effects ${world.className}-effects`;

        effects.setAttribute("aria-hidden", "true");

        if (world.className === "forest") {
            effects.innerHTML = `
                <span class="firefly firefly-1">✨</span>
                <span class="firefly firefly-2">✨</span>
                <span class="firefly firefly-3">✨</span>
                <span class="leaf leaf-1">🍃</span>
                <span class="leaf leaf-2">🌿</span>
            `;
        } else if (world.className === "sea") {
            effects.innerHTML = `
                <span class="bubble bubble-1">○</span>
                <span class="bubble bubble-2">○</span>
                <span class="bubble bubble-3">○</span>
                <span class="sea-creature">🐠</span>
                <span class="sea-creature second">🐟</span>
            `;
        } else {
            effects.innerHTML = `
                <span class="castle-star star-1">✦</span>
                <span class="castle-star star-2">✧</span>
                <span class="castle-star star-3">✦</span>
                <span class="magic-orb">🔮</span>
            `;
        }

        section.appendChild(effects);

        // Judul dunia
        const heading = document.createElement("div");

        heading.className = `world-heading ${world.className}`;

        heading.innerHTML = `
            <div>${world.name}</div>
            <small>${world.subtitle}</small>
            <p>${world.description}</p>
        `;

        section.appendChild(heading);

        // Jalur level
        const path = document.createElement("div");

        path.className = "world-path";

        for (let i = world.start; i <= world.end; i++) {
            const cell = document.createElement("div");

            cell.className =
                `level-cell step-${i - world.start + 1}`;

            const button = document.createElement("button");

            button.className = "level-node";
            button.type = "button";

            button.setAttribute("aria-label", `Level ${i}`);

            const isCompleted = progress.completed.includes(i);
            const isUnlocked = i <= progress.unlocked;

            if (isCompleted) {
                button.classList.add("completed");

                button.innerHTML = `
                    <span class="level-stars">
                        ${"⭐".repeat(progress.stars[i] || 0)}
                    </span>
                    <span class="level-number">${i}</span>
                `;

            } else if (isUnlocked) {
                button.classList.add("available");

                button.innerHTML = `
                    <span class="level-number">${i}</span>
                `;

                // Karakter MATHO
                const mascot = document.createElement("div");

                mascot.className = "map-mascot";

                mascot.innerHTML = `
                    <span class="wizard-character">🧙‍♂️</span>
                    <span class="wizard-wand">✨</span>
                `;

                const mascotLabel = document.createElement("span");

                mascotLabel.className = "mascot-label";
                mascotLabel.textContent = "MATHO";

                mascot.appendChild(mascotLabel);

                cell.appendChild(mascot);

            } else {
                button.classList.add("locked");

                button.textContent = "🔒";
                button.disabled = true;
            }

            button.addEventListener("click", () => {
                if (isUnlocked) {
                    startLevel(i);
                }
            });

            cell.appendChild(button);

            path.appendChild(cell);
        }

        section.appendChild(path);

        map.appendChild(section);
    });
}


// =========================================
// 7. MEMULAI LEVEL
// =========================================

function startLevel(level) {

    if (level > progress.unlocked) {
        return;
    }

    if (!questions || !questions[level - 1]) {
        alert("Data soal belum tersedia. Periksa file data.js!");
        return;
    }

    currentLevel = level;

    selectedAnswer = null;
    attempts = 0;
    lives = 5;
    answered = false;
    gameOver = false;
    hintUsed = false;

    const question = questions[level - 1];

    document.getElementById("gameLevel").textContent =
        "LEVEL " + level;

    document.getElementById("lifeCount").textContent = lives;

    document.getElementById("difficulty").textContent =
        question.difficulty;

    document.getElementById("questionTitle").textContent =
        question.title;

    document.getElementById("questionText").textContent =
        question.question;

    document.getElementById("hintText").textContent =
        "Ayo selesaikan tantangan ini bersama MATHO!";

    document.getElementById("progressBar").style.width =
        ((level - 1) / questions.length * 100) + "%";

    const feedback = document.getElementById("feedback");

    feedback.className = "feedback";
    feedback.textContent = "";

    const checkButton = document.getElementById("checkButton");

    checkButton.classList.remove("hidden");
    checkButton.disabled = false;

    const nextButton = document.getElementById("nextButton");

    nextButton.classList.add("hidden");

    const hintButton = document.getElementById("hintButton");

    hintButton.classList.remove("hidden");
    hintButton.disabled = false;
    hintButton.textContent = "💡 Minta Petunjuk";

    document.getElementById("gameStars").textContent = "⭐ 0";

    const container = document.getElementById("options");

    container.innerHTML = "";

    if (question.type === "choice") {

        question.options.forEach((option, index) => {

            const button = document.createElement("button");

            button.className = "option";

            button.textContent =
                String.fromCharCode(65 + index) + ". " + option;

            button.addEventListener("click", () => {
                selectOption(index);
            });

            container.appendChild(button);

        });

    } else {

        const input = document.createElement("input");

        input.type = "number";
        input.id = "numberAnswer";
        input.placeholder = "Masukkan jawaban angka...";
        input.className = "option";
        input.style.width = "100%";
        input.style.outline = "none";

        input.addEventListener("input", () => {
            selectedAnswer = input.value;
        });

        container.appendChild(input);

    }

    updateMascotMessage(
        "Semangat! Kamu sedang mengerjakan level " + level + "!"
    );

    showPage("game");
}


// =========================================
// 8. MEMILIH JAWABAN PILIHAN GANDA
// =========================================

function selectOption(index) {

    if (answered || gameOver) return;

    selectedAnswer = index;

    const options = document.querySelectorAll("#options .option");

    options.forEach((option, i) => {

        option.classList.toggle(
            "selected",
            i === index
        );

    });

}


// =========================================
// 9. MENAMPILKAN PETUNJUK
// =========================================

function showHint() {

    if (hintUsed || answered || gameOver) return;

    const question = questions[currentLevel - 1];

    document.getElementById("hintText").textContent =
        "💡 Petunjuk: " + question.hint;

    hintUsed = true;

    const hintButton = document.getElementById("hintButton");

    hintButton.textContent = "Petunjuk sudah digunakan";
    hintButton.disabled = true;
}


// =========================================
// 10. MEMERIKSA JAWABAN
// =========================================

function checkAnswer() {

    if (selectedAnswer === null || selectedAnswer === "") {

        alert("Silakan masukkan atau pilih jawaban terlebih dahulu!");

        return;
    }

    if (answered || gameOver) return;

    const question = questions[currentLevel - 1];

    const feedback = document.getElementById("feedback");

    const isCorrect = question.type === "choice"
        ? selectedAnswer === question.answer
        : Number(selectedAnswer) === Number(question.answer);

    if (isCorrect) {

        showMagicBurst();

        attempts++;

        answered = true;

        let stars = 1;

        if (attempts === 1) {
            stars = 3;
        } else if (attempts === 2) {
            stars = 2;
        }

        const points = stars * 50;

        const oldStars = progress.stars[currentLevel] || 0;

        // Simpan hanya peningkatan bintang terbaik
        if (stars > oldStars) {

            progress.score += points;

            progress.stars[currentLevel] = stars;

        }

        // Tandai level selesai
        if (!progress.completed.includes(currentLevel)) {

            progress.completed.push(currentLevel);

        }

        // Buka level berikutnya
        if (currentLevel < questions.length) {

            progress.unlocked = Math.max(
                progress.unlocked,
                currentLevel + 1
            );

        }

        saveProgress();

        feedback.className = "feedback correct";

        feedback.innerHTML = `
            🎉 <strong>Hebat! Jawabanmu benar!</strong><br>
            ⭐ Kamu memperoleh ${stars} bintang.<br><br>
            <strong>Pembahasan:</strong><br>
            ${question.explanation}
        `;

        if (question.type === "choice") {

            const options = document.querySelectorAll("#options .option");

            options.forEach((option, index) => {

                option.disabled = true;

                if (index === question.answer) {
                    option.classList.add("correct-answer");
                }

            });

        } else {

            document.getElementById("numberAnswer").disabled = true;

        }

        document.getElementById("checkButton").classList.add("hidden");

        document.getElementById("hintButton").classList.add("hidden");

        const nextButton = document.getElementById("nextButton");

        nextButton.classList.remove("hidden");

        nextButton.textContent =
            currentLevel === questions.length
                ? "Selesaikan Petualangan 🏆"
                : "Lanjutkan →";

        document.getElementById("gameStars").textContent =
            "⭐".repeat(stars);

        updateMascotMessage(
            "Yeay! Kamu berhasil melewati tantangan ini!"
        );

    } else {

        attempts++;

        lives--;

        document.getElementById("lifeCount").textContent = lives;

        feedback.className = "feedback wrong";

        if (question.type === "choice") {

            const options = document.querySelectorAll("#options .option");

            options.forEach(option => {
                option.classList.remove("selected");
            });

        }

        selectedAnswer = null;

        if (question.type === "number") {
            document.getElementById("numberAnswer").value = "";
        }

        if (lives > 0) {

            feedback.innerHTML = `
                ❌ <strong>Jawaban belum tepat!</strong><br>
                Jangan menyerah, coba lagi!<br>
                ❤️ Kesempatan tersisa: ${lives}
            `;

            updateMascotMessage(
                "Tidak apa-apa, Petualang! Coba pikirkan kembali."
            );

        } else {

            gameOver = true;

            feedback.innerHTML = `
                💔 <strong>Kesempatan habis!</strong><br>
                Jawaban yang benar adalah:
                <strong>${
                    question.type === "choice"
                        ? question.options[question.answer]
                        : question.answer
                }</strong><br><br>
                <strong>Pembahasan:</strong><br>
                ${question.explanation}
                <br><br>
                Tekan tombol ulangi untuk mencoba lagi.
            `;

            document.getElementById("checkButton").classList.add("hidden");

            document.getElementById("hintButton").classList.add("hidden");

            const nextButton = document.getElementById("nextButton");

            nextButton.classList.remove("hidden");
            nextButton.textContent = "🔄 Ulangi Level";

            updateMascotMessage(
                "Jangan menyerah! Kamu bisa mencoba kembali."
            );

        }

    }

}


// =========================================
// 11. LANJUT ATAU ULANGI LEVEL
// =========================================

function nextLevel() {

    if (gameOver) {

        startLevel(currentLevel);

        return;
    }

    if (currentLevel === questions.length) {

        showFinalResult();

        return;
    }

    showLevelResult();

}


// =========================================
// 12. HASIL LEVEL
// =========================================

function showLevelResult() {

    const stars = progress.stars[currentLevel] || 0;

    const resultMessage = document.getElementById("resultMessage");

    resultMessage.textContent =
        "Kamu berhasil menyelesaikan Level " + currentLevel + "!";

    document.getElementById("resultStars").textContent =
        "⭐".repeat(stars);

    document.getElementById("resultScore").textContent =
        "Total skor: " + progress.score;

    showPage("result");

}


// =========================================
// 13. HASIL AKHIR
// =========================================

function showFinalResult() {

    const totalStars = Object.values(progress.stars)
        .reduce((a, b) => a + b, 0);

    const result = document.querySelector(".result-card");

    result.innerHTML = `
        <div class="result-icon">🏆</div>

        <h1>Petualangan Selesai!</h1>

        <p>
            Selamat! Kamu berhasil menaklukkan
            seluruh tantangan SPLDV.
        </p>

        <h2>⭐ ${totalStars} / 36 Bintang</h2>

        <h3>Skor Akhir: ${progress.score}</h3>

        <p>Level selesai: ${progress.completed.length}/12</p>

        <p>
            Kamu sekarang adalah
            <strong>MASTER SPLDV!</strong>
        </p>

        <button class="btn-primary"
            onclick="showPage('map')">
            Kembali ke Peta
        </button>

        <button class="btn-secondary"
            onclick="showPage('home')">
            Beranda
        </button>
    `;

    showPage("result");
}


// =========================================
// 14. RESET PROGRES
// =========================================

function resetProgress() {

    const confirmReset = confirm(
        "Apakah kamu yakin ingin menghapus seluruh progres permainan?"
    );

    if (!confirmReset) return;

    progress = {
        unlocked: 1,
        completed: [],
        stars: {},
        score: 0
    };

    lives = 5;

    saveProgress();

    renderMap();

    updateMascotMessage(
        "Petualangan baru dimulai! Semangat, Petualang!"
    );

    alert("Progres permainan berhasil direset.");
}


// =========================================
// 15. MENJALANKAN WEBSITE
// =========================================

renderMap();
