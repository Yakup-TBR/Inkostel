// JavaScript untuk mengubah warna saat teks adalah "Jual"
const elements = document.querySelectorAll(".sidebar ul a");
elements.forEach(element => {
    if (element.innerText.includes("Jual")) {
        element.style.color = "#E29578"; // Merubah warna teks menjadi merah
        element.style.borderColor = "#E29578"; // Merubah warna border menjadi merah
        element.querySelector("i").style.color = "#E29578"; // Merubah warna ikon menjadi merah
    }
});


// Ambil elemen kontainer untuk kartu yang disimpan
const savedCardsContainer = document.getElementById("saved-cards");

// Ambil data dari Local Storage dan tampilkan kartu yang disimpan
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith("bookmark_")) {
        const kostData = JSON.parse(localStorage.getItem(key));
        createSavedCard(kostData);
    }
}

// Fungsi untuk membuat dan menambahkan kartu yang disimpan
// menambahkan kunci kartu sebagai argumen
function createSavedCard(data, key) {
  const cardCol = document.createElement("div");
  cardCol.classList.add("col-md-3", "mb-4");

  const card = document.createElement("div");
  card.classList.add("card");

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  // Tambahkan gambar kartu dari data yang tersimpan
  const cardImage = document.createElement("img");
  cardImage.src = data.imageSrc; // Ambil URL gambar dari data
  cardImage.classList.add("card-img-top"); // Atur kelas sesuai dengan kebutuhan

  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = data.title;

  const cardText1 = document.createElement("p");
  cardText1.classList.add("card-text1");
  cardText1.textContent = data.cardText1;

  const cardText2 = document.createElement("p");
  cardText2.classList.add("card-text2");
  cardText2.textContent = data.cardText2;

  cardBody.appendChild(cardImage); // Tambahkan gambar ke dalam kartu
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText1);
  cardBody.appendChild(cardText2);

  card.appendChild(cardBody);
  cardCol.appendChild(card);

  savedCardsContainer.appendChild(cardCol);

    // Buat tombol "Hapus"
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Hapus";
    deleteButton.classList.add("btn", "btn-danger");
  
    // Event listener untuk menghapus kartu dan menghapus data dari Local Storage
    deleteButton.addEventListener("click", () => {
    // Hapus data dari Local Storage
    localStorage.removeItem(key);

    // Hapus kartu dari tampilan
    savedCardsContainer.removeChild(cardCol);
  });

  // Tambahkan tombol "Hapus" ke dalam elemen kartu
  cardBody.appendChild(deleteButton);

}

// Fungsi untuk mengambil dan menampilkan kartu yang di-bookmark dari Local Storage
function showSavedCards() {
  const savedCardsContainer = document.getElementById("saved-cards");
  savedCardsContainer.innerHTML = ""; // Bersihkan elemen kontainer kartu yang disimpan

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith("bookmark_")) {
      const kostData = JSON.parse(localStorage.getItem(key));
      createSavedCard(kostData, key); // Kirim kunci kartu sebagai argumen
    }
  }
}

// Panggil fungsi showSavedCards saat halaman "Simpan" dimuat
window.addEventListener('load', showSavedCards);
