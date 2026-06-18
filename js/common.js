/* common.js — barcha sahifalar uchun yordamchi funksiyalar */
(function (global) {
  "use strict";

  function esc(s) {
    if (s === undefined || s === null) return "";
    return String(s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  function statusText(status) {
    return status === "tamir" ? "Ta'mirtalab" : "Ishchi holatida";
  }

  function statusBadge(status) {
    if (status === "tamir") {
      return '<span class="badge badge-repair"><span class="dot"></span>Ta\'mirtalab</span>';
    }
    return '<span class="badge badge-ok"><span class="dot"></span>Ishchi holatida</span>';
  }

  // Dastgoh batafsil sahifasiga absolyut URL (QR kod uchun)
  function machineURL(id) {
    return new URL("machine.html?id=" + encodeURIComponent(id), global.location.href).href;
  }

  function qfile(name) { return name; }

  global.UI = {
    esc: esc,
    statusText: statusText,
    statusBadge: statusBadge,
    machineURL: machineURL,
    qfile: qfile
  };
})(window);
