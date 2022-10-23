function imc(peso, altura) { 
    // completa el cuerpo de esta función
    const icm = (peso/Math.pow(altura ,2));
    
    if(icm <=18.5){
      return 'bajo peso'
    }else if (icm > 18.5 && icm <=25){
      return 'normal'
    }
    else{
      return 'sobrepeso'
    }
  }
  // No borres la siguiente linea:
  