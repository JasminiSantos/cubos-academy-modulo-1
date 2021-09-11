const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};
function corrigirprova(prova){
    let respostasCorretas = 0;
    for (let i = 0; i < prova.questoes.length; i++){
        if (prova.questoes[i].resposta == prova.questoes[i].correta){
            respostasCorretas++;
        }
    }
    console.log("O aluno(a) " + prova.aluno +" acertou " + respostasCorretas + " questões e obteve nota "+ (respostasCorretas/prova.questoes.length)*prova.valor);
}

corrigirprova(prova);