const celular = 71999918888;

formatarCelular = (celular) => {
  novoCelular = "";
  novoCelular = celular.toString();

  if(novoCelular.length >= 8 && novoCelular.length <= 11){
    if(novoCelular.length == 8){
      novoCelular = "9 " + novoCelular.slice(0,4) + "-" + novoCelular.slice(4,9);
      return novoCelular; 
    }
    else if(novoCelular.length == 9 && novoCelular[0] == "9"){
      novoCelular = novoCelular.slice(0,1) + " " + novoCelular.slice(1,5) + "-" + novoCelular.slice(5, 10);  
      return novoCelular;
    }
    else if(novoCelular.length == 10){
      novoCelular = `(${novoCelular.slice(0,2)}) ` + "9 " + novoCelular.slice(2,6) + "-" + novoCelular.slice(6,12);
      return novoCelular; 
    }
    else{
      novoCelular = `(${novoCelular.slice(0,2)}) ` + `${novoCelular.slice(2,3)} ` + novoCelular.slice(3,7) + "-" + novoCelular.slice(7,12);
      return novoCelular;       
    }
  }
  else{
    return "Número de telefone inválido!";
  }
}