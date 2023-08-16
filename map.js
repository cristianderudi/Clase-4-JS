const numeros = [1, 2, 3, 4, 5];

const duplicados = numeros.map((numero) => {
  let resultado = numero * 2;
  return resultado;
});

const duplicados2 = numeros.map((numero) => numero * 2);

const duplicados3 = numeros.map(function (numero) {
  return numero * 2;
});

console.log(duplicados);
console.log(duplicados2);
console.log(duplicados3);

const nombres = ["Juan", "Maria", "Carlos"];

const nombresConSaludo = nombres.map((nombre) => `Hola, ${nombre}`);
console.log(nombresConSaludo);
