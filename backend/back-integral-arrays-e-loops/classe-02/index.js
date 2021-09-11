const letras = ["A", "a", "B", "C", "E", "e"];
qtdLetrasE = 0;
for(letra of letras){
    if(letra == "E" || letra == "e"){
        qtdLetrasE++;
    }
}
if(qtdLetrasE > 0){
    console.log("Foram encontradas " + qtdLetrasE + " letras 'E' ou 'e'.");
}
else{
    console.log("Nenhuma letra 'E' ou 'e' foi encontrada.");
}