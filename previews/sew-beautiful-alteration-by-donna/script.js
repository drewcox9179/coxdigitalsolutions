// Reveal the sticky Call/Text bar only after the visitor scrolls past the hero.
(function () {
  var bar = document.getElementById('callbar');
  var hero = document.getElementById('top');
  if (!bar || !hero) return;
  var ticking = false;
  function update() {
    ticking = false;
    var past = hero.getBoundingClientRect().bottom <= 0;
    bar.classList.toggle('is-visible', past);
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
  }, { passive: true });
  update();
})();
