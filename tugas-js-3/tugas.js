// NO 1
const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item === day;
      });

      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("Hari ini bukan hari kerja"));
      }
    }, 3000);
  });
};

cekHariKerja("selasa")
  .then((result) => {
    // jika promise resolve maka code balam blok then akan dijalankan
    console.log(result);
  })
  .catch((err) => {
    // jika promise reject maka code balam blok catch akan dijalankan
    console.log(err);
  });

const coba = async (day) => {
  try {
    // Blok kode yang mungkin menyebabkan kesalahan
    const data = await cekHariKerja(day);
    // jika promise resolve maka jalankan console.log()
    console.log(data);
  } catch (error) {
    // Blok kode yang menangani error/reject
    console.log(error);
  }
};

coba("asd");

// NO 2
const getMounth = (callback) => {
  setTimeout(() => {
    let error = false;
    let mounth = [
      "January",
      "February",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    if (!error) {
      callback(null, mounth);
    } else {
      callback(new Error("Sorry Data Not Found"), []);
    }
  }, 4000);
};

const printMounth = (err, mounth) => {
  console.log(err, mounth);
};

getMounth(printMounth);

// NO 3
// 3.1
const searchName = (name) => {
  const data = [
    "Abigail",
    "Alexandra",
    "Alison",
    "Amanda",
    "Angela",
    "Bella",
    "Penelope",
  ];
  return new Promise((resolve, reject) => {
    if (typeof name != "string") {
      reject(new Error("Input Must be String!"));
    } else {
      setTimeout(() => {
        const result = data.find((data) => {
          return data.toLowerCase() === name.toLowerCase();
        });
        if (result) {
          resolve(result);
        } else {
          reject(new Error("Name Not Found"));
        }
      }, 3000);
    }
  });
};

searchName("penelope")
  .then((response) => {
    console.log(response);
  })
  .catch((err) => console.log(err));

// 3.2
function sortingArrayNumber(arr) {
  return new Promise((resolve, reject) => {
    const isElemNumber = arr.every((elem) => typeof elem === "number");

    if (!Array.isArray(arr) || !isElemNumber) {
      reject(new Error("Input Must be Array Number!"));
    } else {
      setTimeout(() => {
        const result = arr.sort((a, b) => a - b);
        if (result) {
          resolve(result);
        } else {
          reject(new Error("Something Wrong"));
        }
      }, 3000);
    }
  });
}

sortingArrayNumber([1, 3, 5, 4, 2])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// NO 4
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    const name = data.map((item) => {
      return {
        name: item.name,
      };
    });
    console.log(name);
  })
  .catch((error) => console.log(error));
