// console.log("SEMANGAT YA BELAJARNYA \nKESUKSESAN HANYA UNTUK YANG PANTAS");

// //
// console.log("halooo");
// setTimeout(() => {
//   console.log("ciah nungguin ya......!?");
// }, 3000);
// console.log("sabar ya....");

// const getData = async (url) => {
//   try {
//     const data = await fetch(url);
//     const json = await data.json();
//     return json;
//     // console.log(json);
//   } catch (error) {
//     return error;
//   }
// };

// getData("https://jsonplaceholder.typicode.com/userss");

// console.log(data());

const data = fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => console.log(data[0]))
  .catch((err) => "");
