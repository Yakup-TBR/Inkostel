let originalValue = "";
let currentValue = "";
// Fungsi untuk mengubah warna tombol Simpan saat pengguna menginput
function changeButtonColor() {
    currentValue = document.getElementById("userInput").value;
    if (currentValue !== originalValue) {
        document.getElementById("saveButton").style.backgroundColor = "#6DD6BF";
    } else {
        document.getElementById("saveButton").style.backgroundColor = "#6DD6BF";
    }
}
// Fungsi untuk menyimpan nilai inputan
function saveForm() {
originalValue = currentValue;
document.getElementById("saveButton").style.backgroundColor = "#595959";
}
// Fungsi untuk membatalkan perubahan
