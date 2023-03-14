// NO 1
// Built-in function JS
// 1) toUpperCase() & toLowerCase(), digunakan untuk mengubah string menjadi huruf besar atau huruf kecil.
let str = "Hello, world!";
console.log(str.toUpperCase()); // Output: "HELLO, WORLD!"
console.log(str.toLowerCase()); // Output: "hello, world!"
// 2) Object.keys(), digunakan untuk mengambil array yang berisi nama-nama properti dari sebuah object.
let obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj)); // Output: ["a", "b", "c"]
// 3) push(), digunakan untuk menambahkan satu atau lebih elemen pada akhir array.
let arr1 = [1, 2, 3];
arr1.push(4);
console.log(arr1); // Output: [1, 2, 3, 4]
// 4) pop(), digunakan untuk menghapus elemen terakhir dari sebuah array.
let arr2 = [1, 2, 3];
arr2.pop();
console.log(arr2); // Output: [1, 2]
// 5) slice(), digunakan untuk mengambil sebagian dari sebuah array dan mengembalikannya sebagai array baru.
let arr3 = [1, 2, 3, 4, 5];
console.log(arr3.slice(1, 4)); // Output: [2, 3]
// 6) find(), digunakan untuk mengembalikan elemen pertama yang memenuhi kondisi
console.log(
  arr3.find((elem) => {
    return elem < 5;
  })
); //Output: 1
// 7) substring(), digunakan untuk mengambil substring dari sebuah string dengan menentukan indeks awal dan indeks akhir.
let username = "Jhon Doe";
let substring = username.substring(1, 4);
console.log(substring); //Output : hon
// 8) Object.entries(), digunakan untuk mengambil daftar nama dan nilai properti pada sebuah objek dan mengembalikannya sebagai array dalam bentuk [key, value] pairs.
const myObj = {
  name: "John Doe",
  age: 30,
  job: "developer",
};
const entries = Object.entries(myObj);
console.log(entries); // [["name", "John Doe"], ["age", 30], ["job", "developer"]]
// 9) toString(), digunakan untuk menjadikan elemen-elemen pada sebuah array sebagai satu string.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString()); //Output : Banana,Orange,Apple,Mango
// 10) unshift(), digunakan untuk menambahkan elemen baru pada index awal array
fruits.unshift("Lemon", "Pineapple");
console.log(fruits);

// NO 2
const nama = [
  "Abigail",
  "Alexandra",
  "Alison",
  "Amanda",
  "Angela",
  "Bella",
  "Carol",
  "Caroline",
  "Carolyn",
  "Deirdre",
  "Diana",
  "Elizabeth",
  "Ella",
  "Faith",
  "Olivia",
  "Penelope",
];

function callback(params) {
  console.log(params);
}

function searchName(key, limit, callback) {
  const result = nama.filter((nama) => {
    return nama.toLowerCase().includes(key);
  });

  callback(result.slice(0, limit));
}

searchName("an", 3, callback);

// NO 3

const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
  // validasi
  if (nilaiAwal > nilaiAkhir) {
    return "Nilai akhir harus lebih besar dari nilai awal";
  }
  if (dataArray.length <= 5) {
    return "Jumlah angka dalam dataArray harus lebih dari 5";
  }

  const arr = dataArray.sort((a, b) => a - b);
  const result = arr.filter((arr) => {
    return arr >= nilaiAwal && arr <= nilaiAkhir;
  });

  return result[0] == null ? "Nilai tidak ditemukan" : result;
};

console.log(seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]));
console.log(seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8]));
console.log(seleksiNilai(5, 17, [2, 25, 4]));
console.log(seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18]));
