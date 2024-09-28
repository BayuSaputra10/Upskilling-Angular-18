/**
 * Tuple (array), tetapi dia bisa menerima tipe data yang berbeda,
 * tetapi dengan kondisi jumlah dan tipe elemen yang tetap
 * Pembuatan => variable: [tipedata1, tipedata2, tipedata3]
 */

let book: [string, number, boolean]
book = ['Kiat sukses menjadi programmer TypeScript', 1235, true]
console.log(book)
// Tidak bisa tukar tipe datanya
// book = [1235, true, "Kiat sukses menjadi programmer"]

// Tidak bisa menambah elemen
// book = ["Kiat sukses menjadi programmer TypeScript", 1235, true, 2020]
