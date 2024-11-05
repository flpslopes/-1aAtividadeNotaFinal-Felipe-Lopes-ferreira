function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultadoElement = document.getElementById('resultado');

    if (peso && altura) {
        const imc = (peso / (altura * altura)).toFixed(2);
        resultadoElement.textContent = `IMC: ${imc}`;
    } else {
        resultadoElement.textContent = "Insira valores válidos.";
    }
}
