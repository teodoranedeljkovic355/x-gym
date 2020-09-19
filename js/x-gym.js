var dynamic_core_termin = [];
dynamic_core_termin.push(["21:30", "0", "20:00", "0", "21:30", "0", "0"]);
var burn_core_termin = [];
burn_core_termin.push(["0", "18:30", "18:30", "0", "0", "11:00", "0"]);
var hiit_core_termin = [];
hiit_core_termin.push(["0", "15:00", "0", "19:00", "0", "0", "17:00"]);
var bodyattack_core_termin = [];
bodyattack_core_termin.push([
  "20:00",
  "20:00",
  "20:00",
  "20:00",
  "20:00",
  "20:00",
  "20:00",
]);
var klasicni_pilates_termin = [];
klasicni_pilates_termin.push(["21:30", "0", "20:00", "0", "21:30", "0", "0"]);
var stott_pilates_termin = [];
stott_pilates_termin.push(["0", "18:30", "18:30", "0", "0", "11:00", "0"]);
var reformer_pilates_termin = [];
reformer_pilates_termin.push(["0", "15:00", "0", "19:00", "0", "0", "17:00"]);
var terapijski_pilates_termin = [];
terapijski_pilates_termin.push(["20:00", "0", "0", "20:00", "0", "20:00", "0"]);
var prenatal_yoga_termin = [];
prenatal_yoga_termin.push(["21:30", "0", "20:00", "0", "21:30", "0", "0"]);
var kundalini_yoga_termin = [];
kundalini_yoga_termin.push(["0", "18:30", "18:30", "0", "0", "11:00", "0"]);
var hatha_yoga_termin = [];
hatha_yoga_termin.push(["0", "15:00", "0", "19:00", "0", "0", "17:00"]);
var ashtanga_yoga_termin = [];
ashtanga_yoga_termin.push(["20:00", "0", "0", "20:00", "0", "20:00", "0"]);
var klasicni_cardio_termin = [];
klasicni_cardio_termin.push(["21:30", "0", "20:00", "0", "21:30", "0", "0"]);
var hiit_cardio_termin = [];
hiit_cardio_termin.push(["0", "18:30", "18:30", "0", "0", "11:00", "0"]);
var bodycombat_cardio_termin = [];
bodycombat_cardio_termin.push(["0", "15:00", "0", "19:00", "0", "0", "17:00"]);
var zumba_cardio_termin = [];
zumba_cardio_termin.push(["20:00", "0", "0", "20:00", "0", "20:00", "0"]);
var dynamic_core_komentar = [];
var burn_core_komentar = [];
var hiit_core_komentar = [];
var bodyattack_core_komentar = [];
var klasicni_pilates_komentar = [];
var stott_pilates_komentar = [];
var reformer_pilates_komentar = [];
var terapijski_pilates_komentar = [];
var prenatal_yoga_komentar = [];
var kundalini_yoga_komentar = [];
var hatha_yoga_komentar = [];
var ashtanga_yoga_komentar = [];
var klasicni_cardio_komentar = [];
var hiit_cardio_komentar = [];
var bodycombat_cardio_komentar = [];
var zumba_cardio_komentar = [];
var bread_crumbs = [];
var tip_treninga = "core";
var trening;
var najbolji;
var drugi_najbolji;
var treci_najbolji;
function changeLanguage(num, page) {
  let str;
  if (num == 1) {
    str = "1";
  } else {
    str = "0";
  }
  if (localStorage.getItem("jezik") == str) {
  } else {
    localStorage.setItem("jezik", str);

    promeni_stranice_u_brdcrm(page);
    window.location.href = page;
    ispisi_bread_crumbs();
  }
}
function promeni_stranice_u_brdcrm(page) {
  if (page == "index.html" || page == "index_eng.html") {
  } else {
    bread_crumbs = JSON.parse(localStorage.getItem("bread"));
    for (i = 0; i < bread_crumbs.length; i++) {
      if (localStorage.getItem("jezik") == "0") {
        if (bread_crumbs[i] == "index_eng.html") {
          bread_crumbs[i] = "index.html";
        } else if (bread_crumbs[i] == "cardio_eng.html") {
          bread_crumbs[i] = "cardio.html";
        } else if (bread_crumbs[i] == "classes_eng.html") {
          bread_crumbs[i] = "classes.html";
        } else if (bread_crumbs[i] == "core_eng.html") {
          bread_crumbs[i] = "core.html";
        } else if (bread_crumbs[i] == "masaze_eng.html") {
          bread_crumbs[i] = "masaze.html";
        } else if (bread_crumbs[i] == "nalog_eng.html") {
          bread_crumbs[i] = "nalog.html";
        } else if (bread_crumbs[i] == "nutricionista_eng.html") {
          bread_crumbs[i] = "nutricionista.html";
        } else if (bread_crumbs[i] == "onama_eng.html") {
          bread_crumbs[i] = "onama.html";
        } else if (bread_crumbs[i] == "pilates_eng.html") {
          bread_crumbs[i] = "pilates.html";
        } else if (bread_crumbs[i] == "treninzi_eng.html") {
          bread_crumbs[i] = "treninzi.html";
        } else if (bread_crumbs[i] == "yoga_eng.html") {
          bread_crumbs[i] = "yoga.html";
        } else if (bread_crumbs[i] == "zakazivanje_eng.html") {
          bread_crumbs[i] = "zakazivanje.html";
        }
      } else if (localStorage.getItem("jezik") == "1") {
        if (bread_crumbs[i] == "index.html") {
          bread_crumbs[i] = "index_eng.html";
        } else if (bread_crumbs[i] == "cardio.html") {
          bread_crumbs[i] = "cardi_eng.html";
        } else if (bread_crumbs[i] == "classes.html") {
          bread_crumbs[i] = "classes_eng.html";
        } else if (bread_crumbs[i] == "core.html") {
          bread_crumbs[i] = "core_eng.html";
        } else if (bread_crumbs[i] == "masaze.html") {
          bread_crumbs[i] = "masaze_eng.html";
        } else if (bread_crumbs[i] == "nalog.html") {
          bread_crumbs[i] = "nalog_eng.html";
        } else if (bread_crumbs[i] == "nutricionista.html") {
          bread_crumbs[i] = "nutricionista_eng.html";
        } else if (bread_crumbs[i] == "onama.html") {
          bread_crumbs[i] = "onama_eng.html";
        } else if (bread_crumbs[i] == "pilates.html") {
          bread_crumbs[i] = "pilates_neg.html";
        } else if (bread_crumbs[i] == "treninzi.html") {
          bread_crumbs[i] = "treninzi_eng.html";
        } else if (bread_crumbs[i] == "yoga.html") {
          bread_crumbs[i] = "yoga_eng.html";
        } else if (bread_crumbs[i] == "zakazivanje.html") {
          bread_crumbs[i] = "zakazivanje_eng.html";
        }
      }
    }

    localStorage.setItem("bread", JSON.stringify(bread_crumbs));
  }
}
function oceni_klasicni_cardio() {
  if (localStorage.getItem("klasicni_cardio_odradjen") == "1") {
    if (document.getElementById("klasicni_cardio_1").checked) {
      localStorage.setItem("klasicni_cardio_ocenjen", "1");
      localStorage.setItem("klasicni_cardio_ocena", "1");
    } else if (document.getElementById("klasicni_cardio_2").checked) {
      localStorage.setItem("klasicni_cardio_ocenjen", "1");
      localStorage.setItem("klasicni_cardio_ocena", "2");
    } else if (document.getElementById("klasicni_cardio_3").checked) {
      localStorage.setItem("klasicni_cardio_ocenjen", "1");
      localStorage.setItem("klasicni_cardio_ocena", "3");
    } else if (document.getElementById("klasicni_cardio_4").checked) {
      localStorage.setItem("klasicni_cardio_ocenjen", "1");
      localStorage.setItem("klasicni_cardio_ocena", "4");
    } else if (document.getElementById("klasicni_cardio_5").checked) {
      localStorage.setItem("klasicni_cardio_ocenjen", "1");
      localStorage.setItem("klasicni_cardio_ocena", "5");
    }
  } else {
    alert("niste odradili trening pa ne mozete da ga ocenite");
  }
  ispisi_ocene_cardio();
}
function oceni_hiit_cardio() {
  if (localStorage.getItem("hiit_cardio_odradjen") == "1") {
    if (document.getElementById("hiit_cardio_1").checked) {
      localStorage.setItem("hiit_cardio_ocenjen", "1");
      localStorage.setItem("hiit_cardio_ocena", "1");
    } else if (document.getElementById("hiit_cardio_2").checked) {
      localStorage.setItem("hiit_cardio_ocenjen", "1");
      localStorage.setItem("hiit_cardio_ocena", "2");
    } else if (document.getElementById("hiit_cardio_3").checked) {
      localStorage.setItem("hiit_cardio_ocenjen", "1");
      localStorage.setItem("hiit_cardio_ocena", "3");
    } else if (document.getElementById("hiit_cardio_4").checked) {
      localStorage.setItem("hiit_cardio_ocenjen", "1");
      localStorage.setItem("hiit_cardio_ocena", "4");
    } else if (document.getElementById("hiit_cardio_5").checked) {
      localStorage.setItem("hiit_cardio_ocenjen", "1");
      localStorage.setItem("hiit_cardio_ocena", "5");
    }
  } else {
    alert("niste odradili trening pa ne mozete da ga ocenite");
  }
  ispisi_ocene_cardio();
}

function oceni_bodycombat_cardio() {
  if (localStorage.getItem("bodycombat_cardio_odradjen") == "1") {
    if (document.getElementById("bodycombat_cardio_1").checked) {
      localStorage.setItem("bodycombat_cardio_ocenjen", "1");
      localStorage.setItem("bodycombat_cardio_ocena", "1");
    } else if (document.getElementById("bodycombat_cardio_2").checked) {
      localStorage.setItem("bodycombat_cardio_ocenjen", "1");
      localStorage.setItem("bodycombat_cardio_ocena", "2");
    } else if (document.getElementById("bodycombat_cardio_3").checked) {
      localStorage.setItem("bodycombat_cardio_ocenjen", "1");
      localStorage.setItem("bodycombat_cardio_ocena", "3");
    } else if (document.getElementById("bodycombat_cardio_4").checked) {
      localStorage.setItem("bodycombat_cardio_ocenjen", "1");
      localStorage.setItem("bodycombat_cardio_ocena", "4");
    } else if (document.getElementById("bodycombat_cardio_5").checked) {
      localStorage.setItem("bodycombat_cardio_ocenjen", "1");
      localStorage.setItem("bodycombat_cardio_ocena", "5");
    }
  } else {
    alert("niste odradili trening pa ne mozete da ga ocenite");
  }
  ispisi_ocene_cardio();
}

function oceni_zumba_cardio() {
  if (localStorage.getItem("zumba_cardio_odradjen") == "1") {
    if (document.getElementById("zumba_cardio_1").checked) {
      localStorage.setItem("zumba_cardio_ocenjen", "1");
      localStorage.setItem("zumba_cardio_ocena", "1");
    } else if (document.getElementById("zumba_cardio_2").checked) {
      localStorage.setItem("zumba_cardio_ocenjen", "1");
      localStorage.setItem("zumba_cardio_ocena", "2");
    } else if (document.getElementById("zumba_cardio_3").checked) {
      localStorage.setItem("zumba_cardio_ocenjen", "1");
      localStorage.setItem("zumba_cardio_ocena", "3");
    } else if (document.getElementById("zumba_cardio_4").checked) {
      localStorage.setItem("zumba_cardio_ocenjen", "1");
      localStorage.setItem("zumba_cardio_ocena", "4");
    } else if (document.getElementById("zumba_cardio_5").checked) {
      localStorage.setItem("zumba_cardio_ocenjen", "1");
      localStorage.setItem("zumba_cardio_ocena", "5");
    }
  } else {
    alert("niste odradili trening pa ne mozete da ga ocenite");
  }
  ispisi_ocene_cardio();
}
function oceni_prenatal_yoga() {
  if (localStorage.getItem("prenatal_yoga_odradjen") == "1") {
    if (document.getElementById("prenatal_yoga_1").checked) {
      localStorage.setItem("prenatal_yoga_ocenjen", "1");
      localStorage.setItem("prenatal_yoga_ocena", "1");
    } else if (document.getElementById("prenatal_yoga_2").checked) {
      localStorage.setItem("prenatal_yoga_ocenjen", "1");
      localStorage.setItem("prenatal_yoga_ocena", "2");
    } else if (document.getElementById("prenatal_yoga_3").checked) {
      localStorage.setItem("prenatal_yoga_ocenjen", "1");
      localStorage.setItem("prenatal_yoga_ocena", "3");
    } else if (document.getElementById("prenatal_yoga_4").checked) {
      localStorage.setItem("prenatal_yoga_ocenjen", "1");
      localStorage.setItem("prenatal_yoga_ocena", "4");
    } else if (document.getElementById("prenatal_yoga_5").checked) {
      localStorage.setItem("prenatal_yoga_ocenjen", "1");
      localStorage.setItem("prenatal_yoga_ocena", "5");
    }
  } else {
    alert("niste odradili trening pa ne mozete da ga ocenite");
  }
  ispisi_ocene_yoga();
}
function oceni_kundalini_yoga() {
  if (localStorage.getItem("kundalini_yoga_odradjen") == "1") {
    if (document.getElementById("kundalini_yoga_1").checked) {
      localStorage.setItem("kundalini_yoga_ocenjen", "1");
      localStorage.setItem("kundalini_yoga_ocena", "1");
    } else if (document.getElementById("kundalini_yoga_2").checked) {
      localStorage.setItem("kundalini_yoga_ocenjen", "1");
      localStorage.setItem("kundalini_yoga_ocena", "2");
    } else if (document.getElementById("kundalini_yoga_3").checked) {
      localStorage.setItem("kundalini_yoga_ocenjen", "1");
      localStorage.setItem("kundalini_yoga_ocena", "3");
    } else if (document.getElementById("kundalini_yoga_4").checked) {
      localStorage.setItem("kundalini_yoga_ocenjen", "1");
      localStorage.setItem("kundalini_yoga_ocena", "4");
    } else if (document.getElementById("kundalini_yoga_5").checked) {
      localStorage.setItem("kundalini_yoga_ocenjen", "1");
      localStorage.setItem("kundalini_yoga_ocena", "5");
    }
  } else {
    alert("niste odradili trening pa ne mozete da ga ocenite");
  }
  ispisi_ocene_yoga();
}
function oceni_hatha_yoga() {
  if (localStorage.getItem("hatha_yoga_odradjen") == "1") {
    if (document.getElementById("hatha_yoga_1").checked) {
      localStorage.setItem("hatha_yoga_ocenjen", "1");
      localStorage.setItem("hatha_yoga_ocena", "1");
    } else if (document.getElementById("hatha_yoga_2").checked) {
      localStorage.setItem("hatha_yoga_ocenjen", "1");
      localStorage.setItem("hatha_yoga_ocena", "2");
    } else if (document.getElementById("hatha_yoga_3").checked) {
      localStorage.setItem("hatha_yoga_ocenjen", "1");
      localStorage.setItem("hatha_yoga_ocena", "3");
    } else if (document.getElementById("hatha_yoga_4").checked) {
      localStorage.setItem("hatha_yoga_ocenjen", "1");
      localStorage.setItem("hatha_yoga_ocena", "4");
    } else if (document.getElementById("hatha_yoga_5").checked) {
      localStorage.setItem("hatha_yoga_ocenjen", "1");
      localStorage.setItem("hatha_yoga_ocena", "5");
    }
  } else {
    alert("niste odradili trening pa ne mozete da ga ocenite");
  }
  ispisi_ocene_yoga();
}
function oceni_ashtanga_yoga() {
  if (localStorage.getItem("ashtanga_yoga_odradjen") == "1") {
    if (document.getElementById("ashtanga_yoga_1").checked) {
      localStorage.setItem("ashtanga_yoga_ocenjen", "1");
      localStorage.setItem("ashtanga_yoga_ocena", "1");
    } else if (document.getElementById("ashtanga_yoga_2").checked) {
      localStorage.setItem("ashtanga_yoga_ocenjen", "1");
      localStorage.setItem("ashtanga_yoga_ocena", "2");
    } else if (document.getElementById("ashtanga_yoga_3").checked) {
      localStorage.setItem("ashtanga_yoga_ocenjen", "1");
      localStorage.setItem("ashtanga_yoga_ocena", "3");
    } else if (document.getElementById("ashtanga_yoga_4").checked) {
      localStorage.setItem("ashtanga_yoga_ocenjen", "1");
      localStorage.setItem("ashtanga_yoga_ocena", "4");
    } else if (document.getElementById("ashtanga_yoga_5").checked) {
      localStorage.setItem("ashtanga_yoga_ocenjen", "1");
      localStorage.setItem("ashtanga_yoga_ocena", "5");
    }
  } else {
    alert("niste odradili trening pa ne mozete da ga ocenite");
  }
  ispisi_ocene_yoga();
}
function oceni_klasicni_pilates() {
  if (localStorage.getItem("klasicni_pilates_odradjen") == "1") {
    if (document.getElementById("klasicni_pilates_1").checked) {
      localStorage.setItem("klasicni_pilates_ocenjen", "1");
      localStorage.setItem("klasicni_pilates_ocena", "1");
    } else if (document.getElementById("klasicni_pilates_2").checked) {
      localStorage.setItem("klasicni_pilates_ocenjen", "1");
      localStorage.setItem("klasicni_pilates_ocena", "2");
    } else if (document.getElementById("klasicni_pilates_3").checked) {
      localStorage.setItem("klasicni_pilates_ocenjen", "1");
      localStorage.setItem("klasicni_pilates_ocena", "3");
    } else if (document.getElementById("klasicni_pilates_4").checked) {
      localStorage.setItem("klasicni_pilates_ocenjen", "1");
      localStorage.setItem("klasicni_pilates_ocena", "4");
    } else if (document.getElementById("klasicni_pilates_5").checked) {
      localStorage.setItem("klasicni_pilates_ocenjen", "1");
      localStorage.setItem("klasicni_pilates_ocena", "5");
    }
  } else {
    alert("niste odradili trening pa ne mozete da ga ocenite");
  }
  ispisi_ocene_pilates();
}
function oceni_stott_pilates() {
  if (localStorage.getItem("stott_pilates_odradjen") == "1") {
    if (document.getElementById("stott_pilates_1").checked) {
      localStorage.setItem("stott_pilates_ocenjen", "1");
      localStorage.setItem("stott_pilates_ocena", "1");
    } else if (document.getElementById("stott_pilates_2").checked) {
      localStorage.setItem("stott_pilates_ocenjen", "1");
      localStorage.setItem("stott_pilates_ocena", "2");
    } else if (document.getElementById("stott_pilates_3").checked) {
      localStorage.setItem("stott_pilates_ocenjen", "1");
      localStorage.setItem("stott_pilates_ocena", "3");
    } else if (document.getElementById("stott_pilates_4").checked) {
      localStorage.setItem("stott_pilates_ocenjen", "1");
      localStorage.setItem("stott_pilates_ocena", "4");
    } else if (document.getElementById("stott_pilates_5").checked) {
      localStorage.setItem("stott_pilates_ocenjen", "1");
      localStorage.setItem("stott_pilates_ocena", "5");
    }
  } else {
    alert("niste odradili trening pa ne mozete da ga ocenite");
  }
  ispisi_ocene_pilates();
}
function oceni_reformer_pilates() {
  if (localStorage.getItem("reformer_pilates_odradjen") == "1") {
    if (document.getElementById("reformer_pilates_1").checked) {
      localStorage.setItem("reformer_pilates_ocenjen", "1");
      localStorage.setItem("reformer_pilates_ocena", "1");
    } else if (document.getElementById("reformer_pilates_2").checked) {
      localStorage.setItem("reformer_pilates_ocenjen", "1");
      localStorage.setItem("reformer_pilates_ocena", "2");
    } else if (document.getElementById("reformer_pilates_3").checked) {
      localStorage.setItem("reformer_pilates_ocenjen", "1");
      localStorage.setItem("reformer_pilates_ocena", "3");
    } else if (document.getElementById("reformer_pilates_4").checked) {
      localStorage.setItem("reformer_pilates_ocenjen", "1");
      localStorage.setItem("reformer_pilates_ocena", "4");
    } else if (document.getElementById("reformer_pilates_5").checked) {
      localStorage.setItem("reformer_pilates_ocenjen", "1");
      localStorage.setItem("reformer_pilates_ocena", "5");
    }
  } else {
    alert("niste odradili trening pa ne mozete da ga ocenite");
  }
  ispisi_ocene_pilates();
}
function oceni_terapijski_pilates() {
  if (localStorage.getItem("terapijski_pilates_odradjen") == "1") {
    if (document.getElementById("terapijski_pilates_1").checked) {
      localStorage.setItem("terapijski_pilates_ocenjen", "1");
      localStorage.setItem("terapijski_pilates_ocena", "1");
    } else if (document.getElementById("terapijski_pilates_2").checked) {
      localStorage.setItem("terapijski_pilates_ocenjen", "1");
      localStorage.setItem("terapijski_pilates_ocena", "2");
    } else if (document.getElementById("terapijski_pilates_3").checked) {
      localStorage.setItem("terapijski_pilates_ocenjen", "1");
      localStorage.setItem("terapijski_pilates_ocena", "3");
    } else if (document.getElementById("terapijski_pilates_4").checked) {
      localStorage.setItem("terapijski_pilates_ocenjen", "1");
      localStorage.setItem("terapijski_pilates_ocena", "4");
    } else if (document.getElementById("terapijski_pilates_5").checked) {
      localStorage.setItem("terapijski_pilates_ocenjen", "1");
      localStorage.setItem("terapijski_pilates_ocena", "5");
    }
  } else {
    alert("niste odradili trening pa ne mozete da ga ocenite");
  }
  ispisi_ocene_pilates();
}
function oceni_dynamic() {
  if (localStorage.getItem("dynamic_odradjen") == "1") {
    if (document.getElementById("dynamic_1").checked) {
      localStorage.setItem("dynamic_ocenjen", "1");
      localStorage.setItem("dynamic_ocena", "1");
    } else if (document.getElementById("dynamic_2").checked) {
      localStorage.setItem("dynamic_ocenjen", "1");
      localStorage.setItem("dynamic_ocena", "2");
    } else if (document.getElementById("dynamic_3").checked) {
      localStorage.setItem("dynamic_ocenjen", "1");
      localStorage.setItem("dynamic_ocena", "3");
    } else if (document.getElementById("dynamic_4").checked) {
      localStorage.setItem("dynamic_ocenjen", "1");
      localStorage.setItem("dynamic_ocena", "4");
    } else if (document.getElementById("dynamic_5").checked) {
      localStorage.setItem("dynamic_ocenjen", "1");
      localStorage.setItem("dynamic_ocena", "5");
    }
  } else {
    alert("niste odradili trening pa ne mozete da ga ocenite");
  }
  ispisi_ocene_core();
}
function oceni_burn() {
  if (localStorage.getItem("burn_odradjen") == "1") {
    if (document.getElementById("burn_1").checked) {
      localStorage.setItem("burn_ocenjen", "1");
      localStorage.setItem("burn_ocena", "1");
    } else if (document.getElementById("burn_2").checked) {
      localStorage.setItem("burn_ocenjen", "1");
      localStorage.setItem("burn_ocena", "2");
    } else if (document.getElementById("burn_3").checked) {
      localStorage.setItem("burn_ocenjen", "1");
      localStorage.setItem("burn_ocena", "3");
    } else if (document.getElementById("burn_4").checked) {
      localStorage.setItem("burn_ocenjen", "1");
      localStorage.setItem("burn_ocena", "4");
    } else if (document.getElementById("burn_5").checked) {
      localStorage.setItem("burn_ocenjen", "1");
      localStorage.setItem("burn_ocena", "5");
    }
  } else {
    alert("niste odradili trening pa ne mozete da ga ocenite");
  }
  ispisi_ocene_core();
}
function oceni_hiit() {
  if (localStorage.getItem("hiit_odradjen") == "1") {
    if (document.getElementById("hiit_1").checked) {
      localStorage.setItem("hiit_ocenjen", "1");
      localStorage.setItem("hiit_ocena", "1");
    } else if (document.getElementById("hiit_2").checked) {
      localStorage.setItem("hiit_ocenjen", "1");
      localStorage.setItem("hiit_ocena", "2");
    } else if (document.getElementById("hiit_3").checked) {
      localStorage.setItem("hiit_ocenjen", "1");
      localStorage.setItem("hiit_ocena", "3");
    } else if (document.getElementById("hiit_4").checked) {
      localStorage.setItem("hiit_ocenjen", "1");
      localStorage.setItem("hiit_ocena", "4");
    } else if (document.getElementById("hiit_5").checked) {
      localStorage.setItem("hiit_ocenjen", "1");
      localStorage.setItem("hiit_ocena", "5");
    }
  } else {
    alert("niste odradili trening pa ne mozete da ga ocenite");
  }
  ispisi_ocene_core();
}
function oceni_bodyattack() {
  if (localStorage.getItem("bodyattack_odradjen") == "1") {
    if (document.getElementById("bodyattack_1").checked) {
      localStorage.setItem("bodyattack_ocenjen", "1");
      localStorage.setItem("bodyattack_ocena", "1");
    } else if (document.getElementById("bodyattack_2").checked) {
      localStorage.setItem("bodyattack_ocenjen", "1");
      localStorage.setItem("bodyattack_ocena", "2");
    } else if (document.getElementById("bodyattack_3").checked) {
      localStorage.setItem("bodyattack_ocenjen", "1");
      localStorage.setItem("bodyattack_ocena", "3");
    } else if (document.getElementById("bodyattack_4").checked) {
      localStorage.setItem("bodyattack_ocenjen", "1");
      localStorage.setItem("bodyattack_ocena", "4");
    } else if (document.getElementById("bodyattack_5").checked) {
      localStorage.setItem("bodyattack_ocenjen", "1");
      localStorage.setItem("bodyattack_ocena", "5");
    }
  } else {
    alert("niste odradili trening pa ne mozete da ga ocenite");
  }
  ispisi_ocene_core();
}
function ispisi_ocene_core() {
  odradjen_trening();
  document.getElementById("dynamic_ocena").innerHTML =
    localStorage.getItem("dynamic_ocena") + "/5";
  document.getElementById("hiit_ocena").innerHTML =
    localStorage.getItem("hiit_ocena") + "/5";
  document.getElementById("burn_ocena").innerHTML =
    localStorage.getItem("burn_ocena") + "/5";
  document.getElementById("bodyattack_ocena").innerHTML =
    localStorage.getItem("bodyattack_ocena") + "/5";
  ispisi_komentare_dynamic(0);
  ispisi_komentare_hiit(0);
  ispisi_komentare_burn(0);
  ispisi_komentare_bodyattack(0);
}
function ispisi_ocene_yoga() {
  odradjen_trening();
  document.getElementById("prenatal_yoga_ocena").innerHTML =
    localStorage.getItem("prenatal_yoga_ocena") + "/5";
  document.getElementById("kundalini_yoga_ocena").innerHTML =
    localStorage.getItem("kundalini_yoga_ocena") + "/5";
  document.getElementById("hatha_yoga_ocena").innerHTML =
    localStorage.getItem("hatha_yoga_ocena") + "/5";
  document.getElementById("ashtanga_yoga_ocena").innerHTML =
    localStorage.getItem("ashtanga_yoga_ocena") + "/5";
  ispisi_komentare_hatha_yoga(0);
  ispisi_komentare_kundalini_yoga(0);
  ispisi_komentare_prenatal_yoga(0);
  ispisi_komentare_ashtanga_yoga(0);
}
function ispisi_ocene_cardio() {
  odradjen_trening();
  document.getElementById("klasicni_cardio_ocena").innerHTML =
    localStorage.getItem("klasicni_cardio_ocena") + "/5";
  document.getElementById("hiit_cardio_ocena").innerHTML =
    localStorage.getItem("hiit_cardio_ocena") + "/5";
  document.getElementById("bodycombat_cardio_ocena").innerHTML =
    localStorage.getItem("bodycombat_cardio_ocena") + "/5";
  document.getElementById("zumba_cardio_ocena").innerHTML =
    localStorage.getItem("zumba_cardio_ocena") + "/5";
  ispisi_komentare_hiit_cardio(0);
  ispisi_komentare_zumba_cardio(0);
  ispisi_komentare_klasicni_cardio(0);
  ispisi_komentare_bodycombat_cardio(0);
}
function ispisi_ocene_pilates() {
  odradjen_trening();
  document.getElementById("klasicni_pilates_ocena").innerHTML =
    localStorage.getItem("klasicni_pilates_ocena") + "/5";
  document.getElementById("stott_pilates_ocena").innerHTML =
    localStorage.getItem("stott_pilates_ocena") + "/5";
  document.getElementById("reformer_pilates_ocena").innerHTML =
    localStorage.getItem("reformer_pilates_ocena") + "/5";
  document.getElementById("terapijski_pilates_ocena").innerHTML =
    localStorage.getItem("terapijski_pilates_ocena") + "/5";
  ispisi_komentare_klasicni_pilates(0);
  ispisi_komentare_reformer_pilates(0);
  ispisi_komentare_stott_pilates(0);
  ispisi_komentare_terapijski_pilates(0);
}
function set_ocene() {
  if (localStorage.getItem("dynamic_ocenjen") != "1") {
    localStorage.setItem("dinamic_ocenjen", "0");
    localStorage.setItem("dynamic_ocena", "3");
  }
  if (localStorage.getItem("burn_ocenjen") != "1") {
    localStorage.setItem("burn_ocenjen", "0");
    localStorage.setItem("burn_ocena", "2");
  }
  if (localStorage.getItem("hiit_ocenjen") != "1") {
    localStorage.setItem("hiit_ocenjen", "0");
    localStorage.setItem("hiit_ocena", "2");
  }
  if (localStorage.getItem("bodyattack_ocenjen") != "1") {
    localStorage.setItem("bodyattack_ocenjen", "0");
    localStorage.setItem("bodyattack_ocena", "4");
  }
  if (localStorage.getItem("klasicni_pilates_ocenjen") != "1") {
    localStorage.setItem("klasicni_pilates_ocenjen", "0");
    localStorage.setItem("klasicni_pilates_ocena", "1");
  }
  if (localStorage.getItem("stott_pilates_ocenjen") != "1") {
    localStorage.setItem("stott_pilates_ocenjen", "0");
    localStorage.setItem("stott_pilates_ocena", "4");
  }
  if (localStorage.getItem("reformer_pilates_ocenjen") != "1") {
    localStorage.setItem("reformer_pilates_ocenjen", "0");
    localStorage.setItem("reformer_pilates_ocena", "2");
  }
  if (localStorage.getItem("terapijski_pilates_ocenjen") != "1") {
    localStorage.setItem("terapijski_pilates_ocenjen", "0");
    localStorage.setItem("terapijski_pilates_ocena", "1");
  }
  if (localStorage.getItem("prenatal_yoga_ocenjen") != "1") {
    localStorage.setItem("prenatal_yoga_ocenjen", "0");
    localStorage.setItem("prenatal_yoga_ocena", "4");
  }
  if (localStorage.getItem("kundalini_yoga_ocenjen") != "1") {
    localStorage.setItem("kundalini_yoga_ocenjen", "0");
    localStorage.setItem("kundalini_yoga_ocena", "3");
  }
  if (localStorage.getItem("hatha_yoga_ocenjen") != "1") {
    localStorage.setItem("hatha_yoga_ocenjen", "0");
    localStorage.setItem("hatha_yoga_ocena", "3");
  }
  if (localStorage.getItem("ashtanga_yoga_ocenjen") != "1") {
    localStorage.setItem("ashtanga_yoga_ocenjen", "0");
    localStorage.setItem("ashtanga_yoga_ocena", "2");
  }
  if (localStorage.getItem("klasicni_cardio_ocenjen") != "1") {
    localStorage.setItem("klasicni_cardio_ocenjen", "0");
    localStorage.setItem("klasicni_cardio_ocena", "4");
  }
  if (localStorage.getItem("hiit_cardio_ocenjen") != "1") {
    localStorage.setItem("hiit_cardio_ocenjen", "0");
    localStorage.setItem("hiit_cardio_ocena", "3");
  }
  if (localStorage.getItem("bodycombat_cardio_ocenjen") != "1") {
    localStorage.setItem("bodycombat_cardio_ocenjen", "0");
    localStorage.setItem("bodycombat_cardio_ocena", "1");
  }
  if (localStorage.getItem("zumba_cardio_ocenjen") != "1") {
    localStorage.setItem("zumba_cardio_ocenjen", "0");
    localStorage.setItem("zumba_cardio_ocena", "4");
  }
}
function set_komentari() {
  if (localStorage.getItem("dynamic_komentarisan") != "1") {
    localStorage.setItem("dinamic_komentarisan", "0");
  }
  if (localStorage.getItem("burn_komentarisan") != "1") {
    localStorage.setItem("burn_komentarisan", "0");
  }
  if (localStorage.getItem("hiit_komentarisan") != "1") {
    localStorage.setItem("hiit_komentarisan", "0");
  }
  if (localStorage.getItem("bodyattack_komentarisan") != "1") {
    localStorage.setItem("bodyattack_komentarisan", "0");
  }
  if (localStorage.getItem("klasicni_pilates_komentarisan") != "1") {
    localStorage.setItem("klasicni_pilates_komentarisan", "0");
  }
  if (localStorage.getItem("stott_pilates_komentarisan") != "1") {
    localStorage.setItem("stott_pilates_komentarisan", "0");
  }
  if (localStorage.getItem("reformer_pilates_komentarisan") != "1") {
    localStorage.setItem("reformer_pilates_komentarisan", "0");
  }
  if (localStorage.getItem("terapijski_pilates_komentarisan") != "1") {
    localStorage.setItem("terapijski_pilates_komentarisan", "0");
  }
  if (localStorage.getItem("prenatal_yoga_komentarisan") != "1") {
    localStorage.setItem("prenatal_yoga_komentarisan", "0");
  }
  if (localStorage.getItem("kundalini_yoga_komentarisan") != "1") {
    localStorage.setItem("kundalini_yoga_komentarisan", "0");
  }
  if (localStorage.getItem("hatha_yoga_komentarisan") != "1") {
    localStorage.setItem("hatha_yoga_komentarisan", "0");
  }
  if (localStorage.getItem("ashtanga_yoga_komentarisan") != "1") {
    localStorage.setItem("ashtanga_yoga_komentarisan", "0");
  }
  if (localStorage.getItem("klasicni_cardio_komentarisan") != "1") {
    localStorage.setItem("klasicni_cardio_komentarisan", "0");
  }
  if (localStorage.getItem("hiit_cardio_komentarisan") != "1") {
    localStorage.setItem("hiit_cardio_komentarisan", "0");
  }
  if (localStorage.getItem("bodycombat_cardio_komentarisan") != "1") {
    localStorage.setItem("bodycombat_cardio_komentarisan", "0");
  }
  if (localStorage.getItem("zumba_cardio_komentarisan") != "1") {
    localStorage.setItem("zumba_cardio_komentarisan", "0");
  }
}
function set_jezik(num) {
  set_ocene();
  set_komentari();
  izbaci_najbolji_trening();
  izbaci_drugi_najbolji();
  izbaci_treci_najbolji();
  if (num == 0) {
    localStorage.setItem("jezik", "0");
  } else {
    localStorage.setItem("jezik", "1");
  }
}
function izbaci_treci_najbolji() {
  let prvi;
  prvi = 0;

  if (
    parseInt(localStorage.getItem("dynamic_ocena")) > prvi &&
    najbolji != "Dynamic core" &&
    drugi_najbolji != "Dynamic core"
  ) {
    prvi = parseInt(localStorage.getItem("dynamic_ocena"));
    treci_najbolji = "Dynamic core";
  }
  if (
    parseInt(localStorage.getItem("burn_ocena")) > prvi &&
    najbolji != "Core BURN" &&
    drugi_najbolji != "Core BURN"
  ) {
    prvi = parseInt(localStorage.getItem("burn_ocena"));
    treci_najbolji = "Core BURN";
  }
  if (
    parseInt(localStorage.getItem("hiit_ocena")) > prvi &&
    najbolji != "Core HIIT" &&
    drugi_najbolji != "Core HIIT"
  ) {
    prvi = parseInt(localStorage.getItem("hiit_ocena"));
    treci_najbolji = "Core HIIT";
  }
  if (
    parseInt(localStorage.getItem("bodyattack_ocena")) > prvi &&
    najbolji != "Core BODYATTACK" &&
    drugi_najbolji != "Core BODYATTACK"
  ) {
    prvi = parseInt(localStorage.getItem("bodyattack_ocena"));
    treci_najbolji = "Core BODYATTACK";
  }
  if (
    parseInt(localStorage.getItem("klasicni_pilates_ocena")) > prvi &&
    najbolji != "Klasicni pilates" &&
    drugi_najbolji != "Klasicni pilates"
  ) {
    prvi = parseInt(localStorage.getItem("klasicni_pilates_ocena"));
    treci_najbolji = "Klasicni pilates";
  }
  if (
    parseInt(localStorage.getItem("stott_pilates_ocena")) > prvi &&
    najbolji != "Stott pilates" &&
    drugi_najbolji != "Stott pilates"
  ) {
    prvi = parseInt(localStorage.getItem("stott_pilates_ocena"));
    treci_najbolji = "Stott pilates";
  }
  if (
    parseInt(localStorage.getItem("reformer_pilates_ocena")) > prvi &&
    najbolji != "Reformer pilates" &&
    drugi_najbolji != "Reformer pilates"
  ) {
    prvi = parseInt(localStorage.getItem("reformer_pilates_ocena"));
    treci_najbolji = "Reformer pilates";
  }
  if (
    parseInt(localStorage.getItem("terapijski_pilates_ocena")) > prvi &&
    najbolji != "Terapijski pilates" &&
    drugi_najbolji != "Terapijski pilates"
  ) {
    prvi = parseInt(localStorage.getItem("terapijski_pilates_ocena"));
    treci_najbolji = "Terapijski pilates";
  }
  if (
    parseInt(localStorage.getItem("prenatal_yoga_ocena")) > prvi &&
    najbolji != "Prenatal yoga" &&
    drugi_najbolji != "Prenatal yoga"
  ) {
    prvi = parseInt(localStorage.getItem("prenatal_yoga_ocena"));
    treci_najbolji = "Prenatal yoga";
  }
  if (
    parseInt(localStorage.getItem("kundalini_yoga_ocena")) > prvi &&
    najbolji != "Kundalini yoga" &&
    drugi_najbolji != "Kundalini yoga"
  ) {
    prvi = parseInt(localStorage.getItem("kundalini_yoga_ocena"));
    treci_najbolji = "Kundalini yoga";
  }
  if (
    parseInt(localStorage.getItem("hatha_yoga_ocena")) > prvi &&
    najbolji != "Hatha yoga" &&
    drugi_najbolji != "Hatha yoga"
  ) {
    prvi = parseInt(localStorage.getItem("hatha_yoga_ocena"));
    treci_najbolji = "Hatha yoga";
  }
  if (
    parseInt(localStorage.getItem("ashtanga_yoga_ocena")) > prvi &&
    najbolji != "Ashtanga yoga" &&
    drugi_najbolji != "Ashtanga yoga"
  ) {
    prvi = parseInt(localStorage.getItem("ashtanga_yoga_ocena"));
    treci_najbolji = "Ashtanga yoga";
  }
  if (
    parseInt(localStorage.getItem("klasicni_cardio_ocena")) > prvi &&
    najbolji != "Klasicni cardio" &&
    drugi_najbolji != "Klasicni cardio"
  ) {
    prvi = parseInt(localStorage.getItem("klasicni_cardio_ocena"));
    treci_najbolji = "Klasicni cardio";
  }
  if (
    parseInt(localStorage.getItem("hiit_cardio_ocena")) > prvi &&
    najbolji != "HIIT cardio" &&
    drugi_najbolji != "HIIT cardio"
  ) {
    prvi = parseInt(localStorage.getItem("hiit_cardio_ocena"));
    treci_najbolji = "HIIT cardio";
  }
  if (
    parseInt(localStorage.getItem("bodycombat_cardio_ocena")) > prvi &&
    najbolji != "Cardio bodycombat" &&
    drugi_najbolji != "Cardio bodycombat"
  ) {
    prvi = parseInt(localStorage.getItem("bodycombat_cardio_ocena"));
    treci_najbolji = "Cardio bodycombat";
  }
  if (
    parseInt(localStorage.getItem("zumba_cardio_ocena")) > prvi &&
    najbolji != "Zumba cardio" &&
    drugi_najbolji != "Zumba cardio"
  ) {
    prvi = parseInt(localStorage.getItem("zumba_cardio_ocena"));
    treci_najbolji = "Zumba cardio";
  }
  document.getElementById("treci_najbolji").innerHTML = treci_najbolji;
}
function izbaci_drugi_najbolji() {
  let prvi;
  prvi = 0;

  if (
    parseInt(localStorage.getItem("dynamic_ocena")) > prvi &&
    najbolji != "Dynamic core"
  ) {
    prvi = parseInt(localStorage.getItem("dynamic_ocena"));
    drugi_najbolji = "Dynamic core";
  }
  if (
    parseInt(localStorage.getItem("burn_ocena")) > prvi &&
    najbolji != "Core BURN"
  ) {
    prvi = parseInt(localStorage.getItem("burn_ocena"));
    drugi_najbolji = "Core BURN";
  }
  if (
    parseInt(localStorage.getItem("hiit_ocena")) > prvi &&
    najbolji != "Core HIIT"
  ) {
    prvi = parseInt(localStorage.getItem("hiit_ocena"));
    drugi_najbolji = "Core HIIT";
  }
  if (
    parseInt(localStorage.getItem("bodyattack_ocena")) > prvi &&
    najbolji != "Core BODYATTACK"
  ) {
    prvi = parseInt(localStorage.getItem("bodyattack_ocena"));
    drugi_najbolji = "Core BODYATTACK";
  }
  if (
    parseInt(localStorage.getItem("klasicni_pilates_ocena")) > prvi &&
    najbolji != "Klasicni pilates"
  ) {
    prvi = parseInt(localStorage.getItem("klasicni_pilates_ocena"));
    drugi_najbolji = "Klasicni pilates";
  }
  if (
    parseInt(localStorage.getItem("stott_pilates_ocena")) > prvi &&
    najbolji != "Stott pilates"
  ) {
    prvi = parseInt(localStorage.getItem("stott_pilates_ocena"));
    drugi_najbolji = "Stott pilates";
  }
  if (
    parseInt(localStorage.getItem("reformer_pilates_ocena")) > prvi &&
    najbolji != "Reformer pilates"
  ) {
    prvi = parseInt(localStorage.getItem("reformer_pilates_ocena"));
    drugi_najbolji = "Reformer pilates";
  }
  if (
    parseInt(localStorage.getItem("terapijski_pilates_ocena")) > prvi &&
    najbolji != "Terapijski pilates"
  ) {
    prvi = parseInt(localStorage.getItem("terapijski_pilates_ocena"));
    drugi_najbolji = "Terapijski pilates";
  }
  if (
    parseInt(localStorage.getItem("prenatal_yoga_ocena")) > prvi &&
    najbolji != "Prenatal yoga"
  ) {
    prvi = parseInt(localStorage.getItem("prenatal_yoga_ocena"));
    drugi_najbolji = "Prenatal yoga";
  }
  if (
    parseInt(localStorage.getItem("kundalini_yoga_ocena")) > prvi &&
    najbolji != "Kundalini yoga"
  ) {
    prvi = parseInt(localStorage.getItem("kundalini_yoga_ocena"));
    drugi_najbolji = "Kundalini yoga";
  }
  if (
    parseInt(localStorage.getItem("hatha_yoga_ocena")) > prvi &&
    najbolji != "Hatha yoga"
  ) {
    prvi = parseInt(localStorage.getItem("hatha_yoga_ocena"));
    drugi_najbolji = "Hatha yoga";
  }
  if (
    parseInt(localStorage.getItem("ashtanga_yoga_ocena")) > prvi &&
    najbolji != "Ashtanga yoga"
  ) {
    prvi = parseInt(localStorage.getItem("ashtanga_yoga_ocena"));
    drugi_najbolji = "Ashtanga yoga";
  }
  if (
    parseInt(localStorage.getItem("klasicni_cardio_ocena")) > prvi &&
    najbolji != "Klasicni cardio"
  ) {
    prvi = parseInt(localStorage.getItem("klasicni_cardio_ocena"));
    drugi_najbolji = "Klasicni cardio";
  }
  if (
    parseInt(localStorage.getItem("hiit_cardio_ocena")) > prvi &&
    najbolji != "HIIT cardio"
  ) {
    prvi = parseInt(localStorage.getItem("hiit_cardio_ocena"));
    drugi_najbolji = "HIIT cardio";
  }
  if (
    parseInt(localStorage.getItem("bodycombat_cardio_ocena")) > prvi &&
    najbolji != "Cardio bodycombat"
  ) {
    prvi = parseInt(localStorage.getItem("bodycombat_cardio_ocena"));
    drugi_najbolji = "Cardio bodycombat";
  }
  if (
    parseInt(localStorage.getItem("zumba_cardio_ocena")) > prvi &&
    najbolji != "Zumba cardio"
  ) {
    prvi = parseInt(localStorage.getItem("zumba_cardio_ocena"));
    drugi_najbolji = "Zumba cardio";
  }
  document.getElementById("drugi_najbolji").innerHTML = drugi_najbolji;
}
function izbaci_najbolji_trening() {
  let prvi;
  prvi = 0;

  if (parseInt(localStorage.getItem("dynamic_ocena")) > prvi) {
    prvi = parseInt(localStorage.getItem("dynamic_ocena"));
    najbolji = "Dynamic core";
  }
  if (parseInt(localStorage.getItem("burn_ocena")) > prvi) {
    prvi = parseInt(localStorage.getItem("burn_ocena"));
    najbolji = "Core BURN";
  }
  if (parseInt(localStorage.getItem("hiit_ocena")) > prvi) {
    prvi = parseInt(localStorage.getItem("hiit_ocena"));
    najbolji = "Core HIIT";
  }
  if (parseInt(localStorage.getItem("bodyattack_ocena")) > prvi) {
    prvi = parseInt(localStorage.getItem("bodyattack_ocena"));
    najbolji = "Core BODYATTACK";
  }
  if (parseInt(localStorage.getItem("klasicni_pilates_ocena")) > prvi) {
    prvi = parseInt(localStorage.getItem("klasicni_pilates_ocena"));
    najbolji = "Klasicni pilates";
  }
  if (parseInt(localStorage.getItem("stott_pilates_ocena")) > prvi) {
    prvi = parseInt(localStorage.getItem("stott_pilates_ocena"));
    najbolji = "Stott pilates";
  }
  if (parseInt(localStorage.getItem("reformer_pilates_ocena")) > prvi) {
    prvi = parseInt(localStorage.getItem("reformer_pilates_ocena"));
    najbolji = "Reformer pilates";
  }
  if (parseInt(localStorage.getItem("terapijski_pilates_ocena")) > prvi) {
    prvi = parseInt(localStorage.getItem("terapijski_pilates_ocena"));
    najbolji = "Terapijski pilates";
  }
  if (parseInt(localStorage.getItem("prenatal_yoga_ocena")) > prvi) {
    prvi = parseInt(localStorage.getItem("prenatal_yoga_ocena"));
    najbolji = "Prenatal yoga";
  }
  if (parseInt(localStorage.getItem("kundalini_yoga_ocena")) > prvi) {
    prvi = parseInt(localStorage.getItem("kundalini_yoga_ocena"));
    najbolji = "Kundalini yoga";
  }
  if (parseInt(localStorage.getItem("hatha_yoga_ocena")) > prvi) {
    prvi = parseInt(localStorage.getItem("hatha_yoga_ocena"));
    najbolji = "Hatha yoga";
  }
  if (parseInt(localStorage.getItem("ashtanga_yoga_ocena")) > prvi) {
    prvi = parseInt(localStorage.getItem("ashtanga_yoga_ocena"));
    najbolji = "Ashtanga yoga";
  }
  if (parseInt(localStorage.getItem("klasicni_cardio_ocena")) > prvi) {
    prvi = parseInt(localStorage.getItem("klasicni_cardio_ocena"));
    najbolji = "Klasicni cardio";
  }
  if (parseInt(localStorage.getItem("hiit_cardio_ocena")) > prvi) {
    prvi = parseInt(localStorage.getItem("hiit_cardio_ocena"));
    najbolji = "HIIT cardio";
  }
  if (parseInt(localStorage.getItem("bodycombat_cardio_ocena")) > prvi) {
    prvi = parseInt(localStorage.getItem("bodycombat_cardio_ocena"));
    najbolji = "Cardio bodycombat";
  }
  if (parseInt(localStorage.getItem("zumba_cardio_ocena")) > prvi) {
    prvi = parseInt(localStorage.getItem("zumba_cardio_ocena"));
    najbolji = "Zumba cardio";
  }
  document.getElementById("prvi_najbolji").innerHTML = najbolji;
}
function bread_crm(num) {
  bread_crumbs = JSON.parse(localStorage.getItem("bread"));
  if (bread_crumbs.length < num) {
  } else {
    i = bread_crumbs.length;
    let tmp = bread_crumbs[num - 1];
    while (i >= num) {
      bread_crumbs.pop();
      i = bread_crumbs.length;
    }
    localStorage.setItem("bread", JSON.stringify(bread_crumbs));
    window.location.href = tmp;
  }
}
function ispisi_bread_crumbs() {
  bread_crumbs = JSON.parse(localStorage.getItem("bread"));
  for (i = 0; i < bread_crumbs.length; i++) {
    document.getElementById(i + 1).innerHTML = bread_crumbs[i] + " > ";
  }
}
function promeni_stranicu(loc, promena) {
  let istina = true;
  for (i = 0; i < bread_crumbs.length; i++) {
    if (bread_crumbs[i] == promena) {
      while (bread_crumbs.length > i) {
        bread_crumbs.pop();
      }
      localStorage.setItem("bread", JSON.stringify(bread_crumbs));
      window.location.href = promena;
      istina = false;
      break;
    }
  }
  if (istina) {
    if (loc == "index.html") {
      bread_crumbs.push("index.html");
      localStorage.setItem("bread", JSON.stringify(bread_crumbs));
      window.location.href = promena;
    } else if (loc == "cardio.html") {
      bread_crumbs.push("cardio.html");
      localStorage.setItem("bread", JSON.stringify(bread_crumbs));
      window.location.href = promena;
    } else if (loc == "classes.html") {
      bread_crumbs.push("classes.html");
      localStorage.setItem("bread", JSON.stringify(bread_crumbs));
      window.location.href = promena;
    } else if (loc == "elements.html") {
      bread_crumbs.push("elements.html");
      localStorage.setItem("bread", JSON.stringify(bread_crumbs));
      window.location.href = promena;
    } else if (loc == "masaze.html") {
      bread_crumbs.push("masaze.html");
      localStorage.setItem("bread", JSON.stringify(bread_crumbs));
      window.location.href = promena;
    } else if (loc == "core.html") {
      bread_crumbs.push("core.html");
      localStorage.setItem("bread", JSON.stringify(bread_crumbs));
      window.location.href = promena;
    } else if (loc == "nalog.html") {
      bread_crumbs.push("nalog.html");
      localStorage.setItem("bread", JSON.stringify(bread_crumbs));
      window.location.href = promena;
    } else if (loc == "nutricionista.html") {
      bread_crumbs.push("nutricionista.html");
      localStorage.setItem("bread", JSON.stringify(bread_crumbs));
      window.location.href = promena;
    } else if (loc == "onama.html") {
      bread_crumbs.push("onama.html");
      localStorage.setItem("bread", JSON.stringify(bread_crumbs));
      window.location.href = promena;
    } else if (loc == "pilates.html") {
      bread_crumbs.push("pilates.html");
      localStorage.setItem("bread", JSON.stringify(bread_crumbs));
      window.location.href = promena;
    } else if (loc == "treninzi.html") {
      bread_crumbs.push("treninzi.html");
      localStorage.setItem("bread", JSON.stringify(bread_crumbs));
      window.location.href = promena;
    } else if (loc == "yoga.html") {
      bread_crumbs.push("yoga.html");
      localStorage.setItem("bread", JSON.stringify(bread_crumbs));
      window.location.href = promena;
    } else if (loc == "zakazivanje.html") {
      bread_crumbs.push("zakazivanje.html");
      localStorage.setItem("bread", JSON.stringify(bread_crumbs));
      window.location.href = promena;
    } else if (loc == "index_eng.html") {
      bread_crumbs.push("index_eng.html");
      localStorage.setItem("bread", JSON.stringify(bread_crumbs));
      window.location.href = promena;
    } else if (loc == "cardio_eng.html") {
      bread_crumbs.push("cardio_eng.html");
      localStorage.setItem("bread", JSON.stringify(bread_crumbs));
      window.location.href = promena;
    } else if (loc == "classes_eng.html") {
      bread_crumbs.push("classes_eng.html");
      localStorage.setItem("bread", JSON.stringify(bread_crumbs));
      window.location.href = promena;
    } else if (loc == "elements_eng.html") {
      bread_crumbs.push("elements_eng.html");
      localStorage.setItem("bread", JSON.stringify(bread_crumbs));
      window.location.href = promena;
    } else if (loc == "masaze_eng.html") {
      bread_crumbs.push("masaze_eng.html");
      localStorage.setItem("bread", JSON.stringify(bread_crumbs));
      window.location.href = promena;
    } else if (loc == "core_eng.html") {
      bread_crumbs.push("core_eng.html");
      localStorage.setItem("bread", JSON.stringify(bread_crumbs));
      window.location.href = promena;
    } else if (loc == "nalog_eng.html") {
      bread_crumbs.push("nalog_eng.html");
      localStorage.setItem("bread", JSON.stringify(bread_crumbs));
      window.location.href = promena;
    } else if (loc == "nutricionista_eng.html") {
      bread_crumbs.push("nutricionista_eng.html");
      localStorage.setItem("bread", JSON.stringify(bread_crumbs));
      window.location.href = promena;
    } else if (loc == "onama_eng.html") {
      bread_crumbs.push("onama_eng.html");
      localStorage.setItem("bread", JSON.stringify(bread_crumbs));
      window.location.href = promena;
    } else if (loc == "pilates_eng.html") {
      bread_crumbs.push("pilates_eng.html");
      localStorage.setItem("bread", JSON.stringify(bread_crumbs));
      window.location.href = promena;
    } else if (loc == "treninzi_eng.html") {
      bread_crumbs.push("treninzi_eng.html");
      localStorage.setItem("bread", JSON.stringify(bread_crumbs));
      window.location.href = promena;
    } else if (loc == "yoga_eng.html") {
      bread_crumbs.push("yoga_eng.html");
      localStorage.setItem("bread", JSON.stringify(bread_crumbs));
      window.location.href = promena;
    } else if (loc == "zakazivanje_eng.html") {
      bread_crumbs.push("zakazivanje_eng.html");
      localStorage.setItem("bread", JSON.stringify(bread_crumbs));
      window.location.href = promena;
    }
  }
}
function BMI() {
  let kilogrami = document.getElementById("bmi-weight");
  let visina = document.getElementById("bmi-hight");

  let bmi = (kilogrami / visina) * visina;

  document.getElementById("bmi-result").innerHTML = bmi;
}

function izaberi_tip_treninga() {
  if (document.getElementById("core").checked) {
    tip_treninga = "core";
  } else if (document.getElementById("yoga").checked) {
    tip_treninga = "yoga";
  } else if (document.getElementById("pilates").checked) {
    tip_treninga = "pilates";
  } else if (document.getElementById("cardio").checked) {
    tip_treninga = "cardio";
  }
  odabran_tip(tip_treninga);
}
function odabran_tip(tip) {
  if (tip == "core") {
    document.getElementById("trening1label").innerHTML = "Dynamic core";
    document.getElementById("trening2label").innerHTML = "Core BURN";
    document.getElementById("trening3label").innerHTML = "Core HIIT";
    document.getElementById("trening4label").innerHTML = "Core BODYATTACK";
  } else if (tip == "yoga") {
    document.getElementById("trening1label").innerHTML = "Prenatal yoga";
    document.getElementById("trening2label").innerHTML = "Kundalini yoga";
    document.getElementById("trening3label").innerHTML = "Hatha yoga";
    document.getElementById("trening4label").innerHTML = "Ashtanga yoga";
  } else if (tip == "pilates") {
    document.getElementById("trening1label").innerHTML = "Klasični pilates";
    document.getElementById("trening2label").innerHTML = "Stott pilates";
    document.getElementById("trening3label").innerHTML = "Reformer pilates";
    document.getElementById("trening4label").innerHTML = "Terapijski pilates";
  } else if (tip == "cardio") {
    document.getElementById("trening1label").innerHTML = "Klasični cardio";
    document.getElementById("trening2label").innerHTML = "HIIT cardio";
    document.getElementById("trening3label").innerHTML = "Cardo Bodycombat";
    document.getElementById("trening4label").innerHTML = "Zumba cardio";
  }
}

function izaberi_trening() {
  var tip;
  if (tip_treninga == "core") {
    if (document.getElementById("trening1").checked) {
      tip = "dynamic";
    } else if (document.getElementById("trening2").checked) {
      tip = "burn";
    } else if (document.getElementById("trening3").checked) {
      tip = "hiit";
    } else if (document.getElementById("trening4").checked) {
      tip = "bodyattack";
    }
    izbaci_termine_core(tip);
    trening = tip;
  } else if (tip_treninga == "pilates") {
    if (document.getElementById("trening1").checked) {
      tip = "klasicni_pilates";
    } else if (document.getElementById("trening2").checked) {
      tip = "stott_pilates";
    } else if (document.getElementById("trening3").checked) {
      tip = "reformer_pilates";
    } else if (document.getElementById("trening4").checked) {
      tip = "terapijski_pilates";
    }
    izbaci_termine_core(tip);
    trening = tip;
  } else if (tip_treninga == "yoga") {
    if (document.getElementById("trening1").checked) {
      tip = "prenatal_yoga";
    } else if (document.getElementById("trening2").checked) {
      tip = "kundalini_yoga";
    } else if (document.getElementById("trening3").checked) {
      tip = "hatha_yoga";
    } else if (document.getElementById("trening4").checked) {
      tip = "ashtanga_yoga";
    }
    izbaci_termine_core(tip);
    trening = tip;
  } else if (tip_treninga == "cardio") {
    if (document.getElementById("trening1").checked) {
      tip = "klasicni_cardio";
    } else if (document.getElementById("trening2").checked) {
      tip = "hiit_cardio";
    } else if (document.getElementById("trening3").checked) {
      tip = "bodycombat_cardio";
    } else if (document.getElementById("trening4").checked) {
      tip = "zumba_cardio";
    }
    izbaci_termine_core(tip);
    trening = tip;
  }
}

function izbaci_termine_core(tip) {
  if (tip == "dynamic") {
    let i = 0;
    if (dynamic_core_termin[0][i] != "0") {
      document.getElementById("ponedeljak").innerHTML =
        dynamic_core_termin[0][i];
      if (localStorage.getItem("pon_dynamic") != "1") {
        document.getElementById("ponedeljak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("ponedeljak_rez").innerHTML =
          "Poništi rezervaciju";
      }
    } else {
      document.getElementById("ponedeljak").innerHTML = "";
      document.getElementById("ponedeljak_rez").innerHTML = "";
    }
    i++;
    if (dynamic_core_termin[0][i] != "0") {
      document.getElementById("utorak").innerHTML = dynamic_core_termin[0][i];
      if (localStorage.getItem("uto_dynamic") != "1") {
        document.getElementById("utorak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("utorak_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("utorak").innerHTML = "";
      document.getElementById("utorak_rez").innerHTML = "";
    }
    i++;
    if (dynamic_core_termin[0][i] != "0") {
      document.getElementById("sreda").innerHTML = dynamic_core_termin[0][i];
      if (localStorage.getItem("sre_dynamic") != "1") {
        document.getElementById("sreda_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("sreda_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("sreda").innerHTML = "";
      document.getElementById("sreda_rez").innerHTML = "";
    }
    i++;
    if (dynamic_core_termin[0][i] != "0") {
      document.getElementById("cetvrtak").innerHTML = dynamic_core_termin[0][i];
      if (localStorage.getItem("cet_dynamic") != "1") {
        document.getElementById("cetvrtak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("cetvrtak_rez").innerHTML =
          "Poništi rezervaciju";
      }
    } else {
      document.getElementById("cetvrtak").innerHTML = "";
      document.getElementById("cetvrtak_rez").innerHTML = "";
    }
    i++;
    if (dynamic_core_termin[0][i] != "0") {
      document.getElementById("petak").innerHTML = dynamic_core_termin[0][i];
      if (localStorage.getItem("pet_dynamic") != "1") {
        document.getElementById("petak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("petak_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("petak").innerHTML = "";
      document.getElementById("petak_rez").innerHTML = "";
    }
    i++;
    if (dynamic_core_termin[0][i] != "0") {
      document.getElementById("subota").innerHTML = dynamic_core_termin[0][i];
      if (localStorage.getItem("sub_dynamic") != "1") {
        document.getElementById("subota_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("subota_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("subota").innerHTML = "";
      document.getElementById("subota_rez").innerHTML = "";
    }
    i++;
    if (dynamic_core_termin[0][i] != "0") {
      document.getElementById("nedelja").innerHTML = dynamic_core_termin[0][i];
      if (localStorage.getItem("ned_dynamic") != "1") {
        document.getElementById("nedelja_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("nedelja_rez").innerHTML =
          "Poništi rezervaciju";
      }
    } else {
      document.getElementById("nedelja").innerHTML = "";
      document.getElementById("nedelja_rez").innerHTML = "";
    }
  } else if (tip == "burn") {
    let i = 0;
    if (burn_core_termin[0][i] != "0") {
      document.getElementById("ponedeljak").innerHTML = burn_core_termin[0][i];
      if (localStorage.getItem("pon_burn") != "1") {
        document.getElementById("ponedeljak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("ponedeljak_rez").innerHTML =
          "Poništi rezervaciju";
      }
    } else {
      document.getElementById("ponedeljak").innerHTML = "";
      document.getElementById("ponedeljak_rez").innerHTML = "";
    }
    i++;
    if (burn_core_termin[0][i] != "0") {
      document.getElementById("utorak").innerHTML = burn_core_termin[0][i];
      if (localStorage.getItem("uto_burn") != "1") {
        document.getElementById("utorak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("utorak_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("utorak").innerHTML = "";
      document.getElementById("utorak_rez").innerHTML = "";
    }
    i++;
    if (burn_core_termin[0][i] != "0") {
      document.getElementById("sreda").innerHTML = burn_core_termin[0][i];
      if (localStorage.getItem("sre_burn") != "1") {
        document.getElementById("sreda_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("sreda_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("sreda").innerHTML = "";
      document.getElementById("sreda_rez").innerHTML = "";
    }
    i++;
    if (burn_core_termin[0][i] != "0") {
      document.getElementById("cetvrtak").innerHTML = burn_core_termin[0][i];
      if (localStorage.getItem("cet_burn") != "1") {
        document.getElementById("cetvrtak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("cetvrtak_rez").innerHTML =
          "Poništi rezervaciju";
      }
    } else {
      document.getElementById("cetvrtak").innerHTML = "";
      document.getElementById("cetvrtak_rez").innerHTML = "";
    }
    i++;
    if (burn_core_termin[0][i] != "0") {
      document.getElementById("petak").innerHTML = burn_core_termin[0][i];
      if (localStorage.getItem("pet_burn") != "1") {
        document.getElementById("petak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("petak_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("petak").innerHTML = "";
      document.getElementById("petak_rez").innerHTML = "";
    }
    i++;
    if (burn_core_termin[0][i] != "0") {
      document.getElementById("subota").innerHTML = burn_core_termin[0][i];
      if (localStorage.getItem("sub_burn") != "1") {
        document.getElementById("subota_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("subota_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("subota").innerHTML = "";
      document.getElementById("subota_rez").innerHTML = "";
    }
    i++;
    if (burn_core_termin[0][i] != "0") {
      document.getElementById("nedelja").innerHTML = burn_core_termin[0][i];
      if (localStorage.getItem("ned_burn") != "1") {
        document.getElementById("nedelja_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("nedelja_rez").innerHTML =
          "Poništi rezervaciju";
      }
    } else {
      document.getElementById("nedelja").innerHTML = "";
      document.getElementById("nedelja_rez").innerHTML = "";
    }
  } else if (tip == "hiit") {
    let i = 0;
    if (hiit_core_termin[0][i] != "0") {
      document.getElementById("ponedeljak").innerHTML = hiit_core_termin[0][i];
      if (localStorage.getItem("pon_hiit") != "1") {
        document.getElementById("ponedeljak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("ponedeljak_rez").innerHTML =
          "Poništi rezervaciju";
      }
    } else {
      document.getElementById("ponedeljak").innerHTML = "";
      document.getElementById("ponedeljak_rez").innerHTML = "";
    }
    i++;
    if (hiit_core_termin[0][i] != "0") {
      document.getElementById("utorak").innerHTML = hiit_core_termin[0][i];
      if (localStorage.getItem("uto_hiit") != "1") {
        document.getElementById("utorak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("utorak_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("utorak").innerHTML = "";
      document.getElementById("utorak_rez").innerHTML = "";
    }
    i++;
    if (hiit_core_termin[0][i] != "0") {
      document.getElementById("sreda").innerHTML = hiit_core_termin[0][i];
      if (localStorage.getItem("sre_hiit") != "1") {
        document.getElementById("sreda_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("sreda_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("sreda").innerHTML = "";
      document.getElementById("sreda_rez").innerHTML = "";
    }
    i++;
    if (hiit_core_termin[0][i] != "0") {
      document.getElementById("cetvrtak").innerHTML = hiit_core_termin[0][i];
      if (localStorage.getItem("cet_hiit") != "1") {
        document.getElementById("cetvrtak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("cetvrtak_rez").innerHTML =
          "Poništi rezervaciju";
      }
    } else {
      document.getElementById("cetvrtak").innerHTML = "";
      document.getElementById("cetvrtak_rez").innerHTML = "";
    }
    i++;
    if (hiit_core_termin[0][i] != "0") {
      document.getElementById("petak").innerHTML = hiit_core_termin[0][i];
      if (localStorage.getItem("pet_hiit") != "1") {
        document.getElementById("petak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("petak_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("petak").innerHTML = "";
      document.getElementById("petak_rez").innerHTML = "";
    }
    i++;
    if (hiit_core_termin[0][i] != "0") {
      document.getElementById("subota").innerHTML = hiit_core_termin[0][i];
      if (localStorage.getItem("sub_hiit") != "1") {
        document.getElementById("subota_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("subota_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("subota").innerHTML = "";
      document.getElementById("subota_rez").innerHTML = "";
    }
    i++;
    if (hiit_core_termin[0][i] != "0") {
      document.getElementById("nedelja").innerHTML = hiit_core_termin[0][i];
      if (localStorage.getItem("ned_hiit") != "1") {
        document.getElementById("nedelja_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("nedelja_rez").innerHTML =
          "Poništi rezervaciju";
      }
    } else {
      document.getElementById("nedelja").innerHTML = "";
      document.getElementById("nedelja_rez").innerHTML = "";
    }
  } else if (tip == "bodyattack") {
    let i = 0;
    if (bodyattack_core_termin[0][i] != "0") {
      document.getElementById("ponedeljak").innerHTML =
        bodyattack_core_termin[0][i];
      if (localStorage.getItem("pon_bodyattack") != "1") {
        document.getElementById("ponedeljak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("ponedeljak_rez").innerHTML =
          "Poništi rezervaciju";
      }
    } else {
      document.getElementById("ponedeljak").innerHTML = "";
      document.getElementById("ponedeljak_rez").innerHTML = "";
    }
    i++;
    if (bodyattack_core_termin[0][i] != "0") {
      document.getElementById("utorak").innerHTML =
        bodyattack_core_termin[0][i];
      if (localStorage.getItem("uto_bodyattack") != "1") {
        document.getElementById("utorak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("utorak_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("utorak").innerHTML = "";
      document.getElementById("utorak_rez").innerHTML = "";
    }
    i++;
    if (bodyattack_core_termin[0][i] != "0") {
      document.getElementById("sreda").innerHTML = bodyattack_core_termin[0][i];
      if (localStorage.getItem("sre_bodyattack") != "1") {
        document.getElementById("sreda_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("sreda_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("sreda").innerHTML = "";
      document.getElementById("sreda_rez").innerHTML = "";
    }
    i++;
    if (bodyattack_core_termin[0][i] != "0") {
      document.getElementById("cetvrtak").innerHTML =
        bodyattack_core_termin[0][i];
      if (localStorage.getItem("cet_bodyattack") != "1") {
        document.getElementById("cetvrtak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("cetvrtak_rez").innerHTML =
          "Poništi rezervaciju";
      }
    } else {
      document.getElementById("cetvrtak").innerHTML = "";
      document.getElementById("cetvrtak_rez").innerHTML = "";
    }
    i++;
    if (bodyattack_core_termin[0][i] != "0") {
      document.getElementById("petak").innerHTML = bodyattack_core_termin[0][i];
      if (localStorage.getItem("pet_bodyattack") != "1") {
        document.getElementById("petak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("petak_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("petak").innerHTML = "";
      document.getElementById("petak_rez").innerHTML = "";
    }
    i++;
    if (bodyattack_core_termin[0][i] != "0") {
      document.getElementById("subota").innerHTML =
        bodyattack_core_termin[0][i];
      if (localStorage.getItem("sub_bodyattack") != "1") {
        document.getElementById("subota_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("subota_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("subota").innerHTML = "";
      document.getElementById("subota_rez").innerHTML = "";
    }
    i++;
    if (bodyattack_core_termin[0][i] != "0") {
      document.getElementById("nedelja").innerHTML =
        bodyattack_core_termin[0][i];
      if (localStorage.getItem("ned_bodyattack") != "1") {
        document.getElementById("nedelja_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("nedelja_rez").innerHTML =
          "Poništi rezervaciju";
      }
    } else {
      document.getElementById("nedelja").innerHTML = "";
      document.getElementById("nedelja_rez").innerHTML = "";
    }
  } else if (tip == "klasicni_pilates") {
    let i = 0;
    if (klasicni_pilates_termin[0][i] != "0") {
      document.getElementById("ponedeljak").innerHTML =
        klasicni_pilates_termin[0][i];
      if (localStorage.getItem("pon_klasicni_pilates") != "1") {
        document.getElementById("ponedeljak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("ponedeljak_rez").innerHTML =
          "Poništi rezervaciju";
      }
    } else {
      document.getElementById("ponedeljak").innerHTML = "";
      document.getElementById("ponedeljak_rez").innerHTML = "";
    }
    i++;
    if (klasicni_pilates_termin[0][i] != "0") {
      document.getElementById("utorak").innerHTML =
        klasicni_pilates_termin[0][i];
      if (localStorage.getItem("uto_klasicni_pilates") != "1") {
        document.getElementById("utorak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("utorak_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("utorak").innerHTML = "";
      document.getElementById("utorak_rez").innerHTML = "";
    }
    i++;
    if (klasicni_pilates_termin[0][i] != "0") {
      document.getElementById("sreda").innerHTML =
        klasicni_pilates_termin[0][i];
      if (localStorage.getItem("sre_klasicni_pilates") != "1") {
        document.getElementById("sreda_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("sreda_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("sreda").innerHTML = "";
      document.getElementById("sreda_rez").innerHTML = "";
    }
    i++;
    if (klasicni_pilates_termin[0][i] != "0") {
      document.getElementById("cetvrtak").innerHTML =
        klasicni_pilates_termin[0][i];
      if (localStorage.getItem("cet_klasicni_pilates") != "1") {
        document.getElementById("cetvrtak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("cetvrtak_rez").innerHTML =
          "Poništi rezervaciju";
      }
    } else {
      document.getElementById("cetvrtak").innerHTML = "";
      document.getElementById("cetvrtak_rez").innerHTML = "";
    }
    i++;
    if (klasicni_pilates_termin[0][i] != "0") {
      document.getElementById("petak").innerHTML =
        klasicni_pilates_termin[0][i];
      if (localStorage.getItem("pet_klasicni_pilates") != "1") {
        document.getElementById("petak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("petak_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("petak").innerHTML = "";
      document.getElementById("petak_rez").innerHTML = "";
    }
    i++;
    if (klasicni_pilates_termin[0][i] != "0") {
      document.getElementById("subota").innerHTML =
        klasicni_pilates_termin[0][i];
      if (localStorage.getItem("sub_klasicni_pilates") != "1") {
        document.getElementById("subota_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("subota_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("subota").innerHTML = "";
      document.getElementById("subota_rez").innerHTML = "";
    }
    i++;
    if (klasicni_pilates_termin[0][i] != "0") {
      document.getElementById("nedelja").innerHTML =
        klasicni_pilates_termin[0][i];
      if (localStorage.getItem("ned_klasicni_pilates") != "1") {
        document.getElementById("nedelja_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("nedelja_rez").innerHTML =
          "Poništi rezervaciju";
      }
    } else {
      document.getElementById("nedelja").innerHTML = "";
      document.getElementById("nedelja_rez").innerHTML = "";
    }
  } else if (tip == "stott_pilates") {
    let i = 0;
    if (stott_pilates_termin[0][i] != "0") {
      document.getElementById("ponedeljak").innerHTML =
        stott_pilates_termin[0][i];
      if (localStorage.getItem("pon_stott_pilates") != "1") {
        document.getElementById("ponedeljak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("ponedeljak_rez").innerHTML =
          "Poništi rezervaciju";
      }
    } else {
      document.getElementById("ponedeljak").innerHTML = "";
      document.getElementById("ponedeljak_rez").innerHTML = "";
    }
    i++;
    if (stott_pilates_termin[0][i] != "0") {
      document.getElementById("utorak").innerHTML = stott_pilates_termin[0][i];
      if (localStorage.getItem("uto_stott_pilates") != "1") {
        document.getElementById("utorak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("utorak_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("utorak").innerHTML = "";
      document.getElementById("utorak_rez").innerHTML = "";
    }
    i++;
    if (stott_pilates_termin[0][i] != "0") {
      document.getElementById("sreda").innerHTML = stott_pilates_termin[0][i];
      if (localStorage.getItem("sre_stott_pilates") != "1") {
        document.getElementById("sreda_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("sreda_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("sreda").innerHTML = "";
      document.getElementById("sreda_rez").innerHTML = "";
    }
    i++;
    if (stott_pilates_termin[0][i] != "0") {
      document.getElementById("cetvrtak").innerHTML =
        stott_pilates_termin[0][i];
      if (localStorage.getItem("cet_stott_pilates") != "1") {
        document.getElementById("cetvrtak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("cetvrtak_rez").innerHTML =
          "Poništi rezervaciju";
      }
    } else {
      document.getElementById("cetvrtak").innerHTML = "";
      document.getElementById("cetvrtak_rez").innerHTML = "";
    }
    i++;
    if (stott_pilates_termin[0][i] != "0") {
      document.getElementById("petak").innerHTML = stott_pilates_termin[0][i];
      if (localStorage.getItem("pet_stott_pilates") != "1") {
        document.getElementById("petak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("petak_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("petak").innerHTML = "";
      document.getElementById("petak_rez").innerHTML = "";
    }
    i++;
    if (stott_pilates_termin[0][i] != "0") {
      document.getElementById("subota").innerHTML = stott_pilates_termin[0][i];
      if (localStorage.getItem("sub_stott_pilates") != "1") {
        document.getElementById("subota_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("subota_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("subota").innerHTML = "";
      document.getElementById("subota_rez").innerHTML = "";
    }
    i++;
    if (stott_pilates_termin[0][i] != "0") {
      document.getElementById("nedelja").innerHTML = stott_pilates_termin[0][i];
      if (localStorage.getItem("ned_stott_pilates") != "1") {
        document.getElementById("nedelja_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("nedelja_rez").innerHTML =
          "Poništi rezervaciju";
      }
    } else {
      document.getElementById("nedelja").innerHTML = "";
      document.getElementById("nedelja_rez").innerHTML = "";
    }
  } else if (tip == "reformer_pilates") {
    let i = 0;
    if (reformer_pilates_termin[0][i] != "0") {
      document.getElementById("ponedeljak").innerHTML =
        reformer_pilates_termin[0][i];
      if (localStorage.getItem("pon_reformer_pilates") != "1") {
        document.getElementById("ponedeljak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("ponedeljak_rez").innerHTML =
          "Poništi rezervaciju";
      }
    } else {
      document.getElementById("ponedeljak").innerHTML = "";
      document.getElementById("ponedeljak_rez").innerHTML = "";
    }
    i++;
    if (reformer_pilates_termin[0][i] != "0") {
      document.getElementById("utorak").innerHTML =
        reformer_pilates_termin[0][i];
      if (localStorage.getItem("uto_reformer_pilates") != "1") {
        document.getElementById("utorak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("utorak_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("utorak").innerHTML = "";
      document.getElementById("utorak_rez").innerHTML = "";
    }
    i++;
    if (reformer_pilates_termin[0][i] != "0") {
      document.getElementById("sreda").innerHTML =
        reformer_pilates_termin[0][i];
      if (localStorage.getItem("sre_reformer_pilates") != "1") {
        document.getElementById("sreda_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("sreda_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("sreda").innerHTML = "";
      document.getElementById("sreda_rez").innerHTML = "";
    }
    i++;
    if (reformer_pilates_termin[0][i] != "0") {
      document.getElementById("cetvrtak").innerHTML =
        reformer_pilates_termin[0][i];
      if (localStorage.getItem("cet_reformer_pilates") != "1") {
        document.getElementById("cetvrtak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("cetvrtak_rez").innerHTML =
          "Poništi rezervaciju";
      }
    } else {
      document.getElementById("cetvrtak").innerHTML = "";
      document.getElementById("cetvrtak_rez").innerHTML = "";
    }
    i++;
    if (reformer_pilates_termin[0][i] != "0") {
      document.getElementById("petak").innerHTML =
        reformer_pilates_termin[0][i];
      if (localStorage.getItem("pet_reformer_pilates") != "1") {
        document.getElementById("petak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("petak_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("petak").innerHTML = "";
      document.getElementById("petak_rez").innerHTML = "";
    }
    i++;
    if (reformer_pilates_termin[0][i] != "0") {
      document.getElementById("subota").innerHTML =
        reformer_pilates_termin[0][i];
      if (localStorage.getItem("sub_reformer_pilates") != "1") {
        document.getElementById("subota_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("subota_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("subota").innerHTML = "";
      document.getElementById("subota_rez").innerHTML = "";
    }
    i++;
    if (reformer_pilates_termin[0][i] != "0") {
      document.getElementById("nedelja").innerHTML =
        reformer_pilates_termin[0][i];
      if (localStorage.getItem("ned_reformer_pilates") != "1") {
        document.getElementById("nedelja_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("nedelja_rez").innerHTML =
          "Poništi rezervaciju";
      }
    } else {
      document.getElementById("nedelja").innerHTML = "";
      document.getElementById("nedelja_rez").innerHTML = "";
    }
  } else if (tip == "terapijski_pilates") {
    let i = 0;
    if (terapijski_pilates_termin[0][i] != "0") {
      document.getElementById("ponedeljak").innerHTML =
        terapijski_pilates_termin[0][i];
      if (localStorage.getItem("pon_terapijski_pilates") != "1") {
        document.getElementById("ponedeljak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("ponedeljak_rez").innerHTML =
          "Poništi rezervaciju";
      }
    } else {
      document.getElementById("ponedeljak").innerHTML = "";
      document.getElementById("ponedeljak_rez").innerHTML = "";
    }
    i++;
    if (terapijski_pilates_termin[0][i] != "0") {
      document.getElementById("utorak").innerHTML =
        terapijski_pilates_termin[0][i];
      if (localStorage.getItem("uto_terapijski_pilates") != "1") {
        document.getElementById("utorak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("utorak_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("utorak").innerHTML = "";
      document.getElementById("utorak_rez").innerHTML = "";
    }
    i++;
    if (terapijski_pilates_termin[0][i] != "0") {
      document.getElementById("sreda").innerHTML =
        terapijski_pilates_termin[0][i];
      if (localStorage.getItem("sre_terapijski_pilates") != "1") {
        document.getElementById("sreda_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("sreda_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("sreda").innerHTML = "";
      document.getElementById("sreda_rez").innerHTML = "";
    }
    i++;
    if (terapijski_pilates_termin[0][i] != "0") {
      document.getElementById("cetvrtak").innerHTML =
        terapijski_pilates_termin[0][i];
      if (localStorage.getItem("cet_terapijski_pilates") != "1") {
        document.getElementById("cetvrtak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("cetvrtak_rez").innerHTML =
          "Poništi rezervaciju";
      }
    } else {
      document.getElementById("cetvrtak").innerHTML = "";
      document.getElementById("cetvrtak_rez").innerHTML = "";
    }
    i++;
    if (terapijski_pilates_termin[0][i] != "0") {
      document.getElementById("petak").innerHTML =
        terapijski_pilates_termin[0][i];
      if (localStorage.getItem("pet_terapijski_pilates") != "1") {
        document.getElementById("petak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("petak_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("petak").innerHTML = "";
      document.getElementById("petak_rez").innerHTML = "";
    }
    i++;
    if (terapijski_pilates_termin[0][i] != "0") {
      document.getElementById("subota").innerHTML =
        terapijski_pilates_termin[0][i];
      if (localStorage.getItem("sub_terapijski_pilates") != "1") {
        document.getElementById("subota_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("subota_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("subota").innerHTML = "";
      document.getElementById("subota_rez").innerHTML = "";
    }
    i++;
    if (terapijski_pilates_termin[0][i] != "0") {
      document.getElementById("nedelja").innerHTML =
        terapijski_pilates_termin[0][i];
      if (localStorage.getItem("ned_terapijski_pilates") != "1") {
        document.getElementById("nedelja_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("nedelja_rez").innerHTML =
          "Poništi rezervaciju";
      }
    } else {
      document.getElementById("nedelja").innerHTML = "";
      document.getElementById("nedelja_rez").innerHTML = "";
    }
  } else if (tip == "prenatal_yoga") {
    let i = 0;

    if (prenatal_yoga_termin[0][i] != "0") {
      document.getElementById("ponedeljak").innerHTML =
        prenatal_yoga_termin[0][i];

      if (localStorage.getItem("pon_prenatal_yoga") != "1") {
        document.getElementById("ponedeljak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("ponedeljak_rez").innerHTML =
          "Poništi rezervaciju";
      }
    } else {
      document.getElementById("ponedeljak").innerHTML = "";
      document.getElementById("ponedeljak_rez").innerHTML = "";
    }
    i++;
    if (prenatal_yoga_termin[0][i] != "0") {
      document.getElementById("utorak").innerHTML = prenatal_yoga_termin[0][i];
      if (localStorage.getItem("uto_prenatal_yoga") != "1") {
        document.getElementById("utorak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("utorak_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("utorak").innerHTML = "";
      document.getElementById("utorak_rez").innerHTML = "";
    }
    i++;
    if (prenatal_yoga_termin[0][i] != "0") {
      document.getElementById("sreda").innerHTML = prenatal_yoga_termin[0][i];
      if (localStorage.getItem("sre_prenatal_yoga") != "1") {
        document.getElementById("sreda_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("sreda_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("sreda").innerHTML = "";
      document.getElementById("sreda_rez").innerHTML = "";
    }
    i++;
    if (prenatal_yoga_termin[0][i] != "0") {
      document.getElementById("cetvrtak").innerHTML =
        prenatal_yoga_termin[0][i];
      if (localStorage.getItem("cet_prenatal_yoga") != "1") {
        document.getElementById("cetvrtak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("cetvrtak_rez").innerHTML =
          "Poništi rezervaciju";
      }
    } else {
      document.getElementById("cetvrtak").innerHTML = "";
      document.getElementById("cetvrtak_rez").innerHTML = "";
    }
    i++;
    if (prenatal_yoga_termin[0][i] != "0") {
      document.getElementById("petak").innerHTML = prenatal_yoga_termin[0][i];
      if (localStorage.getItem("pet_prenatal_yoga") != "1") {
        document.getElementById("petak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("petak_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("petak").innerHTML = "";
      document.getElementById("petak_rez").innerHTML = "";
    }
    i++;
    if (prenatal_yoga_termin[0][i] != "0") {
      document.getElementById("subota").innerHTML = prenatal_yoga_termin[0][i];
      if (localStorage.getItem("sub_prenatal_yoga") != "1") {
        document.getElementById("subota_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("subota_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("subota").innerHTML = "";
      document.getElementById("subota_rez").innerHTML = "";
    }
    i++;
    if (prenatal_yoga_termin[0][i] != "0") {
      document.getElementById("nedelja").innerHTML = prenatal_yoga_termin[0][i];
      if (localStorage.getItem("ned_prenatal_yoga") != "1") {
        document.getElementById("nedelja_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("nedelja_rez").innerHTML =
          "Poništi rezervaciju";
      }
    } else {
      document.getElementById("nedelja").innerHTML = "";
      document.getElementById("nedelja_rez").innerHTML = "";
    }
  } else if (tip == "kundalini_yoga") {
    let i = 0;
    if (kundalini_yoga_termin[0][i] != "0") {
      document.getElementById("ponedeljak").innerHTML =
        kundalini_yoga_termin[0][i];
      if (localStorage.getItem("pon_kundalini_yoga") != "1") {
        document.getElementById("ponedeljak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("ponedeljak_rez").innerHTML =
          "Poništi rezervaciju";
      }
    } else {
      document.getElementById("ponedeljak").innerHTML = "";
      document.getElementById("ponedeljak_rez").innerHTML = "";
    }
    i++;
    if (kundalini_yoga_termin[0][i] != "0") {
      document.getElementById("utorak").innerHTML = kundalini_yoga_termin[0][i];
      if (localStorage.getItem("uto_kundalini_yoga") != "1") {
        document.getElementById("utorak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("utorak_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("utorak").innerHTML = "";
      document.getElementById("utorak_rez").innerHTML = "";
    }
    i++;
    if (kundalini_yoga_termin[0][i] != "0") {
      document.getElementById("sreda").innerHTML = kundalini_yoga_termin[0][i];
      if (localStorage.getItem("sre_kundalini_yoga") != "1") {
        document.getElementById("sreda_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("sreda_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("sreda").innerHTML = "";
      document.getElementById("sreda_rez").innerHTML = "";
    }
    i++;
    if (kundalini_yoga_termin[0][i] != "0") {
      document.getElementById("cetvrtak").innerHTML =
        kundalini_yoga_termin[0][i];
      if (localStorage.getItem("cet_kundalini_yoga") != "1") {
        document.getElementById("cetvrtak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("cetvrtak_rez").innerHTML =
          "Poništi rezervaciju";
      }
    } else {
      document.getElementById("cetvrtak").innerHTML = "";
      document.getElementById("cetvrtak_rez").innerHTML = "";
    }
    i++;
    if (kundalini_yoga_termin[0][i] != "0") {
      document.getElementById("petak").innerHTML = kundalini_yoga_termin[0][i];
      if (localStorage.getItem("pet_kundalini_yoga") != "1") {
        document.getElementById("petak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("petak_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("petak").innerHTML = "";
      document.getElementById("petak_rez").innerHTML = "";
    }
    i++;
    if (kundalini_yoga_termin[0][i] != "0") {
      document.getElementById("subota").innerHTML = kundalini_yoga_termin[0][i];
      if (localStorage.getItem("sub_kundalini_yoga") != "1") {
        document.getElementById("subota_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("subota_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("subota").innerHTML = "";
      document.getElementById("subota_rez").innerHTML = "";
    }
    i++;
    if (kundalini_yoga_termin[0][i] != "0") {
      document.getElementById("nedelja").innerHTML =
        kundalini_yoga_termin[0][i];
      if (localStorage.getItem("ned_kundalini_yoga") != "1") {
        document.getElementById("nedelja_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("nedelja_rez").innerHTML =
          "Poništi rezervaciju";
      }
    } else {
      document.getElementById("nedelja").innerHTML = "";
      document.getElementById("nedelja_rez").innerHTML = "";
    }
  } else if (tip == "hatha_yoga") {
    let i = 0;
    if (hatha_yoga_termin[0][i] != "0") {
      document.getElementById("ponedeljak").innerHTML = hatha_yoga_termin[0][i];
      if (localStorage.getItem("pon_hatha_yoga") != "1") {
        document.getElementById("ponedeljak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("ponedeljak_rez").innerHTML =
          "Poništi rezervaciju";
      }
    } else {
      document.getElementById("ponedeljak").innerHTML = "";
      document.getElementById("ponedeljak_rez").innerHTML = "";
    }
    i++;
    if (hatha_yoga_termin[0][i] != "0") {
      document.getElementById("utorak").innerHTML = hatha_yoga_termin[0][i];
      if (localStorage.getItem("uto_hatha_yoga") != "1") {
        document.getElementById("utorak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("utorak_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("utorak").innerHTML = "";
      document.getElementById("utorak_rez").innerHTML = "";
    }
    i++;
    if (hatha_yoga_termin[0][i] != "0") {
      document.getElementById("sreda").innerHTML = hatha_yoga_termin[0][i];
      if (localStorage.getItem("sre_hatha_yoga") != "1") {
        document.getElementById("sreda_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("sreda_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("sreda").innerHTML = "";
      document.getElementById("sreda_rez").innerHTML = "";
    }
    i++;
    if (hatha_yoga_termin[0][i] != "0") {
      document.getElementById("cetvrtak").innerHTML = hatha_yoga_termin[0][i];
      if (localStorage.getItem("cet_hatha_yoga") != "1") {
        document.getElementById("cetvrtak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("cetvrtak_rez").innerHTML =
          "Poništi rezervaciju";
      }
    } else {
      document.getElementById("cetvrtak").innerHTML = "";
      document.getElementById("cetvrtak_rez").innerHTML = "";
    }
    i++;
    if (hatha_yoga_termin[0][i] != "0") {
      document.getElementById("petak").innerHTML = hatha_yoga_termin[0][i];
      if (localStorage.getItem("pet_hatha_yoga") != "1") {
        document.getElementById("petak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("petak_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("petak").innerHTML = "";
      document.getElementById("petak_rez").innerHTML = "";
    }
    i++;
    if (hatha_yoga_termin[0][i] != "0") {
      document.getElementById("subota").innerHTML = hatha_yoga_termin[0][i];
      if (localStorage.getItem("sub_hatha_yoga") != "1") {
        document.getElementById("subota_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("subota_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("subota").innerHTML = "";
      document.getElementById("subota_rez").innerHTML = "";
    }
    i++;
    if (hatha_yoga_termin[0][i] != "0") {
      document.getElementById("nedelja").innerHTML = hatha_yoga_termin[0][i];
      if (localStorage.getItem("ned_hatha_yoga") != "1") {
        document.getElementById("nedelja_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("nedelja_rez").innerHTML =
          "Poništi rezervaciju";
      }
    } else {
      document.getElementById("nedelja").innerHTML = "";
      document.getElementById("nedelja_rez").innerHTML = "";
    }
  } else if (tip == "ashtanga_yoga") {
    let i = 0;
    if (ashtanga_yoga_termin[0][i] != "0") {
      document.getElementById("ponedeljak").innerHTML =
        ashtanga_yoga_termin[0][i];
      if (localStorage.getItem("pon_ashtanga_yoga") != "1") {
        document.getElementById("ponedeljak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("ponedeljak_rez").innerHTML =
          "Poništi rezervaciju";
      }
    } else {
      document.getElementById("ponedeljak").innerHTML = "";
      document.getElementById("ponedeljak_rez").innerHTML = "";
    }
    i++;
    if (ashtanga_yoga_termin[0][i] != "0") {
      document.getElementById("utorak").innerHTML = ashtanga_yoga_termin[0][i];
      if (localStorage.getItem("uto_ashtanga_yoga") != "1") {
        document.getElementById("utorak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("utorak_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("utorak").innerHTML = "";
      document.getElementById("utorak_rez").innerHTML = "";
    }
    i++;
    if (ashtanga_yoga_termin[0][i] != "0") {
      document.getElementById("sreda").innerHTML = ashtanga_yoga_termin[0][i];
      if (localStorage.getItem("sre_ashtanga_yoga") != "1") {
        document.getElementById("sreda_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("sreda_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("sreda").innerHTML = "";
      document.getElementById("sreda_rez").innerHTML = "";
    }
    i++;
    if (ashtanga_yoga_termin[0][i] != "0") {
      document.getElementById("cetvrtak").innerHTML =
        ashtanga_yoga_termin[0][i];
      if (localStorage.getItem("cet_ashtanga_yoga") != "1") {
        document.getElementById("cetvrtak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("cetvrtak_rez").innerHTML =
          "Poništi rezervaciju";
      }
    } else {
      document.getElementById("cetvrtak").innerHTML = "";
      document.getElementById("cetvrtak_rez").innerHTML = "";
    }
    i++;
    if (ashtanga_yoga_termin[0][i] != "0") {
      document.getElementById("petak").innerHTML = ashtanga_yoga_termin[0][i];
      if (localStorage.getItem("pet_ashtanga_yoga") != "1") {
        document.getElementById("petak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("petak_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("petak").innerHTML = "";
      document.getElementById("petak_rez").innerHTML = "";
    }
    i++;
    if (ashtanga_yoga_termin[0][i] != "0") {
      document.getElementById("subota").innerHTML = ashtanga_yoga_termin[0][i];
      if (localStorage.getItem("sub_ashtanga_yoga") != "1") {
        document.getElementById("subota_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("subota_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("subota").innerHTML = "";
      document.getElementById("subota_rez").innerHTML = "";
    }
    i++;
    if (ashtanga_yoga_termin[0][i] != "0") {
      document.getElementById("nedelja").innerHTML = ashtanga_yoga_termin[0][i];
      if (localStorage.getItem("ned_ashtanga_yoga") != "1") {
        document.getElementById("nedelja_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("nedelja_rez").innerHTML =
          "Poništi rezervaciju";
      }
    } else {
      document.getElementById("nedelja").innerHTML = "";
      document.getElementById("nedelja_rez").innerHTML = "";
    }
  } else if (tip == "klasicni_cardio") {
    let i = 0;
    if (klasicni_cardio_termin[0][i] != "0") {
      document.getElementById("ponedeljak").innerHTML =
        klasicni_cardio_termin[0][i];
      if (localStorage.getItem("pon_klasicni_cardio") != "1") {
        document.getElementById("ponedeljak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("ponedeljak_rez").innerHTML =
          "Poništi rezervaciju";
      }
    } else {
      document.getElementById("ponedeljak").innerHTML = "";
      document.getElementById("ponedeljak_rez").innerHTML = "";
    }
    i++;
    if (klasicni_cardio_termin[0][i] != "0") {
      document.getElementById("utorak").innerHTML =
        klasicni_cardio_termin[0][i];
      if (localStorage.getItem("uto_klasicni_cardio") != "1") {
        document.getElementById("utorak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("utorak_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("utorak").innerHTML = "";
      document.getElementById("utorak_rez").innerHTML = "";
    }
    i++;
    if (klasicni_cardio_termin[0][i] != "0") {
      document.getElementById("sreda").innerHTML = klasicni_cardio_termin[0][i];
      if (localStorage.getItem("sre_klasicni_cardio") != "1") {
        document.getElementById("sreda_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("sreda_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("sreda").innerHTML = "";
      document.getElementById("sreda_rez").innerHTML = "";
    }
    i++;
    if (klasicni_cardio_termin[0][i] != "0") {
      document.getElementById("cetvrtak").innerHTML =
        klasicni_cardio_termin[0][i];
      if (localStorage.getItem("cet_klasicni_cardio") != "1") {
        document.getElementById("cetvrtak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("cetvrtak_rez").innerHTML =
          "Poništi rezervaciju";
      }
    } else {
      document.getElementById("cetvrtak").innerHTML = "";
      document.getElementById("cetvrtak_rez").innerHTML = "";
    }
    i++;
    if (klasicni_cardio_termin[0][i] != "0") {
      document.getElementById("petak").innerHTML = klasicni_cardio_termin[0][i];
      if (localStorage.getItem("pet_klasicni_cardio") != "1") {
        document.getElementById("petak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("petak_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("petak").innerHTML = "";
      document.getElementById("petak_rez").innerHTML = "";
    }
    i++;
    if (klasicni_cardio_termin[0][i] != "0") {
      document.getElementById("subota").innerHTML =
        klasicni_cardio_termin[0][i];
      if (localStorage.getItem("sub_klasicni_cardio") != "1") {
        document.getElementById("subota_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("subota_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("subota").innerHTML = "";
      document.getElementById("subota_rez").innerHTML = "";
    }
    i++;
    if (klasicni_cardio_termin[0][i] != "0") {
      document.getElementById("nedelja").innerHTML =
        klasicni_cardio_termin[0][i];
      if (localStorage.getItem("ned_klasicni_cardio") != "1") {
        document.getElementById("nedelja_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("nedelja_rez").innerHTML =
          "Poništi rezervaciju";
      }
    } else {
      document.getElementById("nedelja").innerHTML = "";
      document.getElementById("nedelja_rez").innerHTML = "";
    }
  } else if (tip == "hiit_cardio") {
    let i = 0;
    if (hiit_cardio_termin[0][i] != "0") {
      document.getElementById("ponedeljak").innerHTML =
        hiit_cardio_termin[0][i];
      if (localStorage.getItem("pon_hiit_cardio") != "1") {
        document.getElementById("ponedeljak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("ponedeljak_rez").innerHTML =
          "Poništi rezervaciju";
      }
    } else {
      document.getElementById("ponedeljak").innerHTML = "";
      document.getElementById("ponedeljak_rez").innerHTML = "";
    }
    i++;
    if (hiit_cardio_termin[0][i] != "0") {
      document.getElementById("utorak").innerHTML = hiit_cardio_termin[0][i];
      if (localStorage.getItem("uto_hiit_cardio") != "1") {
        document.getElementById("utorak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("utorak_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("utorak").innerHTML = "";
      document.getElementById("utorak_rez").innerHTML = "";
    }
    i++;
    if (hiit_cardio_termin[0][i] != "0") {
      document.getElementById("sreda").innerHTML = hiit_cardio_termin[0][i];
      if (localStorage.getItem("sre_hiit_cardio") != "1") {
        document.getElementById("sreda_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("sreda_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("sreda").innerHTML = "";
      document.getElementById("sreda_rez").innerHTML = "";
    }
    i++;
    if (hiit_cardio_termin[0][i] != "0") {
      document.getElementById("cetvrtak").innerHTML = hiit_cardio_termin[0][i];
      if (localStorage.getItem("cet_hiit_cardio") != "1") {
        document.getElementById("cetvrtak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("cetvrtak_rez").innerHTML =
          "Poništi rezervaciju";
      }
    } else {
      document.getElementById("cetvrtak").innerHTML = "";
      document.getElementById("cetvrtak_rez").innerHTML = "";
    }
    i++;
    if (hiit_cardio_termin[0][i] != "0") {
      document.getElementById("petak").innerHTML = hiit_cardio_termin[0][i];
      if (localStorage.getItem("pet_hiit_cardio") != "1") {
        document.getElementById("petak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("petak_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("petak").innerHTML = "";
      document.getElementById("petak_rez").innerHTML = "";
    }
    i++;
    if (hiit_cardio_termin[0][i] != "0") {
      document.getElementById("subota").innerHTML = hiit_cardio_termin[0][i];
      if (localStorage.getItem("sub_hiit_cardio") != "1") {
        document.getElementById("subota_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("subota_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("subota").innerHTML = "";
      document.getElementById("subota_rez").innerHTML = "";
    }
    i++;
    if (hiit_cardio_termin[0][i] != "0") {
      document.getElementById("nedelja").innerHTML = hiit_cardio_termin[0][i];
      if (localStorage.getItem("ned_hiit_cardio") != "1") {
        document.getElementById("nedelja_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("nedelja_rez").innerHTML =
          "Poništi rezervaciju";
      }
    } else {
      document.getElementById("nedelja").innerHTML = "";
      document.getElementById("nedelja_rez").innerHTML = "";
    }
  } else if (tip == "bodycombat_cardio") {
    let i = 0;
    if (bodycombat_cardio_termin[0][i] != "0") {
      document.getElementById("ponedeljak").innerHTML =
        bodycombat_cardio_termin[0][i];
      if (localStorage.getItem("pon_bodycombat_cardio") != "1") {
        document.getElementById("ponedeljak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("ponedeljak_rez").innerHTML =
          "Poništi rezervaciju";
      }
    } else {
      document.getElementById("ponedeljak").innerHTML = "";
      document.getElementById("ponedeljak_rez").innerHTML = "";
    }
    i++;
    if (bodycombat_cardio_termin[0][i] != "0") {
      document.getElementById("utorak").innerHTML =
        bodycombat_cardio_termin[0][i];
      if (localStorage.getItem("uto_bodycombat_cardio") != "1") {
        document.getElementById("utorak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("utorak_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("utorak").innerHTML = "";
      document.getElementById("utorak_rez").innerHTML = "";
    }
    i++;
    if (bodycombat_cardio_termin[0][i] != "0") {
      document.getElementById("sreda").innerHTML =
        bodycombat_cardio_termin[0][i];
      if (localStorage.getItem("sre_bodycombat_cardio") != "1") {
        document.getElementById("sreda_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("sreda_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("sreda").innerHTML = "";
      document.getElementById("sreda_rez").innerHTML = "";
    }
    i++;
    if (bodycombat_cardio_termin[0][i] != "0") {
      document.getElementById("cetvrtak").innerHTML =
        bodycombat_cardio_termin[0][i];
      if (localStorage.getItem("cet_bodycombat_cardio") != "1") {
        document.getElementById("cetvrtak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("cetvrtak_rez").innerHTML =
          "Poništi rezervaciju";
      }
    } else {
      document.getElementById("cetvrtak").innerHTML = "";
      document.getElementById("cetvrtak_rez").innerHTML = "";
    }
    i++;
    if (bodycombat_cardio_termin[0][i] != "0") {
      document.getElementById("petak").innerHTML =
        bodycombat_cardio_termin[0][i];
      if (localStorage.getItem("pet_bodycombat_cardio") != "1") {
        document.getElementById("petak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("petak_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("petak").innerHTML = "";
      document.getElementById("petak_rez").innerHTML = "";
    }
    i++;
    if (bodycombat_cardio_termin[0][i] != "0") {
      document.getElementById("subota").innerHTML =
        bodycombat_cardio_termin[0][i];
      if (localStorage.getItem("sub_bodycombat_cardio") != "1") {
        document.getElementById("subota_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("subota_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("subota").innerHTML = "";
      document.getElementById("subota_rez").innerHTML = "";
    }
    i++;
    if (bodycombat_cardio_termin[0][i] != "0") {
      document.getElementById("nedelja").innerHTML =
        bodycombat_cardio_termin[0][i];
      if (localStorage.getItem("ned_bodycombat_cardio") != "1") {
        document.getElementById("nedelja_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("nedelja_rez").innerHTML =
          "Poništi rezervaciju";
      }
    } else {
      document.getElementById("nedelja").innerHTML = "";
      document.getElementById("nedelja_rez").innerHTML = "";
    }
  } else if (tip == "zumba_cardio") {
    let i = 0;
    if (zumba_cardio_termin[0][i] != "0") {
      document.getElementById("ponedeljak").innerHTML =
        zumba_cardio_termin[0][i];
      if (localStorage.getItem("pon_zumba_cardio") != "1") {
        document.getElementById("ponedeljak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("ponedeljak_rez").innerHTML =
          "Poništi rezervaciju";
      }
    } else {
      document.getElementById("ponedeljak").innerHTML = "";
      document.getElementById("ponedeljak_rez").innerHTML = "";
    }
    i++;
    if (zumba_cardio_termin[0][i] != "0") {
      document.getElementById("utorak").innerHTML = zumba_cardio_termin[0][i];
      if (localStorage.getItem("uto_zumba_cardio") != "1") {
        document.getElementById("utorak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("utorak_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("utorak").innerHTML = "";
      document.getElementById("utorak_rez").innerHTML = "";
    }
    i++;
    if (zumba_cardio_termin[0][i] != "0") {
      document.getElementById("sreda").innerHTML = zumba_cardio_termin[0][i];
      if (localStorage.getItem("sre_zumba_cardio") != "1") {
        document.getElementById("sreda_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("sreda_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("sreda").innerHTML = "";
      document.getElementById("sreda_rez").innerHTML = "";
    }
    i++;
    if (zumba_cardio_termin[0][i] != "0") {
      document.getElementById("cetvrtak").innerHTML = zumba_cardio_termin[0][i];
      if (localStorage.getItem("cet_zumba_cardio") != "1") {
        document.getElementById("cetvrtak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("cetvrtak_rez").innerHTML =
          "Poništi rezervaciju";
      }
    } else {
      document.getElementById("cetvrtak").innerHTML = "";
      document.getElementById("cetvrtak_rez").innerHTML = "";
    }
    i++;
    if (zumba_cardio_termin[0][i] != "0") {
      document.getElementById("petak").innerHTML = zumba_cardio_termin[0][i];
      if (localStorage.getItem("pet_zumba_cardio") != "1") {
        document.getElementById("petak_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("petak_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("petak").innerHTML = "";
      document.getElementById("petak_rez").innerHTML = "";
    }
    i++;
    if (zumba_cardio_termin[0][i] != "0") {
      document.getElementById("subota").innerHTML = zumba_cardio_termin[0][i];
      if (localStorage.getItem("sub_zumba_cardio") != "1") {
        document.getElementById("subota_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("subota_rez").innerHTML = "Poništi rezervaciju";
      }
    } else {
      document.getElementById("subota").innerHTML = "";
      document.getElementById("subota_rez").innerHTML = "";
    }
    i++;
    if (zumba_cardio_termin[0][i] != "0") {
      document.getElementById("nedelja").innerHTML = zumba_cardio_termin[0][i];
      if (localStorage.getItem("ned_zumba_cardio") != "1") {
        document.getElementById("nedelja_rez").innerHTML = "Rezerviši";
      } else {
        document.getElementById("nedelja_rez").innerHTML =
          "Poništi rezervaciju";
      }
    } else {
      document.getElementById("nedelja").innerHTML = "";
      document.getElementById("nedelja_rez").innerHTML = "";
    }
  }
}

function rezervisi(dan) {
  let tmp;
  let pom;
  if (trening == "dynamic") {
    tmp = dynamic_core_termin;
    pom = "dynamic";
  } else if (trening == "burn") {
    tmp = burn_core_termin;
    pom = "burn";
  } else if (trening == "hiit") {
    tmp = hiit_core_termin;
    pom = "hiit";
  } else if (trening == "bodyattack") {
    tmp = bodyattack_core_termin;
    pom = "bodyattack";
  } else if (trening == "klasicni_pilates") {
    tmp = klasicni_pilates_termin;
    pom = "bodyattack";
  } else if (trening == "stott_pilates") {
    tmp = stott_pilates_termin;
    pom = "bodyattack";
  } else if (trening == "reformer_pilates") {
    tmp = reformer_pilates_termin;
    pom = "bodyattack";
  } else if (trening == "terapijski_pilates") {
    tmp = terapijski_pilates_termin;
    pom = "bodyattack";
  } else if (trening == "prenatal_yoga") {
    tmp = prenatal_yoga_termin;
    pom = "bodyattack";
  } else if (trening == "kundalini_yoga") {
    tmp = kundalini_yoga_termin;
    pom = "bodyattack";
  } else if (trening == "hatha_yoga") {
    tmp = hatha_yoga_termin;
    pom = "bodyattack";
  } else if (trening == "ashtanga_yoga") {
    tmp = ashtanga_yoga_termin;
    pom = "bodyattack";
  } else if (trening == "klasicni_cardio") {
    tmp = klasicni_cardio_termin;
    pom = "bodyattack";
  } else if (trening == "hiit_cardio") {
    tmp = hiit_cardio_termin;
    pom = "bodyattack";
  } else if (trening == "bodycombat_cardio") {
    tmp = bodycombat_cardio_termin;
    pom = "bodyattack";
  } else if (trening == "zumba_cardio") {
    tmp = zumba_cardio_termin;
    pom = "bodyattack";
  }
  if (dan == "ponedeljak") {
    if (tmp[0][0] != "0") {
      if (
        proveri_vreme(
          1,
          parseInt(tmp[0][0].substring(0, 2)),
          parseInt(tmp[0][0].substring(3, 5))
        )
      ) {
        if (trening == "dynamic") {
          if (localStorage.getItem("pon_dynamic") != "1") {
            localStorage.setItem("pon_dynamic", "1");
            document.getElementById("ponedeljak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                1,
                parseInt(tmp[0][0].substring(0, 2)),
                parseInt(tmp[0][0].substring(3, 5))
              )
            ) {
              localStorage.setItem("pon_dynamic", "0");
              document.getElementById("ponedeljak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "burn") {
          if (localStorage.getItem("pon_burn") != "1") {
            localStorage.setItem("pon_burn", "1");
            document.getElementById("ponedeljak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                1,
                parseInt(tmp[0][0].substring(0, 2)),
                parseInt(tmp[0][0].substring(3, 5))
              )
            ) {
              localStorage.setItem("pon_burn", "0");
              document.getElementById("ponedeljak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "hiit") {
          if (localStorage.getItem("pon_hiit") != "1") {
            localStorage.setItem("pon_hiit", "1");
            document.getElementById("ponedeljak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                1,
                parseInt(tmp[0][0].substring(0, 2)),
                parseInt(tmp[0][0].substring(3, 5))
              )
            ) {
              localStorage.setItem("pon_hiit", "0");
              document.getElementById("ponedeljak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "bodyattack") {
          if (localStorage.getItem("pon_bodyattack") != "1") {
            localStorage.setItem("pon_bodyattack", "1");
            document.getElementById("ponedeljak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                1,
                parseInt(tmp[0][0].substring(0, 2)),
                parseInt(tmp[0][0].substring(3, 5))
              )
            ) {
              localStorage.setItem("pon_bodyattack", "0");
              document.getElementById("ponedeljak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "klasicni_pilates") {
          if (localStorage.getItem("pon_klasicni_pilates") != "1") {
            localStorage.setItem("pon_klasicni_pilates", "1");
            document.getElementById("ponedeljak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                1,
                parseInt(tmp[0][0].substring(0, 2)),
                parseInt(tmp[0][0].substring(3, 5))
              )
            ) {
              localStorage.setItem("pon_klasicni_pilates", "0");
              document.getElementById("ponedeljak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "stott_pilates") {
          if (localStorage.getItem("pon_stott_pilates") != "1") {
            localStorage.setItem("pon_stott_pilates", "1");
            document.getElementById("ponedeljak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                1,
                parseInt(tmp[0][0].substring(0, 2)),
                parseInt(tmp[0][0].substring(3, 5))
              )
            ) {
              localStorage.setItem("pon_stott_pilates", "0");
              document.getElementById("ponedeljak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "reformer_pilates") {
          if (localStorage.getItem("pon_reformer_pilates") != "1") {
            localStorage.setItem("pon_reformer_pilates", "1");
            document.getElementById("ponedeljak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                1,
                parseInt(tmp[0][0].substring(0, 2)),
                parseInt(tmp[0][0].substring(3, 5))
              )
            ) {
              localStorage.setItem("pon_reformer_pilates", "0");
              document.getElementById("ponedeljak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "terapijski_pilates") {
          if (localStorage.getItem("pon_terapijski_pilates") != "1") {
            localStorage.setItem("pon_terapijski_pilates", "1");
            document.getElementById("ponedeljak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                1,
                parseInt(tmp[0][0].substring(0, 2)),
                parseInt(tmp[0][0].substring(3, 5))
              )
            ) {
              localStorage.setItem("pon_terapijski_pilates", "0");
              document.getElementById("ponedeljak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "prenatal_yoga") {
          if (localStorage.getItem("pon_prenatal_yoga") != "1") {
            localStorage.setItem("pon_prenata_yoga", "1");
            document.getElementById("ponedeljak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                1,
                parseInt(tmp[0][0].substring(0, 2)),
                parseInt(tmp[0][0].substring(3, 5))
              )
            ) {
              localStorage.setItem("pon_prenatal_yoga", "0");
              document.getElementById("ponedeljak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "kundalini_yoga") {
          if (localStorage.getItem("pon_kundalini_yoga") != "1") {
            localStorage.setItem("pon_kundalini_yoga", "1");
            document.getElementById("ponedeljak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                1,
                parseInt(tmp[0][0].substring(0, 2)),
                parseInt(tmp[0][0].substring(3, 5))
              )
            ) {
              localStorage.setItem("pon_kundalini_yoga", "0");
              document.getElementById("ponedeljak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "hatha_yoga") {
          if (localStorage.getItem("pon_hatha_yoga") != "1") {
            localStorage.setItem("pon_hatha_yoga", "1");
            document.getElementById("ponedeljak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                1,
                parseInt(tmp[0][0].substring(0, 2)),
                parseInt(tmp[0][0].substring(3, 5))
              )
            ) {
              localStorage.setItem("pon_hatha_yoga", "0");
              document.getElementById("ponedeljak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "ashtanga_yoga") {
          if (localStorage.getItem("pon_ashtanga_yoga") != "1") {
            localStorage.setItem("pon_ashtanga_yoga", "1");
            document.getElementById("ponedeljak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                1,
                parseInt(tmp[0][0].substring(0, 2)),
                parseInt(tmp[0][0].substring(3, 5))
              )
            ) {
              localStorage.setItem("pon_ashtanga_yoga", "0");
              document.getElementById("ponedeljak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "klasicni_cardio") {
          if (localStorage.getItem("pon_klasicni_cardio") != "1") {
            localStorage.setItem("pon_klasicni_cardio", "1");
            document.getElementById("ponedeljak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                1,
                parseInt(tmp[0][0].substring(0, 2)),
                parseInt(tmp[0][0].substring(3, 5))
              )
            ) {
              localStorage.setItem("pon_klasicni_cardio", "0");
              document.getElementById("ponedeljak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "hiit_cardio") {
          if (localStorage.getItem("pon_hiit_cardio") != "1") {
            localStorage.setItem("pon_hiit_cardio", "1");
            document.getElementById("ponedeljak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                1,
                parseInt(tmp[0][0].substring(0, 2)),
                parseInt(tmp[0][0].substring(3, 5))
              )
            ) {
              localStorage.setItem("pon_hiit_cardio", "0");
              document.getElementById("ponedeljak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "bodycombat_cardio") {
          if (localStorage.getItem("pon_bodycombat_cardio") != "1") {
            localStorage.setItem("pon_bodycombat_cardio", "1");
            document.getElementById("ponedeljak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                1,
                parseInt(tmp[0][0].substring(0, 2)),
                parseInt(tmp[0][0].substring(3, 5))
              )
            ) {
              localStorage.setItem("pon_bodycombat_cardio", "0");
              document.getElementById("ponedeljak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "zumba_cardio") {
          if (localStorage.getItem("pon_zumba_cardio") != "1") {
            localStorage.setItem("pon_zumba_cardio", "1");
            document.getElementById("ponedeljak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                1,
                parseInt(tmp[0][0].substring(0, 2)),
                parseInt(tmp[0][0].substring(3, 5))
              )
            ) {
              localStorage.setItem("pon_zumba_cardio", "0");
              document.getElementById("ponedeljak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        }
      } else {
        alert("prosao termin");
      }
    }
  } else if (dan == "utorak") {
    if (tmp[0][1] != "0") {
      if (
        proveri_vreme(
          2,
          parseInt(tmp[0][1].substring(0, 2)),
          parseInt(tmp[0][1].substring(3, 5))
        )
      ) {
        if (trening == "dynamic") {
          if (localStorage.getItem("uto_dynamic") != "1") {
            localStorage.setItem("uto_dynamic", "1");
            document.getElementById("utorak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                2,
                parseInt(tmp[0][1].substring(0, 2)),
                parseInt(tmp[0][1].substring(3, 5))
              )
            ) {
              localStorage.setItem("uto_dynamic", "0");
              document.getElementById("utorak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "burn") {
          if (localStorage.getItem("uto_burn") != "1") {
            localStorage.setItem("uto_burn", "1");
            document.getElementById("utorak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                2,
                parseInt(tmp[0][1].substring(0, 2)),
                parseInt(tmp[0][1].substring(3, 5))
              )
            ) {
              localStorage.setItem("uto_burn", "0");
              document.getElementById("utorak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "hiit") {
          if (localStorage.getItem("uto_hiit") != "1") {
            localStorage.setItem("uto_hiit", "1");
            document.getElementById("utorak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                2,
                parseInt(tmp[0][1].substring(0, 2)),
                parseInt(tmp[0][1].substring(3, 5))
              )
            ) {
              localStorage.setItem("uto_hiit", "0");
              document.getElementById("utorak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "bodyattack") {
          if (localStorage.getItem("uto_bodyattack") != "1") {
            localStorage.setItem("uto_bodyattack", "1");
            document.getElementById("utorak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                2,
                parseInt(tmp[0][1].substring(0, 2)),
                parseInt(tmp[0][1].substring(3, 5))
              )
            ) {
              localStorage.setItem("uto_bodyattack", "0");
              document.getElementById("utorak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "klasicni_pilates") {
          if (localStorage.getItem("uto_klasicni_pilates") != "1") {
            localStorage.setItem("uto_klasicni_pilates", "1");
            document.getElementById("utorak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                2,
                parseInt(tmp[0][1].substring(0, 2)),
                parseInt(tmp[0][1].substring(3, 5))
              )
            ) {
              localStorage.setItem("uto_klasicni_pilates", "0");
              document.getElementById("utorak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "stott_pilates") {
          if (localStorage.getItem("uto_stott_pilates") != "1") {
            localStorage.setItem("uto_stott_pilates", "1");
            document.getElementById("utorak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                2,
                parseInt(tmp[0][1].substring(0, 2)),
                parseInt(tmp[0][1].substring(3, 5))
              )
            ) {
              localStorage.setItem("uto_stott_pilates", "0");
              document.getElementById("utorak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "reformer_pilates") {
          if (localStorage.getItem("uto_reformer_pilates") != "1") {
            localStorage.setItem("uto_reformer_pilates", "1");
            document.getElementById("utorak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                2,
                parseInt(tmp[0][1].substring(0, 2)),
                parseInt(tmp[0][1].substring(3, 5))
              )
            ) {
              localStorage.setItem("uto_reformer_pilates", "0");
              document.getElementById("utorak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "terapijski_pilates") {
          if (localStorage.getItem("uto_terapijski_pilates") != "1") {
            localStorage.setItem("uto_terapijski_pilates", "1");
            document.getElementById("utorak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                2,
                parseInt(tmp[0][1].substring(0, 2)),
                parseInt(tmp[0][1].substring(3, 5))
              )
            ) {
              localStorage.setItem("uto_terapijski_pilates", "0");
              document.getElementById("utorak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "prenatal_yoga") {
          if (localStorage.getItem("uto_prenatal_yoga") != "1") {
            localStorage.setItem("uto_prenata_yoga", "1");
            document.getElementById("utorak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                2,
                parseInt(tmp[0][1].substring(0, 2)),
                parseInt(tmp[0][1].substring(3, 5))
              )
            ) {
              localStorage.setItem("uto_prenatal_yoga", "0");
              document.getElementById("utorak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "kundalini_yoga") {
          if (localStorage.getItem("uto_kundalini_yoga") != "1") {
            localStorage.setItem("uto_kundalini_yoga", "1");
            document.getElementById("utorak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                2,
                parseInt(tmp[0][1].substring(0, 2)),
                parseInt(tmp[0][1].substring(3, 5))
              )
            ) {
              localStorage.setItem("uto_kundalini_yoga", "0");
              document.getElementById("utorak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "hatha_yoga") {
          if (localStorage.getItem("uto_hatha_yoga") != "1") {
            localStorage.setItem("uto_hatha_yoga", "1");
            document.getElementById("utorak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                2,
                parseInt(tmp[0][1].substring(0, 2)),
                parseInt(tmp[0][1].substring(3, 5))
              )
            ) {
              localStorage.setItem("uto_hatha_yoga", "0");
              document.getElementById("utorak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "ashtanga_yoga") {
          if (localStorage.getItem("uto_ashtanga_yoga") != "1") {
            localStorage.setItem("uto_ashtanga_yoga", "1");
            document.getElementById("utorak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                2,
                parseInt(tmp[0][1].substring(0, 2)),
                parseInt(tmp[0][1].substring(3, 5))
              )
            ) {
              localStorage.setItem("uto_ashtanga_yoga", "0");
              document.getElementById("utorak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "klasicni_cardio") {
          if (localStorage.getItem("uto_klasicni_cardio") != "1") {
            localStorage.setItem("uto_klasicni_cardio", "1");
            document.getElementById("utorak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                2,
                parseInt(tmp[0][1].substring(0, 2)),
                parseInt(tmp[0][1].substring(3, 5))
              )
            ) {
              localStorage.setItem("uto_klasicni_cardio", "0");
              document.getElementById("utorak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "hiit_cardio") {
          if (localStorage.getItem("uto_hiit_cardio") != "1") {
            localStorage.setItem("uto_hiit_cardio", "1");
            document.getElementById("utorak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                2,
                parseInt(tmp[0][1].substring(0, 2)),
                parseInt(tmp[0][1].substring(3, 5))
              )
            ) {
              localStorage.setItem("uto_hiit_cardio", "0");
              document.getElementById("utorak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "bodycombat_cardio") {
          if (localStorage.getItem("uto_bodycombat_cardio") != "1") {
            localStorage.setItem("uto_bodycombat_cardio", "1");
            document.getElementById("utorak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                2,
                parseInt(tmp[0][1].substring(0, 2)),
                parseInt(tmp[0][1].substring(3, 5))
              )
            ) {
              localStorage.setItem("uto_bodycombat_cardio", "0");
              document.getElementById("utorak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "zumba_cardio") {
          if (localStorage.getItem("uto_zumba_cardio") != "1") {
            localStorage.setItem("uto_zumba_cardio", "1");
            document.getElementById("utorak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                2,
                parseInt(tmp[0][1].substring(0, 2)),
                parseInt(tmp[0][1].substring(3, 5))
              )
            ) {
              localStorage.setItem("uto_zumba_cardio", "0");
              document.getElementById("utorak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        }
      } else {
        alert("prosao termin");
      }
    }
  } else if (dan == "sreda") {
    if (tmp[0][2] != "0") {
      if (
        proveri_vreme(
          3,
          parseInt(tmp[0][2].substring(0, 2)),
          parseInt(tmp[0][2].substring(3, 5))
        )
      ) {
        if (trening == "dynamic") {
          if (localStorage.getItem("sre_dynamic") != "1") {
            localStorage.setItem("sre_dynamic", "1");
            document.getElementById("sreda_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                3,
                parseInt(tmp[0][2].substring(0, 2)),
                parseInt(tmp[0][2].substring(3, 5))
              )
            ) {
              localStorage.setItem("sre_dynamic", "0");
              document.getElementById("sreda_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "burn") {
          if (localStorage.getItem("sre_burn") != "1") {
            localStorage.setItem("sre_burn", "1");
            document.getElementById("sreda_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                3,
                parseInt(tmp[0][2].substring(0, 2)),
                parseInt(tmp[0][2].substring(3, 5))
              )
            ) {
              localStorage.setItem("sre_burn", "0");
              document.getElementById("sreda_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "hiit") {
          if (localStorage.getItem("sre_hiit") != "1") {
            localStorage.setItem("sre_hiit", "1");
            document.getElementById("sreda_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                3,
                parseInt(tmp[0][2].substring(0, 2)),
                parseInt(tmp[0][2].substring(3, 5))
              )
            ) {
              localStorage.setItem("sre_hiit", "0");
              document.getElementById("sreda_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "bodyattack") {
          if (localStorage.getItem("sre_bodyattack") != "1") {
            localStorage.setItem("sre_bodyattack", "1");
            document.getElementById("sreda_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                3,
                parseInt(tmp[0][2].substring(0, 2)),
                parseInt(tmp[0][2].substring(3, 5))
              )
            ) {
              localStorage.setItem("sre_bodyattack", "0");
              document.getElementById("sreda_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "klasicni_pilates") {
          if (localStorage.getItem("sre_klasicni_pilates") != "1") {
            localStorage.setItem("sre_klasicni_pilates", "1");
            document.getElementById("sreda_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                3,
                parseInt(tmp[0][2].substring(0, 2)),
                parseInt(tmp[0][2].substring(3, 5))
              )
            ) {
              localStorage.setItem("sre_klasicni_pilates", "0");
              document.getElementById("sreda_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "stott_pilates") {
          if (localStorage.getItem("sre_stott_pilates") != "1") {
            localStorage.setItem("sre_stott_pilates", "1");
            document.getElementById("sreda_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                3,
                parseInt(tmp[0][2].substring(0, 2)),
                parseInt(tmp[0][2].substring(3, 5))
              )
            ) {
              localStorage.setItem("sre_stott_pilates", "0");
              document.getElementById("sreda_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "reformer_pilates") {
          if (localStorage.getItem("sre_reformer_pilates") != "1") {
            localStorage.setItem("sre_reformer_pilates", "1");
            document.getElementById("sreda_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                3,
                parseInt(tmp[0][2].substring(0, 2)),
                parseInt(tmp[0][2].substring(3, 5))
              )
            ) {
              localStorage.setItem("sre_reformer_pilates", "0");
              document.getElementById("sreda_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "terapijski_pilates") {
          if (localStorage.getItem("sre_terapijski_pilates") != "1") {
            localStorage.setItem("sre_terapijski_pilates", "1");
            document.getElementById("sreda_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                3,
                parseInt(tmp[0][2].substring(0, 2)),
                parseInt(tmp[0][2].substring(3, 5))
              )
            ) {
              localStorage.setItem("sre_terapijski_pilates", "0");
              document.getElementById("sreda_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "prenatal_yoga") {
          if (localStorage.getItem("sre_prenatal_yoga") != "1") {
            localStorage.setItem("sre_prenata_yoga", "1");
            document.getElementById("sreda_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                3,
                parseInt(tmp[0][2].substring(0, 2)),
                parseInt(tmp[0][2].substring(3, 5))
              )
            ) {
              localStorage.setItem("sre_prenatal_yoga", "0");
              document.getElementById("sreda_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "kundalini_yoga") {
          if (localStorage.getItem("sre_kundalini_yoga") != "1") {
            localStorage.setItem("sre_kundalini_yoga", "1");
            document.getElementById("sreda_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                3,
                parseInt(tmp[0][2].substring(0, 2)),
                parseInt(tmp[0][2].substring(3, 5))
              )
            ) {
              localStorage.setItem("sre_kundalini_yoga", "0");
              document.getElementById("sreda_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "hatha_yoga") {
          if (localStorage.getItem("sre_hatha_yoga") != "1") {
            localStorage.setItem("sre_hatha_yoga", "1");
            document.getElementById("sreda_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                3,
                parseInt(tmp[0][2].substring(0, 2)),
                parseInt(tmp[0][2].substring(3, 5))
              )
            ) {
              localStorage.setItem("sre_hatha_yoga", "0");
              document.getElementById("sreda_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "ashtanga_yoga") {
          if (localStorage.getItem("sre_ashtanga_yoga") != "1") {
            localStorage.setItem("sre_ashtanga_yoga", "1");
            document.getElementById("sreda_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                3,
                parseInt(tmp[0][2].substring(0, 2)),
                parseInt(tmp[0][2].substring(3, 5))
              )
            ) {
              localStorage.setItem("sre_ashtanga_yoga", "0");
              document.getElementById("sreda_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "klasicni_cardio") {
          if (localStorage.getItem("sre_klasicni_cardio") != "1") {
            localStorage.setItem("sre_klasicni_cardio", "1");
            document.getElementById("sreda_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                3,
                parseInt(tmp[0][2].substring(0, 2)),
                parseInt(tmp[0][2].substring(3, 5))
              )
            ) {
              localStorage.setItem("sre_klasicni_cardio", "0");
              document.getElementById("sreda_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "hiit_cardio") {
          if (localStorage.getItem("sre_hiit_cardio") != "1") {
            localStorage.setItem("sre_hiit_cardio", "1");
            document.getElementById("sreda_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                3,
                parseInt(tmp[0][2].substring(0, 2)),
                parseInt(tmp[0][2].substring(3, 5))
              )
            ) {
              localStorage.setItem("sre_hiit_cardio", "0");
              document.getElementById("sreda_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "bodycombat_cardio") {
          if (localStorage.getItem("sre_bodycombat_cardio") != "1") {
            localStorage.setItem("sre_bodycombat_cardio", "1");
            document.getElementById("sreda_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                3,
                parseInt(tmp[0][2].substring(0, 2)),
                parseInt(tmp[0][2].substring(3, 5))
              )
            ) {
              localStorage.setItem("sre_bodycombat_cardio", "0");
              document.getElementById("sreda_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "zumba_cardio") {
          if (localStorage.getItem("sre_zumba_cardio") != "1") {
            localStorage.setItem("sre_zumba_cardio", "1");
            document.getElementById("sreda_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                3,
                parseInt(tmp[0][2].substring(0, 2)),
                parseInt(tmp[0][2].substring(3, 5))
              )
            ) {
              localStorage.setItem("sre_zumba_cardio", "0");
              document.getElementById("sreda_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        }
      } else {
        alert("prosao termin");
      }
    }
  } else if (dan == "cetvrtak") {
    if (tmp[0][3] != "0") {
      if (
        proveri_vreme(
          4,
          parseInt(tmp[0][3].substring(0, 2)),
          parseInt(tmp[0][3].substring(3, 5))
        )
      ) {
        if (trening == "dynamic") {
          if (localStorage.getItem("cet_dynamic") != "1") {
            localStorage.setItem("cet_dynamic", "1");
            document.getElementById("cetvrtak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                4,
                parseInt(tmp[0][3].substring(0, 2)),
                parseInt(tmp[0][3].substring(3, 5))
              )
            ) {
              localStorage.setItem("cet_dynamic", "0");
              document.getElementById("cetvrtak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "burn") {
          if (localStorage.getItem("cet_burn") != "1") {
            localStorage.setItem("cet_burn", "1");
            document.getElementById("cetvrtak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                4,
                parseInt(tmp[0][3].substring(0, 2)),
                parseInt(tmp[0][3].substring(3, 5))
              )
            ) {
              localStorage.setItem("cet_burn", "0");
              document.getElementById("cetvrtak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "hiit") {
          if (localStorage.getItem("cet_hiit") != "1") {
            localStorage.setItem("cet_hiit", "1");
            document.getElementById("cetvrtak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                4,
                parseInt(tmp[0][3].substring(0, 2)),
                parseInt(tmp[0][3].substring(3, 5))
              )
            ) {
              localStorage.setItem("cet_hiit", "0");
              document.getElementById("cetvrtak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "bodyattack") {
          if (localStorage.getItem("cet_bodyattack") != "1") {
            localStorage.setItem("cet_bodyattack", "1");
            document.getElementById("cetvrtak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                4,
                parseInt(tmp[0][3].substring(0, 2)),
                parseInt(tmp[0][3].substring(3, 5))
              )
            ) {
              localStorage.setItem("cet_bodyattack", "0");
              document.getElementById("cetvrtak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "klasicni_pilates") {
          if (localStorage.getItem("cet_klasicni_pilates") != "1") {
            localStorage.setItem("cet_klasicni_pilates", "1");
            document.getElementById("cetvrtak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                4,
                parseInt(tmp[0][3].substring(0, 2)),
                parseInt(tmp[0][3].substring(3, 5))
              )
            ) {
              localStorage.setItem("cet_klasicni_pilates", "0");
              document.getElementById("cetvrtak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "stott_pilates") {
          if (localStorage.getItem("cet_stott_pilates") != "1") {
            localStorage.setItem("cet_stott_pilates", "1");
            document.getElementById("cetvrtak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                4,
                parseInt(tmp[0][3].substring(0, 2)),
                parseInt(tmp[0][3].substring(3, 5))
              )
            ) {
              localStorage.setItem("cet_stott_pilates", "0");
              document.getElementById("cetvrtak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "reformer_pilates") {
          if (localStorage.getItem("cet_reformer_pilates") != "1") {
            localStorage.setItem("cet_reformer_pilates", "1");
            document.getElementById("cetvrtak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                4,
                parseInt(tmp[0][3].substring(0, 2)),
                parseInt(tmp[0][3].substring(3, 5))
              )
            ) {
              localStorage.setItem("cet_reformer_pilates", "0");
              document.getElementById("cetvrtak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "terapijski_pilates") {
          if (localStorage.getItem("cet_terapijski_pilates") != "1") {
            localStorage.setItem("cet_terapijski_pilates", "1");
            document.getElementById("cetvrtak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                4,
                parseInt(tmp[0][3].substring(0, 2)),
                parseInt(tmp[0][3].substring(3, 5))
              )
            ) {
              localStorage.setItem("cet_terapijski_pilates", "0");
              document.getElementById("cetvrtak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "prenatal_yoga") {
          if (localStorage.getItem("cet_prenatal_yoga") != "1") {
            localStorage.setItem("cet_prenata_yoga", "1");
            document.getElementById("cetvrtak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                4,
                parseInt(tmp[0][3].substring(0, 2)),
                parseInt(tmp[0][3].substring(3, 5))
              )
            ) {
              localStorage.setItem("cet_prenatal_yoga", "0");
              document.getElementById("cetvrtak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "kundalini_yoga") {
          if (localStorage.getItem("cet_kundalini_yoga") != "1") {
            localStorage.setItem("cet_kundalini_yoga", "1");
            document.getElementById("cetvrtak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                4,
                parseInt(tmp[0][3].substring(0, 2)),
                parseInt(tmp[0][3].substring(3, 5))
              )
            ) {
              localStorage.setItem("cet_kundalini_yoga", "0");
              document.getElementById("cetvrtak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "hatha_yoga") {
          if (localStorage.getItem("cet_hatha_yoga") != "1") {
            localStorage.setItem("cet_hatha_yoga", "1");
            document.getElementById("cetvrtak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                4,
                parseInt(tmp[0][3].substring(0, 2)),
                parseInt(tmp[0][3].substring(3, 5))
              )
            ) {
              localStorage.setItem("cet_hatha_yoga", "0");
              document.getElementById("cetvrtak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "ashtanga_yoga") {
          if (localStorage.getItem("cet_ashtanga_yoga") != "1") {
            localStorage.setItem("cet_ashtanga_yoga", "1");
            document.getElementById("cetvrtak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                4,
                parseInt(tmp[0][3].substring(0, 2)),
                parseInt(tmp[0][3].substring(3, 5))
              )
            ) {
              localStorage.setItem("cet_ashtanga_yoga", "0");
              document.getElementById("cetvrtak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "klasicni_cardio") {
          if (localStorage.getItem("cet_klasicni_cardio") != "1") {
            localStorage.setItem("cet_klasicni_cardio", "1");
            document.getElementById("cetvrtak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                4,
                parseInt(tmp[0][3].substring(0, 2)),
                parseInt(tmp[0][3].substring(3, 5))
              )
            ) {
              localStorage.setItem("cet_klasicni_cardio", "0");
              document.getElementById("cetvrtak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "hiit_cardio") {
          if (localStorage.getItem("cet_hiit_cardio") != "1") {
            localStorage.setItem("cet_hiit_cardio", "1");
            document.getElementById("cetvrtak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                4,
                parseInt(tmp[0][3].substring(0, 2)),
                parseInt(tmp[0][3].substring(3, 5))
              )
            ) {
              localStorage.setItem("cet_hiit_cardio", "0");
              document.getElementById("cetvrtak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "bodycombat_cardio") {
          if (localStorage.getItem("cet_bodycombat_cardio") != "1") {
            localStorage.setItem("cet_bodycombat_cardio", "1");
            document.getElementById("cetvrtak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                4,
                parseInt(tmp[0][3].substring(0, 2)),
                parseInt(tmp[0][3].substring(3, 5))
              )
            ) {
              localStorage.setItem("cet_bodycombat_cardio", "0");
              document.getElementById("cetvrtak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "zumba_cardio") {
          if (localStorage.getItem("cet_zumba_cardio") != "1") {
            localStorage.setItem("cet_zumba_cardio", "1");
            document.getElementById("cetvrtak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                4,
                parseInt(tmp[0][3].substring(0, 2)),
                parseInt(tmp[0][3].substring(3, 5))
              )
            ) {
              localStorage.setItem("cet_zumba_cardio", "0");
              document.getElementById("cetvrtak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        }
      } else {
        alert("prosao termin");
      }
    }
  } else if (dan == "petak") {
    if (tmp[0][4] != "0") {
      if (
        proveri_vreme(
          5,
          parseInt(tmp[0][4].substring(0, 2)),
          parseInt(tmp[0][4].substring(3, 5))
        )
      ) {
        if (trening == "dynamic") {
          if (localStorage.getItem("pet_dynamic") != "1") {
            localStorage.setItem("pet_dynamic", "1");
            document.getElementById("petak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                5,
                parseInt(tmp[0][4].substring(0, 2)),
                parseInt(tmp[0][4].substring(3, 5))
              )
            ) {
              localStorage.setItem("pet_dynamic", "0");
              document.getElementById("petak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "burn") {
          if (localStorage.getItem("pet_burn") != "1") {
            localStorage.setItem("pet_burn", "1");
            document.getElementById("petak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                5,
                parseInt(tmp[0][4].substring(0, 2)),
                parseInt(tmp[0][4].substring(3, 5))
              )
            ) {
              localStorage.setItem("pet_burn", "0");
              document.getElementById("petak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "hiit") {
          if (localStorage.getItem("pet_hiit") != "1") {
            localStorage.setItem("pet_hiit", "1");
            document.getElementById("petak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                5,
                parseInt(tmp[0][4].substring(0, 2)),
                parseInt(tmp[0][4].substring(3, 5))
              )
            ) {
              localStorage.setItem("pet_hiit", "0");
              document.getElementById("petak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "bodyattack") {
          if (localStorage.getItem("pet_bodyattack") != "1") {
            localStorage.setItem("pet_bodyattack", "1");
            document.getElementById("petak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                5,
                parseInt(tmp[0][4].substring(0, 2)),
                parseInt(tmp[0][4].substring(3, 5))
              )
            ) {
              localStorage.setItem("pet_bodyattack", "0");
              document.getElementById("petak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "klasicni_pilates") {
          if (localStorage.getItem("pet_klasicni_pilates") != "1") {
            localStorage.setItem("pet_klasicni_pilates", "1");
            document.getElementById("petak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                5,
                parseInt(tmp[0][4].substring(0, 2)),
                parseInt(tmp[0][4].substring(3, 5))
              )
            ) {
              localStorage.setItem("pet_klasicni_pilates", "0");
              document.getElementById("petak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "stott_pilates") {
          if (localStorage.getItem("pet_stott_pilates") != "1") {
            localStorage.setItem("pet_stott_pilates", "1");
            document.getElementById("petak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                5,
                parseInt(tmp[0][4].substring(0, 2)),
                parseInt(tmp[0][4].substring(3, 5))
              )
            ) {
              localStorage.setItem("pet_stott_pilates", "0");
              document.getElementById("petak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "reformer_pilates") {
          if (localStorage.getItem("pet_reformer_pilates") != "1") {
            localStorage.setItem("pet_reformer_pilates", "1");
            document.getElementById("petak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                5,
                parseInt(tmp[0][4].substring(0, 2)),
                parseInt(tmp[0][4].substring(3, 5))
              )
            ) {
              localStorage.setItem("pet_reformer_pilates", "0");
              document.getElementById("petak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "terapijski_pilates") {
          if (localStorage.getItem("pet_terapijski_pilates") != "1") {
            localStorage.setItem("pet_terapijski_pilates", "1");
            document.getElementById("petak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                5,
                parseInt(tmp[0][4].substring(0, 2)),
                parseInt(tmp[0][4].substring(3, 5))
              )
            ) {
              localStorage.setItem("pet_terapijski_pilates", "0");
              document.getElementById("petak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "prenatal_yoga") {
          if (localStorage.getItem("pet_prenatal_yoga") != "1") {
            localStorage.setItem("pet_prenata_yoga", "1");
            document.getElementById("petak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                5,
                parseInt(tmp[0][4].substring(0, 2)),
                parseInt(tmp[0][4].substring(3, 5))
              )
            ) {
              localStorage.setItem("pet_prenatal_yoga", "0");
              document.getElementById("petak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "kundalini_yoga") {
          if (localStorage.getItem("pet_kundalini_yoga") != "1") {
            localStorage.setItem("pet_kundalini_yoga", "1");
            document.getElementById("petak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                5,
                parseInt(tmp[0][4].substring(0, 2)),
                parseInt(tmp[0][4].substring(3, 5))
              )
            ) {
              localStorage.setItem("pet_kundalini_yoga", "0");
              document.getElementById("petak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "hatha_yoga") {
          if (localStorage.getItem("pet_hatha_yoga") != "1") {
            localStorage.setItem("pet_hatha_yoga", "1");
            document.getElementById("petak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                5,
                parseInt(tmp[0][4].substring(0, 2)),
                parseInt(tmp[0][4].substring(3, 5))
              )
            ) {
              localStorage.setItem("pet_hatha_yoga", "0");
              document.getElementById("petak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "ashtanga_yoga") {
          if (localStorage.getItem("pet_ashtanga_yoga") != "1") {
            localStorage.setItem("pet_ashtanga_yoga", "1");
            document.getElementById("petak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                5,
                parseInt(tmp[0][4].substring(0, 2)),
                parseInt(tmp[0][4].substring(3, 5))
              )
            ) {
              localStorage.setItem("pet_ashtanga_yoga", "0");
              document.getElementById("petak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "klasicni_cardio") {
          if (localStorage.getItem("pet_klasicni_cardio") != "1") {
            localStorage.setItem("pet_klasicni_cardio", "1");
            document.getElementById("petak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                5,
                parseInt(tmp[0][4].substring(0, 2)),
                parseInt(tmp[0][4].substring(3, 5))
              )
            ) {
              localStorage.setItem("pet_klasicni_cardio", "0");
              document.getElementById("petak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "hiit_cardio") {
          if (localStorage.getItem("pet_hiit_cardio") != "1") {
            localStorage.setItem("pet_hiit_cardio", "1");
            document.getElementById("petak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                5,
                parseInt(tmp[0][4].substring(0, 2)),
                parseInt(tmp[0][4].substring(3, 5))
              )
            ) {
              localStorage.setItem("pet_hiit_cardio", "0");
              document.getElementById("petak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "bodycombat_cardio") {
          if (localStorage.getItem("pet_bodycombat_cardio") != "1") {
            localStorage.setItem("pet_bodycombat_cardio", "1");
            document.getElementById("petak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                5,
                parseInt(tmp[0][4].substring(0, 2)),
                parseInt(tmp[0][4].substring(3, 5))
              )
            ) {
              localStorage.setItem("pet_bodycombat_cardio", "0");
              document.getElementById("petak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "zumba_cardio") {
          if (localStorage.getItem("pet_zumba_cardio") != "1") {
            localStorage.setItem("pet_zumba_cardio", "1");
            document.getElementById("petak_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                5,
                parseInt(tmp[0][4].substring(0, 2)),
                parseInt(tmp[0][4].substring(3, 5))
              )
            ) {
              localStorage.setItem("pet_zumba_cardio", "0");
              document.getElementById("petak_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        }
      } else {
        alert("prosao termin");
      }
    }
  } else if (dan == "subota") {
    if (tmp[0][5] != "0") {
      if (
        proveri_vreme(
          6,
          parseInt(tmp[0][5].substring(0, 2)),
          parseInt(tmp[0][5].substring(3, 5))
        )
      ) {
        if (trening == "dynamic") {
          if (localStorage.getItem("sub_dynamic") != "1") {
            localStorage.setItem("sub_dynamic", "1");
            document.getElementById("subota_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                6,
                parseInt(tmp[0][5].substring(0, 2)),
                parseInt(tmp[0][5].substring(3, 5))
              )
            ) {
              localStorage.setItem("sub_dynamic", "0");
              document.getElementById("subota_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "burn") {
          if (localStorage.getItem("sub_burn") != "1") {
            localStorage.setItem("sub_burn", "1");
            document.getElementById("subota_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                6,
                parseInt(tmp[0][5].substring(0, 2)),
                parseInt(tmp[0][5].substring(3, 5))
              )
            ) {
              localStorage.setItem("sub_burn", "0");
              document.getElementById("subota_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "hiit") {
          if (localStorage.getItem("sub_hiit") != "1") {
            localStorage.setItem("sub_hiit", "1");
            document.getElementById("subota_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                6,
                parseInt(tmp[0][5].substring(0, 2)),
                parseInt(tmp[0][5].substring(3, 5))
              )
            ) {
              localStorage.setItem("sub_hiit", "0");
              document.getElementById("subota_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "bodyattack") {
          if (localStorage.getItem("sub_bodyattack") != "1") {
            localStorage.setItem("sub_bodyattack", "1");
            document.getElementById("subota_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                6,
                parseInt(tmp[0][5].substring(0, 2)),
                parseInt(tmp[0][5].substring(3, 5))
              )
            ) {
              localStorage.setItem("sub_bodyattack", "0");
              document.getElementById("subota_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "klasicni_pilates") {
          if (localStorage.getItem("sub_klasicni_pilates") != "1") {
            localStorage.setItem("sub_klasicni_pilates", "1");
            document.getElementById("subota_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                6,
                parseInt(tmp[0][5].substring(0, 2)),
                parseInt(tmp[0][5].substring(3, 5))
              )
            ) {
              localStorage.setItem("sub_klasicni_pilates", "0");
              document.getElementById("subota_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "stott_pilates") {
          if (localStorage.getItem("sub_stott_pilates") != "1") {
            localStorage.setItem("sub_stott_pilates", "1");
            document.getElementById("subota_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                6,
                parseInt(tmp[0][5].substring(0, 2)),
                parseInt(tmp[0][5].substring(3, 5))
              )
            ) {
              localStorage.setItem("sub_stott_pilates", "0");
              document.getElementById("subota_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "reformer_pilates") {
          if (localStorage.getItem("sub_reformer_pilates") != "1") {
            localStorage.setItem("sub_reformer_pilates", "1");
            document.getElementById("subota_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                6,
                parseInt(tmp[0][5].substring(0, 2)),
                parseInt(tmp[0][5].substring(3, 5))
              )
            ) {
              localStorage.setItem("sub_reformer_pilates", "0");
              document.getElementById("subota_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "terapijski_pilates") {
          if (localStorage.getItem("sub_terapijski_pilates") != "1") {
            localStorage.setItem("sub_terapijski_pilates", "1");
            document.getElementById("subota_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                6,
                parseInt(tmp[0][5].substring(0, 2)),
                parseInt(tmp[0][5].substring(3, 5))
              )
            ) {
              localStorage.setItem("sub_terapijski_pilates", "0");
              document.getElementById("subota_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "prenatal_yoga") {
          if (localStorage.getItem("sub_prenatal_yoga") != "1") {
            localStorage.setItem("sub_prenata_yoga", "1");
            document.getElementById("subota_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                6,
                parseInt(tmp[0][5].substring(0, 2)),
                parseInt(tmp[0][5].substring(3, 5))
              )
            ) {
              localStorage.setItem("sub_prenatal_yoga", "0");
              document.getElementById("subota_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "kundalini_yoga") {
          if (localStorage.getItem("sub_kundalini_yoga") != "1") {
            localStorage.setItem("sub_kundalini_yoga", "1");
            document.getElementById("subota_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                6,
                parseInt(tmp[0][5].substring(0, 2)),
                parseInt(tmp[0][5].substring(3, 5))
              )
            ) {
              localStorage.setItem("sub_kundalini_yoga", "0");
              document.getElementById("subota_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "hatha_yoga") {
          if (localStorage.getItem("sub_hatha_yoga") != "1") {
            localStorage.setItem("sub_hatha_yoga", "1");
            document.getElementById("subota_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                6,
                parseInt(tmp[0][5].substring(0, 2)),
                parseInt(tmp[0][5].substring(3, 5))
              )
            ) {
              localStorage.setItem("sub_hatha_yoga", "0");
              document.getElementById("subota_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "ashtanga_yoga") {
          if (localStorage.getItem("sub_ashtanga_yoga") != "1") {
            localStorage.setItem("sub_ashtanga_yoga", "1");
            document.getElementById("subota_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                6,
                parseInt(tmp[0][5].substring(0, 2)),
                parseInt(tmp[0][5].substring(3, 5))
              )
            ) {
              localStorage.setItem("sub_ashtanga_yoga", "0");
              document.getElementById("subota_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "klasicni_cardio") {
          if (localStorage.getItem("sub_klasicni_cardio") != "1") {
            localStorage.setItem("sub_klasicni_cardio", "1");
            document.getElementById("subota_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                6,
                parseInt(tmp[0][5].substring(0, 2)),
                parseInt(tmp[0][5].substring(3, 5))
              )
            ) {
              localStorage.setItem("sub_klasicni_cardio", "0");
              document.getElementById("subota_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "hiit_cardio") {
          if (localStorage.getItem("sub_hiit_cardio") != "1") {
            localStorage.setItem("sub_hiit_cardio", "1");
            document.getElementById("subota_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                6,
                parseInt(tmp[0][5].substring(0, 2)),
                parseInt(tmp[0][5].substring(3, 5))
              )
            ) {
              localStorage.setItem("sub_hiit_cardio", "0");
              document.getElementById("subota_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "bodycombat_cardio") {
          if (localStorage.getItem("sub_bodycombat_cardio") != "1") {
            localStorage.setItem("sub_bodycombat_cardio", "1");
            document.getElementById("subota_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                6,
                parseInt(tmp[0][5].substring(0, 2)),
                parseInt(tmp[0][5].substring(3, 5))
              )
            ) {
              localStorage.setItem("sub_bodycombat_cardio", "0");
              document.getElementById("subota_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "zumba_cardio") {
          if (localStorage.getItem("sub_zumba_cardio") != "1") {
            localStorage.setItem("sub_zumba_cardio", "1");
            document.getElementById("subota_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                6,
                parseInt(tmp[0][5].substring(0, 2)),
                parseInt(tmp[0][5].substring(3, 5))
              )
            ) {
              localStorage.setItem("sub_zumba_cardio", "0");
              document.getElementById("subota_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        }
      } else {
        alert("prosao termin");
      }
    }
  } else if (dan == "nedelja") {
    if (tmp[0][6] != "0") {
      if (
        proveri_vreme(
          0,
          parseInt(tmp[0][6].substring(0, 2)),
          parseInt(tmp[0][6].substring(3, 5))
        )
      ) {
        if (trening == "dynamic") {
          if (localStorage.getItem("ned_dynamic") != "1") {
            localStorage.setItem("ned_dynamic", "1");
            document.getElementById("nedelja_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                0,
                parseInt(tmp[0][6].substring(0, 2)),
                parseInt(tmp[0][6].substring(3, 5))
              )
            ) {
              localStorage.setItem("ned_dynamic", "0");
              document.getElementById("nedelja_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "burn") {
          if (localStorage.getItem("ned_burn") != "1") {
            localStorage.setItem("ned_burn", "1");
            document.getElementById("nedelja_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                0,
                parseInt(tmp[0][6].substring(0, 2)),
                parseInt(tmp[0][6].substring(3, 5))
              )
            ) {
              localStorage.setItem("ned_burn", "0");
              document.getElementById("nedelja_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "hiit") {
          if (localStorage.getItem("ned_hiit") != "1") {
            localStorage.setItem("ned_hiit", "1");
            document.getElementById("nedelja_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                0,
                parseInt(tmp[0][6].substring(0, 2)),
                parseInt(tmp[0][6].substring(3, 5))
              )
            ) {
              localStorage.setItem("ned_hiit", "0");
              document.getElementById("nedelja_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "bodyattack") {
          if (localStorage.getItem("ned_bodyattack") != "1") {
            localStorage.setItem("ned_bodyattack", "1");
            document.getElementById("nedelja_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                0,
                parseInt(tmp[0][6].substring(0, 2)),
                parseInt(tmp[0][6].substring(3, 5))
              )
            ) {
              localStorage.setItem("ned_bodyattack", "0");
              document.getElementById("nedelja_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "klasicni_pilates") {
          if (localStorage.getItem("ned_klasicni_pilates") != "1") {
            localStorage.setItem("ned_klasicni_pilates", "1");
            document.getElementById("nedelja_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                0,
                parseInt(tmp[0][6].substring(0, 2)),
                parseInt(tmp[0][6].substring(3, 5))
              )
            ) {
              localStorage.setItem("ned_klasicni_pilates", "0");
              document.getElementById("nedelja_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "stott_pilates") {
          if (localStorage.getItem("ned_stott_pilates") != "1") {
            localStorage.setItem("ned_stott_pilates", "1");
            document.getElementById("nedelja_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                0,
                parseInt(tmp[0][6].substring(0, 2)),
                parseInt(tmp[0][6].substring(3, 5))
              )
            ) {
              localStorage.setItem("ned_stott_pilates", "0");
              document.getElementById("nedelja_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "reformer_pilates") {
          if (localStorage.getItem("ned_reformer_pilates") != "1") {
            localStorage.setItem("ned_reformer_pilates", "1");
            document.getElementById("nedelja_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                0,
                parseInt(tmp[0][6].substring(0, 2)),
                parseInt(tmp[0][6].substring(3, 5))
              )
            ) {
              localStorage.setItem("ned_reformer_pilates", "0");
              document.getElementById("nedelja_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "terapijski_pilates") {
          if (localStorage.getItem("ned_terapijski_pilates") != "1") {
            localStorage.setItem("ned_terapijski_pilates", "1");
            document.getElementById("nedelja_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                0,
                parseInt(tmp[0][6].substring(0, 2)),
                parseInt(tmp[0][6].substring(3, 5))
              )
            ) {
              localStorage.setItem("ned_terapijski_pilates", "0");
              document.getElementById("nedelja_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "prenatal_yoga") {
          if (localStorage.getItem("ned_prenatal_yoga") != "1") {
            localStorage.setItem("ned_prenata_yoga", "1");
            document.getElementById("nedelja_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                0,
                parseInt(tmp[0][6].substring(0, 2)),
                parseInt(tmp[0][6].substring(3, 5))
              )
            ) {
              localStorage.setItem("ned_prenatal_yoga", "0");
              document.getElementById("nedelja_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "kundalini_yoga") {
          if (localStorage.getItem("ned_kundalini_yoga") != "1") {
            localStorage.setItem("ned_kundalini_yoga", "1");
            document.getElementById("nedelja_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                0,
                parseInt(tmp[0][6].substring(0, 2)),
                parseInt(tmp[0][6].substring(3, 5))
              )
            ) {
              localStorage.setItem("ned_kundalini_yoga", "0");
              document.getElementById("nedelja_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "hatha_yoga") {
          if (localStorage.getItem("ned_hatha_yoga") != "1") {
            localStorage.setItem("ned_hatha_yoga", "1");
            document.getElementById("nedelja_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                0,
                parseInt(tmp[0][6].substring(0, 2)),
                parseInt(tmp[0][6].substring(3, 5))
              )
            ) {
              localStorage.setItem("ned_hatha_yoga", "0");
              document.getElementById("nedelja_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "ashtanga_yoga") {
          if (localStorage.getItem("ned_ashtanga_yoga") != "1") {
            localStorage.setItem("ned_ashtanga_yoga", "1");
            document.getElementById("nedelja_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                0,
                parseInt(tmp[0][6].substring(0, 2)),
                parseInt(tmp[0][6].substring(3, 5))
              )
            ) {
              localStorage.setItem("ned_ashtanga_yoga", "0");
              document.getElementById("nedelja_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "klasicni_cardio") {
          if (localStorage.getItem("ned_klasicni_cardio") != "1") {
            localStorage.setItem("ned_klasicni_cardio", "1");
            document.getElementById("nedelja_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                0,
                parseInt(tmp[0][6].substring(0, 2)),
                parseInt(tmp[0][6].substring(3, 5))
              )
            ) {
              localStorage.setItem("ned_klasicni_cardio", "0");
              document.getElementById("nedelja_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "hiit_cardio") {
          if (localStorage.getItem("ned_hiit_cardio") != "1") {
            localStorage.setItem("ned_hiit_cardio", "1");
            document.getElementById("nedelja_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                0,
                parseInt(tmp[0][6].substring(0, 2)),
                parseInt(tmp[0][6].substring(3, 5))
              )
            ) {
              localStorage.setItem("ned_hiit_cardio", "0");
              document.getElementById("nedelja_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "bodycombat_cardio") {
          if (localStorage.getItem("ned_bodycombat_cardio") != "1") {
            localStorage.setItem("ned_bodycombat_cardio", "1");
            document.getElementById("nedelja_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                0,
                parseInt(tmp[0][6].substring(0, 2)),
                parseInt(tmp[0][6].substring(3, 5))
              )
            ) {
              localStorage.setItem("ned_bodycombat_cardio", "0");
              document.getElementById("nedelja_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        } else if (trening == "zumba_cardio") {
          if (localStorage.getItem("ned_zumba_cardio") != "1") {
            localStorage.setItem("ned_zumba_cardio", "1");
            document.getElementById("nedelja_rez").innerHTML =
              "Poništi rezervaciju";
          } else {
            if (
              otkazi_rezervaciju(
                0,
                parseInt(tmp[0][6].substring(0, 2)),
                parseInt(tmp[0][6].substring(3, 5))
              )
            ) {
              localStorage.setItem("ned_zumba_cardio", "0");
              document.getElementById("nedelja_rez").innerHTML = "Rezerviši";
            } else {
              alert(
                "Ne mozete otkazati rezervaciju jer je ostalo manje od 30 minuta do pocetka treninga"
              );
            }
          }
        }
      } else {
        alert("prosao termin");
      }
    }
  }
}
function proveri_odradjen_trening(dan, sat, minut) {
  if (dan == 0) {
    dan = 7;
  }
  var d = new Date();
  var day_of_week = d.getDay();
  var hours_of_day = d.getHours();
  var minuts_of_day = d.getMinutes();
  if (day_of_week == 0) {
    day_of_week = 7;
  }
  if (day_of_week == dan) {
    if (hours_of_day == sat) {
      if (minuts_of_day >= minut) {
        return true;
      } else {
        return false;
      }
    } else if (hours_of_day > sat) {
      return true;
    } else {
      return false;
    }
  } else if (day_of_week > dan) {
    return true;
  }
  return false;
}
function odradjen_trening() {
  ispisi_bread_crumbs();
  if (localStorage.getItem("pon_dynamic") == "1") {
    if (
      proveri_odradjen_trening(
        1,
        parseInt(dynamic_core_termin[0][0].substring(0, 2)),
        parseInt(dynamic_core_termin[0][0].substring(3, 5))
      )
    ) {
      localStorage.setItem("pon_dynamic", "0");
      localStorage.setItem("dynamic_odradjen", "1");
    }
  }
  if (localStorage.getItem("pon_bodyattack") == "1") {
    if (
      proveri_odradjen_trening(
        1,
        parseInt(bodyattack_core_termin[0][0].substring(0, 2)),
        parseInt(bodyattack_core_termin[0][0].substring(3, 5))
      )
    ) {
      localStorage.setItem("pon_bodyattack", "0");
      localStorage.setItem("bodycombat_odradjen", "1");
    }
  }
  if (localStorage.getItem("pon_klasicni_pilates") == "1") {
    if (
      proveri_odradjen_trening(
        1,
        parseInt(klasicni_pilates_termin[0][0].substring(0, 2)),
        parseInt(klasicni_pilates_termin[0][0].substring(3, 5))
      )
    ) {
      localStorage.setItem("pon_klasicni_pilates", "0");
      localStorage.setItem("klasicni_pilates_odradjen", "1");
    }
  }
  if (localStorage.getItem("pon_terapijski_pilates") == "1") {
    if (
      proveri_odradjen_trening(
        1,
        parseInt(terapijski_pilates_termin[0][0].substring(0, 2)),
        parseInt(terapijski_pilates_termin[0][0].substring(3, 5))
      )
    ) {
      localStorage.setItem("pon_terapijski_pilates", "0");
      localStorage.setItem("terapijski_pilates_odradjen", "1");
    }
  }
  if (localStorage.getItem("pon_prenatal_yoga") == "1") {
    if (
      proveri_odradjen_trening(
        1,
        parseInt(prenatal_yoga_termin[0][0].substring(0, 2)),
        parseInt(prenatal_yoga_termin[0][0].substring(3, 5))
      )
    ) {
      localStorage.setItem("pon_prenatal_yoga", "0");
      localStorage.setItem("prenatal_yoga_odradjen", "1");
    }
  }
  if (localStorage.getItem("pon_ashtanga_yoga") == "1") {
    if (
      proveri_odradjen_trening(
        1,
        parseInt(ashtanga_yoga_termin[0][0].substring(0, 2)),
        parseInt(ashtanga_yoga_termin[0][0].substring(3, 5))
      )
    ) {
      localStorage.setItem("pon_ashtanga_yoga", "0");
      localStorage.setItem("ashtanga_yoga_odradjen", "1");
    }
  }
  if (localStorage.getItem("pon_klasicni_cardio") == "1") {
    if (
      proveri_odradjen_trening(
        1,
        parseInt(klasicni_cardio_termin[0][0].substring(0, 2)),
        parseInt(klasicni_cardio_termin[0][0].substring(3, 5))
      )
    ) {
      localStorage.setItem("pon_klasicni_cardio", "0");
      localStorage.setItem("klasicni_cardio_odradjen", "1");
    }
  }
  if (localStorage.getItem("pon_zumba_cardio") == "1") {
    if (
      proveri_odradjen_trening(
        1,
        parseInt(zumba_cardio_termin[0][0].substring(0, 2)),
        parseInt(zumba_cardio_termin[0][0].substring(3, 5))
      )
    ) {
      localStorage.setItem("pon_zumba_cardio", "0");
      localStorage.setItem("zumba_cardio_odradjen", "1");
    }
  }
  if (localStorage.getItem("uto_burn") == "1") {
    if (
      proveri_odradjen_trening(
        2,
        parseInt(burn_core_termin[0][1].substring(0, 2)),
        parseInt(burn_core_termin[0][1].substring(3, 5))
      )
    ) {
      localStorage.setItem("uto_burn", "0");
      localStorage.setItem("burn_odradjen", "1");
    }
  }
  if (localStorage.getItem("uto_hiit") == "1") {
    if (
      proveri_odradjen_trening(
        2,
        parseInt(hiit_core_termin[0][1].substring(0, 2)),
        parseInt(hiit_core_termin[0][1].substring(3, 5))
      )
    ) {
      localStorage.setItem("uto_hiit", "0");
      localStorage.setItem("hiit_odradjen", "1");
    }
  }
  if (localStorage.getItem("uto_bodyattack") == "1") {
    if (
      proveri_odradjen_trening(
        2,
        parseInt(bodyattack_core_termin[0][1].substring(0, 2)),
        parseInt(bodyattack_core_termin[0][1].substring(3, 5))
      )
    ) {
      localStorage.setItem("uto_bodyattack", "0");
      localStorage.setItem("bodyattack_odradjen", "1");
    }
  }
  if (localStorage.getItem("uto_stott_pilates") == "1") {
    if (
      proveri_odradjen_trening(
        2,
        parseInt(stott_pilates_termin[0][1].substring(0, 2)),
        parseInt(stott_pilates_termin[0][1].substring(3, 5))
      )
    ) {
      localStorage.setItem("uto_stott_pilates", "0");
      localStorage.setItem("stott_pilates_odradjen", "1");
    }
  }
  if (localStorage.getItem("uto_reformer_pilates") == "1") {
    if (
      proveri_odradjen_trening(
        2,
        parseInt(reformer_pilates_termin[0][1].substring(0, 2)),
        parseInt(reformer_pilates_termin[0][1].substring(3, 5))
      )
    ) {
      localStorage.setItem("uto_reformer_pilates", "0");
      localStorage.setItem("reformer_pilates_odradjen", "1");
    }
  }
  if (localStorage.getItem("uto_kundalini_yoga") == "1") {
    if (
      proveri_odradjen_trening(
        2,
        parseInt(kundalini_yoga_termin[0][1].substring(0, 2)),
        parseInt(kundalini_yoga_termin[0][1].substring(3, 5))
      )
    ) {
      localStorage.setItem("uto_kundalini_yoga", "0");
      localStorage.setItem("kundalini_yoga_odradjen", "1");
    }
  }
  if (localStorage.getItem("uto_hatha_yoga") == "1") {
    if (
      proveri_odradjen_trening(
        2,
        parseInt(hatha_yoga_termin[0][1].substring(0, 2)),
        parseInt(hatha_yoga_termin[0][1].substring(3, 5))
      )
    ) {
      localStorage.setItem("uto_hatha_yoga", "0");
      localStorage.setItem("hatha_yoga_odradjen", "1");
    }
  }
  if (localStorage.getItem("uto_hiit_cardio") == "1") {
    if (
      proveri_odradjen_trening(
        2,
        parseInt(hiit_cardio_termin[0][1].substring(0, 2)),
        parseInt(hiit_cardio_termin[0][1].substring(3, 5))
      )
    ) {
      localStorage.setItem("uto_hiit_cardio", "0");
      localStorage.setItem("hiit_cardio_odradjen", "1");
    }
  }
  if (localStorage.getItem("uto_bodycombat_cardio") == "1") {
    if (
      proveri_odradjen_trening(
        2,
        parseInt(bodycombat_cardio_termin[0][1].substring(0, 2)),
        parseInt(bodycombat_cardio_termin[0][1].substring(3, 5))
      )
    ) {
      localStorage.setItem("uto_bodycombat_cardio", "0");
      localStorage.setItem("bodycombat_cardio_odradjen", "1");
    }
  }
  if (localStorage.getItem("sre_dynamic") == "1") {
    if (
      proveri_odradjen_trening(
        3,
        parseInt(dynamic_core_termin[0][2].substring(0, 2)),
        parseInt(dynamic_core_termin[0][2].substring(3, 5))
      )
    ) {
      localStorage.setItem("sre_dynamic", "0");
      localStorage.setItem("dynamic_odradjen", "1");
    }
  }
  if (localStorage.getItem("sre_burn") == "1") {
    if (
      proveri_odradjen_trening(
        3,
        parseInt(burn_core_termin[0][2].substring(0, 2)),
        parseInt(burn_core_termin[0][2].substring(3, 5))
      )
    ) {
      localStorage.setItem("sre_burn", "0");
      localStorage.setItem("burn_odradjen", "1");
    }
  }
  if (localStorage.getItem("sre_bodyattack") == "1") {
    if (
      proveri_odradjen_trening(
        3,
        parseInt(bodyattack_core_termin[0][2].substring(0, 2)),
        parseInt(bodyattack_core_termin[0][2].substring(3, 5))
      )
    ) {
      localStorage.setItem("sre_bodyattack", "0");
      localStorage.setItem("bodyattack_odradjen", "1");
    }
  }
  if (localStorage.getItem("sre_klasicni_pilates") == "1") {
    if (
      proveri_odradjen_trening(
        3,
        parseInt(klasicni_pilates_termin[0][2].substring(0, 2)),
        parseInt(klasicni_pilates_termin[0][2].substring(3, 5))
      )
    ) {
      localStorage.setItem("sre_klasicni_pilates", "0");
      localStorage.setItem("klasicni_pilates_odradjen", "1");
    }
  }
  if (localStorage.getItem("sre_stott_pilates") == "1") {
    if (
      proveri_odradjen_trening(
        3,
        parseInt(stott_pilates_termin[0][2].substring(0, 2)),
        parseInt(stott_pilates_termin[0][2].substring(3, 5))
      )
    ) {
      localStorage.setItem("sre_stott_pilates", "0");
      localStorage.setItem("stott_pilates_odradjen", "1");
    }
  }
  if (localStorage.getItem("sre_prenatal_yoga") == "1") {
    if (
      proveri_odradjen_trening(
        3,
        parseInt(prenatal_yoga_termin[0][2].substring(0, 2)),
        parseInt(prenatal_yoga_termin[0][2].substring(3, 5))
      )
    ) {
      localStorage.setItem("sre_prenatal_yoga", "0");
      localStorage.setItem("prenatal_yoga_odradjen", "1");
    }
  }
  if (localStorage.getItem("sre_kundalini_yoga") == "1") {
    if (
      proveri_odradjen_trening(
        3,
        parseInt(kundalini_yoga_termin[0][2].substring(0, 2)),
        parseInt(kundalini_yoga_termin[0][2].substring(3, 5))
      )
    ) {
      localStorage.setItem("sre_kundalini_yoga", "0");
      localStorage.setItem("kundalini_yoga_odradjen", "1");
    }
  }
  if (localStorage.getItem("sre_klasicni_cardio") == "1") {
    if (
      proveri_odradjen_trening(
        3,
        parseInt(klasicni_cardio_termin[0][2].substring(0, 2)),
        parseInt(klasicni_cardio_termin[0][2].substring(3, 5))
      )
    ) {
      localStorage.setItem("sre_klasicni_cardio", "0");
      localStorage.setItem("klasicni_cardio_odradjen", "1");
    }
  }
  if (localStorage.getItem("sre_hiit_cardio") == "1") {
    if (
      proveri_odradjen_trening(
        3,
        parseInt(hiit_cardio_termin[0][2].substring(0, 2)),
        parseInt(hiit_cardio_termin[0][2].substring(3, 5))
      )
    ) {
      localStorage.setItem("sre_hiit_cardio", "0");
      localStorage.setItem("hiit_cardio_odradjen", "1");
    }
  }
  if (localStorage.getItem("cet_hiit") == "1") {
    if (
      proveri_odradjen_trening(
        4,
        parseInt(hiit_core_termin[0][3].substring(0, 2)),
        parseInt(hiit_core_termin[0][3].substring(3, 5))
      )
    ) {
      localStorage.setItem("cet_hiit", "0");
      localStorage.setItem("hiit_odradjen", "1");
    }
  }
  if (localStorage.getItem("cet_bodyattack") == "1") {
    if (
      proveri_odradjen_trening(
        4,
        parseInt(bodyattack_core_termin[0][3].substring(0, 2)),
        parseInt(bodyattack_core_termin[0][3].substring(3, 5))
      )
    ) {
      localStorage.setItem("cet_bodyattack", "0");
      localStorage.setItem("bodyattack_odradjen", "1");
    }
  }
  if (localStorage.getItem("cet_reformer_pilates") == "1") {
    if (
      proveri_odradjen_trening(
        4,
        parseInt(reformer_pilates_termin[0][3].substring(0, 2)),
        parseInt(reformer_pilates_termin[0][3].substring(3, 5))
      )
    ) {
      localStorage.setItem("cet_reformer_pilates", "0");
      localStorage.setItem("reformer_pilates_odradjen", "1");
    }
  }
  if (localStorage.getItem("cet_terapijski_pilates") == "1") {
    if (
      proveri_odradjen_trening(
        4,
        parseInt(terapijski_pilates_termin[0][3].substring(0, 2)),
        parseInt(terapijski_pilates_termin[0][3].substring(3, 5))
      )
    ) {
      localStorage.setItem("cet_terapijski_pilates", "0");
      localStorage.setItem("terapijski_pilates_odradjen", "1");
    }
  }
  if (localStorage.getItem("cet_hatha_yoga") == "1") {
    if (
      proveri_odradjen_trening(
        4,
        parseInt(hatha_yoga_termin[0][3].substring(0, 2)),
        parseInt(hatha_yoga_termin[0][3].substring(3, 5))
      )
    ) {
      localStorage.setItem("cet_hatha_yoga", "0");
      localStorage.setItem("hatha_yoga_odradjen", "1");
    }
  }
  if (localStorage.getItem("cet_ashtanga_yoga") == "1") {
    if (
      proveri_odradjen_trening(
        4,
        parseInt(ashtanga_yoga_termin[0][3].substring(0, 2)),
        parseInt(ashtanga_yoga_termin[0][3].substring(3, 5))
      )
    ) {
      localStorage.setItem("cet_ashtanga_yoga", "0");
      localStorage.setItem("ashtanga_yoga_odradjen", "1");
    }
  }
  if (localStorage.getItem("cet_bodycombat_cardio") == "1") {
    if (
      proveri_odradjen_trening(
        4,
        parseInt(bodycombat_cardio_termin[0][3].substring(0, 2)),
        parseInt(bodycombat_cardio_termin[0][3].substring(3, 5))
      )
    ) {
      localStorage.setItem("cet_bodycombat_cardio", "0");
      localStorage.setItem("bodycombat_cardio_odradjen", "1");
    }
  }
  if (localStorage.getItem("cet_zumba_cardio") == "1") {
    if (
      proveri_odradjen_trening(
        4,
        parseInt(zumba_cardio_termin[0][3].substring(0, 2)),
        parseInt(zumba_cardio_termin[0][3].substring(3, 5))
      )
    ) {
      localStorage.setItem("cet_zumba_cardio", "0");
      localStorage.setItem("zumba_cardio_odradjen", "1");
    }
  }
  if (localStorage.getItem("pet_dynamic") == "1") {
    if (
      proveri_odradjen_trening(
        5,
        parseInt(dynamic_core_termin[0][4].substring(0, 2)),
        parseInt(dynamic_core_termin[0][4].substring(3, 5))
      )
    ) {
      localStorage.setItem("pet_dynamic", "0");
      localStorage.setItem("dynamic_odradjen", "1");
    }
  }
  if (localStorage.getItem("pet_bodyattack") == "1") {
    if (
      proveri_odradjen_trening(
        5,
        parseInt(bodyattack_core_termin[0][4].substring(0, 2)),
        parseInt(bodyattack_core_termin[0][4].substring(3, 5))
      )
    ) {
      localStorage.setItem("pet_bodyattack", "0");
      localStorage.setItem("bodyattack_odradjen", "1");
    }
  }
  if (localStorage.getItem("pet_klasicni_pilates") == "1") {
    if (
      proveri_odradjen_trening(
        5,
        parseInt(klasicni_pilates_termin[0][4].substring(0, 2)),
        parseInt(klasicni_pilates_termin[0][4].substring(3, 5))
      )
    ) {
      localStorage.setItem("pet_klasicni_pilates", "0");
      localStorage.setItem("klasicni_pilates_odradjen", "1");
    }
  }
  if (localStorage.getItem("pet_prenatal_yoga") == "1") {
    if (
      proveri_odradjen_trening(
        5,
        parseInt(prenatal_yoga_termin[0][4].substring(0, 2)),
        parseInt(prenatal_yoga_termin[0][4].substring(3, 5))
      )
    ) {
      localStorage.setItem("pet_prenatal_yoga", "0");
      localStorage.setItem("prenatal_yoga_odradjen", "1");
    }
  }
  if (localStorage.getItem("pet_klasicni_cardio") == "1") {
    if (
      proveri_odradjen_trening(
        5,
        parseInt(klasicni_cardio_termin[0][4].substring(0, 2)),
        parseInt(klasicni_cardio_termin[0][4].substring(3, 5))
      )
    ) {
      localStorage.setItem("pet_klasicni_cardio", "0");
      localStorage.setItem("klasicni_cardio_odradjen", "1");
    }
  }
  if (localStorage.getItem("sub_burn") == "1") {
    if (
      proveri_odradjen_trening(
        6,
        parseInt(burn_core_termin[0][5].substring(0, 2)),
        parseInt(burn_core_termin[0][5].substring(3, 5))
      )
    ) {
      localStorage.setItem("sub_burn", "0");
      localStorage.setItem("burn_odradjen", "1");
    }
  }
  if (localStorage.getItem("sub_bodyattack") == "1") {
    if (
      proveri_odradjen_trening(
        6,
        parseInt(bodyattack_core_termin[0][5].substring(0, 2)),
        parseInt(bodyattack_core_termin[0][5].substring(3, 5))
      )
    ) {
      localStorage.setItem("sub_bodyattack", "0");
      localStorage.setItem("bodyattack_odradjen", "1");
    }
  }
  if (localStorage.getItem("sub_stott_pilates") == "1") {
    if (
      proveri_odradjen_trening(
        6,
        parseInt(stott_pilates_termin[0][5].substring(0, 2)),
        parseInt(stott_pilates_termin[0][5].substring(3, 5))
      )
    ) {
      localStorage.setItem("sub_stott_pilates", "0");
      localStorage.setItem("stott_pilates_odradjen", "1");
    }
  }
  if (localStorage.getItem("sub_terapijski_pilates") == "1") {
    if (
      proveri_odradjen_trening(
        6,
        parseInt(terapijski_pilates_termin[0][5].substring(0, 2)),
        parseInt(terapijski_pilates_termin[0][5].substring(3, 5))
      )
    ) {
      localStorage.setItem("sub_terapijski_pilates", "0");
      localStorage.setItem("terapijski_pilates_odradjen", "1");
    }
  }
  if (localStorage.getItem("sub_kundalini_yoga") == "1") {
    if (
      proveri_odradjen_trening(
        6,
        parseInt(kundalini_yoga_termin[0][5].substring(0, 2)),
        parseInt(kundalini_yoga_termin[0][5].substring(3, 5))
      )
    ) {
      localStorage.setItem("sub_kundalini_yoga", "0");
      localStorage.setItem("kundalini_yoga_odradjen", "1");
    }
  }
  if (localStorage.getItem("sub_ashtanga_yoga") == "1") {
    if (
      proveri_odradjen_trening(
        6,
        parseInt(ashtanga_yoga_termin[0][5].substring(0, 2)),
        parseInt(ashtanga_yoga_termin[0][5].substring(3, 5))
      )
    ) {
      localStorage.setItem("sub_ashtanga_yoga", "0");
      localStorage.setItem("ashtanga_yoga_odradjen", "1");
    }
  }
  if (localStorage.getItem("sub_hiit_cardio") == "1") {
    if (
      proveri_odradjen_trening(
        6,
        parseInt(hiit_cardio_termin[0][5].substring(0, 2)),
        parseInt(hiit_cardio_termin[0][5].substring(3, 5))
      )
    ) {
      localStorage.setItem("sub_hiit_cardio", "0");
      localStorage.setItem("hiit_cardio_odradjen", "1");
    }
  }
  if (localStorage.getItem("sub_zumba_cardio") == "1") {
    if (
      proveri_odradjen_trening(
        6,
        parseInt(zumba_cardio_termin[0][5].substring(0, 2)),
        parseInt(zumba_cardio_termin[0][5].substring(3, 5))
      )
    ) {
      localStorage.setItem("sub_zumba_cardio", "0");
      localStorage.setItem("zumba_cardio_odradjen", "1");
    }
  }
  if (localStorage.getItem("ned_hiit") == "1") {
    if (
      proveri_odradjen_trening(
        0,
        parseInt(hiit_core_termin[0][6].substring(0, 2)),
        parseInt(hiit_core_termin[0][6].substring(3, 5))
      )
    ) {
      localStorage.setItem("ned_hiit", "0");
      localStorage.setItem("hiit_odradjen", "1");
    }
  }
  if (localStorage.getItem("ned_bodyattack") == "1") {
    if (
      proveri_odradjen_trening(
        0,
        parseInt(bodyattack_core_termin[0][6].substring(0, 2)),
        parseInt(bodyattack_core_termin[0][6].substring(3, 5))
      )
    ) {
      localStorage.setItem("ned_bodyattack", "0");
      localStorage.setItem("bodyattack_odradjen", "1");
    }
  }
  if (localStorage.getItem("ned_reformer_pilates") == "1") {
    if (
      proveri_odradjen_trening(
        0,
        parseInt(reformer_pilates_termin[0][6].substring(0, 2)),
        parseInt(reformer_pilates_termin[0][6].substring(3, 5))
      )
    ) {
      localStorage.setItem("ned_reformer_pilates", "0");
      localStorage.setItem("reformer_pilates_odradjen", "1");
    }
  }
  if (localStorage.getItem("ned_hatha_yoga") == "1") {
    if (
      proveri_odradjen_trening(
        0,
        parseInt(hatha_yoga_termin[0][6].substring(0, 2)),
        parseInt(hatha_yoga_termin[0][6].substring(3, 5))
      )
    ) {
      localStorage.setItem("ned_hatha_yoga", "0");
      localStorage.setItem("hatha_yoga_odradjen", "1");
    }
  }
  if (localStorage.getItem("ned_bodycombat_cardio") == "1") {
    if (
      proveri_odradjen_trening(
        0,
        parseInt(bodycombat_cardio_termin[0][6].substring(0, 2)),
        parseInt(bodycombat_cardio_termin[0][6].substring(3, 5))
      )
    ) {
      localStorage.setItem("ned_bodycombat_cardio", "0");
      localStorage.setItem("bodycombat_cardio_odradjen", "1");
    }
  }
}

function ucitaj_rezervacije() {
  ispisi_bread_crumbs();
  odradjen_trening();

  if (localStorage.getItem("pon_dynamic") == "1") {
    let tabela = document.getElementById("tabela");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    let cell1 = row.insertCell(1);
    if (localStorage.getItem("jezik") == "0") {
      cell.innerHTML = "Ponedeljak";
    } else {
      cell.innerHTML = "Monday";
    }
    cell1.innerHTML = dynamic_core_termin[0][0];
    let cell2 = row.insertCell(2);
    cell2.innerHTML = "Dynamic core";
  }
  if (localStorage.getItem("pon_bodyattack") == "1") {
    let tabela = document.getElementById("tabela");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    let cell1 = row.insertCell(1);
    if (localStorage.getItem("jezik") == "0") {
      cell.innerHTML = "Ponedeljak";
    } else {
      cell.innerHTML = "Monday";
    }
    cell1.innerHTML = bodyattack_core_termin[0][0];
    let cell2 = row.insertCell(2);
    cell2.innerHTML = "Core BODYATTACK";
  }
  if (localStorage.getItem("pon_klasicni_pilates") == "1") {
    let tabela = document.getElementById("tabela");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    let cell1 = row.insertCell(1);
    if (localStorage.getItem("jezik") == "0") {
      cell.innerHTML = "Ponedeljak";
    } else {
      cell.innerHTML = "Monday";
    }
    cell1.innerHTML = klasicni_pilates_termin[0][0];
    let cell2 = row.insertCell(2);
    cell2.innerHTML = "Klasični pilates";
  }
  if (localStorage.getItem("pon_terapijski_pilates") == "1") {
    let tabela = document.getElementById("tabela");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    let cell1 = row.insertCell(1);
    if (localStorage.getItem("jezik") == "0") {
      cell.innerHTML = "Ponedeljak";
    } else {
      cell.innerHTML = "Monday";
    }
    cell1.innerHTML = terapijski_pilates_termin[0][0];
    let cell2 = row.insertCell(2);
    cell2.innerHTML = "Terapijski pilates";
  }
  if (localStorage.getItem("pon_prenatal_yoga") == "1") {
    let tabela = document.getElementById("tabela");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    let cell1 = row.insertCell(1);
    if (localStorage.getItem("jezik") == "0") {
      cell.innerHTML = "Ponedeljak";
    } else {
      cell.innerHTML = "Monday";
    }
    cell1.innerHTML = prenatal_yoga_termin[0][0];
    let cell2 = row.insertCell(2);
    cell2.innerHTML = "Prenatal yoga";
  }
  if (localStorage.getItem("pon_ashtanga_yoga") == "1") {
    let tabela = document.getElementById("tabela");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    let cell1 = row.insertCell(1);
    if (localStorage.getItem("jezik") == "0") {
      cell.innerHTML = "Ponedeljak";
    } else {
      cell.innerHTML = "Monday";
    }
    cell1.innerHTML = ashtanga_yoga_termin[0][0];
    let cell2 = row.insertCell(2);
    cell2.innerHTML = "Ashtanga yoga";
  }
  if (localStorage.getItem("pon_klasicni_cardio") == "1") {
    let tabela = document.getElementById("tabela");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    let cell1 = row.insertCell(1);
    cell.innerHTML = "Ponedeljak";
    cell1.innerHTML = klasicni_cardio_termin[0][0];
    let cell2 = row.insertCell(2);
    cell2.innerHTML = "Klasični cardio";
  }
  if (localStorage.getItem("pon_zumba_cardio") == "1") {
    let tabela = document.getElementById("tabela");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    let cell1 = row.insertCell(1);
    if (localStorage.getItem("jezik") == "0") {
      cell.innerHTML = "Ponedeljak";
    } else {
      cell.innerHTML = "Monday";
    }
    cell1.innerHTML = zumba_cardio_termin[0][0];
    let cell2 = row.insertCell(2);
    cell2.innerHTML = "Zumba cardio";
  }
  if (localStorage.getItem("uto_burn") == "1") {
    let tabela = document.getElementById("tabela");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    let cell1 = row.insertCell(1);
    if (localStorage.getItem("jezik") == "0") {
      cell.innerHTML = "Utorak";
    } else {
      cell.innerHTML = "Tuesday";
    }
    cell1.innerHTML = burn_core_termin[0][1];
    let cell2 = row.insertCell(2);
    cell2.innerHTML = "Core BURN";
  }
  if (localStorage.getItem("uto_hiit") == "1") {
    let tabela = document.getElementById("tabela");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    let cell1 = row.insertCell(1);
    if (localStorage.getItem("jezik") == "0") {
      cell.innerHTML = "Utorak";
    } else {
      cell.innerHTML = "Tuesday";
    }
    cell1.innerHTML = hiit_core_termin[0][1];
    let cell2 = row.insertCell(2);
    cell2.innerHTML = "Core HIIT";
  }
  if (localStorage.getItem("uto_bodyattack") == "1") {
    let tabela = document.getElementById("tabela");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    let cell1 = row.insertCell(1);
    if (localStorage.getItem("jezik") == "0") {
      cell.innerHTML = "Utorak";
    } else {
      cell.innerHTML = "Tuesday";
    }
    cell1.innerHTML = bodyattack_core_termin[0][1];
    let cell2 = row.insertCell(2);
    cell2.innerHTML = "Core BODYATTACK";
  }
  if (localStorage.getItem("uto_stott_pilates") == "1") {
    let tabela = document.getElementById("tabela");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    let cell1 = row.insertCell(1);
    if (localStorage.getItem("jezik") == "0") {
      cell.innerHTML = "Utorak";
    } else {
      cell.innerHTML = "Tuesday";
    }
    cell1.innerHTML = stott_pilates_termin[0][1];
    let cell2 = row.insertCell(2);
    cell2.innerHTML = "Stott pilates";
  }
  if (localStorage.getItem("uto_reformer_pilates") == "1") {
    let tabela = document.getElementById("tabela");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    let cell1 = row.insertCell(1);
    if (localStorage.getItem("jezik") == "0") {
      cell.innerHTML = "Utorak";
    } else {
      cell.innerHTML = "Tuesday";
    }
    cell1.innerHTML = reformer_pilates_termin[0][1];
    let cell2 = row.insertCell(2);
    cell2.innerHTML = "Reformer pilates";
  }
  if (localStorage.getItem("uto_kundalini_yoga") == "1") {
    let tabela = document.getElementById("tabela");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    let cell1 = row.insertCell(1);
    if (localStorage.getItem("jezik") == "0") {
      cell.innerHTML = "Utorak";
    } else {
      cell.innerHTML = "Tuesday";
    }
    cell1.innerHTML = kundalini_yoga_termin[0][1];
    let cell2 = row.insertCell(2);
    cell2.innerHTML = "Kundalini yoga";
  }
  if (localStorage.getItem("uto_hatha_yoga") == "1") {
    let tabela = document.getElementById("tabela");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    let cell1 = row.insertCell(1);
    if (localStorage.getItem("jezik") == "0") {
      cell.innerHTML = "Utorak";
    } else {
      cell.innerHTML = "Tuesday";
    }
    cell1.innerHTML = hatha_yoga_termin[0][1];
    let cell2 = row.insertCell(2);
    cell2.innerHTML = "Hatha yoga";
  }
  if (localStorage.getItem("uto_hiit_cardio") == "1") {
    let tabela = document.getElementById("tabela");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    let cell1 = row.insertCell(1);
    if (localStorage.getItem("jezik") == "0") {
      cell.innerHTML = "Utorak";
    } else {
      cell.innerHTML = "Tuesday";
    }
    cell1.innerHTML = hiit_cardio_termin[0][1];
    let cell2 = row.insertCell(2);
    cell2.innerHTML = "Hiit cardio";
  }
  if (localStorage.getItem("uto_bodycombat_cardio") == "1") {
    let tabela = document.getElementById("tabela");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    let cell1 = row.insertCell(1);
    if (localStorage.getItem("jezik") == "0") {
      cell.innerHTML = "Utorak";
    } else {
      cell.innerHTML = "Tuesday";
    }
    cell1.innerHTML = bodycombat_cardio_termin[0][1];
    let cell2 = row.insertCell(2);
    cell2.innerHTML = "Bodycombat cardio";
  }
  if (localStorage.getItem("sre_dynamic") == "1") {
    let tabela = document.getElementById("tabela");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    let cell1 = row.insertCell(1);
    if (localStorage.getItem("jezik") == "0") {
      cell.innerHTML = "Sreda";
    } else {
      cell.innerHTML = "Wednesday";
    }
    cell1.innerHTML = dynamic_core_termin[0][2];
    let cell2 = row.insertCell(2);
    cell2.innerHTML = "Dynamic core";
  }
  if (localStorage.getItem("sre_burn") == "1") {
    let tabela = document.getElementById("tabela");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    let cell1 = row.insertCell(1);
    if (localStorage.getItem("jezik") == "0") {
      cell.innerHTML = "Sreda";
    } else {
      cell.innerHTML = "Wednesday";
    }
    cell1.innerHTML = burn_core_termin[0][2];
    let cell2 = row.insertCell(2);
    cell2.innerHTML = "Core BURN";
  }
  if (localStorage.getItem("sre_bodyattack") == "1") {
    let tabela = document.getElementById("tabela");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    let cell1 = row.insertCell(1);
    if (localStorage.getItem("jezik") == "0") {
      cell.innerHTML = "Sreda";
    } else {
      cell.innerHTML = "Wednesday";
    }
    cell1.innerHTML = bodyattack_core_termin[0][2];
    let cell2 = row.insertCell(2);
    cell2.innerHTML = "Core BODYATTACK";
  }
  if (localStorage.getItem("sre_klasicni_pilates") == "1") {
    let tabela = document.getElementById("tabela");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    let cell1 = row.insertCell(1);
    if (localStorage.getItem("jezik") == "0") {
      cell.innerHTML = "Sreda";
    } else {
      cell.innerHTML = "Wednesday";
    }
    cell1.innerHTML = klasicni_pilates_termin[0][2];
    let cell2 = row.insertCell(2);
    cell2.innerHTML = "Klasični pilates";
  }
  if (localStorage.getItem("sre_stott_pilates") == "1") {
    let tabela = document.getElementById("tabela");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    let cell1 = row.insertCell(1);
    if (localStorage.getItem("jezik") == "0") {
      cell.innerHTML = "Sreda";
    } else {
      cell.innerHTML = "Wednesday";
    }
    cell1.innerHTML = stott_pilates_termin[0][2];
    let cell2 = row.insertCell(2);
    cell2.innerHTML = "Stott pilates";
  }
  if (localStorage.getItem("sre_prenatal_yoga") == "1") {
    let tabela = document.getElementById("tabela");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    let cell1 = row.insertCell(1);
    if (localStorage.getItem("jezik") == "0") {
      cell.innerHTML = "Sreda";
    } else {
      cell.innerHTML = "Wednesday";
    }
    cell1.innerHTML = prenatal_yoga_termin[0][2];
    let cell2 = row.insertCell(2);
    cell2.innerHTML = "Prenatal yoga";
  }
  if (localStorage.getItem("sre_kundalini_yoga") == "1") {
    let tabela = document.getElementById("tabela");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    let cell1 = row.insertCell(1);
    if (localStorage.getItem("jezik") == "0") {
      cell.innerHTML = "Sreda";
    } else {
      cell.innerHTML = "Wednesday";
    }
    cell1.innerHTML = kundalini_yoga_termin[0][2];
    let cell2 = row.insertCell(2);
    cell2.innerHTML = "Kundalini yoga";
  }
  if (localStorage.getItem("sre_klasicni_cardio") == "1") {
    let tabela = document.getElementById("tabela");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    let cell1 = row.insertCell(1);
    if (localStorage.getItem("jezik") == "0") {
      cell.innerHTML = "Sreda";
    } else {
      cell.innerHTML = "Wednesday";
    }
    cell1.innerHTML = klasicni_cardio_termin[0][2];
    let cell2 = row.insertCell(2);
    cell2.innerHTML = "Klasični cardio";
  }
  if (localStorage.getItem("sre_hiit_cardio") == "1") {
    let tabela = document.getElementById("tabela");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    let cell1 = row.insertCell(1);
    if (localStorage.getItem("jezik") == "0") {
      cell.innerHTML = "Sreda";
    } else {
      cell.innerHTML = "Wednesday";
    }
    cell1.innerHTML = hiit_cardio_termin[0][2];
    let cell2 = row.insertCell(2);
    cell2.innerHTML = "Hiit cardio";
  }
  if (localStorage.getItem("cet_hiit") == "1") {
    let tabela = document.getElementById("tabela");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    let cell1 = row.insertCell(1);
    if (localStorage.getItem("jezik") == "0") {
      cell.innerHTML = "Četvrtak";
    } else {
      cell.innerHTML = "Thursday";
    }
    cell1.innerHTML = hiit_core_termin[0][3];
    let cell2 = row.insertCell(2);
    cell2.innerHTML = "Core HIIT";
  }
  if (localStorage.getItem("cet_bodyattack") == "1") {
    let tabela = document.getElementById("tabela");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    let cell1 = row.insertCell(1);
    if (localStorage.getItem("jezik") == "0") {
      cell.innerHTML = "Četvrtak";
    } else {
      cell.innerHTML = "Thursday";
    }
    cell1.innerHTML = bodyattack_core_termin[0][3];
    let cell2 = row.insertCell(2);
    cell2.innerHTML = "Core BODYATTACK";
  }
  if (localStorage.getItem("cet_reformer_pilates") == "1") {
    let tabela = document.getElementById("tabela");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    let cell1 = row.insertCell(1);
    cell.innerHTML = "Cetvrtak";
    cell1.innerHTML = reformer_pilates_termin[0][3];
    let cell2 = row.insertCell(2);
    cell2.innerHTML = "Reformer pilates";
  }
  if (localStorage.getItem("cet_terapijski_pilates") == "1") {
    let tabela = document.getElementById("tabela");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    let cell1 = row.insertCell(1);
    if (localStorage.getItem("jezik") == "0") {
      cell.innerHTML = "Četvrtak";
    } else {
      cell.innerHTML = "Thursday";
    }
    cell1.innerHTML = terapijski_pilates_termin[0][3];
    let cell2 = row.insertCell(2);
    cell2.innerHTML = "Terapijski pilates";
  }
  if (localStorage.getItem("cet_hatha_yoga") == "1") {
    let tabela = document.getElementById("tabela");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    let cell1 = row.insertCell(1);
    if (localStorage.getItem("jezik") == "0") {
      cell.innerHTML = "Četvrtak";
    } else {
      cell.innerHTML = "Thursday";
    }
    cell1.innerHTML = hatha_yoga_termin[0][3];
    let cell2 = row.insertCell(2);
    cell2.innerHTML = "Hatha yoga";
  }
  if (localStorage.getItem("cet_ashtanga_yoga") == "1") {
    let tabela = document.getElementById("tabela");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    let cell1 = row.insertCell(1);
    if (localStorage.getItem("jezik") == "0") {
      cell.innerHTML = "Četvrtak";
    } else {
      cell.innerHTML = "Thursday";
    }
    cell1.innerHTML = ashtanga_yoga_termin[0][3];
    let cell2 = row.insertCell(2);
    cell2.innerHTML = "Ashtanga yoga";
  }
  if (localStorage.getItem("cet_bodycombat_cardio") == "1") {
    let tabela = document.getElementById("tabela");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    let cell1 = row.insertCell(1);
    if (localStorage.getItem("jezik") == "0") {
      cell.innerHTML = "Četvrtak";
    } else {
      cell.innerHTML = "Thursday";
    }
    cell1.innerHTML = bodycombat_cardio_termin[0][3];
    let cell2 = row.insertCell(2);
    cell2.innerHTML = "Bodycombat cardio";
  }
  if (localStorage.getItem("cet_zumba_cardio") == "1") {
    let tabela = document.getElementById("tabela");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    let cell1 = row.insertCell(1);
    if (localStorage.getItem("jezik") == "0") {
      cell.innerHTML = "Četvrtak";
    } else {
      cell.innerHTML = "Thursday";
    }
    cell1.innerHTML = zumba_cardio_termin[0][3];
    let cell2 = row.insertCell(2);
    cell2.innerHTML = "Zumba cardio";
  }
  if (localStorage.getItem("pet_dynamic") == "1") {
    let tabela = document.getElementById("tabela");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    let cell1 = row.insertCell(1);
    if (localStorage.getItem("jezik") == "0") {
      cell.innerHTML = "Petak";
    } else {
      cell.innerHTML = "Friday";
    }
    cell1.innerHTML = dynamic_core_termin[0][4];
    let cell2 = row.insertCell(2);
    cell2.innerHTML = "Dynamic core";
  }
  if (localStorage.getItem("pet_bodyattack") == "1") {
    let tabela = document.getElementById("tabela");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    let cell1 = row.insertCell(1);
    if (localStorage.getItem("jezik") == "0") {
      cell.innerHTML = "Petak";
    } else {
      cell.innerHTML = "Friday";
    }
    cell1.innerHTML = bodyattack_core_termin[0][4];
    let cell2 = row.insertCell(2);
    cell2.innerHTML = "Core BODYATTACK";
  }
  if (localStorage.getItem("pet_klasicni_pilates") == "1") {
    let tabela = document.getElementById("tabela");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    let cell1 = row.insertCell(1);
    if (localStorage.getItem("jezik") == "0") {
      cell.innerHTML = "Petak";
    } else {
      cell.innerHTML = "Friday";
    }
    cell1.innerHTML = klasicni_pilates_termin[0][4];
    let cell2 = row.insertCell(2);
    cell2.innerHTML = "Klasični pilates";
  }
  if (localStorage.getItem("pet_prenatal_yoga") == "1") {
    let tabela = document.getElementById("tabela");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    let cell1 = row.insertCell(1);
    if (localStorage.getItem("jezik") == "0") {
      cell.innerHTML = "Petak";
    } else {
      cell.innerHTML = "Friday";
    }
    cell1.innerHTML = prenatal_yoga_termin[0][4];
    let cell2 = row.insertCell(2);
    cell2.innerHTML = "Prenatal yoga";
  }
  if (localStorage.getItem("pet_klasicni_cardio") == "1") {
    let tabela = document.getElementById("tabela");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    let cell1 = row.insertCell(1);
    if (localStorage.getItem("jezik") == "0") {
      cell.innerHTML = "Petak";
    } else {
      cell.innerHTML = "Friday";
    }
    cell1.innerHTML = klasicni_cardio_termin[0][4];
    let cell2 = row.insertCell(2);
    cell2.innerHTML = "Klasični cardio";
  }
  if (localStorage.getItem("sub_burn") == "1") {
    let tabela = document.getElementById("tabela");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    let cell1 = row.insertCell(1);
    if (localStorage.getItem("jezik") == "0") {
      cell.innerHTML = "Subota";
    } else {
      cell.innerHTML = "Saturday";
    }
    cell1.innerHTML = burn_core_termin[0][5];
    let cell2 = row.insertCell(2);
    cell2.innerHTML = "Core BURN";
  }
  if (localStorage.getItem("sub_bodyattack") == "1") {
    let tabela = document.getElementById("tabela");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    let cell1 = row.insertCell(1);
    if (localStorage.getItem("jezik") == "0") {
      cell.innerHTML = "Subota";
    } else {
      cell.innerHTML = "Saturday";
    }
    cell1.innerHTML = bodyattack_core_termin[0][5];
    let cell2 = row.insertCell(2);
    cell2.innerHTML = "Core BODYATTACK";
  }
  if (localStorage.getItem("sub_stott_pilates") == "1") {
    let tabela = document.getElementById("tabela");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    let cell1 = row.insertCell(1);
    if (localStorage.getItem("jezik") == "0") {
      cell.innerHTML = "Subota";
    } else {
      cell.innerHTML = "Saturday";
    }
    cell1.innerHTML = stott_pilates_termin[0][5];
    let cell2 = row.insertCell(2);
    cell2.innerHTML = "Stott pliates";
  }
  if (localStorage.getItem("sub_terapijski_pilates") == "1") {
    let tabela = document.getElementById("tabela");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    let cell1 = row.insertCell(1);
    if (localStorage.getItem("jezik") == "0") {
      cell.innerHTML = "Subota";
    } else {
      cell.innerHTML = "Saturday";
    }
    cell1.innerHTML = terapijski_pilates_termin[0][5];
    let cell2 = row.insertCell(2);
    cell2.innerHTML = "Terapijski pliates";
  }
  if (localStorage.getItem("sub_kundalini_yoga") == "1") {
    let tabela = document.getElementById("tabela");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    let cell1 = row.insertCell(1);
    if (localStorage.getItem("jezik") == "0") {
      cell.innerHTML = "Subota";
    } else {
      cell.innerHTML = "Saturday";
    }
    cell1.innerHTML = kundalini_yoga_termin[0][5];
    let cell2 = row.insertCell(2);
    cell2.innerHTML = "Kundalini yoga";
  }
  if (localStorage.getItem("sub_ashtanga_yoga") == "1") {
    let tabela = document.getElementById("tabela");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    let cell1 = row.insertCell(1);
    if (localStorage.getItem("jezik") == "0") {
      cell.innerHTML = "Subota";
    } else {
      cell.innerHTML = "Saturday";
    }
    cell1.innerHTML = ashtanga_yoga_termin[0][5];
    let cell2 = row.insertCell(2);
    cell2.innerHTML = "Ashtanga yoga";
  }
  if (localStorage.getItem("sub_hiit_cardio") == "1") {
    let tabela = document.getElementById("tabela");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    let cell1 = row.insertCell(1);
    if (localStorage.getItem("jezik") == "0") {
      cell.innerHTML = "Subota";
    } else {
      cell.innerHTML = "Saturday";
    }
    cell1.innerHTML = hiit_cardio_termin[0][5];
    let cell2 = row.insertCell(2);
    cell2.innerHTML = "Hiit cardio";
  }
  if (localStorage.getItem("sub_zumba_cardio") == "1") {
    let tabela = document.getElementById("tabela");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    let cell1 = row.insertCell(1);
    if (localStorage.getItem("jezik") == "0") {
      cell.innerHTML = "Subota";
    } else {
      cell.innerHTML = "Saturday";
    }
    cell1.innerHTML = zumba_cardio_termin[0][5];
    let cell2 = row.insertCell(2);
    cell2.innerHTML = "Zumba cardio";
  }
  if (localStorage.getItem("ned_hiit") == "1") {
    let tabela = document.getElementById("tabela");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    let cell1 = row.insertCell(1);
    if (localStorage.getItem("jezik") == "0") {
      cell.innerHTML = "Nedelja";
    } else {
      cell.innerHTML = "Sunday";
    }
    cell1.innerHTML = hiit_core_termin[0][6];
    let cell2 = row.insertCell(2);
    cell2.innerHTML = "Core HIIT";
  }
  if (localStorage.getItem("ned_bodyattack") == "1") {
    let tabela = document.getElementById("tabela");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    let cell1 = row.insertCell(1);
    if (localStorage.getItem("jezik") == "0") {
      cell.innerHTML = "Nedelja";
    } else {
      cell.innerHTML = "Sunday";
    }
    cell1.innerHTML = bodyattack_core_termin[0][6];
    let cell2 = row.insertCell(2);
    cell2.innerHTML = "Core BODYATTACK";
  }
  if (localStorage.getItem("ned_reformer_pilates") == "1") {
    let tabela = document.getElementById("tabela");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    let cell1 = row.insertCell(1);
    if (localStorage.getItem("jezik") == "0") {
      cell.innerHTML = "Nedelja";
    } else {
      cell.innerHTML = "Sunday";
    }
    cell1.innerHTML = reformer_pilates_termin[0][6];
    let cell2 = row.insertCell(2);
    cell2.innerHTML = "Reformer pilates";
  }
  if (localStorage.getItem("ned_hatha_yoga") == "1") {
    let tabela = document.getElementById("tabela");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    let cell1 = row.insertCell(1);
    if (localStorage.getItem("jezik") == "0") {
      cell.innerHTML = "Nedelja";
    } else {
      cell.innerHTML = "Sunday";
    }
    cell1.innerHTML = hatha_yoga_termin[0][6];
    let cell2 = row.insertCell(2);
    cell2.innerHTML = "Hatha yoga";
  }
  if (localStorage.getItem("ned_bodycombat_cardio") == "1") {
    let tabela = document.getElementById("tabela");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    let cell1 = row.insertCell(1);
    if (localStorage.getItem("jezik") == "0") {
      cell.innerHTML = "Nedelja";
    } else {
      cell.innerHTML = "Sunday";
    }
    cell1.innerHTML = bodycombat_cardio_termin[0][6];
    let cell2 = row.insertCell(2);
    cell2.innerHTML = "Bodycombat cardio";
  }
}

function proveri_vreme(dan, sat, minut) {
  if (dan == 0) {
    dan = 7;
  }
  var d = new Date();
  var day_of_week = d.getDay();
  var hours_of_day = d.getHours();
  var minuts_of_day = d.getMinutes();
  if (day_of_week == 0) {
    day_of_week = 7;
  }
  if (day_of_week > dan) {
    return false;
  } else {
    if (day_of_week == dan) {
      if (hours_of_day > sat) {
        return false;
      } else {
        if (hours_of_day == sat) {
          if (minuts_of_day >= minut) {
            return false;
          }
        }
        return true;
      }
    }
    return true;
  }
}

function otkazi_rezervaciju(dan, sat, minut) {
  if (dan == 0) {
    dan = 7;
  }
  var d = new Date();
  var day_of_week = d.getDay();
  var hours_of_day = d.getHours();
  var minuts_of_day = d.getMinutes();
  if (day_of_week == 0) {
    day_of_week = 7;
  }
  if (day_of_week == dan) {
    if (hours_of_day == sat) {
      if (minuts_of_day < minut - 30) {
        return true;
      } else {
        return false;
      }
    } else if (hours_of_day == sat - 1) {
      if (minut - 30 < 0) {
        minut = 60 - (30 - minut);
        if (minuts_of_day < minut) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    }
    return true;
  } else if (day_of_week > dan) {
    return false;
  }
  return true;
}
function komentarisi_klasicni_cardio() {
  if (localStorage.getItem("klasicni_cardio_odradjen") == "1") {
    if (localStorage.getItem("klasicni_cardio_komentarisan") == "0") {
      localStorage.setItem("klasicni_cardio_komentarisan", "1");
    } else {
      klasicni_cardio_komentar = JSON.parse(
        localStorage.getItem("klasicni_cardio_komentar")
      );
    }
    klasicni_cardio_komentar.push(
      document.getElementById("klasicni_cardio_komentar").value
    );
    localStorage.setItem(
      "klasicni_cardio_komentar",
      JSON.stringify(klasicni_cardio_komentar)
    );
    document.getElementById("klasicni_cardio_komentar").value = "";
  } else {
    alert("niste odradili trening pa ne mozete da ga komentarisite");
  }
  ispisi_komentare_klasicni_cardio(1);
}
function komentarisi_hiit_cardio() {
  if (localStorage.getItem("hiit_cardio_odradjen") == "1") {
    if (localStorage.getItem("hiit_cardio_komentarisan") == "0") {
      localStorage.setItem("hiit_cardio_komentarisan", "1");
    } else {
      hiit_cardio_komentar = JSON.parse(
        localStorage.getItem("hiit_cardio_komentar")
      );
    }
    hiit_cardio_komentar.push(
      document.getElementById("hiit_cardio_komentar").value
    );
    localStorage.setItem(
      "hiit_cardio_komentar",
      JSON.stringify(hiit_cardio_komentar)
    );
    document.getElementById("hiit_cardio_komentar").value = "";
  } else {
    alert("niste odradili trening pa ne mozete da ga komentarisite");
  }
  ispisi_komentare_hiit_cardio(1);
}

function komentarisi_bodycombat_cardio() {
  if (localStorage.getItem("bodycombat_cardio_odradjen") == "1") {
    if (localStorage.getItem("bodycombat_cardio_komentarisan") == "0") {
      localStorage.setItem("bodycombat_cardio_komentarisan", "1");
    } else {
      bodycombat_cardio_komentar = JSON.parse(
        localStorage.getItem("bodycombat_cardio_komentar")
      );
    }
    bodycombat_cardio_komentar.push(
      document.getElementById("bodycombat_cardio_komentar").value
    );
    localStorage.setItem(
      "bodycombat_cardio_komentar",
      JSON.stringify(bodycombat_cardio_komentar)
    );
    document.getElementById("bodycombat_cardio_komentar").value = "";
  } else {
    alert("niste odradili trening pa ne mozete da ga komentarisite");
  }
  ispisi_komentare_bodycombat_cardio(1);
}

function komentarisi_zumba_cardio() {
  if (localStorage.getItem("zumba_cardio_odradjen") == "1") {
    if (localStorage.getItem("zumba_cardio_komentarisan") == "0") {
      localStorage.setItem("zumba_cardio_komentarisan", "1");
    } else {
      zumba_cardio_komentar = JSON.parse(
        localStorage.getItem("zumba_cardio_komentar")
      );
    }
    zumba_cardio_komentar.push(
      document.getElementById("zumba_cardio_komentar").value
    );
    localStorage.setItem(
      "zumba_cardio_komentar",
      JSON.stringify(zumba_cardio_komentar)
    );
    document.getElementById("zumba_cardio_komentar").value = "";
  } else {
    alert("niste odradili trening pa ne mozete da ga komentarisite");
  }
  ispisi_komentare_zumba_cardio(1);
}
function komentarisi_prenatal_yoga() {
  if (localStorage.getItem("prenatal_yoga_odradjen") == "1") {
    if (localStorage.getItem("prenatal_yoga_komentarisan") == "0") {
      localStorage.setItem("prenatal_yoga_komentarisan", "1");
    } else {
      prenatal_yoga_komentar = JSON.parse(
        localStorage.getItem("prenatal_yoga_komentar")
      );
    }
    prenatal_yoga_komentar.push(
      document.getElementById("prenatal_yoga_komentar").value
    );
    localStorage.setItem(
      "prenatal_yoga_komentar",
      JSON.stringify(prenatal_yoga_komentar)
    );
    document.getElementById("prenatal_yoga_komentar").value = "";
  } else {
    alert("niste odradili trening pa ne mozete da ga komentarisite");
  }
  ispisi_komentare_prenatal_yoga(1);
}
function komentarisi_kundalini_yoga() {
  if (localStorage.getItem("kundalini_yoga_odradjen") == "1") {
    if (localStorage.getItem("kundalini_yoga_komentarisan") == "0") {
      localStorage.setItem("kundalini_yoga_komentarisan", "1");
    } else {
      kundalini_yoga_komentar = JSON.parse(
        localStorage.getItem("kundalini_yoga_komentar")
      );
    }
    kundalini_yoga_komentar.push(
      document.getElementById("kundalini_yoga_komentar").value
    );
    localStorage.setItem(
      "kundalini_yoga_komentar",
      JSON.stringify(kundalini_yoga_komentar)
    );
    document.getElementById("kundalini_yoga_komentar").value = "";
  } else {
    alert("niste odradili trening pa ne mozete da ga komentarisite");
  }
  ispisi_komentare_kundalini_yoga(1);
}
function komentarisi_hatha_yoga() {
  if (localStorage.getItem("hatha_yoga_odradjen") == "1") {
    if (localStorage.getItem("hatha_yoga_komentarisan") == "0") {
      localStorage.setItem("hatha_yoga_komentarisan", "1");
    } else {
      hatha_yoga_komentar = JSON.parse(
        localStorage.getItem("hatha_yoga_komentar")
      );
    }
    hatha_yoga_komentar.push(
      document.getElementById("hatha_yoga_komentar").value
    );
    localStorage.setItem(
      "hatha_yoga_komentar",
      JSON.stringify(hatha_yoga_komentar)
    );
    document.getElementById("hatha_yoga_komentar").value = "";
  } else {
    alert("niste odradili trening pa ne mozete da ga komentarisite");
  }
  ispisi_komentare_hatha_yoga(1);
}
function komentarisi_ashtanga_yoga() {
  if (localStorage.getItem("ashtanga_yoga_odradjen") == "1") {
    if (localStorage.getItem("ashtanga_yoga_komentarisan") == "0") {
      localStorage.setItem("ashtanga_yoga_komentarisan", "1");
    } else {
      ashtanga_yoga_komentar = JSON.parse(
        localStorage.getItem("ashtanga_yoga_komentar")
      );
    }
    ashtanga_yoga_komentar.push(
      document.getElementById("ashtanga_yoga_komentar").value
    );
    localStorage.setItem(
      "ashtanga_yoga_komentar",
      JSON.stringify(ashtanga_yoga_komentar)
    );
    document.getElementById("ashtanga_yoga_komentar").value = "";
  } else {
    alert("niste odradili trening pa ne mozete da ga komentarisite");
  }
  ispisi_komentare_ashtanga_yoga(1);
}
function komentarisi_klasicni_pilates() {
  if (localStorage.getItem("klasicni_pilates_odradjen") == "1") {
    if (localStorage.getItem("klasicni_pilates_komentarisan") == "0") {
      localStorage.setItem("klasicni_pilates_komentarisan", "1");
    } else {
      klasicni_pilates_komentar = JSON.parse(
        localStorage.getItem("klasicni_pilates_komentar")
      );
    }
    klasicni_pilates_komentar.push(
      document.getElementById("klasicni_pilates_komentar").value
    );
    localStorage.setItem(
      "klasicni_pilates_komentar",
      JSON.stringify(klasicni_pilates_komentar)
    );
    document.getElementById("klasicni_pilates_komentar").value = "";
  } else {
    alert("niste odradili trening pa ne mozete da ga komentarisite");
  }
  ispisi_komentare_klasicni_pilates(1);
}
function komentarisi_stott_pilates() {
  if (localStorage.getItem("stott_pilates_odradjen") == "1") {
    if (localStorage.getItem("stott_pilates_komentarisan") == "0") {
      localStorage.setItem("stott_pilates_komentarisan", "1");
    } else {
      stott_pilates_komentar = JSON.parse(
        localStorage.getItem("stott_pilates_komentar")
      );
    }
    stott_pilates_komentar.push(
      document.getElementById("stott_pilates_komentar").value
    );
    localStorage.setItem(
      "stott_pilates_komentar",
      JSON.stringify(stott_pilates_komentar)
    );
    document.getElementById("stott_pilates_komentar").value = "";
  } else {
    alert("niste odradili trening pa ne mozete da ga komentarisite");
  }
  ispisi_komentare_stott_pilates(1);
}
function komentarisi_reformer_pilates() {
  if (localStorage.getItem("reformer_pilates_odradjen") == "1") {
    if (localStorage.getItem("reformer_pilates_komentarisan") == "0") {
      localStorage.setItem("reformer_pilates_komentarisan", "1");
    } else {
      reformer_pilates_komentar = JSON.parse(
        localStorage.getItem("reformer_pilates_komentar")
      );
    }
    reformer_pilates_komentar.push(
      document.getElementById("reformer_pilates_komentar").value
    );
    localStorage.setItem(
      "reformer_pilates_komentar",
      JSON.stringify(reformer_pilates_komentar)
    );
    document.getElementById("reformer_pilates_komentar").value = "";
  } else {
    alert("niste odradili trening pa ne mozete da ga komentarisite");
  }
  ispisi_komentare_reformer_pilates(1);
}
function komentarisi_terapijski_pilates() {
  if (localStorage.getItem("terapijski_pilates_odradjen") == "1") {
    if (localStorage.getItem("terapijski_pilates_komentarisan") == "0") {
      localStorage.setItem("terapijski_pilates_komentarisan", "1");
    } else {
      terapijski_pilates_komentar = JSON.parse(
        localStorage.getItem("terapijski_pilates_komentar")
      );
    }
    terapijski_pilates_komentar.push(
      document.getElementById("terapijski_pilates_komentar").value
    );
    localStorage.setItem(
      "terapijski_pilates_komentar",
      JSON.stringify(terapijski_pilates_komentar)
    );
    document.getElementById("terapijski_pilates_komentar").value = "";
  } else {
    alert("niste odradili trening pa ne mozete da ga komentarisite");
  }
  ispisi_komentare_terapijski_pilates(1);
}
function komentarisi_dynamic() {
  if (localStorage.getItem("dynamic_odradjen") == "1") {
    if (localStorage.getItem("dynamic_komentarisan") == "0") {
      localStorage.setItem("dynamic_komentarisan", "1");
    } else {
      dynamic_core_komentar = JSON.parse(
        localStorage.getItem("dynamic_komentar")
      );
    }

    let tmp = document.getElementById("dynamic_komentar").value;
    dynamic_core_komentar.push(tmp);
    localStorage.setItem(
      "dynamic_komentar",
      JSON.stringify(dynamic_core_komentar)
    );
    document.getElementById("dynamic_komentar").value = "";
  } else {
    alert("niste odradili trening pa ne mozete da ga komentarisite");
  }

  ispisi_komentare_dynamic(1);
}
function komentarisi_burn() {
  if (localStorage.getItem("burn_odradjen") == "1") {
    if (localStorage.getItem("burn_komentarisan") == "0") {
      localStorage.setItem("burn_komentarisan", "1");
    } else {
      burn_core_komentar = JSON.parse(localStorage.getItem("burn_komentar"));
    }
    burn_core_komentar.push(document.getElementById("burn_komentar").value);
    localStorage.setItem("burn_komentar", JSON.stringify(burn_core_komentar));
    document.getElementById("burn_komentar").value = "";
  } else {
    alert("niste odradili trening pa ne mozete da ga komentarisite");
  }
  ispisi_komentare_burn(1);
}
function komentarisi_hiit() {
  if (localStorage.getItem("hiit_odradjen") == "1") {
    if (localStorage.getItem("hiit_komentarisan") == "0") {
      localStorage.setItem("hiit_komentarisan", "1");
    } else {
      hiit_core_komentar = JSON.parse(localStorage.getItem("hiit_komentar"));
    }
    hiit_core_komentar.push(document.getElementById("hiit_komentar").value);
    localStorage.setItem("hiit_komentar", JSON.stringify(hiit_core_komentar));
    document.getElementById("hiit_komentar").value = "";
  } else {
    alert("niste odradili trening pa ne mozete da ga komentarisite");
  }
  ispisi_komentare_hiit(1);
}
function komentarisi_bodyattack() {
  if (localStorage.getItem("bodyattack_odradjen") == "1") {
    if (localStorage.getItem("bodyattack_komentarisan") == "0") {
      localStorage.setItem("bodyattack_komentarisan", "1");
    } else {
      bodyattack_core_komentar = JSON.parse(
        localStorage.getItem("bodyattack_komentar")
      );
    }
    bodyattack_core_komentar.push(
      document.getElementById("bodyattack_komentar").value
    );
    localStorage.setItem(
      "bodyattack_komentar",
      JSON.stringify(bodyattack_core_komentar)
    );
    document.getElementById("bodyattack_komentar").value = "";
  } else {
    alert("niste odradili trening pa ne mozete da ga komentarisite");
  }
  ispisi_komentare_bodyattack(1);
}
function ispisi_komentare_klasicni_cardio(num) {
  if (num == 0) {
    if (localStorage.getItem("klasicni_cardio_komentarisan") == "1") {
      klasicni_cardio_komentar = JSON.parse(
        localStorage.getItem("klasicni_cardio_komentar")
      );
      let tabela = document.getElementById("tabela_klasicni_cardio_komentar");
      for (i = 0; i < klasicni_cardio_komentar.length; i++) {
        let row = tabela.insertRow(-1);
        let cell = row.insertCell(0);

        cell.innerHTML = klasicni_cardio_komentar[i];
      }
    }
  } else {
    klasicni_cardio_komentar = JSON.parse(
      localStorage.getItem("klasicni_cardio_komentar")
    );
    let tabela = document.getElementById("tabela_klasicni_cardio_komentar");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    cell.innerHTML =
      klasicni_cardio_komentar[klasicni_cardio_komentar.length - 1];
  }
}
function ispisi_komentare_hiit_cardio(num) {
  if (num == 0) {
    if (localStorage.getItem("hiit_cardio_komentarisan") == "1") {
      hiit_cardio_komentar = JSON.parse(
        localStorage.getItem("hiit_cardio_komentar")
      );
      let tabela = document.getElementById("tabela_hiit_cardio_komentar");
      for (i = 0; i < hiit_cardio_komentar.length; i++) {
        let row = tabela.insertRow(-1);
        let cell = row.insertCell(0);

        cell.innerHTML = hiit_cardio_komentar[i];
      }
    }
  } else {
    hiit_cardio_komentar = JSON.parse(
      localStorage.getItem("hiit_cardio_komentar")
    );
    let tabela = document.getElementById("tabela_hiit_cardio_komentar");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    cell.innerHTML = hiit_cardio_komentar[hiit_cardio_komentar.length - 1];
  }
}

function ispisi_komentare_bodycombat_cardio(num) {
  if (num == 0) {
    if (localStorage.getItem("bodycombat_cardio_komentarisan") == "1") {
      bodycombat_cardio_komentar = JSON.parse(
        localStorage.getItem("bodycombat_cardio_komentar")
      );
      let tabela = document.getElementById("tabela_bodycombat_cardio_komentar");
      for (i = 0; i < bodycombat_cardio_komentar.length; i++) {
        let row = tabela.insertRow(-1);
        let cell = row.insertCell(0);

        cell.innerHTML = bodycombat_cardio_komentar[i];
      }
    }
  } else {
    bodycombat_cardio_komentar = JSON.parse(
      localStorage.getItem("bodycombat_cardio_komentar")
    );
    let tabela = document.getElementById("tabela_bodycombat_cardio_komentar");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    cell.innerHTML =
      bodycombat_cardio_komentar[bodycombat_cardio_komentar.length - 1];
  }
}

function ispisi_komentare_zumba_cardio(num) {
  if (num == 0) {
    if (localStorage.getItem("zumba_cardio_komentarisan") == "1") {
      zumba_cardio_komentar = JSON.parse(
        localStorage.getItem("zumba_cardio_komentar")
      );
      let tabela = document.getElementById("tabela_zumba_cardio_komentar");
      for (i = 0; i < zumba_cardio_komentar.length; i++) {
        let row = tabela.insertRow(-1);
        let cell = row.insertCell(0);

        cell.innerHTML = zumba_cardio_komentar[i];
      }
    }
  } else {
    zumba_cardio_komentar = JSON.parse(
      localStorage.getItem("zumba_cardio_komentar")
    );
    let tabela = document.getElementById("tabela_zumba_cardio_komentar");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    cell.innerHTML = zumba_cardio_komentar[zumba_cardio_komentar.length - 1];
  }
}
function ispisi_komentare_prenatal_yoga(num) {
  if (num == 0) {
    if (localStorage.getItem("prenatal_yoga_komentarisan") == "1") {
      prenatal_yoga_komentar = JSON.parse(
        localStorage.getItem("prenatal_yoga_komentar")
      );
      let tabela = document.getElementById("tabela_prenatal_yoga_komentar");
      for (i = 0; i < prenatal_yoga_komentar.length; i++) {
        let row = tabela.insertRow(-1);
        let cell = row.insertCell(0);

        cell.innerHTML = prenatal_yoga_komentar[i];
      }
    }
  } else {
    prenatal_yoga_komentar = JSON.parse(
      localStorage.getItem("prenatal_yoga_komentar")
    );
    let tabela = document.getElementById("tabela_prenatal_yoga_komentar");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    cell.innerHTML = prenatal_yoga_komentar[prenatal_yoga_komentar.length - 1];
  }
}
function ispisi_komentare_kundalini_yoga(num) {
  if (num == 0) {
    if (localStorage.getItem("kundalini_yoga_komentarisan") == "1") {
      kundalini_yoga_komentar = JSON.parse(
        localStorage.getItem("kundalini_yoga_komentar")
      );
      let tabela = document.getElementById("tabela_kundalini_yoga_komentar");
      for (i = 0; i < kundalini_yoga_komentar.length; i++) {
        let row = tabela.insertRow(-1);
        let cell = row.insertCell(0);

        cell.innerHTML = kundalini_yoga_komentar[i];
      }
    }
  } else {
    kundalini_yoga_komentar = JSON.parse(
      localStorage.getItem("kundalini_yoga_komentar")
    );
    let tabela = document.getElementById("tabela_kundalini_yoga_komentar");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    cell.innerHTML =
      kundalini_yoga_komentar[kundalini_yoga_komentar.length - 1];
  }
}
function ispisi_komentare_hatha_yoga(num) {
  if (num == 0) {
    if (localStorage.getItem("hatha_yoga_komentarisan") == "1") {
      hatha_yoga_komentar = JSON.parse(
        localStorage.getItem("hatha_yoga_komentar")
      );
      let tabela = document.getElementById("tabela_hatha_yoga_komentar");
      for (i = 0; i < hatha_yoga_komentar.length; i++) {
        let row = tabela.insertRow(-1);
        let cell = row.insertCell(0);

        cell.innerHTML = hatha_yoga_komentar[i];
      }
    }
  } else {
    hatha_yoga_komentar = JSON.parse(
      localStorage.getItem("hatha_yoga_komentar")
    );
    let tabela = document.getElementById("tabela_hatha_yoga_komentar");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    cell.innerHTML = hatha_yoga_komentar[hatha_yoga_komentar.length - 1];
  }
}
function ispisi_komentare_ashtanga_yoga(num) {
  if (num == 0) {
    if (localStorage.getItem("ashtanga_yoga_komentarisan") == "1") {
      ashtanga_yoga_komentar = JSON.parse(
        localStorage.getItem("ashtanga_yoga_komentar")
      );
      let tabela = document.getElementById("tabela_ashtanga_yoga_komentar");
      for (i = 0; i < ashtanga_yoga_komentar.length; i++) {
        let row = tabela.insertRow(-1);
        let cell = row.insertCell(0);

        cell.innerHTML = ashtanga_yoga_komentar[i];
      }
    }
  } else {
    ashtanga_yoga_komentar = JSON.parse(
      localStorage.getItem("ashtanga_yoga_komentar")
    );
    let tabela = document.getElementById("tabela_ashtanga_yoga_komentar");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    cell.innerHTML = ashtanga_yoga_komentar[ashtanga_yoga_komentar.length - 1];
  }
}
function ispisi_komentare_klasicni_pilates(num) {
  if (num == 0) {
    if (localStorage.getItem("klasicni_pilates_komentarisan") == "1") {
      klasicni_pilates_komentar = JSON.parse(
        localStorage.getItem("klasicni_pilates_komentar")
      );
      let tabela = document.getElementById("tabela_klasicni_pilates_komentar");
      for (i = 0; i < klasicni_pilates_komentar.length; i++) {
        let row = tabela.insertRow(-1);
        let cell = row.insertCell(0);

        cell.innerHTML = klasicni_pilates_komentar[i];
      }
    }
  } else {
    klasicni_pilates_komentar = JSON.parse(
      localStorage.getItem("klasicni_pilates_komentar")
    );
    let tabela = document.getElementById("tabela_klasicni_pilates_komentar");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    cell.innerHTML =
      klasicni_pilates_komentar[klasicni_pilates_komentar.length - 1];
  }
}
function ispisi_komentare_stott_pilates(num) {
  if (num == 0) {
    if (localStorage.getItem("stott_pilates_komentarisan") == "1") {
      stott_pilates_komentar = JSON.parse(
        localStorage.getItem("stott_pilates_komentar")
      );
      let tabela = document.getElementById("tabela_stott_pilates_komentar");
      for (i = 0; i < stott_pilates_komentar.length; i++) {
        let row = tabela.insertRow(-1);
        let cell = row.insertCell(0);

        cell.innerHTML = stott_pilates_komentar[i];
      }
    }
  } else {
    reformer_pilates_komentar = JSON.parse(
      localStorage.getItem("stott_pilates_komentar")
    );
    let tabela = document.getElementById("tabela_stott_pilates_komentar");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    cell.innerHTML = stott_pilates_komentar[stott_pilates_komentar.length - 1];
  }
}
function ispisi_komentare_reformer_pilates(num) {
  if (num == 0) {
    if (localStorage.getItem("reformer_pilates_komentarisan") == "1") {
      reformer_pilates_komentar = JSON.parse(
        localStorage.getItem("reformer_pilates_komentar")
      );
      let tabela = document.getElementById("tabela_reformer_pilates_komentar");
      for (i = 0; i < reformer_pilates_komentar.length; i++) {
        let row = tabela.insertRow(-1);
        let cell = row.insertCell(0);

        cell.innerHTML = reformer_pilates_komentar[i];
      }
    }
  } else {
    reformer_pilates_komentar = JSON.parse(
      localStorage.getItem("reformer_pilates_komentar")
    );
    let tabela = document.getElementById("tabela_reformer_pilates_komentar");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    cell.innerHTML =
      reformer_pilates_komentar[reformer_pilates_komentar.length - 1];
  }
}
function ispisi_komentare_terapijski_pilates(num) {
  if (num == 0) {
    if (localStorage.getItem("terapijski_pilates_komentarisan") == "1") {
      terapijski_pilates_komentar = JSON.parse(
        localStorage.getItem("terapijski_pilates_komentar")
      );
      let tabela = document.getElementById(
        "tabela_terapijski_pilates_komentar"
      );
      for (i = 0; i < terapijski_pilates_komentar.length; i++) {
        let row = tabela.insertRow(-1);
        let cell = row.insertCell(0);

        cell.innerHTML = terapijski_pilates_komentar[i];
      }
    }
  } else {
    terapijski_pilates_komentar = JSON.parse(
      localStorage.getItem("terapijski_pilates_komentar")
    );
    let tabela = document.getElementById("tabela_terapijski_pilates_komentar");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    cell.innerHTML =
      terapijski_pilates_komentar[terapijski_pilates_komentar.length - 1];
  }
}
function ispisi_komentare_dynamic(num) {
  if (num == 0) {
    if (localStorage.getItem("dynamic_komentarisan") == "1") {
      let tabela = document.getElementById("tabela_dynamic_komentar");
      dynamic_core_komentar = JSON.parse(
        localStorage.getItem("dynamic_komentar")
      );
      for (i = 0; i < dynamic_core_komentar.length; i++) {
        let row = tabela.insertRow(-1);
        let cell = row.insertCell(0);

        cell.innerHTML = dynamic_core_komentar[i];
      }
    }
  } else {
    dynamic_core_komentar = JSON.parse(
      localStorage.getItem("dynamic_komentar")
    );
    let tabela = document.getElementById("tabela_dynamic_komentar");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    cell.innerHTML = dynamic_core_komentar[dynamic_core_komentar.length - 1];
  }
}
function ispisi_komentare_burn(num) {
  if (num == 0) {
    if (localStorage.getItem("burn_komentarisan") == "1") {
      burn_core_komentar = JSON.parse(localStorage.getItem("burn_komentar"));
      let tabela = document.getElementById("tabela_burn_komentar");
      for (i = 0; i < burn_core_komentar.length; i++) {
        let row = tabela.insertRow(-1);
        let cell = row.insertCell(0);

        cell.innerHTML = burn_core_komentar[i];
      }
    }
  } else {
    burn_core_komentar = JSON.parse(localStorage.getItem("burn_komentar"));
    let tabela = document.getElementById("tabela_burn_komentar");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    cell.innerHTML = burn_core_komentar[burn_core_komentar.length - 1];
  }
}
function ispisi_komentare_hiit(num) {
  if (num == 0) {
    if (localStorage.getItem("hiit_komentarisan") == "1") {
      hiit_core_komentar = JSON.parse(localStorage.getItem("hiit_komentar"));
      let tabela = document.getElementById("tabela_hiit_komentar");
      for (i = 0; i < hiit_core_komentar.length; i++) {
        let row = tabela.insertRow(-1);
        let cell = row.insertCell(0);

        cell.innerHTML = hiit_core_komentar[i];
      }
    }
  } else {
    hiit_core_komentar = JSON.parse(localStorage.getItem("hiit_komentar"));
    let tabela = document.getElementById("tabela_hiit_komentar");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    cell.innerHTML = hiit_core_komentar[hiit_core_komentar.length - 1];
  }
}
function ispisi_komentare_bodyattack(num) {
  if (num == 0) {
    if (localStorage.getItem("bodyattack_komentarisan") == "1") {
      bodyattack_core_komentar = JSON.parse(
        localStorage.getItem("bodyattack_komentar")
      );
      let tabela = document.getElementById("tabela_bodyattack_komentar");
      for (i = 0; i < bodyattack_core_komentar.length; i++) {
        let row = tabela.insertRow(-1);
        let cell = row.insertCell(0);

        cell.innerHTML = bodyattack_core_komentar[i];
      }
    }
  } else {
    bodyattack_core_komentar = JSON.parse(
      localStorage.getItem("bodyattack_komentar")
    );
    let tabela = document.getElementById("tabela_bodyattack_komentar");
    let row = tabela.insertRow(-1);
    let cell = row.insertCell(0);
    cell.innerHTML =
      bodyattack_core_komentar[bodyattack_core_komentar.length - 1];
  }
}
