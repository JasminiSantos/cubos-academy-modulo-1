const email = "aluno@cubos.academy";

emailValido = (email) => {
    let temArroba = false;
    let temPonto = false;
    let temPontoInicio = false;
    let temPontoFinal = false;
    for(let i = 0; i < email.length; i++){
        if(email[0] == "."){
            temPontoInicio = true;
        }
        else{
            temPontoInicio = false;
        }

        if(email[i] == "." && i != 0 && i != email.length - 1){
            temPonto = true;
        }

        if(email[i] == "@"){
            temArroba = true;
        }

        if(email[email.length-1] == "."){
            temPontoFinal = true;
        }
        else{
            temPontoFinal = false;
        }
    }
    if(temArroba && temPonto && !temPontoFinal && !temPontoInicio){
        return "E-mail válido!";
    }
    else{
        return "E-mail inválido ";
    }
}