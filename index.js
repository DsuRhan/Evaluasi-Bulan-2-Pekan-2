import {
    tambahBuku,
    lihatBuku,
    updateBuku,
    hapusBuku,
    cariBukuDenganJudul,
    cariBukuDenganPenulis,
    lihatBukuTersedia,
    tambahBanyakBuku
} from "./buku.js"

tambahBuku("Parable", "Brian Khrisna", 2021);
lihatBuku();
updateBuku(1, { tersedia: false });
hapusBuku(4);
lihatBuku();
console.log(cariBukuDenganJudul("Funiculi Funicula"));
console.log(cariBukuDenganPenulis("Brian Khrisna"));
lihatBukuTersedia();
tambahBanyakBuku(
    { judul: "Buku A", penulis: "Penulis A", tahun: 2020 },
    { judul: "Buku B", penulis: "Penulis B", tahun: 2021 }
);
lihatBuku();
tambahBuku();
tambahBanyakBuku();