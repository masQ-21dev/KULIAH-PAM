function myFunction() {
  let nama = "Qomar"; //local variabel

  function innerFunction() {
    //inner function (*closure)
    console.log(nama); //akses terhadap scope
  }

  innerFunction(); //pemanggilan inner function
}

myFunction();
