const original = [5, 7, 13, 17, 26, 34, 118, 245];

function filteredNumbers(original){
    let filtered = [];
    for(number of original){
        if((number >= 10 && number <= 20) || number > 100){
            filtered.push(number);
        }
    }
    return filtered;
}
console.log(filteredNumbers(original));