const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

document.getElementById("loginButton").addEventListener("click", function(event) {
  // Menghentikan perilaku bawaan form (mengirim data) agar tidak mengarahkan ke halaman lain
  event.preventDefault();

  // Mengarahkan pengguna ke halaman lain, ganti URL "halaman_tujuan.html" dengan URL yang sesuai
  window.location.href = "index.html";
});