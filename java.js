// Seleção dos botões de acessibilidade
const increaseFontBtn = document.getElementById('increaseFontBtn');
const toggleContrastBtn = document.getElementById('toggleContrastBtn');

// Função para aumentar o tamanho da fonte
increaseFontBtn.addEventListener('click', () => {
  document.body.classList.toggle('large-font');
});

// Função para alternar o contraste da página
toggleContrastBtn.addEventListener('click', () => {
  document.body.classList.toggle('high-contrast');
});
