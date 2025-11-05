var app_assets = "local"; // remote or local
//////////// Global Version Variables ////////////////////
  var host_smasung_version = "1.1.5";
  var host_lg_version = "1.0.7";
  var host_vidaa_version = "1.0.6";
  var host_zeasn_version = "1.0.6";
  var host_titanos_version = "1.0.6";
if(app_assets == "local"){
  var HOST = "";
  var HOST_URLS = [""];
}else{  
  var HOST = "https://smartplayerpro.com/smartone/";
  var HOST_URLS = [
    "https://smartplayerpro.com/smartone/",
    "https://apps.coderscodesdev.com/smartone/",
    "https://coderscodesdev.com/smartone/",
    "https://babyeducate.com/smartone/",
    "https://babyeducationonline.com/smartone/"
  ];
}

document.body.style.opacity = 0;

window.onload = function start() {
  var script = document.createElement("script");
  script.setAttribute("async", "true"); 
  (function(){
    // clone and shuffle HOST_URLS (Fisher-Yates)
    var urls = HOST_URLS.slice();
    for (var i = urls.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = urls[i];
      urls[i] = urls[j];
      urls[j] = t;
    }

    var idx = 0;

    function tryNext() {
      if (idx >= urls.length) {
        // none succeeded -> fallback to empty HOST (local)
        HOST = "";
        setScriptAndAppend();
        return;
      }

      var candidate = urls[idx++];
      // quick probe to candidate root
      $.ajax({
        url: candidate,
        type: "GET",
        dataType: "text",
        timeout: 5000,
        crossDomain: true
      })
      .done(function(data, textStatus, jqXHR) {
        if (jqXHR && jqXHR.status === 200) {
          HOST = candidate;
          setScriptAndAppend();
        } else {
          tryNext();
        }
      })
      .fail(function() {
        tryNext();
      });
    }

    function setScriptAndAppend() {
      script.src = (HOST ? HOST : "") + "app_src_min/js/init.js?" + Math.random();
      script.onload = render_page;
      script.onerror = function () {
        // remove failed script element (if appended)
        if (script.parentNode) script.parentNode.removeChild(script);
        // if we had a host, try next one; otherwise we've already exhausted list
        if (HOST) {
          // prevent retrying same host by continuing with remaining shuffled urls
          tryNext();
        } else {
          // all hosts failed and fallback is empty HOST; try nothing else
          console.error("Failed to load init.js from all hosts; using local fallback (HOST empty).");
        }
      };
      document.body.appendChild(script);
    }

    tryNext();
  })();
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