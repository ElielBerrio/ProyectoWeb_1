
usuario = { identificador: "elielberrio", password: "123", rol: "Administrador" };

function iniciarSesion() {

    var usuarioEntrada = document.getElementById("Identificacion");
    var passwordEntrada = document.getElementById("Contrasena");

    var usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

    var usuarioEncontrado = usuarios.find(function (usuario) {
        return usuario.identificacion === usuarioEntrada.value && usuario.contrasena === passwordEntrada.value;
    });


    if (usuarioEncontrado) {

        if (usuarioEncontrado.rol === "Cliente")
            window.location.href = "menucliente.html";
        else if (usuarioEncontrado.rol === "Administrador")
            window.location.href = "menuadministrador.html";
        else if (usuarioEncontrado.rol === "Gerente")
            window.location.href = "menugerente.html";
        else if (usuarioEncontrado.rol === "Vendedor")
            window.location.href = "menuvendedor.html";
    } else {
        alert("Usuario y/o contraseña incorrecta");
        usuarioEntrada.value = "";
        passwordEntrada.value = '';
        usuarioEntrada.focus();
    }


}

function registrarse() {
    window.location.href = "gestiondeusuarios.html";
}