var mobil = ["Avanza", "Yaris", "Alya"];
var dataSTNKUjang = {
  nama: "Ujang",
  usia: 24,
  tipe: "Avanza",
  plat: "B 1234 AGG",
  biaya: 600000,
  isBayar: false,
};
console.log("object");
console.log(JSON.stringify(dataSTNKUjang));
var dataSTNK = [
  {
    nama: "lida",
    usia: 24,
    tipe: "Avanza",
    plat: "B 1234 AGG",
    biaya: 600000,
    isBayar: false,
  },
  {
    nama: "kirana",
    usia: 25,
    tipe: "Avanza",
    plat: "B 1234 AGG",
    biaya: 600000,
    isBayar: false,
  },
  ,
  {
    nama: "Ujang",
    usia: 24,
    tipe: "Avanza",
    plat: "B 1234 AGG",
    biaya: 600000,
    isBayar: false,
  },
];
console.log(JSON.stringify(dataSTNK[0].biaya));
