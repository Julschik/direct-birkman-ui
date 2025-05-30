// ==UserScript==
// @name         Direct Birkman UI Loader (Core)
// @namespace    https://direct.birkman.com/
// @version      1.0
// @description  Lädt zentrale UI-Scripte und Styles für direct.birkman.com modular 🧱
// @match        https://direct.birkman.com/*
// @grant        none
// ==/UserScript==

(function () {
  const LOCAL = 'http://127.0.0.1:8080';
  const REMOTE = 'https://raw.githubusercontent.com/Julschik/direct-birkman-ui/main';
  const CORE_FILE = 'birkman-ui.js';

  const testLocal = async () => {
    const url = `${LOCAL}/${CORE_FILE}?v=${Date.now()}`;
    console.log("🌐 Teste lokalen Zugriff auf:", url);
    try {
      const res = await fetch(url, { method: 'GET', cache: 'no-store' });
      return res.ok;
    } catch {
      return false;
    }
  };

  testLocal().then((isLocalAvailable) => {
    const BASE = isLocalAvailable ? LOCAL : REMOTE;
    console.log(`🚀 Core geladen von: ${BASE}`);

    const loadCSS = (url) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = `${BASE}/styles-root.css`;
      document.head.appendChild(link);
    };

    const loadJS = (url) => {
      const script = document.createElement("script");
      script.src = `${BASE}/${CORE_FILE}`;
      document.head.appendChild(script);
    };

    loadCSS();
    loadJS();
  });
})();
