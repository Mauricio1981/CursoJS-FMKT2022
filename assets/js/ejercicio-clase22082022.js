/*var y;
y=prompt('Ingresa un valor a multiplicar:','');
y=parseInt(y);

for (var x = 1; x <= 10; x++) {

	r=y*x;

	document.write(y+"x"+x+"="+ r + "<br>");

}*/

let primerValor = prompt("Ingrese primer valor", 0);
let segundoValor = prompt("Ingrese segundo valor", 0);

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
	document.write("El valor inicial debe ser menor al valor final");
}
