
// JavaScript untuk mengubah warna saat teks adalah "Jual"
const elements = document.querySelectorAll(".sidebar ul a");
elements.forEach(element => {
    if (element.innerText.includes("Jual")) {
        element.style.color = "#E29578"; // Merubah warna teks menjadi merah
        element.style.borderColor = "#E29578"; // Merubah warna border menjadi merah
        element.querySelector("i").style.color = "#E29578"; // Merubah warna ikon menjadi merah
    }
});

  // Data card
  const cardData = [
    {
        carouselId: "carouselExample1",
        imageSrc: "../img/gambar kos.jpg",
        title: "Kos Putra PGA",
        cardText1: "5",
        cardText2: "500"
    },
    {
        carouselId: "carouselExample2",
        imageSrc: "../img/gambar kos.jpg",
        title: "Kos Putra PGA",
        cardText1: "15",
        cardText2: "1500"
    },
    {
        carouselId: "carouselExample3",
        imageSrc: "../img/gambar kos.jpg",
        title: "Kos Putra PGA",
        cardText1: "5",
        cardText2: "600"
    },
    {
        carouselId: "carouselExample4",
        imageSrc: "../img/gambar kos.jpg",
        title: "Kos Putra PGA",
        cardText1: "15",
        cardText2: "2000"
    },
    {
        carouselId: "carouselExample5",
        imageSrc: "../img/gambar kos.jpg",
        title: "Kos Putri Permata Buah Batu",
        cardText1: "5",
        cardText2: "1000"
    },
    {
        carouselId: "carouselExample6",
        imageSrc: "../img/gambar kos.jpg",
        title: "Kos Putri Permata Buah Batu",
        cardText1: "15",
        cardText2: "600"
    },
    {
        carouselId: "carouselExample7",
        imageSrc: "../img/gambar kos.jpg",
        title: "Kos Putri Permata Buah Batu",
        cardText1: "5",
        cardText2: "1500"
    },
    {
        carouselId: "carouselExample8",
        imageSrc: "../img/gambar kos.jpg",
        title: "Kos Putri Permata Buah Batu",
        cardText1: "15",
        cardText2: "1500"
    },
  ];

    // Event listener for search input
    document.getElementById('searchInput').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filteredData = cardData.filter((item) => {
      return (
        item.title.toLowerCase().includes(searchData)
      );
    });
    displayItems(filteredData);
  });
  
  // Function to display filtered items
  function displayItems(data) {
    const cardContainer = document.querySelector("#conmain .row");
    cardContainer.innerHTML = ""; // Clear the existing items
  
    data.forEach((item) => {
      createCard(item);
    });
  }

  // Ambil semua tombol filter
const filterButtons = document.querySelectorAll('.filter-button .btn');

// Tambahkan event listener pada setiap tombol filter
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filterType = button.getAttribute('data-filter'); // Dapatkan jenis filter dari atribut data-filter

    // Lakukan pemfilteran berdasarkan jenis filter
    const filteredData = cardData.filter(item => {
      if (filterType === 'semua') {
        return true; // Tampilkan semua data jika filter adalah "Semua"
      } else if (filterType === 'putra') {
        return item.title.includes('Putra'); // Filter berdasarkan "Putra"
      } else if (filterType === 'putri') {
        return item.title.includes('Putri'); // Filter berdasarkan "Putri"
      } else if (filterType === 'termurah') {
        return parseInt(item.cardText1) <= 10; // Filter item dengan cardText1 kurang dari atau sama dengan 10
      }else if (filterType === 'terdekat') {
        return parseInt(item.cardText2) < 1000; // Filter item dengan cardText2 kurang dari atau sama dengan 1000
      }
    });
    // Tampilkan data yang telah difilter
    displayItems(filteredData);
  });
});


  // Fungsi untuk membuat dan menambahkan kartu ke dalam elemen kontainer
  function createCard(data) {
    const cardContainer = document.querySelector("#conmain .row");
    const cardCol = document.createElement("div");
    cardCol.classList.add("col-md-3", "mb-4");

    const card = document.createElement("div");
    card.classList.add("card");

    const carousel = document.createElement("div");
    carousel.classList.add("border-image");
    carousel.id = data.carouselId;

    const carouselInner = document.createElement("div");
    carouselInner.classList.add("carousel", "inner");

    const carouselItem = document.createElement("div");
    carouselItem.classList.add("carousel-item", "active");

    const img = document.createElement("img");
    img.src = data.imageSrc;
    img.classList.add("d-block", "w-100");
    img.alt = "";

    carouselItem.appendChild(img);
    carouselInner.appendChild(carouselItem);
    carousel.appendChild(carouselInner);

    img.addEventListener("click", () => {
        window.location.href = 'detailKos.html' ; // Arahkan ke URL gambar
    });

    card.appendChild(carousel);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

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

    const bookmarkIcon = document.createElement("i");
    bookmarkIcon.classList.add("bi", "bi-bookmark");
    bookmarkIcon.style.position = "relative";
    bookmarkIcon.style.fontSize = "30px";
    bookmarkIcon.style.color = "#41EBC6"; 
    bookmarkIcon.style.marginLeft = "180px";
    bookmarkIcon.style.top = "-100px";
    
    
    // Menambahkan event listener untuk mengubah ikon bookmark saat diclick
    bookmarkIcon.addEventListener("click", () => {
        if (bookmarkIcon.classList.contains("bi-bookmark")) {
            bookmarkIcon.classList.remove("bi-bookmark");
            bookmarkIcon.classList.add("bi-bookmark-fill");
        } else {
            bookmarkIcon.classList.remove("bi-bookmark-fill");
            bookmarkIcon.classList.add("bi-bookmark");
        }
    });
    

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText1);
    cardBody.appendChild(cardText2);
    cardBody.appendChild(bookmarkIcon);
    card.appendChild(cardBody);

    cardCol.appendChild(card);
    cardContainer.appendChild(cardCol);
  }

  // Panggil createCard untuk setiap data card
  cardData.forEach(createCard);



 

