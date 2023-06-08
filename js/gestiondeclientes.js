function agregarALaTabla() {

    var tablaClientes = document.getElementById("tablaClientes");

    var nombres = document.getElementById("Nombres").value;
    var apellidos = document.getElementById("Apellidos").value;
    var identificacion = document.getElementById("Identificación").value;
    var correo = document.getElementById("correo").value;
    var numero = document.getElementById("Numero").value;
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
    var sexo = document.getElementById("sexo").value;
    var identificador = document.getElementById("Identificador").value;
    var contrasena = document.getElementById("Contrasena").value;
    var direccion =  document.getElementById("Carrera").value + " " + document.getElementById ("Calle").value
    + "-" + document.getElementById ("Manzana").value + ", " + document.getElementById ("Barrio").value;
    

    var fila = tablaClientes.insertRow();

    var columnaNombres = fila.insertCell(0);
    var columnaApellidos = fila.insertCell(1);
    var columnaIdentificacion = fila.insertCell(2);
    var columnaCorreo = fila.insertCell(3);
    var columnaNumero = fila.insertCell(4);
    var columnaFecha = fila.insertCell(5);
    var columnaSexo = fila.insertCell(6);
    var columnaIdentificador = fila.insertCell(7);
    var columnaContrasena = fila.insertCell(8);
    var columnaDireccion = fila.insertCell(9);

    columnaNombres.innerHTML = nombres;
    columnaApellidos.innerHTML = apellidos;
    columnaIdentificacion.innerHTML = identificacion;
    columnaCorreo.innerHTML = correo;
    columnaNumero.innerHTML = numero;
    columnaFecha.innerHTML = fechaNacimiento;
    columnaSexo.innerHTML = sexo;
    columnaIdentificador.innerHTML = identificador;
    columnaContrasena.innerHTML = contrasena;
    columnaDireccion.innerHTML = direccion;
}

function eliminarDeLaTabla() {
    // Obtener la referencia a la tabla
  var tabla = document.getElementById("tablaClientes");

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

  function guardarCliente() {

    var clientes = JSON.parse(localStorage.getItem("clientes") || "[]");;

    var nombres = document.getElementById("Nombres").value;
    var apellidos = document.getElementById("Apellidos").value;
    var identificacion = document.getElementById("Identificación").value;
    var correo = document.getElementById("correo").value;
    var numero = document.getElementById("Numero").value;
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
    var sexo = document.getElementById("sexo").value;
    var identificador = document.getElementById("Identificador").value;
    var contrasena = document.getElementById("Contrasena").value;
    var direccion = document.getElementById("Carrera").value + " " + document.getElementById("Calle").value
        + "-" + document.getElementById("Manzana").value + ", " + document.getElementById("Barrio").value;

    cliente = new Cliente(nombres, apellidos, identificacion, correo, numero, fechaNacimiento, sexo, identificador, contrasena, direccion);
    clientes.push(cliente);
    localStorage.setItem("clientes", JSON.stringify(clientes));

    document.getElementById("Nombres").focus();

}

function consultarCliente() {
    console.log("Clientes Registrados")
    console.log(JSON.parse(localStorage.getItem("clientes") || "[]"))
}
