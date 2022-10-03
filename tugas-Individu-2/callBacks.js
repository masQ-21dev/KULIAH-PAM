function nama(getNamaAkhir) {
  //functin nama adalah higher-order function;
  let namaAwal = "Muhammad";
  return namaAwal + " " + getNamaAkhir;
}

function namaAkhir() {
  //funtion yang di panggil (*callback)
  return "Qomarudin";
}

console.log(nama(namaAkhir())); //namaAkhir adalah callbakc
