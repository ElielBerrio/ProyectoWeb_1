function agregarALaTabla() {
    var tablaVentaEnLinea = document.getElementById("tablaVentaEnLinea");

    var posicion = document.getElementById("posicion").value;
    var sala = document.getElementById("sala").value;
    var pelicula = document.getElementById("pelicula").value;

    var fila = tablaVentaEnLinea.insertRow();

    var columnaPosicion = fila.insertCell(0);
    var columnaSala = fila.insertCell(1);
    var columnaPelicula = fila.insertCell(2);

    columnaPosicion.innerHTML = posicion;
    columnaSala.innerHTML = sala;
    columnaPelicula.innerHTML = pelicula;

}

function eliminarDeLaTabla() {
      // Obtener la referencia a la tabla
  var tabla = document.getElementById("tablaVentaEnLinea");

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

function guardarVenta() {

    var ventas = JSON.parse(localStorage.getItem("ventasL") || "[]");;

    var horario = document.getElementById("horario").value;
    var fechaVenta = document.getElementById("fechaVenta").value;
    var numeroTiquetes = document.getElementById("numeroTiquetes").value;
    var formaPago = document.getElementById("formaPago").value;
    var posicion = document.getElementById("posicion").value;
    var sala = document.getElementById("sala").value;
    var pelicula = document.getElementById("pelicula").value;

    venta = new VentaTiquetesEnLinea(horario, fechaVenta, numeroTiquetes, formaPago, posicion, sala, pelicula);
    ventas.push(venta);
    localStorage.setItem("ventasL", JSON.stringify(ventas));

    document.getElementById("horario").focus();

}


function consultarVenta() {
    console.log("Ventas en línea Registradas")
    console.log(JSON.parse(localStorage.getItem("ventasL") || "[]"))
}