/* admin.js — boshqaruv paneli: kirish, CRUD, QR kod yaratish */
(function () {
  "use strict";
  var esc = UI.esc;

  // DIQQAT: bu front-end darajasidagi oddiy himoya (statik sayt uchun).
  // Haqiqiy maxfiylik kerak bo'lsa, server tomonida autentifikatsiya talab etiladi.
  var AUTH_USER = "sardor";
  var AUTH_PASS = "sardor";
  var AUTH_KEY = "dastgoh_admin";

  var el = function (id) { return document.getElementById(id); };
  var qrSingle = null; // joriy QR modal kodi konteyneri

  /* ---------------- Auth ---------------- */
  function isAuthed() {
    try { return sessionStorage.getItem(AUTH_KEY) === "1"; } catch (e) { return false; }
  }
  function setAuthed(v) {
    try { v ? sessionStorage.setItem(AUTH_KEY, "1") : sessionStorage.removeItem(AUTH_KEY); } catch (e) {}
  }

  function showView() {
    if (isAuthed()) {
      el("loginView").style.display = "none";
      el("adminView").style.display = "block";
      renderDashboard();
    } else {
      el("adminView").style.display = "none";
      el("loginView").style.display = "block";
      el("sheetView").style.display = "none";
      el("tableView").style.display = "block";
    }
  }

  function bindLogin() {
    el("loginForm").addEventListener("submit", function (e) {
      e.preventDefault();
      var u = el("login").value.trim();
      var p = el("password").value;
      var err = el("loginErr");
      if (u === AUTH_USER && p === AUTH_PASS) {
        setAuthed(true);
        err.style.display = "none";
        el("password").value = "";
        showView();
      } else {
        err.textContent = "Login yoki parol noto'g'ri.";
        err.style.display = "block";
      }
    });
  }

  /* ---------------- Dashboard ---------------- */
  function renderDashboard() {
    el("sheetView").style.display = "none";
    el("tableView").style.display = "block";

    var c = Store.counts();
    el("adminStats").innerHTML =
      '<div class="stat"><div class="num">' + c.total + '</div><div class="lbl">Jami dastgohlar</div></div>' +
      '<div class="stat ok"><div class="num">' + c.working + '</div><div class="lbl">Ishchi holatida</div></div>' +
      '<div class="stat repair"><div class="num">' + c.repair + '</div><div class="lbl">Ta\'mirtalab</div></div>';

    var notice = el("storeNotice");
    if (Store.isModified()) {
      notice.innerHTML = "Ma'lumotlar shu brauzerda mahalliy (localStorage) saqlanmoqda. O'zgarishlarni hammaga doimiy qilish uchun <b>Export</b> tugmasi orqali <code>js/data.js</code> faylini yangilab, GitHubга yuklang.";
    } else {
      notice.innerHTML = "Ma'lumotlar boshlang'ich (statik) holatda. Qo'shish/tahrirlash/o'chirish o'zgarishlari shu brauzerda saqlanadi.";
    }

    var rows = "";
    Store.labOrder().forEach(function (key) {
      var list = Store.machines().filter(function (m) { return m.lab === key; });
      if (!list.length) return;
      rows += '<tr class="lab-divider"><td colspan="5">' + esc(Store.labName(key)) + ' — ' + list.length + ' ta</td></tr>';
      list.forEach(function (m) {
        var img = m.img
          ? '<img class="t-thumb" src="' + esc(m.img) + '" alt="" />'
          : '<div class="t-thumb"></div>';
        rows += '<tr>' +
          '<td>' + esc(m.id) + '</td>' +
          '<td>' + img + '</td>' +
          '<td><div style="font-weight:700;">' + esc(m.name) + '</div>' +
            '<div style="font-size:12.5px;color:var(--muted);">' + esc(m.model || "—") + '</div></td>' +
          '<td class="hide-sm">' + UI.statusBadge(m.status) + '</td>' +
          '<td><div class="t-actions">' +
            '<button class="btn btn-ghost btn-sm" data-edit="' + esc(m.id) + '">Tahrir</button>' +
            '<button class="btn btn-ghost btn-sm" data-qr="' + esc(m.id) + '">QR</button>' +
            '<button class="btn btn-danger btn-sm" data-del="' + esc(m.id) + '">O\'chir</button>' +
          '</div></td>' +
        '</tr>';
      });
    });
    el("adminRows").innerHTML = rows;
  }

  /* ---------------- Add / Edit modal ---------------- */
  function fillLabSelect(selected) {
    var sel = el("f_lab");
    sel.innerHTML = "";
    Store.labOrder().forEach(function (key) {
      var o = document.createElement("option");
      o.value = key;
      o.textContent = Store.labName(key);
      if (key === selected) o.selected = true;
      sel.appendChild(o);
    });
  }

  function openForm(machine) {
    var editing = !!machine;
    el("formTitle").textContent = editing ? "Dastgohni tahrirlash" : "Yangi dastgoh";
    fillLabSelect(machine ? machine.lab : Store.labOrder()[0]);
    el("f_id").value = editing ? machine.id : "";
    el("f_name").value = editing ? machine.name : "";
    el("f_model").value = editing ? (machine.model || "") : "";
    el("f_qty").value = editing && machine.qty ? machine.qty : 1;
    el("f_func").value = editing ? (machine.func || "") : "";
    el("f_status").value = editing ? machine.status : "ishlaydi";
    el("f_desc").value = editing ? (machine.desc || "") : "";
    el("f_caps").value = editing && machine.caps ? machine.caps.join("\n") : "";
    el("f_works").value = editing && machine.works ? machine.works.join("\n") : "";
    el("f_note").value = editing ? (machine.note || "") : "";
    el("f_img").value = editing ? (machine.img || "") : "";
    updatePreview(editing ? machine.img : "");
    el("formModal").classList.add("open");
  }

  function closeForm() { el("formModal").classList.remove("open"); }

  function updatePreview(src) {
    var wrap = el("imgPreviewWrap");
    if (src) {
      el("imgPreview").src = src;
      wrap.style.display = "block";
    } else {
      wrap.style.display = "none";
    }
  }

  function linesToArr(v) {
    return v.split("\n").map(function (s) { return s.trim(); }).filter(Boolean);
  }

  function saveForm(e) {
    e.preventDefault();
    var idVal = el("f_id").value;
    var data = {
      lab: el("f_lab").value,
      name: el("f_name").value.trim(),
      model: el("f_model").value.trim(),
      qty: Math.max(1, parseInt(el("f_qty").value, 10) || 1),
      func: el("f_func").value.trim(),
      status: el("f_status").value,
      desc: el("f_desc").value.trim(),
      caps: linesToArr(el("f_caps").value),
      works: linesToArr(el("f_works").value),
      note: el("f_note").value.trim(),
      img: el("f_img").value.trim()
    };
    if (!data.name) { alert("Nomi majburiy."); return; }

    if (idVal) {
      Store.update(idVal, data);
    } else {
      Store.add(data);
    }
    closeForm();
    renderDashboard();
  }

  /* ---------------- QR (single) ---------------- */
  function openQR(m) {
    var box = el("qrModalBox");
    box.innerHTML = "";
    var url = UI.machineURL(m.id);
    qrSingle = new QRCode(box, {
      text: url, width: 220, height: 220,
      colorDark: "#0b2a5b", colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.M
    });
    el("qrModalCap").innerHTML = esc(m.name) + '<small>' + esc(m.model || "") + '</small>';
    el("qrModalUrl").textContent = url;
    el("qrModal").classList.add("open");

    el("qrModalDl").onclick = function () {
      downloadQR(box, (m.model ? m.model + " - " : "") + m.name);
    };
  }
  function closeQR() { el("qrModal").classList.remove("open"); }

  function downloadQR(box, label) {
    var canvas = box.querySelector("canvas");
    var dataUrl = canvas ? canvas.toDataURL("image/png") : (box.querySelector("img") || {}).src;
    if (!dataUrl) return;
    var a = document.createElement("a");
    a.href = dataUrl;
    a.download = "QR_" + slug(label) + ".png";
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
  }
  function slug(s) {
    return String(s).replace(/[^\w\-]+/g, "_").replace(/_+/g, "_").replace(/^_|_$/g, "").slice(0, 60) || "dastgoh";
  }

  /* ---------------- QR sheet (all) ---------------- */
  function openSheet() {
    el("tableView").style.display = "none";
    el("sheetView").style.display = "block";
    var wrap = el("qrSheet");
    wrap.innerHTML = "";
    Store.labOrder().forEach(function (key) {
      Store.machines().filter(function (m) { return m.lab === key; }).forEach(function (m) {
        var tile = document.createElement("div");
        tile.className = "qr-tile";
        var box = document.createElement("div");
        box.className = "qr-box";
        tile.appendChild(box);
        var cap = document.createElement("div");
        cap.innerHTML =
          '<div class="t-name">' + esc(m.name) + '</div>' +
          (m.model ? '<div class="t-model">' + esc(m.model) + '</div>' : '') +
          '<div class="t-lab">' + esc(Store.labName(m.lab)) + '</div>';
        tile.appendChild(cap);
        wrap.appendChild(tile);
        new QRCode(box, {
          text: UI.machineURL(m.id), width: 150, height: 150,
          colorDark: "#0b2a5b", colorLight: "#ffffff",
          correctLevel: QRCode.CorrectLevel.M
        });
      });
    });
    window.scrollTo(0, 0);
  }

  /* ---------------- Export / Reset ---------------- */
  function exportData() {
    var content = Store.exportJS();
    var blob = new Blob([content], { type: "application/javascript;charset=utf-8" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url; a.download = "data.js";
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function resetData() {
    if (confirm("Barcha mahalliy o'zgarishlar o'chiriladi va boshlang'ich (statik) ma'lumotlar tiklanadi. Davom etamizmi?")) {
      Store.reset();
      renderDashboard();
    }
  }

  /* ---------------- Events ---------------- */
  function bind() {
    bindLogin();

    el("addBtn").addEventListener("click", function () { openForm(null); });
    el("qrSheetBtn").addEventListener("click", openSheet);
    el("exportBtn").addEventListener("click", exportData);
    el("resetBtn").addEventListener("click", resetData);
    el("logoutBtn").addEventListener("click", function () { setAuthed(false); showView(); });
    el("printSheetBtn").addEventListener("click", function () { window.print(); });
    el("backFromSheet").addEventListener("click", renderDashboard);

    // Jadvaldagi amallar (delegatsiya)
    el("adminRows").addEventListener("click", function (e) {
      var t = e.target.closest("button");
      if (!t) return;
      var id;
      if ((id = t.getAttribute("data-edit"))) { openForm(Store.get(id)); }
      else if ((id = t.getAttribute("data-qr"))) { openQR(Store.get(id)); }
      else if ((id = t.getAttribute("data-del"))) {
        var m = Store.get(id);
        if (m && confirm('"' + m.name + '" o\'chirilsinmi?')) { Store.remove(id); renderDashboard(); }
      }
    });

    // Form modal
    el("machineForm").addEventListener("submit", saveForm);
    el("formModal").addEventListener("click", function (e) {
      if (e.target === el("formModal") || e.target.hasAttribute("data-close")) closeForm();
    });
    el("f_img").addEventListener("input", function () { updatePreview(el("f_img").value.trim()); });
    el("f_imgFile").addEventListener("change", function () {
      var file = this.files && this.files[0];
      if (!file) return;
      var reader = new FileReader();
      reader.onload = function () {
        el("f_img").value = reader.result;
        updatePreview(reader.result);
      };
      reader.readAsDataURL(file);
    });

    // QR modal
    el("qrModal").addEventListener("click", function (e) {
      if (e.target === el("qrModal") || e.target.hasAttribute("data-close-qr")) closeQR();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { closeForm(); closeQR(); }
    });
  }

  function init() {
    var foot = el("footMeta");
    var meta = Store.meta();
    if (foot && meta) foot.innerHTML = esc(meta.org) + " · Boshqaruv paneli";
    bind();
    showView();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
