function sumarDeclarada(a = 0, b = 0) {
  return a + b;
}
const sumaArrow = (a, b) => a + b;

const duplicar = (a) => a * 2;

const sumaArrowMultiplesLineas = (a, b) => {
  let suma = a + b;
  return suma;
};

function restaDeclarada(a = 0, b = 0) {
  return a - b;
}
const sumarExpresada = function (a = 0, b = 0) {
  return a + b;
};
function saludo() {
  console.log("hola mundo");
}
console.log(Math.random());
console.log(sumarDeclarada(2, 3));
console.log(sumarExpresada(2, 3));
console.log(restaDeclarada(2, 3));
console.log(restaDeclarada(3, 2));
console.log(sumaArrow(3, 2));
saludo();
