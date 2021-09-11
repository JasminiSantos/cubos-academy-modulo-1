let identificador = "123";
let nome = "José silva costa";
let email = "      jose@ email.com  ";
let tags = ['financeiro', 'administrativo', 'geral'];

const sistema = {
  usuarios: [
 
  ],
  formatarIdentificador: function(identificador){
    novoIdentificador = "";
    if (identificador.length < 6){
      for (let i = 0; i < 6-identificador.length; i++){
        novoIdentificador += "0";
      }
      novoIdentificador += identificador;
    }
    return novoIdentificador;
  },
  formatarNome: function(nome){
    novoNome = nome.split(" ");
    for(let i = 0; i < novoNome.length; i++){
      novoNome[i] = novoNome[i].replace(novoNome[i][0], novoNome[i][0].toUpperCase());
    }
    novoNome = novoNome.join(" ");
    return novoNome;
  },
  formatarEmail: function(email){
    novoEmail = email.split(" ");
    novoEmail = novoEmail.join("");
    return novoEmail;
  },
  formatarTags: function(tags){
    stringTags = "";
    stringTags = tags.join(", ");
    return stringTags;
  },
  adicionarUser: function(identificador, nome, email, tags){
    this.usuarios.push({
      identificador: this.formatarIdentificador(identificador),
      nome: this.formatarNome(nome),
      email: this.formatarEmail(email),
      tags: this.formatarTags(tags)
    });
  }
}
sistema.adicionarUser(identificador, nome, email, tags);
console.log(sistema);