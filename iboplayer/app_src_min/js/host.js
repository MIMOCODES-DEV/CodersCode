var STORE_URL = "https://backend.ibosol.com";
var STORE_APP_NAME = "IBOPLAYER";

// Change to remote before uploading to LG/SAMSUNG
var app_assets = "local"; // local || remote

var testing_version = "1.0";
var host_samsung_version = "1.1.5";
var host_lg_version = "1.0.7";
var host_vidaa_version = "1.0.6";
var host_zeasn_version = "1.0.6";

var HOST = "https://iboplayer.com/";
var HOST_URLS = [
  "https://iboiptv.com/",
  "https://iboplayer.com/",
  "https://ibotvplayer.com/",
  "https://iboproplayertv.com/",
  "https://tvplayeribo.com/",
  "https://ibobtv.com/",
  "https://apps.coderscodesdev.com/",
  "https://coderscodesdev.com/",
  "https://babyeducate.com/",
  "https://babyeducationonline.com/"
];
var HOST_APP_NAME = "iboplayer/";

var CDN_FALLBACK_URL = "https://cdn.jsdelivr.net/gh/MIMOCODES-DEV/CodersCode";
var FALLBACK_TIME = 8;

var hostProxiedPrefix = "";

document.body.style.opacity = 0;

// Get app assets source (Remote / Local) and then start the app
window.onload = function start() {
  if (app_assets == "local") {
    startApp();
    return;
  }
  $.ajax({
    url: STORE_URL + "/api/application-settings/" + STORE_APP_NAME,
    type: "GET",
    headers: {
      "X-Version": testing_version // Assets version
    },
    success: function(response) {
      if (response && response.data && response.data.is_remote) {
        app_assets = "remote";
        if (response.data.fallback_time) {
          FALLBACK_TIME = response.data.fallback_time;
        }
      } else {
        app_assets = "local";
      }
      startApp();
    },
    error: function(err) {
      startApp();
    }
  });
};

function startApp() {
  if(app_assets == "local"){
    HOST = "";
    HOST_URLS = [""];
  }
  
  var script = document.createElement("script");
  script.setAttribute("async", "true"); 
  
  var fallbackTimer = null;
  var timedOut = false;
  
  (function(){
    if (app_assets == "remote") {
      fallbackTimer = setTimeout(function() {
        if (timedOut) return;
        timedOut = true;
        console.warn("Assets were loading for more than " + FALLBACK_TIME + " seconds... Falling back to local assets.");
        
        if (fallbackTimer) {
          clearTimeout(fallbackTimer);
          fallbackTimer = null;
        }
        
        HOST = "";
        hostProxiedPrefix = "";
        app_assets = "local";
        
        if (app_assets != "local" && HOST) {
          HOST = HOST + HOST_APP_NAME;
        }
        if (typeof hostProxiedPrefix != "undefined" && hostProxiedPrefix) {
          HOST = hostProxiedPrefix + HOST;
        }

        setScriptAndAppend();
      }, FALLBACK_TIME * 1000);
    }
    
    // clone and shuffle HOST_URLS (Fisher-Yates)
    var urls = HOST_URLS.slice();
    for (var i = urls.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = urls[i];
      urls[i] = urls[j];
      urls[j] = t;
    }

    var idx = 0;
    var triedProxy = false;
    var triedCdnFallback = false;

    function tryNext() {
      if (timedOut) return;
      
      if (idx >= urls.length) {
        if (!triedProxy) {
          triedProxy = true;
          $.ajax({
            url: "https://backend.stararcs.com/api/tv/server/asset",
            type: "POST",
            headers: { "X-Secret-Token": "0sqM4JmVp2jLjYxPfAyx1OYCn7h2NhM+8MIfTueTC+zUHs6MJcYEK6tVJAW1UUcIPo9iKUtGhLeCVYoHjU0Eqw==" },
            success: function(response) {
              if (response && response.Success && response.Response && response.Response.ServerAsset) {
                var proxyIp = response.Response.ServerAsset;
                idx = 0;
                retryWithProxy(proxyIp);
              } else {
                tryCdnFallback();
              }
            },
            error: function() {
              tryCdnFallback();
            }
          });
        } else {
          tryCdnFallback();
        }
        return;
      }

      var candidate = urls[idx++];

      if (app_assets == "local") {
        setScriptAndAppend();
      } else {
        $.ajax({
          type: "GET",
          url: candidate + "api/status_check",
          success: function (res) {
            if (res.status == "success") {
              HOST = candidate;
              setScriptAndAppend();
            } else {
              tryNext();
            }
          },
          error: function (err) {
            tryNext();
          }
        }
      )
      }
    }

    function retryWithProxy(proxyIp) {
      if (timedOut) return;
      
      if (idx >= urls.length) {
        tryCdnFallback();
        return;
      }

      var originalUrl = urls[idx++] + "api/status_check";
      hostProxiedPrefix = "http://" + proxyIp + ":7650/http-proxy?target_url=";
      var proxiedUrl = hostProxiedPrefix + originalUrl;
      
      $.ajax({
        url: proxiedUrl,
        type: "GET",
        dataType: "text",
        timeout: 5000,
        crossDomain: true,
        success: function (res) {
          res = JSON.parse(res);
          if (res.status == "success") {
            setScriptAndAppend();
          } else {
            retryWithProxy(proxyIp);
          }
        },
        error: function (err) {
          retryWithProxy(proxyIp);
        }
      }
      )
    }

    function tryCdnFallback() {
      if (timedOut) return;
      
      if (triedCdnFallback) {
        HOST = "";
        hostProxiedPrefix = "";
        setScriptAndAppend();
        return;
      }
      
      triedCdnFallback = true;
      
      // Try to get init.js from CDN
      $.ajax({
        type: "GET",
        url: CDN_FALLBACK_URL + "/" + HOST_APP_NAME + "app_src_min/js/init.js",
        timeout: 5000,
        success: function (res) {
          // If we get a 200 response, the CDN has the assets
          HOST = CDN_FALLBACK_URL + "/";
          hostProxiedPrefix = "";
          setScriptAndAppend();
        },
        error: function (xhr) {
          // CDN failed (404 or other error), fall back to local
          HOST = "";
          hostProxiedPrefix = "";
          setScriptAndAppend();
        }
      });
    }

    function setScriptAndAppend() {
      if (fallbackTimer) {
        clearTimeout(fallbackTimer);
        fallbackTimer = null;
      }
      
      if (app_assets != "local" && HOST) {
        HOST = HOST + HOST_APP_NAME;
      }
      if (typeof hostProxiedPrefix != "undefined" && hostProxiedPrefix) {
        HOST = hostProxiedPrefix + HOST;
      }
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
  document.body.style.background = "";
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