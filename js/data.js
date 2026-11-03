
const questions = [

    // =====================================
    // DUNIA 1: HUTAN PENGETAHUAN (MUDAH)
    // =====================================

    {
        level: 1,
        world: "Hutan Pengetahuan",
        difficulty: "MUDAH",
        type: "choice",
        title: "Gerbang Persamaan",
        question: "Manakah yang merupakan persamaan linear dua variabel?",
        options: [
            "2x + 3y = 12",
            "x² + y = 10",
            "3x = 9",
            "xy + 2 = 8"
        ],
        answer: 0,
        hint: "Ingat, persamaan linear dua variabel memiliki dua variabel dengan pangkat tertinggi satu.",
        explanation: "Jawaban A benar. Persamaan 2x + 3y = 12 mempunyai dua variabel, yaitu x dan y, dan keduanya berpangkat satu."
    },

    {
        level: 2,
        world: "Hutan Pengetahuan",
        difficulty: "MUDAH",
        type: "choice",
        title: "Harta Karun Variabel",
        question: "Pada persamaan 4x + 5y = 20, variabelnya adalah ...",
        options: [
            "4 dan 5",
            "x dan y",
            "20 dan 4",
            "5 dan 20"
        ],
        answer: 1,
        hint: "Variabel merupakan lambang yang mewakili nilai yang belum diketahui.",
        explanation: "Variabel pada persamaan tersebut adalah x dan y."
    },

    {
        level: 3,
        world: "Hutan Pengetahuan",
        difficulty: "MUDAH",
        type: "number",
        title: "Jembatan Angka",
        question: "Diketahui x + y = 10 dan x = 4. Tentukan nilai y!",
        answer: 6,
        hint: "Masukkan nilai x ke persamaan x + y = 10.",
        explanation: "x + y = 10. Karena x = 4, maka 4 + y = 10. Jadi, y = 6."
    },

    {
        level: 4,
        world: "Hutan Pengetahuan",
        difficulty: "MUDAH",
        type: "choice",
        title: "Pintu Penyelesaian",
        question: "Pasangan bilangan yang memenuhi x + y = 8 dan x - y = 2 adalah ...",
        options: [
            "(3, 5)",
            "(4, 4)",
            "(5, 3)",
            "(6, 2)"
        ],
        answer: 2,
        hint: "Coba jumlahkan kedua persamaan untuk menghilangkan variabel y.",
        explanation: "Penjumlahan menghasilkan 2x = 10, sehingga x = 5. Substitusikan ke x + y = 8, diperoleh y = 3."
    },


    // =====================================
    // DUNIA 2: LAUTAN PERSAMAAN (SEDANG)
    // =====================================

    {
        level: 5,
        world: "Lautan Persamaan",
        difficulty: "SEDANG",
        type: "number",
        title: "Pulau Substitusi",
        question: "Diketahui x + y = 12 dan x = 7. Berapakah nilai y?",
        answer: 5,
        hint: "Substitusikan nilai x = 7 ke persamaan pertama.",
        explanation: "7 + y = 12. Maka y = 12 - 7 = 5."
    },

    {
        level: 6,
        world: "Lautan Persamaan",
        difficulty: "SEDANG",
        type: "choice",
        title: "Gelombang Eliminasi",
        question: "Diketahui 2x + y = 11 dan x + y = 7. Nilai x adalah ...",
        options: [
            "2",
            "3",
            "4",
            "5"
        ],
        answer: 2,
        hint: "Kurangkan persamaan pertama dengan persamaan kedua.",
        explanation: "(2x + y) - (x + y) = 11 - 7. Diperoleh x = 4."
    },

    {
        level: 7,
        world: "Lautan Persamaan",
        difficulty: "SEDANG",
        type: "number",
        title: "Mutiara Persamaan",
        question: "Jika x + y = 9 dan x - y = 3, tentukan nilai y!",
        answer: 3,
        hint: "Jumlahkan kedua persamaan terlebih dahulu untuk mendapatkan nilai x.",
        explanation: "Jumlahkan kedua persamaan: 2x = 12, sehingga x = 6. Substitusi ke x + y = 9 menghasilkan y = 3."
    },

    {
        level: 8,
        world: "Lautan Persamaan",
        difficulty: "SEDANG",
        type: "choice",
        title: "Kapal Metode Gabungan",
        question: "Diketahui 2x + y = 10 dan x + y = 6. Pasangan penyelesaiannya adalah ...",
        options: [
            "(2, 4)",
            "(3, 3)",
            "(4, 2)",
            "(5, 1)"
        ],
        answer: 2,
        hint: "Gunakan eliminasi untuk mendapatkan x, kemudian substitusikan untuk mendapatkan y.",
        explanation: "Eliminasi menghasilkan x = 4. Substitusi ke x + y = 6 menghasilkan y = 2."
    },


    // =====================================
    // DUNIA 3: KASTEL MASTER SPLDV (SULIT)
    // =====================================

    {
        level: 9,
        world: "Kastel Master SPLDV",
        difficulty: "SULIT",
        type: "choice",
        title: "Pasar Rahasia",
        question: "Harga 1 buku dan 1 pensil adalah Rp8.000. Harga 1 buku dan 2 pensil adalah Rp11.000. Harga satu pensil adalah ...",
        options: [
            "Rp2.000",
            "Rp3.000",
            "Rp4.000",
            "Rp5.000"
        ],
        answer: 1,
        hint: "Misalkan b adalah harga buku dan p adalah harga pensil. Kurangkan kedua persamaan.",
        explanation: "b + p = 8.000 dan b + 2p = 11.000. Eliminasi menghasilkan p = 3.000. Jadi, harga satu pensil adalah Rp3.000."
    },

    {
        level: 10,
        world: "Kastel Master SPLDV",
        difficulty: "SULIT",
        type: "number",
        title: "Toko Ajaib",
        question: "Dua roti dan satu susu seharga Rp13.000. Satu roti dan satu susu seharga Rp8.000. Jika x adalah harga roti dalam ribuan rupiah, tentukan nilai x!",
        answer: 5,
        hint: "Kurangkan persamaan 2x + y = 13 dan x + y = 8.",
        explanation: "2x + y = 13 dan x + y = 8. Eliminasi menghasilkan x = 5. Jadi, harga roti adalah Rp5.000."
    },

    {
        level: 11,
        world: "Kastel Master SPLDV",
        difficulty: "SULIT",
        type: "choice",
        title: "Tantangan Dua Bilangan",
        question: "Jumlah dua bilangan adalah 20 dan selisihnya adalah 4. Bilangan yang lebih besar adalah ...",
        options: [
            "8",
            "10",
            "12",
            "14"
        ],
        answer: 2,
        hint: "Misalkan x bilangan besar dan y bilangan kecil. Bentuklah dua persamaan.",
        explanation: "x + y = 20 dan x - y = 4. Penjumlahan menghasilkan 2x = 24, sehingga x = 12."
    },

    {
        level: 12,
        world: "Kastel Master SPLDV",
        difficulty: "SULIT",
        type: "number",
        title: "Pertempuran Terakhir",
        question: "Jumlah umur Ani dan Budi adalah 30 tahun. Ani 6 tahun lebih tua daripada Budi. Berapakah umur Ani?",
        answer: 18,
        hint: "Misalkan A adalah umur Ani dan B adalah umur Budi. Gunakan A + B = 30 dan A - B = 6.",
        explanation: "Jumlahkan kedua persamaan: 2A = 36. Maka A = 18. Jadi, umur Ani adalah 18 tahun."
    }

];
