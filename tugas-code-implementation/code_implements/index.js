// NO 1
// deteksi palindrome
function palindrom(params) {
  // ubah huruf kecil
  const word = params.toLowerCase();

  //   deklaraikan variable hasil dengan nilai ""(string kosong)
  let hasil = "";

  //   lalukan itersi secara decrement dengan inisialisasi nilai start awal panjang kata-1
  //  dan iterasi berhenti ketika nilai start adalah 0
  for (let i = word.length - 1; i >= 0; i--) {
    // didalam tiap iterasi menambahkan nilai kata pada index i kedalam variable hasil
    hasil += word[i];
  }

  //   cek jika hasil !== kata
  if (word !== hasil) {
    console.log("bukan palindrom");
  } else {
    console.log("palindrom");
  }
}
// palindrom("malam");

// reverse words
function reverseWords(sentence) {
  // Memisahkan setiap kata dalam kalimat menjadi array menggunakan spasi sebagai pemisah
  var words = sentence.split(" ");

  // Membalikkan urutan kata dalam array
  words = words.reverse();

  // Menggabungkan kembali setiap kata dalam array menjadi sebuah kalimat
  var reversedSentence = words.join(" ");

  return reversedSentence;
}

var sentence = "Saya belajar Javascript";
// console.log(reverseWords(sentence));

// NO 2
const PijarFood = (harga, voucher, jarak, pajak) => {
  let potongan;
  switch (voucher) {
    case "PIJARFOOD5":
      if (harga >= 50000) potongan = harga * 0.5;
      if (potongan > 50000) potongan = 50000;
      break;
    case "DITRAKTIRPIJAR":
      if (harga >= 25000) potongan = harga * 0.6;
      if (potongan > 30000) potongan = 30000;
      break;
    default:
      potongan = 0;
      break;
  }

  const biaya_antar = jarak > 2 ? (jarak - 2) * 3000 + 5000 : 5000;
  const biaya_pajak = pajak === true ? harga * 0.05 : 0;

  return `Harga     : ${harga}\nPotongan     : ${potongan}\nBiaya Antar     : ${biaya_antar}\nPajak     : ${biaya_pajak}\nSubTotal      : ${
    harga + biaya_antar + biaya_pajak - potongan
  }`;
};

// console.log(PijarFood(75000, "PIJARFOOD5", 5, true));

// NO 3
const divideAndSort = (number) => {
  const text = number.toString().split("0");
  let result = "";
  for (const i of text) {
    let x = i
      .split("")
      .sort((a, b) => a - b)
      .toString()
      .replace(/,/g, "");
    result += x;
  }
  return result;
};
console.log(divideAndSort(5956560159466056));
