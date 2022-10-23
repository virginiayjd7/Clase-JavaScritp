const personaje = {  //objetos literales se puedemutar con let 
    nombre:'Tony Stark',
    codeName: 'Ironman',
    vivo:false,
    edad:40,
    coords:{
        lat: 34.034,
        lng:-118.70
    },
    trajes:['Mark I','Mark V','Hulkbuster'],
    direccion:{
        zip: '10880, 90265',
        ubicacion: 'Malibu,California'
    },
    'ultima-pelicula': 'infinity war'

};
console.log(personaje)
console.log('Nombre',personaje.nombre);
console.log('Nombre',personaje['nombre']);
console.log('Edad',personaje.edad);

console.log('lat',personaje.coords.lat);
console.log('N°. Trajes',personaje.trajes[personaje.trajes.length-1]);
console.log('Ultimo Trajes',personaje.trajes.length);

const x='vivo';
console.log('Vivo',personaje[x]);
console.log('ultima-pelicula',personaje["ultima-pelicula"]);

// mas detalles
delete personaje.edad;
console.log(personaje);

personaje.casado=true;

const entriesPares=Object.entries(personaje);
console.log(entriesPares)

//personaje=true; no se pude hacer
console.log(personaje)

Object.freeze(personaje);
personaje.dinero=1000000000;
personaje.casado=false;
personaje.direccion.ubicacion='costa rica'
console.log(personaje);

const propiedades =Object.getOwnPropertyNames(personaje);
const valores =Object.values(personaje);
console.log({propiedades,valores});






