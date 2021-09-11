const nomes = ["Ana", "Joana", "Carlos", "amanda"];

function filterNames(nomes){
    let filteredNames = [];
    for(let nome of nomes){
        if(nome[0] == "A" || nome[0] == "a"){
            filteredNames.push(nome);
        }
    }
    return filteredNames;
}
console.log(filterNames(nomes));