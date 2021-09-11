const nomes = ['Juninho', 'Léo', 'Guido', 'Dina', 'Vitinho', 'Nanda'];
const tamanhoDoGrupo = 4;

dividirGrupos = (nomes, tamanhoDoGrupo) => {
  grupos = [];
    for(let i = 0; i < nomes.length; i = i + tamanhoDoGrupo){
      grupos.push(nomes.slice(i, i + tamanhoDoGrupo));
    }
    return grupos;

}