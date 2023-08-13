document.getElementById("calculate").addEventListener("click", function () {

// permitir que la calculadora realice operaciones con decimales con Float
    let valor1 = parseFloat(document.getElementById("valor1").value);
    let valor2 = parseFloat(document.getElementById("valor2").value);
    let operator = document.getElementById("operator").value;
    let result = 0;

// validación de datos numericos, sino aparece la alerta de error siguiente

    if (isNaN(valor1) || isNaN(valor2)) {
        alert("Error: Ingresar valores numéricos válidos en ambos campos.");
        result;
}   
// función de switch case para realizar las operaciones de la calculadora
    switch (operator) {
        case "Sumar":
            result = valor1 + valor2;
            break;
        case "Restar":
            result = valor1 - valor2;
            break;
        case "Multiplicar":
            result = valor1 * valor2;
            break;
        case "Dividir":
            result = valor1 / valor2;
            if (valor2 === 0) {
                window.alert("No es valida la operación, No se puede dividir por cero");
                return;
            }
            break;
        default:
            alert("Operador no válido");
            result;
    }

// Limitar los resultados
    if (result > 9999999999999999 || result < -999999999999999) {
        alert("El resultado es demasiado largo para mostrarse en pantalla")
        result = 0
    }
    document.getElementById("result").textContent = "Resultado = " + result;
});

   