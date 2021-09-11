const cpf = "12345678900";
const cnpj = "12345678000199";

function validarCpf(cpf){
  novoCPF = "";
  if (cpf.length == 11){
    for(let i = 0; i < cpf.length-2; i = i + 3){
      novoCPF += cpf.slice(i,i+3) + ".";
    }
    novoCPF = novoCPF.substr(0,novoCPF.length-1);
    novoCPF += "-"+ cpf.slice(cpf.length-2,cpf.length);
    return novoCPF;
  }
  else{
    return "CPF Inválido!";
  }
}
function validarCnpj(cnpj){
  novoCNPJ = "";
  if (cnpj.length == 14){
    novoCNPJ = cnpj.slice(0,2) + ".";
    novoCNPJ += cnpj.slice(2,5) + ".";
    novoCNPJ += cnpj.slice(5,8) + "/";
    novoCNPJ += cnpj.slice(8,12) + "-";
    novoCNPJ += cnpj.slice(12,14);
    return novoCNPJ;
  }
  else{
    console.log("CNPJ Inválido!");
  }
}
console.log(validarCpf(cpf));
console.log(validarCnpj(cnpj));