const numeros = [1, 2, 3, 4, 5];

const pares = numeros.filter((nro) => nro % 2 === 0);

console.log(pares);

//----------------------------------------------

const productos = [
  { nombre: "Camiseta", precio: 20 },
  { nombre: "Pantalón", precio: 50 },
  { nombre: "Zapatos", precio: 80 },
  { nombre: "Sombrero", precio: 25 },
];

const productosCaros = productos.filter((producto) => producto.precio > 30);

const productosCaros2 = productos.filter(function (prod) {
  console.log(prod);
  return prod.precio > 30;
});

console.log(productosCaros2);
