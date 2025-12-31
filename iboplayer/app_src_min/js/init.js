var platform = getOSPlatform();
loadPlatformSDK();

var app_environment = "production"; // development or production
if(app_environment == "development"){
  var STYLES = [
    "app_src/css/keyboard.css",
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
    "app_src/css/setting_page.css",
    "app_src/css/settings_page.css",
    "app_src/css/category_page.css",
    "app_src/css/search_page.css",
    "app_src/css/subtitle.css",
    "app_src/css/media.css"
  ];
  var SCRIPTS = [
    "app_src_min/js/libs/crypto-js-3.1.9.min.js",
    "app_src/js/keyboard.js",
    "app_src/js/api.js",
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
    "app_src/js/setting_page.js",
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
    "app_src/js/device_key_login_page.js",
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
  '\n\
  <div id="login_page" class="hide">\n\
    <div class="login-page-container">\n\
      <div class="login-page-title">Login with your device key</div>\n\
      <div class="login-page-description">If you forgot your device key, please reach out to us with a screenshot of this page and we will provide</div>\n\
      <div class="login-page-mac-address">Mac Address: <span class="mac-address"></span></div>\n\
      <div>Enter your device key</div>\n\
      <input class="login-page-key-input" onmouseenter="device_key_login_page.hoverInput()" onClick="device_key_login_page.clickInput()" />\n\
      <div class="login-page-key-submit" onmouseenter="device_key_login_page.hoverSubmitButton()" onClick="device_key_login_page.clickSubmitButton()">Submit</div>\n\
    </div>\n\
  </div>\n\
  <div\n\
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
  <h2 class="loading__loader-title" data-word_code="loading_title">Discover, Play, Enjoy...</h2>\n\
  <p class="loading__loader-description" data-word_code="loading_message">\n\
    Elevate your entertainment experience with IBO IPTV Player. Designed for flexibility and ease of use, it allows you to stream content from your preferred providers seamlessly across all your devices. Take full control with advanced features such as customizable playlists, comprehensive parental controls, and an intuitive interface. Please note: this IPTV player does not include preloaded content and requires you to add your own playlists.\n\
  </p>\n\
  <div class="loading_loader-container"><span class="loading_loader"></span></div>\n\
</div>\n\
<div class="loading_bottom-credits-container">\n\
  <span class="loading_bottom-credits">\n\
    <span data-word_code="made_by">Made by</span> <img src="'+HOST+'app_src_min/images/ibo-dev.png" />\n\
  </span>\n\
</div>\n\
<div id="app-loading-too-long">\n\
  <div class="app-loading-too-long-info-container">\n\
    <div class="app-loading-too-long-title">Stuck on loading screen?</div>\n\
    <div class="app-loading-too-long-description">The app may experience delays on the loading screen for various reasons. A large playlist, for example, may take longer to load all necessary resources for a smooth experience. If you\'re encountering an issue, please try restarting the app. If the problem persists, we recommend reaching out to your IPTV provider or selecting an alternative playlist.</div>\n\
    <div class="app-loading-too-long-instructions-wrapper">\n\
      <div class="app-loading-too-long-instructions-title">Follow these simple instructions to add a playlist.</div>\n\
      <div class="app-loading-too-long-instruction-point">Visit our website: <span class="highlight">https://iboplayer.com</span></div>\n\
      <div class="app-loading-too-long-instruction-point">Navigate to manage playlists page</div>\n\
      <div class="app-loading-too-long-instruction-point">Enter your mac address: <span class="highlight mac-address"></span></div>\n\
      <div class="app-loading-too-long-instruction-point">Enter your device key: <span class="highlight device-key"></span></div>\n\
      <div class="app-loading-too-long-instruction-point">Add another playlist or edit the currently added playlists</div>\n\
    </div>\n\
    <div class="app-loading-too-long-cta-btns">\n\
      <div class="app-loading-too-long-cta-button active" onclick="login_page.clickLoadingForTooLongOption(0)" onmouseenter="login_page.hoverLoadingForTooLongOption(0)">Change Playlist</div>\n\
      <div class="app-loading-too-long-cta-button" onclick="login_page.clickLoadingForTooLongOption(1)" onmouseenter="login_page.hoverLoadingForTooLongOption(1)">Restart App</div>\n\
      <div class="app-loading-too-long-cta-button" onclick="login_page.clickLoadingForTooLongOption(2)" onmouseenter="login_page.hoverLoadingForTooLongOption(2)">Dismiss</div>\n\
    </div>\n\
  </div>\n\
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
          <span>Visit <span class="url">https://iboplayer.com</span>.</span>\n\
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
          Reload\n\
        </button>\n\
      </div>\n\
    </div>\n\
  </div>\n\
</div>\n\
<div id="app">\n\
<div id="home-page" class="page-container1 hide">\n\
<div id="home-top-menu">\n\
<div id="home-logo-container">\n\
    <img src="'+HOST+'app_src_min/images/logo.png" alt="logo" />\n\
</div>\n\
<div class="home-top-info-container">\n\
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
    id="home-account-container"\n\
    class="home-icon-button"\n\
    onmouseenter="home_page.hoverAccountButton()"\n\
    onclick="home_page.handleMenuClick()"\n\
  >\n\
    <svg style="width: 2.5rem; height: 2.5rem;" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>\n\
  </div>\n\
  <div\n\
    id="home-search-container"\n\
    class="home-icon-button"\n\
    onmouseenter="home_page.hoverSearchButton()"\n\
    onclick="home_page.handleMenuClick()"\n\
  >\n\
    <svg fill="#eee" style="width: 2rem; height: 2rem;" height="32" width="32" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 488.4 488.4" xml:space="preserve" stroke="#eee"><path d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6 s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2 S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7 S381.9,104.65,381.9,203.25z"></path></svg>\n\
  </div>\n\
  <div\n\
    id="home-refresh-container"\n\
    class="home-icon-button"\n\
    onmouseenter="home_page.hoverRefreshButton()"\n\
    onclick="home_page.handleMenuClick()"\n\
  >\n\
    <svg style="width: 2.5rem; height: 2.5rem;" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 3V9M3 9H9M3 9C5.32744 6.91141 7.48287 4.54676 10.7453 4.08779C12.6777 3.81593 14.6461 4.17941 16.3539 5.12343C18.0617 6.06746 19.4164 7.54091 20.2139 9.32177M21 21V15M21 15H15M21 15C18.6725 17.0886 16.5171 19.4532 13.2547 19.9122C11.3223 20.1841 9.35391 19.8206 7.6461 18.8766C5.93829 17.9325 4.58356 16.4591 3.78604 14.6782" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>\n\
  </div>\n\
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
        <div class="menu-item-txt" data-word_code="live-favorites">\n\
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
        <svg width="90" height="99" viewBox="0 0 90 99" fill="none" xmlns="http://www.w3.org/2000/svg">\n\
          <path d="M74.3006 20.4885H56.6896L67.9724 9.25015C68.4298 8.79257 68.7926 8.24935 69.0402 7.6515C69.2877 7.05365 69.4151 6.41287 69.4151 5.76576C69.4151 5.11865 69.2877 4.47788 69.0402 3.88003C68.7926 3.28218 68.4298 2.73895 67.9724 2.28138C67.515 1.8238 66.972 1.46083 66.3744 1.2132C65.7768 0.965558 65.1363 0.8381 64.4894 0.8381C63.1831 0.8381 61.9302 1.35726 61.0065 2.28138L44.8671 18.231L39.1275 8.41586C38.8054 7.85517 38.3761 7.36343 37.864 6.96874C37.352 6.57404 36.7672 6.28411 36.1431 6.1155C35.5191 5.94688 34.8679 5.90289 34.2268 5.98603C33.5858 6.06917 32.9674 6.27782 32.4069 6.60005C31.8464 6.92229 31.3549 7.35181 30.9604 7.86408C30.5658 8.37636 30.276 8.96136 30.1075 9.58568C29.9389 10.21 29.8949 10.8614 29.9781 11.5028C30.0612 12.1441 30.2697 12.7627 30.5918 13.3234L35.0559 20.4885H15.4336C11.5304 20.4885 7.78717 22.0397 5.02724 24.8007C2.26731 27.5618 0.716797 31.3065 0.716797 35.2113V74.4719C0.716797 78.3766 2.26731 82.1214 5.02724 84.8825C7.78717 87.6435 11.5304 89.1947 15.4336 89.1947V94.1023C15.4336 95.4038 15.9504 96.6521 16.8704 97.5724C17.7904 98.4928 19.0381 99.0098 20.3391 99.0098C21.6402 99.0098 22.8879 98.4928 23.8079 97.5724C24.7279 96.6521 25.2447 95.4038 25.2447 94.1023V89.1947H64.4894V94.1023C64.4894 95.4038 65.0063 96.6521 65.9262 97.5724C66.8462 98.4928 68.094 99.0098 69.395 99.0098C70.6961 99.0098 71.9438 98.4928 72.8638 97.5724C73.7838 96.6521 74.3006 95.4038 74.3006 94.1023V89.1947C78.2037 89.1947 81.947 87.6435 84.7069 84.8825C87.4669 82.1214 89.0174 78.3766 89.0174 74.4719V35.2113C89.0174 31.3065 87.4669 27.5618 84.7069 24.8007C81.947 22.0397 78.2037 20.4885 74.3006 20.4885ZM79.2062 74.4719C79.2062 75.7735 78.6894 77.0218 77.7694 77.9421C76.8494 78.8625 75.6017 79.3795 74.3006 79.3795H15.4336C14.1325 79.3795 12.8848 78.8625 11.9648 77.9421C11.0448 77.0218 10.528 75.7735 10.528 74.4719V35.2113C10.528 33.9097 11.0448 32.6614 11.9648 31.7411C12.8848 30.8207 14.1325 30.3037 15.4336 30.3037H74.3006C75.6017 30.3037 76.8494 30.8207 77.7694 31.7411C78.6894 32.6614 79.2062 33.9097 79.2062 35.2113V74.4719Z" fill="white"/>\n\
        </svg>\n\
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
          <svg width="92" height="98" viewBox="0 0 92 98" fill="none" xmlns="http://www.w3.org/2000/svg">\n\
            <path d="M85.2725 9.17218L85.5212 9.95182L88.2094 19.3405C88.7197 21.1229 87.8189 22.9758 86.1697 23.7017L85.7019 23.8708L33.3945 38.8881L87.8092 38.8926C89.6607 38.8926 91.1908 40.2705 91.433 42.0583L91.4664 42.5553V84.0554C91.4664 91.1977 85.8991 97.0378 78.8735 97.4606L78.0566 97.4851H17.1088C9.97709 97.4851 4.14568 91.9096 3.72351 84.8735L3.69904 84.0554L3.69804 43.0732L1.15379 34.1797C-0.811975 27.3141 2.93227 20.1634 9.56935 17.8176L10.3478 17.5686L68.9347 0.744123C75.7901 -1.22456 82.9302 2.52525 85.2725 9.17218ZM84.1478 46.2132H11.0134V84.0554C11.0134 87.0054 13.1028 89.4666 15.8804 90.0358L16.4856 90.1283L17.1088 90.1598H78.0566C81.2126 90.1598 83.8084 87.7577 84.1205 84.6796L84.152 84.0554L84.1478 46.2132ZM19.6575 22.5156L12.364 24.6101C9.33026 25.4813 7.49598 28.5069 8.04311 31.552L8.18464 32.1606L9.86371 38.025L11.3026 37.6106L19.6575 22.5156ZM42.8507 15.8552L29.5994 19.6605L21.2446 34.7555L34.4958 30.9502L42.8507 15.8552ZM66.0485 9.19343L52.7973 12.9988L44.4424 28.0938L57.6889 24.2898L66.0485 9.19343ZM75.0559 8.05285L67.6402 21.432L80.165 17.8365L78.4901 11.9709C77.9676 10.1459 76.6688 8.75437 75.0559 8.05285Z" fill="white"/>\n\
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
          <svg width="98" height="98" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">\n\
            <path fill-rule="evenodd" clip-rule="evenodd" d="M36.7625 1.69019C12.5603 8.45508 -3.21687 32.6126 1.16324 56.1987C8.40329 95.1911 54.4853 110.623 82.4385 83.4158L87.9633 78.0378V97.4803H97.9061L97.4684 67.874C96.9845 35.1447 96.4152 32.2573 88.0523 20.0839C77.522 4.75582 54.8644 -3.37035 36.7625 1.69019ZM34.367 12.2654C8.68733 22.1387 1.74839 56.4698 21.4449 76.1943C45.9664 100.752 87.9633 83.3596 87.9633 48.6452C87.9633 21.1376 60.2381 2.31894 34.367 12.2654ZM44.4682 15.9122C37.7353 19.1719 38.3253 29.8827 45.4008 32.8177C56.2566 37.3203 63.7673 20.7164 53.0797 15.8402C49.4749 14.1944 47.9901 14.2066 44.4682 15.9122ZM20.0868 40.3298C13.3539 43.5895 13.944 54.3003 21.0194 57.2353C31.8752 61.7379 39.3859 45.1339 28.6983 40.2577C25.0936 38.612 23.6087 38.6242 20.0868 40.3298ZM68.8496 40.3298C62.1167 43.5895 62.7067 54.3003 69.7822 57.2353C80.638 61.7379 88.1487 45.1339 77.4611 40.2577C73.8563 38.612 72.3715 38.6242 68.8496 40.3298ZM45.992 45.6796C44.9388 46.7357 44.0769 48.0701 44.0769 48.6452C44.0769 50.0016 47.5988 53.5287 48.9532 53.5287C50.3075 53.5287 53.8294 50.0016 53.8294 48.6452C53.8294 47.2888 50.3075 43.7617 48.9532 43.7617C48.379 43.7617 47.0465 44.6248 45.992 45.6796ZM44.4682 64.7473C37.7353 68.0071 38.3253 78.7178 45.4008 81.6528C56.2566 86.1554 63.7673 69.5515 53.0797 64.6753C49.4749 63.0296 47.9901 63.0418 44.4682 64.7473Z" fill="white"/>\n\
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
            <svg width="77" height="94" viewBox="0 0 77 94" fill="none" xmlns="http://www.w3.org/2000/svg">\n\
              <path d="M38.5862 93.5968C31.5766 93.5968 25.1765 91.8418 19.3859 88.3317C13.4429 84.8217 8.79522 80.0908 5.44278 74.139C1.93796 68.1872 0.185547 61.7013 0.185547 54.6813V49.6452H11.1572V55.1391C11.1572 62.9222 13.8239 69.4844 19.1573 74.8258C24.4907 80.0145 31.0432 82.6089 38.8148 82.6089C43.6911 82.6089 48.2626 81.388 52.5293 78.9462C56.6437 76.3519 59.9199 72.9945 62.358 68.874C64.7962 64.7535 66.0152 60.2515 66.0152 55.368C66.0152 47.5849 63.4247 41.0227 58.2437 35.6814C52.9103 30.34 46.3578 27.6694 38.5862 27.6694V44.1512L16.643 22.1754L38.5862 0.1996V16.6815C45.7482 16.6815 52.2245 18.3602 58.0151 21.7176C63.8057 25.2276 68.4534 29.9585 71.9582 35.9103C75.3106 41.7095 76.9869 48.1191 76.9869 55.1391C76.9869 62.3118 75.3106 68.7214 71.9582 74.3679C68.6058 80.3197 63.9581 85.0506 58.0151 88.5607C51.9198 91.9181 45.4435 93.5968 38.5862 93.5968Z" fill="white"/>\n\
            </svg>\n\
          </div>\n\
        <div class="menu-item-txt" data-word_code="replay">Replay</div>\n\
      </div>\n\
    </div>\n\
  </div>\n\
</div>\n\
<div id="home-device-info">\n\
  <div class="home-device-info-item">\n\
    <div class="home-device-info-title">Mac Address:</div>\n\
    <div class="home-device-info-value mac-address"></div>\n\
  </div>\n\
  <div class="home-device-info-item">\n\
    <div class="home-device-info-title">Device Key:</div>\n\
    <div class="home-device-info-value device-key"></div>\n\
  </div>\n\
  <div class="home-device-info-item">\n\
    <div class="home-device-info-title">App Expiration:</div>\n\
    <div class="home-device-info-value user-account-expire-date"></div>\n\
  </div>\n\
</div>\n\
<div id="home-controls-container">\n\
  <div class="home-controls-wrapper">\n\
  <div id="home-top-controls">\n\
  <div id="home-top-channel-theme" class="home-top-control-wrapper" onclick="home_page.clickControlsMenu(0)" onmouseenter="home_page.hoverControlsMenu(0)">\n\
    <div class="home-top-control-svg-wrapper">\n\
      <svg viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 4C8 4.01406 8 4.02813 8 4.04219C7.99375 4.6125 7.475 5 6.90469 5H5.375C4.96094 5 4.625 5.33594 4.625 5.75C4.625 5.80313 4.63125 5.85469 4.64063 5.90469C4.67344 6.06406 4.74219 6.21719 4.80937 6.37187C4.90469 6.5875 4.99844 6.80156 4.99844 7.02812C4.99844 7.525 4.66094 7.97656 4.16406 7.99687C4.10938 7.99844 4.05469 8 3.99844 8C1.79062 8 0 6.20938 0 4C0 1.79063 1.79063 0 4 0C6.20938 0 8 1.79063 8 4ZM2 4.5C2 4.36739 1.94732 4.24022 1.85355 4.14645C1.75979 4.05268 1.63261 4 1.5 4C1.36739 4 1.24021 4.05268 1.14645 4.14645C1.05268 4.24022 1 4.36739 1 4.5C1 4.63261 1.05268 4.75979 1.14645 4.85355C1.24021 4.94732 1.36739 5 1.5 5C1.63261 5 1.75979 4.94732 1.85355 4.85355C1.94732 4.75979 2 4.63261 2 4.5ZM2 3C2.13261 3 2.25979 2.94732 2.35355 2.85355C2.44732 2.75979 2.5 2.63261 2.5 2.5C2.5 2.36739 2.44732 2.24021 2.35355 2.14645C2.25979 2.05268 2.13261 2 2 2C1.86739 2 1.74021 2.05268 1.64645 2.14645C1.55268 2.24021 1.5 2.36739 1.5 2.5C1.5 2.63261 1.55268 2.75979 1.64645 2.85355C1.74021 2.94732 1.86739 3 2 3ZM4.5 1.5C4.5 1.36739 4.44732 1.24021 4.35355 1.14645C4.25979 1.05268 4.13261 1 4 1C3.86739 1 3.74022 1.05268 3.64645 1.14645C3.55268 1.24021 3.5 1.36739 3.5 1.5C3.5 1.63261 3.55268 1.75979 3.64645 1.85355C3.74022 1.94732 3.86739 2 4 2C4.13261 2 4.25979 1.94732 4.35355 1.85355C4.44732 1.75979 4.5 1.63261 4.5 1.5ZM6 3C6.13261 3 6.25979 2.94732 6.35355 2.85355C6.44732 2.75979 6.5 2.63261 6.5 2.5C6.5 2.36739 6.44732 2.24021 6.35355 2.14645C6.25979 2.05268 6.13261 2 6 2C5.86739 2 5.74022 2.05268 5.64645 2.14645C5.55268 2.24021 5.5 2.36739 5.5 2.5C5.5 2.63261 5.55268 2.75979 5.64645 2.85355C5.74022 2.94732 5.86739 3 6 3Z" fill="white"/></svg>\n\
    </div>\n\
    <div data-word_code="channel-theme">Channel Theme</div>\n\
  </div>\n\
  <div id="home-top-playlists" class="home-top-control-wrapper" onclick="home_page.clickControlsMenu(1)" onmouseenter="home_page.hoverControlsMenu(1)">\n\
    <div class="home-top-control-svg-wrapper">\n\
      <svg width="29" height="27" viewBox="0 0 29 27" fill="none" xmlns="http://www.w3.org/2000/svg">\n\
        <path d="M17.25 25.875H4.875C3.59367 25.875 2.953 25.875 2.44762 25.6657C1.7738 25.3866 1.23844 24.8512 0.95933 24.1774C0.75 23.672 0.75 23.0314 0.75 21.75C0.75 20.4686 0.75 19.828 0.95933 19.3226C1.23844 18.6488 1.7738 18.1134 2.44762 17.8343C2.953 17.625 3.59367 17.625 4.875 17.625H24.125C25.4064 17.625 26.047 17.625 26.5524 17.8343C27.2262 18.1134 27.7616 18.6488 28.0407 19.3226C28.25 19.828 28.25 20.4686 28.25 21.75C28.25 23.0314 28.25 23.672 28.0407 24.1774C27.7616 24.8512 27.2262 25.3866 26.5524 25.6657C26.047 25.875 25.4064 25.875 24.125 25.875H22.75" stroke="white" stroke-width="0.96" stroke-linecap="round"/>\n\
        <path d="M0.75 13.5C0.75 12.2186 0.75 11.578 0.95933 11.0726C1.23844 10.3988 1.7738 9.86344 2.44762 9.58433C2.953 9.375 3.59367 9.375 4.875 9.375H24.125C25.4064 9.375 26.047 9.375 26.5524 9.58433C27.2262 9.86344 27.7616 10.3988 28.0407 11.0726C28.25 11.578 28.25 12.2186 28.25 13.5C28.25 14.7814 28.25 15.422 28.0407 15.9274C27.7616 16.6012 27.2262 17.1366 26.5524 17.4157C26.047 17.625 25.4064 17.625 24.125 17.625H4.875C3.59367 17.625 2.953 17.625 2.44762 17.4157C1.7738 17.1366 1.23844 16.6012 0.95933 15.9274C0.75 15.422 0.75 14.7814 0.75 13.5Z" stroke="white" stroke-width="0.96"/>\n\
        <path d="M11.75 1.125H24.125C25.4064 1.125 26.047 1.125 26.5524 1.33433C27.2262 1.61344 27.7616 2.1488 28.0407 2.82262C28.25 3.328 28.25 3.96867 28.25 5.25C28.25 6.53133 28.25 7.172 28.0407 7.67738C27.7616 8.3512 27.2262 8.88656 26.5524 9.16567C26.047 9.375 25.4064 9.375 24.125 9.375H4.875C3.59367 9.375 2.953 9.375 2.44762 9.16567C1.7738 8.88656 1.23844 8.3512 0.95933 7.67738C0.75 7.172 0.75 6.53133 0.75 5.25C0.75 3.96867 0.75 3.328 0.95933 2.82262C1.23844 2.1488 1.7738 1.61344 2.44762 1.33433C2.953 1.125 3.59367 1.125 4.875 1.125H6.25" stroke="white" stroke-width="0.96" stroke-linecap="round"/>\n\
        <path d="M4.875 14.875C5.63439 14.875 6.25 14.2594 6.25 13.5C6.25 12.7406 5.63439 12.125 4.875 12.125C4.11561 12.125 3.5 12.7406 3.5 13.5C3.5 14.2594 4.11561 14.875 4.875 14.875Z" fill="white" stroke="white" stroke-width="2.66667"/>\n\
        <path d="M4.875 6.625C5.63439 6.625 6.25 6.00939 6.25 5.25C6.25 4.49061 5.63439 3.875 4.875 3.875C4.11561 3.875 3.5 4.49061 3.5 5.25C3.5 6.00939 4.11561 6.625 4.875 6.625Z" fill="white" stroke="white" stroke-width="2.66667"/>\n\
        <path d="M4.875 23.125C5.63439 23.125 6.25 22.5094 6.25 21.75C6.25 20.9906 5.63439 20.375 4.875 20.375C4.11561 20.375 3.5 20.9906 3.5 21.75C3.5 22.5094 4.11561 23.125 4.875 23.125Z" fill="white" stroke="white" stroke-width="2.66667"/>\n\
      </svg>\n\
    </div>\n\
    <div data-word_code="change_server">Change Server</div>\n\
  </div>\n\
  <div id="home-top-settings" class="home-top-control-wrapper" onclick="home_page.clickControlsMenu(2)" onmouseenter="home_page.hoverControlsMenu(2)">\n\
    <div class="home-top-control-svg-wrapper">\n\
      <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">\n\
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.14906 20.125C8.65764 20.125 8.2384 19.7602 8.15837 19.2629C8.08467 18.8605 7.80225 18.5318 7.42235 18.4062C7.1128 18.2972 6.81012 18.1686 6.51609 18.0212C6.16621 17.8377 5.74647 17.8652 5.42214 18.0927C5.02964 18.3822 4.49047 18.3374 4.14854 17.9869L2.81864 16.6229C2.46073 16.2557 2.41423 15.677 2.70871 15.2548C2.93582 14.9144 2.96853 14.4757 2.79451 14.1039C2.67985 13.8457 2.57871 13.5812 2.49153 13.3119C2.36667 12.8874 2.02202 12.5695 1.59733 12.4869C1.0852 12.403 0.707112 11.9519 0.703138 11.4199V9.7135C0.700415 9.10039 1.13219 8.57596 1.72201 8.476C2.16947 8.38869 2.54309 8.07436 2.71408 7.64137C2.76502 7.51945 2.81864 7.39845 2.87495 7.27837C3.10235 6.82935 3.07094 6.28853 2.79317 5.87038C2.4458 5.37521 2.49914 4.69487 2.91918 4.263L3.89651 3.26063C4.37853 2.76607 5.13874 2.70206 5.69294 3.10938L5.72377 3.13137C6.13761 3.41704 6.6642 3.46879 7.12338 3.26888C7.61463 3.08753 7.97674 2.65458 8.07656 2.129L8.09004 2.08225C8.20031 1.38646 8.7862 0.875289 9.47356 0.875H10.6533C11.3591 0.87467 11.9615 1.39828 12.077 2.1125L12.0984 2.20875C12.1932 2.71223 12.5365 3.12893 13.0047 3.30875C13.456 3.5074 13.9749 3.45552 14.3802 3.17125L14.4472 3.12175C15.0158 2.70147 15.7976 2.76611 16.2933 3.27438L17.1928 4.19837C17.6437 4.66334 17.7003 5.39453 17.3269 5.92675C17.0343 6.37159 16.997 6.94322 17.229 7.42412L17.2867 7.56162C17.4746 8.03119 17.8811 8.3715 18.3672 8.46637C19.0026 8.57266 19.4698 9.13449 19.4719 9.79463V11.325C19.4717 11.9072 19.0612 12.4038 18.5013 12.4993C18.0408 12.5899 17.6657 12.9318 17.5239 13.3903C17.4613 13.5735 17.3916 13.757 17.3148 13.9402C17.1359 14.3431 17.1756 14.8126 17.4194 15.1778C17.741 15.6367 17.6911 16.2672 17.3014 16.6669L16.0533 17.9484C15.6964 18.3144 15.1335 18.3616 14.7234 18.0597C14.3811 17.8198 13.9376 17.7934 13.5705 17.991C13.3088 18.124 13.0403 18.2419 12.7661 18.3444C12.3826 18.4801 12.1 18.8167 12.0261 19.2258C11.9479 19.7404 11.5176 20.1212 11.0099 20.125H9.14906Z" stroke="white" stroke-width="0.936" stroke-linecap="round" stroke-linejoin="round"/>\n\
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2144 10.5C13.2144 12.2717 11.8141 13.7079 10.0867 13.7079C8.35924 13.7079 6.95898 12.2717 6.95898 10.5C6.95898 8.72832 8.35924 7.29211 10.0867 7.29211C11.8141 7.29211 13.2144 8.72832 13.2144 10.5Z" stroke="white" stroke-width="0.936" stroke-linecap="round" stroke-linejoin="round"/>\n\
      </svg>\n\
    </div>\n\
    <div data-word_code="settings">Settings</div>\n\
  </div>\n\
</div>\n\
  </div>\n\
</div>\n\
<div class="notification-container">\n\
  <div class="notification-wrapper" id="playlist-expiration-warning">\n\
    <div class="notification-title">Notification</div>\n\
    <div class="notification-body">\n\
      <div>Your playlist will expire in <span class="playlist-will-expire-in">unknown</span>. To extend your playlist please contact your IPTV provider.</div>\n\
    </div>\n\
    <div class="notification-footer highlight">Note: The playlist channel expiry date is unrelated to your app license. This is out of our control, please contact your IPTV provider for further information.</div>\n\
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
    <img  id="movie-image" alt="Movie Poster" onerror="this.src=\''+HOST+'app_src_min/images/default_movie_bg.png\'" >\n\
    <div id="vod-series-trailer-player"></div>\n\
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
          <span style="color:#950606" class="main-server-url">https://<span class="main-domain">iboplayer.com</span></span>\n\
        </span>\n\
        to add or manage playlists\n\
      </div>\n\
    </div >\n\
    <div class="bottom-label-items-container">\n\
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
          <div class="account-page-info-item-value user-account-expire-date">Unknown</div>\n\
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
                <div class="pl-3"><span id="series-summary-release-cast"></span></div>\n\
          </div>\n\
          <div\n\
            style="height: 26rem; overflow: hidden"\n\
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
    <div class="series-summary-bottom-label-item">\n\
      <div class="bottom-label-icon bottom-item-yellow"></div>\n\
      <div class="bottom-label-text" data-word_code="toggle_favorite">\n\
        Toggle Favorite\n\
      </div>\n\
      <div id="series-summary-favorite-icon"></div>\n\
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
    <div class="settings-page-option" onclick="settings_page.handleMenuClick()" onmouseenter="settings_page.hoverSettingsItem(4)" data-word_code="clear_cache">Clear Cache</div>\n\
    <div class="settings-page-option" onclick="settings_page.handleMenuClick()" onmouseenter="settings_page.hoverSettingsItem(5)" data-word_code="clear_watch_lists">Clear Watch Lists</div>\n\
    <div class="settings-page-option" onclick="settings_page.handleMenuClick()" onmouseenter="settings_page.hoverSettingsItem(6)" data-word_code="subtitle_settings">Subtitle Settings</div>\n\
    <div class="settings-page-option" onclick="settings_page.handleMenuClick()" onmouseenter="settings_page.hoverSettingsItem(7)" data-word_code="font_size">Font Size</div>\n\
    <div class="settings-page-option" onclick="settings_page.handleMenuClick()" onmouseenter="settings_page.hoverSettingsItem(8)" data-word_code="toggle_tmdb">Toggle TMDB API</div>\n\
    <div class="settings-page-option" onclick="settings_page.handleMenuClick()" onmouseenter="settings_page.hoverSettingsItem(9)" data-word_code="toggle_home_favorites">Toggle Home Favorites</div>\n\
    <div class="settings-page-option" onclick="settings_page.handleMenuClick()" onmouseenter="settings_page.hoverSettingsItem(10)" data-word_code="live_initialization">Live Initialization</div>\n\
    <div class="settings-page-option" onclick="settings_page.handleMenuClick()" onmouseenter="settings_page.hoverSettingsItem(11)" data-word_code="load_on_demand">Load on Demand</div>\n\
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
    <div class="setting-option-container" id="load-on-demand-settings">\n\
      <div class="setting-option-title-container">\n\
        <div class="setting-option-title" data-word_code="load_on_demand">Load on Demand</div>\n\
      </div>\n\
      <div class="setting-option-description" data-word_code="load_on_demand_desc" style="text-align: start">\n\
        When enabled, the app will only request data when you actually open a section (Movies, Series, or Live). This helps the app start faster by reducing the initial loading time.\n\
        <br />\n\
        When disabled, all content data (Movies, Series, and Live) will be loaded together when the app starts, which may increase startup time but allow faster browsing later.\n\
        <br />\n\
        This setting will take effect the next time you load the app\n\
      </div>\n\
      <div class="setting-option-body">\n\
        <div class="setting-select-options">\n\
          <div class="setting-select-option" data-word_code="disabled" onmouseenter="settings_page.hoverLoadOnDemandOption(0)" onclick="settings_page.handleMenuClick()">Disabled</div>\n\
          <div class="setting-select-option" data-word_code="enabled" onmouseenter="settings_page.hoverLoadOnDemandOption(1)" onclick="settings_page.handleMenuClick()">Enabled</div>\n\
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



function createScriptElement(scriptData) {
  var script = document.createElement('script');
  script.src = scriptData.src;
  script.type = scriptData.type;
  script.onload = function() {
    console.log(scriptData.onSuccessMsg);
  };
  script.onerror = function() {
    console.error(scriptData.onFailMsg);
  };
  document.body.appendChild(script);
}

function getOSPlatform() {
  if (window.navigator.userAgent.toLowerCase().indexOf("web0s") !== -1)
    return "lg";
  else if (window.navigator.userAgent.toLowerCase().indexOf("tizen") !== -1)
    return "samsung";
  else if(window.navigator.userAgent.toLowerCase().indexOf('hisense') !== -1 || window.navigator.userAgent.toLowerCase().indexOf('vidaa') !== -1)
    return 'vidaa';
  else if( window.navigator.userAgent.toLowerCase().indexOf('titano') !== -1)
    return 'titanos';
  else if(window.navigator.userAgent.toLowerCase().indexOf('zeasn') !== -1 || window.navigator.userAgent.toLowerCase().indexOf('whale') !== -1 || window.navigator.userAgent.toLowerCase().indexOf('philips') !== -1)
    return 'zeasn';
  else if(window.navigator.userAgent.toLowerCase().indexOf('windows') !== -1)
    return 'windows';
}

function loadPlatformSDK() {
  // Conditionally load platform SDK
  switch (platform) {
    case "samsung":
      createScriptElement({
        src: "$WEBAPIS/webapis/webapis.js",
        type: "text/javascript",
        onSuccessMsg: "webapis loaded successfully",
        onFailMsg: "Failed to load webapis"
      });
      break;
    case "lg":
      createScriptElement({
        src: "app_src_min/js/webOSTVjs-1.2.0/webOSTV.js",
        type: "text/javascript",
        onSuccessMsg: "WebOS loaded successfully",
        onFailMsg: "Failed to load WebOS"
      });
      break;
    case "zeasn":
      createScriptElement({
        src: "https://cache.zeasn.tv/webstatic/homepage_web/deviceinfo/zeasn_deviceInfo_sdk.js",
        type: "text/javascript",
        onSuccessMsg: "Zeasn SDK loaded successfully",
        onFailMsg: "Failed to load Zeasn SDK"
      });
      break;
    case "titanos":
      createScriptElement({
        src: "https://partners.titanos.tv/static/device-info-sdk.js",
        type: "text/javascript",
        onSuccessMsg: "Titanos SDK loaded successfully",
        onFailMsg: "Failed to load Titanos SDK"
      });
      break;
  }
}