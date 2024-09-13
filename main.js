const form = document.getElementById('form-comparação');
const numeroB = document.getElementById('numero-b');
const numeroA = document.getElementById('numero-a');
const resultado = document.getElementById('resultado');


form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (numeroB.value > numeroA.value) {
        resultado.textContent = "Sim";
        resultado.style.backgroundColor = "#2ecc71";
    } else {
        resultado.textContent = "Não";
        resultado.style.backgroundColor = "#e74c3c";
    }
    resultado.style.display = "block";
    numeroA.value = '';
    numeroB.value = '';
})


