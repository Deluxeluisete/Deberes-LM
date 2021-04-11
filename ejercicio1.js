
    let pCadena='hola mundo'
    var SumaArray=0
    let pBooleano=true;
    let Numeros = [40,50,34,30]
    let fCalculo = function fCalculo()
    { 
        alert("el booleano no es true")
    }

    Recibir(pCadena,pBooleano,Numeros,fCalculo);

function Recibir(pCadena,pBooleano,Numeros,fCalculo)
{
console.log(pCadena)
console.log(pBooleano)
console.log(Numeros)

if (pBooleano) {
   
    for (i = 0; i < Numeros.length; i++) 
    {
       SumaArray=SumaArray+Numeros[i]
       
    }
    if (SumaArray>100) 
    {
       
        if(pCadena.indexOf('a') != -1)
        {
        alert("la letra a ha sido encontrada")
        }  
        else{
            alert("Buen trabajo")
        }

    } else 
    {
        alert("El array es menor de 100")
    }
}
else 
{
  
    fCalculo()
}
}

