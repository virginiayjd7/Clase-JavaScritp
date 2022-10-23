let= juegos=['zelda','mario','Metroid','chrono'] ;
console.log('Largo:', juegos.length);
//cuanto hay en el arreglo largo 3

let primero =juegos[1];
let ultimo=juegos[juegos.length -1];

console.log(primero,ultimo);

juegos.forEach((elemento ,indice,arr )=> {
    console.log({elemento,indice,arr})
});

let nuevaLong= juegos.push('F-Zero');
console.log({nuevaLong,juegos});

nuevaLong= juegos.unshift('Fire Emplem');
console.log({nuevaLong,juegos});

let juegoBorrado= juegos.pop();
console.log({juegoBorrado,juegos});

let pos =1;
console.log({juegos});
let juegosBorrado =juegos.splice(pos, 2);
console.log({juegosBorrado,juegos})

let metroIndex = juegos.indexOf('Metroid');//CASE SENSITIVE
console.log(metroIndex )
