const carrinho = {
  nomeDoCliente: "Guido Bernal",
  produtos: [
      {
          id: 1,
          nome: "Camisa",
          qtd: 3,
          precoUnit: 3000
      },
      {
          id: 2,
          nome: "Bermuda",
          qtd: 2,
          precoUnit: 5000
      }
  ],
  calcularTotalDeItens: function(carrinho){
    let unidades = 0;
    for(let i = 0; i < this.produtos.length; i++){
      unidades +=  this.produtos[i].qtd;
    }
    return unidades;
  },
  calcularTotalAPagar: function(carrinho){
    let soma = 0;
    for(let i = 0; i < this.produtos.length; i++){
      soma += this.produtos[i].qtd*this.produtos[i].precoUnit;
    }
    return soma;
  },
  imprimirResumo: function(carrinho){
      let unidades = this.calcularTotalDeItens(this);
      let soma = this.calcularTotalAPagar(this);

      console.log(`Cliente: ${this.nomeDoCliente}`);
      console.log(`Total de Itens: ${unidades}`);
      console.log(`Total a pagar: R$ ${(soma/100).toFixed(2)}`);
  },
  addProduto: function(produto){
    for(let i = 0; i < this.produtos.length; i++){
      if(produto.id == this.produtos[i].id){
        this.produtos[i].qtd += produto.qtd;
        return this.produtos[i].qtd;
      }
    }
    this.produtos.push(produto);
  },
  imprimirDetalhes: function(carrinho){
    let unidades = this.calcularTotalDeItens(this);
    let soma = this.calcularTotalAPagar(this);

    console.log(`Cliente: ${this.nomeDoCliente}`);

    for(let i = 0; i < this.produtos.length; i++){
      console.log(`Item ${i+1} - ${this.produtos[i].nome} - ${this.produtos[i].qtd} und - R$ ${(this.produtos[i].qtd*this.produtos[i].precoUnit/100).toFixed(2)}`);
    }
    console.log(`Total de Itens: ${unidades}`);
    console.log(`Total a pagar: R$ ${(soma/100).toFixed(2)}`);
  },
  calcularDesconto: function(){
    unidades = this.calcularTotalDeItens(this);
    soma = this.calcularTotalAPagar(this);
    desconto1 = soma;
    desconto2 = soma;

    if (unidades > 4){
      for (let i = 0; i < this.produtos.length; i++){
        if (this.produtos[i].precoUnit < desconto1){
          desconto1 = this.produtos[i].precoUnit;
        }
      }
      desconto1 = soma - desconto1;
    }
    if (soma > 100){
      desconto2 = soma*0.9;
    }

    if (desconto1 < desconto2){
      return desconto1/100;
    }
    else{
      return desconto2/100;
    }
  }
};
const novaBermuda = {
          id: 2,
          nome: "Bermuda",
          qtd: 3,
          precoUnit: 5000
      }
const novoTenis = {
          id: 3,
          nome: "Tenis",
          qtd: 1,
          precoUnit: 10000
      }
carrinho.addProduto(novaBermuda);
carrinho.addProduto(novoTenis);
console.log(carrinho);
carrinho.imprimirResumo(carrinho);
carrinho.imprimirDetalhes(carrinho)

console.log(carrinho.calcularDesconto());