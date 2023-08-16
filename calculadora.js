/* function calculadora(a, b, operacion) {
  switch (operacion) {
    case "suma":
      return a + b;
      break;
    case "resta":
      return a - b;
      break;
    case "multiplicacion":
      return a * b;
      break;
    case "division":
      return a / b;
      break;
    default:
      return "operacion invalida";
      break;
  }
}

console.log(calculadora(2, 3, "suma"));
console.log(calculadora(2, 3, "resta"));
console.log(calculadora(2, 3, "multiplicacion"));
console.log(calculadora(2, 3, "division"));
console.log(calculadora(2, 3, "raiz")); */

const calculadora = (a, b, operacion) => {
  if (typeof a == "number" && typeof b == "number") {
    return operacion(a, b);
  }
  return NaN;
};
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const multiplicacion = (a, b) => a * b;
const division = (a, b) => a / b;

console.log(calculadora("2", 3, suma));
console.log(calculadora(2, "3", resta));
console.log(calculadora(2, 3, multiplicacion));
console.log(calculadora(2, 3, division));
console.log(typeof { nombre: "pedro" });
