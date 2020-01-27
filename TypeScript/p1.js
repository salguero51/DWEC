"use strict";
let y = 5;
;
let x = "32";
y = +x;
let IsBoolean = true;
let entero = 500;
let real = 20.05;
let texto = "Manuel";
let arraynumeros = [1, 20, 30];
let arrayletras = ["hola", "mundo"];
let tupla;
tupla = [1, "Carlos", true, [10, 20]];
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Blue"] = 1] = "Blue";
    color[color["Green"] = 2] = "Green";
    color[color["Black"] = 3] = "Black";
    color[color["White"] = 4] = "White";
})(color || (color = {}));
//
class Animal {
    constructor(nombre, edad, colorPiel) {
        this.nombre = nombre;
        this.edad = edad;
        this.colorPiel = colorPiel;
    }
    saludo() {
        return `Hola, ${this.nombre}`;
    }
}
let miGato = new Animal('Lolo', 12, color.Black);
class Perro extends Animal {
    saludo() {
        return `Guau guau ${this.nombre}`;
    }
}
function EscribeMensaje(mensaje) {
    console.log(mensaje.titulo);
}
let miMensaje = { titulo: "titulo", mensaje: "mi mensaje", error: 1 };
