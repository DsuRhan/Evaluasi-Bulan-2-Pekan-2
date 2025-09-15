let listBuku = [
    { id: 1, judul: "Funiculi Funicula", penulis: "Toshikazu Kawaguchi", tahun: 2015, tersedia: true },
    { id: 2, judul: "Bumi", penulis: "Tere Liye", tahun: 2014, tersedia: true },
    { id: 3, judul: "Laskar Pelangi", penulis: "Andrea Hirata", tahun: 2005, tersedia: true },
    { id: 4, judul: "Uzumaki", penulis: "Junji Ito", tahun: 1998, tersedia: false },
    { id: 5, judul: "Omniscient Reader's Viewpoint ", penulis: "SingShong", tahun: 2018, tersedia: true }
];
// Auto increment ID
let nextId = listBuku.length + 1;
//Add New ID everytime a new book get added
export function tambahBuku(judul, penulis, tahun) {
    const newBuku = { id: nextId++, judul, penulis, tahun, tersedia: true };
    listBuku.push(newBuku);
    return newBuku;
};
//Tampilkan BUku
export function lihatBuku() {
    console.log("===============Daftar Buku===========")
    listBuku.forEach(({ id, judul, penulis, tahun, tersedia }) => {
        console.log(`ID: ${id}, Judul: ${judul}, Penulis: ${penulis}, Tahun Terbit: ${tahun}, Status Tersedia: ${tersedia}`);
    });
};
// Update Data Buku
export function updateBuku(id, dataBaru) {
    const index = listBuku.findIndex(s => s.id === id);
    if (index !== -1) {
        listBuku[index] = { ...listBuku[index], ...dataBaru };
        return listBuku[index];
    }
    return null;
};
//Hapus Buku
export function hapusBuku(id) {
    const index = listBuku.findIndex(s => s.id === id);
    if (index !== -1) {
        return listBuku.splice(index, 1)[0];
    }
    return null;
};
//Cari Buku Berdasarkan Judul
export function cariBukuDenganJudul(judul) {
    const bukuYangDicari = listBuku.filter(s => s.judul.toLowerCase().includes(judul.toLowerCase()));
    return bukuYangDicari;
};
//Cari Buku Berdasarkan Penulis
export function cariBukuDenganPenulis(nama) {
    const bukuYangDicari = listBuku.filter(s => s.penulis.toLowerCase().includes(nama.toLowerCase()));
    return bukuYangDicari;
};
//Tampilkan Buku Yang Tersedia
export function lihatBukuTersedia() {
    const bukuYangTersedia = listBuku.filter(buku => buku.tersedia !== false)
    console.log(`Daftar buku yang tersedia: \n${bukuYangTersedia.map(m => m.judul).join(", ")}`);
};
// Tambah banyak buku sekaligus dengan rest parameter
export function tambahBanyakBuku(...daftarBukuBaru) {
    const bukuDitambahkan = [];
    daftarBukuBaru.forEach(({ judul, penulis, tahun }) => {
        const bukuBaru = { id: nextId++, judul, penulis, tahun, tersedia: true };
        listBuku.push(bukuBaru);
        bukuDitambahkan.push(bukuBaru);

    });
    console.log(`${daftarBukuBaru.length} buku berhasil ditambahkan`)
    return bukuDitambahkan;
}
