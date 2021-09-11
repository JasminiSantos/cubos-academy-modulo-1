const comentario = "Esse COVID é muito perigoso!";

function filtrarComentarios(comentario){
  comentarioAlterado = comentario.toUpperCase();
  if(comentarioAlterado.indexOf("COVID") != -1 | comentarioAlterado.indexOf("PANDEMIA") != -1){
    return "Comentário bloqueado por conter palavras proibidas";
  }
  else{
    return comentario;
  }
}
console.log(filtrarComentarios(comentario))