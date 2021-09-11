const texto = "Aprenda programar do zero na Cubos Academy";

function converterEmUrl(texto){
  let novoTexto = texto.split(" ");
  novoTexto = novoTexto.join("-");
  return novoTexto;
}
