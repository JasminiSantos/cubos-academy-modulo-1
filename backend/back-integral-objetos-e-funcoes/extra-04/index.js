const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar: function(valor){
        this.saldo += valor;
        this.historicos.push({
          tipo: "Depósito",
          valor: arguments[0]
        });
        console.log(`Depósito de R$${this.historicos[this.historicos.length-1].valor/100} realizado para o cliente: ${this.nome}`);
    },
    sacar: function(valor){
        if (valor <= this.saldo){
          this.saldo -= valor;
          this.historicos.push({
            tipo: "Saque",
            valor: arguments[0]
        });
          console.log(`Saque de R$${this.historicos[this.historicos.length-1].valor/100} realizado para o cliente: ${this.nome}`)
        }
        else{
            console.log(`Saldo insuficiente para o saque de: ${this.nome}`);

        }
    },
    extrato: function(){
        console.log(`Extrato de ${this.nome} - Saldo: R$${this.saldo/100}`);
        console.log("Histórico:");
        if (this.historicos != []){
            for(let i = 0; i < this.historicos.length; i++){
                console.log(`${this.historicos[i].tipo} de R$${this.historicos[i].valor/100}`);
            }
        }
    }
}