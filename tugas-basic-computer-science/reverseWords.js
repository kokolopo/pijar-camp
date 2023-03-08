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
console.log(reverseWords(sentence));
