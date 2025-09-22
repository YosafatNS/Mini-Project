// Mengitung Nilai Akhir    
function hitungHasilAkhir(form) {
    // Buat Fungsi baru dengan paramter kosong dan isi dibawahnya
    const tugas = parseFloat(form.querySelector(".nilaiTugas").value) || 0;
    const uts = parseFloat(form.querySelector(".nilaiUTS").value) || 0;
    const uas = parseFloat(form.querySelector(".nilaiUAS").value) || 0;

    // Perhitungan Nilai AKhir
    let Akhir = (tugas*0.3) + (uts*0.3) + (uas*0.4) ;

    // konversi nilai ke huruf
    let Huruf = " " ;
        if (Akhir >= 90 && Akhir <= 100) {
            Huruf = "A";
        } else if (Akhir >= 80 && Akhir < 90) {
            Huruf = "B";
        } else if (Akhir >= 70 && Akhir < 80) {
            Huruf = "C";
        } else if (Akhir >= 60 && Akhir < 70) {
            Huruf = "D";
        } else if (Akhir >= 0 && Akhir < 60){
            Huruf = "E";
        } else {
            Huruf = "Error";
        }
    // Menampilkan di Nilai Akhir
    form.querySelector(".nilaiAkhir").value = Akhir;
    form.querySelector(".nilaiHuruf").value = Huruf;
 
  }
  //   memberikan fungsi baru dengan parameter wajib seluruhnya menggunakan parameter data
    function addNilai(data) {
        // Membuat isiData dengan parameter data mengambil di 3 class HTML
        const isiData = data.querySelectorAll(".nilaiTugas , .nilaiUTS , .nilaiUAS");
        // Setiap isiData mempunyai parameter input
        isiData.forEach(input => {
            // pada Parameter input diberikan interaksi diambil di Tag dengan isinya nilai Akhir parameter data
            input.addEventListener("input",() => hitungHasilAkhir(data));
        })
    }
    // mengambil seluruh kelas form-nilai dengan setiap fungsi parameter nilai 
    document.querySelectorAll(".form-nilai").forEach(nilai => {
        // memanggil fungsi addNilai dengan parameter nilai
        addNilai(nilai);
    })
// END Perhitungan Hasil 

  // Tambahkan Matkul
function tambahNilai() {
    const nilaiMatkul = document.getElementById("dosen-nilai-matkul");
    const formNilai = document.querySelector("#form-nilai"); // ambil template pertama
    const newNilai = formNilai.cloneNode(true);

      newNilai.querySelectorAll("input").forEach(input => {
        if (input.type === "text" || input.type === "number") {
          input.value;
        }
      })
      attachEventListener(newNilai);
      nilaiMatkul.appendChild(newNilai);
  }

  function attachEventListener(newNilai) {
    const add = newNilai.querySelectorAll(".nilaiTugas, .nilaiUTS, .nilaiUAS");

    add.forEach(input => {
      input.addEventListener("input", () => hitungHasilAkhir(newNilai));
    })
  }



  // Hapus Form Nilai  
function hapusNilai() {
    const nilaiMatkul = document.getElementById("dosen-nilai-matkul");
    // membuat constanta FormNilai dari nilaiMatkul diambil dari seluruh class form-nilai
    const formNilai = nilaiMatkul.querySelectorAll(".form-nilai");
    // jika paramter formNilai banyaknya lebih dari 1
    if(formNilai.length > 1) {
      // formNilai dijadikan array karena memungkinkan ada lebih dari 1 dan dikurangi 1 
        formNilai[formNilai.length - 1].remove();
        // selain itu formNilai dibawah 1 tampilan akan Error
    } else {
        alert("Minimal 1 Form Nilai");
    }
  }

//   Fungsi Reset Isian kolom inputan Form
function resetForm() {
    const semuaFormBiodata = document.querySelectorAll("#biodata-mahasiswa");
    // membuat const form dari Biodata dengan mengambil id
    semuaFormBiodata.forEach(biodata => {
      // form Biodata untuk setiap paramter Biodata
      biodata.querySelectorAll("#nim, #nama, #email, #telepon, #jurusan, #semester").forEach(input => input.value = "");
      // Parameter biodata berisi id untuk setiap tag input berisi nilai nilai input
    })

    const semuaFormNilai = document.querySelectorAll("#dosen-nilai-matkul");
    semuaFormNilai.forEach (nilai => {
      nilai.querySelectorAll("#nilaiTugas, #nilaiUTS, #nilaiUAS, #dosen, #matKul, #nilaiAkhir, #nilaiHuruf").forEach(input => input.value = "");
    })
  }


// Simpan Data
function simpanData() {
    // Form Biodata
    const semuaFormBiodata = document.querySelectorAll("#biodata-mahasiswa");
    let dataBiodata = [];
    let validData = true;

    semuaFormBiodata.forEach (data => {
      let nim = document.getElementById("nim").value;
      let nama = document.getElementById("nama").value;
      let email = document.getElementById("email").value;
      let telepon = data.querySelector("#telepon").value;
      let jurusan = data.querySelector("#jurusan").value;
      let semester = data.querySelector("#semester").value;
      // jika data inputan ini ada yang kosong maka valid data False
      if(!nim || !nama || !email || !telepon || !jurusan || !semester) {
        alert("Semua data harus terisi");
        validData = false;
      }
      // jika inputan sudah terisi semua makan Simpan inputan dari Biodata 
      dataBiodata.push({nim, nama, email, telepon, jurusan, semester });
    })
    if(!validData)return;

    // Form Nilai
    const semuaFormNilai = document.querySelectorAll(".form-nilai");
    let dataNilai = [];
    let validNilai = true;

    semuaFormNilai.forEach (nilai => {
      let dosen = nilai.querySelector(".dosen").value;
      let matKul = nilai.querySelector(".matKul").value;
      let tugas = nilai.querySelector(".nilaiTugas").value;
      let uts = nilai.querySelector(".nilaiUTS").value;
      let uas = nilai.querySelector(".nilaiUAS").value;
      let akhir = nilai.querySelector(".nilaiAkhir").value;
      let huruf = nilai.querySelector(".nilaiHuruf").value;

      if(!dosen || !matKul || !tugas || !uts || !uas || !akhir || !huruf){
        alert("Isikan Nilai dahulu");
        validNilai = false;
      }

      dataNilai.push({dosen, matKul, tugas, uts, uas, akhir, huruf});
      
    })
    if(!validNilai)return;

   console.log("Biodata :",dataBiodata);   
   console.log("Nilai dan Mata Kuliah :",dataNilai); 
   alert("Data Berhasil tersimpan");

  //  Render Preview Biodata muncul di HTML
    const tabelBiodata = document.getElementById("biodata-preview");
    tabelBiodata.innerHTML = "";
    dataBiodata.forEach((biodata) => {
      const data = document.createElement('div');
      const tabelBiodata = document.getElementById("biodata-preview"); 
    tabelBiodata.innerHTML = `
          <section id="" class="container mx-auto bg-gray-100 p-4">
            <div class="flex justify-between items-center">
              <h2 class="text-blue-500 font-bold text-xl">Preview Data Mahasiswa</h2>
            </div>
            <p class="border-b pb-1 bg-gray-300 mt-2"></p>  

              <div>
                  <h2 class="mt-4 font-bold text-xl">Biodata Mahasiswa</h2>
                    <table class="w-full mt-4 b">
                      <tbody>
                        <tr>
                          <td class="py-2 px-4 border-b font-medium w-1/4">NIM</td>
                          <td class="py-2 px-4 border-b">: ${biodata.nim}</td>
                        </tr>
                        <tr>
                          <td class="py-2 px-4 border-b font-medium">Nama</td>
                          <td class="py-2 px-4 border-b">: ${biodata.nama}</td>
                        </tr>
                        <tr>
                          <td class="py-2 px-4 border-b font-medium">Email</td>
                          <td class="py-2 px-4 border-b">: ${biodata.email}</td>
                        </tr>
                        <tr>
                          <td class="py-2 px-4 border-b font-medium">Telepon</td>
                          <td class="py-2 px-4 border-b">: ${biodata.telepon}</td>
                        </tr>
                        <tr>
                          <td class="py-2 px-4 border-b font-medium">Jurusan</td>
                          <td class="py-2 px-4 border-b">: ${biodata.jurusan}</td>
                        </tr>
                        <tr>
                          <td class="py-2 px-4 border-b font-medium">Semester</td>
                          <td class="py-2 px-4 border-b">: ${biodata.semester}</td>
                        </tr>
                      </tbody>
                    </table>
                </div>
          </section>
        `;   
        tabelBiodata.appendChild(data);
    })
  
  // Render Tabel Nilai Matkul dan Dosen
    
      const container = document.getElementById("biodata-preview"); // div untuk menampung semua preview

      // Buat section baru untuk setiap klik
      const section = document.createElement("section");
      section.className = "container mx-auto bg-gray-100 px-4 pb-4 mb-8";
      section.innerHTML = `
        <div class="flex justify-between items-center">
          <h2 class="text-blue-500 font-bold text-xl">Preview Nilai Mata Kuliah</h2>
        </div>
        <p class="border-b pb-1 bg-gray-300 mt-2"></p> 

        <div>
          <h2 class="mt-4 font-bold text-xl">Nilai Mata Kuliah</h2>
          <table class="min-w-full mt-4 border">
            <thead class="bg-gray-300 font-semibold text-center">
              <tr>
                <th class="border-2 py-2 px-4">No</th>
                <th class="border-2 py-2 px-4">Mata Kuliah</th>
                <th class="border-2 py-2 px-4">Dosen</th>
                <th class="border-2 py-2 px-4">Tugas</th>
                <th class="border-2 py-2 px-4">UTS</th>
                <th class="border-2 py-2 px-4">UAS</th>
                <th class="border-2 py-2 px-4">Nilai Akhir</th>
                <th class="border-2 py-2 px-4">Nilai Huruf</th>
              </tr>
            </thead>
            <tbody class="bg-white"></tbody>
          </table>
        </div>
      `;
      container.appendChild(section);

  // Ambil tbody tabel untuk masukkan data
      const tbody = section.querySelector("tbody");
      dataNilai.forEach((nilai, index) => {
        const row = document.createElement("tr");
        row.className = "text-center";
        row.innerHTML = `
          <td class="text-sm px-4 py-2">${index + 1}</td>
          <td class="text-sm text-left px-4 py-2">${nilai.matKul}</td>
          <td class="text-sm text-left px-4 py-2">${nilai.dosen}</td>
          <td class="text-sm px-4 py-2">${nilai.tugas}</td>
          <td class="text-sm px-4 py-2">${nilai.uts}</td>
          <td class="text-sm px-4 py-2">${nilai.uas}</td>
          <td class="text-sm px-4 py-2">${nilai.akhir}</td>
          <td class="text-sm px-4 py-2">${nilai.huruf}</td>
        `;
        tbody.appendChild(row);
      });

  // Tambahkan section ke container
 
    document.getElementById('biodata-preview').scrollIntoView({ behavior: 'smooth' });
      
} 
  
 function printPDF() {
    const printContents = document.getElementById("biodata-preview").innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
}