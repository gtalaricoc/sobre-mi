function mostrarMensaje() {
  // Ingresar Nombre en el campo de texto
  let nombre = document.getElementById("nombreInput").value;

  // Verificar si se ingresó un nombre
  if (nombre) {
      // Se crea el mensaje de bienvenida
      let mensaje = "¡Hola, " + nombre + " ! Bienvenido. ¡";

      // Mostrar el mensaje en la página 
      document.getElementById("mensajeBienvenida").textContent = mensaje;
  } else {
      // Mensaje de error si no se muestra nombre
      alert("Por favor, ingrese su nombre.");
  }
}

// Variables con los puntos iniciales de 0
let puntosJugador = 0
let puntosPc = 0

// Variable para reflejar los puntos del Jugador y los puntos de la Computadora
let contenedorPuntosJugador = document.getElementById("puntosjugador");
let contenedorPuntosPc = document.getElementById("puntospc");

// Variable para que se vea quien realizó puntos en el juego y quien es el ganador
let mensaje = document.getElementById("mensaje");

// Variable para adicionar los puntos al jugador o computadora
let contenedorGanaPunto = document.getElementById("punto");

// Variable para seleccionar con botón la opción de Piedra, Papel o Tijera
let elegiTuArma = document.getElementById("seleccionaOpcion");

// Variables para realizar la elección de Piedra, Papel o Tijera
let contenedorEleccionJugador = document.getElementById("eleccionJugador");
let contenedorEleccionPc = document.getElementById("eleccionPc");

/* Se crea variable botonesArmas para seleccionar elementos en plantilla Html que tienen la clase CSS "opción" y utilizar 
esa variable para incluirla en la formula de iniciarTurno*/

let botonesArmas = document.querySelectorAll(".opcion");
botonesArmas.forEach(boton => {
  boton.addEventListener("click", iniciarTurno);
});

function iniciarTurno(e) {

// Redondear el resultado aleatorio hacia abajo con floor de la elección de la PC entre 0, 1 y 2
  let eleccionPc = Math.floor(Math.random()*3);
  let eleccionUsuario = e.currentTarget.id;
  
  //Definimos los valores para la PC, piedra => 0 papel => 1 y tijera => 2 

  if (eleccionPc === 0) {
      eleccionPc = "Piedra";
  }
    else if (eleccionPc === 1) {
      eleccionPc = "Papel";
  }
    else if (eleccionPc === 2) {
      eleccionPc = "Tijera";
    }
//Se crea la lógica de quien gana y cuando se realiza el empate con el condicional if
  if (
      (eleccionUsuario === "Piedra" && eleccionPc === "Tijera") ||
      (eleccionUsuario === "Tijera" && eleccionPc === "Papel") ||
      (eleccionUsuario === "Papel" && eleccionPc === "Piedra")
  ) {
      ganaUsuario();
  } else if (
      (eleccionPc === "Piedra" && eleccionUsuario === "Tijera") ||
      (eleccionPc === "Tijera" && eleccionUsuario === "Papel") ||
      (eleccionPc === "Papel" && eleccionUsuario === "Piedra")
  ) {
      ganaPC();
  } else {
      empate();
  }

// Variables para reemplazar la elección de html del usuario y la PC que estan en "--" al valor seleccionado por el jugador y el aleatorio de la PC
  contenedorEleccionJugador.innerText = eleccionUsuario;
  contenedorEleccionPc.innerText = eleccionPc;

/* Se crean la funciones de quien gana y empata con sus respectivos mensajes que se van a reflejar 
 después de cada jugada*/
  function ganaUsuario() {
    puntosJugador++;
    contenedorPuntosJugador.innerText = puntosJugador;
    contenedorGanaPunto.innerText = "¡Ganaste un punto! ...Sigue Jugando"
  }
  
  function ganaPC() {
    puntosPc++;
    contenedorPuntosPc.innerText = puntosPc;
    contenedorGanaPunto.innerText = "¡La computadora ganó un punto! ...Sigue Jugando"
  }
  
  function empate() {
    contenedorGanaPunto.innerText = "¡Empate! ...Sigue Jugando"
  }
    
// Establecer que se gana al llegar a 3 puntos
  if (puntosJugador === 3 || puntosPc === 3) {

      botonesArmas.forEach(boton => {
      boton.removeEventListener("click", iniciarTurno);
    });
      if (puntosJugador === 3) {
          mensaje.innerText = "¡Ganaste el juego!";
      }

      if (puntosPc === 3) {
          mensaje.innerText = "¡La computadora ganó el juego!";
      }
      //Desabilita el botón de reiniciar durante el juego, una vez finalizado se activa el botón
      reiniciar.classList.remove("disabled");
      reiniciar.addEventListener("click", reiniciarJuego);
  }

}
//Se crea la función reiniciarJuego para usarla en variable anterior
function reiniciarJuego() {
  location.reload();
}

