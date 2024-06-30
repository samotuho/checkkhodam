function khodam() {
  const inputName = document.getElementById("inputName").value.trim();

  if (inputName === "") {
    alert("Masukkan nama kamu terlebih dahulu!");
    return;
  }

  let storedData = JSON.parse(localStorage.getItem("khodamData")) || {};

  var modal = document.getElementById("khodamModal");
  var namaKhodamElement = document.getElementById("namaKhodam");

  if (storedData[inputName]) {
    // Jika input sudah ada di local storage, gunakan hasil yang sama
    namaKhodamElement.innerHTML = "Memuat...";
    modal.style.display = "flex";

    // Tambahkan penundaan sebelum menampilkan hasil
    const delay = Math.floor(Math.random() * 3000) + 2000; // Antara 2000ms dan 5000ms
    setTimeout(() => {
      namaKhodamElement.innerHTML = storedData[inputName];
    }, delay);
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

    // Simpan input dan hasil ke local storage
    storedData[inputName] = hasilAcak;
    localStorage.setItem("khodamData", JSON.stringify(storedData));

    // Tampilkan pesan loading di dalam modal
    namaKhodamElement.innerHTML = "Loading...";
    modal.style.display = "flex";

    // Tambahkan penundaan sebelum menampilkan hasil
    const delay = Math.floor(Math.random() * 500);
    setTimeout(() => {
      namaKhodamElement.innerHTML = hasilAcak;
    }, delay);
  }
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
