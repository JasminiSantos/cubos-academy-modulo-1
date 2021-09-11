const numeros = [8, -11, 4, 1, 23];

function maiorDiferenca(numeros){
    let diferenca = 0;
    for(let i = 0; i < numeros.length; i++){
        for(let j = 0; j < numeros.length; j++){
            if(numeros[i]-numeros[j] > diferenca){
                diferenca = numeros[i]-numeros[j];
            }
        }
    }
    return diferenca;
}
console.log(maiorDiferenca(numeros));