"use strict"
var forma = document.getElementById("forma"),
    campos = ["nombre", "edad", "email", "contraseña", "navegador", "usuario", "url", "telefono", "mensaje"],
    salidas = ["salidaNombre", "SalidaEdad", "salidaEmail", "salidaContraseña", "salidaNavegador", "salidaUsuario", "salidaUrl",
        "salidaTelefono", "salidaMensaje"];

forma.addEventListener("submit", procesa, false);
function procesa() {
    for (var i = 0, longitud = campos.length; i < longitud; i++) {
        var campo = forma[campos[i]];
        var salida = document.getElementById(salidas[i]);
        salida.value = campo.value;
    }
}