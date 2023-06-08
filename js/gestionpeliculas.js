function agregarALaLista() {
    var listaGenero = document.getElementById("listaGenero");
    var genero = document.getElementById("genero").value;

    var opcion = document.createElement('option');

    opcion.value = genero;
    opcion.textContent = genero;

    listaGenero.appendChild(opcion);

}

function eliminarDeLaLista() {
    // Se obtine una referencia al elemento <select>
var listaGenero = document.getElementById('listaGenero');

// Se obtiene una referencia a la opción que se desea eliminar (por su índice)
var opcion = listaGenero.options[1];

// Se elimina la opción del elemento <select>
listaGenero.remove(opcion);
}


function agregarALaTablaActoresPrincipales() {
    var tablaActoresPrincipales = document.getElementById("tablaActoresPrincipales");

    var actoresPrincipales = document.getElementById("actoresPrincipales").value;

    var fila = tablaActoresPrincipales.insertRow();

    var columnaActores = fila.insertCell(0);

    columnaActores.innerHTML = actoresPrincipales;

}

function eliminarDeLaTablaActoresPrincipales() {
    var tabla = document.getElementById("tablaActoresPrincipales");
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

function agregarALaTablaSubtitulosDisponibles() {
    var tablaSubtitulosDisponibles = document.getElementById("tablaSubtitulosDisponibles");

    var subtitulosDisponibles = document.getElementById("subtitulosDisponibles").value;

    var fila = tablaSubtitulosDisponibles.insertRow();

    var columnaSubtitulos = fila.insertCell(0);

    columnaSubtitulos.innerHTML = subtitulosDisponibles;

}

function eliminarDeLaTablaSubtitulosDisponibles() {
    var tabla = document.getElementById("tablaSubtitulosDisponibles");
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

function agregarALaTablaActoresSecundarios() {
    var tablaActoresSecundarios = document.getElementById("tablaActoresSecundarios");

    var actoresSecundarios = document.getElementById("actoresSecundarios").value;

    var fila = tablaActoresSecundarios.insertRow();

    var columnaActores = fila.insertCell(0);

    columnaActores.innerHTML = actoresSecundarios;

}

function eliminarDeLaTablaActoresSecundarios() {
    var tabla = document.getElementById("tablaActoresSecundarios");
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

function agregarALaTablaIdiomasDisponibles() {
    var tablaIdiomasDisponibles = document.getElementById("tablaIdiomasDisponibles");

    var idiomasDisponibles = document.getElementById("idiomasDisponibles").value;

    var fila = tablaIdiomasDisponibles.insertRow();

    var columnaIdiomas = fila.insertCell(0);

    columnaIdiomas.innerHTML = idiomasDisponibles;

}

function eliminarDeLaTablaIdiomasDisponibles() {
    var tabla = document.getElementById("tablaIdiomasDisponibles");
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

function guardarPelicula() {

    var peliculas = JSON.parse(localStorage.getItem("peliculas") || "[]");;

    var codigoAsignado = document.getElementById("codigoAsignado").value;
    var nombreOriginal = document.getElementById("nombreOriginal").value;
    var nombreAsignado = document.getElementById("nombreAsignado").value;
    var genero = document.getElementById("genero").value;
    var listaGenero = document.getElementById("listaGenero").value;
    var duracion = document.getElementById("hora").value + ":" + document.getElementById("minuto").value +":" + document.getElementById("segundo").value;
    var idiomaOriginal = document.getElementById("idiomaOriginal").value;
    var productora = document.getElementById("productora").value;
    var numeroCopias = document.getElementById("numeroCopias").value;
    var numeroAfiches = document.getElementById("numeroAfiches").value;
    var actoresPrincipales = document.getElementById("tablaActoresPrincipales").value + ", ";

    var columnaActoresPrincipales = [];
    
    // Iterar sobre las filas de la tabla (a partir de la segunda fila)
    for (var i = 1; i < tablaActoresPrincipales.rows.length; i++) {
      var fila = tablaActoresPrincipales.rows[i];
      var celda = fila.cells[0].innerText; // Obtener el valor de la segunda celda (columna de teléfono)
      columnaActoresPrincipales.push(celda);
    }

    var actoresPrincipales = columnaActoresPrincipales;

    var subtitulosDisponibles = document.getElementById("subtitulosDisponibles").value + ", ";
    var columnaSubtitulosDisponibles = [];
    
    // Iterar sobre las filas de la tabla (a partir de la segunda fila)
    for (var i = 1; i < tablaSubtitulosDisponibles.rows.length; i++) {
      var fila = tablaSubtitulosDisponibles.rows[i];
      var celda = fila.cells[0].innerText; // Obtener el valor de la segunda celda (columna de teléfono)
      columnaSubtitulosDisponibles.push(celda);
    }

    var subtitulosDisponibles = columnaSubtitulosDisponibles;

    var actoresSecundarios = document.getElementById("actoresSecundarios").value + ", ";

    var columnaActoresSecundarios = [];
    
    // Iterar sobre las filas de la tabla (a partir de la segunda fila)
    for (var i = 1; i < tablaActoresSecundarios.rows.length; i++) {
      var fila = tablaActoresSecundarios.rows[i];
      var celda = fila.cells[0].innerText; // Obtener el valor de la segunda celda (columna de teléfono)
      columnaActoresSecundarios.push(celda);
    }

    var actoresSecundarios = columnaActoresSecundarios;

    var idiomasDisponibles = document.getElementById("idiomasDisponibles").value + ", ";
    var columnaIdiomasDisponibles = [];
    
    // Iterar sobre las filas de la tabla (a partir de la segunda fila)
    for (var i = 1; i < tablaIdiomasDisponibles.rows.length; i++) {
      var fila = tablaIdiomasDisponibles.rows[i];
      var celda = fila.cells[0].innerText; // Obtener el valor de la segunda celda (columna de teléfono)
      columnaIdiomasDisponibles.push(celda);
    }

    var idiomasDisponibles = columnaIdiomasDisponibles;
    

    pelicula = new Pelicula(codigoAsignado, nombreOriginal, nombreAsignado, genero, listaGenero, duracion, idiomaOriginal, productora, numeroCopias, numeroAfiches, actoresPrincipales, subtitulosDisponibles, actoresSecundarios, idiomasDisponibles);
    peliculas.push(pelicula);
    localStorage.setItem("peliculas", JSON.stringify(peliculas));

    document.getElementById("codigoAsignado").focus();

}

function consultarPelicula() {
    console.log("Peliculas Registradas")
    console.log(JSON.parse(localStorage.getItem("peliculas") || "[]"))
}