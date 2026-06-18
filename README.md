# INNO Texnopark — Dastgohlar platformasi

INNO Texnopark laboratoriyalaridagi dastgohlar uchun yagona platforma. Har bir
dastgoh haqida to'liq ma'lumot, joriy holati, imkoniyatlari va bajarish mumkin
bo'lgan ishlar ko'rsatilgan. Har bir dastgoh uchun alohida **QR kod** mavjud —
uni skaner qilib, telefon orqali dastgoh sahifasini ochish mumkin.

Platforma to'liq **statik** (server kerak emas) va telefonда qulay ishlashga
mo'ljallangan, lekin barcha qurilmalarga moslashadi.

## Imkoniyatlar

- **Katalog** (`index.html`) — laboratoriyalar bo'yicha guruhlangan dastgohlar,
  qidiruv hamda holat/laboratoriya bo'yicha filtrlash.
- **Batafsil sahifa** (`machine.html?id=N`) — QR kod aynan shu sahifani ochadi:
  rasm, model, holati, tavsifi, imkoniyatlari, bajariladigan ishlar va QR kod.
- **Boshqaruv paneli** (`admin.html`) — faqat admin uchun:
  - dastgoh **qo'shish / tahrirlash / o'chirish**;
  - har bir dastgohga **model va nom bilan QR kod** yaratish va PNG yuklab olish;
  - **barcha QR kodlar** varag'ini chop etish (dastgohlarga yopishtirish uchun);
  - **Export** — joriy ma'lumotni `data.js` ko'rinishida yuklab olish.

### Admin kirish ma'lumotlari

| Login  | Parol  |
|--------|--------|


> Eslatma: bu front-end darajasidagi oddiy himoya (statik sayt uchun). Jiddiy
> maxfiylik talab qilinsa, server tomonida autentifikatsiya qo'shilishi kerak.

## Ma'lumotlar qanday saqlanadi

- Boshlang'ich (statik) ma'lumotlar `js/data.js` faylida (manba:
  `Stanoklar holati.docx`, 15.05.2026 holatiga ko'ra — 56 ta dastgoh, 3 laboratoriya).
- Admin paneldagi qo'shish/tahrirlash/o'chirish o'zgarishlari **shu brauzerning**
  `localStorage`'ida saqlanadi (server yo'q).
- O'zgarishlarni **hamma uchun doimiy** qilish: admin panelda **Export** tugmasini
  bosing → yuklab olingan `data.js` faylini loyihadagi `js/data.js` bilan
  almashtiring → GitHubga push qiling. Hosting avtomatik yangilanadi.

## Loyiha tuzilishi

```
index.html        # Katalog (bosh sahifa)
machine.html      # Dastgoh batafsil sahifasi (QR shu yerni ochadi)
admin.html        # Boshqaruv paneli
css/style.css     # Dizayn (oq fon + to'q ko'k)
js/data.js        # Dastgohlar ma'lumotlar bazasi (seed)
js/store.js       # localStorage qatlami (CRUD + export)
js/common.js      # Umumiy yordamchilar
js/app.js         # Katalog mantiqi
js/machine.js     # Batafsil sahifa + QR
js/admin.js       # Admin: auth, CRUD, QR
js/qrcode.min.js  # QR kod kutubxonasi (mahalliy, CDN'siz)
assets/img/       # Dastgoh rasmlari (image1..image56)
```

## Mahalliy ishga tushirish

`file://` orqali emas, oddiy HTTP server orqali oching:

```bash
cd DASTGOH
python3 -m http.server 8080
# brauzerda: http://localhost:8080
```

## Bepul hostingga joylash

Sayt statik bo'lgani uchun quyidagilarning istalganida ishlaydi:

- **GitHub Pages** — repozitoriy `Settings → Pages → Deploy from a branch → main /(root)`.
- **Netlify** — "Add new site → Import from GitHub" yoki papkani drag&drop.
  Build buyrug'i yo'q, `Publish directory` = loyiha ildizi.
- **Vercel** — "Add New → Project → Import" (framework: Other, build yo'q).

QR kodlar joriy manzil asosida avtomatik yaratiladi (`window.location`), shuning
uchun saytni joylagandan so'ng admin paneldan QR kodlarni yarating/chop eting —
ular to'g'ri (hosting) manzilга ishora qiladi.
