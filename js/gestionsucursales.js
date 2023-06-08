function agregarALaTabla() {

    var tablaSucursales = document.getElementById("tablaSucursales");

    var codigo = document.getElementById("codigo").value;
    var direccion = document.getElementById("direccion").value;
    var barrio = document.getElementById("barrio").value;
    var departamento = document.getElementById("departamento").value;
    var ciudad = document.getElementById("ciudad").value;
    var numeroTrabajadores = document.getElementById("numeroTrabajadores").value;
    var gerenteEncargado = document.getElementById("gerenteEncargado").value;
    var numeroSalas = document.getElementById("numeroSalas").value;

      var opciones = document.getElementsByName("opcion");
      var opcionSeleccionada = null;

      // Iterar sobre los elementos radio y verificar cuál está seleccionado
      for (var i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
          opcionSeleccionada = opciones[i].value;
          break;
        }
      }

      var poseeCafeteria =  opcionSeleccionada;
    

    var fila = tablaSucursales.insertRow();

    var columnaCodigo = fila.insertCell(0);
    var columnaDireccion = fila.insertCell(1);
    var columnaBarrio = fila.insertCell(2);
    var columnaDepartamento = fila.insertCell(3);
    var columnaCiudad = fila.insertCell(4);
    var columnaNumeroTrabajadores = fila.insertCell(5);
    var columnaGerenteEncargado = fila.insertCell(6);
    var columnaNumeroSalas = fila.insertCell(7);
    var columnaPoseeCafeteria = fila.insertCell(8);

    columnaCodigo.innerHTML = codigo;
    columnaDireccion.innerHTML = direccion;
    columnaBarrio.innerHTML = barrio;
    columnaDepartamento.innerHTML = departamento;
    columnaCiudad.innerHTML = ciudad;
    columnaNumeroTrabajadores.innerHTML = numeroTrabajadores;
    columnaGerenteEncargado.innerHTML = gerenteEncargado;
    columnaNumeroSalas.innerHTML = numeroSalas;
    columnaPoseeCafeteria.innerHTML = poseeCafeteria;
}

function eliminarDeLaTabla() {
    // Obtener la referencia a la tabla
  var tabla = document.getElementById("tablaSucursales");

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

  function guardarSucursal() {

    var sucursales = JSON.parse(localStorage.getItem("sucursales") || "[]");;

    var codigo = document.getElementById("codigo").value;
    var direccion = document.getElementById("direccion").value;
    var barrio = document.getElementById("barrio").value;
    var departamento = document.getElementById("departamento").value;
    var ciudad = document.getElementById("ciudad").value;
    var numeroTrabajadores = document.getElementById("numeroTrabajadores").value;
    var gerenteEncargado = document.getElementById("gerenteEncargado").value;
    var numeroSalas = document.getElementById("numeroSalas").value;
    
     var opciones = document.getElementsByName("opcion");
      var opcionSeleccionada = null;

      // Iterar sobre los elementos radio y verificar cuál está seleccionado
      for (var i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
          opcionSeleccionada = opciones[i].value;
          break;
        }
      }

      var poseeCafeteria =  opcionSeleccionada;
    
    sucursal = new Sucursal(codigo, direccion, barrio, departamento, ciudad, numeroTrabajadores, gerenteEncargado, numeroSalas, poseeCafeteria);
    sucursales.push(sucursal);
    localStorage.setItem("sucursales", JSON.stringify(sucursales));

    document.getElementById("codigo").focus();

}

function consultarSucursal() {
    console.log("Sucursales Registradas")
    console.log(JSON.parse(localStorage.getItem("sucursales") || "[]"))
}