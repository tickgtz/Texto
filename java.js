function alterarTexto(delta) {
    let texto = document.getElementById("texto");
    let tamanhoAtual = parseFloat(window.getComputedStyle(texto).fontSize);

    // Define um limite mínimo de 10px para evitar que o texto fique ilegível
    if (tamanhoAtual + delta >= 10) {
        texto.style.fontSize = (tamanhoAtual + delta) + "px";
    }
}
