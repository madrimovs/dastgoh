/* app.js — katalog (bosh sahifa) mantiqi */
(function () {
  "use strict";
  var esc = UI.esc;

  var state = { q: "", lab: "all", status: "all" };

  var els = {
    stats: document.getElementById("stats"),
    labFilters: document.getElementById("labFilters"),
    statusFilters: document.getElementById("statusFilters"),
    search: document.getElementById("search"),
    catalog: document.getElementById("catalog"),
    introMeta: document.getElementById("introMeta"),
    footMeta: document.getElementById("footMeta")
  };

  function renderStats() {
    var c = Store.counts();
    els.stats.innerHTML =
      stat(c.total, "Jami dastgohlar", "") +
      stat(c.working, "Ishchi holatida", "ok") +
      stat(c.repair, "Ta'mirtalab", "repair");
  }
  function stat(num, lbl, cls) {
    return '<div class="stat ' + cls + '"><div class="num">' + num + '</div><div class="lbl">' + esc(lbl) + '</div></div>';
  }

  function renderLabFilters() {
    var order = Store.labOrder();
    var labs = Store.labs();
    var html = '<button class="filter active" data-lab="all">Barchasi</button>';
    order.forEach(function (key) {
      var lbl = (labs[key] && labs[key].short) ? labs[key].short : Store.labName(key);
      html += '<button class="filter" data-lab="' + esc(key) + '">' + esc(lbl) + '</button>';
    });
    els.labFilters.innerHTML = html;
  }

  function machineMatches(m) {
    if (state.lab !== "all" && m.lab !== state.lab) return false;
    if (state.status !== "all" && m.status !== state.status) return false;
    if (state.q) {
      var hay = (m.name + " " + (m.model || "") + " " + (m.func || "")).toLowerCase();
      if (hay.indexOf(state.q) === -1) return false;
    }
    return true;
  }

  function card(m) {
    var img = m.img
      ? '<img src="' + esc(m.img) + '" alt="' + esc(m.name) + '" loading="lazy" />'
      : '<div style="color:var(--muted);font-size:12px;">Rasm yo\'q</div>';
    var qty = m.qty && m.qty > 1 ? ' <span class="qty">' + m.qty + '×</span>' : "";
    return '' +
      '<a class="card" href="machine.html?id=' + esc(m.id) + '">' +
        '<div class="thumb">' + img + '</div>' +
        '<div class="body">' +
          '<div class="row"><span class="id-tag">#' + esc(m.id) + '</span>' +
            UI.statusBadge(m.status) + '</div>' +
          '<div class="title">' + esc(m.name) + qty + '</div>' +
          (m.model ? '<div class="model">' + esc(m.model) + '</div>' : '') +
        '</div>' +
      '</a>';
  }

  function render() {
    var machines = Store.machines().filter(machineMatches);
    var order = Store.labOrder();
    var html = "";
    var shown = 0;

    order.forEach(function (key) {
      if (state.lab !== "all" && key !== state.lab) return;
      var list = machines.filter(function (m) { return m.lab === key; });
      if (!list.length) return;
      shown += list.length;
      html += '<section class="lab-section">' +
        '<div class="lab-head"><h2>' + esc(Store.labName(key)) + '</h2>' +
        '<span class="count">' + list.length + ' ta dastgoh</span></div>' +
        '<div class="grid">' + list.map(card).join("") + '</div>' +
      '</section>';
    });

    if (!shown) {
      html = '<div class="empty">Hech qanday dastgoh topilmadi.<br>Qidiruv yoki filtrlarni o\'zgartiring.</div>';
    }
    els.catalog.innerHTML = html;
  }

  function bindFilters(container, key, onPick) {
    container.addEventListener("click", function (e) {
      var btn = e.target.closest(".filter");
      if (!btn) return;
      container.querySelectorAll(".filter").forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      onPick(btn.getAttribute("data-" + key));
    });
  }

  function init() {
    var meta = Store.meta();
    if (meta) {
      els.introMeta.textContent = meta.org + " — " + meta.dept;
      els.footMeta.innerHTML = esc(meta.org) + " · " + esc(meta.date) + " holatiga ko'ra";
    }
    renderStats();
    renderLabFilters();

    bindFilters(els.labFilters, "lab", function (v) { state.lab = v; render(); });
    bindFilters(els.statusFilters, "status", function (v) { state.status = v; render(); });

    var t;
    els.search.addEventListener("input", function () {
      clearTimeout(t);
      t = setTimeout(function () {
        state.q = els.search.value.trim().toLowerCase();
        render();
      }, 120);
    });

    render();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
