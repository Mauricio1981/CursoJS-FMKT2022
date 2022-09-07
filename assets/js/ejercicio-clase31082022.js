const tope = 10;
const topePersonas = 2;
var contador = 0;
var contadorPersonas = 0;
var arreglosPersonas = [];

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
var lista = Array.from(document.getElementsByTagName("li"));
console.log(lista);

function registrar() {
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let telefono = document.getElementById("telefono").value;
  let anio = document.getElementById("anio").value;
  let precio = document.getElementById("precio").value;
  if (contadorPersonas < topePersonas) {
    if (
      nombre.trim() !== "" &&
      apellido.trim() !== "" &&
      telefono.trim() !== "" &&
      anio.trim() !== "" &&
      isNumeric(anio) &&
      precio.trim() !== "" &&
      isNumeric(precio)
    ) {
      contadorP();
      personas(nombre, apellido, telefono, anio, precio);
      console.log(arreglosPersonas);
      document.getElementById("form").reset();
      document.getElementById("errors").innerHTML = "";
    } else {
      document.getElementById("errors").innerHTML =
        "<b>Tienes un error en los campos</b>";
    }
  }
}

function contadorP() {
  if (contadorPersonas === topePersonas - 1) {
    mostrarDatos();
  }
  document.getElementById("contadorPersonas").innerHTML = contadorPersonas;

  contadorPersonas++;
}
function personas(nombre, apellido, telefono, anio, precio) {
  let data = { nombre, apellido, telefono, anio, precio };
  arreglosPersonas.push(data);
}

function isNumeric(val) {
  return /^-?\d+$/.test(val);
}

function mostrarDatos() {
  var data =
    "<table><thead><tr><td>Nombres</td><td>Apellidos</td><td>Telefono</td><td>Edad</td></tr></tehad><tbody>";
  arreglosPersonas.forEach((element) => {
    data +=
      "<tr><td>" +
      element.nombre +
      "</td><td>" +
      element.apellido +
      "</td><td>" +
      element.telefono +
      "</td><td>" +
      element.anio +
      "</td></tr>";
  });
  data += "</tbody></table>";
  console.log(total());
  document.getElementById("tablesContacto").innerHTML = data;
}
function total() {
  return arreglosPersonas.reduce(
    (totalAcumulador, p) => totalAcumulador + p.precio,
    0
  );
}
