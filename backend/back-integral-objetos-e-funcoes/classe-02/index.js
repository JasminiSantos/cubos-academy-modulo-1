let carro = {
  ligado: false,
  velocidade: 0,
  ligar: function(ligado){
    if(this.ligado == true){
      console.log("Este carro já está ligado.");
    }
    else{
      this.ligado = true;
      console.log(`Carro ligado. Velocidade: ${this.velocidade}.`);      
    }
  },
  desligar: function(ligado){
    if(this.ligado && this.velocidade == 0){
      this.ligado = false;
      this.velocidade = 0; 
      console.log(`Carro desligado. Velocidade: ${this.velocidade}.`);   
    }
    else if (this.ligado && this.velocidade > 0){
      console.log(`Carro ainda em movimento. Velocidade: ${this.velocidade}.`)
    }
    else{
       console.log("Este carro já está desligado.");
    }
  },
  acelerar: function(ligado){
    if(this.ligado){
      this.velocidade += 10; 
      console.log(`Carro ligado. Velocidade: ${this.velocidade}.`);   
    }
    else{
       console.log("Não é possível acelerar um carro desligado.");
    }      
  },
  desacelerar: function(ligado){
    if(this.ligado){
      this.velocidade -= 10; 
      console.log(`Carro ligado. Velocidade: ${this.velocidade}.`);
    }
    else{
       console.log("Não é possível desacelerar um carro desligado.");
    }       
  }
};

carro.desligar(carro.ligado);
carro.ligar(carro.ligado);
carro.ligar(carro.ligado);
carro.acelerar(carro.ligado);
carro.acelerar(carro.ligado);
carro.desacelerar(carro.ligado);
carro.desligar(carro.ligado);
carro.acelerar(carro.ligado);
carro.desacelerar(carro.ligado);