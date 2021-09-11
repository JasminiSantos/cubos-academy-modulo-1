const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];
const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"];

numeros.sort(ordemCrescenteNumeros = (a,b) => {
    return a - b;
  });
  
  ordemDecrescenteNumeros = (numeros) => {
    numeros.reverse();
    return numeros;
  }
  
  frutas.sort(ordemCrescenteLetras = (a,b) => {
    return a.localeCompare(b);
  });
  
  ordemDecrescenteLetras = (frutas) => {
    frutas.reverse();
    return frutas;
  }