function agregarALaTabla() {

    var tablaCarteleras = document.getElementById("tablaCarteleras");

    var pelicula = document.getElementById("pelicula").value;
    var sala = document.getElementById("sala").value;
    var horario = document.getElementById("horario").value;
    var fechaInicio = document.getElementById("fechaInicio").value;
    var fechaFinalizacion = document.getElementById("fechaFinalizacion").value;

    var fila = tablaCarteleras.insertRow();

    var columnaPelicula = fila.insertCell(0);
    var columnaSala = fila.insertCell(1);
    var columnaHorario = fila.insertCell(2);
    var columnaFechaInicio = fila.insertCell(3);
    var columnaFechaFinalizacion = fila.insertCell(4);

    columnaPelicula.innerHTML = pelicula;
    columnaSala.innerHTML = sala;
    columnaHorario.innerHTML = horario;
    columnaFechaInicio.innerHTML = fechaInicio;
    columnaFechaFinalizacion.innerHTML = fechaFinalizacion;
}

function eliminarDeLaTabla() {
    // Obtener la referencia a la tabla
    var tabla = document.getElementById("tablaCarteleras");

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

function guardarCartelera() {
    var carteleras = JSON.parse(localStorage.getItem("carteleras") || "[]");;

    var pelicula = document.getElementById("pelicula").value;
    var sala = document.getElementById("sala").value;
    var horario = document.getElementById("horario").value;
    var fechaInicio = document.getElementById("fechaInicio").value;
    var fechaFinalizacion = document.getElementById("fechaFinalizacion").value;

    cartelera = new Cartelera(pelicula, sala, horario, fechaInicio, fechaFinalizacion);
    carteleras.push(cartelera);
    localStorage.setItem("carteleras", JSON.stringify(carteleras));

    document.getElementById("pelicula").focus();

}

function consultarCartelera() {
    console.log("Carteleras Registradas")
    console.log(JSON.parse(localStorage.getItem("carteleras") || "[]"))
}
