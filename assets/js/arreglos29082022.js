var arreglo = [20, "ejemplo", 20, true, 20, 100];
var arreglo2 = new Array("ejemplo", "20");
console.log(arreglo[2]);
console.log(arreglo.length);

for (var i = 0; i < arreglo.length; i++) {
  console.log(arreglo[i]);
}

arreglo.forEach(function (valor) {
  console.log(valor);
});

arreglo.forEach((numero) => console.log(numero));

arreglo.forEach((numero, index) => {
  console.log("Position:" + index + " Valor:" + numero);
});

arreglo.push("hola");
arreglo.unshift("dos");

arreglo2.pop();
arreglo.shift();

const arregloClonado = arreglo.slice();

var arregloNuevo = ["dos", 3, ["1", 2, "hola"]];

const [uno, dos, ...tres] = ["10", 20, 40, 50, 80];

console.log(arreglo2.concat(arreglo));

arreglo.includes(20); // true false
arreglo.indexOf(20); // posicion -1
arreglo.lastIndexOf(20); // posicion ultimavez -1
arreglo.reverse(); //[1,2,3,4] [4,2,3,1]
arreglo.sort(); //[10,2,3,4]  [2,3,4,10]
arreglo.splice(0, 1); //[1,5,7,8] [5,7,8]
arreglo.splice(2, 0, 7, 9); //[1,5,7,8] [1,5,7,7,9,8]
//["dos", 3, 7,9, [ 9,9,2, "hola"]];
// arreglo[4].splice(0,1,9,9);
var lista = Array.from(document.getElementsByTagName("li"));
