const frutas = ["manzana", "banana", "pera", "uva"];

frutas.forEach((fruta) => console.log(`me gusta comer ${fruta}`));

// ------------------------

const usuarios = [
  { nombre: "Ana", suscrito: true },
  { nombre: "Juan", suscrito: false },
  { nombre: "María", suscrito: true },
];

usuarios.forEach((usuario) => {
  if (usuario.suscrito) {
    console.log(`${usuario.nombre} está suscrito`);
  } else {
    console.log(`${usuario.nombre} NO está suscrito`);
  }
});
