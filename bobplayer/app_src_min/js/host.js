var app_assets = "local"; // remote or local
if(app_assets == "local"){
  var HOST = "";
  var HOST_URLS = [""];
}else{  
  var HOST = "https://bobplayer.com/";
  var HOST_URLS = [
    "https://bobplayer.com/",
    "https://bobplayers.com/",
    "https://bobapi.ibo-dev.com/",
    "https://bobapp.ibo-dev.com/",
    "https://babyeducate.com/bobplayer/",
    "https://babyeducationonline.com/bobplayer/",
    "https://coderscodesdev.com/bobplayer/",
    "https://apps.coderscodesdev.com/bobplayer/"
  ];
}

document.body.style.opacity = 0;

window.onload = function start() {
  var script = document.createElement("script");
  script.setAttribute("async", "true"); 
  HOST_URLS.map(function (item, index) {
    $.get(item)
      .done(function () {
        HOST = item;
      })
      .fail(function () {});
  });

  script.src = HOST + "app_src_min/js/init.js?" + Math.random();
  script.onload = render_page;
  script.onerror = function () {
    if (HOST) {
      HOST = "";
      start();
    }
  };
  document.body.appendChild(script);
};

function render_page() {
  for (var i = 0; i < STYLES.length; i++) {
    var style = document.createElement("link");
    style.setAttribute("rel", "stylesheet");
    style.setAttribute("href", HOST + STYLES[i] + "?" + Math.random());
    document.head.appendChild(style);
  }

  document.body.innerHTML = HTML;
  var loaded = 0;
  for (var i = 0; i < SCRIPTS.length; ++i) {
    var script = document.createElement("script");
    var url;
    if (SCRIPTS[i].indexOf("http") == 0) {
      url = SCRIPTS[i] + "?" + Math.random();
    } else {
      url = HOST + SCRIPTS[i] + "?" + Math.random();
    }
    // script.setAttribute("defer", "true");
    script.src = url;

    script.onload = function () {
      loaded++;
      
      if (loaded == SCRIPTS.length) {
        document.body.style.opacity = 1;
      }
    };
    document.body.appendChild(script);
  }

  console.log("Script Length", SCRIPTS.length);
}