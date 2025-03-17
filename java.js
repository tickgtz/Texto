document.getElementById("btnAumentar").addEventListener("click", aumentarTexto);
document.getElementById("btnDiminuir").addEventListener("click", diminuirTexto);

function aumentarTexto() {
    let texto = document.getElementById("texto");
    let tamanhoAtual = parseFloat(window.getComputedStyle(texto).fontSize);
    texto.style.fontSize = (tamanhoAtual + 2) + "px";
}

function diminuirTexto() {
    let texto = document.getElementById("texto");
    let tamanhoAtual = parseFloat(window.getComputedStyle(texto).fontSize);
    
    // Define um limite mínimo de 10px para evitar que o texto fique ilegível
    if (tamanhoAtual > 10) {
        texto.style.fontSize = (tamanhoAtual - 2) + "px";
    }
}
