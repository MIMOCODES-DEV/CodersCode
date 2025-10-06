var app_assets = "local"; // remote or local
if(app_assets == "local"){
  var HOST = "";
  var HOST_URLS = [""];
}else{  
  var HOST = "https://iptviboplayer.com/iptviboplayer/";
  var HOST_URLS = [
    "https://iptviboplayer.com/iptviboplayer/",
    "https://sandbox.iptviboplayer.com/iptviboplayer/",
    "https://iboiptvplayers.com/iptviboplayer/",
    "https://apps.coderscodesdev.com/iptviboplayer/",
    "https://coderscodesdev.com/iptviboplayer/",
    "https://babyeducate.com/iptviboplayer/",
    "https://babyeducationonline.com/iptviboplayer/"
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