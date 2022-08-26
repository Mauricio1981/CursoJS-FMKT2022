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

function generarTablas() {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);
  if (num1 > num2) {
    alert("Ingrese De nuevo los valores");
  } else {
    let dataView = "";
    for (num1; num1 <= num2; num1++) {
      dataView += viewTablas(num1);
    }
    document.getElementById("tables").innerHTML = dataView;
  }
}

function viewTablas(x) {
  let table =
    "<table><thead><tr><td colspan='5'>Tabla de Multiplicar <b>" +
    x +
    "</b></td></tr></thead><tbody>";
  for (var y = 1; y <= 10; y++) {
    table +=
      "<tr><td>" +
      x +
      "</td><td>x</td><td>" +
      y +
      "</td><td>=</td><td>" +
      x * y +
      "</td></tr>";
  }
  table += "</tbody></table><hr>";
  return table;
}


	