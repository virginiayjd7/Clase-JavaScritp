/*function crearPersona(nombre,apellido){
    return{nombre,apellido}
    /*const getAleatorio2 = ()=> Math.random();

}*/
const crearPersona =(nombre,apellido)=>({nombre,apellido});

const persona = crearPersona('Yaneth','Aquino');
console.log(persona);


function imprimeArgumentos(){
    console.log(arguments);
}

const imprimeArgumentos2=(edad,...args)=>{ ///despues del rest no debe ver ningun paramero
    //console.log(edad,args)
    return args;
};

const [casado,vivo,nombre,saluda] = imprimeArgumentos2(10,true,false,'Yaneth','Hola');

console.log({casado,vivo,nombre,saluda});


const {apellido:nuevoApellido} = crearPersona('Yaneth','Aquino');
console.log({nuevoApellido});

const tony= {  //objetos literales se puedemutar con let 
    nombre:'Tony Stark',
    codeName: 'Ironman',
    vivo:false,
    //edad:40,
    trajes:['Mark I','Mark V','Hulkbuster'],
};
/*const imprimePropiedades = (personaje)=>{
    
    console.log('nombre',brepersonaje.nombre);
    console.log('codeName',codeName.personaje.codeName);
    console.log('vivo',personaje.vivo);
    console.log('edad',personaje.edad);
    console.log('trajes',personaje.trajes);
}*/

const imprimePropiedades = ({nombre,codeName,vivo,edad=15,trajes})=>{
    
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}
imprimePropiedades(tony);