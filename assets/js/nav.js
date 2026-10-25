(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();

(function () {
  var pills = document.querySelectorAll('[data-filter]');
  var items = document.querySelectorAll('[data-tag]');
  if (!pills.length || !items.length) return;
  pills.forEach(function (pill) {
    pill.addEventListener('click', function () {
      var f = pill.getAttribute('data-filter');
      pills.forEach(function (p) { p.classList.toggle('active', p === pill); });
      items.forEach(function (item) {
        var tags = (item.getAttribute('data-tag') || '').split(/\s+/);
        item.style.display = (f === 'all' || tags.indexOf(f) !== -1) ? '' : 'none';
      });
    });
  });
})();
