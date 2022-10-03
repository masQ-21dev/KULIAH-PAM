function nonIIFE() {
  let nama = "Qomar";
  console.log(nama);
}
nonIIFE();

(function IIFE() {
  let nama = "Melisa";
  console.log(nama);
})();
