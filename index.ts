interface Vehiculo {
    acelerar(): void;
    getVelocidadActual(): number;
}
class Auto implements Vehiculo {
    private velocidadActual: number;
    private litrosNafta: number;
    
    constructor() {
        this.velocidadActual = 0;
        this.litrosNafta = 0;
    }
    acelerar(): void {
        this.velocidadActual += 50;
    }
    getVelocidadActual(): number {
        return this.velocidadActual;
    }
    cargarNafta(): void {
        this.litrosNafta += 10;
    }
}
class Moto implements Vehiculo {
    private velocidadActual: number;
    private cilindrada: number;
   
    constructor(pCilindrada: number) {
        this.velocidadActual = 0;
        this.cilindrada = pCilindrada;
    }
    acelerar(): void {
        this.velocidadActual += 10;
    }
    
    getVelocidadActual(): number {
        return this.velocidadActual;
    }
    esCiclomotor(): boolean {
        if (this.cilindrada > 50) {
            return false;
        } else {
            return true;
        }
    }
}
//Agregar una clase implementada al Vehiculo::::

//Agregué:
//El tipo, es un atributo de tipo "SUV" o "Pick-Up".
//Método getTipo() para saber el tipo de camioneta.
//Métodos esSUV() y esPickUp() para verificar su tipo.

class Camioneta implements Vehiculo {
    private velocidadActual: number;
    private litrosNafta: number;
    private tipo: "SUV" | "Pick-Up";

    constructor(tipo: "SUV" | "Pick-Up") {
        this.velocidadActual = 0;
        this.litrosNafta = 0;
        this.tipo = tipo;
    }

    acelerar(): void {
        this.velocidadActual += 80;
    }

    getVelocidadActual(): number {
        return this.velocidadActual;
    }

    cargarNafta(): void {
        this.litrosNafta += 20;
        console.log("El vehiculo tiene: " + this.litrosNafta + " litros de nafta.");
        
    }

    getTipo(): string {
        return this.tipo;
    }

    esSUV(): boolean {
        return this.tipo === "SUV";
    }

    esPickUp(): boolean {
        return this.tipo === "Pick-Up";
    }
}

let Camio = new Camioneta("Pick-Up");


//Pruebas:::

console.log(Camio.esPickUp());
console.log(Camio.esSUV());
console.log(Camio.getTipo());
console.log(Camio.getVelocidadActual());
Camio.acelerar();
console.log(Camio.getVelocidadActual());
Camio.acelerar();
console.log(Camio.getVelocidadActual());
Camio.cargarNafta();
Camio.cargarNafta();
Camio.cargarNafta();
console.log(Camio);