(function () {
  'use strict';

  // Pfad zu diesem Script ermitteln (also: birkman-ui.js)
  const currentScript = document.currentScript?.src || '';
  const BASE_URL = currentScript.replace(/\/birkman-ui\.js.*$/, '');

  console.log("📥 birkman-ui.js geladen von:", BASE_URL);

  const PATHS = {
    features: `${BASE_URL}/features/`,
    styles: `${BASE_URL}/styles/`
  };

  const loadCSS = (filename) => {
    const url = `${PATHS.styles}${filename}`;
    console.log("🎨 Lade Feature CSS:", url);
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = url;
    document.head.appendChild(link);
  };

  const loadJS = (filename) => {
    const url = `${PATHS.features}${filename}`;
    console.log("🧠 Lade Feature JS:", url);
    const script = document.createElement("script");
    script.src = url;
    script.onerror = () => console.error("❌ Fehler beim Laden:", url);
    document.head.appendChild(script);
  };

  const features = [
    { js: 'info-box.js', css: 'info-box.css' }
  ];

  features.forEach(f => {
    loadCSS(f.css);
    loadJS(f.js);
  });

  console.log("✅ Features geladen:", features.map(f => f.js).join(', '));
})();
