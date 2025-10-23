function convertirTemperatura() {
let celsiusInput = document.getElementById("celsius").value;
let celsius = parseFloat(celsiusInput);

  // Validar si la entrada es un número
if (isNaN(celsius)) {
    alert("Por favor ingresa un número válido para la temperatura.");
    document.getElementById("resultado").innerText = "";
    return; 
}

  // formula
let kelvin = celsius + 273.15;
let fahrenheit = (celsius * 9 / 5) + 32;

  // Mostrar en el DOM
document.getElementById("resultado").innerHTML = `
    Grados Kelvin: ${kelvin.toFixed(2)}K <br>
    Grados Fahrenheit: ${fahrenheit.toFixed(2)}°F <br>
`;

}
