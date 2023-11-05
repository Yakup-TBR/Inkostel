// JavaScript untuk mengubah warna saat teks adalah "Jual"
const elements = document.querySelectorAll(".sidebar ul a");
elements.forEach(element => {
    if (element.innerText.includes("Jual")) {
        element.style.color = "#E29578"; // Merubah warna teks menjadi merah
        element.style.borderColor = "#E29578"; // Merubah warna border menjadi merah
        element.querySelector("i").style.color = "#E29578"; // Merubah warna ikon menjadi merah
    }
});


function displayItems(items) {
  const savedCardsContainer = document.getElementById("saved-cards");
  savedCardsContainer.innerHTML = ""; // Kosongkan kontainer kartu yang disimpan

  items.forEach(data => {
    createSavedCard(data);
  });
}

// Event listener for search input
document.getElementById('searchInput').addEventListener('input', (e) => {
  const searchData = e.target.value.toLowerCase();
  const filteredData = cardData.filter((item) => {
    return item.title.toLowerCase().includes(searchData);
  });
  displayItems(filteredData);
});

// Event listener for search input
document.getElementById('searchInput').addEventListener('input', () => {
  const searchData = document.getElementById('searchInput').value.toLowerCase();
  const savedCards = document.querySelectorAll('.card'); // Ambil semua kartu yang tersimpan

  savedCards.forEach(card => {
      const title = card.querySelector('.card-title').textContent.toLowerCase();
      if (title.includes(searchData)) {
          card.style.display = 'block'; // Tampilkan kartu yang cocok
      } else {
          card.style.display = 'none'; // Sembunyikan kartu yang tidak cocok
      }
  });
});

// Ambil semua tombol filter
const filterButtons = document.querySelectorAll('.filter-button .btn');

// Tambahkan event listener pada setiap tombol filter
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filterType = button.getAttribute('data-filter'); // Dapatkan jenis filter dari atribut data-filter

    // Ambil semua kartu yang tersimpan
    const savedCards = document.querySelectorAll('.card');

    // Lakukan pemfilteran berdasarkan jenis filter
    savedCards.forEach(card => {
      card.style.display = 'block'; // Tampilkan semua data

      if (filterType !== 'semua') {
        const cardText1 = parseInt(card.querySelector('.card-text1').textContent);
        const cardText2 = parseInt(card.querySelector('.card-text2').textContent);

        if (
          (filterType === 'putra' && !card.querySelector('.card-title').textContent.toLowerCase().includes('putra')) ||
          (filterType === 'putri' && !card.querySelector('.card-title').textContent.toLowerCase().includes('putri')) ||
          (filterType === 'termurah' && cardText1 > 10) ||
          (filterType === 'terdekat' && cardText2 < 1000)
        ) {
          card.style.display = 'none'; // Sembunyikan kartu yang tidak cocok dengan filter
        }
      }
    });
  });
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
  cardImage.classList.add("card-img-top"); // Atur kelas 

  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = data.title;

  const cardText1 = document.createElement("p");
  cardText1.classList.add("card-text1");
  cardText1.textContent = data.cardText1;

  const cardText2 = document.createElement("p");
  cardText2.classList.add("card-text2");
  const cardText2Value = parseInt(data.cardText2);

  
  cardBody.appendChild(cardImage); // Tambahkan gambar ke dalam kartu
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText1);
  cardBody.appendChild(cardText2);

  cardImage.addEventListener("click", () => {
    window.location.href = 'detailKos.html'; //mengarahkan ke url gambar
  });

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
