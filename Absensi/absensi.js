let dataAbsensi = JSON.parse(localStorage.getItem('absensi')) || [];

function renderTable() {
    const table = document.getElementById('tableAbsensi');
    table.innerHTML = "";
    dataAbsensi.forEach((absen, index) => {
        table.innerHTML += `
        <tr class="bg-stone-500 text-center h-12 border-b">
            <td class="border-r-2">${index +1}</td>
            <td class="">${absen.nama}</td>
            <td>${absen.jabatan}</td>
            <td>${absen.tanggal}</td>
            <td>${absen.waktu}</td>
            <td>${absen.status}</td>
            <td class="action"><button onclick="btnHapus(${index})" 
            class="p-1 bg-red-500 rounded-md ">Hapus</button></td>
        </tr>
        `;
    })
    localStorage.setItem('absensi', JSON.stringify(dataAbsensi));
}

function tambahAbsensi() {
    const nama = document.querySelector('.nama').value;
    const jabatan = document.querySelector('.jabatan').value;
    const status = document.querySelector('.status').value;

    if(!nama || !jabatan || !status) {
        alert("Masukkan Nama, Jabatan dan Status dengan benar");
        return;   
    }


    const now = new Date();
    const tanggal = now.toLocaleDateString('id-ID');
    const waktu = now.toLocaleTimeString('id-ID');

    dataAbsensi.push({nama, jabatan, status, tanggal, waktu})
    renderTable();

    document.getElementById('nama').value = "";
    document.getElementById('jabatan').value = "";
    document.getElementById('status').value = "";
}

function btnHapus(index) {
    dataAbsensi.splice(index, 1);
    renderTable();
}

renderTable();


function printPDF() {
    const printAbsensi = document.getElementById("daftarAbsensi").innerHTML;
    const printContents = document.body.innerHTML;

    document.body.innerHTML = `
        <style>
            body {
                padding:20px;
                print-color-adjust: exact;
            }
            h1  {
                text-align: center;
                margin-bottom: 10px;
            }
            button  {
                display: none;
            }
            .action {
                display:none;
            }     
        </style>
        
        <h1 class="text-center font-bold mb-4"> ABSENSI KARYAWAN </h1>
        <div>${printAbsensi}</div>
    `
    window.print();
    document.body.innerHTML = printContents;
}
