const questions = [
    // ==================================================
    // DUNIA 1: HUTAN PENGETAHUAN
    // MUDAH - LEVEL 1 SAMPAI 8
    // Bobot: 10 poin per bintang
    // ==================================================
    {
        level: 1,
        world: "Hutan Pengetahuan",
        difficulty: "MUDAH",
        starWeight: 10,
        type: "choice",
        title: "Gerbang PLDV",
        question: "Manakah pasangan persamaan yang keduanya merupakan Persamaan Linear Dua Variabel (PLDV)?",
        options: [
            "2x + 3y = 12 dan x - 2y = 5",
            "x² + y = 8 dan 2x + y = 6",
            "3x = 9 dan 2y = 10",
            "x + y + z = 12 dan 2x - y = 4"
        ],
        answer: 0,
        hint: "Perhatikan banyaknya variabel dan pangkat tertinggi setiap variabel.",
        explanation: "PLDV memuat dua variabel berbeda yang masing-masing berpangkat satu. Kedua persamaan pada pilihan A memenuhi syarat tersebut."
    },

    {
        level: 2,
        world: "Hutan Pengetahuan",
        difficulty: "MUDAH",
        starWeight: 10,
        type: "choice",
        title: "Penjaga SPLDV",
        question: "Sistem Persamaan Linear Dua Variabel (SPLDV) merupakan ...",
        options: [
            "Satu persamaan linear yang memiliki dua variabel",
            "Dua persamaan linear yang memuat dua variabel yang sama dan diselesaikan secara bersamaan",
            "Dua persamaan linear yang memiliki tiga variabel",
            "Persamaan yang memiliki variabel berpangkat dua"
        ],
        answer: 1,
        hint: "Perhatikan jumlah persamaan, jenis variabel, dan hubungan kedua persamaan.",
        explanation: "SPLDV merupakan sistem yang terdiri atas dua persamaan linear dengan dua variabel yang sama. Penyelesaiannya harus memenuhi kedua persamaan secara bersamaan."
    },

    {
        level: 3,
        world: "Hutan Pengetahuan",
        difficulty: "MUDAH",
        starWeight: 10,
        type: "choice",
        title: "Kristal Unsur Persamaan",
        question: "Pada persamaan 7x - 4y = 15, pasangan koefisien x dan y serta konstantanya secara berurutan adalah ...",
        options: [
            "7, -4, dan 15",
            "7, 4, dan 15",
            "x, y, dan 15",
            "7, -4, dan x"
        ],
        answer: 0,
        hint: "Perhatikan tanda negatif pada suku yang memuat y.",
        explanation: "Koefisien x adalah 7, koefisien y adalah -4, dan konstanta adalah 15."
    },

    {
        level: 4,
        world: "Hutan Pengetahuan",
        difficulty: "MUDAH",
        starWeight: 10,
        type: "number",
        title: "Jembatan Pasangan",
        question: "Apakah pasangan (3, 4) memenuhi persamaan 2x + 3y = 18? Masukkan nilai ruas kiri setelah x dan y disubstitusikan!",
        answer: 18,
        hint: "Ganti x dengan 3 dan y dengan 4.",
        explanation: "2(3) + 3(4) = 6 + 12 = 18. Karena hasilnya sama dengan ruas kanan, pasangan tersebut memenuhi persamaan."
    },

    {
        level: 5,
        world: "Hutan Pengetahuan",
        difficulty: "MUDAH",
        starWeight: 10,
        type: "number",
        title: "Lembah Penyelesaian",
        question: "Diketahui x + y = 17 dan x - y = 5. Tentukan nilai x!",
        answer: 11,
        hint: "Jumlahkan kedua persamaan agar variabel y tereliminasi.",
        explanation: "Jumlahkan kedua persamaan: (x + y) + (x - y) = 17 + 5. Diperoleh 2x = 22, sehingga x = 11."
    },

    {
        level: 6,
        world: "Hutan Pengetahuan",
        difficulty: "MUDAH",
        starWeight: 10,
        type: "choice",
        title: "Peta Model Matematika",
        question: "Jumlah dua bilangan adalah 18. Jika bilangan pertama dinyatakan dengan x dan bilangan kedua dengan y, model matematikanya adalah ...",
        options: [
            "x - y = 18",
            "xy = 18",
            "x + y = 18",
            "2x + y = 18"
        ],
        answer: 2,
        hint: "Kata jumlah menunjukkan operasi penjumlahan.",
        explanation: "Jumlah dua bilangan dinyatakan dengan x + y. Karena jumlahnya 18, model matematikanya adalah x + y = 18."
    },

    {
        level: 7,
        world: "Hutan Pengetahuan",
        difficulty: "MUDAH",
        starWeight: 10,
        type: "number",
        title: "Menara Variabel",
        question: "Diketahui 3x + 2y = 19 dan x = 3. Tentukan nilai y!",
        answer: 5,
        hint: "Substitusikan x = 3 ke persamaan, kemudian tentukan y.",
        explanation: "3(3) + 2y = 19. Diperoleh 9 + 2y = 19, sehingga 2y = 10 dan y = 5."
    },

    {
        level: 8,
        world: "Hutan Pengetahuan",
        difficulty: "MUDAH",
        starWeight: 10,
        type: "choice",
        title: "Gerbang Hutan Terakhir",
        question: "Jika suatu pasangan (a, b) merupakan penyelesaian SPLDV, arti pasangan tersebut adalah ...",
        options: [
            "Hanya memenuhi persamaan pertama",
            "Hanya memenuhi persamaan kedua",
            "Memenuhi kedua persamaan secara bersamaan",
            "Tidak harus memenuhi kedua persamaan"
        ],
        answer: 2,
        hint: "Penyelesaian SPLDV harus berlaku untuk seluruh persamaan dalam sistem.",
        explanation: "Himpunan penyelesaian SPLDV adalah pasangan nilai variabel yang membuat kedua persamaan bernilai benar secara bersamaan."
    },

    // ==================================================
    // DUNIA 2: LAUTAN PERSAMAAN
    // SEDANG - LEVEL 9 SAMPAI 18
    // Bobot: 20 poin per bintang
    // ==================================================
    {
        level: 9,
        world: "Lautan Persamaan",
        difficulty: "SEDANG",
        starWeight: 20,
        type: "number",
        title: "Gelombang Eliminasi",
        question: "Tentukan nilai x dari 3x + 2y = 19 dan 2x + 2y = 14!",
        answer: 5,
        hint: "Kurangkan kedua persamaan karena koefisien y sudah sama.",
        explanation: "Kurangkan persamaan kedua dari persamaan pertama: (3x + 2y) - (2x + 2y) = 19 - 14. Diperoleh x = 5."
    },

    {
        level: 10,
        world: "Lautan Persamaan",
        difficulty: "SEDANG",
        starWeight: 20,
        type: "choice",
        title: "Karang Koefisien",
        question: "Untuk mengeliminasi variabel x dari 2x + 3y = 13 dan 3x + 2y = 12, kedua persamaan dapat dikalikan berturut-turut dengan ...",
        options: [
            "2 dan 3",
            "3 dan 2",
            "2 dan 2",
            "3 dan 3"
        ],
        answer: 1,
        hint: "Samakan koefisien x menggunakan KPK dari 2 dan 3.",
        explanation: "KPK dari 2 dan 3 adalah 6. Persamaan pertama dikalikan 3 dan persamaan kedua dikalikan 2 sehingga koefisien x sama-sama 6."
    },

    {
        level: 11,
        world: "Lautan Persamaan",
        difficulty: "SEDANG",
        starWeight: 20,
        type: "number",
        title: "Pulau Substitusi",
        question: "Diketahui 2x + 3y = 16 dan x = y + 2. Tentukan nilai y!",
        answer: 2.4,
        hint: "Substitusikan x = y + 2 ke persamaan pertama.",
        explanation: "Substitusikan x = y + 2 ke persamaan 2x + 3y = 16. Diperoleh 2(y + 2) + 3y = 16, sehingga 2y + 4 + 3y = 16. Maka 5y = 12 dan y = 12/5 = 2,4."
    },

    {
        level: 12,
        world: "Lautan Persamaan",
        difficulty: "SEDANG",
        starWeight: 20,
        type: "choice",
        title: "Pusaran Persamaan",
        question: "Penyelesaian dari 4x + 3y = 18 dan 2x + 3y = 12 adalah ...",
        options: [
            "(2, 4)",
            "(3, 2)",
            "(4, 2)",
            "(5, 1)"
        ],
        answer: 1,
        hint: "Eliminasi y terlebih dahulu, kemudian substitusikan nilai x.",
        explanation: "Kurangkan kedua persamaan sehingga 2x = 6 dan x = 3. Substitusi ke 2x + 3y = 12 menghasilkan 6 + 3y = 12, sehingga y = 2. Jadi, penyelesaiannya (3, 2)."
    },

    {
        level: 13,
        world: "Lautan Persamaan",
        difficulty: "SEDANG",
        starWeight: 20,
        type: "number",
        title: "Gua Substitusi",
        question: "Diketahui 3x - 2y = 4 dan x = 2y - 1. Tentukan nilai x!",
        answer: 2.5,
        hint: "Masukkan bentuk x = 2y - 1 ke persamaan pertama.",
        explanation: "Substitusikan x = 2y - 1: 3(2y - 1) - 2y = 4. Diperoleh 6y - 3 - 2y = 4, sehingga 4y = 7 dan y = 7/4. Maka x = 2(7/4) - 1 = 5/2 = 2,5."
    },

    {
        level: 14,
        world: "Lautan Persamaan",
        difficulty: "SEDANG",
        starWeight: 20,
        type: "number",
        title: "Terumbu Campuran",
        question: "Selesaikan SPLDV 2x + 3y = 19 dan 3x - 2y = -4. Tentukan nilai x!",
        answer: 2,
        hint: "Eliminasi salah satu variabel dengan menyamakan koefisien, lalu substitusikan hasilnya.",
        explanation: "Kalikan persamaan pertama dengan 2 dan persamaan kedua dengan 3. Diperoleh 4x + 6y = 38 dan 9x - 6y = -12. Jumlahkan kedua persamaan: 13x = 26, sehingga x = 2."
    },

    {
        level: 15,
        world: "Lautan Persamaan",
        difficulty: "SEDANG",
        starWeight: 20,
        type: "choice",
        title: "Arus Berlawanan",
        question: "Jika koefisien suatu variabel pada dua persamaan sudah berlawanan tanda dan sama besar, operasi yang tepat untuk menghilangkan variabel tersebut adalah ...",
        options: [
            "Pengurangan",
            "Penjumlahan",
            "Pembagian",
            "Pemangkatan"
        ],
        answer: 1,
        hint: "Contoh: +4x dan -4x.",
        explanation: "Koefisien yang berlawanan tanda dan sama besar akan saling menghilangkan jika kedua persamaan dijumlahkan."
    },

    {
        level: 16,
        world: "Lautan Persamaan",
        difficulty: "SEDANG",
        starWeight: 20,
        type: "number",
        title: "Menara Persamaan",
        question: "Diketahui 2x + y = 13 dan 3x - y = 12. Tentukan nilai x + y!",
        answer: 8,
        hint: "Jumlahkan kedua persamaan untuk memperoleh x, lalu substitusikan.",
        explanation: "Penjumlahan menghasilkan 5x = 25 sehingga x = 5. Substitusi ke 2x + y = 13 menghasilkan 10 + y = 13, jadi y = 3. Maka x + y = 8."
    },

    {
        level: 17,
        world: "Lautan Persamaan",
        difficulty: "SEDANG",
        starWeight: 20,
        type: "choice",
        title: "Labirin Himpunan Penyelesaian",
        question: "Sistem 2x + 4y = 10 dan x + 2y = 5 memiliki ...",
        options: [
            "Tidak memiliki penyelesaian",
            "Tepat satu penyelesaian",
            "Tak terhingga banyak penyelesaian",
            "Tepat dua penyelesaian"
        ],
        answer: 2,
        hint: "Perhatikan apakah kedua persamaan sebenarnya menyatakan garis yang sama.",
        explanation: "Persamaan pertama merupakan dua kali persamaan kedua. Keduanya ekuivalen sehingga memiliki tak terhingga banyak pasangan penyelesaian."
    },

    {
        level: 18,
        world: "Lautan Persamaan",
        difficulty: "SEDANG",
        starWeight: 20,
        type: "number",
        title: "Gerbang Lautan",
        question: "Harga 2 buku dan 1 pensil adalah Rp16.000, sedangkan harga 1 buku dan 2 pensil adalah Rp11.000. Jika x adalah harga buku dalam ribuan rupiah dan y harga pensil dalam ribuan rupiah, tentukan nilai x!",
        answer: 7,
        hint: "Bentuklah dua persamaan, lalu gunakan eliminasi.",
        explanation: "Model matematikanya 2x + y = 16 dan x + 2y = 11. Kalikan persamaan kedua dengan 2: 2x + 4y = 22. Kurangkan dengan persamaan pertama sehingga 3y = 6 dan y = 2. Substitusi ke x + 2y = 11 menghasilkan x = 7."
    },

    // ==================================================
    // DUNIA 3: KASTEL MASTER SPLDV
    // SULIT - LEVEL 19 SAMPAI 30
    // Bobot: 30 poin per bintang
    // ==================================================
    {
        level: 19,
        world: "Kastel Master SPLDV",
        difficulty: "SULIT",
        starWeight: 30,
        type: "number",
        title: "Pasar Rahasia",
        question: "Tiga buku tulis dan dua pensil berharga Rp14.500. Dua buku tulis dan satu pensil berharga Rp9.000. Tentukan harga satu buku tulis dalam rupiah!",
        answer: 3500,
        hint: "Misalkan b harga buku dan p harga pensil. Bentuk dua persamaan lalu eliminasi salah satu variabel.",
        explanation: "Diperoleh 3b + 2p = 14.500 dan 2b + p = 9.000. Kalikan persamaan kedua dengan 2: 4b + 2p = 18.000. Kurangkan persamaan pertama dari hasil tersebut sehingga b = 3.500. Harga satu buku adalah Rp3.500."
    },

    {
        level: 20,
        world: "Kastel Master SPLDV",
        difficulty: "SULIT",
        starWeight: 30,
        type: "number",
        title: "Menara Parkir",
        question: "Uang parkir dari 3 mobil dan 5 motor adalah Rp17.000. Uang parkir dari 4 mobil dan 2 motor adalah Rp18.000. Berapa total uang parkir jika terdapat 20 mobil dan 30 motor?",
        answer: 110000,
        hint: "Tentukan tarif parkir mobil dan motor terlebih dahulu, kemudian hitung untuk 20 mobil dan 30 motor.",
        explanation: "Misalkan tarif mobil m dan motor n dalam ribuan rupiah. Diperoleh 3m + 5n = 17 dan 4m + 2n = 18. Dari persamaan kedua diperoleh 2m + n = 9, sehingga n = 9 - 2m. Substitusi ke persamaan pertama menghasilkan m = 4 dan n = 1. Total = 20(4.000) + 30(1.000) = Rp110.000."
    },

    {
        level: 21,
        world: "Kastel Master SPLDV",
        difficulty: "SULIT",
        starWeight: 30,
        type: "number",
        title: "Jam Pasir Kehidupan",
        question: "Dua tahun yang lalu umur seorang ayah tiga kali umur anaknya. Delapan tahun yang akan datang umur ayah dua kali umur anaknya. Berapa umur ayah sekarang?",
        answer: 32,
        hint: "Misalkan umur ayah F dan anak C. Bentuk persamaan berdasarkan umur dua tahun lalu dan delapan tahun mendatang.",
        explanation: "Misalkan umur sekarang ayah F dan anak C. Dua tahun lalu: F - 2 = 3(C - 2), sehingga F - 3C = -4. Delapan tahun mendatang: F + 8 = 2(C + 8), sehingga F - 2C = 8. Selisih kedua persamaan menghasilkan C = 12. Maka F = 32. Umur ayah sekarang 32 tahun."
    },

    {
        level: 22,
        world: "Kastel Master SPLDV",
        difficulty: "SULIT",
        starWeight: 30,
        type: "number",
        title: "Gudang Koin",
        question: "Jumlah uang kakak dan adik berbeda Rp10.000. Uang adik lebih banyak. Dua kali uang kakak ditambah uang adik adalah Rp40.000. Berapa jumlah uang mereka?",
        answer: 30000,
        hint: "Misalkan K uang kakak dan A uang adik. Gunakan A - K = 10.000 dan 2K + A = 40.000.",
        explanation: "Dari A - K = 10.000 diperoleh A = K + 10.000. Substitusi ke 2K + A = 40.000 menghasilkan 2K + K + 10.000 = 40.000, sehingga K = 10.000 dan A = 20.000. Jumlah uang mereka Rp30.000."
    },

    {
        level: 23,
        world: "Kastel Master SPLDV",
        difficulty: "SULIT",
        starWeight: 30,
        type: "number",
        title: "Kastel Perdagangan",
        question: "Lima kilogram jeruk dan tiga kilogram salak berharga Rp79.000. Tiga kilogram jeruk dan dua kilogram salak berharga Rp49.000. Tentukan harga satu kilogram jeruk!",
        answer: 11000,
        hint: "Misalkan harga jeruk x dan salak y dalam ribuan rupiah. Gunakan eliminasi.",
        explanation: "Diperoleh 5x + 3y = 79 dan 3x + 2y = 49. Kalikan persamaan pertama dengan 2 dan persamaan kedua dengan 3: 10x + 6y = 158 dan 9x + 6y = 147. Kurangkan sehingga x = 11. Harga jeruk Rp11.000 per kilogram."
    },

    {
        level: 24,
        world: "Kastel Master SPLDV",
        difficulty: "SULIT",
        starWeight: 30,
        type: "number",
        title: "Toko Batik Ajaib",
        question: "Dua batik jenis I dan satu batik jenis II berharga Rp32.000. Tiga batik jenis I dan dua batik jenis II berharga Rp52.000. Berapa harga satu batik jenis I dan satu batik jenis II jika dijumlahkan?",
        answer: 20000,
        hint: "Misalkan harga batik jenis I adalah x dan jenis II adalah y. Bentuk dua persamaan.",
        explanation: "Diperoleh 2x + y = 32.000 dan 3x + 2y = 52.000. Dari persamaan pertama y = 32.000 - 2x. Substitusi ke persamaan kedua menghasilkan 3x + 64.000 - 4x = 52.000, sehingga x = 12.000 dan y = 8.000. Jumlah harga keduanya Rp20.000."
    },

    {
        level: 25,
        world: "Kastel Master SPLDV",
        difficulty: "SULIT",
        starWeight: 30,
        type: "choice",
        title: "Tiket Pertunjukan",
        question: "Harga 3 tiket dewasa dan 2 tiket anak adalah Rp80.000. Harga 2 tiket dewasa dan 3 tiket anak adalah Rp70.000. Harga satu tiket dewasa adalah ...",
        options: [
            "Rp10.000",
            "Rp15.000",
            "Rp20.000",
            "Rp25.000"
        ],
        answer: 2,
        hint: "Misalkan d harga tiket dewasa dan a harga tiket anak. Samakan koefisien salah satu variabel.",
        explanation: "Diperoleh 3d + 2a = 80.000 dan 2d + 3a = 70.000. Kalikan persamaan pertama dengan 3 dan persamaan kedua dengan 2, lalu kurangkan: 5d = 100.000. Jadi, d = 20.000. Harga tiket dewasa Rp20.000."
    },

    {
        level: 26,
        world: "Kastel Master SPLDV",
        difficulty: "SULIT",
        starWeight: 30,
        type: "number",
        title: "Kebun Persegi Panjang",
        question: "Jumlah panjang dan lebar suatu kebun adalah 29 meter. Panjang kebun 9 meter lebih besar daripada lebarnya. Tentukan luas kebun tersebut!",
        answer: 190,
        hint: "Bentuk persamaan p + l = 29 dan p - l = 9. Setelah mendapatkan panjang dan lebar, hitung luasnya.",
        explanation: "Diperoleh p + l = 29 dan p - l = 9. Jumlahkan kedua persamaan sehingga 2p = 38 dan p = 19. Maka l = 10. Luas = 19 × 10 = 190 m²."
    },

    {
        level: 27,
        world: "Kastel Master SPLDV",
        difficulty: "SULIT",
        starWeight: 30,
        type: "number",
        title: "Koleksi Tiket Rahasia",
        question: "Harga 2 tiket anak dan 3 tiket dewasa adalah Rp64.000. Harga 3 tiket anak dan 2 tiket dewasa adalah Rp56.000. Berapa harga satu tiket anak dan satu tiket dewasa jika dijumlahkan?",
        answer: 24000,
        hint: "Misalkan harga tiket anak a dan tiket dewasa d. Selesaikan kedua persamaan.",
        explanation: "Diperoleh 2a + 3d = 64.000 dan 3a + 2d = 56.000. Kalikan persamaan pertama dengan 3 dan persamaan kedua dengan 2, lalu eliminasi: 5d = 80.000 sehingga d = 16.000. Substitusi menghasilkan a = 8.000. Jumlah harga satu tiket anak dan dewasa adalah Rp24.000."
    },

    {
        level: 28,
        world: "Kastel Master SPLDV",
        difficulty: "SULIT",
        starWeight: 30,
        type: "number",
        title: "Perdagangan Buah",
        question: "Harga 4 kg apel dan 3 kg jeruk adalah Rp93.000. Harga 2 kg apel dan 5 kg jeruk adalah Rp85.000. Tentukan harga 1 kg apel!",
        answer: 15000,
        hint: "Misalkan harga apel x dan jeruk y dalam ribuan rupiah. Bentuk model matematika kemudian eliminasi.",
        explanation: "Diperoleh 4x + 3y = 93 dan 2x + 5y = 85. Kalikan persamaan kedua dengan 2 sehingga 4x + 10y = 170. Kurangkan persamaan pertama dari hasil tersebut: 7y = 77, maka y = 11. Substitusi ke 2x + 5y = 85 menghasilkan 2x = 30, sehingga x = 15. Harga apel Rp15.000 per kg."
    },

    {
        level: 29,
        world: "Kastel Master SPLDV",
        difficulty: "SULIT",
        starWeight: 30,
        type: "number",
        title: "Rahasia Dua Generasi",
        question: "Dua tahun yang lalu umur seorang ibu enam kali umur anaknya. Delapan belas tahun kemudian, umur ibu menjadi dua kali umur anaknya. Berapa jumlah umur mereka sekarang?",
        answer: 39,
        hint: "Misalkan umur ibu I dan anak A. Gunakan I - 2 = 6(A - 2) dan I + 18 = 2(A + 18).",
        explanation: "Diperoleh I - 2 = 6(A - 2), sehingga I - 6A = -10. Delapan belas tahun kemudian: I + 18 = 2(A + 18), sehingga I - 2A = 18. Selisih kedua persamaan menghasilkan 4A = 28, sehingga A = 7. Maka I = 32. Jumlah umur mereka sekarang 32 + 7 = 39 tahun."
    },

    {
        level: 30,
        world: "Kastel Master SPLDV",
        difficulty: "SULIT",
        starWeight: 30,
        type: "choice",
        title: "Mahkota Master SPLDV",
        question: "Sebuah pertunjukan menjual tiket anak-anak dan dewasa. Harga 2 tiket anak dan 3 tiket dewasa adalah Rp64.000. Harga 3 tiket anak dan 2 tiket dewasa adalah Rp56.000. Jika panitia menjual 10 tiket anak dan 15 tiket dewasa, total pendapatannya adalah ...",
        options: [
            "Rp240.000",
            "Rp280.000",
            "Rp320.000",
            "Rp360.000"
        ],
        answer: 2,
        hint: "Tentukan harga masing-masing tiket terlebih dahulu. Setelah itu, hitung pendapatan dari 10 tiket anak dan 15 tiket dewasa.",
        explanation: "Dari 2a + 3d = 64.000 dan 3a + 2d = 56.000 diperoleh a = 8.000 dan d = 16.000. Pendapatan = 10(8.000) + 15(16.000) = 80.000 + 240.000 = Rp320.000."
    }
];
