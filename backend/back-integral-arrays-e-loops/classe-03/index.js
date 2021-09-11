const numeros = [54, 22, 14, 87, 10, 284];

function indexOf(numeros){
    for(let i = 0; i <numeros.length; i++){
        if(numeros[i] == 10){
            return i;
        }
    }
    return -1;
}
console.log(indexOf(numeros));