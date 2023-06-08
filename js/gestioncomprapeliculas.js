function agregarALaTabla() {

    var tablaCompra = document.getElementById("tablaCompra");

    var pelicula = document.getElementById("pelicula").value;
    var cantidad = document.getElementById("cantidad").value;
    var precio = document.getElementById("precio").value;
    var subTotal = cantidad * precio;


    var fila = tablaCompra.insertRow();

    var columnaPelicula = fila.insertCell(0);
    var columnaCantidad = fila.insertCell(1);
    var columnaPrecio = fila.insertCell(2);
    var columnaSubTotal = fila.insertCell(3);


    columnaPelicula.innerHTML = pelicula;
    columnaCantidad.innerHTML = cantidad;
    columnaPrecio.innerHTML = precio;
    columnaSubTotal.innerHTML = subTotal;

    var filas = tablaCompra.rows;
    var suma = 0;

    for (var i = 1; i < filas.length; i++) {
        suma += parseInt(filas[i].cells[3].innerHTML);
    }

    document.getElementById("total").value = suma;

}

function eliminarDeLaTabla() {
    // Obtener la referencia a la tabla
    var tabla = document.getElementById("tablaCompra");

    // Obtener todas las filas de la tabla
    var filas = tabla.getElementsByTagName("tr");

    // Iterar por cada fila (excepto la primera que contiene los encabezados)
    for (var i = 1; i < filas.length; i++) {
        // Obtener la celda de la primera columna de la fila
        var celda = filas[i].getElementsByTagName("td")[0];

        tabla.deleteRow(i);
}
}

function guardarCompra() {

    var compras = JSON.parse(localStorage.getItem("compras") || "[]");
    var tablaCompra = document.getElementById("tablaCompra");

    var filas = tablaCompra.rows;
    var suma = 0;

    for (var i = 1; i < filas.length; i++) {
        var fecha = document.getElementById("fecha").value;
        var numeroCompra = document.getElementById("numeroCompra").value;
        var sucursal = document.getElementById("sucursal").value;
        var pelicula = filas[i].cells[0].innerHTML; // Obtener el valor de la celda de la columna "Película"
        var cantidad = filas[i].cells[1].innerHTML; // Obtener el valor de la celda de la columna "Cantidad"
        var precio = filas[i].cells[2].innerHTML; // Obtener el valor de la celda de la columna "Precio"
        var subTotal = filas[i].cells[3].innerHTML; // Obtener el valor de la celda de la columna "Subtotal"
        var total = document.getElementById("total").value;

        for (var i = 1; i < filas.length; i++) {
            suma += parseInt(filas[i].cells[3].innerHTML);
        }

        total = suma;

        compra = new Compra(fecha, numeroCompra, sucursal, pelicula, cantidad, precio, subTotal, total);
        compras.push(compra);
        localStorage.setItem("compras", JSON.stringify(compras));
    }

    localStorage.setItem("compras", JSON.stringify(compras));
    document.getElementById("fecha").focus();

}

function consultarCompra() {
    console.log("Compras Registradas")
    console.log(JSON.parse(localStorage.getItem("compras") || "[]"))
}

