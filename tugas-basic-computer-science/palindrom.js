let input = "Malam";

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
palindrom(input);
