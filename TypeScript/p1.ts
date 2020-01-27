let y:number = 5;;
let x:string = "32";
y = +x

let IsBoolean :Boolean = true;

let entero: Number = 500;
let real : Number = 20.05;

let texto : String = "Manuel";

let arraynumeros: number[] = [1,20,30];

let arrayletras :Array<string> = ["hola", "mundo"];

let tupla : [number, string, boolean, number[]];

tupla = [1, "Carlos", true, [10,20]]

enum color { Red, Blue, Green, Black, White }

//

class Animal {
    readonly nombre: string;
    private edad:number;
    public colorPiel: color;
    constructor(nombre: string,edad:number,colorPiel:color){
        this.nombre = nombre;
        this.edad = edad;
        this.colorPiel = colorPiel;
    }
    saludo() : string {
        return `Hola, ${this.nombre}`
    }
}

let miGato = new Animal('Lolo', 12, color.Black);

class Perro extends Animal {
    saludo(): string {
        return `Guau guau ${this.nombre}`;
    }
}

interface Mensaje {
    titulo: string;
    mensaje: string;
    error? : number;
}

function EscribeMensaje(mensaje: Mensaje) {
    console.log(mensaje.titulo);
}

let miMensaje : Mensaje = {titulo: "titulo", mensaje: "mi mensaje", error: 1}

