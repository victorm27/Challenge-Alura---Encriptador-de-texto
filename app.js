// Funciones de encriptación y desencriptación
function encriptar(texto) {
    return texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function desencriptar(texto) {
    return texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

function validarTexto(texto) {
    return /^[a-z\s]*$/.test(texto);
}

// Elementos del DOM
const textareaInput = document.getElementById('inputText');
const btnEncriptar = document.getElementById('encryptBtn');
const btnDesencriptar = document.getElementById('decryptBtn');
const btnLimpiar = document.getElementById('clearBtn');
const resultadoArea = document.getElementById('resultArea');
const btnCopiar = document.getElementById('copyBtn');

// Función para mostrar el resultado
function mostrarResultado(texto) {
    resultadoArea.innerHTML = `<p>${texto}</p>`;
    btnCopiar.style.display = 'block';
}

// Event listeners
btnEncriptar.addEventListener('click', () => {
    btnCopiar.textContent = 'Copiar';
    const texto = textareaInput.value;
    if (validarTexto(texto)) {
        mostrarResultado(encriptar(texto));
        btnLimpiar.style.display = 'inline-block';
    } else {
        alert("Por favor, ingrese solo letras minúsculas sin acentos.");
    }
});

btnDesencriptar.addEventListener('click', () => {
    btnCopiar.textContent = 'Copiar';
    const texto = textareaInput.value;
    if (validarTexto(texto)) {
        mostrarResultado(desencriptar(texto));
        btnLimpiar.style.display = 'inline-block';
    } else {
        alert("Por favor, ingrese solo letras minúsculas sin acentos.");
    }
});

btnLimpiar.addEventListener('click', () => {
    textareaInput.value = '';
    resultadoArea.innerHTML = `
        <img src="/imagenes/Muñeco.png" alt="Muñeco" class="muneco-img">
        <h2>Ningún mensaje fue encontrado</h2>
        <p>Ingresa el texto que desees encriptar o desencriptar.</p>
    `;
    btnCopiar.style.display = 'none';
    btnLimpiar.style.display = 'none';
});

btnCopiar.addEventListener('click', () => {
    const textoResultado = resultadoArea.querySelector('p').textContent;
    navigator.clipboard.writeText(textoResultado)
        .then(() => {
            btnCopiar.textContent = 'Texto Copiado';
        })
        .catch(err => console.error('Error al copiar: ', err));
});