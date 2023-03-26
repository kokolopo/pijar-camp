console.log("function, method, and callback");

// arrow function in one line
const tambah = (a, b) => a + b;
console.log(tambah(2, 5));

// arrrow fonction
const kurang = (a, b) => {
  const hasil = a - b;
  return hasil;
};
console.log(kurang(5, 2));

// method
const data = {
  nama: "fahmi",
  kali: (a, b) => {
    a * b;
  },
  sayHallo() {
    return `hallo ${this.nama}`;
  },
};
console.log(data.sayHallo());

// sort
const angka = [1, 100, 50, 5, 20];
const buah = ["mangga", "pisang", "anggur", "nanas"];

console.log(angka.sort((a, b) => a - b));
console.log(buah.sort());

const car = [
  { id: 1, type: "Toyota", year: 2019 },
  { id: 2, type: "Honda", year: 2019 },
  { id: 3, type: "Suzuki", year: 2019 },
];

const x = car.map((car) => {
  return car.id;
});
console.log(x);

const text = "wellcome to indonesia";
const arrText = text.split(" ");
console.log(arrText);
const newText = arrText.join(" ");
console.log(newText);

// multi separator
const haha = "apel, jeruk. mangga@ pisang";
console.log(haha.split(/[,\.\@]+/));

// callback
const calculator = (num1, num2, callback) => {
  const result = num1 + num2;
  callback(result);
};
const printHasil = (data) => console.log(`Rp. ${data}`);
calculator(20, 30, printHasil);
