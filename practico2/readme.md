# Juego Piedra, Papel o Tijera!!!!

_Se crea el famoso juego Piedra Papel o Tijera!!._

## Comenzando 🚀

_En el VSCode es necesario 

Se crea la carpeta practico2 y en esta se crean los archivos de index.html, style.css, piedraPapelTijera.js y readme.md, el proyecto se desarrolla básicamente en estas plantillas.

### Pre-requisitos 📋

_Para poder manejarnos de manera mas fluida agregamos algunas extensiones en Visual Studio Code:_

```
- “Live Server”,
- ”Auto Close Tag”, 
- “Auto Rename Tag”,
- “Babel JavaScript”, 
- “HTML Boilerplate”, 
- “HTML CSS Support”, 
- “HTML Preview”, 
- “JavaScript (ES6) code snippets”.
```

### Desarrollo 🔧

Se realiza el desarrollo de códigos en cada una de las plantillas, debemos relacionar y linkear unas con otras plantilla a travez de los siguientes links:

Html con Css:

```
<link rel="stylesheet" href="style.css">
```

Html con Javascript:

```
<script src="piedraPapelTijera.js"></script>
```

## Como operar el Juego Piedra Papel o Tijera📦

Una vez que tengamos el proyecto en código completado procedemos a realizar el Juego:

- En el cuadro se procede a colocar tu nombre y luego se presiona el botón de "Saludar", después se visualiza el mensaje de bienvenida con tu nombre.
- Se leen las instrucciones.
- Tienes 3 botones para escoger: Piedra, Papel o Tijera, se presiona uno de ellos para empezar turno.
- Se deben ganar 3 partidas para ser el ganador del juego, las jugadas máximas entre jugador y computadora son 5 ya que lo máximo que se verá son 3 y 2 partidas ganadas entre ambos.
- Debajo de los botones se van a visualizar tanto tu jugada escogida como la jugada de la computadora.
- Se va a ver el mensaje de quien ganó la jugada o si resultó empate.
- Automaticamente vas a ver en el marcador la cantidad de puntos entre el Jugador y la Computadora.
- Una vez al llegar a 3 partidas ganadas por parte del jugador o la computadora se declara al ganador con un mensaje y se desabilita los mensajes de puntos obtenidos.
- Por último se activa el botón de "Reiniciar" para poder limpiar y empezar el juego otra vez.

## Resumen de desarrollo e incidencias 🛠️

* Html5: se hace básico que contengan todas las etiquetas necesarias, Head, Main, Body. Se había colocado el link de script fuera del body y no corría bien el juego y luego se corrigío y se incluyó dentro ahora funcionando bien. Todos los demás elementos se fueron revisando uno por uno para dar el formato a la página. Se necesitó ayuda en google para poder implementar el ingreso del nombre de la persona que va a jugar. 

* CSS: se revisa la página uno por uno de los elementos y se le configura el estilo detalladamente.

* Javascript: Se procede a elaborar la mayoría de las variables con Let para ya tenerlas configuradas para su uso mas adelante. Se utilza el getElemenByID revisando en Html que esten bien los string que se toman mediando el código "ID". Además se colocan las formulas necesarias y los condicionales con If else para obtener los resultados necesarios. Todos estos explicados en la plantilla de Javascript.

## Ejecutando las pruebas ⚙️

_Una vez desarrollados los códigos en cada una de las plantillas se detallan algunas pruebas realizadas:_

* Nombre: se coloca el nombre de la persona y al presionar el botón aparece el mensaje de bienvenida "!Hola + El nombre de la persona + Bienvenida".
No se colocó nombre y se dejó el campo vacío y aparece una ventana diciendo "Por favor, ingrese su nombre" y presionar Aceptar.

* Instrucciones: es un mensaje en H1 estatico que se coloca el color.

* Marcador: se hacen pruebas para ir visualizando el marcador y tiene respuestas exitosas ya que ganador alcanza hasta 3 puntos y se detiene el juego.

* Elige tu figura: Se realizan varias pruebas presionando las figuras siendo el jugador, se reseña sobre una de las pruebas: 

- Jugador: Usaste=> Piedra, Pc usó: Tijera.  Mensaje: Ganaste un punto
- Jugador: Usaste=> Tijera, Pc usó: Tijera.  Mensaje: Empate
- Jugador: Usaste=> Piedra, Pc usó: Piedra.  Mensaje: Empate
- Jugador: Usaste=> Papel,  Pc usó: Piedra.  Mensaje: Ganaste un punto
- Jugador: Usaste=> Papel,  Pc usó: Tijera.  Mensaje: Computadora ganó un punto
- Jugador: Usaste=> Piedra, Pc usó: Tijera.  Mensaje: Ganaste el Juego

* Al ganar el juego se desabilitan el click de los botones de piedra papel o tijera, se ponen invisibles los puntos y se activa el botón de reiniciar, visualizandose el mensaje de Ganaste el Juego o La computadora ganó el Juego. 
* Una vez terminado se presiona el botón de reiniciar y resetean los valores a 0.

## Construido con 🛠️

_Estos son varias páginas web que ayudaron como referencias a construir el proyecto:_

* [TutorialMarkdown] https://tutorialmarkdown.com/emojis - Emojis para Markdown.
* [dofactory] https://www.dofactory.com/css/ - Turoriales, ejemplos y codigos Css.
* [W3School] https://www.w3schools.com/html/ - tutorial y herramientas Html.

## Github 📖

El trabajo se puede visualizar en el repositorio gtalaricoc.github.io/sobre-mi/practico2

## Herramientas de Trabajo 📄

_Se realiza este proyecto con las siguientes herramientas_

* Visual Studio Code
* Github
* Gitbash
* Explorador Chrome
* Plataforma Windows 11

## Expresiones de Gratitud 🎁

* Gracias a la oportunidad que me dan de realizar este curso en ArgentinaPrograma y a la UNC
* La realización del curso es gracias a el profesor Ignacio Moretti: imoretti@unc.edu.ar. y tutor Nehuen Aramburu: nehuen.aramburu@mi.unc.edu.ar que nos dan el apoyo necesario para aprender.

---
⌨️ por [gtalaricoc](https://github.com/gtalaricoc) 
