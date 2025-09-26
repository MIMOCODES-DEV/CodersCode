var app_environment = "production"; // development or production
if(app_environment == "development"){
  var STYLES = [
    "app_src/css/login.css",
    "app_src/css/style.css",
    "app_src/css/variables.css",
    "app_src/css/guide.css",
    "app_src/css/homepage.css",
    "app_src/css/vod_series_summary.css",
    "app_src/css/vod_series_player_page.css",
    "app_src/css/channel_page.css",
    "app_src/css/movie_grid.css",
    "app_src/css/catchup.css",
    "app_src/css/epg.css",
    "app_src/css/rating.css",
    "app_src/css/loader.css",
    "app_src/css/playlist.css",
    "app_src/css/vod_series.css",
    "app_src/css/settings_page.css",
    "app_src/css/category_page.css",
    "app_src/css/search_page.css",
    "app_src/css/subtitle.css",
    "app_src/css/media.css"
  ];
  var SCRIPTS = [
    "app_src/js/utils.js",
    "app_src/js/settings.js",
    "app_src/js/common.js",
    "app_src/js/keyTizen.js",
    "app_src/js/mediaPlayer.js",
    "app_src/js/Models/VodModel.js",
    "app_src/js/Models/LiveModel.js",
    "app_src/js/Models/SeriesModel.js",
    "app_src/js/playlist.js",
    "app_src/js/account_page.js",
    "app_src/js/key_operations.js",
    "app_src/js/channel_operation.js",
    "app_src/js/time_helper.js",
    "app_src/js/vod_summary.js",
    "app_src/js/vod_series_player.js",
    "app_src/js/trailer.js",
    "app_src/js/series_summary.js",
    "app_src/js/vod_series_page.js",
    "app_src/js/settings_page.js",
    "app_src/js/turn_off_page.js",
    "app_src/js/parent_confirm_page.js",
    "app_src/js/playlist_edit.js",
    "app_src/js/srt_parser.js",
    "app_src/js/srt_operation.js",
    "app_src/js/catchup.js",
    "app_src/js/search_page.js",
    "app_src/js/clear_recent_page.js",
    "app_src/js/clear_cache_page.js",
    "app_src/js/login_operation.js",
    "app_src/js/language_codes.js",
    "app_src/js/home_operation.js",
    "app_src/js/main.js"
  ];
} else{
  var STYLES = ["app_src_min/css/application.min.css"];
  var SCRIPTS = ["app_src_min/js/application.min.js"]; 
}

var HTML =
  '<div\n\
  id="loading-page"\n\
  class="height-100 text-center"\n\
    style="\n\
      background-size: 100% 100%;\n\
      position: relative;\n\
      color: #fff;\n\
      height: 100vh;\n\
    "\n\
  >\n\
        <div id="loading-page-device-info-container">\n\
    <div class="loading-page-device-info-item">\n\
      <span\n\
        class="loading-page-device-info-label"\n\
        data-word_code="mac_address"\n\
        >Mac Address</span\n\
      >:\n\
      <span class="loading-page-device-info-value mac-address"></span>\n\
    </div>\n\
    <div class="loading-page-device-info-item">\n\
      <span\n\
        class="loading-page-device-info-label"\n\
        data-word_code="device_key"\n\
        >Device Key</span\n\
      >:\n\
      <span class="loading-page-device-info-value device-key"></span>\n\
    </div>\n\
  </div>\n\
<div class="loader-image-container">\n\
  <img src="'+HOST+'app_src_min/images/logo.png" />\n\
  <h2 class="loading__loader-title" data-word_code="loading_title">Discover, Play, Relax</h2>\n\
  <p class="loading__loader-description" data-word_code="loading_message">Welcome to IPTV IBO Player! Enjoy seamless streaming of your favorite content, proudly powered by IBODev Solutions. We\'re here to bring entertainment to your fingertips with a professional and user-friendly experience.</p>\n\
  <div class="loading_loader-container"><span class="loading_loader"></span></div>\n\
</div>\n\
</div>\n\
<div id="login-container" class="height-100 hide">\n\
  <div class="login-left-part">\n\
    <div class="login-left-top">\n\
      <img src="'+HOST+'app_src_min/images/logo.png"></img>\n\
      <h2 id="login-note-1-1">Experience Entertainment, Redefined</h2>\n\
      <p id="login-note-1-2">\n\
        Stream an extensive collection of movies, series, and live TV on any device, designed for your ultimate viewing pleasure. Elevate your experience with customizable playlists and secure parental controls.\n\
      </p>\n\
    </div>\n\
    <div class="login-left-bottom">\n\
      <p id="login-note-2-1">Trial period notice your complimentary trial ends in <span class="highlight">7 days.</span></p>\n\
      <p id="login-note-2-2">Thank you for choosing us to bring your entertainment to life.</p>\n\
    </div>\n\
  </div>\n\
  <div class="login-right-part">\n\
    <div class="right-part-top">\n\
      <h3>To Continue Using The App</h3>\n\
      <p id="login-note-3">Press OK to explore our demo. or visit our website to add your own playlist. After your trial period, a license purchase will be required.</p>\n\
    </div>\n\
    <div class="right-part-bottom">\n\
      <h3 id="instructions-title">Adding Playlist:</h3>\n\
      <div class="login-right-instructions-container">\n\
        <div class="login-right-instruction">\n\
          <img src="'+HOST+'app_src_min/images/icons/instruction1.png"></img>\n\
          <span>Visit <span class="url">https://iptviboplayer.com</span>.</span>\n\
        </div>\n\
        <div class="login-right-instruction">\n\
          <img src="'+HOST+'app_src_min/images/icons/instruction2.png"></img>\n\
          <span>Log in using your device\'s MAC Address and unique device key.</span>\n\
        </div>\n\
        <div class="login-right-instruction">\n\
          <img src="'+HOST+'app_src_min/images/icons/instruction3.png"></img>\n\
          <div>\n\
            <span>Device ID: <span id="mac-address"></span></span>\n\
            <span>Device key: <span class="device-key"></span></span>\n\
          </div>\n\
        </div>\n\
        <div id="last-login-instruction" class="login-right-instruction">\n\
          <img src="'+HOST+'app_src_min/images/icons/instruction4.png"></img>\n\
          <span>Add your preferred playlist, then restart the app to enjoy your updates.</span>\n\
        </div>\n\
        <button\n\
          class="login-button active"\n\
          id="login-button"\n\
          onclick="login_page.login()"\n\
          data-word_code="login"\n\
        >\n\
          OK\n\
        </button>\n\
      </div>\n\
    </div>\n\
  </div>\n\
</div>\n\
<div id="app">\n\
<div id="home-page" class="page-container1 hide">\n\
<img id="home-movie-image" />\n\
<div class="home-movie-img-darken"></div>\n\
<div id="home-top-menu">\n\
<div id="home-logo-container">\n\
    <img src="'+HOST+'app_src_min/images/logo.png" alt="logo" />\n\
</div>\n\
<div class="home-top-center-container">\n\
  <div class="time-weather-container">\n\
    <div class="time-weather-item">\n\
      <div class="country-date-container">\n\
        <div id="weather-country"></div>\n\
        <div id="current-date">Sun. 10 Sep 2024</div>\n\
      </div>\n\
      <img src="" id="current-weather-icon" />\n\
    </div>\n\
    <div class="time-weather-item">\n\
      <div id="home-page-timer" class="current-time">02:30 AM</div>\n\
      <div id="current-weather-degree"></div>\n\
    </div>\n\
  </div>\n\
    <div class="home-expiry-days-container">\n\
    <div class="home-expiry-days-title">Playlist will expire in</div>\n\
    <div class="home-expiry-days-separator"></div>\n\
    <div class="home-expiry-days-value playlist-will-expire-in">Unknown</div>\n\
  </div>\n\
</div>\n\
<div id="home-search-refresh-container">\n\
  <div\n\
    id="home-refresh-container"\n\
    class="home-icon-button"\n\
    onmouseenter="home_page.hoverRefreshButton()"\n\
    onclick="home_page.handleMenuClick()"\n\
  >\n\
    <svg style="width: 2.5rem; height: 2.5rem;" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 3V9M3 9H9M3 9C5.32744 6.91141 7.48287 4.54676 10.7453 4.08779C12.6777 3.81593 14.6461 4.17941 16.3539 5.12343C18.0617 6.06746 19.4164 7.54091 20.2139 9.32177M21 21V15M21 15H15M21 15C18.6725 17.0886 16.5171 19.4532 13.2547 19.9122C11.3223 20.1841 9.35391 19.8206 7.6461 18.8766C5.93829 17.9325 4.58356 16.4591 3.78604 14.6782" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>\n\
  </div>\n\
  <div\n\
    id="home-search-container"\n\
    class="home-icon-button"\n\
    onmouseenter="home_page.hoverSearchButton()"\n\
    onclick="home_page.handleMenuClick()"\n\
  >\n\
    <svg fill="#eee" style="width: 2rem; height: 2rem;" height="32" width="32" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 488.4 488.4" xml:space="preserve" stroke="#eee"><path d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6 s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2 S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7 S381.9,104.65,381.9,203.25z"></path></svg>\n\
  </div>\n\
</div>\n\
</div>\n\
<div class="home-movies-container">\n\
  <div id="home-movies-wrapper">\n\
  </div>\n\
</div>\n\
<div id="menu-container">\n\
  <div id="menu-wrapper">\n\
    <div\n\
      class="menu-item-container"\n\
      onclick="home_page.clickMainMenu(0)"\n\
      onmouseenter="home_page.hoverMainMenu(0)"\n\
    >\n\
      <div class="menu-item">\n\
      <div class="menu-item-icon-container">\n\
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" fill="#ffffff"></path> </g></svg>\n\
      </div>\n\
        <div class="menu-item-txt" data-word_code="live_favorites">\n\
          Live Favorites\n\
        </div>\n\
      </div>\n\
    </div>\n\
    <div\n\
      class="menu-item-container"\n\
      onclick="home_page.clickMainMenu(1)"\n\
      onmouseenter="home_page.hoverMainMenu(1)"\n\
    >\n\
      <div class="menu-item">\n\
      <div class="menu-item-icon-container">\n\
        <svg fill="#000000" viewBox="-0.13 0 32.268 32.268" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Group_34" data-name="Group 34" transform="translate(-94.002 -249.427)"> <path id="Path_291" data-name="Path 291" d="M122,255.7H98a4,4,0,0,0-4,4v18a4,4,0,0,0,4,4h24a4,4,0,0,0,4-4v-18A4,4,0,0,0,122,255.7Zm0,22H98v-18h24Z"></path> <path id="Path_292" data-name="Path 292" d="M106.769,257.791l-4.949-4.95a2,2,0,0,1,0-2.828h0a2,2,0,0,1,2.828,0l5.95,5.949"></path> <path id="Path_293" data-name="Path 293" d="M109.406,255.962l5.949-5.949a2,2,0,0,1,2.829,0h0a2,2,0,0,1,0,2.828l-4.95,4.95"></path> <rect id="Rectangle_4" data-name="Rectangle 4" width="16" height="10" transform="translate(102.002 263.695)"></rect> </g> </g></svg>\n\
      </div>\n\
        <div class="menu-item-txt" data-word_code="live_tv">\n\
          Live TV\n\
        </div>\n\
      </div>\n\
    </div>\n\
    <div\n\
      class="menu-item-container"\n\
      onclick="home_page.clickMainMenu(2)"\n\
      onmouseenter="home_page.hoverMainMenu(2)"\n\
    >\n\
      <div class="menu-item">\n\
        <div class="menu-item-icon-container">\n\
          <svg width="200" height="188" viewBox="0 0 200 188" fill="none" xmlns="http://www.w3.org/2000/svg">\n\
            <path d="M125.866 1.58333H75.1337V42.095H125.866V1.58333Z" fill="#292D32"/>\n\
            <path d="M139.804 1.58333V42.095H192.209C187.47 16.5429 168.608 1.67625 139.804 1.58333Z" fill="#292D32"/>\n\
            <path d="M7.58333 56.0325V133.432C7.58333 167.254 27.7462 187.417 61.5679 187.417H139.432C173.254 187.417 193.417 167.254 193.417 133.432V56.0325H7.58333ZM123.172 133.339L103.845 144.489C99.7567 146.812 95.7612 148.02 92.0446 148.02C89.2571 148.02 86.7483 147.37 84.4254 146.069C79.0363 143.002 76.0629 136.684 76.0629 128.507V106.207C76.0629 98.0308 79.0363 91.7125 84.4254 88.6462C89.8146 85.4871 96.6904 86.0446 103.845 90.2258L123.172 101.376C130.326 105.464 134.229 111.225 134.229 117.45C134.229 123.676 130.233 129.158 123.172 133.339Z" fill="#292D32"/>\n\
            <path d="M61.1962 1.58333C32.3921 1.67625 13.53 16.5429 8.79125 42.095H61.1962V1.58333Z" fill="#292D32"/>\n\
          </svg>\n\
        </div>\n\
        <div class="menu-item-txt" data-word_code="movies">Movies</div>\n\
      </div>\n\
    </div>\n\
    <div\n\
      class="menu-item-container"\n\
      onclick="home_page.clickMainMenu(3)"\n\
      onmouseenter="home_page.hoverMainMenu(3)"\n\
    >\n\
      <div class="menu-item">\n\
        <div class="menu-item-icon-container">\n\
          <svg width="200" height="188" viewBox="0 0 200 188" fill="none" xmlns="http://www.w3.org/2000/svg">\n\
            <path d="M47.095 55.2892H6.58333V87.5312H47.095V55.2892Z" fill="#292D32"/>\n\
            <path d="M47.095 41.4446V2.79125C25.91 6.69375 12.0654 20.3525 7.97708 41.3517H46.8162C46.9092 41.3517 47.0021 41.4446 47.095 41.4446Z" fill="#292D32"/>\n\
            <path d="M47.095 134.547V101.469H6.58333V134.268H45.98C46.3517 134.268 46.7233 134.454 47.095 134.547Z" fill="#292D32"/>\n\
            <path d="M191.023 41.3517C187.027 21.0029 174.019 7.62292 153.949 3.25583V41.3517H191.023Z" fill="#292D32"/>\n\
            <path d="M140.012 87.5312V1.67625C139.547 1.58333 138.99 1.58333 138.432 1.58333H61.0325V87.5312H140.012Z" fill="#292D32"/>\n\
            <path d="M192.417 101.469H153.949V134.268H192.417V101.469Z" fill="#292D32"/>\n\
            <path d="M153.949 185.744C173.833 181.377 186.842 168.183 190.93 148.206H153.949V185.744Z" fill="#292D32"/>\n\
            <path d="M45.98 148.206H8.07C12.3442 168.833 26.0958 182.306 47.095 186.209V148.02C46.7233 148.113 46.3517 148.206 45.98 148.206Z" fill="#292D32"/>\n\
            <path d="M192.417 55.2892H153.949V87.5312H192.417V55.2892Z" fill="#292D32"/>\n\
            <path d="M61.0325 101.469V187.417H138.432C138.99 187.417 139.547 187.417 140.012 187.324V101.469H61.0325V101.469Z" fill="#292D32"/>\n\
          </svg>\n\
        </div>\n\
        <div class="menu-item-txt" data-word_code="series">Series</div>\n\
      </div>\n\
    </div>\n\
    <div\n\
      class="menu-item-container"\n\
      onclick="home_page.clickMainMenu(4)"\n\
      onmouseenter="home_page.hoverMainMenu(4)"\n\
    >\n\
        <div class="menu-item">\n\
          <div class="menu-item-icon-container">\n\
            <svg fill="#000000" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 74.999 74.999" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M33.511,71.013c15.487,0,28.551-10.563,32.375-24.859h9.113L61.055,22L47.111,46.151h8.006 c-3.44,8.563-11.826,14.628-21.605,14.628c-12.837,0-23.28-10.443-23.28-23.28c0-12.836,10.443-23.28,23.28-23.28 c6.604,0,12.566,2.768,16.809,7.196l5.258-9.108c-5.898-5.176-13.619-8.32-22.065-8.32C15.034,3.987,0,19.019,0,37.5 C-0.002,55.981,15.03,71.013,33.511,71.013z"></path> </g> </g></svg>\n\
          </div>\n\
        <div class="menu-item-txt" data-word_code="replay">Replay</div>\n\
      </div>\n\
    </div>\n\
    <div\n\
      class="menu-item-container"\n\
      onclick="home_page.clickMainMenu(5)"\n\
      onmouseenter="home_page.hoverMainMenu(5)"\n\
    >\n\
        <div class="menu-item">\n\
          <div class="menu-item-icon-container">\n\
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V8L9 8H2V5Z" fill="#000000"></path> <path d="M2 10V19C2 20.6569 3.34315 22 5 22H8V10L2 10Z" fill="#000000"></path> <path d="M10 22H19C20.6569 22 22 20.6569 22 19V10L10 10V22Z" fill="#000000"></path> </g></svg>\n\
          </div>\n\
        <div class="menu-item-txt" data-word_code="channel-theme">Channel Theme</div>\n\
      </div>\n\
    </div>\n\
    <div\n\
      class="menu-item-container"\n\
      onclick="home_page.clickMainMenu(6)"\n\
      onmouseenter="home_page.hoverMainMenu(6)"\n\
    >\n\
        <div class="menu-item">\n\
          <div class="menu-item-icon-container">\n\
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M1 4.75C1 3.10996 2.47275 2 4 2H20C21.5273 2 23 3.10996 23 4.75V8.25C23 9.89004 21.5273 11 20 11H4C2.47275 11 1 9.89004 1 8.25V4.75ZM7 6.5C7 7.32843 6.32843 8 5.5 8C4.67157 8 4 7.32843 4 6.5C4 5.67157 4.67157 5 5.5 5C6.32843 5 7 5.67157 7 6.5Z" fill="#000000"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M1 15.75C1 14.11 2.47275 13 4 13H20C21.5273 13 23 14.11 23 15.75V19.25C23 20.89 21.5273 22 20 22H4C2.47275 22 1 20.89 1 19.25V15.75ZM7 17.5C7 18.3284 6.32843 19 5.5 19C4.67157 19 4 18.3284 4 17.5C4 16.6716 4.67157 16 5.5 16C6.32843 16 7 16.6716 7 17.5Z" fill="#000000"></path> </g></svg>\n\
          </div>\n\
        <div class="menu-item-txt" data-word_code="change-server">Change Server</div>\n\
      </div>\n\
    </div>\n\
    <div\n\
      class="menu-item-container"\n\
      onclick="home_page.clickMainMenu(7)"\n\
      onmouseenter="home_page.hoverMainMenu(7)"\n\
    >\n\
        <div class="menu-item">\n\
          <div class="menu-item-icon-container">\n\
            <svg fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>user-card</title> <path d="M0 26.016q0 2.496 1.76 4.224t4.256 1.76h20q2.464 0 4.224-1.76t1.76-4.224v-20q0-2.496-1.76-4.256t-4.224-1.76h-20q-2.496 0-4.256 1.76t-1.76 4.256v20zM4 24v-17.984q0-0.832 0.576-1.408t1.44-0.608h20q0.8 0 1.408 0.608t0.576 1.408v17.984h-24zM10.016 19.008q0 1.248 0.864 2.144t2.112 0.864h6.016q1.248 0 2.112-0.864t0.896-2.144q-0.256-1.344-1.088-2.464t-2.048-1.792q1.12-1.152 1.12-2.752v-1.984q0-1.664-1.184-2.848t-2.816-1.152-2.816 1.152-1.184 2.848v1.984q0 1.6 1.12 2.752-1.216 0.672-2.048 1.792t-1.056 2.464z"></path> </g></svg>\n\
          </div>\n\
        <div class="menu-item-txt" data-word_code="user-account">User Account</div>\n\
      </div>\n\
    </div>\n\
    <div\n\
      class="menu-item-container"\n\
      onclick="home_page.clickMainMenu(8)"\n\
      onmouseenter="home_page.hoverMainMenu(8)"\n\
    >\n\
        <div class="menu-item">\n\
          <div class="menu-item-icon-container">\n\
            <svg viewBox="0 0 600 600" version="1.1" id="svg9724" sodipodi:docname="settings.svg" inkscape:version="1.2.2 (1:1.2.2+202212051550+b0a8486541)" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs id="defs9728"></defs> <sodipodi:namedview id="namedview9726" pagecolor="#ffffff" bordercolor="#666666" borderopacity="1.0" inkscape:showpageshadow="2" inkscape:pageopacity="0.0" inkscape:pagecheckerboard="0" inkscape:deskcolor="#d1d1d1" showgrid="true" inkscape:zoom="1.1896171" inkscape:cx="205.52832" inkscape:cy="369.44661" inkscape:window-width="1920" inkscape:window-height="1009" inkscape:window-x="0" inkscape:window-y="1080" inkscape:window-maximized="1" inkscape:current-layer="g10449" showguides="true"> <inkscape:grid type="xygrid" id="grid9972" originx="0" originy="0"></inkscape:grid> </sodipodi:namedview> <g id="g10449" transform="matrix(0.95173205,0,0,0.95115787,13.901174,12.168794)" style="stroke-width:1.05103"> <path id="path1129" style="color:#000000;fill:#000000;stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none;paint-order:stroke fill markers" d="m -899.99998,-310.79461 c -20.43409,0 -40.0078,4.62259 -52.90398,19.2757 -12.89618,14.65312 -13.31011,30.27623 -14.05636,39.78187 -0.74624,9.50565 -1.36732,15.42265 -2.80675,19.0879 -1.43942,3.66526 -2.62672,6.46545 -11.63186,11.66458 -9.00514,5.19911 -12.02109,4.82429 -15.91499,4.23825 -3.89398,-0.58605 -9.32638,-3.00427 -17.93168,-7.11083 -8.6053,-4.10655 -22.3462,-11.56116 -41.4843,-7.71929 -19.138,3.84186 -32.9287,18.48118 -43.1458,36.17762 -10.2171,17.69644 -15.9985,36.95986 -9.7566,55.45483 6.2418,18.49497 19.5659,26.66798 27.4249,32.06708 7.859,5.39908 12.6704,8.893362 15.1249,11.972567 2.4545,3.079205 4.2876,5.506097 4.2876,15.904332 0,10.398237 -1.8331,12.825128 -4.2876,15.904333 -2.4545,3.079204 -7.2659,6.57348 -15.1249,11.972569 -7.859,5.39909 -21.1831,13.572101 -27.4249,32.067077 -6.2419,18.4949758 -0.4605,37.758386 9.7566,55.454828 10.2171,17.696443 24.0078,32.335764 43.1458,36.177623 19.1381,3.84186 32.879,-3.612739 41.4843,-7.719295 8.6053,-4.106556 14.0377,-6.52478 17.93168,-7.110826 3.8939,-0.586047 6.90985,-0.960867 15.91499,4.238251 9.00514,5.199118 10.19243,7.999328 11.63186,11.664579 1.43943,3.665252 2.06051,9.582259 2.80675,19.087903 0.74625,9.505639 1.16018,25.128749 14.05636,39.781869 12.89618,14.65311 32.46989,19.2757 52.90398,19.2757 20.43409,0 40.0078,-4.62259 52.90398,-19.2757 12.89617,-14.65312 13.31011,-30.27623 14.05635,-39.781869 0.74624,-9.505644 1.36733,-15.422651 2.80676,-19.087903 1.43942,-3.665251 2.62672,-6.465461 11.63186,-11.664579 9.00513,-5.199119 12.02108,-4.824297 15.91499,-4.238251 3.89392,0.586046 9.32639,3.004271 17.93164,7.110826 8.60525,4.106555 22.34625,11.561156 41.48432,7.719295 19.13806,-3.84186 32.92874,-18.481179 43.14579,-36.177623 10.21705,-17.696442 15.99856,-36.9598523 9.75668,-55.454828 -6.24189,-18.494976 -19.56594,-26.667988 -27.42495,-32.067077 -7.859,-5.399088 -12.67039,-8.893365 -15.12488,-11.972569 -2.45449,-3.079205 -4.28764,-5.506097 -4.28764,-15.904333 0,-10.398236 1.83315,-12.825127 4.28764,-15.904332 2.45449,-3.079205 7.26588,-6.573487 15.12488,-11.972567 7.85901,-5.3991 21.18307,-13.57211 27.42495,-32.06708 6.24188,-18.49497 0.46037,-37.75839 -9.75668,-55.45483 -10.21705,-17.69644 -24.00773,-32.33576 -43.14579,-36.17762 -19.13807,-3.84186 -32.87907,3.61274 -41.48432,7.71929 -8.60525,4.10656 -14.03772,6.52478 -17.93164,7.11083 -3.89391,0.58604 -6.90986,0.96086 -15.91499,-4.23825 -9.00514,-5.19913 -10.19243,-7.99932 -11.63186,-11.66458 -1.43943,-3.66525 -2.06052,-9.58225 -2.80676,-19.0879 -0.74624,-9.50564 -1.16018,-25.12875 -14.05635,-39.78187 -12.89618,-14.65311 -32.46989,-19.2757 -52.90398,-19.2757 z m 0.0181,130.78031 c 55.63168,0 100.16735,44.4506 100.16735,100.014299 0,55.563699 -44.53567,100.014302 -100.16735,100.014302 -55.63168,0 -100.16738,-44.450603 -100.16738,-100.014302 0,-55.563699 44.5357,-100.014299 100.16738,-100.014299 z" transform="matrix(1.3636076,0,0,1.3667651,1527.8554,411.9526)" sodipodi:nodetypes="ssssssssscssssscssssssssssssssssssssssssssssssssssssss"></path> <g id="path10026" inkscape:transform-center-x="-0.59233046" inkscape:transform-center-y="-20.347403" transform="matrix(1.3807551,0,0,1.2700888,273.60014,263.99768)"></g> <g id="g11314" transform="matrix(1.5092301,0,0,1.3955555,36.774048,-9.4503933)" style="stroke-width:50.6951"></g> <path style="color:#000000;fill:#020202;stroke-width:1.05103;stroke-linejoin:round;-inkscape-stroke:none;paint-order:stroke fill markers" d="m 300.60937,218.51428 c -46.03938,0 -84.05805,38.06434 -84.05805,84.09712 0,46.03278 38.01867,84.09711 84.05805,84.09711 46.03938,0 84.05649,-38.06433 84.05649,-84.09711 0,-46.03278 -38.01711,-84.09712 -84.05649,-84.09712 z" id="path344" sodipodi:nodetypes="sssss"></path> </g> </g></svg>\n\
          </div>\n\
        <div class="menu-item-txt" data-word_code="settings">Settings</div>\n\
      </div>\n\
    </div>\n\
  </div>\n\
</div>\n\
<div class="notification-container">\n\
  <div class="notification-wrapper" id="playlist-expiration-warning">\n\
    <div class="notification-title">Notification</div>\n\
    <div class="notification-body">\n\
      <div>Your IPTV playlist will expire in <span class="playlist-will-expire-in">unknown</span>. Please contact your IPTV provider to renew.</div>\n\
    </div>\n\
    <div class="notification-action-btn" onclick="home_page.closePlaylistExpiryNotification()">Dismiss</div>\n\
  </div>\n\
</div>\n\
</div>\n\
<div id="channel-page" class="height-100 hide">\n\
  <div id="channel-page-left-part" class="">\n\
    <div id="channel-page-title" class=" position-relative">Live Channels</div>\n\
    <div\n\
      class="categories-container"\n\
      id="channel-page-categories-container"\n\
    ></div>\n\
    <div\n\
      class="menus-container position-relative"\n\
      id="channel-page-menu-container"\n\
    ></div>\n\
  </div>\n\
  <div class="right-container " id="channel-page-right-part">\n\
    <div class="player-container">\n\
      <object\n\
        class="position-absolute"\n\
        id="channel-page-video"\n\
        type="application/avplayer"\n\
        style="width: 100%; height: 100%"\n\
      ></object>\n\
      <video\n\
        class="position-absolute"\n\
        id="channel-page-video-lg"\n\
        style="width: 100%; height: 100%"\n\
      ></video>\n\
      <div class="video-error">\n\
        <img src="'+HOST+'app_src_min/images/def_image.jpg" />\n\
        <div class="loader"></div>\n\
      </div>\n\
      <div class="video-reconnect-message" data-word_code="reconnecting">\n\
        Reconnecting...\n\
      </div>\n\
    </div>\n\
    <div class="channel-information-container">\n\
      <p id="channel-title"></p>\n\
      <div id="next-program-container"></div>\n\
    </div>\n\
    <div id="full-screen-information">\n\
      <div class="full-screen-contents-wrapper">\n\
        <div class="full-screen-channel-logo-wrapper">\n\
          <img\n\
            class="full-screen-channel-logo"\n\
            onerror="this.src=default_movie_icon"\n\
          />\n\
        </div>\n\
        <div class="full-screen-programmes-container">\n\
          <div class="full-screen-channel-name"></div>\n\
          <div class="full-screen-program-names-wrapper">\n\
            <div class="full-screen-program-name current"></div>\n\
            <div class="full-screen-program-name next"></div>\n\
          </div>\n\
          <div class="full-screen-programme-times-wrapper">\n\
            <div class="full-screen-program-time current"></div>\n\
            <div class="full-screen-program-time next"></div>\n\
          </div>\n\
          <div class="full-screen-program-wrapper current-program">\n\
            <span class="full-screen-program-name"></span>\n\
            <span class="full-screen-program-time"></span>\n\
          </div>\n\
          <div class="full-screen-program-wrapper next-program">\n\
            <span class="full-screen-program-name"></span>\n\
            <span class="full-screen-program-time"></span>\n\
          </div>\n\
        </div>\n\
      </div>\n\
      <div class="full-screen-buttons-wrapper">\n\
        <div class="full-screen-button" data-word_code="epg" onmouseenter="channel_page.hoverLiveControlButton(0)" onclick="channel_page.handleMenuClick()">\n\
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 6.00067L21 6.00139M8 12.0007L21 12.0015M8 18.0007L21 18.0015M3.5 6H3.51M3.5 12H3.51M3.5 18H3.51M4 6C4 6.27614 3.77614 6.5 3.5 6.5C3.22386 6.5 3 6.27614 3 6C3 5.72386 3.22386 5.5 3.5 5.5C3.77614 5.5 4 5.72386 4 6ZM4 12C4 12.2761 3.77614 12.5 3.5 12.5C3.22386 12.5 3 12.2761 3 12C3 11.7239 3.22386 11.5 3.5 11.5C3.77614 11.5 4 11.7239 4 12ZM4 18C4 18.2761 3.77614 18.5 3.5 18.5C3.22386 18.5 3 18.2761 3 18C3 17.7239 3.22386 17.5 3.5 17.5C3.77614 17.5 4 17.7239 4 18Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>\n\
          <span>EPG</span>\n\
        </div>\n\
        <div class="full-screen-button" data-word_code="previous" onmouseenter="channel_page.hoverLiveControlButton(1)" onclick="channel_page.handleMenuClick()">\n\
          <svg fill="#000000" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M56,32a8.00008,8.00008,0,0,1,8,8v73.73535l119.65723-73.124A16.0002,16.0002,0,0,1,208,54.26465v147.4707a16.004,16.004,0,0,1-24.34375,13.65283L64,142.26416V216a8,8,0,0,1-16,0V40A8.00008,8.00008,0,0,1,56,32Z"></path> </g></svg>\n\
          <span>Previous</span>\n\
        </div>\n\
        <div class="full-screen-button" data-word_code="next" onmouseenter="channel_page.hoverLiveControlButton(2)" onclick="channel_page.handleMenuClick()">\n\
          <svg fill="#000000" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M208,40V216a8,8,0,0,1-16,0V142.26416l-119.65625,73.124A16.00029,16.00029,0,0,1,48,201.73535V54.26465A16.0002,16.0002,0,0,1,72.34277,40.61133L192,113.73535V40a8,8,0,0,1,16,0Z"></path> </g></svg>\n\
          <span>Next</span>\n\
        </div>\n\
        <div class="full-screen-button" data-word_code="audio" onmouseenter="channel_page.hoverLiveControlButton(3)" onclick="channel_page.handleMenuClick()">\n\
          <svg style="width:2.5rem; height:2.5rem;" fill="#000000" viewBox="0 -0.63 122.88 122.88" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="enable-background:new 0 0 122.88 121.61" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style> <g> <path class="st0" d="M73.12,0H88.6v5.17c38.74,8.87,43.17,27.47,20.7,56.79c2.39-29.09-0.54-35.33-20.7-36.68v73.54 c0.04,0.39,0.05,0.78,0.05,1.18c0,9.56-10.03,19.04-22.4,21.18c-12.37,2.14-22.4-3.88-22.4-13.44c0-13.04,17.91-24.36,29.26-20.37 L73.12,0L73.12,0z M5.69,73.78C2.55,73.78,0,71.23,0,68.09c0-3.14,2.55-5.69,5.69-5.69h47.63c3.14,0,5.69,2.55,5.69,5.69 c0,3.14-2.55,5.69-5.69,5.69H5.69L5.69,73.78z M5.69,46.14C2.55,46.14,0,43.59,0,40.44c0-3.14,2.55-5.69,5.69-5.69h47.63 c3.14,0,5.69,2.55,5.69,5.69c0,3.14-2.55,5.69-5.69,5.69H5.69L5.69,46.14z M5.69,18.5C2.55,18.5,0,15.95,0,12.8 c0-3.14,2.55-5.69,5.69-5.69h47.63c3.14,0,5.69,2.55,5.69,5.69c0,3.14-2.55,5.69-5.69,5.69H5.69L5.69,18.5z"></path> </g> </g></svg>\n\
          <span>Audio</span>\n\
        </div>\n\
      </div>\n\
      <div class="video-resolution"></div>\n\
    </div>\n\
    <div id="full-screen-navigation">\n\
      <div class="full-screen-navigation-epg">\n\
        <div class="full-screen-navigation-now">\n\
          <div class="full-screen-navigation-epg-title">Now</div>\n\
          <div class="full-screen-navigation-epg-time">00:01 - 00:59</div>\n\
          <div class="full-screen-navigation-epg-name">Our Democracy</div>\n\
        </div>\n\
        <div class="horizontal-separator"></div>\n\
        <div class="full-screen-navigation-next">\n\
          <div class="full-screen-navigation-epg-title">Next</div>\n\
          <div class="full-screen-navigation-epg-time">01:00 - 01:59</div>\n\
          <div class="full-screen-navigation-epg-name">TBN Rater Songbad</div>\n\
        </div>\n\
        <div class="horizontal-separator"></div>\n\
        <div class="full-screen-navigation-later">\n\
          <div class="full-screen-navigation-epg-title">Later</div>\n\
          <div class="full-screen-navigation-epg-time">02:00 - 02:59</div>\n\
          <div class="full-screen-navigation-epg-name">TBN Analysis</div>\n\
        </div>\n\
      </div>\n\
      <div id="full-screen-navigation-channels"></div>\n\
    </div>\n\
    <div class="bottom-label-items-container">\n\
      <div class="bottom-label-item hoverable" onmouseenter="channel_page.hoverColorButton(0)" onclick="channel_page.handleMenuClick()">\n\
        <div class="bottom-label-icon bottom-item-red"></div>\n\
        <div\n\
          class="bottom-label-text"\n\
          data-word_code="move"\n\
        >\n\
          Move\n\
        </div>\n\
      </div>\n\
      <div class="bottom-label-item hoverable" onmouseenter="channel_page.hoverColorButton(1)" onclick="channel_page.handleMenuClick()">\n\
        <div class="bottom-label-icon bottom-item-blue"></div>\n\
        <div class="bottom-label-text" data-word_code="search">\n\
          Search\n\
        </div>\n\
      </div>\n\
      <div class="bottom-label-item hoverable" onmouseenter="channel_page.hoverColorButton(2)" onclick="channel_page.handleMenuClick()">\n\
        <div class="bottom-label-icon bottom-item-yellow"></div>\n\
        <div class="bottom-label-text" data-word_code="fav">Fav</div>\n\
      </div>\n\
      <div class="bottom-label-item hoverable" onmouseenter="channel_page.hoverColorButton(3)" onclick="channel_page.handleMenuClick()">\n\
        <div class="bottom-label-icon bottom-item-green"></div>\n\
        <div class="bottom-label-text" data-word_code="switch-page">Switch Page</div>\n\
      </div>\n\
    </div>\n\
  </div>\n\
  <div id="typed-channel-number"></div>\n\
</div>\n\
<div id="vod-series-page" class="height-100 hide">\n\
  <div class="vod-img-bg">\n\
    <img  id="movie-image" alt="Movie Poster" >\n\
    <div class="vod-series-summary-section-img-darken"></div>\n\
  </div>\n\
  <div id="vod-series-left-part">\n\
    <div id="vod-series-icon-container">\n\
      <div>\n\
      </div>\n\
    </div>\n\
    <div class="category-search-container">\n\
      <div class="category-search-input-wrapper">\n\
          <span>\n\
            <svg fill="#eee" style="width: 2rem; height: 2rem;" height="32" width="32" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 488.4 488.4" xml:space="preserve" stroke="#eee"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6 s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2 S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7 S381.9,104.65,381.9,203.25z"></path> </g> </g> </g></svg>\n\
          </span>\n\
          <input\n\
          class="category-search-input"\n\
          id="vod-series-category-search"\n\
          onmouseenter="vod_series_page.hoverCategorySearch()"\n\
          onclick="vod_series_page.handleMenuClick()"\n\
          placeholder="Category Search"\n\
          onkeyup="vod_series_page.categoryKeywordChange()"\n\
          onchange="vod_series_page.categoryKeywordChange()"\n\
        />\n\
      </div>\n\
    </div>\n\
    <div id="vod-series-categories-container"></div>\n\
  </div>\n\
  <div id="vod-series-right-part">\n\
    <div id="vod-series-top-menu">\n\
      <div\n\
        class="vod-series-top-menu-item"\n\
        onmouseenter="vod_series_page.hoverTopMenu(0)"\n\
        onclick="vod_series_page.handleMenuClick()"\n\
      >\n\
        <div class="vod-series-top-menu-icon">\n\
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>\n\
        </div>\n\
        <div class="vod-series-top-menu-color red"></div>\n\
      </div>\n\
      <div\n\
        class="vod-series-top-menu-item"\n\
        onmouseenter="vod_series_page.hoverTopMenu(1)"\n\
        onclick="vod_series_page.handleMenuClick()"\n\
      >\n\
        <div class="vod-series-top-menu-icon">\n\
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.0686 15H7.9313C7.32548 15 7.02257 15 6.88231 15.1198C6.76061 15.2238 6.69602 15.3797 6.70858 15.5393C6.72305 15.7232 6.93724 15.9374 7.36561 16.3657L11.4342 20.4344C11.6323 20.6324 11.7313 20.7314 11.8454 20.7685C11.9458 20.8011 12.054 20.8011 12.1544 20.7685C12.2686 20.7314 12.3676 20.6324 12.5656 20.4344L16.6342 16.3657C17.0626 15.9374 17.2768 15.7232 17.2913 15.5393C17.3038 15.3797 17.2392 15.2238 17.1175 15.1198C16.9773 15 16.6744 15 16.0686 15Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7.9313 9.00005H16.0686C16.6744 9.00005 16.9773 9.00005 17.1175 8.88025C17.2393 8.7763 17.3038 8.62038 17.2913 8.46082C17.2768 8.27693 17.0626 8.06274 16.6342 7.63436L12.5656 3.56573C12.3676 3.36772 12.2686 3.26872 12.1544 3.23163C12.054 3.199 11.9458 3.199 11.8454 3.23163C11.7313 3.26872 11.6323 3.36772 11.4342 3.56573L7.36561 7.63436C6.93724 8.06273 6.72305 8.27693 6.70858 8.46082C6.69602 8.62038 6.76061 8.7763 6.88231 8.88025C7.02257 9.00005 7.32548 9.00005 7.9313 9.00005Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>\n\
        </div>\n\
        <div class="vod-series-top-menu-color blue"></div>\n\
      </div>\n\
      <div\n\
        id="vod-series-top-menu-themes"\n\
        class="vod-series-top-menu-item"\n\
        onmouseenter="vod_series_page.hoverTopMenu(2)"\n\
        onclick="vod_series_page.handleMenuClick()"\n\
      >\n\
        <div class="vod-series-top-menu-icon">\n\
        <svg fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M4 11h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm1-6h4v4H5V5zm15-2h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 6h-4V5h4v4zm-9 12a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6zm-5-6h4v4H5v-4zm13-1h-2v2h-2v2h2v2h2v-2h2v-2h-2z"></path></g></svg>\n\
        </div>\n\
        <div class="vod-series-top-menu-color green"></div>\n\
      </div>\n\
      <div\n\
        id="vod-series-top-menu-favorite"\n\
        class="vod-series-top-menu-item"\n\
      >\n\
        <div class="vod-series-top-menu-icon">\n\
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>\n\
        </div>\n\
        <div class="vod-series-top-menu-color yellow"></div>\n\
      </div>\n\
    </div>\n\
    <div id="vod-series-cover">\n\
     <div class="movie-section clearfix">\n\
        <div class="movie-info movie-info-glass-effect" id="movie-info">\n\
            <div class="title-container">\n\
                <img id="movie-log-title" class="mb-3" />\n\
                <h1 class="movie-title" id="movie-title"></h1>\n\
            </div>\n\
            <div class="movie-details">\n\
                <div class="rating">\n\
                  <img src="'+HOST+'app_src_min/images/imdb-logo.png" alt="imdb" class="rating-provider-logo" />\n\
                  <span id="rate"></span>\n\
                </div>\n\
                <div><span class="circle"></span><span id="release-data"></span></div>\n\
                <div><span class="circle"></span><span id="duration"></span></div>\n\
                <div><span class="circle"></span><span id="genre"></span></div>\n\
              </div>\n\
              <div class="movie-synopsis" >\n\
                <div id="movie-synopsis"></div>\n\
              </div>\n\
              <div class="movie-details">\n\
                <div><span class="circle"></span>Director: <span id="director"></span></div>\n\
                <div style="display:flex;align-items:center" ><span class="circle"></span>Cast: <span id="movie-cast"></span></div>\n\
              </div>\n\
        </div>\n\
    </div>\n\
    </div>\n\
      <span id="vod-series-current-category"></span>\n\
    <div id="vod-series-menus-container"></div>\n\
  </div>\n\
</div>\n\
<div id="playlist-page" class="height-100 hide">\n\
  <div class="playlist-top">\n\
    <div class="playlist-icons">\n\
      <div class="playlist-logo">\n\
        <img class="playlist-logo-img" src="'+HOST+'app_src_min/images/logo.png">\n\
      </div>\n\
      <div class="playlist-subject" >\n\
        Playlists\n\
      </div>\n\
    </div>\n\
    <div id="playlist-error" style="display: none;">\n\
      The current playlist is not working due to an issue with the server\n\
      provider. Please contact them directly for assistance, as this is\n\
      beyond the control of our app.\n\
    </div>\n\
    <div class="playlist-mac" >\n\
      <div class="playlist-mac-div">\n\
        Mac Address:\n\
        <span id="playlist-device-id"></span>\n\
      </div>\n\
      <div class="playlist-key-div">\n\
        Device Key:\n\
        <span id="playlist-device-key"></span>\n\
      </div>\n\
    </div>\n\
  </div>\n\
  <div id="playlist-items-container">\n\
  </div>\n\
  <div class="playlist-bottom-container">\n\
    <div class="bottom-left-items-container">\n\
      <div id="notification-content"></div>\n\
      <div id="playlist-page-note-1">\n\
        Please follow\n\
        <span class="playlist-page-link login-note-txt-color-2">\n\
          <span style="color:#dc3545" class="main-server-url">https://<span class="main-domain">iboiptvplayers.com</span></span>\n\
        </span>\n\
        to add or manage playlists\n\
      </div>\n\
    </div >\n\
    <div style="right:4.5rem;bottom:1rem" class="bottom-label-items-container">\n\
      <div class="bottom-label-item hoverable" onmouseenter="playlist_page.hoverColorButton(0)" onclick="playlist_page.handleMenuClick()">\n\
        <div class="bottom-label-icon bottom-item-green"></div>\n\
        <div\n\
          class="bottom-label-text"\n\
          data-word_code="reload"\n\
        >\n\
          Reload\n\
        </div>\n\
      </div>\n\
      <div class="bottom-label-item hoverable" onmouseenter="playlist_page.hoverColorButton(1)" onclick="playlist_page.handleMenuClick()">\n\
        <div class="bottom-label-icon bottom-item-yellow"></div>\n\
        <div class="bottom-label-text" data-word_code="add-playlist">\n\
          Add Playlist\n\
        </div>\n\
      </div>\n\
      <div class="bottom-label-item hoverable" onmouseenter="playlist_page.hoverColorButton(2)" onclick="playlist_page.handleMenuClick()">\n\
        <div class="bottom-label-icon bottom-item-red"></div>\n\
        <div class="bottom-label-text" data-word_code="remove-playlist">Remove Playlist</div>\n\
      </div>\n\
    </div>\n\
  </div>\n\
</div>\n\
<div id="account-page" class="height-100 hide">\n\
  <div class="account-page-content-wrapper">\n\
    <div class="account-page-top">\n\
      <div class="account-page-info-grid">\n\
        <div class="account-page-info-title">DEVICE INFO</div>\n\
          <div class="account-page-info-item">\n\
            <div class="account-page-info-item-name">MAC Address</div>\n\
            <div class="account-page-info-item-value" id="user-account-mac-address">Unknown</div>\n\
          </div>\n\
          <div class="account-page-info-item">\n\
            <div class="account-page-info-item-name">Device Key</div>\n\
            <div class="account-page-info-item-value device-key">Unknown</div>\n\
          </div>\n\
          <div class="account-page-info-item">\n\
            <div class="account-page-info-item-name">Platform</div>\n\
            <div class="account-page-info-item-value" id="platform">Unknown</div>\n\
          </div>\n\
      </div>\n\
      <div class="account-page-info-grid">\n\
        <div class="account-page-info-title">APP INFO</div>\n\
        <div class="account-page-info-item">\n\
          <div class="account-page-info-item-name">Status</div>\n\
          <div class="account-page-info-item-value" id="user-account-is_trial">Unknown</div>\n\
        </div>\n\
        <div class="account-page-info-item">\n\
          <div class="account-page-info-item-name">Expiration Date</div>\n\
          <div class="account-page-info-item-value" id="user-account-expire-date">Unknown</div>\n\
        </div>\n\
        <div class="account-page-info-item">\n\
          <div class="account-page-info-item-name">App Version</div>\n\
          <div class="account-page-info-item-value app-version">Unknown</div>\n\
        </div>\n\
      </div>\n\
    </div>\n\
    <div class="account-page-bottom">\n\
      <div class="account-page-info-grid">\n\
        <div class="account-page-info-title">PLAYLIST INFO</div>\n\
        <div class="account-page-info-item">\n\
          <div class="account-page-info-item-name">Username</div>\n\
          <div class="account-page-info-item-value" id="playlist-username">Unknown</div>\n\
        </div>\n\
        <div class="account-page-info-item">\n\
          <div class="account-page-info-item-name">Status</div>\n\
          <div class="account-page-info-item-value" id="playlist-status">Unknown</div>\n\
        </div>\n\
        <div class="account-page-info-item">\n\
          <div class="account-page-info-item-name">Expiration Date</div>\n\
          <div class="account-page-info-item-value expire-date" id="home-expire-date">Unknown</div>\n\
        </div>\n\
      </div>\n\
    </div>\n\
  </div>\n\
</div>\n\
<div id="playlist-edit-page" class="height-100 hide">\n\
  <div id="playlist-edit-page-container">\n\
    <div id="playlist-kind-container">\n\
      <div\n\
        class="playlist-kind-item"\n\
        data-type="general"\n\
        onmouseenter="playlist_edit_page.hoverKindItem(0)"\n\
        onclick="playlist_edit_page.handleMenuClick()"\n\
      >\n\
        General\n\
      </div>\n\
      <div\n\
        class="playlist-kind-item"\n\
        data-type="xc"\n\
        onmouseenter="playlist_edit_page.hoverKindItem(1)"\n\
        onclick="playlist_edit_page.handleMenuClick()"\n\
      >\n\
        XC\n\
      </div>\n\
    </div>\n\
    <div class="playlist-edit-item-wrapper">\n\
      <label data-word_code="playlist_name">PlayList Name</label>\n\
      <input\n\
        class="form-control playlist-edit-item"\n\
        id="playlist-name"\n\
        onmouseenter="playlist_edit_page.hoverPlaylistEditItem(0)"\n\
        onclick="playlist_edit_page.handleMenuClick()"\n\
      />\n\
    </div>\n\
    <div class="playlist-edit-item-wrapper">\n\
      <label data-word_code="playlist_url"\n\
        >PlayList Url, or Host Url(For XC case)</label\n\
      >\n\
      <input\n\
        class="form-control playlist-edit-item"\n\
        id="playlist-url"\n\
        placeholder="http://yoursite.com:port/..."\n\
        onmouseenter="playlist_edit_page.hoverPlaylistEditItem(1)"\n\
        onclick="playlist_edit_page.handleMenuClick()"\n\
      />\n\
    </div>\n\
    <div class="playlist-edit-item-wrapper xc-case">\n\
      <label data-word_code="user_name">User Name(For XC)</label>\n\
      <input\n\
        class="form-control playlist-edit-item"\n\
        id="xc-user-name"\n\
        onmouseenter="playlist_edit_page.hoverPlaylistEditItem(2)"\n\
        onclick="playlist_edit_page.handleMenuClick()"\n\
      />\n\
    </div>\n\
    <div class="playlist-edit-item-wrapper xc-case">\n\
      <label data-word_code="password">Password(For XC)</label>\n\
      <input\n\
        class="form-control playlist-edit-item"\n\
        id="xc-password"\n\
        onmouseenter="playlist_edit_page.hoverPlaylistEditItem(3)"\n\
        onclick="playlist_edit_page.handleMenuClick()"\n\
      />\n\
    </div>\n\
    <div id="playlist-edit-error-message"></div>\n\
    <div id="playlist-edit-btns-container">\n\
      <button\n\
        class="btn playlist-edit-btn playlist-edit-item"\n\
        onmouseenter="playlist_edit_page.hoverPlaylistEditItem(4)"\n\
        onclick="playlist_edit_page.handleMenuClick()"\n\
      >\n\
        Save\n\
      </button>\n\
      <button\n\
        class="btn playlist-edit-btn playlist-edit-item"\n\
        onmouseenter="playlist_edit_page.hoverPlaylistEditItem(5)"\n\
        onclick="playlist_edit_page.handleMenuClick()"\n\
      >\n\
        Cancel\n\
      </button>\n\
    </div>\n\
  </div>\n\
</div>\n\
<div id="vod-summary-page" class="height-100 position-relative hide">\n\
  <img class="vod-series-background-img" onerror="hideImg(this)" />\n\
  <div id="vod-summary-trailer">\n\
  <div id="vod-summary-trailer-player"></div>\n\
  </div>\n\
  <div class="vod-series-background-img-overlay"></div>\n\
  <div class="vod-series-summary-page-contents-container">\n\
    <div id="vod-summary-content-container">\n\
      <h3 id="vod-summary-name"></h3>\n\
      <img id="vod-summary-log-title" style="    max-width: 20rem;\n\
max-height: 15rem;\n\
margin-top: 1.875rem;\n\
padding-left: 3.125rem;" class="mb-3"/>\n\
      <div\n\
        id="vod-summary-page-right-part"\n\
        style="height: 100vh; overflow: hidden"\n\
      >\n\
        <div class="vod-summary-information-container position-relative">\n\
            <div class="movie-details">\n\
                <div class="rating">\n\
                  <img src="'+HOST+'app_src_min/images/imdb-logo.png" alt="imdb" class="rating-provider-logo" />\n\
                  <span id="vod-rating-mark"></span>\n\
                </div>\n\
                <div><span class="circle"></span><span id="vod-summary-release-date"></span></div>\n\
                <div><span class="circle"></span><span id="vod-summary-release-length"></span></div>\n\
                <div><span class="circle"></span><span id="vod-summary-release-genre"></span></div>\n\
              </div>\n\
               <div class="movie-details">\n\
                <div><span class="circle"></span>Director: <span id="vod-summary-release-director"></span></div>\n\
                <div><span class="circle"></span>Cast: <span id="vod-summary-release-cast"></span></div>\n\
              </div>\n\
                                  <div class="movie-synopsis" >\n\
                <div id="vod-summary-description"></div>\n\
              </div>\n\
          <div id="vod-summary-action-container">\n\
          <button \n\
            id="vod-watch-movie-button"\n\
            class="vod-action-btn"\n\
            onmouseenter="vod_summary_page.hoverButton(0)"\n\
            onclick="vod_summary_page.showMovie()">\n\
              <span class="vod-watch-movie-icon-container">\n\
                <svg style="width: 2rem; height: 2rem;" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ddd"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.4086 9.35258C23.5305 10.5065 23.5305 13.4935 21.4086 14.6474L8.59662 21.6145C6.53435 22.736 4 21.2763 4 18.9671L4 5.0329C4 2.72368 6.53435 1.26402 8.59661 2.38548L21.4086 9.35258Z" fill="#ddd"></path> </g></svg>\n\
              </span>\n\
              <div class="vod-watch-movie-text-container">\n\
                <div id="vod-watch-movie-btn-text">Start Watching</div>\n\
                <div id="vod-summary-progress-bar-container">\n\
            <div class="vod-summary-progress-bar">\n\
              <div id="vod-summary-watched-bar"></div>\n\
            </div>\n\
            <div id="vod-summary-progress-percentage"></div>\n\
          </div>\n\
              </div>\n\
            </button>\n\
            <button \n\
              id="vod-watch-trailer-button-container"\n\
              class="vod-action-btn"\n\
              onmouseenter="vod_summary_page.hoverButton(1)"\n\
              onclick="vod_summary_page.showTrailerVideo()">\n\
              <span>\n\
            <svg style="width: 2rem; height: 2rem;" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ddd"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M9.49614 7.13176C9.18664 6.9549 8.80639 6.95617 8.49807 7.13509C8.18976 7.31401 8 7.64353 8 8V16C8 16.3565 8.18976 16.686 8.49807 16.8649C8.80639 17.0438 9.18664 17.0451 9.49614 16.8682L16.4961 12.8682C16.8077 12.6902 17 12.3589 17 12C17 11.6411 16.8077 11.3098 16.4961 11.1318L9.49614 7.13176ZM13.9844 12L10 14.2768V9.72318L13.9844 12Z" fill="#ddd"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M0 12C0 8.25027 0 6.3754 0.954915 5.06107C1.26331 4.6366 1.6366 4.26331 2.06107 3.95491C3.3754 3 5.25027 3 9 3H15C18.7497 3 20.6246 3 21.9389 3.95491C22.3634 4.26331 22.7367 4.6366 23.0451 5.06107C24 6.3754 24 8.25027 24 12C24 15.7497 24 17.6246 23.0451 18.9389C22.7367 19.3634 22.3634 19.7367 21.9389 20.0451C20.6246 21 18.7497 21 15 21H9C5.25027 21 3.3754 21 2.06107 20.0451C1.6366 19.7367 1.26331 19.3634 0.954915 18.9389C0 17.6246 0 15.7497 0 12ZM9 5H15C16.9194 5 18.1983 5.00275 19.1673 5.10773C20.0989 5.20866 20.504 5.38448 20.7634 5.57295C21.018 5.75799 21.242 5.98196 21.4271 6.23664C21.6155 6.49605 21.7913 6.90113 21.8923 7.83269C21.9973 8.80167 22 10.0806 22 12C22 13.9194 21.9973 15.1983 21.8923 16.1673C21.7913 17.0989 21.6155 17.504 21.4271 17.7634C21.242 18.018 21.018 18.242 20.7634 18.4271C20.504 18.6155 20.0989 18.7913 19.1673 18.8923C18.1983 18.9973 16.9194 19 15 19H9C7.08058 19 5.80167 18.9973 4.83269 18.8923C3.90113 18.7913 3.49605 18.6155 3.23664 18.4271C2.98196 18.242 2.75799 18.018 2.57295 17.7634C2.38448 17.504 2.20866 17.0989 2.10773 16.1673C2.00275 15.1983 2 13.9194 2 12C2 10.0806 2.00275 8.80167 2.10773 7.83269C2.20866 6.90113 2.38448 6.49605 2.57295 6.23664C2.75799 5.98196 2.98196 5.75799 3.23664 5.57295C3.49605 5.38448 3.90113 5.20866 4.83269 5.10773C5.80167 5.00275 7.08058 5 9 5Z" fill="#ddd"></path> </g></svg>\n\
              </span>\n\
              <span\n\
              id="vod-watch-trailer-button"\n\
              data-word_code="watch_trailer"\n\
            >\n\
              Watch Trailer\n\
            </span>\n\
            </button>\n\
           <button \n\
              id="vod-add-favourite-button"\n\
              class="vod-action-btn"\n\
              onmouseenter="vod_summary_page.hoverButton(2)"\n\
              onclick="vod_summary_page.toggleFavourite()"\n\
              >\n\
            <span>\n\
            <svg xmlns="http://www.w3.org/2000/svg" style="width: 2rem; height: 2rem;" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>\n\
            </span>\n\
           </button>\n\
          </div>\n\
        </div>\n\
        <div id="vod-summary-cast">\n\
          <h2  data-word_code="cast">Cast</h2>\n\
          <div id="cast-container">\n\
          </div>\n\
        </div>\n\
      </div>\n\
    </div>\n\
  </div>\n\
</div>\n\
<div id="series-summary-page" class="height-100 position-relative hide">\n\
  <img class="vod-series-background-img" onerror="hideImg(this)" />\n\
  <div class="vod-series-background-img-overlay"></div>\n\
  <div class="vod-series-summary-page-contents-container">\n\
    <div id="series-summary-content-container">\n\
      <div id="series-summary-left-part">\n\
        <div class="title-container">\n\
                <img id="series-summary-log-title" style="max-width:15rem;max-height:100%" class="mb-3" />\n\
          <div id="series-summary-name"></div>\n\
        </div>\n\
          <div class="movie-details">\n\
                <div class="rating">\n\
                  <img src="'+HOST+'app_src_min/images/imdb-logo.png" alt="imdb" class="rating-provider-logo" />\n\
                  <span id="series-rating-mark"></span>\n\
                </div>\n\
                <div class="pl-3 mt-3"><span class="circle"></span><span id="series-summary-release-date"></span></div>\n\
                <div class="pl-3 mt-3"><span class="circle"></span><span id="series-summary-release-genre"></span></div>\n\
          </div>\n\
          <div class="movie-synopsis" >\n\
              <div id="series-summary-description" class="pl-3"></div>\n\
            </div>\n\
          <div class="movie-details mt-3">\n\
                <div class="pl-3"><span class="circle"></span><span id="series-summary-release-cast"></span></div>\n\
          </div>\n\
          <div\n\
            style="height: 30rem; overflow: hidden"\n\
          >\n\
            <div id="season-items-container"></div>\n\
          </div>\n\
      </div>\n\
      <div\n\
        id="series-summary-informations-container"\n\
      >\n\
          <div id="series-summary-episode-items-container"></div>\n\
      </div>\n\
    </div>\n\
  </div>\n\
</div>\n\
<div\n\
  id="vod-series-player-page"\n\
  class="height-100 position-relative hide"\n\
>\n\
  <div id="player-exit-confirm-modal">\n\
   <h5 data-word_code="exit_confirm">Do you want to exit?</h5>\n\
   <div id="player-exit-buttons">\n\
     <button id="player-exit-button" class="confirtm-exit-palyer" data-word_code="yes" onmouseenter="vod_series_player_page.hoverExitButton(0)" onclick="vod_series_player_page.exitPlayer()">Yes</button>\n\
     <button id="player-exit-button" class="cancel-exit-palyer" data-word_code="no" onmouseenter="vod_series_player_page.hoverExitButton(1)" onclick="vod_series_player_page.cancelExit()">No</button>\n\
   </div>\n\
  </div>\n\
  <div class="player-container">\n\
    <object\n\
      class="position-absolute"\n\
      id="vod-series-player-video"\n\
      type="application/avplayer"\n\
      style="width: 100%; height: 100%"\n\
    ></object>\n\
    <video\n\
      class="position-absolute"\n\
      id="vod-series-player-video-lg"\n\
      style="width: 100%; height: 100%"\n\
    ></video>\n\
    <div class="video-loader">\n\
      <img src="'+HOST+'app_src_min/images/loader.gif" />\n\
    </div>\n\
    <div class="subtitle-container text-center position-absolute"></div>\n\
    <div class="video-error">\n\
      <img src="'+HOST+'app_src_min/images/def_image.jpg" />\n\
      <div class="loader"></div>\n\
    </div>\n\
    <div class="video-reconnect-message" data-word_code="reconnecting">\n\
      Reconnecting...\n\
    </div>\n\
    <div id="vod-series-video-controls-container">\n\
        <div id="vod-series-video-controls-wrapper">\n\
          <div id="vod-series-video-title"></div>\n\
          <div id="vod-series-video-controls-btns">\n\
            <div class="video-control-icon text-center">\n\
              <i\n\
                class="fa fa-step-backward"\n\
                onmouseenter="vod_series_player_page.hoverVideoControlIcon(0)"\n\
                onclick="vod_series_player_page.showNextVideo(-1)"\n\
              ></i>\n\
            </div>\n\
            <div class="video-control-icon text-center">\n\
              <i\n\
                class="fa fa-backward"\n\
                onmouseenter="vod_series_player_page.hoverVideoControlIcon(1)"\n\
                onclick="vod_series_player_page.seekTo(-30)"\n\
              ></i>\n\
            </div>\n\
            <div class="video-control-icon text-center">\n\
              <i\n\
                class="fa fa-pause"\n\
                data-action_type="pause"\n\
                onmouseenter="vod_series_player_page.hoverVideoControlIcon(2)"\n\
                onclick="vod_series_player_page.playPauseVideo()"\n\
              ></i>\n\
            </div>\n\
            <div class="video-control-icon text-center">\n\
              <i\n\
                class="fa fa-forward"\n\
                onmouseenter="vod_series_player_page.hoverVideoControlIcon(3)"\n\
                onclick="vod_series_player_page.seekTo(30)"\n\
              ></i>\n\
            </div>\n\
            <div class="video-control-icon text-center">\n\
              <i\n\
                class="fa fa-step-forward"\n\
                onmouseenter="vod_series_player_page.hoverVideoControlIcon(4)"\n\
                onclick="vod_series_player_page.showNextVideo(1)"\n\
              ></i>\n\
            </div>\n\
          </div>\n\
          <div class="video-info-btns-container">\n\
            <div class="video-info-btn">\n\
              <div\n\
                class="video-info-icon"\n\
                onmouseenter="vod_series_player_page.hoverVideoInfoIcon(0)"\n\
                onclick="vod_series_player_page.showSubtitleAudioModal(\'TEXT\')"\n\
              >\n\
                <i class="fa fa-closed-captioning"></i>\n\
              </div>\n\
            </div>\n\
            <div class="video-info-btn">\n\
              <div\n\
                class="video-info-icon"\n\
                onmouseenter="vod_series_player_page.hoverVideoInfoIcon(1)"\n\
                onclick="vod_series_player_page.showSubtitleAudioModal(\'AUDIO\')"\n\
              >\n\
                <i class="fa fa-audio-description"></i>\n\
              </div>\n\
            </div>\n\
            <div class="video-info-btn lg">\n\
              <div\n\
                class="video-info-icon"\n\
                onmouseenter="vod_series_player_page.hoverVideoInfoIcon(2)"\n\
                onclick="vod_series_player_page.showSubtitleAdjustModal()"\n\
              >\n\
                <i class="fa fa-clock"></i>\n\
              </div>\n\
            </div>\n\
            <div class="video-info-btn">\n\
              <div\n\
                class="video-info-icon"\n\
                onmouseenter="vod_series_player_page.hoverVideoInfoIcon(3)"\n\
                onclick="vod_series_player_page.showAspectRatioMenu()"\n\
              >\n\
                <i class="fas fa-expand"></i>\n\
              </div>\n\
            </div>\n\
            <div class="video-info-btn no-catchup">\n\
              <div\n\
                class="video-info-icon"\n\
                onmouseenter="vod_series_player_page.hoverVideoInfoIcon(4)"\n\
                onclick="vod_series_player_page.showMoviesMenu()"\n\
              >\n\
                <i class="fas fa-bars"></i>\n\
              </div>\n\
            </div>\n\
          </div>\n\
        </div>\n\
        <div id="vod-series-progress-controls-container">\n\
          <div id="vod-series-progress-container">\n\
            <div id="vod-series-video-progressbar-container">\n\
              <input\n\
                class="video-progress-bar-slider"\n\
                type="range"\n\
                data-rangeslider\n\
              />\n\
            </div>\n\
            <div id="vod-series-video-time-container">\n\
              <span\n\
                id="vod-series-video-current-time"\n\
                class="video-time video-current-time text-left"\n\
                >00:00</span\n\
              >\n\
              <span\n\
                id="vod-series-video-duration"\n\
                class="video-time text-right video-total-time text-right"\n\
                >00:00</span\n\
              >\n\
            </div>\n\
          </div>\n\
        </div>\n\
      <div id="player-seasons-container"></div>\n\
    </div>\n\
  </div>\n\
  <div id="vod-video-info-container">\n\
    <div id="vod-video-info-img-container">\n\
      <img src="" onerror="this.src=\''+HOST+'app_src_min/images/default_movie.png\'" />\n\
      <!--                    onerror="this.src=\''+HOST+'app_src_min/images/404.png\'"-->\n\
    </div>\n\
    <div id="vod-video-info-wrapper">\n\
      <div id="vod-video-info-subwrapper1">\n\
        <div id="vod-video-info-title">Feride - 2020</div>\n\
        <div id="vod-video-info-desc"></div>\n\
      </div>\n\
      <div id="vod-video-info-subwrapper2"></div>\n\
    </div>\n\
  </div>\n\
  <div class="modal" id="player-movies-modal" data-backdrop="static">\n\
    <div class="modal-dialog modal-dialog-centered1 modal-lg">\n\
      <div class="modal-content">\n\
        <div class="modal-header">\n\
          <h5\n\
            class="modal-title modal-title-text-3"\n\
            id="player-movies-modal-title"\n\
            data-word_code="other-in-category"\n\
          >\n\
            Other in category\n\
          </h5>\n\
        </div>\n\
        <div class="modal-body" id="player-movies-modal-body">\n\
          <div id="player-movies-selection-container"></div>\n\
        </div>\n\
      </div>\n\
    </div>\n\
  </div>\n\
  <div class="modal" id="aspect-ratio-modal" data-backdrop="static">\n\
    <div class="modal-dialog modal-dialog-centered1 modal-lg">\n\
      <div class="modal-content">\n\
        <div class="modal-header">\n\
          <h5\n\
            class="modal-title modal-title-text-3"\n\
            id="aspect-ratio-modal-title"\n\
            data-word_code="other-in-category"\n\
          >\n\
            Aspect Ratio\n\
          </h5>\n\
        </div>\n\
        <div class="modal-body" id="aspect-ratio-modal-body">\n\
          <div\n\
            onclick="vod_series_player_page.changeAspectRatio(\'stretch\')"\n\
            onmouseenter="vod_series_player_page.hoverAspectRatioItem(0)" class="active"\n\
            >Stretch</div>\n\
          <div\n\
            onclick="vod_series_player_page.changeAspectRatio(\'16:9\')"\n\
            onmouseenter="vod_series_player_page.hoverAspectRatioItem(1)"\n\
            >16:9 <span>Standard</span></div>\n\
          <div\n\
            onclick="vod_series_player_page.changeAspectRatio(\'4:3\')"\n\
            onmouseenter="vod_series_player_page.hoverAspectRatioItem(2)"\n\
            >4:3 <span>Traditional</span></div>\n\
          <div\n\
            onclick="vod_series_player_page.changeAspectRatio(\'21:9\')"\n\
            onmouseenter="vod_series_player_page.hoverAspectRatioItem(3)"\n\
            >21:9 <span>Ultra widescreen</span></div>\n\
          <div\n\
            onclick="vod_series_player_page.changeAspectRatio(\'1:1\')"\n\
            onmouseenter="vod_series_player_page.hoverAspectRatioItem(4)"\n\
            >1:1 <span>Square</span></div>\n\
        </div>\n\
      </div>\n\
    </div>\n\
  </div>\n\
  <div class="modal" id="subtitle-selection-modal" data-backdrop="static">\n\
    <div class="modal-dialog modal-dialog-centered1 modal-lg">\n\
      <div class="modal-content">\n\
        <div class="modal-header">\n\
          <h5\n\
            class="modal-title modal-title-text-3"\n\
            id="subtitle-modal-title"\n\
            data-word_code="subtitle"\n\
          >\n\
            Subtitle\n\
          </h5>\n\
        </div>\n\
        <div class="modal-body" id="subtitle-modal-body">\n\
          <div id="subtitle-loader-container">\n\
            <div class="loader small"></div>\n\
          </div>\n\
          <div id="subtitle-selection-container"></div>\n\
          <div\n\
            class="modal-button-wrapper"\n\
            style="\n\
              margin: 1.25rem 0;\n\
              padding: 0 1.25rem;\n\
              white-space: nowrap;\n\
            "\n\
          >\n\
            <div\n\
              style="\n\
                width: 50%;\n\
                vertical-align: middle;\n\
                display: inline-block;\n\
              "\n\
            >\n\
              <button\n\
                type="button"\n\
                class="btn modal-btn-2 subtitle-item"\n\
                onclick="vod_series_player_page.cancelSubtitle()"\n\
                data-word_code="cancel"\n\
                onmouseenter="vod_series_player_page.hoverSubtitle(-2)"\n\
              >\n\
                Cancel\n\
              </button>\n\
            </div>\n\
            <div\n\
              style="\n\
                width: 50%;\n\
                vertical-align: middle;\n\
                display: inline-block;\n\
                text-align: right;\n\
              "\n\
            >\n\
              <button\n\
                type="button"\n\
                class="btn modal-btn-2 subtitle-item"\n\
                onmouseenter="vod_series_player_page.hoverSubtitle(-1)"\n\
                onclick="vod_series_player_page.confirmSubtitle()"\n\
                data-word_code="ok"\n\
              >\n\
                OK\n\
              </button>\n\
            </div>\n\
          </div>\n\
        </div>\n\
      </div>\n\
    </div>\n\
  </div>\n\
  <div id="subtitle-time-adjust-modal">\n\
    <div id="subtitle-time-adjust-content">\n\
      <div\n\
        class="text-center"\n\
        data-word_code="adjust_subtitle_time"\n\
        id="adjust-subtitle-title-1"\n\
      >\n\
        Adjust Subtitle Time\n\
      </div>\n\
      <div\n\
        class="text-center"\n\
        data-word_code="adjust_subtitle_time_desc"\n\
        id="adjust-subtitle-title-2"\n\
      >\n\
        Is subtitle timing incorrect? Please adjust subtitle time here\n\
      </div>\n\
      <div id="subtitle-adjust-time-container">\n\
        <div class="subtitle-adjust-time-label">\n\
          <span data-word_code="time_to_be_adjusted"\n\
            >Time to be adjusted</span\n\
          >,\n\
          <span data-word_code="seconds">Seconds</span>\n\
          <span data-word_code="plus_or_minus">(+ or -)</span>\n\
        </div>\n\
        <input\n\
          id="subtitle-adjust-time"\n\
          type="number"\n\
          class="subtitle-adjust-item"\n\
          onmouseenter="vod_series_player_page.hoverSubtitleAdjustBtn(0)"\n\
          onclick="vod_series_player_page.handleMenuClick()"\n\
        />\n\
      </div>\n\
      <div id="subtitle-adjust-btns-container">\n\
        <button\n\
          type="button"\n\
          class="btn btn-primary subtitle-adjust-btn subtitle-adjust-item"\n\
          data-word_code="ok"\n\
          onmouseenter="vod_series_player_page.hoverSubtitleAdjustBtn(1)"\n\
          onclick="vod_series_player_page.saveSubtitleAdjustTime()"\n\
        >\n\
          OK\n\
        </button>\n\
        <button\n\
          type="button"\n\
          class="btn btn-primary subtitle-adjust-btn subtitle-adjust-item"\n\
          data-word_code="cancel"\n\
          onmouseenter="vod_series_player_page.hoverSubtitleAdjustBtn(2)"\n\
          onclick="vod_series_player_page.goBack()"\n\
        >\n\
          Cancel\n\
        </button>\n\
      </div>\n\
    </div>\n\
  </div>\n\
</div>\n\
<div id="settings-page">\n\
  <div class="settings-page-left-part">\n\
    <div class="settings-page-option" onclick="settings_page.handleMenuClick()" onmouseenter="settings_page.hoverSettingsItem(0)" data-word_code="change_language">Change Language</div>\n\
    <div class="settings-page-option" onclick="settings_page.handleMenuClick()" onmouseenter="settings_page.hoverSettingsItem(1)" data-word_code="hide_categories">Hide Categories</div>\n\
    <div class="settings-page-option" onclick="settings_page.handleMenuClick()" onmouseenter="settings_page.hoverSettingsItem(2)" data-word_code="theme">Theme</div>\n\
    <div class="settings-page-option" onclick="settings_page.handleMenuClick()" onmouseenter="settings_page.hoverSettingsItem(3)" data-word_code="parent_control">Parental Control</div>\n\
    <div class="settings-page-option" onclick="settings_page.handleMenuClick()" onmouseenter="settings_page.hoverSettingsItem(4)" data-word_code="stream_format">Stream Format</div>\n\
    <div class="settings-page-option" onclick="settings_page.handleMenuClick()" onmouseenter="settings_page.hoverSettingsItem(5)" data-word_code="clear_cache">Clear Cache</div>\n\
    <div class="settings-page-option" onclick="settings_page.handleMenuClick()" onmouseenter="settings_page.hoverSettingsItem(6)" data-word_code="clear_watch_lists">Clear Watch Lists</div>\n\
    <div class="settings-page-option" onclick="settings_page.handleMenuClick()" onmouseenter="settings_page.hoverSettingsItem(7)" data-word_code="subtitle_settings">Subtitle Settings</div>\n\
    <div class="settings-page-option" onclick="settings_page.handleMenuClick()" onmouseenter="settings_page.hoverSettingsItem(8)" data-word_code="font_size">Font Size</div>\n\
    <div class="settings-page-option" onclick="settings_page.handleMenuClick()" onmouseenter="settings_page.hoverSettingsItem(9)" data-word_code="toggle_tmdb">Toggle TMDB API</div>\n\
    <div class="settings-page-option" onclick="settings_page.handleMenuClick()" onmouseenter="settings_page.hoverSettingsItem(10)" data-word_code="toggle_home_favorites">Toggle Home Favorites</div>\n\
    <div class="settings-page-option" onclick="settings_page.handleMenuClick()" onmouseenter="settings_page.hoverSettingsItem(11)" data-word_code="live_initialization">Live Initialization</div>\n\
  </div>\n\
  <div class="settings-page-right-part">\n\
    <div class="setting-option-container" id="change-language-settings">\n\
      <div class="setting-option-title-container">\n\
        <div class="setting-option-title" data-word_code="change_language">Change Language</div>\n\
      </div>\n\
      <div class="setting-option-description" data-word_code="change_language_desc">Select your preferred language for menus, navigation, and on-screen text.</div>\n\
      <div class="setting-option-body">\n\
        <div class="setting-select-options" id="settings-languages-options">\n\
          Something went wrong, try refreshing the app\n\
        </div>\n\
      </div>\n\
    </div>\n\
    <div class="setting-option-container" id="hide-categories-settings">\n\
      <div class="setting-option-title-container">\n\
        <div class="setting-option-title" data-word_code="hide_categories">Hide Categories</div>\n\
      </div>\n\
      <div class="setting-option-description" data-word_code="hide_categories_desc">	Choose which content categories (Adult, Sports, etc.) you want to hide from the main interface.</div>\n\
      <div class="setting-option-body">\n\
        <div class="setting-tabs-container">\n\
          <div class="setting-tab" data-word_code="live_tv" onclick="settings_page.handleMenuClick()" onmouseenter="settings_page.hoverHideCategoriesTab(0)">Live TV</div>\n\
          <div class="setting-tab" data-word_code="movies" onclick="settings_page.handleMenuClick()" onmouseenter="settings_page.hoverHideCategoriesTab(1)">Movies</div>\n\
          <div class="setting-tab" data-word_code="series" onclick="settings_page.handleMenuClick()" onmouseenter="settings_page.hoverHideCategoriesTab(2)">Series</div>\n\
        </div>\n\
        <div class="setting-tab-options-container">\n\
          <div class="setting-select-multi-options" id="hide_categories_live_container">\n\
            <div>Categories will show here</div>\n\
          </div>\n\
          <div class="setting-select-multi-options" id="hide_categories_movies_container">\n\
            <div>Categories will show here</div>\n\
          </div>\n\
          <div class="setting-select-multi-options" id="hide_categories_series_container">\n\
            <div>Categories will show here</div>\n\
          </div>\n\
        </div>\n\
      </div>\n\
    </div>\n\
    <div class="setting-option-container" id="theme-settings">\n\
      <div class="setting-option-title-container">\n\
        <div class="setting-option-title" data-word_code="theme">Theme</div>\n\
      </div>\n\
      <div class="setting-option-description" data-word_code="theme_desc">Switch between various backgrounds for the app to match your viewing environment or personal style.</div>\n\
      <div class="setting-option-body">\n\
        <div class="setting-select-options" id="settings-themes-options">\n\
          Something went wrong, try refreshing the app\n\
        </div>\n\
      </div>\n\
    </div>\n\
    <div class="setting-option-container" id="parental-control-settings">\n\
      <div class="setting-option-title-container">\n\
        <div class="setting-option-title" data-word_code="parent_control">Parental Control</div>\n\
      </div>\n\
      <div class="setting-option-description" data-word_code="parent_control_desc">Restrict access to specific content with a PIN code to ensure a safe viewing experience for kids.</div>\n\
      <div class="setting-option-body">\n\
        <div class="setting-tabs-container">\n\
          <div class="setting-tab" data-word_code="change_password" onclick="settings_page.handleMenuClick()" onmouseenter="settings_page.hoverParentalControlTab(0)">Change Password</div>\n\
          <div class="setting-tab" data-word_code="change_password" onclick="settings_page.handleMenuClick()" onmouseenter="settings_page.hoverParentalControlTab(1)">Turn Off</div>\n\
        </div>\n\
        <div id="settings-parental-control-change">\n\
          <div class="settings-input-container" onclick="settings_page.clickParentalControlOption(0)">\n\
            <div class="settings-input-label" data-word_code="current_password">Current Password</div>\n\
            <input class="settings-input" id="settings-current-parental-password" type="password" value="" maxlength="4" onmouseenter="settings_page.hoverParentalControlOption(0)" />\n\
          </div>\n\
          <div class="settings-input-container" onclick="settings_page.clickParentalControlOption(1)">\n\
            <div class="settings-input-label" data-word_code="new_password">New Password</div>\n\
            <input class="settings-input" id="settings-new-parental-password" type="password" value="" maxlength="4" onmouseenter="settings_page.hoverParentalControlOption(1)" />\n\
          </div>\n\
          <div class="settings-input-container" onclick="settings_page.clickParentalControlOption(2)">\n\
            <div class="settings-input-label" data-word_code="confirm_new_password">Confirm New Password</div>\n\
            <input class="settings-input" id="settings-confirm-parental-password" type="password" value="" maxlength="4" onmouseenter="settings_page.hoverParentalControlOption(2)" />\n\
          </div>\n\
          <div class="settings-form-submission-container">\n\
            <div id="change-parental-validation-error" class="validation-error"></div>\n\
            <div\n\
              class="settings-form-button"\n\
              id="settings-parental-control-change-button"\n\
              data-word_code="submit"\n\
              onclick="settings_page.handleMenuClick()"\n\
              onmouseenter="settings_page.hoverParentalControlOption(3)"\n\
            >\n\
              Submit\n\
            </div>\n\
          </div>\n\
        </div>\n\
        <div id="settings-parental-control-off">\n\
          <div class="settings-input-container" onclick="settings_page.clickParentalControlOption(0)">\n\
            <div class="settings-input-label" data-word_code="current_password">Current Password</div>\n\
            <input class="settings-input" id="settings-current-parental-password-off" type="password" value="" maxlength="4" onmouseenter="settings_page.hoverParentalControlOption(0)" />\n\
          </div>\n\
          <div class="settings-form-submission-container">\n\
            <div id="turn-off-parental-validation-error" class="validation-error"></div>\n\
            <div\n\
              class="settings-form-button"\n\
              id="settings-parental-control-off-button"\n\
              data-word_code="submit"\n\
              onclick="settings_page.handleMenuClick()"\n\
              onmouseenter="settings_page.hoverParentalControlOption(1)"\n\
            >\n\
              Submit\n\
            </div>\n\
          </div>\n\
        </div>\n\
        <div id="settings-parental-control-on">\n\
          <div class="settings-parental-status-info" data-word_code="parental-status-info">Parental control is currently turned off. To enable it, you can set a password, which will restrict access to adult content using a PIN code.</div>\n\
          <div class="settings-input-container" onclick="settings_page.clickParentalControlOption(0)">\n\
            <div class="settings-input-label" data-word_code="new_password">New Password</div>\n\
            <input class="settings-input" id="settings-create-parental-password" type="password" value="" maxlength="4" onmouseenter="settings_page.hoverParentalControlOption(0)" />\n\
          </div>\n\
          <div class="settings-form-submission-container">\n\
            <div id="turn-on-parental-validation-error" class="validation-error"></div>\n\
            <div\n\
              class="settings-form-button"\n\
              id="settings-parental-control-on-button"\n\
              data-word_code="submit"\n\
              onclick="settings_page.handleMenuClick()"\n\
              onmouseenter="settings_page.hoverParentalControlOption(1)"\n\
            >\n\
              Submit\n\
            </div>\n\
          </div>\n\
        </div>\n\
      </div>\n\
    </div>\n\
    <div class="setting-option-container" id="stream-format-settings">\n\
      <div class="setting-option-title-container">\n\
        <div class="setting-option-title" data-word_code="stream_format">Stream Format</div>\n\
      </div>\n\
      <div class="setting-option-description" data-word_code="stream_format_desc">Choose your default stream format for optimal compatibility with your device.</div>\n\
      <div class="setting-option-body">\n\
        <div class="setting-select-options">\n\
          <div class="setting-select-option" data-word_code="default" onmouseenter="settings_page.hoverStreamFormatOption(0)" onclick="settings_page.handleMenuClick()">Default</div>\n\
          <div class="setting-select-option" data-word_code="ts" onmouseenter="settings_page.hoverStreamFormatOption(1)" onclick="settings_page.handleMenuClick()">MPEGTS (.ts)</div>\n\
          <div class="setting-select-option" data-word_code="m3u8" onmouseenter="settings_page.hoverStreamFormatOption(2)" onclick="settings_page.handleMenuClick()">HLS (.m3u8)</div>\n\
        </div>\n\
      </div>\n\
    </div>\n\
    <div class="setting-option-container" id="clear-cache-settings">\n\
      <div class="setting-option-title-container">\n\
        <div class="setting-option-title" data-word_code="clear_cache">Clear Cache</div>\n\
      </div>\n\
      <div class="setting-option-description" data-word_code="clear_cache_desc">Free up storage and resolve playback issues by clearing temporary app data. This will reset all the settings, favorites, watching progress. The app will restart to apply these changes.</div>\n\
      <div class="setting-option-body">\n\
        <div class="setting-select-options">\n\
          <div class="setting-select-option" data-word_code="clear_cache" onmouseenter="settings_page.hoverClearCacheOption(0)" onclick="settings_page.handleMenuClick()">Clear Cache</div>\n\
        </div>\n\
      </div>\n\
    </div>\n\
    <div class="setting-option-container" id="clear-watch-lists-settings">\n\
      <div class="setting-option-title-container">\n\
        <div class="setting-option-title" data-word_code="clear_watch_lists">Clear Watch Lists</div>\n\
      </div>\n\
      <div class="setting-option-description" data-word_code="clear_watch_lists_desc">Remove all saved items from your Continue Watching categories.</div>\n\
      <div class="setting-option-body">\n\
        <div class="setting-select-options">\n\
          <div class="setting-select-option" data-word_code="clear_movies_watch_list" onmouseenter="settings_page.hoverClearWatchListOption(0)" onclick="settings_page.handleMenuClick()">Clear Movies Watch List</div>\n\
          <div class="setting-select-option" data-word_code="clear_series_watch_list" onmouseenter="settings_page.hoverClearWatchListOption(1)" onclick="settings_page.handleMenuClick()">Clear Series Watch List</div>\n\
        </div>\n\
      </div>\n\
    </div>\n\
    <div class="setting-option-container" id="subtitle-settings">\n\
      <div class="setting-option-title-container">\n\
        <div class="setting-option-title" data-word_code="subtitle_settings">Subtitle Settings</div>\n\
      </div>\n\
      <div class="setting-option-description" data-word_code="subtitle_settings_desc">Adjust subtitles size and background color.</div>\n\
      <div class="setting-option-body">\n\
        <div class="settings-multi-value-options-container">\n\
          <div class="settings-multi-value-option" onmouseenter="settings_page.hoverSubtitleOption(0)" onclick="settings_page.handleMenuClick()">\n\
            <div class="settings-multi-value-option-label" data-word_code="subtitle-size">Subtitle Size</div>\n\
            <div class="settings-multi-value-option-value-container">\n\
              <svg class="settings-multi-value-option-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" fill="#ffffff"></path> </g></svg>\n\
              <div class="settings-multi-value-option-value">50px</div>\n\
              <svg class="settings-multi-value-option-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" fill="#ffffff"></path> </g></svg>\n\
            </div>\n\
          </div>\n\
          <div class="settings-multi-value-option" onmouseenter="settings_page.hoverSubtitleOption(1)" onclick="settings_page.handleMenuClick()">\n\
            <div class="settings-multi-value-option-label" data-word_code="subtitle-background">Subtitle Background</div>\n\
            <div class="settings-multi-value-option-value-container">\n\
              <svg class="settings-multi-value-option-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" fill="#ffffff"></path> </g></svg>\n\
              <div class="settings-multi-value-option-value">Black</div>\n\
              <svg class="settings-multi-value-option-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" fill="#ffffff"></path> </g></svg>\n\
            </div>\n\
          </div>\n\
        </div>\n\
        <div class="subtitle-settings-preview">\n\
          <img src="'+HOST+'app_src_min/images/subtitles-preview-bg.png" class="subtitle-settings-preview-bg" />\n\
          <div class="subtitle-settings-preview-text-wrapper">\n\
            <div id="subtitle-settings-preview-text">This is how subtitles will look like</div>\n\
          </div>\n\
        </div>\n\
      </div>\n\
    </div>\n\
    <div class="setting-option-container" id="font-size-settings">\n\
      <div class="setting-option-title-container">\n\
        <div class="setting-option-title" data-word_code="font_size">Font Size</div>\n\
      </div>\n\
      <div class="setting-option-description" data-word_code="font_size_desc">Customize the font size for the app interface text for better readability.</div>\n\
      <div class="setting-option-body">\n\
        <div class="setting-select-options">\n\
          <div class="setting-select-option" data-word_code="normal" onmouseenter="settings_page.hoverFontSizeOption(0)" onclick="settings_page.handleMenuClick()">Normal</div>\n\
          <div class="setting-select-option" data-word_code="large" onmouseenter="settings_page.hoverFontSizeOption(1)" onclick="settings_page.handleMenuClick()">Large</div>\n\
        </div>\n\
      </div>\n\
    </div>\n\
    <div class="setting-option-container" id="toggle-tmdb-settings">\n\
      <div class="setting-option-title-container">\n\
        <div class="setting-option-title" data-word_code="toggle_tmdb_api">Toggle TMDB API</div>\n\
      </div>\n\
      <div class="setting-option-description" data-word_code="toggle_tmdb_desc">Enable or disable TMDB integration for enriched metadata like movie posters, descriptions, and cast info.</div>\n\
      <div class="setting-option-body">\n\
        <div class="setting-select-options">\n\
          <div class="setting-select-option" data-word_code="off" onmouseenter="settings_page.hoverToggleTMDBOption(0)" onclick="settings_page.handleMenuClick()">Off</div>\n\
          <div class="setting-select-option" data-word_code="on" onmouseenter="settings_page.hoverToggleTMDBOption(1)" onclick="settings_page.handleMenuClick()">On</div>\n\
        </div>\n\
      </div>\n\
    </div>\n\
    <div class="setting-option-container" id="toggle-home-favorites-settings">\n\
      <div class="setting-option-title-container">\n\
        <div class="setting-option-title" data-word_code="toggle_home_favorites">Toggle Home Favorites</div>\n\
      </div>\n\
      <div class="setting-option-description" data-word_code="toggle_home_favorites_desc">Show or hide your live channels favorites item on the home screen for quick access to saved content.</div>\n\
      <div class="setting-option-body">\n\
        <div class="setting-select-options">\n\
          <div class="setting-select-option" data-word_code="off" onmouseenter="settings_page.hoverToggleHomeFavoritesOption(0)" onclick="settings_page.handleMenuClick()">Off</div>\n\
          <div class="setting-select-option" data-word_code="on" onmouseenter="settings_page.hoverToggleHomeFavoritesOption(1)" onclick="settings_page.handleMenuClick()">On</div>\n\
        </div>\n\
      </div>\n\
    </div>\n\
    <div class="setting-option-container" id="live-initialization-settings">\n\
      <div class="setting-option-title-container">\n\
        <div class="setting-option-title" data-word_code="live_initialization">Live Initialization</div>\n\
      </div>\n\
      <div class="setting-option-description" data-word_code="live_initialization_desc">Control which live channel/category is selected by default on Live TV page startup.</div>\n\
      <div class="setting-option-body">\n\
        <div class="setting-select-options">\n\
          <div class="setting-select-option" data-word_code="default" onmouseenter="settings_page.hoverLiveInitializationOption(0)" onclick="settings_page.handleMenuClick()">Default</div>\n\
          <div class="setting-select-option" data-word_code="last" onmouseenter="settings_page.hoverLiveInitializationOption(1)" onclick="settings_page.handleMenuClick()">Last</div>\n\
          <div class="setting-select-option" data-word_code="favorite" onmouseenter="settings_page.hoverLiveInitializationOption(2)" onclick="settings_page.handleMenuClick()">Favorite</div>\n\
        </div>\n\
      </div>\n\
    </div>\n\
  </div>\n\
</div>\n\
<div\n\
  id="trailer-player-page"\n\
  class="height-100 position-relative"\n\
  style="display: none"\n\
>\n\
  <div id="trailer-player"></div>\n\
</div>\n\
<div id="epg-page" class="height-100 page-container1 hide">\n\
  <div id="epg-page-left-part">\n\
    <div id="epg-page-title">EPG</div>\n\
    <div id="epg-date-parts">\n\
      <div class="epg-date-item-container active">\n\
        <div class="epg-date-item-day">Wednesday</div>\n\
        <div class="epg-date-item-date">Sep 8</div>\n\
      </div>\n\
      <div class="epg-date-item-container">\n\
        <div class="epg-date-item-day">Wednesday</div>\n\
        <div class="epg-date-item-date">Sep 8</div>\n\
      </div>\n\
    </div>\n\
  </div>\n\
  <div id="epg-page-right-part">\n\
    <div id="epg-title-part">\n\
      <span id="epg-title-logo-container">\n\
        <img\n\
          id="epg-title-logo"\n\
          src="'+HOST+'app_src_min/images/logo.png"\n\
          onerror="this.src=\''+HOST+'app_src_min/images/logo.png\'"\n\
        />\n\
      </span>\n\
      <span id="epg-channel-title"></span>\n\
    </div>\n\
    <div id="epg-programme-desc"></div>\n\
    <div class="position-relative" id="epg-programmes-container"></div>\n\
  </div>\n\
</div>\n\
<div id="switch-page-modal">\n\
  <div class="switch-modal-container">\n\
  <div class="switch-modal-title">Switch Page</div>\n\
    <div class="switch-modal-wrapper">\n\
      <div\n\
        class="switch-modal-item"\n\
        onmouseenter="channel_page.hoverSwitchPageModalItem(0)"\n\
        onclick="channel_page.handleMenuClick()"\n\
      >\n\
          Movies\n\
      </div>\n\
      <div\n\
        class="switch-modal-item"\n\
        onmouseenter="channel_page.hoverSwitchPageModalItem(1)"\n\
        onclick="channel_page.handleMenuClick()"\n\
      >\n\
          Series\n\
      </div>\n\
      <div\n\
        class="switch-modal-item"\n\
        onmouseenter="channel_page.hoverSwitchPageModalItem(2)"\n\
        onclick="channel_page.handleMenuClick()"\n\
      >\n\
          Replay\n\
      </div>\n\
      <div\n\
        class="switch-modal-item"\n\
        onmouseenter="channel_page.hoverSwitchPageModalItem(3)"\n\
        onclick="channel_page.handleMenuClick()"\n\
      >\n\
          Settings\n\
      </div>\n\
      <div\n\
        class="switch-modal-item"\n\
        onmouseenter="channel_page.hoverSwitchPageModalItem(4)"\n\
        onclick="channel_page.handleMenuClick()"\n\
      >\n\
          Change Playlist\n\
      </div>\n\
    </div>\n\
  </div>\n\
</div>\n\
<div id="sort-modal-container" class="sort-modal-container">\n\
  <div class="sort-modal-content-container">\n\
    <div class="sort-modal-wrapper">\n\
      <div class="sort-modal-items-wrapper">\n\
        <div\n\
          class="sort-modal-item"\n\
          data-word_code="default"\n\
          data-sort_key="default"\n\
          onmouseenter="vod_series_page.hoverSortItem(0)"\n\
          onclick="vod_series_page.handleMenuClick()"\n\
        >\n\
          Default\n\
        </div>\n\
        <div\n\
          class="sort-modal-item"\n\
          data-word_code="added"\n\
          data-sort_key="added"\n\
          onmouseenter="vod_series_page.hoverSortItem(1)"\n\
          onclick="vod_series_page.handleMenuClick()"\n\
        >\n\
          Added\n\
        </div>\n\
        <div\n\
          class="sort-modal-item"\n\
          data-word_code="a_z"\n\
          data-sort_key="a_z"\n\
          onmouseenter="vod_series_page.hoverSortItem(2)"\n\
          onclick="vod_series_page.handleMenuClick()"\n\
        >\n\
          A-Z\n\
        </div>\n\
        <div\n\
          class="sort-modal-item"\n\
          data-word_code="z_a"\n\
          data-sort_key="z_a"\n\
          onmouseenter="vod_series_page.hoverSortItem(3)"\n\
          onclick="vod_series_page.handleMenuClick()"\n\
        >\n\
          Z-A\n\
        </div>\n\
        <div\n\
          class="sort-modal-item"\n\
          data-word_code="rating"\n\
          data-sort_key="rating"\n\
          onmouseenter="vod_series_page.hoverSortItem(4)"\n\
          onclick="vod_series_page.handleMenuClick()"\n\
        >\n\
          Rating\n\
        </div>\n\
      </div>\n\
    </div>\n\
  </div>\n\
<div id="search-page" class="height-100" style="display: none">\n\
  <div id="search-page-top-menus-container">\n\
    <div\n\
      class="search-page-top-menu-container"\n\
      id="search-page-input-container"\n\
    >\n\
      <div\n\
        class="search-page-top-menu search-page-input-container"\n\
        onmouseenter="search_page.hoverTopMenu(0)"\n\
        onclick="search_page.handleMenuClick()"\n\
      >\n\
        <input\n\
          id="search-page-input"\n\
          onkeyup="search_page.keywordChange()"\n\
          onchange="search_page.keywordChange()"\n\
          maxlength="20"\n\
          onclick="event.stopPropagation()"\n\
        />\n\
        <i class="fa fa-search"></i>\n\
      </div>\n\
    </div>\n\
  </div>\n\
  <div id="search-page-contents-wrapper">\n\
      <div class="search-page-stream-type-container replay">\n\
      <div class="search-page-stream-type-label" data-word_code="replay">\n\
        Replay\n\
      </div>\n\
      <div\n\
        class="search-page-stream-items-container"\n\
        id="filtered_replay_container"\n\
      ></div>\n\
    </div>\n\
    <div class="search-page-stream-type-container live">\n\
      <div class="search-page-stream-type-label" data-word_code="live_tv">\n\
        Live TV\n\
      </div>\n\
      <div\n\
        class="search-page-stream-items-container"\n\
        id="filtered_channels_container"\n\
      ></div>\n\
    </div>\n\
    <div class="search-page-stream-type-container vod">\n\
      <div class="search-page-stream-type-label" data-word_code="movies">\n\
        Movies\n\
      </div>\n\
      <div\n\
        class="search-page-stream-items-container"\n\
        id="filtered_movies_container"\n\
      ></div>\n\
    </div>\n\
    <div class="search-page-stream-type-container series">\n\
      <div class="search-page-stream-type-label" data-word_code="series">\n\
        Series\n\
      </div>\n\
      <div\n\
        class="search-page-stream-items-container"\n\
        id="filtered_series_container"\n\
      ></div>\n\
    </div>\n\
  </div>\n\
</div>\n\
</div>\n\
<div class="search-modal-container">\n\
<div class="search-modal-wrapper">\n\
  <div class="search-input-container">\n\
    <input\n\
      type="text"\n\
      class="form-control"\n\
      id="search-value"\n\
      onkeyup="channel_page.searchValueChange()"\n\
      onchange="channel_page.searchValueChange()"\n\
      placeholder="At Least 2 Characters needed To Search"\n\
      maxlength="20"\n\
    />\n\
    <i class="fa fa-search search-icon"></i>\n\
  </div>\n\
  <div class="position-relative">\n\
    <div class="search-content-container"></div>\n\
  </div>\n\
</div>\n\
</div>\n\
<div class="modal" id="channel-theme-control-modal"  data-backdrop="static">\n\
<div class="modal-dialog modal-dialog-centered1 modal-xl">\n\
  <div class="modal-content">\n\
    <div class="modal-header">\n\
      <h5\n\
        class="modal-title modal-title-text-2"\n\
        style="font-size: 2.5rem"\n\
        data-word_code="channel-theme-control"\n\
      >\n\
        Channel Theme Control\n\
      </h5>\n\
    </div>\n\
    <div class="modal-body p-20" style="padding: 1.25rem 1.25rem">\n\
      <div class="image-radio-group">\n\
        <label class="image-radio" onclick="home_page.handleModalSelection(0)"\n\
          onmouseenter="home_page.hoverThemeChannel(0)" data-index="0">\n\
          <input type="radio" name="theme-option" value="classic"\n\
          >\n\
          <img src="'+HOST+'app_src_min/images/themes/classic.png" alt="classic">\n\
          <div class="text-circle-wrapper">\n\
          <span class="radio-circle"></span>\n\
          <span class="image-radio-text" data-word_code="classic">Classic</span>\n\
          </div>\n\
        </label>\n\
        <label class="image-radio" onclick="home_page.handleModalSelection(1)" \n\
          onmouseenter="home_page.hoverThemeChannel(1)" data-index="1">\n\
          <input type="radio" name="theme-option" value="normal"\n\
          >\n\
          <img src="'+HOST+'app_src_min/images/themes/normal.png" alt="normal">\n\
          <div class="text-circle-wrapper">\n\
          <span class="radio-circle"></span>\n\
          <span class="image-radio-text" data-word_code="normal">Normal</span>\n\
          </div>\n\
        </label>\n\
        <label class="image-radio" onclick="home_page.handleModalSelection(2)" \n\
          onmouseenter="home_page.hoverThemeChannel(2)" data-index="2">\n\
          <input type="radio" name="theme-option" value="modern"\n\
          >\n\
          <img src="'+HOST+'app_src_min/images/themes/modern.png" alt="modern">\n\
          <div class="text-circle-wrapper">\n\
          <span class="radio-circle"></span>\n\
          <span class="image-radio-text" data-word_code="modern">Modern</span>\n\
          </div>\n\
        </label>\n\
      </div>\n\
  </div>\n\
    </div>\n\
  </div>\n\
</div>\n\
<div class="modal" id="vod-theme-modal" data-backdrop="static">\n\
<div class="modal-dialog modal-dialog-centered1 modal-lg">\n\
  <div class="modal-content">\n\
    <div class="modal-header">\n\
      <h5\n\
        class="modal-title modal-title-text-2"\n\
        style="font-size: 2.5rem"\n\
        data-word_code="movies-theme-control"\n\
      >\n\
        Movies Theme Control\n\
      </h5>\n\
    </div>\n\
    <div class="modal-body p-20" style="padding: 1.25rem 1.25rem">\n\
            <div class="modal-operation-menu-type-3 vod-theme" \n\
        data-index="0"\n\
            onclick="vod_series_page.handleModalSelection(0)"\n\
            onmouseenter="vod_series_page.hoverThemeVod(0)"\n\
            data-word_code="classic">\n\
              Classic Type\n\
          </div>\n\
          <div class="modal-operation-menu-type-3 current vod-theme" \n\
        data-index="1"\n\
            onclick="vod_series_page.handleModalSelection(1)"\n\
            onmouseenter="vod_series_page.hoverThemeVod(1)"\n\
            data-word_code="modern">\n\
              Modern Type\n\
          </div>\n\
    </div>\n\
  </div>\n\
</div>\n\
</div>\n\
<div class="modal" id="parent-confirm-modal" data-backdrop="static">\n\
<div class="modal-dialog modal-dialog-centered1 modal-xl">\n\
  <div class="modal-content">\n\
    <div class="modal-header">\n\
      <h5\n\
        class="modal-title modal-title-text-2"\n\
        style="font-size: 2.5rem"\n\
        data-word_code="parent_control"\n\
      >\n\
        Parent Control\n\
      </h5>\n\
    </div>\n\
    <div class="modal-body p-20" style="padding: 1.25rem 1.25rem">\n\
      <div class="parent-modal-input-container">\n\
        <div class="parent-modal-input-item-container">\n\
          <div class="parent-modal-label-wrapper text-right">\n\
            <label data-word_code="parent_pass">Password:</label>\n\
          </div>\n\
          <div\n\
            class="parent-modal-input-wrapper parent-confirm-item"\n\
            onmouseenter="parent_confirm_page.hoverMenuItem(0)"\n\
          >\n\
            <input\n\
              class="form-control"\n\
              id="parent-confirm-password"\n\
              type="password"\n\
              value=""\n\
              maxlength="4"\n\
            />\n\
          </div>\n\
        </div>\n\
        <div class="" style="margin-top: -0.938rem">\n\
          <div class="parent-modal-label-wrapper text-right"></div>\n\
          <div class="parent-modal-input-wrapper">\n\
            <span\n\
              class="invalid-feedback"\n\
              id="parent-confirm-password-error"\n\
            >\n\
              Sorry, parent password does not match.\n\
            </span>\n\
          </div>\n\
        </div>\n\
      </div>\n\
      <div class="text-right">\n\
        <button\n\
          type="button"\n\
          class="btn modal-btn-1 parent-confirm-modal-button parent-confirm-item"\n\
          onclick="parent_confirm_page.handleMenuClick()"\n\
          onmouseenter="parent_confirm_page.hoverMenuItem(1)"\n\
          data-word_code="ok"\n\
        >\n\
          OK\n\
        </button>\n\
        <button\n\
          type="button"\n\
          class="btn modal-btn-1 parent-confirm-modal-button parent-confirm-item"\n\
          data-word_code="cancel"\n\
          onclick="parent_confirm_page.handleMenuClick()"\n\
          onmouseenter="parent_confirm_page.hoverMenuItem(2)"\n\
          style="margin-left: 0.313rem"\n\
        >\n\
          Cancel\n\
        </button>\n\
      </div>\n\
    </div>\n\
  </div>\n\
</div>\n\
</div>\n\
<div class="modal" id="turn-off-modal" data-backdrop="static">\n\
<div class="modal-dialog modal-dialog-centered1 modal-lg">\n\
  <div\n\
    class="modal-content"\n\
    style="border-radius: 0.625rem; padding-top: 1.25rem"\n\
  >\n\
    <div class="modal-body">\n\
      <h5\n\
        class="modal-text-1 text-center"\n\
        style="\n\
          color: #fff;\n\
          font-size: 2.813rem !important;\n\
          margin: 0.625rem 0;\n\
        "\n\
        data-word_code="exit_app"\n\
      >\n\
        DO YOU WISH TO EXIT APP?\n\
      </h5>\n\
      <div\n\
        class="modal-button-wrapper text-right"\n\
        style="\n\
          padding: 0 1.25rem;\n\
          white-space: nowrap;\n\
          width: fit-content !important;\n\
          margin: 4rem auto;\n\
        "\n\
      >\n\
        <button\n\
          type="button"\n\
          class="btn modal-btn-1"\n\
          style="width: 12.5rem"\n\
          data-word_code="yes"\n\
          onmouseenter="turn_off_page.hoverMenuItem(0)"\n\
          onclick="turn_off_page.handleMenuClick()"\n\
        >\n\
          Yes\n\
        </button>\n\
        <button\n\
          type="button"\n\
          class="btn modal-btn-1"\n\
          style="width: 12.5rem; margin-left: 0.625rem"\n\
          data-word_code="no"\n\
          onmouseenter="turn_off_page.hoverMenuItem(1)"\n\
          onclick="turn_off_page.handleMenuClick()"\n\
        >\n\
          No\n\
        </button>\n\
      </div>\n\
    </div>\n\
  </div>\n\
</div>\n\
</div>\n\
<div id="video-resume-modal">\n\
<div id="video-resume-content">\n\
  <div\n\
    class="text-center"\n\
    data-word_code="resume"\n\
    id="vod-resume-title-1"\n\
  >\n\
    Resume\n\
  </div>\n\
  <div\n\
    class="text-center"\n\
    data-word_code="resume_video"\n\
    id="vod-resume-title-2"\n\
  >\n\
    Resume playback from last position?\n\
  </div>\n\
  <div class="text-center" id="vod-resume-time">03:35</div>\n\
  <button\n\
    type="button"\n\
    class="btn btn-primary resume-action-btn"\n\
    data-word_code="yes"\n\
    onmouseenter="vod_series_player_page.hoverResumeBtn(0)"\n\
    onclick="vod_series_player_page.handleMenuClick()"\n\
  >\n\
    Yes\n\
  </button>\n\
  <button\n\
    type="button"\n\
    class="btn btn-primary resume-action-btn"\n\
    data-word_code="no"\n\
    onmouseenter="vod_series_player_page.hoverResumeBtn(1)"\n\
    onclick="vod_series_player_page.handleMenuClick()"\n\
  >\n\
    No\n\
  </button>\n\
</div>\n\
</div>\n\
<div id="epg-loading-modal">\n\
<div id="epg-loading-modal-content">\n\
  <div\n\
    id="epg-loading-modal-content-text"\n\
    data-word_code="epg_loading_title"\n\
  >\n\
    Please wait while downloading and parsing Epg Data.<br />\n\
    It will take some time.\n\
  </div>\n\
  <div id="loading-content-progress-bar">\n\
    <div id="loading-content-progress-amount"></div>\n\
  </div>\n\
</div>\n\
</div>\n\
<div class="toast" id="toast">\n\
<div class="toast-body" id="toast-body">\n\
  Some text inside the toast body\n\
</div>\n\
</div>\n\
<div id="loader" class="vertical-center" style="display: none">\n\
<div class="load-container load7">\n\
  <div class="loader"></div>\n\
</div>\n\
</div>\n\
<div id="connection-status" class="online">\n\
<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="m 8 1.992188 c -2.617188 0 -5.238281 0.933593 -7.195312 2.808593 l -0.496094 0.480469 c -0.3984378 0.378906 -0.410156 1.011719 -0.03125 1.410156 c 0.382812 0.398438 1.015625 0.410156 1.414062 0.03125 l 0.5 -0.476562 c 0.582032 -0.558594 1.25 -1.011719 1.96875 -1.359375 c 0.332032 -1.148438 1.171875 -2.109375 2.308594 -2.582031 c 0.5625 -0.230469 1.152344 -0.328126 1.734375 -0.296876 c 0.96875 0.050782 1.910156 0.449219 2.625 1.164063 c 0.488281 0.488281 0.824219 1.078125 1.011719 1.714844 c 0.71875 0.347656 1.386718 0.800781 1.96875 1.359375 l 0.5 0.476562 c 0.398437 0.378906 1.03125 0.367188 1.414062 -0.03125 c 0.378906 -0.398437 0.367188 -1.03125 -0.03125 -1.410156 l -0.496094 -0.480469 c -1.957031 -1.875 -4.578124 -2.808593 -7.195312 -2.808593 z m -3.292969 5.007812 c -0.34375 0.230469 -0.660156 0.503906 -0.945312 0.8125 l -0.5 0.550781 c -0.375 0.40625 -0.347657 1.042969 0.0625 1.414063 c 0.410156 0.371094 1.042969 0.339844 1.414062 -0.070313 l 0.5 -0.546875 c 0.214844 -0.234375 0.472657 -0.429687 0.761719 -0.589844 v -0.570312 c 0 -0.386719 0.222656 -0.691406 0.417969 -1 z m 7.054688 0.355469 c -0.019531 0.058593 -0.042969 0.117187 -0.066407 0.175781 c -0.246093 0.59375 -0.648437 1.0625 -1.128906 1.4375 c 0.066406 0.0625 0.132813 0.125 0.195313 0.195312 l 0.5 0.542969 c 0.371093 0.410157 1.003906 0.441407 1.414062 0.070313 c 0.40625 -0.371094 0.4375 -1.007813 0.0625 -1.414063 l -0.5 -0.546875 c -0.152343 -0.167968 -0.308593 -0.320312 -0.476562 -0.460937 z m 0 0" fill="#d61a27" fill-opacity="0.34902"></path> <path d="m 8.152344 3.007812 c -0.4375 -0.023437 -0.882813 0.046876 -1.300782 0.222657 c -1.117187 0.460937 -1.851562 1.558593 -1.851562 2.769531 h 2 c 0 -0.40625 0.242188 -0.769531 0.617188 -0.925781 c 0.375 -0.152344 0.800781 -0.070313 1.089843 0.21875 c 0.289063 0.289062 0.371094 0.714843 0.21875 1.089843 c -0.15625 0.375 -0.519531 0.617188 -0.925781 0.617188 c -0.550781 0 -1 0.449219 -1 1 v 2 h 2 v -1.179688 c 0.785156 -0.28125 1.441406 -0.875 1.769531 -1.671874 c 0.464844 -1.117188 0.207031 -2.414063 -0.648437 -3.269532 c -0.535156 -0.535156 -1.242188 -0.835937 -1.96875 -0.871094 z m -0.152344 7.992188 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 s 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 z m 0 0" fill="#d61a27"></path> </g></svg>\n\
<div>Connection lost!</div>\n\
<p>Check your internet connection.</p>\n\
</div>\n\
';