function hitungGanjilGenap() {
    // Mengambil nilai yang dimasukkan oleh pengguna
    var bilangan = parseInt(document.getElementById("bilangan").value);

    // Inisialisasi variabel untuk menghitung jumlah ganjil dan genap
    if (bilangan <= 0 || isNaN(bilangan)) {
        alert("Masukkan bilangan bulat positif yang valid.");
    } else {
        var jumlahGanjil = 0;
        var jumlahGenap = 0;

        for (var i = 1; i <= bilangan; i++) {
            if (i % 2 === 0) {
                // Bilangan genap
                jumlahGenap++;
            } else {
                // Bilangan ganjil
                jumlahGanjil++;
            }
        }
    }
        // Menampilkan hasil perhitungan di dalam elemen <span>
        document.getElementById("hasil").innerHTML = "Jumlah Ganjil: " + jumlahGanjil + "<br>Jumlah Genap: " + jumlahGenap;
}