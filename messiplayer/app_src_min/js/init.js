var platform = getOSPlatform();
loadPlatformSDK();

var app_environment = "production"; // development or production
if (app_environment == "development") {
  var STYLES = [
    // Libraries
    "app_src_min/css/libs/bootstrap4.4.1.min.css",
    "app_src_min/css/libs/rangeslider.css",
    // App Assets
    "app_src/css/keyboard.css",
    "app_src/css/style.css",
    "app_src/css/variables.css",
    "app_src/css/guide.css",
    "app_src/css/homepage.css",
    "app_src/css/vod_series_summary.css",
    "app_src/css/vod_series_player_page.css",
    "app_src/css/channel_page.css",
    "app_src/css/login.css",
    "app_src/css/catchup.css",
    "app_src/css/catchup_detail.css",
    "app_src/css/rating.css",
    "app_src/css/loader.css",
    "app_src/css/playlist.css",
    "app_src/css/vod_series.css",
    "app_src/css/settings_page.css",
    "app_src/css/category_page.css",
    "app_src/css/subtitle.css",
    "app_src/css/search_page.css",
    "app_src/css/media.css",
  ];
  var SCRIPTS = [
    // Libraries
    "app_src_min/js/libs/qrcode.min.js",
    "app_src_min/js/libs/popper.1.16.0.min.js",
    "app_src_min/js/libs/bootstrap.4.4.1.min.js",
    "app_src_min/js/libs/moment.js",
    "app_src_min/js/libs/rangeslider.js",
    // App Assets
    "app_src/js/keyboard.js",
    "app_src/js/constants.js",
    "app_src/js/api.js",
    "app_src/js/utils.js",
    "app_src/js/common.js",
    "app_src/js/keyTizen.js",
    "app_src/js/mediaPlayer.js",
    "app_src/js/Models/VodModel.js",
    "app_src/js/Models/LiveModel.js",
    "app_src/js/Models/SeriesModel.js",
    "app_src/js/playlist_edit.js",
    "app_src/js/playlist.js",
    "app_src/js/color_theme.js",
    "app_src/js/color_theme_settings.js",
    "app_src/js/settings.js",
    "app_src/js/login_operation.js",
    "app_src/js/account_page.js",
    "app_src/js/key_operations.js",
    "app_src/js/channel_operation.js",
    "app_src/js/time_helper.js",
    "app_src/js/vod_summary.js",
    "app_src/js/vod_series_player.js",
    "app_src/js/trailer.js",
    "app_src/js/series_summary.js",
    "app_src/js/vod_series_page.js",
    "app_src/js/activation_page.js",
    "app_src/js/category_selection_page.js",
    "app_src/js/settings_page.js",
    "app_src/js/turn_off_page.js",
    "app_src/js/parent_confirm_page.js",
    "app_src/js/srt_parser.js",
    "app_src/js/srt_operation.js",
    "app_src/js/catchup_page.js",
    "app_src/js/search_page.js",
    "app_src/js/catchup_detail.js",
    "app_src/js/clear_recent_page.js",
    "app_src/js/clear_cache_page.js",
    "app_src/js/subtitle_setting_page.js",
    "app_src/js/layout_page.js",
    "app_src/js/language_codes.js",
    "app_src/js/home_operation.js",
    "app_src/js/main.js",
  ];
} else {
  var STYLES = ["app_src_min/css/application.min.css"];
  var SCRIPTS = ["app_src_min/js/application.min.js"];
}

var HTML =
  '    <div id="loading-page" class="height-100 text-center">\n\
      <div class="loader-image-container">\n\
        <img id="loading-gif" src="' +
  HOST +
  'app_src_min/images/logo.png" />\n\
        <span class="loading-loader"></span>\n\
        <h1 class="loading-title">\n\
          MessiTV: Your Gateway to Seamless IPTV Streaming\n\
        </h1>\n\
        <p class="loading-description">\n\
          MessiTV is a cutting-edge media player designed to elevate\n\
          your IPTV experience. Built for users who bring their own content, it\n\
          combines advanced technology with effortless functionality to deliver\n\
          unparalleled performance and reliability. Take full control of your\n\
          entertainment with MessiTV.\n\
        </p>\n\
      </div>\n\
      <div class="loading-page-device-info-container" style="position: relative; z-index: 10;">\n\
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
      <div id="loading-issue-container">\n\
        <div id="network-issue-container" class="loading-issue-item hide">\n\
          <div\n\
            id="network-issue-content-wrapper"\n\
            class="loading-issue-message-container"\n\
          >\n\
            <div class="loading-issue-text">\n\
              It appears there’s an issue with your network connection.<br />\n\
              Please verify your network settings and attempt to reconnect.\n\
            </div>\n\
          </div>\n\
          <div\n\
            id="network-issue-btns-container"\n\
            class="loading-issue-btn-container"\n\
          >\n\
            <div\n\
              class="btn network-issue-btn loading-issue-btn"\n\
              onmouseenter="login_page.hoverNetworkIssueBtn(0)"\n\
              onclick="login_page.reloadApp()"\n\
              data-word_code="retry"\n\
            >\n\
              Retry.\n\
            </div>\n\
            <div\n\
              class="network-issue-btn loading-issue-btn btn"\n\
              onmouseenter="login_page.hoverNetworkIssueBtn(1)"\n\
              onclick="login_page.exit()"\n\
              data-word_code="exit"\n\
            >\n\
              Exit\n\
            </div>\n\
          </div>\n\
        </div>\n\
        <div id="expired-issue-container" class="loading-issue-item fullscreen hide">\n\
          <div class="loading-issue-item-content">\n\
            <div class="loading-issue-item-content-left">\n\
              <div class="loading-issue-message-container">\n\
                <div class="loading-issue-text">\n\
                  Your trial period expired on <span class="expire-date">2024-07-06</span>.<br />\n\
                  To keep using our app, please scan this QR code that will send you to our website, where you can make an account and this device will be added automatically<br />\n\
                </div>\n\
                <div id="device-login-qr" title="https://messitvplayer.com/device/login?mac_address=64:7e:b7:ec:b1:a7&amp;platform=lg"></div>\n\
              </div>\n\
            </div>\n\
            <div class="loading-issue-item-content-right">\n\
              <div class="loading-issue-item-content-right-container">\n\
                <p class="loading-issue-item-content-right-container-p">\n\
                  You can still login to the device the old way using mac address and device key (not recommended) by following these simple instructions to activate your app and add a playlist. \n\
                </p>\n\
                <ul class="loading-issue-item-content-right-container-ul">\n\
                  <li>\n\
                    <div class="login-instruction-icon-container">\n\
                      <img src="' +
                        HOST +
                        'app_src_min/images/icons/login-visit.png"/>\n\
                    </div>\n\
                    <p class="login-instruction">Visit <a href="https://www.messitvplayer.com/" class="loading-issue-item-content-right-container-a">https://www.messitvplayer.com/</a></p>\n\
                  </li>\n\
                  <li>\n\
                    <div class="login-instruction-icon-container">\n\
                      <img src="' +
                        HOST +
                        'app_src_min/images/icons/login-log.png"/>\n\
                    </div>\n\
                    <p class="login-instruction">Log in using your device\'s MAC ID and unique device key.</p>\n\
                  </li>\n\
                  <li>\n\
                    <div class="login-instruction-icon-container">\n\
                      <img src="' +
                        HOST +
                        'app_src_min/images/icons/login-device.png"/>\n\
                    </div>\n\
                    <p class="login-instruction">Mac Address: <span class="mac-address">N/A</span> <br>\n\
                      Device key: <span class="device-key">N/A</span></p>\n\
                  </li>\n\
                  <li>\n\
                    <div class="login-instruction-icon-container">\n\
                      <img src="' +
                        HOST +
                        'app_src_min/images/icons/login-payment.png"/>\n\
                    </div>\n\
                    <p class="login-instruction">Go to "Activate Device" tab on the left sidebar and subscribe to an activation.</p>\n\
                  </li>\n\
                  <li>\n\
                    <div class="login-instruction-icon-container">\n\
                      <img src="' +
                        HOST +
                        'app_src_min/images/icons/login-add.png"/>\n\
                    </div>\n\
                    <p class="login-instruction">Optional: Go back to "Manage Playlists" to add your preferred playlist.</p>\n\
                  </li>\n\
                </ul>\n\
                <div class="loading-issue-btn-container">\n\
                  <div\n\
                    class="btn expired-issue-btn loading-issue-btn active"\n\
                    onmouseenter="login_page.hoverExpiredIssueBtn(0)"\n\
                    onclick="login_page.reloadApp()"\n\
                    data-word_code="reload"\n\
                  >\n\
                    Reload\n\
                  </div>\n\
                  <div\n\
                    class="expired-issue-btn loading-issue-btn btn"\n\
                    onmouseenter="login_page.hoverExpiredIssueBtn(1)"\n\
                    onclick="login_page.exit()"\n\
                    data-word_code="exit"\n\
                  >\n\
                    Exit\n\
                  </div>\n\
                </div>\n\
              </div>\n\
            </div>\n\
          </div>\n\
        </div>\n\
        <div id="no-playlist-issue-container" class="loading-issue-item hide">\n\
          <div class="loading-issue-message-container">\n\
            <div class="loading-issue-text">\n\
              You haven’t uploaded your playlist yet. Our app doesn’t supply any\n\
              content by itself.<br />\n\
              To utilize our app, you need to upload your own playlists.You can\n\
              do this by visiting our website at\n\
              <span class="login-page-link"\n\
                >https://messitvplayer.com\n\
            </div>\n\
            <div class="loading-issue-info-item">\n\
              <span class="loading-issue-info-item-label"\n\
                >Your TV mac Address:</span\n\
              >\n\
              <span class="loading-issue-info-item-value mac-address"></span>\n\
            </div>\n\
            <div class="loading-issue-info-item">\n\
              <span\n\
                class="loading-issue-info-item-label"\n\
                data-word_code="device_key"\n\
                >Device Key</span\n\
              >:\n\
              <span class="loading-issue-info-item-value device-key"\n\
                >1234567678</span\n\
              >\n\
            </div>\n\
          </div>\n\
          <div class="loading-issue-btn-container">\n\
            <div\n\
              class="btn no-playlist-btn loading-issue-btn"\n\
              onmouseenter="login_page.hoverNoPlaylistBtn(0)"\n\
              onclick="login_page.reloadApp()"\n\
              data-word_code="reload"\n\
            >\n\
              Reload\n\
            </div>\n\
            <div\n\
              class="no-playlist-btn loading-issue-btn btn"\n\
              onmouseenter="login_page.hoverNoPlaylistBtn(1)"\n\
              onclick="login_page.continueDemoPlaylist()"\n\
              data-word_code="continue_demo_list"\n\
            >\n\
              Continue\n\
            </div>\n\
          </div>\n\
        </div>\n\
        <div id="trial-expired-issue-container" class="loading-issue-item hide">\n\
          <div class="loading-issue-message-container">\n\
            <div class="loading-issue-text">\n\
              Your trial days ended at\n\
              <span class="expire-date">2023-05-07(UTC).</span><br />\n\
              Please go to\n\
              <span class="login-page-link"\n\
                >https://messitvplayer.com</span>\n\
              and register your account, create activation code and upload your\n\
              own playlists\n\
            </div>\n\
            <div class="loading-issue-info-item">\n\
              <span class="loading-issue-info-item-label"\n\
                >Your TV mac Address:</span\n\
              >\n\
              <span class="loading-issue-info-item-value mac-address"></span>\n\
            </div>\n\
            <div class="loading-issue-info-item">\n\
              <span\n\
                class="loading-issue-info-item-label"\n\
                data-word_code="device_key"\n\
                >Device Key</span\n\
              >:\n\
              <span class="loading-issue-info-item-value device-key"\n\
                >1234567678</span\n\
              >\n\
            </div>\n\
          </div>\n\
          <div class="loading-issue-btn-container">\n\
            <div\n\
              class="btn trial-expired-btn loading-issue-btn"\n\
              onmouseenter="login_page.hoverExpiredIssueBtn(0)"\n\
              onclick="login_page.reloadApp()"\n\
              data-word_code="reload"\n\
            >\n\
              Reload\n\
            </div>\n\
            <div\n\
              class="trial-expired-btn loading-issue-btn btn"\n\
              onmouseenter="login_page.hoverExpiredIssueBtn(1)"\n\
              onclick="login_page.exit()"\n\
              data-word_code="exit"\n\
            >\n\
              Exit\n\
            </div>\n\
          </div>\n\
        </div>\n\
      </div>\n\
      <div id="app-loading-too-long">\n\
        <div class="app-loading-too-long-info-container">\n\
          <div class="app-loading-too-long-title">Stuck on loading screen?</div>\n\
          <div class="app-loading-too-long-description">The app may experience delays on the loading screen for various reasons. A large playlist, for example, may take longer to load all necessary resources for a smooth experience. If you\'re encountering an issue, please try restarting the app. If the problem persists, we recommend reaching out to your IPTV provider or selecting an alternative playlist.</div>\n\
          <div class="app-loading-too-long-instructions-wrapper">\n\
            <div class="app-loading-too-long-instructions-title">Follow these simple instructions to add a playlist.</div>\n\
            <div class="app-loading-too-long-instruction-point">Visit our website: <span class="highlight">https://messitvplayer.com</span></div>\n\
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
    <div id="app" style="display: none">\n\
      <div id="home-page" class="page-container1 height-100 hide">\n\
        <div id="home-page-top-container">\n\
          <div class="home-logo-wrapper">\n\
            <img src="' +
  HOST +
  'app_src_min/images/logo.png" alt="Logo" />\n\
          </div>\n\
          <div class="time-weather-container">\n\
            <div class="time-weather-item">\n\
              <div class="country-date-container">\n\
                <div id="weather-country"></div>\n\
                <div id="current-date"></div>\n\
              </div>\n\
              <img src="" id="current-weather-icon">\n\
            </div>\n\
            <div class="time-weather-item">\n\
              <div id="home-page-timer" class="current-time"></div>\n\
              <div id="current-weather-degree"></div>\n\
            </div>\n\
          </div>\n\
        </div>\n\
        <div class="home-center-menus">\n\
          <div id="menu-container">\n\
            <div\n\
              class="menu-item-container live playlist-dependant"\n\
              onmouseenter="home_page.hoverMainMenu(0, true)"\n\
              onclick="home_page.clickMainMenu()"\n\
            >\n\
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17 21L12 17L7 21M6.8 17H17.2C18.8802 17 19.7202 17 20.362 16.673C20.9265 16.3854 21.3854 15.9265 21.673 15.362C22 14.7202 22 13.8802 22 12.2V7.8C22 6.11984 22 5.27976 21.673 4.63803C21.3854 4.07354 20.9265 3.6146 20.362 3.32698C19.7202 3 18.8802 3 17.2 3H6.8C5.11984 3 4.27976 3 3.63803 3.32698C3.07354 3.6146 2.6146 4.07354 2.32698 4.63803C2 5.27976 2 6.11984 2 7.8V12.2C2 13.8802 2 14.7202 2.32698 15.362C2.6146 15.9265 3.07354 16.3854 3.63803 16.673C4.27976 17 5.11984 17 6.8 17Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>\n\
              <span class="home-menu-item-title" data-word_code="live_tv"\n\
                >Live TV</span\n\
              >\n\
              <span class="categories-count" id="live-categories-count">0 Categories</span>\n\
            </div>\n\
            <div\n\
              class="menu-item-container movies playlist-dependant"\n\
              onmouseenter="home_page.hoverMainMenu(1, true)"\n\
              onclick="home_page.clickMainMenu()"\n\
            >\n\
              <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css">  .st0{fill:#ffffff;}  </style> <g> <path class="st0" d="M90.734,210.977c22.547,0.016,43.172-9.203,57.922-24c14.781-14.734,24-35.359,24-57.906 s-9.219-43.188-24-57.938c-14.75-14.781-35.375-24-57.922-23.984c-22.547-0.016-43.172,9.203-57.922,24 c-14.781,14.734-24,35.375-23.984,57.922c-0.016,22.547,9.203,43.156,23.984,57.906C47.563,201.773,68.188,210.992,90.734,210.977z M66.109,104.43c6.375-6.344,14.938-10.188,24.625-10.203c9.703,0.016,18.25,3.859,24.641,10.203 c6.328,6.375,10.188,14.938,10.188,24.641c0,9.688-3.859,18.234-10.188,24.625c-6.391,6.328-14.938,10.188-24.641,10.203 c-9.688-0.016-18.25-3.875-24.625-10.203c-6.344-6.391-10.188-14.938-10.203-24.625C55.922,119.367,59.766,110.805,66.109,104.43z"></path> <path class="st0" d="M270.219,210.977c22.547,0.016,43.172-9.203,57.922-24c14.781-14.75,24-35.359,23.984-57.906 c0.016-22.547-9.203-43.188-23.984-57.922c-14.75-14.797-35.375-24.016-57.922-24c-22.531-0.016-43.172,9.203-57.922,23.984 c-14.797,14.75-24,35.391-23.984,57.938c-0.016,22.547,9.203,43.172,23.984,57.906 C227.047,201.773,247.688,210.992,270.219,210.977z M245.594,104.43c6.375-6.344,14.938-10.188,24.625-10.203 c9.688,0.016,18.25,3.859,24.625,10.203c6.344,6.375,10.188,14.938,10.203,24.641c-0.016,9.688-3.859,18.234-10.203,24.625 c-6.375,6.328-14.938,10.188-24.625,10.203c-9.688-0.016-18.25-3.875-24.625-10.203c-6.344-6.391-10.188-14.938-10.203-24.625 C235.406,119.367,239.25,110.805,245.594,104.43z"></path> <path class="st0" d="M313.047,224.195H45.953c-12.625-0.016-24.234,5.172-32.5,13.453C5.172,245.914,0,257.523,0,270.148v148.75 c0,12.625,5.172,24.25,13.453,32.5c8.266,8.281,19.875,13.469,32.5,13.453h267.094c12.609,0.016,24.234-5.172,32.484-13.453 c8.297-8.25,13.484-19.875,13.469-32.5v-148.75c0.016-12.625-5.172-24.234-13.469-32.5 C337.281,229.367,325.656,224.18,313.047,224.195z M317.813,418.898c-0.031,1.391-0.516,2.453-1.406,3.375 c-0.922,0.891-1.984,1.375-3.359,1.391H45.953c-1.391-0.016-2.438-0.5-3.359-1.391c-0.891-0.922-1.375-1.984-1.406-3.375v-148.75 c0.031-1.375,0.516-2.438,1.406-3.375c0.922-0.875,1.969-1.375,3.359-1.391h267.094c1.375,0.016,2.438,0.516,3.359,1.391 c0.891,0.938,1.375,2,1.406,3.375V418.898z"></path> <path class="st0" d="M493.875,236.414c-5.828-3.516-12.531-5.359-19.125-5.359c-6.063,0-12.063,1.484-17.609,4.422l-73.734,39.313 v46.719l87.406-46.594v139.297l-87.406-46.672v46.734l73.734,39.297c5.547,2.953,11.547,4.422,17.609,4.422 c6.594,0,13.297-1.766,19.188-5.297C505.125,445.93,512,433.805,512,420.68V268.367C512,255.242,505.125,243.117,493.875,236.414z"></path> </g> </g></svg>\n\
              <span class="home-menu-item-title" data-word_code="movies"\n\
                >Movies</span\n\
              >\n\
              <span class="categories-count" id="movies-categories-count">0 Categories</span>\n\
            </div>\n\
            <div\n\
              class="menu-item-container series playlist-dependant"\n\
              onmouseenter="home_page.hoverMainMenu(2, true)"\n\
              onclick="home_page.clickMainMenu()"\n\
            >\n\
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 5V19M17 5V19M3 8H7M17 8H21M3 16H7M17 16H21M3 12H21M6.2 20H17.8C18.9201 20 19.4802 20 19.908 19.782C20.2843 19.5903 20.5903 19.2843 20.782 18.908C21 18.4802 21 17.9201 21 16.8V7.2C21 6.0799 21 5.51984 20.782 5.09202C20.5903 4.71569 20.2843 4.40973 19.908 4.21799C19.4802 4 18.9201 4 17.8 4H6.2C5.0799 4 4.51984 4 4.09202 4.21799C3.71569 4.40973 3.40973 4.71569 3.21799 5.09202C3 5.51984 3 6.07989 3 7.2V16.8C3 17.9201 3 18.4802 3.21799 18.908C3.40973 19.2843 3.71569 19.5903 4.09202 19.782C4.51984 20 5.07989 20 6.2 20Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>\n\
              <span class="home-menu-item-title" data-word_code="series"\n\
                >Series</span\n\
              >\n\
              <span class="categories-count" id="series-categories-count">0 Categories</span>\n\
            </div>\n\
          </div>\n\
          <div class="home-page-bottom-info-container" onmouseenter="home_page.hoverAccountInfo(true)" onclick="home_page.handleMenuClick()">\n\
            <div class="home-page-bottom-info-item">\n\
              <div class="home-page-bottom-info-title">Mac Address:</div>\n\
              <div class="home-page-bottom-info-value mac-address">Unknown</div>\n\
            </div>\n\
            <div class="home-page-bottom-info-item">\n\
              <div class="home-page-bottom-info-title">Device Key:</div>\n\
              <div class="home-page-bottom-info-value device-key">Unknown</div>\n\
            </div>\n\
            <div class="home-page-bottom-info-item">\n\
              <div class="home-page-bottom-info-title">App Expiration Date:</div>\n\
              <div class="home-page-bottom-info-value app-expire-date">Unknown</div>\n\
            </div>\n\
            <div class="home-page-bottom-info-item" style="margin-top: 1rem;">\n\
              <div class="home-page-bottom-info-title">Playlist Username:</div>\n\
              <div class="home-page-bottom-info-value playlist-username">N/A</div>\n\
            </div>\n\
            <div class="home-page-bottom-info-item">\n\
              <div class="home-page-bottom-info-title">Playlist Expires in:</div>\n\
              <div class="home-page-bottom-info-value playlist-will-expire-in">Unknown</div>\n\
            </div>\n\
            <div class="home-page-bottom-info-view-more">Click to view more details...</div>\n\
          </div>\n\
        </div>\n\
        <div id="home-bottom-items-container">\n\
          <div class="home-bottom-item notifications" onmouseenter="home_page.hoverBottomMenu(0, true)" onclick="home_page.clickBottomMenu()">\n\
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.1041 3C9.19982 3 6.9545 5.19595 6.9545 7.77444V10.2188C6.9545 10.5405 6.82228 10.8248 6.75338 10.9646C6.66384 11.1463 6.54677 11.339 6.42189 11.5279C6.17031 11.9084 5.83361 12.3536 5.47487 12.8035C5.01458 13.3809 4.91657 14.0494 5.0632 14.5627C5.20252 15.0504 5.56426 15.432 6.18153 15.5344C7.73816 15.7925 9.72824 16 12.1041 16C14.6551 16 16.6049 15.7608 18.0148 15.4803C18.5156 15.3806 18.8052 15.078 18.9304 14.6866C19.0641 14.2684 19.0172 13.7009 18.6805 13.1607C18.5187 12.9011 18.3448 12.6358 18.1696 12.3698C18.1517 12.3426 18.1337 12.3154 18.1158 12.2881C17.9607 12.0528 17.8045 11.8158 17.6653 11.5955C17.5119 11.3526 17.3627 11.1043 17.2493 10.8776C17.1607 10.7004 17 10.3623 17 10V7.71194C17 5.09322 14.9665 3 12.1041 3ZM4.9545 7.77444C4.9545 3.97465 8.21572 1 12.1041 1C16.0344 1 19 3.95238 19 7.71194V9.90173C19.0084 9.92117 19.0206 9.94809 19.0382 9.98326C19.1058 10.1185 19.212 10.2991 19.3562 10.5274C19.4843 10.7302 19.6294 10.9503 19.7865 11.1887C19.8041 11.2155 19.8219 11.2424 19.8398 11.2696C20.0148 11.5353 20.2013 11.8195 20.3779 12.1029C20.997 13.0963 21.1635 14.2698 20.8353 15.2959C20.4985 16.3489 19.6505 17.1941 18.4051 17.4418C16.8616 17.7489 14.7809 18 12.1041 18C9.61153 18 7.51187 17.7823 5.85433 17.5074C4.43291 17.2717 3.47981 16.3011 3.14013 15.1121C2.80778 13.9487 3.06663 12.6159 3.91105 11.5567C4.25624 11.1238 4.5503 10.7323 4.75351 10.4249C4.85168 10.2764 4.91666 10.1655 4.9545 10.0904V7.77444ZM4.98375 10.0249C4.98403 10.0248 4.98265 10.0291 4.97876 10.0385C4.98152 10.0297 4.98347 10.0251 4.98375 10.0249ZM15.7853 19.3808C16.1272 19.8145 16.0529 20.4433 15.6192 20.7852C13.578 22.3948 10.4432 22.4152 8.37995 20.7846C7.94666 20.4421 7.87301 19.8132 8.21546 19.3799C8.55791 18.9466 9.18678 18.873 9.62008 19.2154C10.9507 20.2671 13.0602 20.2561 14.3808 19.2148C14.8145 18.8728 15.4433 18.9471 15.7853 19.3808Z" fill="#ffffff"></path> </g></svg>\n\
          </div>\n\
          <div class="home-bottom-item" onmouseenter="home_page.hoverBottomMenu(1, true)" onclick="home_page.clickBottomMenu()">\n\
            <svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" viewBox="0 0 30 30" version="1.1" id="svg822" inkscape:version="0.92.4 (f8dce91, 2019-08-02)" sodipodi:docname="playlist-add.svg" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs id="defs816"></defs> <sodipodi:namedview id="base" pagecolor="#ffffff" bordercolor="#666666" borderopacity="1.0" inkscape:pageopacity="0.0" inkscape:pageshadow="2" inkscape:zoom="8.9166667" inkscape:cx="-0.49685482" inkscape:cy="7.263158" inkscape:document-units="px" inkscape:current-layer="layer1" showgrid="true" units="px" inkscape:window-width="1366" inkscape:window-height="713" inkscape:window-x="0" inkscape:window-y="0" inkscape:window-maximized="1" showguides="false"> <inkscape:grid type="xygrid" id="grid816"></inkscape:grid> </sodipodi:namedview> <metadata id="metadata819"> <rdf:rdf> <cc:work rdf:about=""> <dc:format>image/svg+xml</dc:format> <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"></dc:type> <dc:title> </dc:title> </cc:work> </rdf:rdf> </metadata> <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1" transform="translate(0,-289.0625)"> <path style="opacity:1;fill:#ffffff;fill-opacity:1;stroke-width:1.1400000000000001;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="M 4 5 C 3.446 5 3 5.446 3 6 C 3 6.554 3.446 7 4 7 L 19 7 C 19.554 7 20 6.554 20 6 C 20 5.446 19.554 5 19 5 L 4 5 z M 4 12 C 3.446 12 3 12.446 3 13 C 3 13.554 3.446 14 4 14 L 22 14 C 22.554 14 23 13.554 23 13 C 23 12.446 22.554 12 22 12 L 4 12 z M 21.949219 17.003906 C 21.606467 17.003906 21.272206 17.037416 20.949219 17.103516 L 20.949219 20.955078 L 17.099609 20.955078 C 17.033519 21.278118 17 21.612328 17 21.955078 C 17 22.297828 17.033519 22.632088 17.099609 22.955078 L 20.949219 22.955078 L 20.949219 26.804688 C 21.272206 26.870788 21.606467 26.904297 21.949219 26.904297 C 22.29197 26.904297 22.626178 26.870788 22.949219 26.804688 L 22.949219 22.955078 L 26.800781 22.955078 C 26.866921 22.632088 26.900391 22.297828 26.900391 21.955078 C 26.900391 21.612328 26.866921 21.278118 26.800781 20.955078 L 22.949219 20.955078 L 22.949219 17.103516 C 22.626178 17.037416 22.29197 17.003906 21.949219 17.003906 z M 4 19 C 3.446 19 3 19.446 3 20 C 3 20.554 3.446 21 4 21 L 14 21 C 14.554 21 15 20.554 15 20 C 15 19.446 14.554 19 14 19 L 4 19 z " transform="translate(0,289.0625)" id="rect887"></path> </g> </g></svg>\n\
            <div class="home-bottom-menu-item-tooltip">Add Code Playlist</div>\n\
          </div>\n\
          <div class="home-bottom-item" onmouseenter="home_page.hoverBottomMenu(2, true)" onclick="home_page.clickBottomMenu()">\n\
            <svg fill="#ffffff" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 490.89 490.89" xml:space="preserve" stroke="#ffffff" stroke-width="0.0049089" transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="5.89068"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_231_"> <path id="XMLID_233_" d="M97.38,292.692V181.229c0-24.324,19.792-44.125,44.134-44.125h170.733v19.506 c0,5.525,3.065,10.59,7.941,13.162c4.884,2.59,10.786,2.229,15.343-0.885l100.888-69.057c3.607-2.475,5.771-6.557,5.788-10.934 c0.015-4.377-2.124-8.49-5.722-10.965L335.63,7.956c-4.548-3.146-10.483-3.508-15.383-0.949c-4.91,2.557-7.975,7.653-7.975,13.178 v19.539H141.515C63.483,39.724,0,103.208,0,181.229v111.463c0,26.881,21.801,48.684,48.689,48.684 C75.58,341.376,97.38,319.573,97.38,292.692z"></path> <path id="XMLID_232_" d="M442.199,149.513c-26.891,0-48.691,21.801-48.691,48.701V309.64c0,24.342-19.793,44.143-44.134,44.143 H178.641v-19.506c0-5.523-3.065-10.588-7.941-13.162c-4.884-2.572-10.786-2.23-15.343,0.887L54.468,391.056 c-3.606,2.477-5.771,6.572-5.786,10.951c-0.017,4.359,2.122,8.475,5.72,10.965l100.856,69.961 c4.548,3.147,10.482,3.504,15.384,0.965c4.908-2.572,7.974-7.654,7.974-13.195v-19.539h170.756 c78.031,0,141.516-63.498,141.516-141.523V198.214C490.89,171.313,469.088,149.513,442.199,149.513z"></path> </g> </g></svg>\n\
            <div class="home-bottom-menu-item-tooltip">Replay</div>\n\
          </div>\n\
          <div class="home-bottom-item" onmouseenter="home_page.hoverBottomMenu(3, true)" onclick="home_page.clickBottomMenu()">\n\
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" fill="#ffffff"></path> </g></svg>\n\
            <div class="home-bottom-menu-item-tooltip">Favorite Channels</div>\n\
          </div>\n\
          <div class="home-bottom-item" onmouseenter="home_page.hoverBottomMenu(4, true)" onclick="home_page.clickBottomMenu()">\n\
            <svg height="200px" width="200px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> .st0{fill:#ffffff;} </style> <g> <path class="st0" d="M495.272,423.558c0,0-68.542-59.952-84.937-76.328c-24.063-23.938-33.69-35.466-25.195-54.931 c37.155-75.78,24.303-169.854-38.72-232.858c-79.235-79.254-207.739-79.254-286.984,0c-79.245,79.264-79.245,207.729,0,287.003 c62.985,62.985,157.088,75.837,232.839,38.691c19.466-8.485,31.022,1.142,54.951,25.215c16.384,16.385,76.308,84.937,76.308,84.937 c31.089,31.071,55.009,11.95,69.368-2.39C507.232,478.547,526.362,454.638,495.272,423.558z M286.017,286.012 c-45.9,45.871-120.288,45.871-166.169,0c-45.88-45.871-45.88-120.278,0-166.149c45.881-45.871,120.269-45.871,166.169,0 C331.898,165.734,331.898,240.141,286.017,286.012z"></path> </g> </g></svg>\n\
            <div class="home-bottom-menu-item-tooltip">Search</div>\n\
          </div>\n\
          <div class="home-bottom-item" onmouseenter="home_page.hoverBottomMenu(5, true)" onclick="home_page.clickBottomMenu()">\n\
            <svg fill="#ffffff" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title></title><path d="M69.3677,51.0059a30,30,0,1,0-42.7354,0A41.9971,41.9971,0,0,0,0,90a5.9966,5.9966,0,0,0,6,6H90a5.9966,5.9966,0,0,0,6-6A41.9971,41.9971,0,0,0,69.3677,51.0059ZM48,12A18,18,0,1,1,30,30,18.02,18.02,0,0,1,48,12ZM12.5977,84A30.0624,30.0624,0,0,1,42,60H54A30.0624,30.0624,0,0,1,83.4023,84Z"></path></g></svg>\n\
            <div class="home-bottom-menu-item-tooltip">User Account</div>\n\
          </div>\n\
          <div class="home-bottom-item" onmouseenter="home_page.hoverBottomMenu(6, true)" onclick="home_page.clickBottomMenu()">\n\
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.5 6C7.5 6.82843 6.82843 7.5 6 7.5C5.17157 7.5 4.5 6.82843 4.5 6C4.5 5.17157 5.17157 4.5 6 4.5C6.82843 4.5 7.5 5.17157 7.5 6Z" fill="#ffffff"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M4 1C2.34315 1 1 2.34315 1 4V8C1 9.65685 2.34315 11 4 11H20C21.6569 11 23 9.65685 23 8V4C23 2.34315 21.6569 1 20 1H4ZM3 4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V8C21 8.55228 20.5523 9 20 9H4C3.44772 9 3 8.55228 3 8V4Z" fill="#ffffff"></path> <path d="M6 19.5C6.82843 19.5 7.5 18.8284 7.5 18C7.5 17.1716 6.82843 16.5 6 16.5C5.17157 16.5 4.5 17.1716 4.5 18C4.5 18.8284 5.17157 19.5 6 19.5Z" fill="#ffffff"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M4 13C2.34315 13 1 14.3431 1 16V20C1 21.6569 2.34315 23 4 23H20C21.6569 23 23 21.6569 23 20V16C23 14.3431 21.6569 13 20 13H4ZM3 16C3 15.4477 3.44772 15 4 15H20C20.5523 15 21 15.4477 21 16V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V16Z" fill="#ffffff"></path> </g></svg>\n\
            <div class="home-bottom-menu-item-tooltip">Playlists</div>\n\
          </div>\n\
          <div class="home-bottom-item" onmouseenter="home_page.hoverBottomMenu(7, true)" onclick="home_page.clickBottomMenu()">\n\
            <svg xmlns="http://www.w3.org/000/svg" width="189" height="151" viewBox="0 0 189 151" fill="none"><g clip-path="url(#clip0_21_5034)"><path d="M24.3601 94.7C0.330059 91.86 -9.24994 59.73 11.0401 44.32C19.6401 37.79 25.6001 39.12 35.3101 39.14C53.3401 39.17 71.3801 39.05 89.4101 39.12L114.99 0.72L116.66 0L188.73 150.98H142.75C141.41 147.72 140.08 144.29 138.54 141.13C127.11 117.8 115.71 91.8 103.32 69.29C95.9501 55.91 81.0401 54.11 71.5001 66.35L52.8501 94.71H82.7001C95.3701 94.71 108.83 109.24 109.17 121.81C109.51 134.31 98.0101 150.98 84.7601 150.98H13.0401L50.7901 94.71C42.4301 93.99 32.5401 95.68 24.3701 94.71L24.3601 94.7Z" fill="white"/></g><defs><clipPath id="clip0_21_5034"><rect width="188.73" height="150.98" fill="white"/></clipPath></defs></svg>\n\
            <div class="home-bottom-menu-item-tooltip">Stararcs Proxy</div>\n\
          </div>\n\
          <div class="home-bottom-item" onmouseenter="home_page.hoverBottomMenu(8, true)" onclick="home_page.clickBottomMenu()">\n\
            <svg viewBox="0 0 19 19" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>star [#ffffff]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-141.000000, -2560.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94.5,2411.54666 C93.3712648,2411.54666 92.4533361,2410.62874 92.4533361,2409.5 C92.4533361,2408.37126 93.3712648,2407.45334 94.5,2407.45334 C95.6287352,2407.45334 96.5466639,2408.37126 96.5466639,2409.5 C96.5466639,2410.62874 95.6287352,2411.54666 94.5,2411.54666 L94.5,2411.54666 Z M94.5,2405.40667 C92.2394597,2405.40667 90.4066721,2407.23946 90.4066721,2409.5 C90.4066721,2411.76054 92.2394597,2413.59333 94.5,2413.59333 C96.7605403,2413.59333 98.5933279,2411.76054 98.5933279,2409.5 C98.5933279,2407.23946 96.7605403,2405.40667 94.5,2405.40667 L94.5,2405.40667 Z M101.024765,2410.41588 L101.024765,2410.41588 C101.521081,2411.62955 100.938805,2413.01719 99.7241097,2413.51351 L99.7241097,2413.51351 L98.9402374,2413.83483 C98.7795743,2414.21654 98.6690544,2414.48056 98.5083913,2414.86328 C98.0407286,2415.97769 96.7881703,2416.71858 95.1508391,2416.0309 L94.3690135,2415.70344 L93.5841179,2416.02476 L93.5841179,2416.02476 C92.5444126,2416.44945 91.2079411,2416.16701 90.486492,2414.72411 L90.1651658,2413.94024 C89.780393,2413.77855 89.5194433,2413.66905 89.1367171,2413.50839 C88.0223086,2413.04073 87.2814163,2411.78817 87.968072,2410.15084 L88.2965616,2409.36901 L87.9752354,2408.58412 L87.9752354,2408.58412 C87.4789194,2407.37045 88.0611952,2405.98281 89.2758903,2405.48649 L89.2758903,2405.48649 L90.0597626,2405.16517 C90.2327057,2404.75379 90.3432255,2404.49079 90.4916087,2404.13672 C90.9623414,2403.01412 92.218993,2402.28449 93.8491609,2402.96807 L94.6309865,2403.29656 L95.4158821,2402.97524 L95.4158821,2402.97524 C96.6295538,2402.47892 98.017192,2403.0612 98.513508,2404.27589 L98.513508,2404.27589 L98.8348342,2405.05976 C99.2462137,2405.23271 99.50921,2405.34323 99.8632829,2405.49161 C100.985878,2405.96234 101.715514,2407.21899 101.031928,2408.84916 L100.703438,2409.63099 L101.024765,2410.41588 Z M103.291445,2410.55199 C103.053009,2409.96869 103.056079,2409.31478 103.299632,2408.73352 L103.814368,2407.50655 C104.32194,2406.29595 103.752968,2404.90422 102.542366,2404.39664 L101.315391,2403.88191 C100.734138,2403.63733 100.273639,2403.17274 100.035203,2402.59046 L99.6330332,2401.60602 C99.1367172,2400.39235 97.7501023,2399.81007 96.5354073,2400.30639 L95.5519853,2400.70856 C94.968686,2400.94699 94.3147769,2400.94392 93.7335244,2400.70037 L92.5065493,2400.18563 C91.2959476,2399.67806 89.9042161,2400.24703 89.3966435,2401.45763 L88.8819075,2402.68461 C88.6373311,2403.26586 88.1737618,2403.72636 87.5904625,2403.9648 L86.6060172,2404.36697 C85.3923455,2404.86328 84.8100696,2406.2499 85.3063856,2407.46459 L85.708555,2408.44801 C85.9469914,2409.03131 85.9439214,2409.68522 85.7003684,2410.26648 L85.1856324,2411.49345 C84.6780598,2412.70405 85.2470323,2414.09578 86.4576341,2414.60336 L87.6846091,2415.11809 C88.2658616,2415.36267 88.726361,2415.82624 88.9647974,2416.40954 L89.3669668,2417.39398 C89.8632828,2418.60765 91.2498977,2419.18993 92.4645927,2418.69361 L93.4480147,2418.29144 C94.031314,2418.05301 94.6852231,2418.05608 95.2664756,2418.29963 L96.4934507,2418.81437 C97.7040524,2419.32194 99.0957839,2418.75297 99.6033565,2417.54237 L100.118093,2416.31539 C100.362669,2415.73414 100.827262,2415.27364 101.409537,2415.0352 L102.393983,2414.63303 C103.607655,2414.13672 104.18993,2412.7501 103.693614,2411.53541 L103.291445,2410.55199 Z" id="star-[#ffffff]"> </path> </g> </g> </g> </g></svg>\n\
            <div class="home-bottom-menu-item-tooltip">Settings</div>\n\
          </div>\n\
          <div class="home-bottom-item" onmouseenter="home_page.hoverBottomMenu(9, true)" onclick="home_page.clickBottomMenu()">\n\
            <svg fill="#ffffff" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>reload</title> <path d="M0 16q0-2.784 1.088-5.312t2.912-4.384 4.384-2.912 5.344-1.088q2.784 0 5.312 1.088t4.384 2.912 2.912 4.384 1.088 5.312h2.304q0.736 0 1.28 0.416t0.8 1.024 0.16 1.28-0.64 1.184l-4.576 4.576q-0.672 0.672-1.6 0.672t-1.632-0.672l-4.576-4.576q-0.512-0.512-0.608-1.184t0.128-1.28 0.8-1.024 1.312-0.416h2.272q0-2.464-1.216-4.576t-3.328-3.328-4.576-1.216-4.608 1.216-3.328 3.328-1.216 4.576 1.216 4.608 3.328 3.328 4.608 1.216q1.728 0 3.36-0.64l3.424 3.392q-3.136 1.824-6.784 1.824-2.816 0-5.344-1.088t-4.384-2.912-2.912-4.384-1.088-5.344z"></path> </g></svg>\n\
            <div class="home-bottom-menu-item-tooltip">Reload</div>\n\
          </div>\n\
        </div>\n\
        <div class="home-proxy-info-container">\n\
          <div class="home-proxy-info-connected-circle"></div>\n\
          <div class="home-proxy-info-connected-img"><img src="" alt="country-icon" id="proxy-country-img" /></div>\n\
          <div class="home-proxy-info-connected-country">Connected to <span id="country-name"></span></div>\n\
        </div>\n\
        <div id="notifications-modal">\n\
          <div class="notifications-modal-screen-dim"></div>\n\
          <div class="notifications-modal-title" data-word_code="notifications">Notifications</div>\n\
          <div id="notifications-modal-body">\n\
            <div class="empty-notifications" data-word_code="empty-notifications">There are no notifications to show.</div>\n\
          </div>\n\
        </div>\n\
      </div>\n\
      <div id="settings-page">\n\
        <div class="settings-page-left-part">\n\
          <div class="settings-page-option" onclick="settings_page.handleMenuClick()" onmouseenter="settings_page.hoverSettingsItem(0)" data-word_code="change_language">Change Language</div>\n\
          <div class="settings-page-option" onclick="settings_page.handleMenuClick()" onmouseenter="settings_page.hoverSettingsItem(1)" data-word_code="hide_categories">Hide Categories</div>\n\
          <div class="settings-page-option" onclick="settings_page.handleMenuClick()" onmouseenter="settings_page.hoverSettingsItem(2)" data-word_code="parent_control">Parental Control</div>\n\
          <div class="settings-page-option" onclick="settings_page.handleMenuClick()" onmouseenter="settings_page.hoverSettingsItem(3)" data-word_code="clear_cache">Clear Cache</div>\n\
          <div class="settings-page-option" onclick="settings_page.handleMenuClick()" onmouseenter="settings_page.hoverSettingsItem(4)" data-word_code="clear_watch_lists">Clear Watch Lists</div>\n\
          <div class="settings-page-option" onclick="settings_page.handleMenuClick()" onmouseenter="settings_page.hoverSettingsItem(5)" data-word_code="subtitle_settings">Subtitle Settings</div>\n\
          <div class="settings-page-option" onclick="settings_page.handleMenuClick()" onmouseenter="settings_page.hoverSettingsItem(6)" data-word_code="toggle_tmdb">Toggle TMDB API</div>\n\
          <div class="settings-page-option" onclick="settings_page.handleMenuClick()" onmouseenter="settings_page.hoverSettingsItem(7)" data-word_code="toggle_home_favorites">Toggle Home Favorites</div>\n\
          <div class="settings-page-option" onclick="settings_page.handleMenuClick()" onmouseenter="settings_page.hoverSettingsItem(8)" data-word_code="live_initialization">Live Initialization</div>\n\
          <div class="settings-page-option" onclick="settings_page.handleMenuClick()" onmouseenter="settings_page.hoverSettingsItem(9)" data-word_code="live_layout">Live Layout</div>\n\
          <div class="settings-page-option" onclick="settings_page.handleMenuClick()" onmouseenter="settings_page.hoverSettingsItem(10)" data-word_code="smart_proxy">Stararcs Proxy</div>\n\
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
                <img src="' +
  HOST +
  'app_src_min/images/subtitles-preview-bg.png" class="subtitle-settings-preview-bg" />\n\
                <div class="subtitle-settings-preview-text-wrapper">\n\
                  <div id="subtitle-settings-preview-text">This is how subtitles will look like</div>\n\
                </div>\n\
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
          <div class="setting-option-container" id="live-layout-settings">\n\
            <div class="setting-option-title-container">\n\
              <div class="setting-option-title" data-word_code="live_layout">Live Layout</div>\n\
            </div>\n\
            <div class="setting-option-description" data-word_code="live_layout_desc">Choose your preferred layout for the Live TV page. Each option offers a different style for channels and preview.</div>\n\
            <div class="setting-option-body">\n\
              <div class="setting-select-options">\n\
                <div class="setting-select-option" data-word_code="classic" onmouseenter="settings_page.hoverLiveLayoutOption(0)" onclick="settings_page.handleMenuClick()">Classic</div>\n\
                <div class="setting-select-option" data-word_code="classic-compact" onmouseenter="settings_page.hoverLiveLayoutOption(1)" onclick="settings_page.handleMenuClick()">Classic (Compact)</div>\n\
                <div class="setting-select-option" data-word_code="normal" onmouseenter="settings_page.hoverLiveLayoutOption(2)" onclick="settings_page.handleMenuClick()">Normal</div>\n\
                <div class="setting-select-option" data-word_code="normal-compact" onmouseenter="settings_page.hoverLiveLayoutOption(3)" onclick="settings_page.handleMenuClick()">Normal (Compact)</div>\n\
                <div class="setting-select-option" data-word_code="modern" onmouseenter="settings_page.hoverLiveLayoutOption(4)" onclick="settings_page.handleMenuClick()">Modern</div>\n\
              </div>\n\
            </div>\n\
          </div>\n\
          <div class="setting-option-container" id="smart-proxy-settings">\n\
            <div class="setting-option-title-container">\n\
              <div class="setting-option-title" data-word_code="smart_proxy">Stararcs Proxy</div>\n\
            </div>\n\
            <div class="setting-option-description" data-word_code="smart_proxy_desc">Enable or customize Stararcs Proxy to improve stream loading and bypass regional restrictions. Choose the mode that best suits your connection and server location.</div>\n\
            <div class="setting-option-body">\n\
              <div id="proxy-not-active">\n\
                <div class="proxy-sub-instructions" data-word_code="proxy-sub-instructions">This device does not have an active stararcs proxy subscription.<br /> Scan the QR code to make an account and subscribe to this service.</div>\n\
                <div id="proxy-sub-qr-container"></div>\n\
                <div class="settings-form-button"\n\
                  id="proxy-sub-confirmation-btn"\n\
                  data-word_code="continue"\n\
                  onmouseenter="settings_page.hoverSmartProxyOption(0)"\n\
                  onclick="settings_page.clickSmartProxyOption(0)"\n\
                >Continue</div>\n\
              </div>\n\
              <div id="proxy-active">\n\
                <div class="settings-toggle-switch active-proxy-choice" onmouseenter="settings_page.hoverSmartProxyOption(0)" onclick="settings_page.handleMenuClick()">\n\
                  <div class="settings-toggle-switch-label" data-word_code="toggle-connection">Toggle Connection</div>\n\
                  <div class="settings-toggle-switch-value off">\n\
                    <div class="settings-toggle-switch-circle"></div>\n\
                  </div>\n\
                </div>\n\
                <div class="settings-multi-value-option active-proxy-choice" onmouseenter="settings_page.hoverSmartProxyOption(1)" onclick="settings_page.handleMenuClick()">\n\
                  <div class="settings-multi-value-option-label" data-word_code="region">Region</div>\n\
                  <div class="settings-multi-value-option-value-container">\n\
                    <svg class="settings-multi-value-option-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" fill="#ffffff"></path> </g></svg>\n\
                    <div class="settings-multi-value-option-value">Nearest</div>\n\
                    <svg class="settings-multi-value-option-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" fill="#ffffff"></path> </g></svg>\n\
                  </div>\n\
                </div>\n\
                <div class="settings-multi-value-option active-proxy-choice" onmouseenter="settings_page.hoverSmartProxyOption(2)" onclick="settings_page.handleMenuClick()">\n\
                  <div class="settings-multi-value-option-label" data-word_code="country">Country</div>\n\
                  <div class="settings-multi-value-option-value-container">\n\
                    <svg class="settings-multi-value-option-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" fill="#ffffff"></path> </g></svg>\n\
                    <div class="settings-multi-value-option-value">Nearest</div>\n\
                    <svg class="settings-multi-value-option-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" fill="#ffffff"></path> </g></svg>\n\
                  </div>\n\
                </div>\n\
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
        id="account-page"\n\
        class="home-page-sub-container page-contents-wrapper-1 hide"\n\
      >\n\
        <div class="account-page-top">\n\
          <div class="account-page-info-grid">\n\
            <div class="account-page-info-title">DEVICE INFO</div>\n\
            <div class="account-page-info-item">\n\
              <div class="account-page-info-item-name">MAC Address</div>\n\
              <div class="account-page-info-item-value" id="mac-address">Unknown</div>\n\
            </div>\n\
            <div class="account-page-info-item">\n\
              <div class="account-page-info-item-name">Device Key</div>\n\
              <div class="account-page-info-item-value" id="device-key">Unknown</div>\n\
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
              <div class="account-page-info-item-value" id="app-status">Unknown</div>\n\
            </div>\n\
            <div class="account-page-info-item">\n\
              <div class="account-page-info-item-name">Expiration Date</div>\n\
              <div class="account-page-info-item-value app-expire-date">Unknown</div>\n\
            </div>\n\
            <div class="account-page-info-item">\n\
              <div class="account-page-info-item-name">App Version</div>\n\
              <div class="account-page-info-item-value" id="app-version">Unknown</div>\n\
            </div>\n\
          </div>\n\
        </div>\n\
        <div class="account-page-bottom">\n\
          <div class="account-page-info-grid">\n\
            <div class="account-page-info-title">PLAYLIST INFO</div>\n\
            <div class="account-page-info-item">\n\
              <div class="account-page-info-item-name">Username</div>\n\
              <div class="account-page-info-item-value playlist-username">Unknown</div>\n\
            </div>\n\
            <div class="account-page-info-item">\n\
              <div class="account-page-info-item-name">Status</div>\n\
              <div class="account-page-info-item-value" id="playlist-status">Unknown</div>\n\
            </div>\n\
            <div class="account-page-info-item">\n\
              <div class="account-page-info-item-name">Expiration Date</div>\n\
              <div class="account-page-info-item-value expire-date">Unknown</div>\n\
            </div>\n\
          </div>\n\
        </div>\n\
        <div class="account-page-login-container">\n\
          <div class="account-page-login-qr-container">\n\
            <div id="account-page-login-qr"></div>\n\
          </div>\n\
          <div class="account-page-login-info">\n\
            <div class="account-page-login-info-title">Account Management</div>\n\
            <div class="account-page-login-info-desc">You can now scan this QR code to login/register with your email and password and this device will be automatically added to your account.<br />Alternatively you can login using the mac address and device key shown above.</div>\n\
          </div>\n\
        </div>\n\
      </div>\n\
      <div\n\
        id="playlists-page"\n\
        class="home-page-sub-container page-contents-wrapper-1 hide"\n\
      >\n\
        <div id="playlist-error">\n\
          We regret to inform you that there is a problem with the current\n\
          playlist. This issue is associated with your IPTV service\n\
          provider, not our application. For inquiries about the playlist’s\n\
          status and expiration, please reach out to your provider.\n\
        </div>\n\
        <div id="playlists-instructions">\n\
          MessiTV is a general media player and it does not include any content, MessiTV is not responsible for the content you use in the app.<br/> Please follow <span class="highlight">https://messitvplayer.com</span> to add or manage playlists\n\
        </div>\n\
        <div id="playlist-items-container"></div>\n\
        <div\n\
          id="add-playlist-btn"\n\
          data-word_code="add_playlist"\n\
          onmouseenter="playlist_page.hoverAddPlaylistBtn()"\n\
          onclick="playlist_page.handleMenuClick()"\n\
        >\n\
        <i class="fas fa-plus"></i>\n\
          Add Playlist\n\
        </div>\n\
        <div id="page-bottom-container">\n\
          <div class="bottom-label-item selectable" onmouseenter="playlist_page.hoverColorButton(0)" onclick="playlist_page.handleMenuClick()">\n\
            <div class="bottom-label-icon bottom-item-red"></div>\n\
            <div class="bottom-label-text" data-word_code="remove_playlist">\n\
              Remove Playlist\n\
            </div>\n\
          </div>\n\
          <div class="bottom-label-item selectable" onmouseenter="playlist_page.hoverColorButton(1)" onclick="playlist_page.handleMenuClick()">\n\
            <div class="bottom-label-icon bottom-item-yellow"></div>\n\
            <div\n\
              class="bottom-label-text"\n\
              data-word_code="reload"\n\
            >\n\
              Reload\n\
            </div>\n\
          </div>\n\
        </div>\n\
        <div class="playlist-page-device-info-container">\n\
          <div class="playlist-page-device-info-item">\n\
            <span\n\
              class="playlist-page-device-info-label"\n\
              data-word_code="mac_address"\n\
              >Mac Address</span\n\
            ><span>:</span>\n\
            <span\n\
              class="playlist-page-device-info-value mac-address"\n\
            ></span>\n\
          </div>\n\
          <div class="playlist-page-device-info-item">\n\
            <span\n\
              class="playlist-page-device-info-label"\n\
              data-word_code="device_key"\n\
              >Device Key</span\n\
            ><span>:</span>\n\
            <span class="playlist-page-device-info-value device-key"></span>\n\
          </div>\n\
        </div>\n\
      </div>\n\
      <div id="channel-page" class="height-100 hide">\n\
        <div class="player-container">\n\
          <object\n\
            class="position-absolute player"\n\
            id="channel-page-video"\n\
            type="application/avplayer"\n\
          ></object>\n\
          <video\n\
            class="position-absolute player"\n\
            id="channel-page-video-lg"\n\
          ></video>\n\
          <div class="video-error">\n\
            <img src="' +
  HOST +
  'app_src_min/images/no_signal.png" />\n\
          </div>\n\
          <div class="video-reconnect-message" data-word_code="reconnecting">\n\
            Reconnecting...\n\
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
              <div\n\
                id="channel-page-video-controls-container"\n\
                class="video-controls-container"\n\
              ></div>\n\
            </div>\n\
            <div class="video-resolution"></div>\n\
          </div>\n\
          <div id="typed-channel-number"></div>\n\
        </div>\n\
        <div\n\
          id="channel-page-contents-container"\n\
          class="stream-page-contents-container"\n\
        >\n\
          <div id="channel-page-left-part">\n\
            <div\n\
              class="categories-container"\n\
              id="channel-page-categories-container"\n\
            ></div>\n\
            <div\n\
              class="menus-container position-relative"\n\
              id="channel-page-menu-container"\n\
            ></div>\n\
          </div>\n\
          <div id="channel-page-right-part">\n\
            <div class="channel-information-container">\n\
              <div id="channel-title"></div>\n\
              <div id="next-program-container"></div>\n\
            </div>\n\
            <div id="page-bottom-container">\n\
              <div class="bottom-label-item selectable" onmouseenter="channel_page.hoverColorButton(0)" onclick="channel_page.handleMenuClick()">\n\
                <div class="bottom-label-icon bottom-item-blue"></div>\n\
                <div class="bottom-label-text" data-word_code="search">\n\
                  Search\n\
                </div>\n\
              </div>\n\
              <div class="bottom-label-item selectable" onmouseenter="channel_page.hoverColorButton(1)" onclick="channel_page.handleMenuClick()">\n\
                <div class="bottom-label-icon bottom-item-red"></div>\n\
                <div\n\
                  class="bottom-label-text"\n\
                  data-word_code="move"\n\
                >\n\
                  Move\n\
                </div>\n\
              </div>\n\
              <div class="bottom-label-item selectable" onmouseenter="channel_page.hoverColorButton(2)" onclick="channel_page.handleMenuClick()">\n\
                <div class="bottom-label-icon bottom-item-yellow"></div>\n\
                <div class="bottom-label-text" data-word_code="fav">Fav</div>\n\
              </div>\n\
              <div class="bottom-label-item selectable" onmouseenter="channel_page.hoverColorButton(3)" onclick="channel_page.handleMenuClick()">\n\
                <div class="bottom-label-icon bottom-item-green"></div>\n\
                <div class="bottom-label-text" data-word_code="switch-page">Switch Page</div>\n\
              </div>\n\
            </div>\n\
          </div>\n\
        </div>\n\
        <div id="channel-fullscreen-sidebar-options">\n\
          <div class="channel-sidebar-options-container">\n\
            <div class="channel-sidebar-options-title">Live Settings</div>\n\
            <div class="channel-sidebar-options-wrapper">\n\
              <div\n\
                class="channel-sidebar-option active"\n\
                onmouseenter="channel_page.hoverSidebarOption(0)"\n\
                onclick="channel_page.clickSidebarMainItem(0)"\n\
              >\n\
                Aspect Ratio\n\
              </div>\n\
              <div\n\
                class="channel-sidebar-option"\n\
                onmouseenter="channel_page.hoverSidebarOption(1)"\n\
                onclick="channel_page.clickSidebarMainItem(1)"\n\
              >\n\
                Subtitles\n\
              </div>\n\
              <div\n\
                class="channel-sidebar-option"\n\
                onmouseenter="channel_page.hoverSidebarOption(2)"\n\
                onclick="channel_page.clickSidebarMainItem(2)"\n\
              >\n\
                Audio\n\
              </div>\n\
            </div>\n\
          </div>\n\
          <div id="channel-sidebar-suboptions-container">\n\
            <div id="channel-sidebar-aspect-ratio-options-container">\n\
              <div class="channel-sidebar-options-title">Aspect Ratio</div>\n\
              <div id="channel-sidebar-aspect-ratio-options-wrapper">\n\
                <div class="channel-sidebar-suboption" onmouseenter="channel_page.hoverSidebarSubOptionItem(0)" onclick="channel_page.clickAspectRatioItem(0)">Stretch</div>\n\
                <div class="channel-sidebar-suboption" onmouseenter="channel_page.hoverSidebarSubOptionItem(1)" onclick="channel_page.clickAspectRatioItem(1)">16:9 <span class="channel-sidebar-suboption-desc">Standard</span></div>\n\
                <div class="channel-sidebar-suboption" onmouseenter="channel_page.hoverSidebarSubOptionItem(2)" onclick="channel_page.clickAspectRatioItem(2)">21:9 <span class="channel-sidebar-suboption-desc">Ultra Widescreen</span></div>\n\
                <div class="channel-sidebar-suboption" onmouseenter="channel_page.hoverSidebarSubOptionItem(3)" onclick="channel_page.clickAspectRatioItem(3)">4:3  <span class="channel-sidebar-suboption-desc">Traditional</span></div>\n\
                <div class="channel-sidebar-suboption" onmouseenter="channel_page.hoverSidebarSubOptionItem(4)" onclick="channel_page.clickAspectRatioItem(4)">1:1 <span class="channel-sidebar-suboption-desc">Square</span></div>\n\
              </div>\n\
            </div>\n\
            <div id="channel-sidebar-subtitles-options-container">\n\
              <div class="channel-sidebar-options-title">Subtitles</div>\n\
              <div id="channel-sidebar-subtitles-options-wrapper">\n\
                <div class="channel-sidebar-suboption" onmouseenter="channel_page.hoverSidebarSubOptionItem(0)">English</div>\n\
                <div class="channel-sidebar-suboption" onmouseenter="channel_page.hoverSidebarSubOptionItem(1)">Arabic</div>\n\
                <div class="channel-sidebar-suboption" onmouseenter="channel_page.hoverSidebarSubOptionItem(2)">Greek</div>\n\
                <div class="channel-sidebar-suboption" onmouseenter="channel_page.hoverSidebarSubOptionItem(3)">German</div>\n\
                <div class="channel-sidebar-suboption" onmouseenter="channel_page.hoverSidebarSubOptionItem(4)">Italian</div>\n\
              </div>\n\
            </div>\n\
            <div id="channel-sidebar-audio-options-container">\n\
              <div class="channel-sidebar-options-title">Audio</div>\n\
              <div id="channel-sidebar-audio-options-wrapper">\n\
                <div class="channel-sidebar-suboption" onmouseenter="channel_page.hoverSidebarSubOptionItem(0)">English</div>\n\
                <div class="channel-sidebar-suboption" onmouseenter="channel_page.hoverSidebarSubOptionItem(1)">Arabic</div>\n\
                <div class="channel-sidebar-suboption" onmouseenter="channel_page.hoverSidebarSubOptionItem(2)">Greek</div>\n\
                <div class="channel-sidebar-suboption" onmouseenter="channel_page.hoverSidebarSubOptionItem(3)">German</div>\n\
                <div class="channel-sidebar-suboption" onmouseenter="channel_page.hoverSidebarSubOptionItem(4)">Italian</div>\n\
              </div>\n\
            </div>\n\
          </div>\n\
        </div>\n\
        <div id="channel-switch-page-modal-container" style="display: none;">\n\
          <div id="channel-switch-page-modal">\n\
            <div class="channel-switch-page-modal-title">Switch Page</div\n\
            <div class="channel-switch-page-modal-pages-container">\n\
              <div class="channel-switch-page-modal-page-item" onmouseenter="channel_page.hoverSwitchPageModal(0)" onclick="channel_page.handleMenuClick()">Movies</div>\n\
              <div class="channel-switch-page-modal-page-item" onmouseenter="channel_page.hoverSwitchPageModal(1)" onclick="channel_page.handleMenuClick()">Series</div>\n\
              <div class="channel-switch-page-modal-page-item" onmouseenter="channel_page.hoverSwitchPageModal(2)" onclick="channel_page.handleMenuClick()">Playlists</div>\n\
              <div class="channel-switch-page-modal-page-item" onmouseenter="channel_page.hoverSwitchPageModal(3)" onclick="channel_page.handleMenuClick()">Settings</div>\n\
            </div>\n\
          </div>\n\
        </div>\n\
      <div id="playlist-edit-page" class="height-100 hide">\n\
        <div id="playlist-edit-page-container">\n\
          <div class="playlist-edit-page-title">Add a new playlist</div>\n\
          <div id="add-playlist-tabs">\n\
            <div class="add-playlist-tab current" onmouseenter="playlist_edit_page.hoverPlaylistTabItem(0)" onclick="playlist_edit_page.handleMenuClick()">XC</div>\n\
            <div class="add-playlist-tab" onmouseenter="playlist_edit_page.hoverPlaylistTabItem(1)" onclick="playlist_edit_page.handleMenuClick()">Code</div>\n\
          </div>\n\
          <div id="add-xc-playlist-inputs-container">\n\
            <div class="playlist-edit-item-wrapper">\n\
              <input\n\
                class="form-control playlist-edit-item"\n\
                id="xc-playlist-name"\n\
                placeholder="Playlist Name"\n\
                onmouseenter="playlist_edit_page.hoverPlaylistEditItem(0)"\n\
                onclick="playlist_edit_page.handleMenuClick()"\n\
              />\n\
            </div>\n\
            <div class="playlist-edit-item-wrapper">\n\
              <input\n\
                class="form-control playlist-edit-item"\n\
                id="playlist-url"\n\
                placeholder="Playlist URL ( EX: http://example.com:port )"\n\
                onmouseenter="playlist_edit_page.hoverPlaylistEditItem(1)"\n\
                onclick="playlist_edit_page.handleMenuClick()"\n\
              />\n\
            </div>\n\
            <div class="playlist-edit-item-wrapper">\n\
              <input\n\
                class="form-control playlist-edit-item"\n\
                id="user-name"\n\
                placeholder="Username"\n\
                onmouseenter="playlist_edit_page.hoverPlaylistEditItem(2)"\n\
                onclick="playlist_edit_page.handleMenuClick()"\n\
              />\n\
            </div>\n\
            <div class="playlist-edit-item-wrapper">\n\
              <label data-word_code="password">Password</label>\n\
              <input\n\
                class="form-control playlist-edit-item"\n\
                id="password"\n\
                placeholder="Password"\n\
                onmouseenter="playlist_edit_page.hoverPlaylistEditItem(3)"\n\
                onclick="playlist_edit_page.handleMenuClick()"\n\
              />\n\
            </div>\n\
          </div>\n\
          <div id="add-code-playlist-inputs-container" style="display: none;">\n\
            <div class="playlist-edit-item-wrapper">\n\
              <input\n\
                class="form-control code-playlist-edit-item"\n\
                id="code-playlist-name"\n\
                placeholder="Playlist Name (Optional)"\n\
                onmouseenter="playlist_edit_page.hoverPlaylistEditItem(0)"\n\
                onclick="playlist_edit_page.handleMenuClick()"\n\
              />\n\
            </div>\n\
            <div class="playlist-edit-item-wrapper">\n\
              <input\n\
                class="form-control code-playlist-edit-item"\n\
                id="playlist-code"\n\
                placeholder="Playlist Code ( EX: 12345678 )"\n\
                onmouseenter="playlist_edit_page.hoverPlaylistEditItem(1)"\n\
                onclick="playlist_edit_page.handleMenuClick()"\n\
              />\n\
            </div>\n\
          </div>\n\
          <div id="playlist-edit-error-message"></div>\n\
          <div id="playlist-edit-btns-container">\n\
            <button\n\
              class="btn playlist-edit-btn"\n\
              id="playlist-submit-btn"\n\
              onmouseenter="playlist_edit_page.hoverPlaylistSaveBtn()"\n\
              onclick="playlist_edit_page.handleMenuClick()"\n\
            >\n\
              SAVE\n\
            </button>\n\
          </div>\n\
        </div>\n\
      </div>\n\
      <div\n\
        id="vod-series-page"\n\
        class="height-100 page-container1 hide categories-open"\n\
      >\n\
        <div class="page-title" data-word_code="movies">Movies</div>\n\
          <div class="vod-img-bg">\n\
            <img  id="movie-image" alt="Movie Poster" >\n\
            <div class="vod-series-summary-section-img-darken"></div>\n\
          </div>\n\
        <div id="vod-series-left-part">\n\
          <div id="vod-series-categories-container"></div>\n\
        </div>\n\
        <div id="vod-series-right-part">\n\
          <div class="page-top-parts">\n\
            <div id="vod-series-order-btn-wrapper">\n\
              <span id="vod-series-order-btn-label" data-word_code="sort_by"\n\
                >Sort By:</span\n\
              >\n\
              <span\n\
                id="vod-series-order-btn"\n\
                class="top-menu"\n\
                onmouseenter="vod_series_page.hoverTopMenu(0)"\n\
                onclick="vod_series_page.handleMenuClick()"\n\
              >\n\
                Added\n\
              </span>\n\
            </div>\n\
            <div\n\
              class="vod-series-search-btn top-menu"\n\
              onmouseenter="vod_series_page.hoverTopMenu(1)"\n\
              onclick="vod_series_page.handleMenuClick()"\n\
            >\n\
              <i class="search-icon fa fa-search"></i>\n\
            </div>\n\
            <div\n\
              class="vod-series-themes-btn top-menu"\n\
              onmouseenter="vod_series_page.hoverTopMenu(2)"\n\
              onclick="vod_series_page.handleMenuClick()"\n\
            >\n\
              <i class="themes-icon fas fa-palette"></i>\n\
            </div>\n\
          </div>\n\
          <div id="vod-series-info-container">\n\
            <div class="movie-info movie-info-glass-effect" id="movie-info">\n\
              <div class="title-container" style="margin-bottom: 0px;">\n\
                  <img id="movie-log-title" class="mb-3" src="" style="display: none;">\n\
                  <h1 class="movie-title" id="movie-title" style="">Das doppelte Lottchen</h1>\n\
              </div>\n\
              <div class="movie-details">\n\
                  <div class="rating">\n\
                    <img src="' +
  HOST +
  'app_src_min/images/imdb-logo.png" alt="imdb" class="rating-provider-logo">\n\
                    <span id="rate">10</span>\n\
                  </div>\n\
                  <div><span class="circle" style=""></span><span id="release-data">2017-04-16</span></div>\n\
                  <div><span class="circle"></span><span id="duration">01:33:31</span></div>\n\
                  <div><span class="circle" style=""></span><span id="genre">Familie</span></div>\n\
                </div>\n\
                <div class="movie-synopsis">\n\
                  <div id="movie-synopsis">Sonne, Wasser, Surfen - für die meisten Kinder ist das Ferienheim am Wolfgangsee ein Paradies - doch die zehnjährige Lotte aus Frankfurt möchte lieber allein sein, Klavier spielen und das Mozarthaus besichtigen. Und dann begegnet ihr auch noch Luise, und die sieht ihr verdammt ähnlich. Luise ist mit ihrem Musikervater durch ganz Afrika getourt, schlägt Purzelbäume und erzählt angeberische Geschichten von Krokodilen, Geiern und Flamingos. Lotte und Luise können sich zunächst nicht riechen, aber bald treten sie im Schullandheim als Doppeltes Lottchen auf: Sie haben die sensationelle Entdeckung gemacht, dass sie Zwillinge sind.</div>\n\
                </div>\n\
                <div class="movie-details">\n\
                  <div><span class="circle" style="display: none;"></span>Director: <span id="director"></span></div>\n\
                  <div style="display:flex;align-items:center"><span class="circle" style="display: none;"></span>Cast: <span id="movie-cast"></span></div>\n\
                </div>\n\
            </div>\n\
          </div>\n\
          <div class="page-contents-wrapper-1">\n\
            <div id="vod-series-menus-container"></div>\n\
            <div id="vod-series-page-bottom-container">\n\
              <div class="channel-page-bottom-item">\n\
                <div class="channel-page-bottom-icon bottom-item-red"></div>\n\
                <div\n\
                  class="channel-page-bottom-text"\n\
                  data-word_code="move_category"\n\
                >\n\
                  Move Category\n\
                </div>\n\
              </div>\n\
              <div class="channel-page-bottom-item">\n\
                <div class="channel-page-bottom-icon bottom-item-yellow"></div>\n\
                <div class="channel-page-bottom-text" data-word_code="fav">\n\
                  Fav\n\
                </div>\n\
              </div>\n\
              <div class="channel-page-bottom-item">\n\
                <div class="channel-page-bottom-icon bottom-item-green"></div>\n\
                <div class="channel-page-bottom-text" data-word_code="theme">\n\
                  Theme\n\
                </div>\n\
              </div>\n\
              <div class="channel-page-bottom-item">\n\
                <div class="channel-page-bottom-icon bottom-item-blue"></div>\n\
                <div class="channel-page-bottom-text" data-word_code="search">\n\
                  Search\n\
                </div>\n\
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
                  Classic\n\
              </div>\n\
              <div class="modal-operation-menu-type-3 current vod-theme" \n\
                data-index="1"\n\
                onclick="vod_series_page.handleModalSelection(1)"\n\
                onmouseenter="vod_series_page.hoverThemeVod(1)"\n\
                data-word_code="modern">\n\
                  Modern\n\
              </div>\n\
            </div>\n\
          </div>\n\
        </div>\n\
      </div>\n\
      <div\n\
        id="vod-summary-page"\n\
        class="height-100 page-container1 position-relative hide"\n\
      >\n\
        <img class="vod-series-background-img" onerror="hideImg(this)" />\n\
        <div class="vod-series-background-img-overlay"></div>\n\
        <div class="vod-series-summary-page-contents-container">\n\
          <div id="vod-summary-content-container" class="">\n\
            <div class="vod-summary-information-container position-relative">\n\
              <h3 id="vod-summary-name"></h3>\n\
              <div class="vod-summary-items-container">\n\
                <p class="vod-summary-item">\n\
                  <span class="vod-summary-item-label"\n\
                    ><svg\n\
                      height="200px"\n\
                      width="200px"\n\
                      version="1.1"\n\
                      id="Capa_1"\n\
                      xmlns="http://www.w3.org/2000/svg"\n\
                      xmlns:xlink="http://www.w3.org/1999/xlink"\n\
                      viewBox="0 0 47.94 47.94"\n\
                      xml:space="preserve"\n\
                      fill="#000000"\n\
                    >\n\
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>\n\
                      <g\n\
                        id="SVGRepo_tracerCarrier"\n\
                        stroke-linecap="round"\n\
                        stroke-linejoin="round"\n\
                      ></g>\n\
                      <g id="SVGRepo_iconCarrier">\n\
                        <path\n\
                          style="fill: #ed8a19"\n\
                          d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z"\n\
                        ></path>\n\
                      </g></svg\n\
                  ></span>\n\
                  <span class="rating-mark" id="vod-rating-mark"></span>\n\
                </p>\n\
                <p class="vod-summary-item">\n\
                  <span\n\
                    class="vod-summary-item-label"\n\
                    data-word_code="release_date"\n\
                  >\n\
                    Release Date:\n\
                  </span>\n\
                  <span\n\
                    class="vod-summary-item-text"\n\
                    id="vod-summary-release-date"\n\
                  ></span>\n\
                </p>\n\
                <p class="vod-summary-item">\n\
                  <span class="vod-summary-item-label" data-word_code="length">\n\
                    Length:\n\
                  </span>\n\
                  <span\n\
                    class="vod-summary-item-text"\n\
                    id="vod-summary-release-length"\n\
                  ></span>\n\
                </p>\n\
              </div>\n\
              <p class="vod-summary-item max-line-2">\n\
                <span class="vod-summary-item-label" data-word_code="director">\n\
                  Director:\n\
                </span>\n\
                <span\n\
                  class="vod-summary-item-text"\n\
                  id="vod-summary-release-director"\n\
                ></span>\n\
              </p>\n\
              <p class="vod-summary-item max-line-2">\n\
                <span class="vod-summary-item-label" data-word_code="cast">\n\
                  Cast:\n\
                </span>\n\
                <span\n\
                  class="vod-summary-item-text"\n\
                  id="vod-summary-release-cast"\n\
                ></span>\n\
              </p>\n\
              <p id="vod-summary-description"></p>\n\
            </div>\n\
            <div id="vod-summary-action-container">\n\
              <button\n\
                id="vod-watch-movie-button"\n\
                class="vod-action-btn"\n\
                onmouseenter="vod_summary_page.hoverButton(0)"\n\
                onclick="vod_summary_page.showMovie()"\n\
              >\n\
                <span class="vod-watch-movie-icon-container">\n\
                  <svg\n\
                    style="width: 2rem; height: 2rem"\n\
                    width="32"\n\
                    height="32"\n\
                    viewBox="0 0 24 24"\n\
                    fill="none"\n\
                    xmlns="http://www.w3.org/2000/svg"\n\
                    stroke="#ddd"\n\
                  >\n\
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>\n\
                    <g\n\
                      id="SVGRepo_tracerCarrier"\n\
                      stroke-linecap="round"\n\
                      stroke-linejoin="round"\n\
                    ></g>\n\
                    <g id="SVGRepo_iconCarrier">\n\
                      <path\n\
                        d="M21.4086 9.35258C23.5305 10.5065 23.5305 13.4935 21.4086 14.6474L8.59662 21.6145C6.53435 22.736 4 21.2763 4 18.9671L4 5.0329C4 2.72368 6.53435 1.26402 8.59661 2.38548L21.4086 9.35258Z"\n\
                        fill="#ddd"\n\
                      ></path>\n\
                    </g>\n\
                  </svg>\n\
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
              <button\n\
                id="vod-watch-trailer-button"\n\
                data-word_code="watch_trailer"\n\
                class="vod-action-btn"\n\
                onmouseenter="vod_summary_page.hoverButton(1)"\n\
                onclick="vod_summary_page.showTrailerVideo()"\n\
              >\n\
                Watch Trailer\n\
              </button>\n\
              <button\n\
                id="vod-add-favourite-button"\n\
                class="vod-action-btn"\n\
                data-action="add"\n\
                onmouseenter="vod_summary_page.hoverButton(2)"\n\
                onclick="vod_summary_page.toggleFavourite()"\n\
                data-word_code="add_to_favorite"\n\
              >\n\
                Add To Favorite\n\
              </button>\n\
            </div>\n\
            <div id="vod-summary-cast">\n\
              <h2  data-word_code="cast">Cast</h2>\n\
              <div id="cast-container"></div>\n\
            </div>\n\
          </div>\n\
        </div>\n\
      </div>\n\
      <div id="series-summary-page" class="height-100 position-relative hide">\n\
        <img class="vod-series-background-img" onerror="hideImg(this)" />\n\
        <div class="vod-series-background-img-overlay"></div>\n\
        <div class="vod-series-summary-page-contents-container">\n\
          <div id="series-summary-name"></div>\n\
          <div id="series-summary-content-container">\n\
            <div id="series-summary-left-part">\n\
              <div id="series-summary-image-wrapper">\n\
                <img onerror="this.src=\'' +
  HOST +
  'app_src_min/images/default_movie.png\'" />\n\
              </div>\n\
              <div class="series-rating-container" id="series-rating-container">\n\
                <svg\n\
                  height="200px"\n\
                  width="200px"\n\
                  version="1.1"\n\
                  id="Capa_1"\n\
                  xmlns="http://www.w3.org/2000/svg"\n\
                  xmlns:xlink="http://www.w3.org/1999/xlink"\n\
                  viewBox="0 0 47.94 47.94"\n\
                  xml:space="preserve"\n\
                  fill="#000000"\n\
                >\n\
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>\n\
                  <g\n\
                    id="SVGRepo_tracerCarrier"\n\
                    stroke-linecap="round"\n\
                    stroke-linejoin="round"\n\
                  ></g>\n\
                  <g id="SVGRepo_iconCarrier">\n\
                    <path\n\
                      style="fill: #ed8a19"\n\
                      d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z"\n\
                    ></path>\n\
                  </g>\n\
                </svg>\n\
                <div class="rating-mark" id="series-rating-mark">4.5</div>\n\
              </div>\n\
            </div>\n\
            <div\n\
              id="series-summary-informations-container"\n\
              style="height: 100vh; overflow: hidden"\n\
            >\n\
              <div\n\
                class="series-summary-information-container position-relative"\n\
              >\n\
                <h3 id="selected-season-name"></h3>\n\
                <p class="vod-summary-item">\n\
                  <span\n\
                    class="vod-summary-item-label"\n\
                    data-word_code="release_date"\n\
                  >\n\
                    Duration:\n\
                  </span>\n\
                  <span\n\
                    class="vod-summary-item-text"\n\
                    id="series-summary-release-date"\n\
                  ></span>\n\
                </p>\n\
                <p id="series-summary-description"></p>\n\
              </div>\n\
              <div id="season-episodes-container">\n\
                <div id="season-items-container"></div>\n\
                <div id="series-summary-episode-items-container"></div>\n\
              </div>\n\
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
      <div\n\
        id="vod-series-player-page"\n\
        class="height-100 position-relative hide"\n\
      >\n\
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
            <img src="' +
  HOST +
  'app_src_min/images/loader.gif" />\n\
          </div>\n\
          <div class="subtitle-container text-center position-absolute"></div>\n\
          <div class="video-error">\n\
            <img src="' +
  HOST +
  'app_src_min/images/no_signal.png" />\n\
          </div>\n\
          <div class="video-reconnect-message" data-word_code="reconnecting">\n\
            Reconnecting...\n\
          </div>\n\
          <div id="vod-series-video-controls-container">\n\
            <div id="vod-series-video-controls-wrapper">\n\
              <div id="vod-series-video-title" style="display: none"></div>\n\
              <div id="vod-series-video-controls-btns">\n\
                <div class="video-control-icon text-center">\n\
                  <i\n\
                    class="fa fa-step-backward"\n\
                    onmouseenter="vod_series_player.hoverVideoControlIcon(0)"\n\
                    onclick="vod_series_player.showNextVideo(-1)"\n\
                  ></i>\n\
                </div>\n\
                <div class="video-control-icon text-center">\n\
                  <i\n\
                    class="fa fa-backward"\n\
                    onmouseenter="vod_series_player.hoverVideoControlIcon(1)"\n\
                    onclick="vod_series_player.seekTo(-30)"\n\
                  ></i>\n\
                </div>\n\
                <div class="video-control-icon text-center">\n\
                  <i\n\
                    class="fa fa-pause"\n\
                    data-action_type="pause"\n\
                    onmouseenter="vod_series_player.hoverVideoControlIcon(2)"\n\
                    onclick="vod_series_player.playPauseVideo()"\n\
                  ></i>\n\
                </div>\n\
                <div class="video-control-icon text-center">\n\
                  <i\n\
                    class="fa fa-forward"\n\
                    onmouseenter="vod_series_player.hoverVideoControlIcon(3)"\n\
                    onclick="vod_series_player.seekTo(30)"\n\
                  ></i>\n\
                </div>\n\
                <div class="video-control-icon text-center">\n\
                  <i\n\
                    class="fa fa-step-forward"\n\
                    onmouseenter="vod_series_player.hoverVideoControlIcon(4)"\n\
                    onclick="vod_series_player.showNextVideo(1)"\n\
                  ></i>\n\
                </div>\n\
              </div>\n\
                <div class="video-info-btns-container">\n\
                  <div class="video-info-btn">\n\
                    <div\n\
                      class="video-info-icon"\n\
                      onmouseenter="vod_series_player.hoverVideoInfoIcon(0)"\n\
                      onclick="vod_series_player.showSubtitleAudioModal(\'TEXT\')"\n\
                    >\n\
                      <i class="fa fa-closed-captioning"></i>\n\
                    </div>\n\
                  </div>\n\
                  <div class="video-info-btn">\n\
                    <div\n\
                      class="video-info-icon"\n\
                      onmouseenter="vod_series_player.hoverVideoInfoIcon(1)"\n\
                      onclick="vod_series_player.showSubtitleAudioModal(\'AUDIO\')"\n\
                    >\n\
                      <i class="fa fa-audio-description"></i>\n\
                    </div>\n\
                  </div>\n\
                  <div class="video-info-btn lg">\n\
                    <div\n\
                      class="video-info-icon"\n\
                      onmouseenter="vod_series_player.hoverVideoInfoIcon(2)"\n\
                      onclick="vod_series_player.showSubtitleAdjustModal()"\n\
                    >\n\
                      <i class="fa fa-clock"></i>\n\
                    </div>\n\
                  </div>\n\
                  <div class="video-info-btn">\n\
                    <div\n\
                      class="video-info-icon"\n\
                      onmouseenter="vod_series_player.hoverVideoInfoIcon(3)"\n\
                      onclick="vod_series_player.showAspectRatioMenu()"\n\
                    >\n\
                      <i class="fas fa-expand"></i>\n\
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
            <img src="" onerror="this.src=\'' +
  HOST +
  'app_src_min/images/default_movie.png\'" />\n\
          </div>\n\
          <div id="vod-video-info-wrapper">\n\
            <div id="vod-video-info-subwrapper1">\n\
              <div id="vod-video-info-title">Feride - 2020</div>\n\
              <div id="vod-video-info-desc"></div>\n\
            </div>\n\
            <div id="vod-video-info-subwrapper2"></div>\n\
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
                    onclick="vod_series_player.changeAspectRatio(\'stretch\')"\n\
                    onmouseenter="vod_series_player.hoverAspectRatioItem(0)" class="active"\n\
                    >Stretch</div>\n\
                  <div\n\
                    onclick="vod_series_player.changeAspectRatio(\'16:9\')"\n\
                    onmouseenter="vod_series_player.hoverAspectRatioItem(1)"\n\
                    >16:9 <span>Standard</span></div>\n\
                  <div\n\
                    onclick="vod_series_player.changeAspectRatio(\'4:3\')"\n\
                    onmouseenter="vod_series_player.hoverAspectRatioItem(2)"\n\
                    >4:3 <span>Traditional</span></div>\n\
                  <div\n\
                    onclick="vod_series_player.changeAspectRatio(\'21:9\')"\n\
                    onmouseenter="vod_series_player.hoverAspectRatioItem(3)"\n\
                    >21:9 <span>Ultra widescreen</span></div>\n\
                  <div\n\
                    onclick="vod_series_player.changeAspectRatio(\'1:1\')"\n\
                    onmouseenter="vod_series_player.hoverAspectRatioItem(4)"\n\
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
                      onclick="vod_series_player.cancelSubtitle()"\n\
                      data-word_code="cancel"\n\
                      onmouseenter="vod_series_player.hoverSubtitle(-2)"\n\
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
                      onmouseenter="vod_series_player.hoverSubtitle(-1)"\n\
                      onclick="vod_series_player.confirmSubtitle()"\n\
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
                onmouseenter="vod_series_player.hoverSubtitleAdjustBtn(0)"\n\
                onclick="vod_series_player.handleMenuClick()"\n\
              />\n\
            </div>\n\
            <div id="subtitle-adjust-btns-container">\n\
              <button\n\
                type="button"\n\
                class="btn btn-primary subtitle-adjust-btn subtitle-adjust-item"\n\
                data-word_code="ok"\n\
                onmouseenter="vod_series_player.hoverSubtitleAdjustBtn(1)"\n\
                onclick="vod_series_player.saveSubtitleAdjustTime()"\n\
              >\n\
                OK\n\
              </button>\n\
              <button\n\
                type="button"\n\
                class="btn btn-primary subtitle-adjust-btn subtitle-adjust-item"\n\
                data-word_code="cancel"\n\
                onmouseenter="vod_series_player.hoverSubtitleAdjustBtn(2)"\n\
                onclick="vod_series_player.goBack()"\n\
              >\n\
                Cancel\n\
              </button>\n\
            </div>\n\
          </div>\n\
        </div>\n\
        <div id="confirm-exit-movie-popup-container">\n\
          <div class="confirm-exit-movie-popup">\n\
            <div class="confirm-exit-movie-popup-title">Leaving the movie</div>\n\
            <div class="confirm-exit-movie-popup-description">Are you sure you want to exit this movie?</div>\n\
            <div class="confirm-exit-movie-btns-container">\n\
              <div class="confirm-exit-movie-btn" onmouseenter="vod_series_player.hoverLeavePopupBtn(0)" onclick="vod_series_player.handleMenuClick()">Cancel</div>\n\
              <div class="confirm-exit-movie-btn" onmouseenter="vod_series_player.hoverLeavePopupBtn(1)" onclick="vod_series_player.handleMenuClick()">Confirm</div>\n\
            </div>\n\
          </div>\n\
        </div>\n\
      </div>\n\
      <div class="modal" id="parent-control-modal" data-backdrop="static">\n\
        <div class="modal-dialog modal-dialog-centered1 modal-xl">\n\
          <div class="modal-content ">\n\
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
                <div\n\
                  class="parent-modal-input-item-container"\n\
                  onmouseenter="setting_page.hoverParentControl(0)"\n\
                  onclick="setting_page.clickParentControl(0)"\n\
                >\n\
                  <div class="parent-modal-label-wrapper text-right">\n\
                    <label class="" data-word_code="parent_pass"\n\
                      >Current Password:</label\n\
                    >\n\
                  </div>\n\
                  <div class="parent-modal-input-wrapper">\n\
                    <input\n\
                      class="form-control"\n\
                      id="current_parent_password"\n\
                      type="password"\n\
                      value=""\n\
                      maxlength="4"\n\
                    />\n\
                  </div>\n\
                </div>\n\
                <div\n\
                  class="parent-modal-input-item-container"\n\
                  onmouseenter="setting_page.hoverParentControl(1)"\n\
                  onclick="setting_page.clickParentControl(1)"\n\
                >\n\
                  <div class="parent-modal-label-wrapper text-right">\n\
                    <label class="" data-word_code="net_pass"\n\
                      >New Password:</label\n\
                    >\n\
                  </div>\n\
                  <div class="parent-modal-input-wrapper">\n\
                    <input\n\
                      class="form-control"\n\
                      id="new_parent_password"\n\
                      type="password"\n\
                      value=""\n\
                      maxlength="4"\n\
                    />\n\
                  </div>\n\
                </div>\n\
                <div\n\
                  class="parent-modal-input-item-container"\n\
                  onmouseenter="setting_page.hoverParentControl(2)"\n\
                  onclick="setting_page.clickParentControl(2)"\n\
                >\n\
                  <div class="parent-modal-label-wrapper text-right">\n\
                    <label class="" data-word_code="confirm_password"\n\
                      >Confirm Password:</label\n\
                    >\n\
                  </div>\n\
                  <div class="parent-modal-input-wrapper">\n\
                    <input\n\
                      class="form-control"\n\
                      id="new_parent_password_confirm"\n\
                      type="password"\n\
                      value=""\n\
                      maxlength="4"\n\
                    />\n\
                  </div>\n\
                </div>\n\
                <div class="" style="margin-top: -0.9375rem">\n\
                  <div class="parent-modal-label-wrapper text-right"></div>\n\
                  <div class="parent-modal-input-wrapper">\n\
                    <span\n\
                      class="invalid-feedback"\n\
                      id="parent-account-valid-error"\n\
                      style="display: none; font-size: 1.25rem"\n\
                    >\n\
                    </span>\n\
                  </div>\n\
                </div>\n\
              </div>\n\
              <div class="text-right">\n\
                <button\n\
                  type="button"\n\
                  class="btn modal-btn-1 parent-control-modal-button"\n\
                  data-word_code="ok"\n\
                  onmouseenter="setting_page.hoverParentControl(3)"\n\
                  onclick="setting_page.clickParentControl(3)"\n\
                >\n\
                  OK\n\
                </button>\n\
                <button\n\
                  type="button"\n\
                  class="btn modal-btn-1 parent-control-modal-button"\n\
                  data-word_code="cancel"\n\
                  style="margin-left: 0.3125rem"\n\
                  onmouseenter="setting_page.hoverParentControl(4)"\n\
                  onclick="setting_page.clickParentControl(4)"\n\
                >\n\
                  Cancel\n\
                </button>\n\
              </div>\n\
            </div>\n\
          </div>\n\
        </div>\n\
      </div>\n\
      <div class="modal" id="hide-category-modal" data-backdrop="static">\n\
        <div class="modal-dialog modal-dialog-centered1 modal-xl">\n\
          <div class="modal-content ">\n\
            <div class="modal-header " style="padding: 0.3125rem">\n\
              <h5\n\
                class="modal-title modal-title-text-2"\n\
                style="text-align: center"\n\
                data-word_code="select_categories_you_want_to_hide"\n\
              >\n\
                Unselect Categories you want to hide\n\
              </h5>\n\
            </div>\n\
            <div\n\
              class="modal-body p-20 "\n\
              id="hide-modal-categories-container"\n\
              style="padding: 1.25rem 1.25rem; margin-bottom: 0.3125rem"\n\
            ></div>\n\
          </div>\n\
        </div>\n\
      </div>\n\
      <div class="modal" id="theme-modal" data-backdrop="static">\n\
        <div class="modal-dialog modal-dialog-centered1 modal-lg">\n\
          <div class="modal-content">\n\
            <div class="modal-header ">\n\
              <h5\n\
                class="modal-title modal-title-text-2 text-center"\n\
                data-word_code="change_theme"\n\
              >\n\
                Change Theme\n\
              </h5>\n\
            </div>\n\
            <div\n\
              class="modal-body "\n\
              style="padding: 1.25rem 0rem"\n\
              id="theme-modal-body"\n\
            ></div>\n\
          </div>\n\
        </div>\n\
      </div>\n\
      <div class="modal" id="language-select-modal" data-backdrop="static">\n\
        <div class="modal-dialog modal-dialog-centered1 modal-lg">\n\
          <div class="modal-content">\n\
            <div class="modal-header ">\n\
              <h5\n\
                class="modal-title modal-title-text-2 text-center"\n\
                data-word_code="change_language"\n\
              >\n\
                Select Language\n\
              </h5>\n\
            </div>\n\
            <div\n\
              class="modal-body  p-20"\n\
              style="padding: 1.25rem 0"\n\
            >\n\
              <div class="position-relative" id="select-language-body"></div>\n\
            </div>\n\
          </div>\n\
        </div>\n\
      </div>\n\
      <div class="modal" id="stream-format-modal" data-backdrop="static">\n\
        <div class="modal-dialog modal-dialog-centered1 modal-lg">\n\
          <div class="modal-content ">\n\
            <div class="modal-header " style="padding: 0.3125rem">\n\
              <h5\n\
                class="modal-title modal-title-text-2"\n\
                style="text-align: center"\n\
                data-word_code="stream_format"\n\
              >\n\
                Stream Format\n\
              </h5>\n\
            </div>\n\
            <div class="modal-body " id="stream-format-modal-body">\n\
              <div id="stream-format-items-container">\n\
                <div\n\
                  class="stream-format-option stream-format-item"\n\
                  onclick="setting_page.handleMenuClick()"\n\
                  onmouseenter="setting_page.hoverStreamFormatItem(0)"\n\
                >\n\
                  <input\n\
                    class="stream-format-radio magic-radio"\n\
                    type="radio"\n\
                    name="stream-format"\n\
                    value="default"\n\
                  />\n\
                  <label>Default</label>\n\
                </div>\n\
                <div\n\
                  class="stream-format-option stream-format-item"\n\
                  onclick="setting_page.handleMenuClick()"\n\
                  onmouseenter="setting_page.hoverStreamFormatItem(1)"\n\
                >\n\
                  <input\n\
                    class="stream-format-radio magic-radio"\n\
                    type="radio"\n\
                    name="stream-format"\n\
                    value="ts"\n\
                  />\n\
                  <label>MPEGTS(.ts)</label>\n\
                </div>\n\
                <div\n\
                  class="stream-format-option stream-format-item"\n\
                  onclick="setting_page.handleMenuClick()"\n\
                  onmouseenter="setting_page.hoverStreamFormatItem(2)"\n\
                >\n\
                  <input\n\
                    class="stream-format-radio magic-radio"\n\
                    type="radio"\n\
                    name="stream-format"\n\
                    value="m3u8"\n\
                  />\n\
                  <label>HLS(.m3u8)</label>\n\
                </div>\n\
              </div>\n\
              <div id="stream-format-btns-container">\n\
                <button\n\
                  type="button"\n\
                  class="btn modal-btn-1 stream-format-btn stream-format-item"\n\
                  data-word_code="ok"\n\
                  onmouseenter="setting_page.hoverStreamFormatItem(3)"\n\
                  onclick="setting_page.handleMenuClick()"\n\
                >\n\
                  OK\n\
                </button>\n\
                <button\n\
                  type="button"\n\
                  class="btn modal-btn-1 stream-format-btn stream-format-item"\n\
                  data-word_code="cancel"\n\
                  style="margin-left: 0.3125rem"\n\
                  onmouseenter="setting_page.hoverStreamFormatItem(4)"\n\
                  onclick="setting_page.handleMenuClick()"\n\
                >\n\
                  Cancel\n\
                </button>\n\
              </div>\n\
            </div>\n\
          </div>\n\
        </div>\n\
      </div>\n\
      <div class="modal" id="clear-cache-modal" data-backdrop="static">\n\
        <div class="modal-dialog modal-dialog-centered1 modal-lg">\n\
          <div class="modal-content ">\n\
            <div\n\
              class="modal-header "\n\
              style="border-bottom: 0.125rem solid #fff6da"\n\
            >\n\
              <h5\n\
                class="modal-title modal-title-text-2"\n\
                data-word_code="clear_cache"\n\
              >\n\
                Clear Cache\n\
              </h5>\n\
            </div>\n\
            <div class="modal-body p-20 ">\n\
              <div class="clear-cache-desc" data-word_code="cache_clear_desc">\n\
                If you remove cache, all the settings, favourite, recent\n\
                category, saved videos would be empty\n\
                <br />After clearing cache, app would be restarted to apply\n\
                changes.\n\
                <br />\n\
                Do you still want to proceed?\n\
              </div>\n\
              <div class="modal-button-wrapper text-center">\n\
                <button\n\
                  type="button"\n\
                  class="btn modal-btn-1"\n\
                  data-word_code="no"\n\
                  onmouseenter="clear_cache_page.hoverMenuItem(0)"\n\
                  onclick="clear_cache_page.handleMenuClick()"\n\
                >\n\
                  No\n\
                </button>\n\
                <button\n\
                  type="button"\n\
                  class="btn modal-btn-1"\n\
                  data-word_code="yes"\n\
                  onmouseenter="clear_cache_page.hoverMenuItem(1)"\n\
                  onclick="clear_cache_page.handleMenuClick()"\n\
                >\n\
                  Yes\n\
                </button>\n\
              </div>\n\
            </div>\n\
          </div>\n\
        </div>\n\
      </div>\n\
      <div class="modal" id="clear-recent-modal" data-backdrop="static">\n\
        <div class="modal-dialog modal-dialog-centered1 modal-lg">\n\
          <div class="modal-content ">\n\
            <div\n\
              class="modal-header "\n\
              style="border-bottom: 0.125rem solid #fff6da"\n\
            >\n\
              <h5\n\
                class="modal-title modal-title-text-2"\n\
                data-word_code="clear_watch_lists"\n\
              >\n\
                Clear Watch Lists\n\
              </h5>\n\
            </div>\n\
            <div class="modal-body p-20 ">\n\
              <div class="clear-cache-desc" data-word_code="clear_watch_desc">\n\
                Are you sure to remove all watch lists?\n\
              </div>\n\
              <div class="modal-button-wrapper text-center">\n\
                <button\n\
                  type="button"\n\
                  class="btn modal-btn-1"\n\
                  data-word_code="no"\n\
                  onmouseenter="clear_recent_page.hoverMenuItem(0)"\n\
                  onclick="clear_recent_page.handleMenuClick()"\n\
                >\n\
                  No\n\
                </button>\n\
                <button\n\
                  type="button"\n\
                  class="btn modal-btn-1"\n\
                  data-word_code="yes"\n\
                  onmouseenter="clear_recent_page.hoverMenuItem(1)"\n\
                  onclick="clear_recent_page.handleMenuClick()"\n\
                >\n\
                  Yes\n\
                </button>\n\
              </div>\n\
            </div>\n\
          </div>\n\
        </div>\n\
      </div>\n\
      <div class="modal" id="subtitle-setting-modal" data-backdrop="static">\n\
        <div class="modal-dialog modal-dialog-centered1 modal-lg">\n\
          <div class="modal-content ">\n\
            <div class="modal-header " style="padding: 0.3125rem">\n\
              <h5\n\
                class="modal-title modal-title-text-2"\n\
                style="text-align: center"\n\
                data-word_code="subtitle_setting"\n\
              >\n\
                Subtitle Setting\n\
              </h5>\n\
            </div>\n\
            <div class="modal-body ">\n\
              <div id="subtitle-setting-label" data-word_code="subtitle_size">\n\
                Subtitle Size\n\
              </div>\n\
              <div id="subtitle-btns-container">\n\
                <div\n\
                  class="subtitle-btn subtitle-setting-item"\n\
                  onmouseenter="subtitle_setting_page.hoverMenuItem(0)"\n\
                  onclick="subtitle_setting_page.increaseSubtitleSize(-1)"\n\
                >\n\
                  -\n\
                </div>\n\
                <div class="subtitle-btn" id="current-subtitle-size">30</div>\n\
                <div\n\
                  class="subtitle-btn subtitle-setting-item"\n\
                  onmouseenter="subtitle_setting_page.hoverMenuItem(1)"\n\
                  onclick="subtitle_setting_page.increaseSubtitleSize(1)"\n\
                >\n\
                  +\n\
                </div>\n\
              </div>\n\
            </div>\n\
          </div>\n\
        </div>\n\
      </div>\n\
      <div class="modal" id="layout-setting-modal" data-backdrop="static">\n\
        <div class="modal-dialog modal-dialog-centered1 modal-lg">\n\
          <div class="modal-content ">\n\
            <div class="modal-header " style="padding: 0.3125rem">\n\
              <h5\n\
                class="modal-title modal-title-text-2"\n\
                style="text-align: center"\n\
                data-word_code="live_tv_layout"\n\
              >\n\
                Live TV Layout\n\
              </h5>\n\
            </div>\n\
            <div class="modal-body ">\n\
              <div id="layout-btns-container">\n\
                <div\n\
                  class="layout-setting-item"\n\
                  onmouseenter="layout_page.hoverMenuItem(0)"\n\
                  onclick="layout_page.changeLiveLayoutSetting(0)"\n\
                >\n\
                  <div>Classic</div>\n\
                  <div class="layout-preview-img-container">\n\
                    <img src="'+HOST+'app_src_min/images/layouts-previews/classic.png" />\n\
                  </div>\n\
                </div>\n\
                <div\n\
                  class="layout-setting-item"\n\
                  onmouseenter="layout_page.hoverMenuItem(1)"\n\
                  onclick="layout_page.changeLiveLayoutSetting(1)"\n\
                >\n\
                  <div>Normal</div>\n\
                  <div class="layout-preview-img-container">\n\
                    <img src="'+HOST+'app_src_min/images/layouts-previews/normal.png" />\n\
                  </div>\n\
                </div>\n\
                <div\n\
                  class="layout-setting-item"\n\
                  onmouseenter="layout_page.hoverMenuItem(2)"\n\
                  onclick="layout_page.changeLiveLayoutSetting(2)"\n\
                >\n\
                  <div>Modern</div>\n\
                  <div class="layout-preview-img-container">\n\
                    <img src="'+HOST+'app_src_min/images/layouts-previews/modern.png" />\n\
                  </div>\n\
                </div>\n\
              </div>\n\
            </div>\n\
          </div>\n\
        </div>\n\
      </div>\n\
      <div class="modal" id="toggle_tmdb_modal" data-backdrop="static">\n\
          <div class="modal-dialog modal-dialog-centered1 modal-lg">\n\
            <div class="modal-content">\n\
              <div class="modal-header" style="padding: 0.313rem">\n\
                <h5\n\
                  class="modal-title modal-title-text-2"\n\
                  style="text-align: center"\n\
                  data-word_code="toggle-tmdb"\n\
                >\n\
                  Toggle TMDB\n\
                </h5>\n\
              </div>\n\
              <div class="modal-body" id="font-size-modal-body">\n\
                <div id="tmdb-options-container">\n\
                  <div\n\
                    class="tmdb-option"\n\
                    onclick="setting_page.handleMenuClick()"\n\
                    onmouseenter="setting_page.hoverTMDBChoice(0)"\n\
                  >\n\
                    <input\n\
                      class="tmdb-choice-radio magic-radio"\n\
                      type="radio"\n\
                      name="tmdb-choice"\n\
                      value="off"\n\
                    />\n\
                    <label data-word_code="off">Off</label>\n\
                  </div>\n\
                  <div\n\
                    class="tmdb-option"\n\
                    onclick="setting_page.handleMenuClick()"\n\
                    onmouseenter="setting_page.hoverTMDBChoice(1)"\n\
                  >\n\
                    <input\n\
                      class="tmdb-choice-radio magic-radio"\n\
                      type="radio"\n\
                      name="tmdb-choice"\n\
                      value="on"\n\
                    />\n\
                    <label data-word_code="on">On</label>\n\
                  </div>\n\
                </div>\n\
                <div id="tmdb-btns-container">\n\
                  <button\n\
                    type="button"\n\
                    class="btn modal-btn-1 tmdb-btn tmdb-option"\n\
                    data-word_code="cancel"\n\
                    onmouseenter="setting_page.hoverTMDBChoice(2)"\n\
                    onclick="setting_page.handleMenuClick()"\n\
                  >\n\
                    Cancel\n\
                  </button>\n\
                </div>\n\
              </div>\n\
            </div>\n\
          </div>\n\
        </div>\n\
        <div class="modal" id="toggle_home_favorites" data-backdrop="static">\n\
          <div class="modal-dialog modal-dialog-centered1 modal-lg">\n\
            <div class="modal-content">\n\
              <div class="modal-header" style="padding: 0.313rem">\n\
                <h5\n\
                  class="modal-title modal-title-text-2"\n\
                  style="text-align: center"\n\
                  data-word_code="toggle-home-favorites"\n\
                >\n\
                  Toggle Home Favorites\n\
                </h5>\n\
              </div>\n\
              <div class="modal-body" id="font-size-modal-body">\n\
                <div id="home-favorites-options-container">\n\
                  <div\n\
                    class="home-favorites-option"\n\
                    onclick="setting_page.handleMenuClick()"\n\
                    onmouseenter="setting_page.hoverHomeFavoritesChoice(0)"\n\
                  >\n\
                    <input\n\
                      class="home-favorites-choice-radio magic-radio"\n\
                      type="radio"\n\
                      name="home-favorites-choice"\n\
                      value="on"\n\
                    />\n\
                    <label data-word_code="on">On</label>\n\
                  </div>\n\
                  <div\n\
                    class="home-favorites-option"\n\
                    onclick="setting_page.handleMenuClick()"\n\
                    onmouseenter="setting_page.hoverHomeFavoritesChoice(1)"\n\
                  >\n\
                    <input\n\
                      class="home-favorites-choice-radio magic-radio"\n\
                      type="radio"\n\
                      name="home-favorites-choice"\n\
                      value="off"\n\
                    />\n\
                    <label data-word_code="off">Off</label>\n\
                  </div>\n\
                </div>\n\
                <div id="home-favorites-btns-container">\n\
                  <button\n\
                    type="button"\n\
                    class="btn modal-btn-1 home-favorites-btn home-favorites-option"\n\
                    data-word_code="cancel"\n\
                    onmouseenter="setting_page.hoverHomeFavoritesChoice(2)"\n\
                    onclick="setting_page.handleMenuClick()"\n\
                  >\n\
                    Cancel\n\
                  </button>\n\
                </div>\n\
              </div>\n\
            </div>\n\
          </div>\n\
        </div>\n\
        <div class="modal" id="live_initialization_modal" data-backdrop="static">\n\
          <div class="modal-dialog modal-dialog-centered1 modal-lg">\n\
            <div class="modal-content">\n\
              <div class="modal-header" style="padding: 0.313rem">\n\
                <h5\n\
                  class="modal-title modal-title-text-2"\n\
                  style="text-align: center"\n\
                  data-word_code="change_live_initialization"\n\
                >\n\
                  Change Live Initialization\n\
                </h5>\n\
              </div>\n\
              <div class="modal-body" id="font-size-modal-body">\n\
                <div id="live-initialization-options-container">\n\
                  <div\n\
                    class="live-initialization-option"\n\
                    onclick="setting_page.handleMenuClick()"\n\
                    onmouseenter="setting_page.hoverLiveInitializationChoice(0)"\n\
                  >\n\
                    <input\n\
                      class="live-initialization-choice-radio magic-radio"\n\
                      type="radio"\n\
                      name="live-initialization-choice"\n\
                      value="default"\n\
                    />\n\
                    <label data-word_code="default">Default</label>\n\
                  </div>\n\
                  <div\n\
                    class="live-initialization-option"\n\
                    onclick="setting_page.handleMenuClick()"\n\
                    onmouseenter="setting_page.hoverLiveInitializationChoice(1)"\n\
                  >\n\
                    <input\n\
                      class="live-initialization-choice-radio magic-radio"\n\
                      type="radio"\n\
                      name="live-initialization-choice"\n\
                      value="last"\n\
                    />\n\
                    <label data-word_code="last">Last</label>\n\
                  </div>\n\
                  <div\n\
                    class="live-initialization-option"\n\
                    onclick="setting_page.handleMenuClick()"\n\
                    onmouseenter="setting_page.hoverLiveInitializationChoice(2)"\n\
                  >\n\
                    <input\n\
                      class="live-initialization-choice-radio magic-radio"\n\
                      type="radio"\n\
                      name="live-initialization-choice"\n\
                      value="favorite"\n\
                    />\n\
                    <label data-word_code="favorite">Favorite</label>\n\
                  </div>\n\
                </div>\n\
                <div id="live-initialization-btns-container">\n\
                  <button\n\
                    type="button"\n\
                    class="btn modal-btn-1 live-initialization-btn live-initialization-option"\n\
                    data-word_code="cancel"\n\
                    onmouseenter="setting_page.hoverLiveInitializationChoice(3)"\n\
                    onclick="setting_page.handleMenuClick()"\n\
                  >\n\
                    Cancel\n\
                  </button>\n\
                </div>\n\
              </div>\n\
            </div>\n\
          </div>\n\
        </div>\n\
      <div class="modal" id="colors-setting-modal" data-backdrop="static">\n\
        <div class="modal-dialog modal-dialog-centered1 modal-lg">\n\
          <div class="modal-content ">\n\
            <div class="modal-header " style="padding: 0.3125rem">\n\
              <h5\n\
                class="modal-title modal-title-text-2"\n\
                style="text-align: center"\n\
                data-word_code="change_app_colors"\n\
              >\n\
                Change App Colors\n\
              </h5>\n\
            </div>\n\
            <div class="modal-body ">\n\
              <div id="colors-btns-container">\n\
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
      </div>\n\
      <div id="catchup-page" class="height-100 hide">\n\
        <div id="catchup-page-container">\n\
          <div id="catchup-page-category-part" class="catchup-page-wrapper">\n\
            <div class="catchup-page-top-part">\n\
              <div class="catchup-page-title" data-word_code="catch_up">\n\
                Catch Up\n\
              </div>\n\
              <div\n\
                class="stream-page-search-bar-wrapper search-bar-wrapper"\n\
                id="catchup-page-category-search-bar"\n\
                onmouseenter="catchup_page.hoverCategorySearchBar()"\n\
                onclick="catchup_page.handleMenuClick()"\n\
                onchange="catchup_page.categoryKeywordChange()"\n\
                onkeyup="catchup_page.categoryKeywordChange()"\n\
              >\n\
                <i class="fa fa-search search-icon"></i>\n\
                <input\n\
                  class="stream-page-search-input search-input"\n\
                  id="catchup-page-category-search-input"\n\
                />\n\
              </div>\n\
            </div>\n\
            <div\n\
              class="catchup-page-items-container"\n\
              id="catchup-page-category-items-container"\n\
            ></div>\n\
          </div>\n\
          <div id="catchup-page-channel-part" class="catchup-page-wrapper">\n\
            <div class="catchup-page-top-part">\n\
              <div class="catchup-page-title" id="catchup-category-title"></div>\n\
              <div\n\
                class="stream-page-search-bar-wrapper search-bar-wrapper"\n\
                id="catchup-page-channel-search-bar"\n\
                onmouseenter="catchup_page.hoverChannelSearchBar()"\n\
                onclick="catchup_page.handleMenuClick()"\n\
                onchange="catchup_page.channelKeywordChange()"\n\
                onkeyup="catchup_page.channelKeywordChange()"\n\
              >\n\
                <i class="fa fa-search search-icon"></i>\n\
                <input\n\
                  class="stream-page-search-input search-input"\n\
                  id="catchup-page-channel-search-input"\n\
                />\n\
              </div>\n\
            </div>\n\
            <div\n\
              class="catchup-page-items-container"\n\
              id="catchup-page-channel-items-container"\n\
            ></div>\n\
          </div>\n\
        </div>\n\
      </div>\n\
      <div id="catchup-detail-page" class="height-100 hide">\n\
        <div id="catchup-detail-page-category-name" data-word_code="catch_up">\n\
          CATCH UP\n\
        </div>\n\
        <div id="epg-dates-container">\n\
          <div id="epg-dates-wrapper"></div>\n\
        </div>\n\
        <div id="epg-programmes-container"></div>\n\
      </div>\n\
    </div>\n\
    <div class="search-modal-container">\n\
      <div class="search-modal-wrapper">\n\
        <div class="search-input-container">\n\
          <input\n\
            type="text"\n\
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
    <div class="modal" id="parent-confirm-modal" data-backdrop="static">\n\
      <div class="modal-dialog modal-dialog-centered1 modal-xl">\n\
        <div class="modal-content ">\n\
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
                <div class="parent-modal-input-wrapper parent-confirm-item">\n\
                  <input\n\
                    class="form-control"\n\
                    id="parent-confirm-password"\n\
                    type="password"\n\
                    value=""\n\
                    maxlength="4"\n\
                  />\n\
                </div>\n\
              </div>\n\
              <div class="" style="margin-top: -0.9375rem">\n\
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
                onclick="confirmParentPassword()"\n\
                data-word_code="ok"\n\
                style="width: 9.375rem"\n\
              >\n\
                OK\n\
              </button>\n\
              <button\n\
                type="button"\n\
                class="btn modal-btn-1 parent-confirm-modal-button parent-confirm-item"\n\
                data-word_code="cancel"\n\
                onclick="cancelParentPassword()"\n\
                style="width: 9.375rem; margin-left: 0.3125rem"\n\
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
          class="modal-content "\n\
          style="border-radius: 0.625rem; padding-top: 1.25rem"\n\
        >\n\
          <div class="modal-body">\n\
            <h5\n\
              class="modal-text-1 text-center"\n\
              style="\n\
                color: #fff;\n\
                font-size: 2.8125rem !important;\n\
                margin: 0.625rem 0;\n\
              "\n\
              data-word_code="exit_app"\n\
            >\n\
              WOULD YOU LIKE TO EXIT THE APP ?\n\
            </h5>\n\
            <div\n\
              class="modal-button-wrapper text-right"\n\
              style="\n\
                margin: 1.25rem 0;\n\
                padding: 0 1.25rem;\n\
                margin-top: 3.75rem;\n\
                margin-bottom: 0.3125rem;\n\
                white-space: nowrap;\n\
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
    <div class="modal" id="activation-modal" data-backdrop="static">\n\
      <div class="modal-dialog modal-dialog-centered1 modal-lg">\n\
        <div\n\
          class="modal-content "\n\
          style="border-radius: 0.625rem; padding-top: 1.25rem"\n\
        >\n\
          <div class="modal-body">\n\
            <div\n\
              class="activation-title"\n\
              data-word_code="enter_your_activation_code"\n\
            >\n\
              Enter Your Activation Code\n\
            </div>\n\
            <input\n\
              id="activation-input"\n\
              onmouseenter="activation_page.hoverInput()"\n\
              onclick="activation_page.handleMenuClick()"\n\
            />\n\
            <div id="activation-code-message">Sorry, Code is not valid</div>\n\
            <div class="modal-button-wrapper text-center">\n\
              <button\n\
                type="button"\n\
                class="btn modal-btn-1 activation-btn"\n\
                style="width: 12.5rem"\n\
                data-word_code="yes"\n\
                onmouseenter="activation_page.hoverBtn(0)"\n\
                onclick="activation_page.handleMenuClick()"\n\
              >\n\
                Yes\n\
              </button>\n\
              <button\n\
                type="button"\n\
                class="btn modal-btn-1 activation-btn"\n\
                style="width: 12.5rem; margin-left: 0.625rem"\n\
                data-word_code="no"\n\
                onmouseenter="activation_page.hoverBtn(1)"\n\
                onclick="activation_page.handleMenuClick()"\n\
              >\n\
                No\n\
              </button>\n\
            </div>\n\
          </div>\n\
        </div>\n\
      </div>\n\
    </div>\n\
    <div class="modal" id="select-category-modal" data-backdrop="static">\n\
      <div class="modal-dialog modal-dialog-centered1 modal-xl">\n\
        <div class="modal-content">\n\
          <div class="modal-body " id="select-category-body">\n\
            <div class="select-category-title" data-word_code="select_category">\n\
              Select Category\n\
            </div>\n\
            <div id="select-category-items-container"></div>\n\
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
          onmouseenter="vod_series_player.hoverResumeBtn(0)"\n\
          onclick="vod_series_player.handleMenuClick()"\n\
        >\n\
          Yes\n\
        </button>\n\
        <button\n\
          type="button"\n\
          class="btn btn-primary resume-action-btn"\n\
          data-word_code="no"\n\
          onmouseenter="vod_series_player.hoverResumeBtn(1)"\n\
          onclick="vod_series_player.handleMenuClick()"\n\
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
    </div>';

// Helper functions for a cleaner code

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