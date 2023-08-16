const numeros = [1, 2, 3, 4, 5];

const sumaTotal = numeros.reduce((total, numero) => total + numero, 0);

console.log(sumaTotal);

// -----------------------------------

const ventas = [
  { producto: "Camiseta", cantidad: 5, precio: 20 },
  { producto: "Pantalón", cantidad: 2, precio: 50 },
  { producto: "Zapatos", cantidad: 3, precio: 80 },
];

const totalVentas = ventas.reduce(
  (total, venta) => total + venta.cantidad * venta.precio,
  0
);

console.log(totalVentas);
