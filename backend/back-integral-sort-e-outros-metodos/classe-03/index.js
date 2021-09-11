const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];

let maiorValor = 0;
maiorValor = numeros.reduce(function(maiorValor, numeroAtual){
  if(numeroAtual > maiorValor){
    maiorValor = numeroAtual;
  }
  return maiorValor;
});