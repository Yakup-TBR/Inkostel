document.getElementById("loginButton").addEventListener("click", function() {
    // Mengarahkan pengguna ke halaman lain, ganti URL "halaman_tujuan.html" dengan URL yang sesuai
    window.location.href = "login.html";
});

document.getElementById("cariButton").addEventListener("click", function() {
    // Mengarahkan pengguna ke halaman lain, ganti URL "halaman_tujuan.html" dengan URL yang sesuai
    window.location.href = "carikost.html";
});

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