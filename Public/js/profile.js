let originalValue = "";
let currentValue = "";
let currentNumber = "";
// Fungsi untuk mengubah warna tombol Simpan saat pengguna menginput
function runtwofunction(){
    changeButtonColor();
    formatPhoneNumber();
}
function formatPhoneNumber() {
    const input = document.getElementById('phone');
    let phoneNumber = input.value.replace(/\D/g, ''); // Hapus semua karakter non-digit
    if (phoneNumber.length > 3) {
        let formattedNumber = '';
        for (let i = 0; i < phoneNumber.length; i++) {
            formattedNumber += phoneNumber[i];
            if ((i + 1) % 3 === 0 && (i + 1) < phoneNumber.length) {
                formattedNumber += ' ';
            }
        }
        input.value = formattedNumber;
    }
}

function changeButtonColor() {
    const nameInput = document.getElementById("nameInput");
    const usernameInput = document.getElementById("usernameInput");
    const emailInput = document.getElementById("emailInput");
    const phoneInput = document.getElementById("phone");

    const nameWarning = document.getElementById("nameWarning");
    const usernameWarning = document.getElementById("usernameWarning");
    const emailWarning = document.getElementById("emailWarning");
    const phoneWarning = document.getElementById("phoneWarning");

    const nameValue = nameInput.value;
    const usernameValue = usernameInput.value;
    const emailValue = emailInput.value;
    const phoneValue = phoneInput.value;

    if (nameValue === "" || usernameValue === "" || emailValue === "" || phoneValue === "") {
        document.getElementById("saveButton").style.backgroundColor = "#595959";

        if (nameValue === "") {
            nameWarning.textContent = "Nama tidak boleh kosong";
        } else {
            nameWarning.textContent = "";
        }

        if (usernameValue === "") {
            usernameWarning.textContent = "Username tidak boleh kosong";
        } else {
            usernameWarning.textContent = "";
        }

        if (emailValue === "") {
            emailWarning.textContent = "Alamat email tidak boleh kosong";
        } else {
            emailWarning.textContent = "";
        }

        if (phoneValue === "") {
            phoneWarning.textContent = "Nomor telepon tidak boleh kosong";
        } else {
            phoneWarning.textContent = "";
        }
    } else {
        document.getElementById("saveButton").style.backgroundColor = "#6DD6BF";
        nameWarning.textContent = "";
        usernameWarning.textContent = "";
        emailWarning.textContent = "";
        phoneWarning.textContent = "";
    }
}
// Fungsi untuk menyimpan nilai inputan
function saveForm() {
originalValue = currentValue;
originalValue = currentNumber;
document.getElementById("saveButton").style.backgroundColor = "#595959";
}
// Fungsi untuk membatalkan perubahan