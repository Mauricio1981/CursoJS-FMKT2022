const tope = 10;
var contador = 0;

function contar() {
  if (contador < tope) {
    contador++;
    document.getElementById("contador").innerHTML = contador;
  } else {
    document.getElementById("contar").setAttribute("disabled", "disabled");
  }
}

function generarTablas(){
	let primerValor = document.getElementById("primerValor");
	let segundoValor = document.getElementById("segundoValor");
	
	parseInt(primerValor);
	parseInt(segundoValor);
	
	if (primerValor < segundoValor) {
		for (primerValor; primerValor <= segundoValor; primerValor++) {
			tablasResultantes(primerValor);
		}
		function tablasResultantes(valor) {
			document.write("Tabla de multiplicar del " + valor + "<br>");
			for (i = 1; i <= 10; i++) {
				document.write(valor + " x " + i + "= " + valor * i + "<br>");
			}
		}
		document.write("<h3>Fin del proceso</h3>");
	} else{
		alert("El valor inicial debe ser menor al valor final");
	}
}
