function crearContador() {
  let contador = 0;
  return function () {
    console.log(++contador); // ++ incrementa y devuelve el valor actual del contador, no lo imprime en
  };
}

const incrementarContador = crearContador();
incrementarContador();
incrementarContador();
incrementarContador();
incrementarContador();
