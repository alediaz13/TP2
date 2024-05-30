document.getElementById('CalcularBoton').addEventListener('click', function() {
    const estatura = parseFloat(document.getElementById('estatura').value);
    const peso = parseFloat(document.getElementById('peso').value);

    if(isNaN(estatura) || isNaN(peso)) {
        alert('Ingresa valores validos para estrcutura y el peso')
        return;
    }

    const imc = peso / (estatura * estatura);

    alert('Tu IMC es: ' + imc.toFixed(2));
});