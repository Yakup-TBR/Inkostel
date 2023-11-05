// Event listener untuk tampilkan kartu yang disimpan
document.addEventListener('DOMContentLoaded', function () {
  showSavedCards();
});

// Tampilkan kartu yang disimpan dari Local Storage
function showSavedCards() {
  const savedCardsContainer = document.getElementById("saved-cards");
  savedCardsContainer.innerHTML = ""; // Bersihkan elemen kontainer kartu yang disimpan

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith("bookmark_")) { // Periksa kunci dengan format yang sesuai
      const kostData = JSON.parse(localStorage.getItem(key));
      createSavedCard(kostData, key);
    }
  }
}

// Fungsi untuk membuat dan menambahkan kartu yang disimpan
function createSavedCard(data, key) {
  const savedCardsContainer = document.getElementById("saved-cards");

  const cardCol = document.createElement("div");
  cardCol.classList.add("col-md-3", "mb-4");

  const card = document.createElement("div");
  card.classList.add("card");

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  // Tambahkan gambar kartu dari data yang tersimpan
  const cardImage = document.createElement("img");
  cardImage.src = data.imageSrc;
  cardImage.classList.add("card-img-top");

  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = data.title;

  const cardText1 = document.createElement("p");
  cardText1.classList.add("card-text1");
  cardText1.textContent = data.cardText1;

  const cardText2 = document.createElement("p");
  cardText2.classList.add("card-text2");
  const cardText2Value = parseInt(data.cardText2);

  if (cardText2Value >= 1000) {
    cardText2.textContent = (cardText2Value / 1000) + " KM";
  } else {
    cardText2.textContent = cardText2Value + " Meter";
  }
  
  cardBody.appendChild(cardImage);
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText1);
  cardBody.appendChild(cardText2);

  cardImage.addEventListener("click", () => {
    window.location.href = 'detailKos.html'; //mengarahkan ke url gambar
  });

  // Buat tombol "Hapus"
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Hapus";
  deleteButton.classList.add("btn", "btn-danger");

  // Event listener untuk menghapus kartu dan data dari Local Storage
  deleteButton.addEventListener("click", () => {
    localStorage.removeItem(key);
    savedCardsContainer.removeChild(cardCol);
  });

  cardBody.appendChild(deleteButton);

  card.appendChild(cardBody);
  cardCol.appendChild(card);
  savedCardsContainer.appendChild(cardCol);
}


//Untuk sidebar muncul
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