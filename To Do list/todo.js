let kegiatanList = [];
let editList = null;

function kegiatanAdd() {
  const kegiatan = document.querySelector(".kegiatan-input").value.trim();
  const kategori = document.getElementById("kategori").value;
  const tanggal = document.querySelector(".tanggal").value;
  const waktu = document.getElementById("waktu").value;
  const cek = document.querySelector(".cek").checked;

  if(!kegiatan || !kategori || !tanggal || !waktu) {
    alert("Harap isi Semuanya");
    return;
  }

  document.querySelector(".kegiatan-input").value = "";
  document.getElementById("kategori").value = "";
  document.querySelector(".tanggal").value = "";
  document.getElementById("waktu").value = "";
  document.querySelector(".cek").checked = false;

  alert("List sudah disimpan");

  console.log("Ini Daftarnya", kegiatanList);

  if(editList !== null) {
    kegiatanList [editList] = {kegiatan, kategori, tanggal, waktu, cek};
    editList = null;
  } else {
    kegiatanList.push({
    kegiatan, 
    kategori, 
    tanggal, 
    waktu, 
    cek
  });
  }

}

function viewList(){
  const viewBody = document.querySelector(".view-body");
  viewBody.innerHTML = "";

  if (kegiatanList.length === 0) {
    viewBody.innerHTML = `
    <p style="
      width: 85%;
      margin: 10px auto;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 8px;
      text-align:center; 
      font-size:20px;"> 
    BELUM ADA ISINYA </p>`
    return;
  }

  kegiatanList.forEach((item, nomor) =>{
    const buatData = document.createElement("div");
    buatData.classList.add("view-item");
    buatData.innerHTML = `
    <h2 style="text-align:center;">${nomor + 1}</h2>
    <p> ${item.kegiatan}</p>
    <h5>${item.tanggal} | ${item.waktu}</h5>
    <h6>${item.kategori} | Urgensi ${item.cek ? "(Ya)" : "(Tidak)"}</h6>
    `


    const tombol = document.createElement("div");
    tombol.style.cssText = 
    "display:flex ; justify-content:space-between; margin-bottom:8px"



    const editItem = document.createElement("a")
    editItem.innerHTML = "Edit"
    editItem.style.cssText = 
    "Background-color:green; padding:4px; color:white; border-radius:8px; border:none; cursor:pointer"
    editItem.href ="#kegiatan";
    
    editItem.addEventListener("click", () => {
      const kegiatanInput = document.querySelector(".kegiatan-input");

      kegiatanInput.value = item.kegiatan;
      document.getElementById("kategori").value = item.kategori;
      document.querySelector(".tanggal").value = item.tanggal;
      document.getElementById("waktu").value = item.waktu;
      document.querySelector(".cek").checked = item.cek;

      editList = nomor;

    })



    const hapusItem = document.createElement("button")
    hapusItem.innerHTML = "Hapus"
    hapusItem.style.cssText =
    "Background-color:red; padding:4px; color:white; border-radius:8px; border:none; cursor:pointer"

    hapusItem.addEventListener("click",() => {
      kegiatanList.splice(nomor, 1);
      viewList();
    })


    viewBody.appendChild(buatData);
    buatData.appendChild(tombol);
    tombol.appendChild(editItem);
    tombol.appendChild(hapusItem);

  })
}
