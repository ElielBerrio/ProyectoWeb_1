function agregarALaTablaTelefono() {
    var tablaTelefono = document.getElementById("tablaTelefono");

    var telefono = document.getElementById("telefono").value;

    var fila = tablaTelefono.insertRow();

    var columnaTelefonos = fila.insertCell(0);

    columnaTelefonos.innerHTML = telefono;
}

function agregarALaTablaTelefonoCelular() {
    var tablaTelefonoCelular = document.getElementById("tablaTelefonoCelular");

    var telefonoCelular = document.getElementById("telefonoCelular").value;

    var fila = tablaTelefonoCelular.insertRow();

    var columnaTelefonos = fila.insertCell(0);

    columnaTelefonos.innerHTML = telefonoCelular;
}

function eliminarDeLaTablaTelefono() {
    // Obtener la referencia a la tabla
  var tabla = document.getElementById("tablaTelefono");

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

  function eliminarDeLaTablaTelefonoCelular() {
    // Obtener la referencia a la tabla
  var tabla = document.getElementById("tablaTelefonoCelular");

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

  function agregarALaTabla() {

    var tablaProductoras = document.getElementById("tablaProductoras");

    var codigo = document.getElementById("codigo").value;
    var nombre = document.getElementById("nombre").value;
    var pais = document.getElementById("pais").value;
    var representante = document.getElementById("representante").value;
    var telefono = document.getElementById("tablaTelefono").value + ", ";

    var columnaTelefono = [];
    
    // Iterar sobre las filas de la tabla (a partir de la segunda fila)
    for (var i = 1; i < tablaTelefono.rows.length; i++) {
      var fila = tablaTelefono.rows[i];
      var celdaTelefono = fila.cells[0].innerText; // Obtener el valor de la segunda celda (columna de teléfono)
      columnaTelefono.push(celdaTelefono);
    }
    // También puedes utilizar los valores para mostrarlos en otro lugar o realizar otras operaciones
    var telefono = columnaTelefono;

    var correo = document.getElementById("correo").value;
    var telefonoCelular = document.getElementById("tablaTelefonoCelular").value + ", ";
    
    var columnatelefonoCelular = [];
    
    // Iterar sobre las filas de la tabla (a partir de la segunda fila)
    for (var i = 1; i < tablaTelefonoCelular.rows.length; i++) {
      var fila = tablaTelefonoCelular.rows[i];
      var celdaTelefono = fila.cells[0].innerText; // Obtener el valor de la segunda celda (columna de teléfono)
      columnatelefonoCelular.push(celdaTelefono);
    }
    // También puedes utilizar los valores para mostrarlos en otro lugar o realizar otras operaciones
    var telefonoCelular = columnatelefonoCelular;

    var fila = tablaProductoras.insertRow();

    var columnaCodigo = fila.insertCell(0);
    var columnaNombre = fila.insertCell(1);
    var columnaPais= fila.insertCell(2);
    var columnaRepresentante = fila.insertCell(3);
    var columnatelefono = fila.insertCell(4);
    var columnacorreo = fila.insertCell(5);
    var columnatelefonoCelular = fila.insertCell(6);


    columnaCodigo.innerHTML = codigo;
    columnaNombre.innerHTML = nombre;
    columnaPais.innerHTML = pais;
    columnaRepresentante.innerHTML = representante;
    columnatelefono.innerHTML = telefono;
    columnacorreo.innerHTML = correo;
    columnatelefonoCelular.innerHTML = telefonoCelular;
   
}

function eliminarDeLaTabla() {
    // Obtener la referencia a la tabla
  var tabla = document.getElementById("tablaProductoras");

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

  function guardarProductora() {

    var productoras = JSON.parse(localStorage.getItem("productoras") || "[]");;

    var codigo = document.getElementById("codigo").value;
    var nombre = document.getElementById("nombre").value;
    var pais = document.getElementById("pais").value;
    var representante = document.getElementById("representante").value;
    var telefono = document.getElementById("tablaTelefono").value + ", ";

    var columnaTelefono = [];
    
    // Iterar sobre las filas de la tabla (a partir de la segunda fila)
    for (var i = 1; i < tablaTelefono.rows.length; i++) {
      var fila = tablaTelefono.rows[i];
      var celdaTelefono = fila.cells[0].innerText; // Obtener el valor de la segunda celda (columna de teléfono)
      columnaTelefono.push(celdaTelefono);
    }
  
    var telefono = columnaTelefono;

    var correo = document.getElementById("correo").value;
    var telefonoCelular = document.getElementById("tablaTelefonoCelular").value + ", ";

    var columnatelefonoCelular = [];
    
    // Iterar sobre las filas de la tabla (a partir de la segunda fila)
    for (var i = 1; i < tablaTelefonoCelular.rows.length; i++) {
      var fila = tablaTelefonoCelular.rows[i];
      var celdaTelefono = fila.cells[0].innerText; // Obtener el valor de la segunda celda (columna de teléfono)
      columnatelefonoCelular.push(celdaTelefono);
    }
   
    var telefonoCelular = columnatelefonoCelular;

    productora = new Productora(codigo, nombre, pais, representante, telefono, correo, telefonoCelular);
    productoras.push(productora);
    localStorage.setItem("productoras", JSON.stringify(productoras));

    document.getElementById("codigo").focus();

}

function consultarProductora() {
    console.log("Productoras Registradas")
    console.log(JSON.parse(localStorage.getItem("productoras") || "[]"))
}