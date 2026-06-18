/*
 * store.js — ma'lumotlar qatlami.
 * Boshlang'ich (seed) ma'lumot js/data.js dan olinadi.
 * Admin o'zgartirishlari localStorage'da saqlanadi va seed ustiga qo'llanadi.
 * Shu brauzerdagi barcha sahifalar (ro'yxat, batafsil, admin) shu manbadan o'qiydi.
 */
(function (global) {
  "use strict";

  var KEY = "dastgoh_data_v1";

  function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  function seed() {
    return clone(global.DASTGOH_SEED);
  }

  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (raw) {
        var data = JSON.parse(raw);
        if (data && Array.isArray(data.machines)) return data;
      }
    } catch (e) { /* localStorage o'qilmadi — seedga qaytamiz */ }
    return seed();
  }

  function persist(data) {
    try {
      localStorage.setItem(KEY, JSON.stringify(data));
    } catch (e) {
      alert("Ma'lumotni saqlab bo'lmadi: " + e.message);
    }
  }

  var Store = {
    KEY: KEY,

    getData: function () {
      return load();
    },

    meta: function () {
      return load().meta;
    },

    labs: function () {
      return load().labs;
    },

    labOrder: function () {
      return load().labOrder;
    },

    labName: function (key) {
      var labs = load().labs;
      var l = labs[key];
      if (!l) return key;
      return l.code ? l.name + " (" + l.code + ")" : l.name;
    },

    machines: function () {
      return load().machines.slice();
    },

    get: function (id) {
      id = Number(id);
      var list = load().machines;
      for (var i = 0; i < list.length; i++) {
        if (Number(list[i].id) === id) return list[i];
      }
      return null;
    },

    nextId: function () {
      var list = load().machines;
      var max = 0;
      for (var i = 0; i < list.length; i++) {
        if (Number(list[i].id) > max) max = Number(list[i].id);
      }
      return max + 1;
    },

    add: function (machine) {
      var data = load();
      if (!machine.id) machine.id = this.nextId();
      data.machines.push(machine);
      persist(data);
      return machine;
    },

    update: function (id, patch) {
      id = Number(id);
      var data = load();
      for (var i = 0; i < data.machines.length; i++) {
        if (Number(data.machines[i].id) === id) {
          var merged = Object.assign({}, data.machines[i], patch);
          merged.id = id;
          data.machines[i] = merged;
          persist(data);
          return merged;
        }
      }
      return null;
    },

    remove: function (id) {
      id = Number(id);
      var data = load();
      data.machines = data.machines.filter(function (m) {
        return Number(m.id) !== id;
      });
      persist(data);
    },

    counts: function () {
      var list = load().machines;
      var total = list.length, working = 0, repair = 0;
      for (var i = 0; i < list.length; i++) {
        if (list[i].status === "tamir") repair++; else working++;
      }
      return { total: total, working: working, repair: repair };
    },

    isModified: function () {
      try { return localStorage.getItem(KEY) !== null; }
      catch (e) { return false; }
    },

    reset: function () {
      try { localStorage.removeItem(KEY); } catch (e) {}
    },

    // Joriy ma'lumotni to'liq js/data.js fayli ko'rinishida qaytaradi
    // (admin -> Export). Faylni almashtirib, GitHubга push qilsangiz,
    // o'zgartirishlar barcha foydalanuvchilar uchun doimiy bo'ladi.
    exportJS: function () {
      var data = load();
      var json = JSON.stringify(data, null, 2);
      return (
        "/*\n" +
        " * DASTGOH — INNO Texnopark dastgohlari ma'lumotlar bazasi (seed)\n" +
        " * Admin panelidan eksport qilingan. Sana: " + new Date().toLocaleString() + "\n" +
        " */\n" +
        "window.DASTGOH_SEED = " + json + ";\n"
      );
    }
  };

  global.Store = Store;
})(window);
