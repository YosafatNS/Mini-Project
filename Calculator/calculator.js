const buttons = document.querySelectorAll("button");
const viewHasil = document.querySelector(".view-hasil");
const isiHistory = document.querySelector(".isi-history");

let inputan = "";

// Fungsi hitung hasil
function hitung() {
  try {
    const hasil = eval(inputan); // hitung ekspresi
    viewHasil.value = hasil.toLocaleString("id-ID"); // tampilkan dengan format ribuan
    isiHistory.innerHTML += `<p>${inputan} = ${hasil.toLocaleString("id-ID")}</p>`;
    inputan = hasil.toString(); // simpan hasil untuk operasi berikutnya
  } catch {
    viewHasil.value = "Error";
    inputan = "";
  }
}

// Fungsi update layar dengan format ribuan
function updateLayar() {
  let display = inputan.replace(/\d+/, n => parseInt(n).toLocaleString("id-ID"));
  viewHasil.value = display ;
}

// Event klik tombol
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    let nilai = btn.innerHTML.trim();

    if (btn.classList.contains("angka") || btn.classList.contains("operator")) {
      if (nilai === "x") nilai = " * ";
      inputan += nilai;
      updateLayar();
    } 
    else if (btn.classList.contains("reset")) {
      inputan = "";
      updateLayar();
    } 
    else if (btn.classList.contains("delete")) {
      inputan = inputan.slice(0, -1);
      updateLayar();
    } 
    else if (btn.classList.contains("hasil")) {
      hitung();
    } 
    else if (btn.classList.contains("clear")) {
      isiHistory.innerHTML = "";
    }
  });
});

// Event keyboard
document.addEventListener("keydown", (e) => {
  if (/[0-9]/.test(e.key) || /[+\- */.%]/.test(e.key)) {
    inputan += e.key;
    updateLayar();
  } 
  else if (e.key === "Enter" || e.key === "=") {
    // e.preventDefault(); // cegah submit form
    hitung();
  } 
  else if (e.key === "Backspace") {
    // e.preventDefault(); // cegah browser mundur halaman
    inputan = inputan.slice(0, -1);
    updateLayar();
  } 
  else if (/[cC]/.test(e.key)) {
    // e.preventDefault();
    inputan = "";
    updateLayar();
  } 
  else if (e.key === "Escape") {
    e.preventDefault(); // cegah efek default
    // inputan = "";
    // updateLayar();
    isiHistory.innerHTML = "";
  }
});


// CLOCK
    setInterval(() => {
        const now = new Date();
        const time = now.toLocaleTimeString();

        document.getElementById("clock").innerHTML = time;
    });