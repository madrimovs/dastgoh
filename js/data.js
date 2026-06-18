/*
 * DASTGOH — INNO Texnopark dastgohlari ma'lumotlar bazasi (seed)
 * Manba: "Stanoklar holati.docx" (15.05.2026 holatiga ko'ra)
 *
 * Bu fayl statik boshlang'ich ma'lumot. Admin panelida kiritilgan
 * o'zgartirishlar brauzerning localStorage'ida saqlanadi (store.js).
 * Doimiy o'zgartirish uchun admin panelidagi "Export" tugmasidan
 * foydalanib, ushbu faylni yangilang.
 */
window.DASTGOH_SEED = {
  meta: {
    org: '"INNO Texnopark" MChJ',
    dept: "Ishlab chiqarish va ilg'or laboratoriyalar faoliyatini muvofiqlashtirish bo'limi",
    date: "15.05.2026"
  },
  labOrder: ["prod", "standart", "elektronika"],
  labs: {
    prod:        { name: "Ishlab chiqarish maydoni", code: "", short: "Ishlab chiqarish" },
    standart:    { name: "Standartlashtirish laboratoriyasi", code: "109", short: "Standartlashtirish (109)" },
    elektronika: { name: "Elektronika va Robototexnika laboratoriyasi", code: "R-1", short: "Elektronika (R-1)" }
  },
  // status: "ishlaydi" = Ishchi holatida, "tamir" = Ta'mirtalab
  machines: [
    // ===================== ISHLAB CHIQARISH MAYDONI =====================
    {
      id: 1, lab: "prod", name: "Listogib stanogi (Gidravlik)", model: "PRESS BRAKE 6325",
      func: "Metall listlarni bukish (gidravlik)",
      desc: "Gidravlik kuch yordamida metall listlarni yuqori aniqlikda bukadigan press-brake dastgohi.",
      caps: ["Gidravlik yuritma orqali katta bosim", "Turli burchaklarda aniq bukish", "Qalin metall listlar bilan ishlash", "Uzun choklarni bir tekisda bukish"],
      works: ["Metall korpus va g'iloflar tayyorlash", "Profil va kronshteyn bukish", "Listli detallarni seriyali bukish"],
      status: "tamir", note: "Gidravlika tizimida muammo bor (ta'mirlash jarayonida).", img: "assets/img/image1.png"
    },
    {
      id: 2, lab: "prod", name: "Listogib dastgohi (qo'l kuchi bilan)", model: "WS 2*1300mm",
      func: "Metall listlarni bukish (qo'lda)",
      desc: "Qo'l kuchi bilan ishlaydigan, 1300 mm gacha metall listlarni bukuvchi mexanik listogib.",
      caps: ["1300 mm gacha kenglikdagi listlar", "Elektr energiyasiz ishlash", "Sodda va tez sozlash", "Yupqa-o'rta qalinlikdagi metall"],
      works: ["Yupqa list detallarni bukish", "Tajriba va yakka tartibdagi ishlar", "Burchak va qirralarni shakllantirish"],
      status: "ishlaydi", note: "", img: "assets/img/image2.jpeg"
    },
    {
      id: 3, lab: "prod", name: "Tokar stanogi", model: "GHB-1340A",
      func: "Metall qismlarni yo'nish, tashqi rezbalar ochish",
      desc: "Aylanuvchi detallarni yo'nish, teshish va rezba ochish uchun universal tokarlik stanogi.",
      caps: ["Tashqi va ichki yo'nish", "Tashqi rezba ochish", "Silindrik va konussimon yuzalar", "Markazlash va parmalash"],
      works: ["Val, vtulka va shayba tayyorlash", "Rezbali detallar ishlab chiqarish", "Detallarni o'lchamga keltirish"],
      status: "ishlaydi", note: "", img: "assets/img/image3.jpeg"
    },
    {
      id: 4, lab: "prod", name: "Frezalash stanogi", model: "MODEL X6336",
      func: "Metall qismlarni frezalash, yo'nish",
      desc: "Universal frezalash stanogi — yassi yuzalar, ariqcha (paz) va profil elementlarini qayta ishlaydi.",
      caps: ["Yassi va profil yuzalarni frezalash", "Ariqcha (paz) ochish", "Burchakli ishlov berish", "Turli o'lchamdagi detallar"],
      works: ["Korpus detallar tayyorlash", "Shponka ariqchalari ochish", "Yuzalarni tekislash"],
      status: "ishlaydi", note: "", img: "assets/img/image4.png"
    },
    {
      id: 5, lab: "prod", name: "CNC Frezer stanogi", model: "LEYO MACHINERY VMC-1060",
      func: "Kompyuter nazorati ostida frezalash va burg'ulash",
      desc: "CNC dasturiy boshqaruvli vertikal frezer markazi — murakkab detallarni avtomatik va yuqori aniqlikda ishlaydi.",
      caps: ["3 o'qli CNC boshqaruv", "Murakkab konturlarni frezalash", "Avtomatik burg'ulash sikllari", "Yuqori takrorlanish aniqligi"],
      works: ["Press-formalar va qoliplar", "Murakkab mexanik detallar", "Seriyali yuqori aniq ishlov"],
      status: "ishlaydi", note: "", img: "assets/img/image5.jpeg"
    },
    {
      id: 6, lab: "prod", name: "Vertikal Burg'ulash stanogi", model: "Z5035A",
      func: "Metall va boshqa materiallarda vertikal burg'ulash",
      desc: "Vertikal shpindelli burg'ulash stanogi — metall va boshqa materiallarda aniq teshiklar ochadi.",
      caps: ["Turli diametrdagi teshiklar", "Sozlanadigan aylanish tezligi", "Markazlash va zenkerlash", "Rezba ochish (metchik bilan)"],
      works: ["Teshiklar burg'ulash", "Detallarni biriktirishga tayyorlash", "Rezbali teshiklar ochish"],
      status: "ishlaydi", note: "", img: "assets/img/image6.jpeg"
    },
    {
      id: 7, lab: "prod", name: "Shlifovka stanogi", model: "",
      func: "Metall sirtlarini silliqlash va pardozlash",
      desc: "Metall yuzalarini silliqlovchi va pardozlovchi shlifovka stanogi.",
      caps: ["Yuqori sirt tozaligi (silliqlik)", "Yuzalarni aniq o'lchamga keltirish", "Qattiq metallarni qayta ishlash", "Charxlash va o'tkirlash"],
      works: ["Yuzalarni silliqlash", "Asbob va keskichlarni charxlash", "Pardozlash ishlari"],
      status: "ishlaydi", note: "", img: "assets/img/image7.png"
    },
    {
      id: 8, lab: "prod", name: "Payvandlash dastgohi", model: "ESAB Rebel EMP 215IC",
      func: "Metall qismlarni payvandlash",
      desc: "Ko'p jarayonli (MIG/MAG, MMA, TIG) ESAB payvandlash apparati — turli metallarni ishonchli payvandlaydi.",
      caps: ["MIG/MAG, MMA va TIG rejimlari", "Po'lat, zanglamaydigan po'lat, alyumin", "Portativ va sozlash oson", "Barqaror yoy va sifatli chok"],
      works: ["Metall konstruksiyalarni payvandlash", "Ta'mirlash payvandlash ishlari", "Yupqa va o'rta metallarni ulash"],
      status: "ishlaydi", note: "", img: "assets/img/image8.jpeg"
    },
    {
      id: 9, lab: "prod", name: "Plazma kesish dastgohi", model: "ESAB Cutmaster 60",
      func: "Metall materiallarni plazma yordamida kesish",
      desc: "Plazma yoyi yordamida o'tkazuvchan metallarni tez va toza kesuvchi dastgoh.",
      caps: ["Po'lat, zanglamaydigan po'lat, alyumin kesish", "Qalin listlarni tez kesish", "Toza va tor kesim", "Qo'lda boshqariladigan kesgich"],
      works: ["Metall listlarni o'lchamga kesish", "Profil va quvurlarni kesish", "Tayyorlov (zagotovka) ishlari"],
      status: "ishlaydi", note: "", img: "assets/img/image9.jpeg"
    },
    {
      id: 10, lab: "prod", name: "Nuqtali payvandlash", model: "TECNA TE40i",
      func: "Metall qismlarni nuqtaviy payvandlash",
      desc: "Qarshilik orqali ishlaydigan nuqtaviy (kontakt) payvandlash dastgohi — listlarni nuqtalab ulaydi.",
      caps: ["Nuqtaviy (kontakt) payvandlash", "Yupqa metall listlarni ulash", "Tez va qo'shimcha materialsiz", "Aniq sozlanadigan rejim"],
      works: ["Listli korpuslarni yig'ish", "Metall karkaslarni nuqtalab ulash", "Seriyali yig'ish ishlari"],
      status: "ishlaydi", note: "", img: "assets/img/image10.jpeg"
    },
    {
      id: 11, lab: "prod", name: "Akfa Arra", model: "YILMAZ",
      func: "Yog'och va profil materiallarni arralash",
      desc: "Yog'och hamda profil materiallarni o'lchamga aniq kesuvchi arralash dastgohi.",
      caps: ["To'g'ri va burchakli kesish", "Profil va reyka materiallar", "Barqaror va aniq kesim", "Seriyali kesish"],
      works: ["Detallarni o'lchamga kesish", "Romka va profil tayyorlash", "Mebel zagotovkalari"],
      status: "ishlaydi", note: "", img: "assets/img/image11.png"
    },
    {
      id: 12, lab: "prod", name: "Lentali arra (metall uchun)", model: "Kesmak KSY 550x700",
      func: "Metall materiallarni lentali arra yordamida kesish",
      desc: "Metall prutoklar va profillarni lentali tig' bilan aniq kesuvchi arra.",
      caps: ["Lentali tig' bilan kesish", "Burchak ostida kesish imkoni", "Yumaloq va profil metallar", "Sovitish bilan ishlash"],
      works: ["Val va prutoklarni kesish", "Profil va quvur tayyorlovi", "Aniq o'lchamli zagotovka"],
      status: "ishlaydi", note: "", img: "assets/img/image12.jpeg"
    },
    {
      id: 13, lab: "prod", name: "Elektroerozion stanok (simli)", model: "Sodick VL600Q",
      func: "Metallga elektroerozion ishlov berish, sim orqali kesish",
      desc: "Sim-elektrod orqali metallni elektroerozion (uchqun) usulida yuqori aniqlikda kesuvchi dastgoh.",
      caps: ["Sim orqali elektroerozion kesish", "Murakkab konturlar va o'tkir burchaklar", "Qattiq va qotgan metallar", "Mikron darajadagi aniqlik"],
      works: ["Press-forma va shtamp detallari", "Murakkab profil kesish", "Qattiq qotishmalarni qayta ishlash"],
      status: "ishlaydi", note: "", img: "assets/img/image13.png"
    },
    {
      id: 14, lab: "prod", name: "Elektroerozion stanok", model: "Sodick AD35L",
      func: "Metallga nozik elektroerozion ishlov berish",
      desc: "Nozik va yuqori aniqlikdagi elektroerozion ishlov uchun mo'ljallangan dastgoh.",
      caps: ["Yuqori aniqlikdagi nozik kesish", "Qattiq metallarga ishlov", "Murakkab kichik detallar", "Mikron darajada aniqlik"],
      works: ["Mayda aniq detallar", "Press-forma elementlari", "Nozik profil kesish"],
      status: "tamir", note: "Elektr tizimida muammo bor.", img: "assets/img/image14.jpeg"
    },
    {
      id: 15, lab: "prod", name: "Gilotina stanogi", model: "Model-SL144",
      func: "Metall listlarni kesish (pichoq yordamida)",
      desc: "Pichoq (gilotina) yordamida metall listlarni to'g'ri chiziq bo'ylab kesuvchi dastgoh.",
      caps: ["To'g'ri chiziqli aniq kesish", "Keng metall listlar", "Tez va seriyali kesish", "Bir tekis qirralar"],
      works: ["Listlarni o'lchamga kesish", "Tayyorlov zagotovkalari", "Yirik hajmli list kesish"],
      status: "ishlaydi", note: "", img: "assets/img/image15.jpeg"
    },
    {
      id: 16, lab: "prod", name: "Metall lazer stanogi", model: "Bodor A3 (+stabilizator +chiller)",
      func: "Metall listlarni lazer yordamida kesish",
      desc: "Tolali (fiber) lazer yordamida metall listlarni yuqori tezlik va aniqlikda kesuvchi zamonaviy dastgoh.",
      caps: ["Tolali lazerli aniq kesish", "Murakkab shakl va naqshlar", "Po'lat, zanglamaydigan po'lat, alyumin", "Yuqori tezlik va toza kesim"],
      works: ["Murakkab metall detallar", "Dekorativ va texnik naqshlar", "Seriyali listli ishlab chiqarish"],
      status: "ishlaydi", note: "Stabilizator va chiller bilan jihozlangan.", img: "assets/img/image16.png"
    },
    {
      id: 17, lab: "prod", name: "Yog'ochga ishlov beruvchi lazer stanogi", model: "ACCTEK AKJ6090",
      func: "Yog'och materiallarni lazer yordamida kesish",
      desc: "CO2 lazer yordamida yog'och va shunga o'xshash materiallarni kesuvchi va o'yuvchi dastgoh.",
      caps: ["Yog'och, fanera, akril kesish", "Naqsh va gravirovka (o'yish)", "Murakkab konturlar", "Aniq va toza kesim"],
      works: ["Dekorativ yog'och buyumlar", "Logotip va naqsh o'yish", "Maket va suvenir tayyorlash"],
      status: "ishlaydi", note: "", img: "assets/img/image17.png"
    },
    {
      id: 18, lab: "prod", name: "Yog'ochga ishlov beruvchi rover stanogi", model: "ACCTEK AKM6090",
      func: "Yog'och materiallarni frezalash (rover)",
      desc: "CNC rover (frezer) stanogi — yog'och materiallarni dasturiy boshqaruvda frezalaydi va o'yadi.",
      caps: ["CNC boshqaruvli frezalash", "3D relyef va naqsh", "Teshik va ariqcha ochish", "Katta yuzali panellar"],
      works: ["Mebel detallari frezalash", "Yog'och naqsh va relyef", "Fasad va panel ishlari"],
      status: "ishlaydi", note: "", img: "assets/img/image18.jpeg"
    },
    {
      id: 19, lab: "prod", name: "O'ymakorlik dastgohi", model: "XCZ-QNC340",
      func: "Yog'och va boshqa materiallarga naqsh berish (rover)",
      desc: "Yog'och va boshqa materiallarga nafis naqsh va o'ymakorlik ishlarini bajaruvchi CNC dastgoh.",
      caps: ["Nafis naqsh va o'ymakorlik", "Murakkab geometrik shakllar", "Yog'och va yumshoq materiallar", "Takrorlanuvchi aniq naqsh"],
      works: ["Milliy naqsh o'yish", "Dekorativ panellar", "Suvenir va badiiy buyumlar"],
      status: "ishlaydi", note: "", img: "assets/img/image19.jpeg"
    },
    {
      id: 20, lab: "prod", name: "Termoplast stanogi", model: "YH170",
      func: "Plastik materiallarni eritib qolipga quyish",
      desc: "Termoplastik materiallarni eritib qolipga quyuvchi (injection moulding) dastgoh.",
      caps: ["Plastikni eritib quyish", "Qolip orqali shakllantirish", "Seriyali bir xil detallar", "Turli plastik xomashyo"],
      works: ["Plastik detallar ishlab chiqarish", "Qolipli mahsulotlar", "Seriyali plastik buyumlar"],
      status: "ishlaydi", note: "", img: "assets/img/image20.jpeg"
    },
    {
      id: 21, lab: "prod", name: "Metall implant 3D printeri", model: "SLM280",
      func: "Metall implantlarni 3D chop etish",
      desc: "SLM (Selective Laser Melting) texnologiyasi orqali metall kukundan implant va detallarni qatlamlab chop etuvchi 3D printer.",
      caps: ["Metall kukunni lazer bilan eritib chop etish", "Murakkab ichki geometriya", "Tibbiy implantlar uchun aniqlik", "Yuqori zichlikdagi metall detallar"],
      works: ["Metall implantlar tayyorlash", "Murakkab metall prototiplar", "Maxsus geometrik detallar"],
      status: "ishlaydi", note: "", img: "assets/img/image21.png"
    },
    {
      id: 22, lab: "prod", name: "Yog'och arra", model: "JST-315SP",
      func: "Yog'och materiallarni arralash",
      desc: "Stolli disk arra — yog'och materiallarni to'g'ri va aniq kesuvchi dastgoh.",
      caps: ["To'g'ri va burchakli kesish", "Aniq parallel kesim", "Turli qalinlikdagi yog'och", "Tez seriyali kesish"],
      works: ["Yog'och taxtalarni kesish", "Mebel zagotovkalari", "Aniq o'lchamli detallar"],
      status: "ishlaydi", note: "", img: "assets/img/image22.jpeg"
    },
    {
      id: 23, lab: "prod", name: "Burg'ulash stanogi", model: "JET JDP-17T",
      func: "Yog'och va metall materiallarni burg'ulash",
      desc: "Stolli burg'ulash stanogi — yog'och va metallarda aniq teshiklar ochadi.",
      caps: ["Turli diametrdagi teshiklar", "Sozlanadigan tezlik", "Yog'och va metall bilan ishlash", "Aniq vertikal burg'ulash"],
      works: ["Teshik ochish ishlari", "Detallarni biriktirishga tayyorlash", "Aniq markazlangan teshiklar"],
      status: "ishlaydi", note: "", img: "assets/img/image23.jpeg"
    },
    {
      id: 24, lab: "prod", name: "Metall 3D printer arrasi", model: "ZRapid SCA280",
      func: "Metall 3D bosilgan buyumlarni ajratish, tozalash",
      desc: "Metall 3D bosilgan detallarni platformadan ajratish va tozalash uchun maxsus arra.",
      caps: ["3D bosilgan detallarni ajratish", "Metall platformani kesish", "Aniq va xavfsiz kesim", "Qattiq metallar bilan ishlash"],
      works: ["Bosilgan detallarni platformadan ajratish", "Yordamchi qismlarni kesish", "Post-processing tayyorlovi"],
      status: "ishlaydi", note: "", img: "assets/img/image24.png"
    },
    {
      id: 25, lab: "prod", name: "Qum bilan tozalash stanogi (peskostruy)", model: "KSO-110-I-FVR-M",
      func: "Sirtlarni zang va qoldiqlardan tozalash",
      desc: "Bosim ostidagi abraziv qum oqimi bilan metall yuzalarini zang va ifloslikdan tozalovchi dastgoh.",
      caps: ["Abraziv qum bilan tozalash", "Zang va eski qoplamani olib tashlash", "Bo'yashdan oldin yuza tayyorlash", "Murakkab yuzalarni tozalash"],
      works: ["Metall yuzalarni tozalash", "Bo'yoq oldidan tayyorlov", "Matlash (mat yuza) ishlari"],
      status: "ishlaydi", note: "", img: "assets/img/image25.jpeg"
    },
    {
      id: 26, lab: "prod", name: "Vibratsiyali Galtovka dastgohi", model: "Vibro Plus ZHM-40A",
      func: "Detallar yuzasini vibratsiya orqali silliqlash va ajratish",
      desc: "Vibratsiya orqali detallar yuzasini abraziv to'ldirgich bilan silliqlovchi va tozalovchi galtovka dastgohi.",
      caps: ["Vibratsiyali ishlov berish", "Bir vaqtda ko'p detallarni qayta ishlash", "Yuzani silliqlash va tozalash", "Avtomatik uzluksiz ish"],
      works: ["Mayda detallarni galtovka qilish", "Yuzalarni silliqlash", "Quyma detallarni tozalash"],
      status: "ishlaydi", note: "", img: "assets/img/image26.jpeg"
    },
    {
      id: 27, lab: "prod", name: "Vakuumli quyish mashinasi", model: "HVC-2",
      func: "Plastik buyumlarni shakllantirish, vakuum orqali qoliplash",
      desc: "Vakuum ostida silikon qolipga material quyib, aniq nusxa detallar oluvchi dastgoh.",
      caps: ["Vakuumli quyish (havosiz)", "Silikon qoliplar bilan ishlash", "Aniq nusxa va prototiplar", "Pufaksiz sifatli quyma"],
      works: ["Prototip detallar quyish", "Kichik seriyali nusxalar", "Silikon qolip ishlari"],
      status: "ishlaydi", note: "", img: "assets/img/image27.jpeg"
    },
    {
      id: 28, lab: "prod", name: "Termoshkaf mashinasi", model: "HRCH-1",
      func: "Materiallarni isitish, yumshatish va shakllantirish",
      desc: "Boshqariladigan haroratli termoshkaf — materiallarni isitish, quritish va termik ishlov uchun.",
      caps: ["Aniq harorat nazorati", "Materiallarni isitish va quritish", "Termik ishlov berish", "Bir tekis isitish"],
      works: ["Materiallarni qizdirish/yumshatish", "Quritish jarayonlari", "Termik tayyorlov"],
      status: "ishlaydi", note: "", img: "assets/img/image28.jpeg"
    },
    {
      id: 29, lab: "prod", name: "Kompressor", model: "",
      func: "Havoni yig'ib bosim bilan yetkazib berish",
      desc: "Siqilgan havo ishlab chiqaruvchi kompressor — pnevmatik asbob va dastgohlarni havo bilan ta'minlaydi.",
      caps: ["Siqilgan havo ishlab chiqarish", "Barqaror bosim ta'minoti", "Pnevmatik asboblarni quvvatlash", "Uzluksiz ishlash"],
      works: ["Pnevmatik asboblarni ishlatish", "Bo'yash va puflash ishlari", "Dastgohlarga havo ta'minoti"],
      status: "ishlaydi", note: "", img: "assets/img/image29.jpeg"
    },
    {
      id: 30, lab: "prod", name: "Havo tozalash uskunasi", model: "PURELOGIC",
      func: "Havoni tozalash (metall lazer uchun)",
      desc: "Metall lazer dastgohi ishlashida hosil bo'ladigan tutun va changlarni so'rib tozalovchi filtr uskunasi.",
      caps: ["Tutun va changni so'rish", "Havoni filtrlash va tozalash", "Lazer dastgohi bilan integratsiya", "Ish muhitini sog'lomlashtirish"],
      works: ["Lazer kesish tutunini tozalash", "Ishlab chiqarish havosini filtrlash", "Chang nazorati"],
      status: "ishlaydi", note: "", img: "assets/img/image30.png"
    },
    {
      id: 31, lab: "prod", name: "Anycubic Photon M3", model: "Photon M3", qty: 2,
      func: "3D printer (suyuq smola — LCD/SLA)",
      desc: "LCD-smolali (rezin) 3D printer — suyuq fotopolimerdan yuqori detalli kichik modellar chop etadi.",
      caps: ["Yuqori aniqlikdagi smolali bosma", "Mayda va nozik detallar", "Silliq yuza sifati", "Murakkab geometriya"],
      works: ["Aniq prototiplar chop etish", "Mayda figura va modellar", "Stomatologik/zargarlik maketlar"],
      status: "tamir", note: "2 ta mavjud; ikkalasining ham monitori kuygan.", img: "assets/img/image31.jpeg"
    },
    {
      id: 32, lab: "prod", name: "Sinterit Lisa Pro", model: "Lisa Pro SLS",
      func: "SLS 3D printer (kukunli)",
      desc: "SLS texnologiyali 3D printer — polimer kukunni lazer bilan kuydirib mustahkam detallar chop etadi.",
      caps: ["Kukunli SLS bosma", "Tayanchsiz murakkab geometriya", "Mustahkam funksional detallar", "Harakatlanuvchi mexanizmlarni yaxlit chop etish"],
      works: ["Funksional prototiplar", "Murakkab muhandislik detallari", "Kichik seriyali mahsulotlar"],
      status: "ishlaydi", note: "", img: "assets/img/image32.jpeg"
    },
    {
      id: 33, lab: "prod", name: "Fanuc CNC Simulyator", model: "Fanuc CNC",
      func: "Fanuc CNC boshqaruv paneli (o'quv qurilmasi)",
      desc: "Fanuc CNC tizimini o'rganish uchun simulyator — haqiqiy boshqaruv panelida dasturlashni mashq qilish imkonini beradi.",
      caps: ["Haqiqiy Fanuc boshqaruv paneli", "CNC dasturlashni mashq qilish", "Xavfsiz o'quv muhiti", "G-kod simulyatsiyasi"],
      works: ["CNC operatorlarini o'qitish", "Dasturlarni sinovdan o'tkazish", "Amaliy mashg'ulotlar"],
      status: "ishlaydi", note: "", img: "assets/img/image33.jpeg"
    },
    {
      id: 34, lab: "prod", name: "Wiibox Reeyee Pro 3D Scanner", model: "Reeyee Pro",
      func: "Obyektlarni 3D skanerlash",
      desc: "Obyektlarning 3D shaklini raqamli modelga aylantiruvchi 3D skaner.",
      caps: ["Obyektlarni 3D skanerlash", "Aniq raqamli model olish", "Teskari muhandislik (reverse engineering)", "Murakkab yuzalarni raqamlashtirish"],
      works: ["Detallarni 3D modelga o'tkazish", "Teskari muhandislik", "Sifat nazorati uchun o'lchov"],
      status: "tamir", note: "USB fleshkasi yo'qolgan.", img: "assets/img/image34.png"
    },

    // ===================== STANDARTLASHTIRISH LABORATORIYASI (109) =====================
    {
      id: 35, lab: "standart", name: "Koordinatali o'lchov mashinasi (KIM)", model: "Crysta-Apex S57",
      func: "Obyektning geometrik xususiyatlarini o'lchash",
      desc: "Koordinatali o'lchov mashinasi (CMM) — detallarning geometrik o'lchamlarini mikron aniqligida tekshiradi.",
      caps: ["3D koordinatali o'lchov", "Mikron darajadagi aniqlik", "Geometrik dopusklarni nazorat", "Murakkab yuzalarni o'lchash"],
      works: ["Detallar geometriyasini nazorat qilish", "Sifat tekshiruvi", "O'lchov protokollari tayyorlash"],
      status: "ishlaydi", note: "", img: "assets/img/image35.jpeg"
    },
    {
      id: 36, lab: "standart", name: "Profilometr (yuza tekisligi)", model: "SJ-210",
      func: "Yuza g'adir-budurligi parametrlarini o'lchash",
      desc: "Ko'chma profilometr — yuza g'adir-budurligi (sherokhovatost) parametrlarini aniq o'lchaydi.",
      caps: ["Yuza g'adir-budurligini o'lchash (Ra, Rz)", "Ko'chma va qulay", "Aniq raqamli natija", "Turli yuzalar bilan ishlash"],
      works: ["Yuza sifatini nazorat qilish", "Ishlov sifati tekshiruvi", "O'lchov hisobotlari"],
      status: "ishlaydi", note: "", img: "assets/img/image36.jpeg"
    },
    {
      id: 37, lab: "standart", name: "Profilometr (yuza tekisligi)", model: "TR-100",
      func: "Yuza g'adir-budurligi parametrlarini o'lchash",
      desc: "Portativ profilometr — metall va boshqa yuzalarning g'adir-budurligini tez o'lchaydi.",
      caps: ["Yuza g'adir-budurligini o'lchash", "Tez va portativ", "Sodda boshqaruv", "Raqamli ko'rsatkich"],
      works: ["Yuza sifati nazorati", "Ishlab chiqarishda tezkor tekshiruv", "O'lchash ishlari"],
      status: "ishlaydi", note: "", img: "assets/img/image37.jpeg"
    },
    {
      id: 38, lab: "standart", name: "Shtangenreysmas", model: "0-300 mm",
      func: "Balandlikni aniq o'lchash",
      desc: "0–300 mm balandlikni aniq o'lchaydigan va belgilaydigan (razmetka) o'lchov asbobi.",
      caps: ["Balandlikni aniq o'lchash (0–300 mm)", "Razmetka (belgilash) ishlari", "Yuqori o'lchov aniqligi", "Mustahkam konstruksiya"],
      works: ["Detallar balandligini o'lchash", "Razmetka qilish", "Geometrik nazorat"],
      status: "ishlaydi", note: "", img: "assets/img/image38.jpeg"
    },
    {
      id: 39, lab: "standart", name: "Teplovizor (termal kamera)", model: "Fluke TiS20",
      func: "Issiqlikni aniqlash va o'lchash",
      desc: "Termal kamera (teplovizor) — obyektlarning harorat taqsimotini tasvirda ko'rsatadi.",
      caps: ["Harorat taqsimotini tasvirlash", "Issiqlik nuqtalarini aniqlash", "Kontaktsiz o'lchov", "Termal rasmlarni saqlash"],
      works: ["Uskunalar qizishini nazorat qilish", "Elektr ulanishlarini tekshirish", "Issiqlik diagnostikasi"],
      status: "ishlaydi", note: "", img: "assets/img/image39.jpeg"
    },
    {
      id: 40, lab: "standart", name: "Raqamli mikrometr", model: "INSIZE 0-25 mm (0,001 mm)",
      func: "Detallarning qalinligi, diametri va uzunligini yuqori aniqlikda o'lchash",
      desc: "0–25 mm diapazonli, 0,001 mm aniqlikdagi raqamli mikrometr.",
      caps: ["0,001 mm o'lchov aniqligi", "Raqamli displey", "Qalinlik va diametr o'lchash", "Tez va qulay o'qish"],
      works: ["Mayda detallarni aniq o'lchash", "Sifat nazorati", "O'lchov tekshiruvi"],
      status: "ishlaydi", note: "", img: "assets/img/image40.jpeg"
    },
    {
      id: 41, lab: "standart", name: "Raqamli mikrometr", model: "100-125 mm (0,001 mm)",
      func: "Detallarning qalinligi, diametri va uzunligini yuqori aniqlikda o'lchash",
      desc: "100–125 mm diapazonli, 0,001 mm aniqlikdagi raqamli mikrometr.",
      caps: ["0,001 mm aniqlik", "Kattaroq detallar uchun (100–125 mm)", "Raqamli displey", "Ishonchli o'lchov"],
      works: ["Yirikroq detallar o'lchovi", "Sifat nazorati", "Diametr tekshiruvi"],
      status: "ishlaydi", note: "", img: "assets/img/image41.jpeg"
    },
    {
      id: 42, lab: "standart", name: "IK-Fure (FTIR) spektrometr", model: "IRAffinity",
      func: "Moddalarni infraqizil nurlar yordamida tahlil qilish va tarkibini aniqlash",
      desc: "Infraqizil Furye (FTIR) spektrometri — moddalarning kimyoviy tarkibi va tuzilishini IQ spektr orqali tahlil qiladi.",
      caps: ["Infraqizil spektral tahlil", "Moddaning kimyoviy tarkibini aniqlash", "Organik birikmalarni identifikatsiya", "Yuqori sezgirlik"],
      works: ["Material tarkibini aniqlash", "Sifat va haqiqiylik tahlili", "Ilmiy tadqiqot o'lchovlari"],
      status: "ishlaydi", note: "", img: "assets/img/image42.jpeg"
    },
    {
      id: 43, lab: "standart", name: "Qattiqlik o'lchash qurilmasi", model: "HBRVS-187.5",
      func: "Metall va materiallarning qattiqlik darajasini aniqlash",
      desc: "Universal qattiqlik o'lchagich — Brinell, Rokvell va Vikkers usullarida qattiqlikni aniqlaydi.",
      caps: ["Brinell / Rokvell / Vikkers usullari", "Turli metallar qattiqligi", "Aniq va takrorlanuvchi natija", "Keng o'lchov diapazoni"],
      works: ["Metall qattiqligini aniqlash", "Termik ishlov sifatini nazorat", "Material sinovlari"],
      status: "ishlaydi", note: "", img: "assets/img/image43.jpeg"
    },
    {
      id: 44, lab: "standart", name: "Qattiqlik o'lchash qurilmasi", model: "HPE III",
      func: "Metall va materiallarning qattiqlik darajasini aniqlash",
      desc: "Qattiqlik o'lchagich — materiallarning qattiqlik ko'rsatkichini aniqlaydi.",
      caps: ["Materiallar qattiqligini o'lchash", "Sodda boshqaruv", "Ishonchli natija", "Turli namunalar bilan ishlash"],
      works: ["Qattiqlik nazorati", "Material sinovlari", "Sifat tekshiruvi"],
      status: "ishlaydi", note: "", img: "assets/img/image44.jpeg"
    },
    {
      id: 45, lab: "standart", name: "Optik-emissiyali spektrometr", model: "Q4 Tasman",
      func: "Metall va qotishmalarning kimyoviy tarkibini aniqlash",
      desc: "Optik-emissiyali spektrometr — metall va qotishmalarning kimyoviy tarkibini tez va aniq tahlil qiladi.",
      caps: ["Metall qotishmalar tarkibini aniqlash", "Tez emissiyali tahlil", "Ko'p elementlarni bir vaqtda o'lchash", "Yuqori aniqlik"],
      works: ["Po'lat va qotishma markasini aniqlash", "Kiruvchi nazorat", "Metallurgik tahlil"],
      status: "ishlaydi", note: "", img: "assets/img/image45.jpeg"
    },
    {
      id: 46, lab: "standart", name: "Universal sinov mashinasi (Metrotest)", model: "MT(M) 120-5",
      func: "Materiallarni tortish, siqish va egish sinovi",
      desc: "Universal sinov mashinasi — materiallarni cho'zish, siqish va egishda mustahkamligini hamda deformatsiyaga chidamliligini sinaydi.",
      caps: ["Cho'zish / siqish / egish sinovlari", "Mustahkamlik va deformatsiyani aniqlash", "Kuch-deformatsiya grafigi", "Turli materiallar"],
      works: ["Material mustahkamligini sinash", "Mexanik xossalarni aniqlash", "Sifat sinovlari"],
      status: "ishlaydi", note: "", img: "assets/img/image46.png"
    },
    {
      id: 47, lab: "standart", name: "Vattmetr (Ainuo)", model: "AN8721P(F)",
      func: "Qurilma elektr energiyasi parametrlarini nazorat va tahlil qilish",
      desc: "Aniq vattmetr — qurilmalarning elektr energiyasi parametrlarini (quvvat, tok, kuchlanish) yuqori aniqlikda o'lchaydi.",
      caps: ["Quvvat, tok, kuchlanish o'lchash", "Yuqori o'lchov aniqligi", "Energiya parametrlari tahlili", "Raqamli ko'rsatkich"],
      works: ["Qurilma energiya sarfini o'lchash", "Elektr parametrlari nazorati", "Sinov o'lchovlari"],
      status: "ishlaydi", note: "", img: "assets/img/image47.jpeg"
    },
    {
      id: 48, lab: "standart", name: "Elektr xavfsizligi testeri (INSTEK)", model: "GPT-9803",
      func: "Elektr xavfsizligi va ishlashini tekshirish",
      desc: "Elektr xavfsizligi testeri — izolyatsiya, kuchlanishga chidamlilik va tok oqishi ko'rsatkichlarini tekshiradi.",
      caps: ["Izolyatsiya qarshiligini o'lchash", "Yuqori kuchlanishga chidamlilik sinovi", "Tok oqishini nazorat", "Elektr xavfsizligi sertifikatsiyasi"],
      works: ["Elektr uskunalarini xavfsizlik testi", "Izolyatsiya nazorati", "Sinov hisobotlari"],
      status: "ishlaydi", note: "", img: "assets/img/image48.jpeg"
    },

    // ===================== ELEKTRONIKA & ROBOTOTEXNIKA LABORATORIYASI (R-1) =====================
    {
      id: 49, lab: "elektronika", name: "Wiiboox W400 (3D printer)", model: "W400",
      func: "3D printer (FDM)",
      desc: "FDM texnologiyali 3D printer — plastik filamentdan modellar va prototiplar chop etadi.",
      caps: ["FDM plastik bosma", "Prototip va modellar", "Turli filamentlar", "Sozlanadigan bosma sifati"],
      works: ["Prototip chop etish", "Maket va modellar", "Plastik detallar"],
      status: "tamir", note: "Dasturiy ta'minoti va ehtiyot qismlari ta'mirtalab.", img: "assets/img/image49.png"
    },
    {
      id: 50, lab: "elektronika", name: "SMT Pick and Place mashinasi", model: "Neoden4",
      func: "SMD turdagi detallarni plataga joylash",
      desc: "SMD pick-and-place mashinasi — bosma plataga (PCB) mayda SMD komponentlarni avtomatik joylaydi.",
      caps: ["SMD komponentlarni avtomatik joylash", "Aniq pozitsiyalash", "Kichik seriyali yig'ish", "Turli korpus o'lchamlari"],
      works: ["PCB platalarini yig'ish", "Prototip elektronika ishlab chiqarish", "Kichik seriyali montaj"],
      status: "ishlaydi", note: "", img: "assets/img/image50.jpeg"
    },
    {
      id: 51, lab: "elektronika", name: "IC Chip ta'mirlash stansiyasi", model: "",
      func: "Oyoqchali (IC/BGA) radio detallarni payvandlash",
      desc: "BGA/IC mikrosxemalarni payvandlash va ta'mirlash uchun issiq havoli payvand stansiyasi.",
      caps: ["BGA/IC chiplarni payvandlash", "Issiqlik bilan aniq ishlov", "Mikrosxemalarni ta'mirlash", "Reflow jarayoni"],
      works: ["Anakart va plata ta'miri", "IC chiplarni almashtirish", "Elektronika ta'mirlash"],
      status: "ishlaydi", note: "", img: "assets/img/image51.jpeg"
    },
    {
      id: 52, lab: "elektronika", name: "Yihua 862bd+ payvand stansiyasi", model: "862BD+", qty: 6,
      func: "Radio detallarni payvandlash",
      desc: "Issiq havoli va payvandlagichli 2-in-1 payvand stansiyasi — radio detallarni payvandlash va lehimlash uchun.",
      caps: ["Issiq havo + payvandlagich", "SMD va oyoqchali detallar", "Sozlanadigan harorat", "Ta'mir va montaj ishlari"],
      works: ["Radio detallarni payvandlash", "Plata ta'miri", "Elektronika montaji"],
      status: "tamir", note: "6 ta mavjud; 3 tasi ishchi holatida, 3 tasi ta'mirtalab.", img: "assets/img/image52.jpeg"
    },
    {
      id: 53, lab: "elektronika", name: "Tutun so'rg'ich (dudkash)", model: "DX1001",
      func: "Payvandlash tutunlarini so'rish",
      desc: "Payvandlash jarayonida hosil bo'ladigan tutun va zararli gazlarni so'rib tozalovchi uskuna.",
      caps: ["Payvand tutunini so'rish", "Havoni filtrlash", "Ish joyini sog'lomlashtirish", "Past shovqinli ish"],
      works: ["Payvand joyida havoni tozalash", "Tutun va zaharli gazlarni yutish", "Ish muhitini himoyalash"],
      status: "ishlaydi", note: "", img: "assets/img/image53.jpeg"
    },
    {
      id: 54, lab: "elektronika", name: "HTC Vive Pro (VR)", model: "Vive Pro", qty: 4,
      func: "VR ko'zoynaklari",
      desc: "Yuqori aniqlikdagi virtual reallik (VR) ko'zoynaklari — immersiv simulyatsiya va vizualizatsiya uchun.",
      caps: ["Yuqori sifatli VR tasvir", "Harakatni aniq kuzatish", "Immersiv 3D muhit", "Simulyatsiya va o'quv"],
      works: ["VR simulyatsiya va o'qitish", "3D loyihalarni vizualizatsiya", "Virtual prototiplash"],
      status: "ishlaydi", note: "4 ta mavjud.", img: "assets/img/image54.jpeg"
    },
    {
      id: 55, lab: "elektronika", name: "Laboratoriya quvvat manbai (Zhaoxin)", model: "RXN-605D", qty: 2,
      func: "Laboratoriya quvvat manbai",
      desc: "Sozlanadigan laboratoriya quvvat manbai — elektron sxemalarni sinash uchun barqaror kuchlanish va tok beradi.",
      caps: ["Sozlanadigan kuchlanish va tok", "Barqaror quvvat ta'minoti", "Himoya tizimlari", "Aniq raqamli ko'rsatkich"],
      works: ["Elektron sxemalarni sinash", "Laboratoriya tajribalari", "Qurilmalarni quvvatlash"],
      status: "tamir", note: "2 ta mavjud; 1 tasi ishchi holatida, 1 tasi ta'mirtalab.", img: "assets/img/image55.jpeg"
    },
    {
      id: 56, lab: "elektronika", name: "FANUC Education o'quv roboti", model: "FANUC",
      func: "Ishlab chiqarish o'quv roboti",
      desc: "FANUC o'quv robototexnika tizimi — sanoat avtomatlashtirish va robot dasturlashni o'rganish uchun.",
      caps: ["Sanoat robotini dasturlash", "Avtomatlashtirishni o'rganish", "Xavfsiz o'quv platformasi", "Amaliy robototexnika"],
      works: ["Robot dasturlashni o'rgatish", "Avtomatlashtirish loyihalari", "Amaliy mashg'ulotlar"],
      status: "ishlaydi", note: "", img: "assets/img/image56.jpeg"
    }
  ]
};
