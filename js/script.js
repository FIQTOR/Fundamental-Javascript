// Ini adalah alert
// alert('berhasil')

// Variable
// var oke = 25
// let oke2 = 50
// const oke3 = 100

// alert(`berhasil ${oke3}`)

// Tipe data
// var num = 5
// var str = '564'
// var bool = false
// var array = ['Apel', 'Anggur', 'Nanas']

// console.log(typeof num);
// console.log(typeof x);
// console.log(typeof bool);
// console.log(typeof array);

// Aritmatika
// var x = 33
// var y = 5

// Shift + alt + panah ke bawah
// var pertambahan = x + y
// var pengurangan = x - y
// var perkalian = x * y
// var pembagian = x / y
// var hasilbagi = x % y

// console.log(pertambahan);
// console.log(pengurangan);
// console.log(perkalian);
// console.log(pembagian);
// console.log(hasilbagi);

// Kondisi

// var nilai = 100

// if (nilai > 50) {
//   alert('Belajar lagi')
// }

// if (nilai == 100) {
//   alert('bagus')
// }

// var warna = 'ungu'

// switch (warna) {
//   case 'biru':
//     alert(`Warna adalah ${warna}`)
//     break
//   case 'kuning':
//     alert(`Warna adalah ${warna}`)
//     break
//   case 'hijau':
//     alert(`Warna adalah ${warna}`)
//     break
//   case 'ungu':
//     alert(`Warna adalah ${warna}`)
//     break
//   default:
//     alert('Warna tidak ada')
//     break
// }

// Ternary
// var nilai = 30
// var pesan = (nilai > 50) ? 'belajar lagi' : 'nilai terlalu rendah'
// alert(pesan)

// Perulangan
// for (let i = 1; i <= 10; i = i + 1) {
//   console.log(`Index adalah ${i}`);
// }

// let i = 0
// while (i < 10) {
//   console.log(i);
//   i++
// }

// let index = 12
// let data = 1
// while (index) {
//   console.log("test data index = " + data)
//   index--
//   data++
// }

// Array
let colors = ['biru', 'kuning', 'merah', 'ungu']
// console.log(array.length);


// Menggunakan for loop
// for (let index = 0; index <p array.length; index++) {
//   console.log(`Warna adalah ${array[index]}`);
// }

// Mengunakan foreach
// colors.forEach(color => {
//   console.log(`Warna adalah ${color}`);
// })

// Menggunakan map
// colors.map((color, index) => {
//   console.log(`Warna dari index ${index} adalah ${color}`);
// })

// String
// let grup = 'Aku-adalah-manusia'

// Replace
// grup = grup.replace('manusia', 'hewan')
// console.log(grup);

// Split
// grup = grup.split('-')
// console.log(grup[grup.length - 1]);

// Object
// var mobil = [
//   {
//     merek: 'Honda',
//     terbitantahun: '2024'
//   },
//   {
//     merek: 'Toyota',
//     terbitantahun: '2020'
//   },
//   {
//     merek: 'Toyota',
//     terbitantahun: '2022'
//   },
//   {
//     merek: 'Toyota',
//     terbitantahun: '2021'
//   },
//   {
//     merek: 'Toyota',
//     terbitantahun: '2025'
//   },
//   {
//     merek: 'Toyota',
//     terbitantahun: '2026'
//   }
// ]

// // mobil.merek = 'Toyota'
// // mobil.terbitantahun = '2020'

// // console.log(`Merek adalah ${mobil[0].merek} terbitan tahun ${mobil[0].terbitantahun}`);
// mobil.map(mob => {
//   console.log(`Merek adalah ${mob.merek} terbitan tahun ${mob.terbitantahun}`);
// })

// Function
// function getNilai(value, value2) {
//   value += value2
//   return value
// }

// let nilai = getNilai(30, 20)
// console.log(nilai);

// let title = document.getElementById('title')
// // title.innerText = 'Halo Dunia!'
// title.innerHTML = '<p>Halo Dunia!</p>'
// // title.textContent = 'Halo Dunia!'
// console.log(title);

// Class menggunakan tanda .
// Id menggunakan tanda #
// Tag menggunakan tanda tag

let titles = document.querySelectorAll('h1')

titles.forEach(title => {
  title.innerHTML = 'Hallo Dunia!'
})

console.log(titles);