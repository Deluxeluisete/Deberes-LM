let GuardaNumeros = []
do {
    Numero = Number(prompt("Introduce un numero"));

    if (isNaN(Numero) == false) {


        GuardaNumeros.unshift(Numero)
    } else {

    }

} while (isNaN(Numero) == false);
document.write("Tus numeros son :" + GuardaNumeros + "<br/>")
GuardaNumeros.sort((a, b) => b - a)

let GuardaNumerosFiltrados = GuardaNumeros.filter(comprobarNumero)

/*
let GuardaNumerosFiltrados = GuardaNumeros.filter(
    GuardaNumeros=>{
    for (X = 0; X < GuardaNumeros.length; X++) 
    {
      
            resto = GuardaNumeros[X] % 3;
            if (resto != 0 && GuardaNumeros[X] ==0) {
                return false;
            } 
            else{
                return GuardaNumeros;
            }
            
        
        }
     })
*/

document.write("Numeros filtrados multiplos de 3: " +GuardaNumerosFiltrados )
document.write("<br/>Tus numeros ordenador de mayor a menor son :" + GuardaNumeros)

function comprobarNumero(numCheck){
    let resto = numCheck % 3;
    if (resto != 0 ||numCheck==0) {
        return false;
    } 
    else{
        return true;
    }
}