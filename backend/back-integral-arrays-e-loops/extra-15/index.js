const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];

for(num of original){
    if(num % 2 == 0){
        pares.push(num);
    }
    else{
        impares.push(num);
    }
}
console.log(pares, impares);