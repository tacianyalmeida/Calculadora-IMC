function imc (){}
    
    const valorAltura = document.getElementById ("Altura")
    const valorPeso = document.getElementById ("Peso")

    const Altura = Number (Altura.value)
    const Peso = Number (Peso.value)
     
    
      const calculo = Number (peso / (altura * altura))
    if (calculo <= 16.9 ){
    alert ("muito abaixo do peso")
    
     if (calculo >= 17)
    alert ("abaixo do peso");
    if (calculo <= 18.4)
    alert ("abaixo do peso");

    else if (calculo >= 18.5)
    alert ("peso normal");
    else if (calculo <= 24.9)
    alert (" peso normal");

    else if (calculo >= 25)
    alert (" acima do peso ");
    else if (calculo <= 29.9)
    alert (" acima do peso " <= 29.9);

    else if (calculo >= 30) 
    alert ("Obesidade grau I");
    else if (calculo <= 34.9 ) 
    alert ("Obesidade grau I");

    else if (calculo >= 35) 
    alert ("Obesidade grau II");
    else if (calculo <= 40 ) 
    alert ("Obesidade grau II");

    else (calculo > 40)
    alert ("obesidade grau III")}

return (calculo)
