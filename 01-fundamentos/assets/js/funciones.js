function saludar(nombre){
    //console.log(arguments);
    //console.log('hola mundo'+nombre);
    return [10,20,30,50];
    //esto nunca se va ha ejecutar
    console.log('soy un codigo que esta despues del return');
}
const saludar2=function(nombre){ //fucion anonima
    console.log('hola '+nombre)
}
const saludarFlecha = ()=> {
console.log('hola flecha')
}
const saludarFlecha2 = (nombre)=> {
    console.log('hola '+nombre)
    }
const retornoDeSaludar = saludar('yaneth',40,true,'costa rica');
//console.log({retornoDeSaludar})
console.log(retornoDeSaludar[0],retornoDeSaludar[1])
saludarFlecha();
saludarFlecha2('virginia');

function sumar(a,b){
    return a+b;
}

const sumar2 =(a,b)=>a+b;

//console.log(sumar2(3,2));

/*function getAleatorio1(){
    return Math.random();
}*/

const getAleatorio2 = ()=> Math.random();

console.log(getAleatorio2());