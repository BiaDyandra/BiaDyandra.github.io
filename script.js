const button = document.getElementById('toggleTheme');
button.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const darkMode = document.body.classList.contains('dark');
  button.textContent = darkMode ? '☀️ Modo Claro' : '🌙 Modo Escuro';
} );

