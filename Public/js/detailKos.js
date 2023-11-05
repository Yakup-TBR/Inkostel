
// Simpan harga perbulan dan harga pertahun dalam variabel
var hargaPerbulan = "1.250.000";
var hargaPertahun = "15.000.000";
var tampilkanHargaPertahun = false; // Menggunakan variabel untuk melacak tampilan harga

function tampilkanHarga() {
    // Mengambil elemen tombol "Perbulan" dan "Pertahun" berdasarkan class
    var tombolPerbulan = document.querySelector('.dropdown-item');
    var tombolPertahun = document.querySelector('.dropdown-toggle .text-color');

    // Mengambil elemen harga berdasarkan id
    var hargaElement = document.getElementById("harga-tahun");

    if (tampilkanHargaPertahun) {
        // Menampilkan harga pertahun
        hargaElement.innerHTML = "RP " + hargaPertahun;
        tombolPerbulan.textContent = "Perbulan";
        tombolPertahun.textContent = "Pertahun";
    } else {
        // Menampilkan harga perbulan
        hargaElement.innerHTML = "RP " + hargaPerbulan;
        tombolPerbulan.textContent = "Pertahun";
        tombolPertahun.textContent = "Perbulan";
    }
}

function ubahHarga() {
    tampilkanHargaPertahun = !tampilkanHargaPertahun; // Toggle variabel
    // Tampilkan harga yang sesuai
    tampilkanHarga();
}

const navBar = document.querySelector("nav"),
                menuBtn = document.querySelectorAll(".menu-icon"),
                overlay = document.querySelector(".overlay");
        console.log(navBar, menuBtn, overlay);

        menuBtn.forEach(menuBtn => {
            menuBtn.addEventListener("click", () => {
                navBar.classList.toggle("open");
            });
        });

        overlay.addEventListener("click", () => {
            navBar.classList.remove("open");
        });