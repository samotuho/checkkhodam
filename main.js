function khodam() {
  const inputName = document.getElementById("inputName").value.trim();

  if (inputName === "") {
    alert("Masukkan nama kamu terlebih dahulu!");
    return;
  }

  let storedData = JSON.parse(localStorage.getItem("khodamData")) || {};

  if (storedData[inputName]) {
    // Jika input sudah ada di local storage, gunakan hasil yang sama
    document.getElementById("namaKhodam").innerHTML = storedData[inputName];
  } else {
    // Jika input belum ada di local storage, buat hasil baru
    const kumpulanJawaban = [
      "Pocong kidal",
      "kutu rambut",
      "Gendoruwo mini",
      "Tuyul jumbo",
      "Tuyul ngondek",
      "Tawon glowing",
      "Pocong kekinian",
      "Hantu pelupa",
      "Tuyul galau",
      "Kuntilanak nyasar",
      "Genderuwo lucu",
      "Jin rempong",
      "Setan jomblo",
      "Leak centil",
      "Banaspati mager",
      "Siluman teletubbies",
      "Hantu ngopi",
      "Tuyul disko",
      "Kuntilanak joget",
      "Pocong narsis",
      "Tuyul kpop",
      "Kuntilanak curhat",
      "Genderuwo imut",
      "Jin kepo",
      "Banaspati selfie",
      "Siluman unyu",
      "Demit heboh",
      "Tuyul nge-vlog",
      "",
      "",
      "",
      "",
      "",
      "",
    ];

    const jawabanAcak = Math.floor(Math.random() * kumpulanJawaban.length);
    const hasilAcak = kumpulanJawaban[jawabanAcak];

    document.getElementById("namaKhodam").innerHTML = hasilAcak;

    // Simpan input dan hasil ke local storage
    storedData[inputName] = hasilAcak;
    localStorage.setItem("khodamData", JSON.stringify(storedData));
  }

  var modal = document.getElementById("khodamModal");
  modal.style.display = "flex";
}

// Ambil elemen modal
var modal = document.getElementById("khodamModal");
modal.style.display = "none";

// Ambil elemen <span> yang menutup modal
var span = document.getElementsByClassName("close")[0];

// Ketika pengguna mengklik <span> (x), tutup modal
span.onclick = function () {
  modal.style.display = "none";
};

// Ketika pengguna mengklik di mana saja di luar modal, tutup modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
