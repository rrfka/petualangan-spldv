
// =========================================
// 1. DATA PROGRES DAN VARIABEL GAME
// =========================================

const STORAGE_KEY = "petualanganSPLDV_v3";

function loadProgress() {
    try {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));

        if (
            saved &&
            Array.isArray(saved.completed) &&
            saved.stars &&
            typeof saved.stars === "object"
        ) {
            return {
                unlocked: Math.min(
                    30,
                    Math.max(1, Number(saved.unlocked) || 1)
                ),

                completed: saved.completed.filter(
                    level =>
                        Number.isInteger(level) &&
                        level >= 1 &&
                        level <= 30
                ),

                skipped: Array.isArray(saved.skipped)
                    ? saved.skipped.filter(
                        level =>
                            Number.isInteger(level) &&
                            level >= 1 &&
                            level <= 30
                    )
                    : [],

                stars: saved.stars,
                score: Number(saved.score) || 0
            };
        }
    } catch (error) {
        console.warn("Data progres tidak dapat dibaca:", error);
    }

    return {
        unlocked: 1,
        completed: [],
        skipped: [],
        stars: {},
        score: 0
    };
}

let progress = loadProgress();

let currentLevel = 1;
let selectedAnswer = null;
let attempts = 0;
let lives = 3;
let answered = false;
let gameOver = false;
let hintUsed = false;


// =========================================
// 2. PENGATURAN DUNIA PETUALANGAN
// =========================================

const worlds = [
    {
        name: "🌳 HUTAN PENGETAHUAN",
        subtitle: "Dunia 1 • Tingkat Mudah",
        start: 1,
        end: 8,
        className: "forest",
        description: "Pelajari dasar-dasar SPLDV dan temukan rahasia hutan!"
    },
    {
        name: "🌊 LAUTAN PERSAMAAN",
        subtitle: "Dunia 2 • Tingkat Sedang",
        start: 9,
        end: 18,
        className: "sea",
        description: "Arungi lautan dan kuasai metode penyelesaian SPLDV!"
    },
    {
        name: "🏰 KASTEL MASTER SPLDV",
        subtitle: "Dunia 3 • Tingkat Sulit",
        start: 19,
        end: 30,
        className: "castle",
        description: "Hadapi tantangan kontekstual dan jadilah Master SPLDV!"
    }
];


// =========================================
// 3. SISTEM BOBOT NILAI
// =========================================

function getStarWeight(level) {
    const question = questions[level - 1];

    if (question && Number(question.starWeight) > 0) {
        return Number(question.starWeight);
    }

    if (level <= 8) return 10;
    if (level <= 18) return 20;

    return 30;
}


function calculateTotalScore() {
    let total = 0;

    Object.entries(progress.stars).forEach(([level, stars]) => {
        const levelNumber = Number(level);

        if (levelNumber < 1 || levelNumber > 30) return;

        const starCount = Math.max(
            0,
            Math.min(3, Number(stars) || 0)
        );

        total += starCount * getStarWeight(levelNumber);
    });

    return total;
}


function calculateTotalStars() {
    return Object.values(progress.stars).reduce(
        (total, stars) => total + (Number(stars) || 0),
        0
    );
}


function saveProgress() {
    progress.score = calculateTotalScore();

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(progress)
    );
}


// =========================================
// 4. NAVIGASI HALAMAN
// =========================================

function showPage(pageId) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    const targetPage = document.getElementById(pageId);

    if (!targetPage) {
        console.error("Halaman tidak ditemukan:", pageId);
        return;
    }

    targetPage.classList.add("active");

    if (pageId === "map") {
        renderMap();
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// =========================================
// 5. PESAN KARAKTER MATHO
// =========================================

function updateMascotMessage(message) {
    const mascotMessage = document.getElementById("mascotMessage");

    if (mascotMessage) {
        mascotMessage.textContent = message;
    }
}


// =========================================
// 6. EFEK SIHIR JAWABAN BENAR
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
// 7. MEMBUAT PETA PETUALANGAN
// =========================================

function renderMap() {
    const map = document.getElementById("levelMap");

    if (!map) return;

    map.innerHTML = "";

    progress.score = calculateTotalScore();

    const totalStars = calculateTotalStars();

    const starsElement = document.getElementById("totalStars");
    const scoreElement = document.getElementById("totalScore");
    const completedElement = document.getElementById("completedCount");

    if (starsElement) {
        starsElement.textContent = totalStars;
    }

    if (scoreElement) {
        scoreElement.textContent = progress.score;
    }

    if (completedElement) {
        completedElement.textContent =
            `${progress.completed.length}/30`;
    }

    const horizontalPositions = [120, 380, 620, 880];

    const firstY = 75;
    const verticalGap = 125;
    const topSpace = 65;
    const bottomSpace = 85;

    worlds.forEach(world => {
        const section = document.createElement("div");

        section.className =
            `world-section ${world.className}`;

        // DEKORASI DUNIA

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

        // JUDUL DUNIA

        const heading = document.createElement("div");

        heading.className =
            `world-heading ${world.className}`;

        const title = document.createElement("h2");
        title.textContent = world.name;

        const subtitle = document.createElement("small");
        subtitle.textContent = world.subtitle;

        const description = document.createElement("p");
        description.textContent = world.description;

        const levelRange = document.createElement("small");

        levelRange.textContent =
            `Level ${world.start}–${world.end}`;

        heading.appendChild(title);
        heading.appendChild(subtitle);
        heading.appendChild(description);
        heading.appendChild(levelRange);

        section.appendChild(heading);

        // AREA JALUR LEVEL

        const path = document.createElement("div");

        path.className = "world-path candy-path";

        const levelCount = world.end - world.start + 1;

        const totalRows = Math.ceil(levelCount / 4);

        const pathHeight =
            topSpace +
            firstY +
            (totalRows - 1) * verticalGap +
            bottomSpace;

        path.style.height = `${pathHeight}px`;

        // KOORDINAT LEVEL

        const points = [];

        for (let i = 0; i < levelCount; i++) {
            const row = Math.floor(i / 4);
            const column = i % 4;

            const actualColumn =
                row % 2 === 0
                    ? column
                    : 3 - column;

            points.push({
                x: horizontalPositions[actualColumn],
                y: firstY + row * verticalGap
            });
        }

        // JALUR SVG

        const svgNS = "http://www.w3.org/2000/svg";

        const svg = document.createElementNS(svgNS, "svg");

        svg.setAttribute("class", "candy-track");

        svg.setAttribute(
            "viewBox",
            `0 0 1000 ${pathHeight}`
        );

        svg.setAttribute("preserveAspectRatio", "none");
        svg.setAttribute("aria-hidden", "true");

        let pathData = "";

        if (points.length > 0) {
            pathData = `M ${points[0].x} ${points[0].y}`;

            for (let i = 1; i < points.length; i++) {
                const previous = points[i - 1];
                const current = points[i];

                const middleX =
                    (previous.x + current.x) / 2;

                pathData +=
                    ` C ${middleX} ${previous.y},` +
                    ` ${middleX} ${current.y},` +
                    ` ${current.x} ${current.y}`;
            }
        }

        const baseLine = document.createElementNS(
            svgNS,
            "path"
        );

        baseLine.setAttribute("d", pathData);
        baseLine.setAttribute("class", "track-base");

        const dottedLine = document.createElementNS(
            svgNS,
            "path"
        );

        dottedLine.setAttribute("d", pathData);
        dottedLine.setAttribute("class", "track-dots");

        svg.appendChild(baseLine);
        svg.appendChild(dottedLine);

        path.appendChild(svg);

        // TOMBOL LEVEL

        for (let i = world.start; i <= world.end; i++) {
            const index = i - world.start;
            const point = points[index];

            const cell = document.createElement("div");

            cell.className = "level-cell";

            cell.style.left = `${point.x / 10}%`;
            cell.style.top = `${point.y}px`;

            const button = document.createElement("button");

            button.className = "level-node";
            button.type = "button";

            button.setAttribute(
                "aria-label",
                `Level ${i}`
            );

            const isCompleted =
                progress.completed.includes(i);

            const isSkipped =
                progress.skipped.includes(i) && !isCompleted;

            const isUnlocked =
                i <= progress.unlocked;

            const stars =
                Number(progress.stars[i]) || 0;

            // LEVEL BERHASIL DISELESAIKAN

            if (isCompleted) {
                button.classList.add("completed");

                button.innerHTML = `
                    <span class="level-number">${i}</span>
                `;

                const starLabel =
                    document.createElement("span");

                starLabel.className = "level-stars";
                starLabel.textContent = "⭐".repeat(stars);

                cell.appendChild(starLabel);
            }

            // LEVEL DILEWATI KARENA KEHABISAN NYAWA

            else if (isSkipped) {
                button.classList.add("skipped");

                button.innerHTML = `
                    <span class="level-number">${i}</span>
                    <span class="skip-icon">⏭️</span>
                `;

                button.disabled = true;

                button.setAttribute(
                    "aria-label",
                    `Level ${i} dilewati`
                );
            }

            // LEVEL TERSEDIA

            else if (isUnlocked) {
                button.classList.add("available");

                button.innerHTML = `
                    <span class="level-number">${i}</span>
                `;

                if (i === progress.unlocked) {
                    const mascot =
                        document.createElement("div");

                    mascot.className = "map-mascot";

                    mascot.innerHTML = `
                        <span class="wizard-character">🧙‍♂️</span>
                        <span class="wizard-wand">✨</span>
                        <span class="mascot-label">MATHO</span>
                    `;

                    cell.appendChild(mascot);
                }
            }

            // LEVEL TERKUNCI

            else {
                button.classList.add("locked");

                button.textContent = "🔒";
                button.disabled = true;
            }

            // AKSI TOMBOL LEVEL

            button.addEventListener("click", () => {
                if (
                    i <= progress.unlocked &&
                    !progress.skipped.includes(i)
                ) {
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
// 8. MEMULAI LEVEL
// =========================================

function startLevel(level) {
    if (level > progress.unlocked) return;

    // Level yang sudah dilewati tidak bisa dimainkan ulang.
    if (progress.skipped.includes(level)) return;

    if (!questions || !questions[level - 1]) {
        alert("Data soal belum tersedia. Periksa file data.js!");
        return;
    }

    currentLevel = level;

    selectedAnswer = null;
    attempts = 0;
    lives = 3;
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
        input.step = "any";
        input.placeholder = "Masukkan jawaban angka...";
        input.className = "option";
        input.style.width = "100%";
        input.style.outline = "none";

        input.addEventListener("input", () => {
            selectedAnswer = input.value;
        });

        input.addEventListener("keydown", event => {
            if (event.key === "Enter") {
                checkAnswer();
            }
        });

        container.appendChild(input);
    }

    updateMascotMessage(
        "Semangat! Kamu sedang mengerjakan level " + level + "!"
    );

    showPage("game");
}


// =========================================
// 9. MEMILIH JAWABAN
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
// 10. MENAMPILKAN PETUNJUK
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
// 11. MENENTUKAN JUMLAH BINTANG
// =========================================

function calculateStars(attemptNumber) {
    if (attemptNumber === 1) return 3;
    if (attemptNumber === 2) return 2;

    return 1;
}


// =========================================
// 12. MEMERIKSA JAWABAN
// =========================================

function checkAnswer() {
    if (answered || gameOver) return;

    if (selectedAnswer === null || selectedAnswer === "") {
        alert("Silakan masukkan atau pilih jawaban terlebih dahulu!");
        return;
    }

    const question = questions[currentLevel - 1];

    const feedback = document.getElementById("feedback");

    attempts++;

    let isCorrect = false;

    if (question.type === "choice") {
        isCorrect = selectedAnswer === question.answer;

    } else {
        const userAnswer = Number(
            String(selectedAnswer).replace(",", ".")
        );

        const correctAnswer = Number(question.answer);

        isCorrect =
            Number.isFinite(userAnswer) &&
            Math.abs(userAnswer - correctAnswer) < 0.0000001;
    }

    // =====================================
    // JIKA JAWABAN BENAR
    // =====================================

    if (isCorrect) {
        showMagicBurst();

        answered = true;

        const stars = calculateStars(attempts);
        const starWeight = getStarWeight(currentLevel);

        const oldStars =
            Number(progress.stars[currentLevel]) || 0;

        let gainedPoints = 0;

        // Tambahan poin hanya jika rekor bintang meningkat.
        if (stars > oldStars) {
            gainedPoints =
                (stars - oldStars) * starWeight;

            progress.stars[currentLevel] = stars;
        }

        // Tandai level berhasil diselesaikan.
        if (!progress.completed.includes(currentLevel)) {
            progress.completed.push(currentLevel);
        }

        // Hapus status dilewati jika sebelumnya ada.
        progress.skipped = progress.skipped.filter(
            level => level !== currentLevel
        );

        // Buka level berikutnya.
        if (currentLevel < questions.length) {
            progress.unlocked = Math.max(
                progress.unlocked,
                currentLevel + 1
            );
        }

        saveProgress();

        feedback.className = "feedback correct";

        const scoreMessage = gainedPoints > 0
            ? `Kamu memperoleh tambahan ${gainedPoints} poin.`
            : "Rekor bintang level ini tidak berubah.";

        feedback.innerHTML = `
            🎉 <strong>Hebat! Jawabanmu benar!</strong><br>
            ⭐ Kamu memperoleh ${stars} bintang.<br>
            🏆 Bobot bintang: ${starWeight} poin.<br>
            ✨ ${scoreMessage}<br><br>
            <strong>Pembahasan:</strong><br>
            ${question.explanation}
        `;

        // Kunci pilihan jawaban.
        if (question.type === "choice") {
            const options =
                document.querySelectorAll("#options .option");

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

        // =====================================
        // JIKA JAWABAN SALAH
        // =====================================

        lives--;

        document.getElementById("lifeCount").textContent = lives;

        feedback.className = "feedback wrong";

        if (question.type === "choice") {
            const options =
                document.querySelectorAll("#options .option");

            options.forEach(option => {
                option.classList.remove("selected");
            });
        }

        selectedAnswer = null;

        if (question.type === "number") {
            document.getElementById("numberAnswer").value = "";
        }

        // KESALAHAN PERTAMA DAN KEDUA

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

            // =================================
            // KESALAHAN KETIGA: LEVEL DILEWATI
            // =================================

            gameOver = true;

            const correctAnswer =
                question.type === "choice"
                    ? question.options[question.answer]
                    : question.answer;

            // Jika level belum pernah berhasil diselesaikan,
            // pastikan level ini tidak mendapat bintang/poin.
            if (!progress.completed.includes(currentLevel)) {
                delete progress.stars[currentLevel];

                if (!progress.skipped.includes(currentLevel)) {
                    progress.skipped.push(currentLevel);
                }
            }

            // Buka level selanjutnya.
            if (currentLevel < questions.length) {
                progress.unlocked = Math.max(
                    progress.unlocked,
                    currentLevel + 1
                );
            }

            // Simpan progres dan hitung ulang skor.
            saveProgress();

            feedback.innerHTML = `
                💔 <strong>Kesempatan habis!</strong><br>
                Kamu telah melakukan 3 kali kesalahan.<br><br>

                ⏭️ Level ${currentLevel} dilewati.<br>
                ⭐ Bintang level ini: 0<br>
                🏆 Poin level ini: 0<br><br>

                Jawaban yang benar adalah:
                <strong>${correctAnswer}</strong><br><br>

                <strong>Pembahasan:</strong><br>
                ${question.explanation}<br><br>

                Tenang, petualangan tetap berlanjut!
            `;

            document.getElementById("checkButton").classList.add("hidden");
            document.getElementById("hintButton").classList.add("hidden");

            const nextButton = document.getElementById("nextButton");

            nextButton.classList.remove("hidden");

            nextButton.textContent =
                currentLevel === questions.length
                    ? "Lihat Hasil Akhir 🏆"
                    : "Lanjut ke Level Berikutnya →";

            document.getElementById("gameStars").textContent = "⭐ 0";

            updateMascotMessage(
                "Tidak apa-apa, Petualang! Kita lanjutkan ke tantangan berikutnya!"
            );
        }
    }
}


// =========================================
// 13. LANJUT KE LEVEL BERIKUTNYA
// =========================================

function nextLevel() {

    // Jika level gagal, jangan ulangi level yang sama.
    if (gameOver) {

        if (currentLevel === questions.length) {
            showFinalResult();
            return;
        }

        startLevel(currentLevel + 1);
        return;
    }

    // Jika seluruh soal selesai.
    if (currentLevel === questions.length) {
        showFinalResult();
        return;
    }

    showLevelResult();
}


// =========================================
// 14. HASIL LEVEL
// =========================================

function showLevelResult() {
    const stars =
        Number(progress.stars[currentLevel]) || 0;

    const starWeight = getStarWeight(currentLevel);

    const resultMessage =
        document.getElementById("resultMessage");

    if (resultMessage) {
        resultMessage.textContent =
            "Kamu berhasil menyelesaikan Level " +
            currentLevel + "!";
    }

    const resultStars =
        document.getElementById("resultStars");

    if (resultStars) {
        resultStars.textContent = "⭐".repeat(stars);
    }

    const resultScore =
        document.getElementById("resultScore");

    if (resultScore) {
        resultScore.textContent =
            `Nilai level: ${stars * starWeight} poin | Total skor: ${progress.score}`;
    }

    showPage("result");
}


// =========================================
// 15. HASIL AKHIR PERMAINAN
// =========================================

function showFinalResult() {
    const totalStars = calculateTotalStars();
    const totalScore = calculateTotalScore();

    const result = document.querySelector(".result-card");

    if (!result) {
        showPage("result");
        return;
    }

    result.innerHTML = `
        <div class="result-icon">🏆</div>

        <h1>Petualangan Selesai!</h1>

        <p>
            Selamat! Kamu telah menyelesaikan
            seluruh perjalanan SPLDV.
        </p>

        <h2>⭐ ${totalStars} / 90 Bintang</h2>

        <h3>Skor Akhir: ${totalScore} / 1920</h3>

        <p>
            Level berhasil diselesaikan:
            ${progress.completed.length}/30
        </p>

        <p>
            Level dilewati:
            ${progress.skipped.length}
        </p>

        <p>
            Kamu sekarang adalah
            <strong>MASTER SPLDV!</strong>
        </p>

        <div class="final-score-detail">
            <p>🌳 Hutan Pengetahuan: 8 level</p>
            <p>🌊 Lautan Persamaan: 10 level</p>
            <p>🏰 Kastel Master SPLDV: 12 level</p>
        </div>

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
// 16. RESET PROGRES
// =========================================

function resetProgress() {
    const confirmReset = confirm(
        "Apakah kamu yakin ingin menghapus seluruh progres permainan?"
    );

    if (!confirmReset) return;

    progress = {
        unlocked: 1,
        completed: [],
        skipped: [],
        stars: {},
        score: 0
    };

    lives = 3;

    saveProgress();

    renderMap();

    updateMascotMessage(
        "Petualangan baru dimulai! Semangat, Petualang!"
    );

    alert("Progres permainan berhasil direset.");
}


// =========================================
// 17. MENJALANKAN WEBSITE
// =========================================

if (typeof questions === "undefined" || questions.length !== 30) {
    console.error(
        "Jumlah soal harus 30. Periksa file data.js!"
    );
} else {
    renderMap();
}
