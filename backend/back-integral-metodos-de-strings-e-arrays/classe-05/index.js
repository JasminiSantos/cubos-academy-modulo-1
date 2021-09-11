const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];
const nomeDoLivro = "Dom Quixote";

function localizarLivro(livros, nomeDoLivro){
  let posição = 0;
  if(livros.indexOf(nomeDoLivro) != -1){
    posicao = livros.indexOf(nomeDoLivro) + 1;
    return `O livro está na posição ${posicao}.`
  }
  else{
    return `Livro não encontrado!`;
  }
}
localizarLivro(livros, nomeDoLivro);