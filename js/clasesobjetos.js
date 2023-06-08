class Cliente {

    constructor(nombre, apellido, identificacion, correo, numero, fechaNacimiento, sexo, identificador, contrasena, direccion) {

        this.nombre = nombre;
        this.apellido = apellido;
        this.identificacion = identificacion;
        this.correo = correo;
        this.numero = numero;
        this.fechaNacimiento = fechaNacimiento;
        this.sexo = sexo;
        this.identificador = identificador;
        this.contrasena = contrasena;
        this.direccion = direccion;
    }

    setNombre(nombre) {

        this.nombre = nombre;
    }

    getNombre() {

        return this.nombre;

    }

    setApellido(apellido) {

        this.apellido = apellido;
    }

    getApellido() {

        return this.apellido;

    }

    setIdentificacion(identificacion) {

        this.identificacion = identificacion;
    }

    getIdentificacion() {

        return this.identificacion;

    }

    setCorreo(correo) {

        this.correo = correo;
    }

    getCorreo() {

        return this.correo;

    }

    setNumero(numero) {

        this.numero = numero;
    }

    getNumero() {

        return this.numero;

    }

    setfechaNacimiento(fechaNacimiento) {

        this.fechaNacimiento = fechaNacimiento;
    }

    getfechaNacimiento() {

        return this.fechaNacimiento;

    }

    setSexo(sexo) {

        this.sexo = sexo;
    }

    getSexo() {

        return this.sexo;

    }

    setDireccion(direccion) {

        this.direccion = direccion;
    }

    getDireccion() {

        return this.direccion;

    }

    setIdentificador(identificador) {

        this.identificador = identificador;
    }

    getIdentificador() {

        return this.identificador;

    }

    setContrasena(contrasena) {

        this.contrasena = contrasena;
    }

    getContrasena() {

        return this.contrasena;

    }


}


class Compra {

    constructor (fecha, numeroCompra, sucursal, pelicula, cantidad, precio, subTotal, total) {
        this.fecha = fecha;
        this.numeroCompra = numeroCompra;
        this.sucursal = sucursal;
        this.pelicula = pelicula;
        this.cantidad = cantidad;
        this.precio = precio;
        this.subTotal = subTotal;
        this.total = total;
    }

    setContrasena(fecha) {

        this.fecha = fecha;
    }

    getContrasena() {

        return this.fecha;

    }

    setContrasena(numeroCompra) {

        this.numeroCompra = numeroCompra;
    }

    getContrasena() {

        return this.numeroCompra;

    }

    setContrasena(sucursal) {

        this.sucursal = sucursal;
    }

    getContrasena() {

        return this.sucursal;

    }

    setContrasena(pelicula) {

        this.pelicula = pelicula;
    }

    getContrasena() {

        return this.pelicula;

    }

    setContrasena(cantidad) {

        this.cantidad = cantidad;
    }

    getContrasena() {

        return this.cantidad;

    }

    setContrasena(precio) {

        this.precio = precio;
    }

    getContrasena() {

        return this.precio;

    }

    setContrasena(subTotal) {

        this.subTotal = subTotal;
    }

    getContrasena() {

        return this.subTotal;

    }

    setContrasena(total) {

        this.total = total;
    }

    getContrasena() {

        return this.total;

    }
}

class Productora {

    constructor (codigo, nombre, pais, representante, telefono, correo, telefonoCelular) {

        this.codigo = codigo;
        this.nombre = nombre;
        this.pais = pais;
        this.representante = representante;
        this.telefono = telefono;
        this.correo = correo;
        this.telefonoCelular = telefonoCelular;

    }

    setContrasena(codigo) {

        this.codigo = codigo;
    }

    getContrasena() {

        return this.codigo;

    }

    setContrasena(nombre) {

        this.nombre = nombre;
    }

    getContrasena() {

        return this.nombre;

    }

    setContrasena(pais) {

        this.pais = pais;
    }

    getContrasena() {

        return this.pais;

    }

    setContrasena(representante) {

        this.representante = representante;
    }

    getContrasena() {

        return this.representante;

    }

    setContrasena(telefono) {

        this.telefono = telefono;
    }

    getContrasena() {

        return this.telefono;

    }

    setContrasena(correo) {

        this.correo = correo;
    }

    getContrasena() {

        return this.correo;

    }

    setContrasena(telefonoCelular) {

        this.telefonoCelular = telefonoCelular;
    }

    getContrasena() {

        return this.telefonoCelular;

    }
}


class Sucursal {

    constructor (codigo, direccion, barrio, departamento, ciudad, numeroTrabajadores, gerenteEncargado, numeroSalas, poseeCafeteria) {

        this.codigo = codigo;
        this.direccion = direccion;
        this.barrio = barrio;
        this.departamento = departamento;
        this.ciudad = ciudad;
        this.numeroTrabajadores = numeroTrabajadores;
        this.gerenteEncargado = gerenteEncargado;
        this.numeroSalas = numeroSalas;
        this.poseeCafeteria = poseeCafeteria;

    }

    setContrasena(codigo) {

        this.codigo = codigo;
    }

    getContrasena() {

        return this.codigo;

    }

    setContrasena(direccion) {

        this.direccion = direccion;
    }

    getContrasena() {

        return this.direccion;

    }

    setContrasena(barrio) {

        this.barrio = barrio;
    }

    getContrasena() {

        return this.barrio;

    }

    setContrasena(departamento) {

        this.departamento = departamento;
    }

    getContrasena() {

        return this.departamento;

    }

    setContrasena(ciudad) {

        this.ciudad = ciudad;
    }

    getContrasena() {

        return this.ciudad;

    }

    setContrasena(numeroTrabajadores) {

        this.numeroTrabajadores = numeroTrabajadores;
    }

    getContrasena() {

        return this.numeroTrabajadores;

    }

    setContrasena(gerenteEncargado) {

        this.gerenteEncargado = gerenteEncargado;
    }

    getContrasena() {

        return this.gerenteEncargado;

    }

    setContrasena(numeroSalas) {

        this.numeroSalas = numeroSalas;
    }

    getContrasena() {

        return this.numeroSalas;

    }

    setContrasena(poseeCafeteria) {

        this.poseeCafeteria = poseeCafeteria;
    }

    getContrasena() {

        return this.poseeCafeteria;

    }
}

class ventaTiquetesPresencial {

    constructor (fechaVenta, numeroTiquetes, vendedor, formaPago, pelicula, horario, posicion, sala) {
        this.fechaVenta = fechaVenta;
        this.numeroTiquetes = numeroTiquetes;
        this.vendedor = vendedor;
        this.formaPago = formaPago;
        this.pelicula = pelicula;
        this.horario = horario;
        this.posicion = posicion;
        this.sala = sala;
    }

    setContrasena(fechaVenta) {

        this.fechaVenta = fechaVenta;
    }

    getContrasena() {

        return this.fechaVenta;

    }

    setContrasena(numeroTiquetes) {

        this.numeroTiquetes = numeroTiquetes;
    }

    getContrasena() {

        return this.numeroTiquetes;

    }

    setContrasena(vendedor) {

        this.vendedor = vendedor;
    }

    getContrasena() {

        return this.vendedor;

    }

    setContrasena(formaPago) {

        this.formaPago = formaPago;
    }

    getContrasena() {

        return this.formaPago;

    }

    setContrasena(pelicula) {

        this.pelicula = pelicula;
    }

    getContrasena() {

        return this.pelicula;

    }

    setContrasena(horario) {

        this.horario = horario;
    }

    getContrasena() {

        return this.horario;

    }

    setContrasena(posicion) {

        this.posicion = posicion;
    }

    getContrasena() {

        return this.posicion;

    }

    setContrasena(sala) {

        this.sala = sala;
    }

    getContrasena() {

        return this.sala;

    }
}

class Cartelera {
    constructor (pelicula, sala, horario, fechaInicio, fechaFinalizacion) {
        this.pelicula = pelicula;
        this.sala = sala;
        this.horario = horario;
        this.fechaInicio = fechaInicio;
        this.fechaFinalizacion = fechaFinalizacion;
    }

    setContrasena(pelicula) {

        this.pelicula = pelicula;
    }

    getContrasena() {

        return this.pelicula;

    } 

    setContrasena(sala) {

        this.sala = sala;
    }

    getContrasena() {

        return this.sala;

    }

    setContrasena(horario) {

        this.horario = horario;
    }

    getContrasena() {

        return this.horario;

    }

    setContrasena(fechaInicio) {

        this.fechaInicio = fechaInicio;
    }

    getContrasena() {

        return this.fechaInicio;

    }

    setContrasena(fechaFinalizacion) {

        this.fechaFinalizacion = fechaFinalizacion;
    }

    getContrasena() {

        return this.fechaFinalizacion;

    }
}

class VentaTiquetesEnLinea {
    constructor (horario, fechaVenta, numeroTiquetes, formaPago, posicion, sala, pelicula) {
        this.horario = horario;
        this.fechaVenta = fechaVenta;
        this.numeroTiquetes = numeroTiquetes;
        this.formaPago = formaPago;
        this.posicion = posicion;
        this.sala = sala;
        this.pelicula = pelicula;
    }

    setContrasena(horario) {

        this.horario = horario;
    }

    getContrasena() {

        return this.horario;

    }

    setContrasena(fechaVenta) {

        this.fechaVenta = fechaVenta;
    }

    getContrasena() {

        return this.fechaVenta;

    }

    setContrasena(numeroTiquetes) {

        this.numeroTiquetes = numeroTiquetes;
    }

    getContrasena() {

        return this.numeroTiquetes;

    }

    setContrasena(formaPago) {

        this.formaPago = formaPago;
    }

    getContrasena() {

        return this.formaPago;

    }

    setContrasena(posicion) {

        this.posicion = posicion;
    }

    getContrasena() {

        return this.posicion;

    }

    setContrasena(sala) {

        this.sala = sala;
    }

    getContrasena() {

        return this.sala;

    }

    setContrasena(pelicula) {

        this.pelicula = pelicula;
    }

    getContrasena() {

        return this.pelicula;

    }
}

class Usuario {
    constructor (identificacion, contrasena, rol, fechaCreacion, fechaModificacion) {
        this.identificacion = identificacion;
        this.contrasena = contrasena;
        this.rol = rol;
        this.fechaCreacion = fechaCreacion;
        this.fechaModificacion = fechaModificacion;
    }

    etContrasena(identificacion) {

        this.identificacion = identificacion;
    }

    getContrasena() {

        return this.identificacion;

    }

    etContrasena(contrasena) {

        this.contrasena = contrasena;
    }

    getContrasena() {

        return this.contrasena;

    }

    etContrasena(rol) {

        this.rol = rol;
    }

    getContrasena() {

        return this.rol;

    }

    etContrasena(fechaCreacion) {

        this.fechaCreacion = fechaCreacion;
    }

    getContrasena() {

        return this.fechaCreacion;

    }

    etContrasena(fechaModificacion) {

        this.fechaModificacion = fechaModificacion;
    }

    getContrasena() {

        return this.fechaModificacion;

    }

}

class Pelicula {
    constructor (codigoAsignado, nombreOriginal, nombreAsignado, genero, listaGenero, direccion, idiomaOriginal, productora, numeroCopias, numeroAfiches, actoresPrincipales, subtitulosDisponibles, actoresSecundarios, idiomasDisponibles) {
        this.codigoAsignado = codigoAsignado;
        this.nombreOriginal = nombreOriginal;
        this.nombreAsignado = nombreAsignado;
        this.genero = genero;
        this.listaGenero = listaGenero;
        this.direccion = direccion;
        this.idiomaOriginal = idiomaOriginal;
        this.productora = productora;
        this.numeroCopias = numeroCopias;
        this.numeroAfiches = numeroAfiches;
        this.actoresPrincipales = actoresPrincipales;
        this.subtitulosDisponibles = subtitulosDisponibles;
        this.actoresSecundarios = actoresSecundarios;
        this.idiomasDisponibles = idiomasDisponibles;
    }

    setContrasena(codigoAsignado) {

        this.codigoAsignado = codigoAsignado;
    }
    
    getContrasena() {
    
        return this.codigoAsignado;
    
    }

    setContrasena(nombreOriginal) {

        this.nombreOriginal = nombreOriginal;
    }
    
    getContrasena() {
    
        return this.nombreOriginal;
    
    }

    setContrasena(nombreAsignado) {

        this.nombreAsignado = nombreAsignado;
    }
    
    getContrasena() {
    
        return this.nombreAsignado;
    
    }

    setContrasena(genero) {

        this.genero = genero;
    }
    
    getContrasena() {
    
        return this.genero;
    
    }

    setContrasena(listaGenero) {

        this.listaGenero = listaGenero;
    }
    
    getContrasena() {
    
        return this.listaGenero;
    
    }

    setContrasena(direccion) {

        this.direccion = direccion;
    }
    
    getContrasena() {
    
        return this.direccion;
    
    }

    setContrasena(idiomaOriginal) {

        this.idiomaOriginal = idiomaOriginal;
    }
    
    getContrasena() {
    
        return this.idiomaOriginal;
    
    }

    setContrasena(productora) {

        this.productora = productora;
    }
    
    getContrasena() {
    
        return this.productora;
    
    }

    setContrasena(numeroCopias) {

        this.numeroCopias = numeroCopias;
    }
    
    getContrasena() {
    
        return this.numeroCopias;
    
    }

    setContrasena(numeroAfiches) {

        this.numeroAfiches = numeroAfiches;
    }
    
    getContrasena() {
    
        return this.numeroAfiches;
    
    }

    setContrasena(actoresPrincipales) {

        this.actoresPrincipales = actoresPrincipales;
    }
    
    getContrasena() {
    
        return this.actoresPrincipales;
    
    }

    setContrasena(subtitulosDisponibles) {

        this.subtitulosDisponibles = subtitulosDisponibles;
    }
    
    getContrasena() {
    
        return this.subtitulosDisponibles;
    
    }

    setContrasena(actoresSecundarios) {

        this.actoresSecundarios = actoresSecundarios;
    }
    
    getContrasena() {
    
        return this.actoresSecundarios;
    
    }

    setContrasena(idiomasDisponibles) {

        this.idiomasDisponibles = idiomasDisponibles;
    }
    
    getContrasena() {
    
        return this.idiomasDisponibles;
    
    }


}

