const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

let frutasA = frutas.reverse();
frutasA = frutasA.join(", ");
console.log(frutasA);

let frutasB = frutas.shift();
frutasB = frutasB.pop();
frutasB = frutasB.push("Melão");
console.log(frutasB);
