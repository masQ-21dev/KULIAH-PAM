// Promises
let myPromise = new Promise(function (myResolve, myReject) {
  // "Memproduksi Kode" (Mungkin perlu waktu)

  myResolve(); // ketika berhasil
  myReject(); // ketika error
});

// "Mengkonsumsi Kode" (Harus menunggu Janji terpenuhi)
myPromise.then(
  function (value) {
    /* kode jika berhasil */
  },
  function (error) {
    /* kode jika gagal */
  }
);

// Async/Await
async function myDisplay() {
  let myPromise = new Promise(function (resolve) {
    resolve("I love You !!");
  });
  let myPromises = await myPromise;
  console.log(myPromises);
}

myDisplay();
