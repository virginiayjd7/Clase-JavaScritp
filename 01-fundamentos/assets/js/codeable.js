const mascotas = 5;
let contador = 1;

for (contador = 1 ; contador <= mascotas;contador++) {
    console.log("Tengo " + contador + " mascotas");
}


for (let i = 0; i <= 5; i += 3) {
    console.log("El último número es " + i);
    } 

    for (let i = 6; i <= 45; i++) {
        if(i% 2===1)
        console.log(i);
        } 
        const frutas = ["pera", "naranja", "manzana"]

        // Obtener el tamaño del arreglo (cantidad de elementos)
        console.log(frutas.length); // 3
        
        // Reemplazar un elemento
        frutas[1] = "fresa";
        console.log(frutas); // ["pera", "fresa", "manzana"]
        
        // Agregar un elemento al final
        frutas.push("uva");
        console.log(frutas); // ["pera", "fresa", "manzana", "uva"]
        
        // Quitar/extraer el último elemento
        const ultimo = frutas.pop();
        console.log(frutas); // ["pera", "fresa", "manzana"]
        console.log(ultimo); // "uva"
        
        // Agregar un elemento al inicio
        frutas.unshift("piña");
        console.log(frutas); // ["piña", "pera", "fresa", "manzana"]
        
        // Quitar/extraer el primer elemento
        const primero = frutas.shift();
        console.log(frutas); // ["pera", "fresa", "manzana"]
        console.log(primero); // "piña"

const frutass = ["pera", "fresa", "manzana", "uva"];
let i = 0;

while (i < frutass.length) {
    console.log(frutass[i]);
    i++;
}

const frutasf = ["pera", "fresa", "manzana", "uva"];

for (let i = 0; i < frutasf.length; i++) {
    console.log(frutasf[i]);
}

const frutasg = ["pera", "fresa", "manzana", "uva"];

for (let fruta of frutasg) {
   console.log(fruta)
}
const text = "Codeable";

for (let char of text) {
  console.log(char);
}
let ii = 0;

while (ii < 5) {
  console.log("To infinity and beyond!");
  ii++;
}

const numeros = [];

while (numeros.length <=5 ) {
  const rdn =Math.round(Math.random() * 100);
    numeros.push(rdn);
}

console.log(numeros);




const numeross = [3, 7, 10, 2, 34, 23, 15];
for (let numero of numeross) {
    if(numero % 2===0)
    console.log(numero + "es par!");
    else{
        console.log(numero + "es impar!");
    }
} 

function car(brand, model) {
    return brand +" "+ model;
    }
    
  console.log(car("Toyota", "Corolla")); // debe imprimir "Toyota Corolla" 

  // declara la función aquí
function getTime(dayLinght){
    if(dayLinght)
    {
        return "Es de día"  
    } else{
        return "Es de noche"
    }
}

console.log(getTime(true)); // debe imprimir "Es de día"
console.log(getTime(false)); // debe imprimir "Es de noche"

// completa lo necesario

function saludar(nombre) {
    // cuerpo de la función
    if(nombre)
    {
        return "Hola"+nombre;
    }else{
        return "Hola!? ¿Cómo te llamas?";
    }
    }

  // no es necesario llamar a console.log
  // solo completa la declaración de la función


  // completa lo necesario

function minOf3(n1,n2,n3) {
    let min =n1;

    if(n2 < min){
        min=n2;
    }if(n3<min){
        min=n3
    }
    return min;
    // cuerpo de la función
    }

  // no es necesario llamar a console.log
  // solo completa la declaración de la función
function filterNames(names) {
    // cuerpo de la función
    const result=[];
    for(name of names)
    {
        if(name.length<5)
        result.push(name)
    }
    return result;
}

const filteredNames = filterNames(["Juan", "Alejandro", "Tom", "Maria"]);

  console.log(filteredNames); // imprime ["Juan", "Tom"]

/*Completa la función siglo que recibe un año (un número) y retorna en qué siglo se encuentra dicho año (un número). Ten en cuenta que el siglo 1 va desde el año 1 hasta el año 100 mientras que el siglo 2 va desde el año 101 hasta el año 200. Siguiendo esta lógica, el año 1821 se encuentra en el siglo 19 y el año 1490 se encuentra en el siglo 15.*/

function siglo(año) {
	// completa el cuerpo de esta función
  let i=0;

// siglo 1 desde  =año 1 hasta 100 
//  mientras 
//  siglo 2 desde = año 101 hasta 200
}

// No modifiques la siguiente linea:
siglo;
function inverso(palabra) {
	// completa el cuerpo de esta función
  
  if (palabra === ""){
    return "";
  }
  return inverso(palabra.substr(1))+palabra.charAt(0)
    
}

// No modifiques la siguiente linea:
inverso;