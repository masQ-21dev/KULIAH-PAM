var nilai = 10; //global execution context

function iniFunction() {
  console.log("ini function");

  iniJugaFunction(); //function execution context kedua

  console.log("ini function selesai"); //execution stack
}
function iniJugaFunction() {
  console.log("ini juga function");
  console.log("ini juga function selesai");
}

iniFunction(); //function execution context pertama

console.log("global execution context"); //global execution context
