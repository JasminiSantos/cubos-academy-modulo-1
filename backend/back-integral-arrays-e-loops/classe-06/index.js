const numeros = [3, 4, 7, 8, 1, 6, 5, 10];

function sumPairs(numeros){
    let sum = 0;
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] % 2 == 0){
            sum = sum + numeros[i];
        }
    }
    return sum;
}
console.log(sumPairs(numeros));