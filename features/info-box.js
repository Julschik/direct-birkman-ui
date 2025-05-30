(function () {
  'use strict';

  window.addEventListener('load', () => {
    const box = document.createElement("div");
    box.className = "birkman-info-box";
    box.textContent = "📢 Hinweis: Diese Seite wurde durch Birkman UI angepasst.";

    document.body.prepend(box);
  });
})();
