function agregarALaTabla() {
    var tablaUsuarios = document.getElementById("tablaUsuarios");

    var identificacion = document.getElementById("identificacion").value;
    var contrasena = document.getElementById("contrasena").value;
    var rol = document.getElementById("rol").value;
    var fechaCreacion = document.getElementById("fechaCreacion").value;
    var fechaModificacion = document.getElementById("fechaModificacion").value;

    var fila = tablaUsuarios.insertRow();

    var columnaIdentificacion = fila.insertCell(0);
    var columnaContrasena = fila.insertCell(1);
    var columnaRol = fila.insertCell(2);
    var columnaFechaCreacion = fila.insertCell(3);
    var columnaFechaModificacion = fila.insertCell(4);

    columnaIdentificacion.innerHTML = identificacion;
    columnaContrasena.innerHTML = contrasena;
    columnaRol.innerHTML = rol;
    columnaFechaCreacion.innerHTML = fechaCreacion;
    columnaFechaModificacion.innerHTML = fechaModificacion;
}

function eliminarDeLaTabla() {
    // Obtener la referencia a la tabla
  var tabla = document.getElementById("tablaUsuarios");

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

  function guardarUsuario() {

    var usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");;

    var identificacion = document.getElementById("identificacion").value;
    var contrasena = document.getElementById("contrasena").value;
    var rol = document.getElementById("rol").value;
    var fechaCreacion = document.getElementById("fechaCreacion").value;
    var fechaModificacion = document.getElementById("fechaModificacion").value;

    usuario = new Usuario(identificacion, contrasena, rol, fechaCreacion, fechaModificacion);
    usuarios.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    document.getElementById("identificacion").focus();

}

function consultarUsuario() {
    console.log("Usuarios Registrados")
    console.log(JSON.parse(localStorage.getItem("usuarios") || "[]"))
}