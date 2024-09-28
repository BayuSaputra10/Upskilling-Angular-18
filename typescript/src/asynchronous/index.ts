// Synchronous => artinya berjalan secara berurutan 1 sama lain dari line atas ke bawah
// console.log('Start');
// console.log('Membuat kopi ABC');
// console.log('Finish');

// Asynchronous => tidak berjalan berurutan dan tidak menunggu proses line di atasnya selesah dahulu baru line berikutnya berjalan
// Dibutuhkan ketika menangani proses yang tidak menolerir proses line per line
// Contohnya -> HIT API

// setTimeout()
// console.log('Start');
// setTimeout(() => {
//   console.log('Membuat kopi ABC');
// }, 3000);
// console.log('Finish');

// 2 Jenis Penerapan Async => Callback dan Promise
// Async/Await => setelah dibuat proses promise

// Simulasi get data / fetch data
// function getMovie() {
//   let movies = []
//   console.log('Mendapatkan data dari API');
//   setTimeout(() => {
//     const response = ['Laskar Pelangi', 'KKN Desa Penari', 'Ipar Adalah Maut']
//     movies = response
//     // console.log({ movies });
//   }, 3000);
//   return movies
// }

// console.log('Start');
// console.log(getMovie());
// console.log('Finish');
