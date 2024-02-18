// piedra = 0;
// papel = 1;
// tijeras = 2;

//Declaracion de Variables
var ganaHumano = 0;
var ganaMaquina = 0;
var empate = 0;
var i = 0;
var cantidad = parseInt(prompt("Ingrese la cantidad de juegos que desea:"));

//Ciclo segun catidad de juegos seleccionados
for (i = 0; i < cantidad; i++) {
    var maquina = Math.floor(Math.random() * 3);
    var juegoHumano = prompt("Ingrese su seleccion para el juego: " + (i + 1) + " \n\n0 = Piedra \n1 = Papel \n2 = Tijeras");
    var elecciones = "RESULTADOS PARCIALES \n\nElecciones del Juego: " + (i + 1) + "\nMaquina = " + maquina + "\nHumano = " + juegoHumano;
    if (maquina == juegoHumano) {
        alert(elecciones + "\n\nEmpate!")
        empate++;
    } else {

        switch (maquina) {
            case 0:
                if (juegoHumano == 1) {
                    alert(elecciones + "\n\nGana el humano!");
                    ganaHumano++;
                } else {
                    alert(elecciones + "\n\nGana la maquina!");
                    ganaMaquina++;
                }
                break;
            case 1:
                if (juegoHumano == 2) {
                    alert(elecciones + "\n\nGana el humano!");
                    ganaHumano++;
                } else {
                    alert(elecciones + "\n\nGana la maquina!");
                    ganaMaquina++;
                }
                break;
            case 2:
                if (juegoHumano == 0) {
                    alert(elecciones + "\n\nGana el humano!");
                    ganaHumano++;
                } else {
                    alert(elecciones + "\n\nGana la maquina!");
                    ganaMaquina++;
                }
                break;
        }
    }
}

//Resumen Final
var txtFinal = "El resultado final del juego es: \nHumano: " + ganaHumano + "\nMaquina: " + ganaMaquina + "\nEmpate: " + empate;
if (ganaHumano == ganaMaquina) {
    alert(txtFinal + "\n\nEmpate! Al menos no perdiste!")
} else {
    if (ganaHumano < ganaMaquina) {
        alert(txtFinal + "\n\nGana la Maquina! Suerte en tu proxima vida!")
    } else {
        alert(txtFinal + "\n\nGanaste Humano! Felicidades!")
    }
}

