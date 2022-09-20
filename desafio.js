/* Desafío: javaScript
Nombre de Desafío: ciclos_js
Instrucciones */

// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
    // "x" e "y" son números enteros (int).
    // Devuelve el número más grande
    // Si son iguales, devuelve cualquiera de los dos
    // Tu código:
    if(x > y) {
      return x;
    }
    return y;
  }
  
  function mayoriaDeEdad(edad) {
    //Determinar si la persona según su edad puede ingresar a un evento.
    //Si tiene 18 años ó más, devolver --> "Allowed"
    //Si es menor, devolver --> "Not allowed"
    if(edad >= 18) {
      return "Allowed";
    }
    else {
      return "Not allowed";
  }
  }
    
  function conection(status) {
    //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
    //Cuando el estado es igual a 1, el usuario está "Online"
    //Cuando el estado es igual a 2, el usuario está "Away"
    //De lo contrario, presumimos que el usuario está "Offline"
    //Devolver el estado de conexión de usuario en cada uno de los casos.
    let usuario;
    switch (status) {
      case 1:
        usuario = "online";
        break;
      case 2:
        usuario = "away";
        break;
      default:
        usuario = "offline";
        break;
    }
  
    return usuario;
  }
  
  function saludo(idioma) {
    // Devuelve un saludo en tres diferentes lenguajes:
    // Si "idioma" es "aleman", devuelve "Guten Tag!"
    // Si "idioma" es "mandarin", devuelve "Ni Hao!"
    // Si "idioma" es "ingles", devuelve "Hello!"
    // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
    // Tu código:
    if (idioma == "aleman") {
        return "Guten Tag!";
      } else if (idioma == "mandarin") {
        return "Ni Hao!";
      } else if (idioma == "ingles") {
        return "Hello!";
      } else {
        return "Hola";
      }
    }
  function colors(color) {
    //La función recibe un color. Devolver el string correspondiente:
    //En caso que el color recibido sea "blue", devuleve --> "This is blue"
    //En caso que el color recibido sea "red", devuleve --> "This is red"
    //En caso que el color recibido sea "green", devuleve --> "This is green"
    //En caso que el color recibido sea "orange", devuleve --> "This is orange"
    //Caso default: devuelve --> "Color not found"
    //Usar el statement Switch.
    let selection;
    switch (color) {
      case "blue":
        selection = "This is blue";
        break;
      case "red":
        selection = "This is red";
        break;
      case "green":
        selection = "This is green";
        break;
      case "orange":
        selection = "This is orange";
        break;
      default:
        selection = "Color not found";
    }
    return selection;
  }
  
  function esDiezOCinco(numero) {
    // Devuelve "true" si "numero" es 10 o 5
    // De lo contrario, devuelve "false"
    // Tu código:
    return numero === 10 || numero === 5;
  }
  
  function estaEnRango(numero) {
    // Devuelve "true" si "numero" es menor que 50 y mayor que 20
    // De lo contrario, devuelve "false"
    // Tu código:
    return numero < 50 && numero > 20;
  }
  
  function esEntero(numero) {
    // Devuelve "true" si "numero" es un entero (int/integer)
    // Ejemplo: 0.8 -> false
    // Ejemplo: 1 -> true
    // Ejemplo: -10 -> true
    // De lo contrario, devuelve "false"
    // Pista: Puedes resolver esto usando `Math.floor`
    // Tu código:
    let x = Number.isInteger(numero);
    return x;
  }
  
  function fizzBuzz(numero) {
    // Si "numero" es divisible entre 3, devuelve "fizz"
    // Si "numero" es divisible entre 5, devuelve "buzz"
    // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
    // De lo contrario, devuelve el numero
    if (numero % 3 == 0 && numero % 5 == 0) {
        return "fizzbuzz";
      } else if (numero % 5 == 0) {
        return "buzz";
      } else if (numero % 3 == 0) {
        return "fizz";
      } else {
        return numero;
      }
    }
    
  function operadoresLogicos(num1, num2, num3) {
    //La función recibe tres números distintos. 
    //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
    //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
    //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
    //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
    //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
    if(num1 > 0 && num1 > num2 && num1 > num3) {
        return "Número 1 es mayor y positivo";
      }
    else if(num1 < 0 || num2 < 0 || num3 < 0) {
      return "Hay negativos";
    }
    else if(num3 > num1 && num3 > num2) {
        num3++;
      return num3;
    }
    else if(num1 === 0 || num2 === 0 || num3 === 0) {
        return "Error";
      }
    else {
      return false;
    }
    }
  function esPrimo(numero) {
    // Devuelve "true" si "numero" es primo
    // De lo contrario devuelve "falso"
    // Pista: un número primo solo es divisible por sí mismo y por 1
    // Pista 2: Puedes resolverlo usando un bucle `for`
    // Nota: Los números 0 y 1 NO son considerados números primos
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
          return false;
        }
      }
      return numero !== 1;
    }
  
  function esVerdadero(valor){
    //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
    //si su valor es true y “Soy falso” si su valor es false.
    //Escribe tu código aquí
    if(valor === true){
      return "Soy verdadero"
    }
    else {
        return "Soy falso"
    }
  }
  
  function tablaDelSeis(){
    //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
    //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
    //Escribe tu código aquí   
    let tabla = []
    for (let i = 0; i < 11; i++) {
          tabla.push(6 * i)
    }
    return tabla
  }
  
  function tieneTresDigitos(numero){
    //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
    //Escribe tu código aquí
    let str = numero.toString();
    if (str.length == 3) {
      return true;
    } else {
      return false;
    }
  }
  
  function doWhile(numero) {
    //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
    //Retornar el valor final.
    //Usar el bucle do ... while.
    let i = 0;
    do {
      numero += 5;
      i++;
    } while (i < 7);
    return numero;
  }
  
  // No cambies los nombres de las funciones.
  
  function devolverPrimerElemento(array) {
    // Devuelve el primer elemento de un  array (pasado por parametro)
    // Tu código:
    return array[0];
  }
  
  
  function devolverUltimoElemento(array) {
    // Devuelve el último elemento de un array
    // Tu código:
    return array[array.length - 1];
  }
  
  
  function obtenerLargoDelArray(array) {
    // Devuelve el largo de un array
    // Tu código:
    return array.length;
  }
  
  
  function incrementarPorUno(array) {
    // "array" debe ser una matriz de enteros (int/integers)
    // Aumenta cada entero por 1
    // y devuelve el array
    // Tu código:
    for (let i = 0; i < array.length; i++) {
        array[i]++;
      }
      return array;
    }
  
  
  function agregarItemAlFinalDelArray(array, elemento) {
    // Añade el "elemento" al final del array
    // y devuelve el array
    // Tu código:
    array.push(elemento);
    return array;
  }
  
  
  function agregarItemAlComienzoDelArray(array, elemento) {
    // Añade el "elemento" al comienzo del array
    // y devuelve el array
    // Pista: usa el método `.unshift`
    // Tu código:
    array.unshift(elemento);
    return array;
  }
  
  
  function dePalabrasAFrase(palabras) {
    // "palabras" es un array de strings/cadenas
    // Devuelve un string donde todas las palabras estén concatenadas
    // con espacios entre cada palabra
    // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
    // Tu código:
    return palabras.join(" ");
  }
  
  
  function arrayContiene(array, elemento) {
    // Comprueba si el elemento existe dentro de "array"
    // Devuelve "true" si está, o "false" si no está
    // Tu código:
    if (array.includes(elemento)){
        return true;
    }
    else{
        return false;
    }
  }
  
  
  function agregarNumeros(numeros) {
    // "numeros" debe ser un arreglo de enteros (int/integers)
    // Suma todos los enteros y devuelve el valor
    // Tu código:
    var suma = 0;
    for(var i = 0; i < numeros.length; i++) {
      suma = suma + numeros[i];
    }
    return suma;
  
  }
  
  
  
  function promedioResultadosTest(resultadosTest) {
    // "resultadosTest" debe ser una matriz de enteros (int/integers)
    // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
    // Tu código:
    return agregarNumeros(resultadosTest) / resultadosTest.length;
  }
  
  
  function numeroMasGrande(numeros) {
    // "numeros" debe ser una matriz de enteros (int/integers)
    // Devuelve el número más grande
    // Tu código:
    return Math.max(...numeros);
  }
  
  
  function multiplicarArgumentos() {
    // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
    // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
    // Escribe tu código aquí:
    if(arguments.length < 1) {
        return 0;
    }
    let mult = 1;
    for(let i = 0; i < arguments.length; i++) {
      mult = mult * arguments[i];
    }
    return mult;
  }
  
  
  function cuentoElementos(arreglo){
    //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
    //Escribe tu código aquí
    var x = 0;
    for (let i = 0; i < arreglo.length ; i++) {
      if(arreglo[i] > 18){
        x++
      }
    }
    return x
  }
  
  
  function diaDeLaSemana(numeroDeDia) {
    //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
    //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
    //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
    //Escribe tu código aquí   
    let finde = [1, 7];
    let laboral = [2, 3, 4, 5, 6];
  
    if (finde.includes(numeroDeDia)) {
      return "Es fin de semana";
    } else if (laboral.includes(numeroDeDia)) {
      return "Es día laboral";
    }
  }
  
  
  function empiezaConNueve(n) {
    //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
    //inicia con 9 y false en otro caso.
    //Escribe tu código aquí
    const primerDigito = n.toString().charAt(0);
    if (primerDigito === "9") {
      return true;
    } else {
      return false;
    }
  }
  
  
  function todosIguales(arreglo) {
    //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
    //retornar true, caso contrario retornar false.
    //Escribe tu código aquí  
    let x = arreglo.every((elemento) => arreglo[0] == elemento);
    return x;
  } 
  
  
  function mesesDelAño(array) {
    //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
    // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
    //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
    // Tu código:
    let x = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
        x.push(array[i]);
      }
    }
    if (x.length < 3){
        return "no se encontraron los meses pedidos";
    } 
    else {
        return x;
    }
  }
  function mayorACien(array) {
    //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
    //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
    // Tu código:
    var x = [];
    for(let i= 0; i < array.length; i++) {
      if(array[i] > 100) {
        x.push(array[i]);
      }
    }
    return x;
    }

  
  
  function breakStatement(numero) {
    //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
    //Guardar cada nuevo valor en un array. 
    //Devolver el array
    //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
    //devolver: "Se interrumpió la ejecución"
    //Pista: usá el statement 'break'
    // Tu código:
    let array = [];
    let sum = numero;
    for(let i= 0; i < 10; i++) {
      sum = sum + 2;
      if(sum === i) {
        break;
      }
      else {
        array.push(suma);
      }
    }
    if(i < 10) {
      return 'Se interrumpió la ejecución';
    }
    else {
    return array;
  }
    }
  
  
  function continueStatement(numero) {
    //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
    //Guardar cada nuevo valor en un array.    
    //Devolver el array
    //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
    //Pista: usá el statement 'continue'
    // Tu código:
    let arr = [];
    for (let i = 0; i < 10; i++) {
      switch (numero) {
        case i == 5:
          continueStatement;
        default:
          numero += 2;
          arr.push(numero);
          break;
      }
    }
    return arr;
  }