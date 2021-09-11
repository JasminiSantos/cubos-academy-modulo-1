const cidades = ['Salvador', 'São Paulo', 'Brasilia', 'Recife', 'Rio de Janeiro'];

let maiorCidade = cidades.reduce(function(maiorCidade, cidadeAtual){
    if(cidadeAtual.length > maior){
      maiorCidade = cidadeAtual;
      maior = cidadeAtual.length;
    }
    return maiorCidade;
  });