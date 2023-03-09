// tugas JS 1

// NO.1
const biodata = {
  name: "Fahmi Hadi",
  age: 22,
  hobbies: ["learning", "watching YT"],
  isMaried: false,
  schoolList: [
    {
      name: "Universitas Langlangbuana",
      yearIn: 2019,
      yearOut: 2023,
      major: "Teknik Informatika",
    },
    {
      name: "SMA Al-Mubarok",
      yearIn: 2015,
      yearOut: 2018,
      major: "IPA",
    },
    {
      name: "SMP Al-Mubarok",
      yearIn: 2012,
      yearOut: 2015,
    },
  ],
  skills: [
    {
      skillName: "Golang",
      level: "advanced",
    },
    {
      skillName: "ReactJS",
      level: "beginner",
    },
    {
      skillName: "ExpressJS",
      level: "beginner",
    },
    {
      skillName: "Laravel",
      level: "beginner",
    },
    {
      skillName: "Flutter",
      level: "beginner",
    },
    {
      skillName: "SQL",
      level: "advanced",
    },
    {
      skillName: "MonggoDB",
      level: "beginner",
    },
    {
      skillName: "Docker",
      level: "beginner",
    },
  ],
  interestInCoding: true,
};
console.log(biodata);

// ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ

// NO.2
const mtk = 80;
const bahasaIndonesia = 90;
const bahasaInggris = 89;
const ipa = 69;

function averageAndGrade(bahasaIndonesia, bahasaInggris, matematika, ipa) {
  // Validasi input
  if (!bahasaIndonesia || !bahasaInggris || !matematika || !ipa) {
    return "Semua nilai harus diisi";
  }

  // Hitung rata-rata
  const avg = (bahasaIndonesia + bahasaInggris + matematika + ipa) / 4;

  // Tentukan grade
  let grade;
  if (avg >= 90 && avg <= 100) {
    grade = "A";
  } else if (avg >= 80 && avg <= 89) {
    grade = "B";
  } else if (avg >= 70 && avg <= 79) {
    grade = "C";
  } else if (avg >= 60 && avg <= 69) {
    grade = "D";
  } else if (avg >= 0 && avg <= 59) {
    grade = "E";
  } else {
    grade = "tidak ada";
  }

  return `Rata-rata = ${avg}\nGrade = ${grade}`;
}

console.log(averageAndGrade(mtk, bahasaIndonesia, bahasaInggris, ipa));

// ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ

// NO.3
const printSegitiga = 5;
function segitiga(params) {
  // validasi
  if (typeof params !== "number") {
    return "Data harus number";
  }

  // buat variable penampung
  let hasil = "";

  // iterasi 1
  for (let i = 0; i <= params; i++) {
    // iterasi 2
    for (let j = 1; j <= params - i; j++) {
      hasil += j + " ";
    }
    hasil += " \n";
  }
  return hasil;
}
console.log(segitiga(printSegitiga));

// ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ

// NO.4
let data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
};

// bagian a
data = {
  ...data,
  ...{ name: "Fahmi Hadi", email: "kokolopo321@gmail.com", hobby: "belajar" },
};
console.log(data);

// bagian b
const { street, city } = data.address;
console.log(street, city);
