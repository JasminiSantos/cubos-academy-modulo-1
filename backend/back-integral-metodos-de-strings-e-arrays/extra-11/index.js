const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

encontrarCarro = (nomes, posicao) => {
    texto = "";
    carros = nomes.slice(posicao, nomes.length);
    for(let i = 0; i < carros.length; i++){
      texto += " " + carros[i];
    }
    texto = texto.trim();
    texto = texto.split(" ");
    texto = texto.join(" - ")
    return texto;
  }