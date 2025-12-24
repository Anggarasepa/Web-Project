const inputNilai = document.getElementById("nilai");
const tombol = document.getElementById("cek");
const hasil = document.getElementById("hasil");

tombol.addEventListener("click", function () {
    hasil.className = "";
    
    let nilai = inputNilai.value;

    if (nilai === "") {
        hasil.innerText = "Nilai tidak boleh kosong";
        hasil.classList.add("error");
        return;
    }

    nilai = Number(nilai);

    if (isNaN(nilai)) {
        hasil.innerText = "Input harus angka";
        hasil.classList.add("error");
        return;
    }

    if (nilai < 0 || nilai > 100) {
        hasil.innerText = "Nilai tidak valid";
        hasil.classList.add("error");
        return;
    }

    if (nilai >= 90) {
        hasil.innerText = "Lulus (A)";
        hasil.classList.add("lulus");
    } else if (nilai >= 75) {
        hasil.innerText = "Lulus (B)";
        hasil.classList.add("lulus");
    } else {
        hasil.innerText = "Tidak Lulus";
        hasil.classList.add("tidak-lulus");
    }
});
