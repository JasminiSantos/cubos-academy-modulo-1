const original = [1, 4, 12, 21, 53, 88, 112];

function filterPairs(original){
    let filtered = [];
    for(let i = 0; i < original.length; i++){
        if(original[i] % 2 == 0){
            filtered.push(original[i]);
        }
    }
    return filtered;
}
console.log(filterPairs(original));