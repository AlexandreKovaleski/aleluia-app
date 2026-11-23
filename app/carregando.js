// Tira a tela de carregamento do web/index.html quando o app desenha o
// primeiro quadro (o Flutter avisa com o evento "flutter-first-frame").
window.addEventListener('flutter-first-frame', function () {
  var el = document.getElementById('carregando');
  if (el) el.remove();
});
