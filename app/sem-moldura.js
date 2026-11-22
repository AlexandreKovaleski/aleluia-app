// O app não abre dentro de outra página (um site poderia esconder botões
// do app sob os seus e enganar o toque): sai da moldura ou fica em branco.
if (window.top !== window.self) {
  document.documentElement.style.display = 'none';
  try { window.top.location.replace(window.self.location.href); } catch (e) { /* bloqueado: segue em branco */ }
}
