window.onload  = function consumirApi() {
    var departamento = document.getElementById("departamento");
    var ciudad = document.getElementById("ciudad");

    // Hacer solicitud fetch para obtener los datos del JSON
    var url = "https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json";
    fetch(url)
        .then(response => response.json())
        .then(json => {
            // Llenar el select de departamentos con los datos obtenidos
            for (var i = 0; i < json.length; i++) {
                var opcion = document.createElement("option");
                opcion.text = json[i].departamento;
                opcion.value = i;
                departamento.appendChild(opcion);
            }

            // Actualizar el select de ciudades cuando se selecciona un departamento
            departamento.onchange = function() {
                var departamentoSelecionado = departamento.value;
                var ciudades = json[departamentoSelecionado].ciudades;

                // Limpiar el select de ciudades
                ciudad.innerHTML = "";

                // Llenar el select de ciudades con los datos del departamento seleccionado
                for (var j = 0; j < ciudades.length; j++) {
                    var option = document.createElement("option");
                    option.text = ciudades[j];
                    option.value = j;
                    ciudad.appendChild(option);
                }
            };
        });
        }