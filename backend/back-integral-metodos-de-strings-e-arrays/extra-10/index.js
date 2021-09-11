const cpf = "011.022.033-44";

removerPontos = (cpf) => {
    novoCpf = cpf.replace(".", " ");
    novoCpf = novoCpf.replace(".", " ");
    novoCpf = novoCpf.replace("-", " ");
    novoCpf = novoCpf.split(" ");
    novoCpf = novoCpf.join("");
    return novoCpf;
  }