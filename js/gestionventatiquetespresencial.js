function agregarALaTabla() {

    var tablaVentasPresencial = document.getElementById("tablaVentasPresencial");

    var posicion = document.getElementById("posicion").value;
    var sala = document.getElementById("sala").value;

    var fila = tablaVentasPresencial.insertRow();

    var columnaPosicion = fila.insertCell(0);
    var columnaSala = fila.insertCell(1);

    columnaPosicion.innerHTML = posicion;
    columnaSala.innerHTML = sala;

}

function eliminarDeLaTabla() {
    // Obtener la referencia a la tabla
  var tabla = document.getElementById("tablaVentasPresencial");

  // Obtener todas las filas de la tabla
  var filas = tabla.getElementsByTagName("tr");

  // Iterar por cada fila (excepto la primera que contiene los encabezados)
  for (var i = 1; i < filas.length; i++) {
    // Obtener la celda de la primera columna de la fila
    var celda = filas[i].getElementsByTagName("td")[0];

      tabla.deleteRow(i);

      break;
}
  }


  function guardarVentaPresencial() {

    var ventas = JSON.parse(localStorage.getItem("ventas") || "[]");;

    var fechaVenta = document.getElementById("fechaVenta").value;
    var numeroTiquetes = document.getElementById("numeroTiquetes").value;
    var vendedor = document.getElementById("vendedor").value;
    var formaPago = document.getElementById("formaPago").value;
    var pelicula = document.getElementById("pelicula").value;
    var horario = document.getElementById("horario").value;
    var posicion = document.getElementById("posicion").value;
    var sala = document.getElementById("sala").value;

    venta = new ventaTiquetesPresencial (fechaVenta, numeroTiquetes, vendedor, formaPago, pelicula, horario, posicion,sala);

    ventas.push(venta);
    localStorage.setItem("ventas", JSON.stringify(ventas));

   document.getElementById("fechaVenta").focus();

}

function consultarVenta() {
    console.log("Ventas Registradas")
    console.log(JSON.parse(localStorage.getItem("ventas") || "[]"))
}