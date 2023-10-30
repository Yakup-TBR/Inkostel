// JavaScript untuk mengubah warna saat teks adalah "Jual"
const elements = document.querySelectorAll(".sidebar ul a");
elements.forEach(element => {
    if (element.innerText.includes("Jual")) {
        element.style.color = "#E29578"; // Merubah warna teks menjadi merah
        element.style.borderColor = "#E29578"; // Merubah warna border menjadi merah
        element.querySelector("i").style.color = "#E29578"; // Merubah warna ikon menjadi merah
    }
});

function redirectToAnotherPage() {
    // Ganti URL di bawah ini dengan URL halaman tujuan Anda
    window.location.href = 'detailKos.html';
  }
