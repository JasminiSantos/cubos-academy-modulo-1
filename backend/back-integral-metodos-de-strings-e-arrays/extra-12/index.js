const nome = 'Guido Cerqueira';

gerarNickname = (nome) => {
  nickname = "@";
  novoNome = nome.split(" ");
  novoNome = novoNome.join("");
  novoNome = novoNome.toLowerCase();
  
  if(novoNome.length >= 12){
    nickname += novoNome;
    nickname = nickname.slice(0, 13);
    return nickname; 
  }
  else{
    nickname += novoNome;
    while(nickname.length < 13){
      nickname += Math.floor(Math.random()*10);
    }
    return nickname;
  }
}