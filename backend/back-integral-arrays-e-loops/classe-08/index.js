const numeros = [3, 24, 1, 8, 11, 7, 15];

function maiorNumero(numeros){
    let maior = numeros[0];
    for(numero of numeros){
        if(numero > maior){
            maior = numero;
        }
    }
    return maior;
}
console.log(maiorNumero(numeros));