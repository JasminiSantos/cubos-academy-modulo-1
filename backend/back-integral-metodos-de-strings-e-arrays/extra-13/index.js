const nomeArquivo = 'Foto da Familia.pdf';

validarExtensao = (nomeArquivo) => {
    extensao = "";
    for (let i = 0; i < nomeArquivo.length; i++){
      if(nomeArquivo[i] == "."){
        extensao = nomeArquivo.slice(i + 1, nomeArquivo.length);
        break;
      }
    }
    if (extensao == "jpg" | extensao == "jpeg" | extensao == "gif" | extensao == "png"){
      return "Arquivo válido!";
    }
    else{
      return "Arquivo inválido!";
    }
  }