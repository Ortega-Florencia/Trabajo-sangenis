let numeros = [];

function agregarNumero() {
    const numeroInput = document.getElementById('numeroInput');
    const numero = parseFloat(numeroInput.value);

    if (!isNaN(numero)) {
        numeros.push(numero);

        const numerosLista = document.getElementById('numerosLista');
        const listItem = document.createElement('li');
        listItem.textContent = numero;
        numerosLista.appendChild(listItem);

        mostrarNumerosEnTabla();
    }

    numeroInput.value = '';
}

function mostrarNumerosEnTabla() {
    const numerosTabla = document.getElementById('numerosTabla');
    numerosTabla.innerHTML = '';

    numeros.forEach((numero, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `<th scope="row">${index + 1}</th><td>${numero}</td>`;
        numerosTabla.appendChild(row);
    });
}

function procesarNumeros() {
    if (numeros.length > 0) {
        const sumaTotal = numeros.reduce((total, numero) => total + numero, 0);
        const promedio = sumaTotal / numeros.length;
        const maximo = Math.max(...numeros);
        const minimo = Math.min(...numeros);

        document.getElementById('sumaTotal').textContent = sumaTotal;
        document.getElementById('promedio').textContent = promedio.toFixed(2);
        document.getElementById('maximo').textContent = maximo;
        document.getElementById('minimo').textContent = minimo;
    }
}