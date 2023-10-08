function showSignUpForm() {
    // Mengaktifkan transformasi header
    const header = document.querySelector(".header");
    const headerText = document.querySelector(".header p");
    header.style.transform = "translateX(-100%)";
    headerText.style.transform = "translateX(-100%)";

    // Menampilkan form sign up dengan efek slide
    const formContainer = document.querySelector(".form-container");
    formContainer.classList.toggle("signup-active");

    // Menunda pengalihan ke halaman "signup.html" selama 600ms (sesuaikan dengan durasi efek slide Anda)
    setTimeout(function () {
        window.location.href = "signup.html";
    }, 600);
}
