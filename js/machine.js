/* machine.js — dastgoh batafsil sahifasi (QR kod shu sahifani ochadi) */
(function () {
  "use strict";
  var esc = UI.esc;

  function param(name) {
    return new URLSearchParams(location.search).get(name);
  }

  function ticks(arr) {
    if (!arr || !arr.length) return '<p style="color:var(--muted);margin:0;">Ma\'lumot kiritilmagan.</p>';
    return '<ul class="ticks">' + arr.map(function (x) {
      return "<li>" + esc(x) + "</li>";
    }).join("") + "</ul>";
  }

  function render(m) {
    var url = UI.machineURL(m.id);
    var qty = m.qty && m.qty > 1 ? '<span class="chip">' + m.qty + ' ta mavjud</span>' : "";
    var noteCls = m.status === "tamir" ? "note-box" : "note-box ok";
    var img = m.img
      ? '<img src="' + esc(m.img) + '" alt="' + esc(m.name) + '" />'
      : '<div style="aspect-ratio:4/3;display:grid;place-items:center;color:var(--muted);">Rasm yo\'q</div>';

    document.title = m.name + " — INNO Texnopark";

    var html =
      '<article class="detail">' +
        '<div class="media">' + img + '</div>' +
        '<div>' +
          '<div class="meta-row">' + UI.statusBadge(m.status) +
            '<span class="chip">' + esc(Store.labName(m.lab)) + '</span>' + qty +
            '<span class="chip">#' + esc(m.id) + '</span>' +
          '</div>' +
          '<h1>' + esc(m.name) + '</h1>' +
          (m.model ? '<div class="model" style="color:var(--muted);font-weight:600;margin-bottom:8px;">Model: ' + esc(m.model) + '</div>' : '') +
          '<p class="desc">' + esc(m.desc || m.func || "") + '</p>' +

          '<div class="block">' +
            '<h3>Asosiy ma\'lumotlar</h3>' +
            '<dl class="kv">' +
              '<dt>Nomi</dt><dd>' + esc(m.name) + '</dd>' +
              (m.model ? '<dt>Modeli</dt><dd>' + esc(m.model) + '</dd>' : '') +
              '<dt>Laboratoriya</dt><dd>' + esc(Store.labName(m.lab)) + '</dd>' +
              '<dt>Vazifasi</dt><dd>' + esc(m.func || "—") + '</dd>' +
              (m.qty && m.qty > 1 ? '<dt>Soni</dt><dd>' + esc(m.qty) + ' ta</dd>' : '') +
              '<dt>Holati</dt><dd>' + UI.statusText(m.status) + '</dd>' +
            '</dl>' +
          '</div>' +

          (m.note ? '<div class="' + noteCls + '"><b>Izoh:</b> ' + esc(m.note) + '</div>' : '') +

          '<div class="block"><h3>Imkoniyatlari</h3>' + ticks(m.caps) + '</div>' +
          '<div class="block"><h3>Bajarish mumkin bo\'lgan ishlar</h3>' + ticks(m.works) + '</div>' +

          '<div class="block no-print">' +
            '<h3>QR kod</h3>' +
            '<div class="qr-card">' +
              '<div class="qr-box" id="qrBox"></div>' +
              '<div class="qr-cap">' + esc(m.name) + '<small>' + esc(m.model || "") + '</small></div>' +
              '<div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-top:12px;">' +
                '<button class="btn btn-primary btn-sm" id="dlQr">PNG yuklab olish</button>' +
                '<button class="btn btn-ghost btn-sm" id="prQr">Chop etish</button>' +
              '</div>' +
              '<div style="font-size:12px;color:var(--muted);margin-top:8px;word-break:break-all;">' + esc(url) + '</div>' +
            '</div>' +
          '</div>' +

        '</div>' +
      '</article>';

    document.getElementById("detail").innerHTML = html;

    // QR kodni chizish
    var box = document.getElementById("qrBox");
    var qr = new QRCode(box, {
      text: url, width: 188, height: 188,
      colorDark: "#0b2a5b", colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.M
    });

    document.getElementById("dlQr").addEventListener("click", function () {
      downloadQR(box, (m.model ? m.model + " - " : "") + m.name);
    });
    document.getElementById("prQr").addEventListener("click", function () {
      window.print();
    });
  }

  function downloadQR(box, label) {
    var canvas = box.querySelector("canvas");
    var dataUrl;
    if (canvas) {
      dataUrl = canvas.toDataURL("image/png");
    } else {
      var img = box.querySelector("img");
      if (!img) return;
      dataUrl = img.src;
    }
    var a = document.createElement("a");
    a.href = dataUrl;
    a.download = "QR_" + slug(label) + ".png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  function slug(s) {
    return String(s).replace(/[^\w\-]+/g, "_").replace(/_+/g, "_").replace(/^_|_$/g, "").slice(0, 60) || "dastgoh";
  }

  function init() {
    var foot = document.getElementById("footMeta");
    var meta = Store.meta();
    if (foot && meta) foot.innerHTML = esc(meta.org) + " · " + esc(meta.date) + " holatiga ko'ra";

    var id = param("id");
    var m = id ? Store.get(id) : null;
    if (!m) {
      document.getElementById("detail").innerHTML =
        '<div class="empty">Dastgoh topilmadi.<br><a class="btn btn-ghost btn-sm" style="margin-top:12px;" href="index.html">Katalogga qaytish</a></div>';
      return;
    }
    render(m);
  }

  document.addEventListener("DOMContentLoaded", init);
})();
