
/**Implementa una función que reciba un texto (string) y que devuelva una matriz bidimensional de
 ancho 5 y de alto indeterminado que incorpore las palabras (elementos separados por espacios) del
 texto una por una de izquierda a derecha y de arriba a abajo. */
  function matriz(texto){
    let palabras = texto.split(" ");
    let matriz = [];

    for (let i = 0; i < palabras.length; i += 5){
        let fila = palabras.slice( i, i +5);
        matriz.push(fila);
    }
    return matriz;
  }
  let texto = " Mary tenía un corderito, su piel era blanca como la nieve";
  let resultado = matriz(texto);
  console.log(resultado);