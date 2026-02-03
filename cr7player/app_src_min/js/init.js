var platform = getOSPlatform();
loadPlatformSDK();

var app_environment = "production"; // development or production
if (app_environment == "development") {
  var STYLES = [
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
    "app_src/js/keyboard.js",
    "app_src_min/js/libs/qrcode.min.js",
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
    "app_src/js/calendar.js",
    "app_src/js/home_operation.js",
    "app_src/js/main.js",
  ];
} else {
  var STYLES = ["app_src_min/css/libs/fontawesome-5.12.1/css/all.min.css", "app_src_min/css/application.min.css"];
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
          CRPlayer: Your Gateway to Seamless IPTV Streaming\n\
        </h1>\n\
        <p class="loading-description">\n\
          CRPlayer is a cutting-edge media player designed to elevate\n\
          your IPTV experience. Built for users who bring their own content, it\n\
          combines advanced technology with effortless functionality to deliver\n\
          unparalleled performance and reliability. Take full control of your\n\
          entertainment with CRPlayer.\n\
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
      <div class="login-bottom-colors-container">\n\
        <div class="login-bottom-colors-item">\n\
          <span class="login-bottom-colors-color red"></span>\n\
          <span class="login-bottom-colors-label" data-word_code="login_cancel_label">Cancel and choose another playlist</span>\n\
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
                <div id="device-login-qr" title=""></div>\n\
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
                    <p class="login-instruction">Visit <a class="loading-issue-item-content-right-container-a website-url"></a></p>\n\
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
              <span class="login-page-link website-url"></span>\n\
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
        <div id="recaptcha-check-container" class="loading-issue-item">\n\
          <div class="recaptcha-check-modal">\n\
            <div class="recaptcha-check-title">Please enter the Code from the image below and press Submit</div>\n\
            <div id="recaptcha-code-container"></div>\n\
            <input class="recaptcha-code-item" id="recaptcha-code-input" type="text" onmouseenter="login_page.hoverRecaptchaCodeModal(0)" onclick="login_page.handleMenuClick()" />\n\
            <div class="recaptcha-code-item btn" onmouseenter="login_page.hoverRecaptchaCodeModal(1)" onclick="login_page.handleMenuClick()">Submit</div>\n\
          </div>\n\
        </div>\n\
        <div id="trial-expired-issue-container" class="loading-issue-item hide">\n\
          <div class="loading-issue-message-container">\n\
            <div class="loading-issue-text">\n\
              Your trial days ended at\n\
              <span class="expire-date">2023-05-07(UTC).</span><br />\n\
              Please go to\n\
              <span class="login-page-link website-url"></span>\n\
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
            <div class="app-loading-too-long-instruction-point">Visit our website: <span class="highlight website-url"></span></div>\n\
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
          <div class="home-left-part">\n\
            <div class="home-logo-wrapper">\n\
              <img src="' +
  HOST +
  'app_src_min/images/logo.png" alt="Logo" />\n\
            </div>\n\
            <div class="home-proxy-info-container">\n\
              <div class="home-proxy-info-connected-img"><img src="" alt="country-icon" id="proxy-country-img" /></div>\n\
              <div class="home-proxy-info-connected-country">Connected to <span id="country-name"></span></div>\n\
            </div>\n\
          </div>\n\
          <div id="home-bottom-items-container">\n\
            <div class="home-bottom-item" onmouseenter="home_page.hoverBottomMenu(0)" onclick="home_page.clickBottomMenu()">\n\
              <svg class="home-bottom-menu-item-icon" fill="#ffffff" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M27.1 14.313V5.396L24.158 8.34c-2.33-2.325-5.033-3.503-8.11-3.503C9.902 4.837 4.901 9.847 4.899 16c.001 6.152 5.003 11.158 11.15 11.16 4.276 0 9.369-2.227 10.836-8.478l.028-.122h-3.23l-.022.068c-1.078 3.242-4.138 5.421-7.613 5.421a8 8 0 0 1-5.691-2.359A7.993 7.993 0 0 1 8 16.001c0-4.438 3.611-8.049 8.05-8.049 2.069 0 3.638.58 5.924 2.573l-3.792 3.789H27.1z"></path></g></svg>\n\
            </div>\n\
            <div class="home-bottom-item" onmouseenter="home_page.hoverBottomMenu(1)" onclick="home_page.clickBottomMenu()">\n\
              <svg class="home-bottom-menu-item-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>\n\
            </div>\n\
            <div class="home-bottom-item" onmouseenter="home_page.hoverBottomMenu(2)" onclick="home_page.clickBottomMenu()">\n\
              <svg class="home-bottom-menu-item-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>\n\
            </div>\n\
            <div class="home-bottom-item notifications" onmouseenter="home_page.hoverBottomMenu(3)" onclick="home_page.clickBottomMenu()">\n\
              <svg class="home-bottom-menu-item-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.1041 3C9.19982 3 6.9545 5.19595 6.9545 7.77444V10.2188C6.9545 10.5405 6.82228 10.8248 6.75338 10.9646C6.66384 11.1463 6.54677 11.339 6.42189 11.5279C6.17031 11.9084 5.83361 12.3536 5.47487 12.8035C5.01458 13.3809 4.91657 14.0494 5.0632 14.5627C5.20252 15.0504 5.56426 15.432 6.18153 15.5344C7.73816 15.7925 9.72824 16 12.1041 16C14.6551 16 16.6049 15.7608 18.0148 15.4803C18.5156 15.3806 18.8052 15.078 18.9304 14.6866C19.0641 14.2684 19.0172 13.7009 18.6805 13.1607C18.5187 12.9011 18.3448 12.6358 18.1696 12.3698C18.1517 12.3426 18.1337 12.3154 18.1158 12.2881C17.9607 12.0528 17.8045 11.8158 17.6653 11.5955C17.5119 11.3526 17.3627 11.1043 17.2493 10.8776C17.1607 10.7004 17 10.3623 17 10V7.71194C17 5.09322 14.9665 3 12.1041 3ZM4.9545 7.77444C4.9545 3.97465 8.21572 1 12.1041 1C16.0344 1 19 3.95238 19 7.71194V9.90173C19.0084 9.92117 19.0206 9.94809 19.0382 9.98326C19.1058 10.1185 19.212 10.2991 19.3562 10.5274C19.4843 10.7302 19.6294 10.9503 19.7865 11.1887C19.8041 11.2155 19.8219 11.2424 19.8398 11.2696C20.0148 11.5353 20.2013 11.8195 20.3779 12.1029C20.997 13.0963 21.1635 14.2698 20.8353 15.2959C20.4985 16.3489 19.6505 17.1941 18.4051 17.4418C16.8616 17.7489 14.7809 18 12.1041 18C9.61153 18 7.51187 17.7823 5.85433 17.5074C4.43291 17.2717 3.47981 16.3011 3.14013 15.1121C2.80778 13.9487 3.06663 12.6159 3.91105 11.5567C4.25624 11.1238 4.5503 10.7323 4.75351 10.4249C4.85168 10.2764 4.91666 10.1655 4.9545 10.0904V7.77444ZM4.98375 10.0249C4.98403 10.0248 4.98265 10.0291 4.97876 10.0385C4.98152 10.0297 4.98347 10.0251 4.98375 10.0249ZM15.7853 19.3808C16.1272 19.8145 16.0529 20.4433 15.6192 20.7852C13.578 22.3948 10.4432 22.4152 8.37995 20.7846C7.94666 20.4421 7.87301 19.8132 8.21546 19.3799C8.55791 18.9466 9.18678 18.873 9.62008 19.2154C10.9507 20.2671 13.0602 20.2561 14.3808 19.2148C14.8145 18.8728 15.4433 18.9471 15.7853 19.3808Z" fill="#ffffff"></path> </g></svg>\n\
            </div>\n\
            <div class="home-bottom-item" onmouseenter="home_page.hoverBottomMenu(4)" onclick="home_page.clickBottomMenu()">\n\
              <svg class="home-bottom-menu-item-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Settings"> <g id="Vector"> <path d="M20.3499 8.92293L19.9837 8.7192C19.9269 8.68756 19.8989 8.67169 19.8714 8.65524C19.5983 8.49165 19.3682 8.26564 19.2002 7.99523C19.1833 7.96802 19.1674 7.93949 19.1348 7.8831C19.1023 7.82677 19.0858 7.79823 19.0706 7.76998C18.92 7.48866 18.8385 7.17515 18.8336 6.85606C18.8331 6.82398 18.8332 6.79121 18.8343 6.72604L18.8415 6.30078C18.8529 5.62025 18.8587 5.27894 18.763 4.97262C18.6781 4.70053 18.536 4.44993 18.3462 4.23725C18.1317 3.99685 17.8347 3.82534 17.2402 3.48276L16.7464 3.1982C16.1536 2.85658 15.8571 2.68571 15.5423 2.62057C15.2639 2.56294 14.9765 2.56561 14.6991 2.62789C14.3859 2.69819 14.0931 2.87351 13.5079 3.22396L13.5045 3.22555L13.1507 3.43741C13.0948 3.47091 13.0665 3.48779 13.0384 3.50338C12.7601 3.6581 12.4495 3.74365 12.1312 3.75387C12.0992 3.7549 12.0665 3.7549 12.0013 3.7549C11.9365 3.7549 11.9024 3.7549 11.8704 3.75387C11.5515 3.74361 11.2402 3.65759 10.9615 3.50224C10.9334 3.48658 10.9056 3.46956 10.8496 3.4359L10.4935 3.22213C9.90422 2.86836 9.60915 2.69121 9.29427 2.62057C9.0157 2.55807 8.72737 2.55634 8.44791 2.61471C8.13236 2.68062 7.83577 2.85276 7.24258 3.19703L7.23994 3.1982L6.75228 3.48124L6.74688 3.48454C6.15904 3.82572 5.86441 3.99672 5.6517 4.23614C5.46294 4.4486 5.32185 4.69881 5.2374 4.97018C5.14194 5.27691 5.14703 5.61896 5.15853 6.3027L5.16568 6.72736C5.16676 6.79166 5.16864 6.82362 5.16817 6.85525C5.16343 7.17499 5.08086 7.48914 4.92974 7.77096C4.9148 7.79883 4.8987 7.8267 4.86654 7.88237C4.83436 7.93809 4.81877 7.96579 4.80209 7.99268C4.63336 8.26452 4.40214 8.49186 4.12733 8.65572C4.10015 8.67193 4.0715 8.68752 4.01521 8.71871L3.65365 8.91908C3.05208 9.25245 2.75137 9.41928 2.53256 9.65669C2.33898 9.86672 2.19275 10.1158 2.10349 10.3872C2.00259 10.6939 2.00267 11.0378 2.00424 11.7255L2.00551 12.2877C2.00706 12.9708 2.00919 13.3122 2.11032 13.6168C2.19979 13.8863 2.34495 14.134 2.53744 14.3427C2.75502 14.5787 3.05274 14.7445 3.64974 15.0766L4.00808 15.276C4.06907 15.3099 4.09976 15.3266 4.12917 15.3444C4.40148 15.5083 4.63089 15.735 4.79818 16.0053C4.81625 16.0345 4.8336 16.0648 4.8683 16.1255C4.90256 16.1853 4.92009 16.2152 4.93594 16.2452C5.08261 16.5229 5.16114 16.8315 5.16649 17.1455C5.16707 17.1794 5.16658 17.2137 5.16541 17.2827L5.15853 17.6902C5.14695 18.3763 5.1419 18.7197 5.23792 19.0273C5.32287 19.2994 5.46484 19.55 5.65463 19.7627C5.86915 20.0031 6.16655 20.1745 6.76107 20.5171L7.25478 20.8015C7.84763 21.1432 8.14395 21.3138 8.45869 21.379C8.73714 21.4366 9.02464 21.4344 9.30209 21.3721C9.61567 21.3017 9.90948 21.1258 10.4964 20.7743L10.8502 20.5625C10.9062 20.5289 10.9346 20.5121 10.9626 20.4965C11.2409 20.3418 11.5512 20.2558 11.8695 20.2456C11.9015 20.2446 11.9342 20.2446 11.9994 20.2446C12.0648 20.2446 12.0974 20.2446 12.1295 20.2456C12.4484 20.2559 12.7607 20.3422 13.0394 20.4975C13.0639 20.5112 13.0885 20.526 13.1316 20.5519L13.5078 20.7777C14.0971 21.1315 14.3916 21.3081 14.7065 21.3788C14.985 21.4413 15.2736 21.4438 15.5531 21.3855C15.8685 21.3196 16.1657 21.1471 16.7586 20.803L17.2536 20.5157C17.8418 20.1743 18.1367 20.0031 18.3495 19.7636C18.5383 19.5512 18.6796 19.3011 18.764 19.0297C18.8588 18.7252 18.8531 18.3858 18.8417 17.7119L18.8343 17.2724C18.8332 17.2081 18.8331 17.1761 18.8336 17.1445C18.8383 16.8247 18.9195 16.5104 19.0706 16.2286C19.0856 16.2007 19.1018 16.1726 19.1338 16.1171C19.166 16.0615 19.1827 16.0337 19.1994 16.0068C19.3681 15.7349 19.5995 15.5074 19.8744 15.3435C19.9012 15.3275 19.9289 15.3122 19.9838 15.2818L19.9857 15.2809L20.3472 15.0805C20.9488 14.7472 21.2501 14.5801 21.4689 14.3427C21.6625 14.1327 21.8085 13.8839 21.8978 13.6126C21.9981 13.3077 21.9973 12.9658 21.9958 12.2861L21.9945 11.7119C21.9929 11.0287 21.9921 10.6874 21.891 10.3828C21.8015 10.1133 21.6555 9.86561 21.463 9.65685C21.2457 9.42111 20.9475 9.25526 20.3517 8.92378L20.3499 8.92293Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M8.00033 12C8.00033 14.2091 9.79119 16 12.0003 16C14.2095 16 16.0003 14.2091 16.0003 12C16.0003 9.79082 14.2095 7.99996 12.0003 7.99996C9.79119 7.99996 8.00033 9.79082 8.00033 12Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g> </g></svg>\n\
            </div>\n\
            <div class="home-bottom-item with-text" onmouseenter="home_page.hoverBottomMenu(5)" onclick="home_page.clickBottomMenu()">\n\
              <svg class="home-bottom-menu-item-icon" xmlns="http://www.w3.org/000/svg" width="189" height="151" viewBox="0 0 189 151" fill="none"><g clip-path="url(#clip0_21_5034)"><path d="M24.3601 94.7C0.330059 91.86 -9.24994 59.73 11.0401 44.32C19.6401 37.79 25.6001 39.12 35.3101 39.14C53.3401 39.17 71.3801 39.05 89.4101 39.12L114.99 0.72L116.66 0L188.73 150.98H142.75C141.41 147.72 140.08 144.29 138.54 141.13C127.11 117.8 115.71 91.8 103.32 69.29C95.9501 55.91 81.0401 54.11 71.5001 66.35L52.8501 94.71H82.7001C95.3701 94.71 108.83 109.24 109.17 121.81C109.51 134.31 98.0101 150.98 84.7601 150.98H13.0401L50.7901 94.71C42.4301 93.99 32.5401 95.68 24.3701 94.71L24.3601 94.7Z" fill="white"/></g><defs><clipPath id="clip0_21_5034"><rect width="188.73" height="150.98" fill="white"/></clipPath></defs></svg>\n\
              <div>Stararcs Proxy</div>\n\
            </div>\n\
            <div class="home-bottom-item" onmouseenter="home_page.hoverBottomMenu(6)" onclick="home_page.clickBottomMenu()">\n\
              <svg class="home-bottom-menu-item-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="48" height="48" fill="white" fill-opacity="0.01"></rect> <path d="M4 24C4 35.0457 12.9543 44 24 44V44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36V36" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>\n\
            </div>\n\
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
        <div id="menu-container">\n\
          <div class="top-menu-items-container">\n\
            <div\n\
              class="menu-item-container menu-top-item playlist-dependant"\n\
              onmouseenter="home_page.hoverMainMenu(0)"\n\
              onclick="home_page.clickMainMenu()"\n\
            >\n\
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 20H14M5 18H19C20.1046 18 21 17.1046 21 16V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V16C3 17.1046 3.89543 18 5 18Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>\n\
              <span class="home-menu-item-title" data-word_code="live_tv"\n\
                >Live TV</span\n\
              >\n\
              <span class="categories-count" id="live-categories-count">0 Categories</span>\n\
            </div>\n\
            <div\n\
              class="menu-item-container menu-top-item playlist-dependant"\n\
              onmouseenter="home_page.hoverMainMenu(1)"\n\
              onclick="home_page.clickMainMenu()"\n\
            >\n\
              <svg fill="#ffffff" viewBox="-2 -2 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" class="jam jam-movie"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M6 15v3h8v-7H6v4zm-2-2v-2H2V9h2V7H2v6h2zm0 2H2v1a2 2 0 0 0 2 2v-3zm14-2V7h-2v2h2v2h-2v2h2zm0 2h-2v3a2 2 0 0 0 2-2v-1zm-4-8V2H6v7h8V7zm4-2V4a2 2 0 0 0-2-2v3h2zM4 5V2a2 2 0 0 0-2 2v1h2zm0-5h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"></path></g></svg>\n\
              <span class="home-menu-item-title" data-word_code="movies"\n\
                >Movies</span\n\
              >\n\
              <span class="categories-count" id="movies-categories-count">0 Categories</span>\n\
            </div>\n\
            <div\n\
              class="menu-item-container menu-top-item playlist-dependant"\n\
              onmouseenter="home_page.hoverMainMenu(2)"\n\
              onclick="home_page.clickMainMenu()"\n\
            >\n\
              <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css">  .st0{fill:#ffffff;}  </style> <g> <path class="st0" d="M90.734,210.977c22.547,0.016,43.172-9.203,57.922-24c14.781-14.734,24-35.359,24-57.906 s-9.219-43.188-24-57.938c-14.75-14.781-35.375-24-57.922-23.984c-22.547-0.016-43.172,9.203-57.922,24 c-14.781,14.734-24,35.375-23.984,57.922c-0.016,22.547,9.203,43.156,23.984,57.906C47.563,201.773,68.188,210.992,90.734,210.977z M66.109,104.43c6.375-6.344,14.938-10.188,24.625-10.203c9.703,0.016,18.25,3.859,24.641,10.203 c6.328,6.375,10.188,14.938,10.188,24.641c0,9.688-3.859,18.234-10.188,24.625c-6.391,6.328-14.938,10.188-24.641,10.203 c-9.688-0.016-18.25-3.875-24.625-10.203c-6.344-6.391-10.188-14.938-10.203-24.625C55.922,119.367,59.766,110.805,66.109,104.43z"></path> <path class="st0" d="M270.219,210.977c22.547,0.016,43.172-9.203,57.922-24c14.781-14.75,24-35.359,23.984-57.906 c0.016-22.547-9.203-43.188-23.984-57.922c-14.75-14.797-35.375-24.016-57.922-24c-22.531-0.016-43.172,9.203-57.922,23.984 c-14.797,14.75-24,35.391-23.984,57.938c-0.016,22.547,9.203,43.172,23.984,57.906 C227.047,201.773,247.688,210.992,270.219,210.977z M245.594,104.43c6.375-6.344,14.938-10.188,24.625-10.203 c9.688,0.016,18.25,3.859,24.625,10.203c6.344,6.375,10.188,14.938,10.203,24.641c-0.016,9.688-3.859,18.234-10.203,24.625 c-6.375,6.328-14.938,10.188-24.625,10.203c-9.688-0.016-18.25-3.875-24.625-10.203c-6.344-6.391-10.188-14.938-10.203-24.625 C235.406,119.367,239.25,110.805,245.594,104.43z"></path> <path class="st0" d="M313.047,224.195H45.953c-12.625-0.016-24.234,5.172-32.5,13.453C5.172,245.914,0,257.523,0,270.148v148.75 c0,12.625,5.172,24.25,13.453,32.5c8.266,8.281,19.875,13.469,32.5,13.453h267.094c12.609,0.016,24.234-5.172,32.484-13.453 c8.297-8.25,13.484-19.875,13.469-32.5v-148.75c0.016-12.625-5.172-24.234-13.469-32.5 C337.281,229.367,325.656,224.18,313.047,224.195z M317.813,418.898c-0.031,1.391-0.516,2.453-1.406,3.375 c-0.922,0.891-1.984,1.375-3.359,1.391H45.953c-1.391-0.016-2.438-0.5-3.359-1.391c-0.891-0.922-1.375-1.984-1.406-3.375v-148.75 c0.031-1.375,0.516-2.438,1.406-3.375c0.922-0.875,1.969-1.375,3.359-1.391h267.094c1.375,0.016,2.438,0.516,3.359,1.391 c0.891,0.938,1.375,2,1.406,3.375V418.898z"></path> <path class="st0" d="M493.875,236.414c-5.828-3.516-12.531-5.359-19.125-5.359c-6.063,0-12.063,1.484-17.609,4.422l-73.734,39.313 v46.719l87.406-46.594v139.297l-87.406-46.672v46.734l73.734,39.297c5.547,2.953,11.547,4.422,17.609,4.422 c6.594,0,13.297-1.766,19.188-5.297C505.125,445.93,512,433.805,512,420.68V268.367C512,255.242,505.125,243.117,493.875,236.414z"></path> </g> </g></svg>\n\
              <span class="home-menu-item-title" data-word_code="series"\n\
                >Series</span\n\
              >\n\
              <span class="categories-count" id="series-categories-count">0 Categories</span>\n\
            </div>\n\
            <div class="home-user-info-container menu-top-item">\n\
              <div class="home-page-bottom-info-container">\n\
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
              </div>\n\
              <div class="home-page-bottom-info-container">\n\
                <div class="home-page-bottom-info-item">\n\
                  <div class="home-page-bottom-info-title">Playlist expires in:</div>\n\
                  <div class="home-page-bottom-info-value playlist-will-expire-in">Unknown</div>\n\
                </div>\n\
              </div>\n\
              <div id="home-calendar" style="height: 23rem;"></div>\n\
            </div>\n\
          </div>\n\
          <div class="right-menu-items">\n\
            <div\n\
                class="menu-item-container small-menu-item playlist-dependant"\n\
                onmouseenter="home_page.hoverMainMenu(3)"\n\
                onclick="home_page.clickMainMenu()"\n\
              >\n\
                <svg fill="#ffffff" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 74.999 74.999" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M33.511,71.013c15.487,0,28.551-10.563,32.375-24.859h9.113L61.055,22L47.111,46.151h8.006 c-3.44,8.563-11.826,14.628-21.605,14.628c-12.837,0-23.28-10.443-23.28-23.28c0-12.836,10.443-23.28,23.28-23.28 c6.604,0,12.566,2.768,16.809,7.196l5.258-9.108c-5.898-5.176-13.619-8.32-22.065-8.32C15.034,3.987,0,19.019,0,37.5 C-0.002,55.981,15.03,71.013,33.511,71.013z"></path> </g> </g></svg>\n\
                <span class="home-menu-item-title" data-word_code="replay"\n\
                  >Replay</span\n\
                >\n\
              </div>\n\
              <div\n\
                class="menu-item-container small-menu-item"\n\
                onmouseenter="home_page.hoverMainMenu(4)"\n\
                onclick="home_page.clickMainMenu()"\n\
              >\n\
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18 7H18.01M15 7H15.01M18 17H18.01M15 17H15.01M6 10H18C18.9319 10 19.3978 10 19.7654 9.84776C20.2554 9.64477 20.6448 9.25542 20.8478 8.76537C21 8.39782 21 7.93188 21 7C21 6.06812 21 5.60218 20.8478 5.23463C20.6448 4.74458 20.2554 4.35523 19.7654 4.15224C19.3978 4 18.9319 4 18 4H6C5.06812 4 4.60218 4 4.23463 4.15224C3.74458 4.35523 3.35523 4.74458 3.15224 5.23463C3 5.60218 3 6.06812 3 7C3 7.93188 3 8.39782 3.15224 8.76537C3.35523 9.25542 3.74458 9.64477 4.23463 9.84776C4.60218 10 5.06812 10 6 10ZM6 20H18C18.9319 20 19.3978 20 19.7654 19.8478C20.2554 19.6448 20.6448 19.2554 20.8478 18.7654C21 18.3978 21 17.9319 21 17C21 16.0681 21 15.6022 20.8478 15.2346C20.6448 14.7446 20.2554 14.3552 19.7654 14.1522C19.3978 14 18.9319 14 18 14H6C5.06812 14 4.60218 14 4.23463 14.1522C3.74458 14.3552 3.35523 14.7446 3.15224 15.2346C3 15.6022 3 16.0681 3 17C3 17.9319 3 18.3978 3.15224 18.7654C3.35523 19.2554 3.74458 19.6448 4.23463 19.8478C4.60218 20 5.06812 20 6 20Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>\n\
                <span class="home-menu-item-title" data-word_code="playlist"\n\
                  >PlayList</span\n\
                >\n\
              </div>\n\
              <div\n\
                class="menu-item-container small-menu-item"\n\
                onmouseenter="home_page.hoverMainMenu(5)"\n\
                onclick="home_page.clickMainMenu()"\n\
              >\n\
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M12 6V18" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>\n\
                <span class="home-menu-item-title" data-word_code="add-code-playlist"\n\
                  >Add Code Playlist</span\n\
                >\n\
              </div>\n\
              <div\n\
                class="menu-item-container small-menu-item playlist-dependant"\n\
                onmouseenter="home_page.hoverMainMenu(6)"\n\
                onclick="home_page.clickMainMenu()"\n\
              >\n\
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11.245 4.174C11.4765 3.50808 11.5922 3.17513 11.7634 3.08285C11.9115 3.00298 12.0898 3.00298 12.238 3.08285C12.4091 3.17513 12.5248 3.50808 12.7563 4.174L14.2866 8.57639C14.3525 8.76592 14.3854 8.86068 14.4448 8.93125C14.4972 8.99359 14.5641 9.04218 14.6396 9.07278C14.725 9.10743 14.8253 9.10947 15.0259 9.11356L19.6857 9.20852C20.3906 9.22288 20.743 9.23007 20.8837 9.36432C21.0054 9.48051 21.0605 9.65014 21.0303 9.81569C20.9955 10.007 20.7146 10.2199 20.1528 10.6459L16.4387 13.4616C16.2788 13.5829 16.1989 13.6435 16.1501 13.7217C16.107 13.7909 16.0815 13.8695 16.0757 13.9507C16.0692 14.0427 16.0982 14.1387 16.1563 14.3308L17.506 18.7919C17.7101 19.4667 17.8122 19.8041 17.728 19.9793C17.6551 20.131 17.5108 20.2358 17.344 20.2583C17.1513 20.2842 16.862 20.0829 16.2833 19.6802L12.4576 17.0181C12.2929 16.9035 12.2106 16.8462 12.1211 16.8239C12.042 16.8043 11.9593 16.8043 11.8803 16.8239C11.7908 16.8462 11.7084 16.9035 11.5437 17.0181L7.71805 19.6802C7.13937 20.0829 6.85003 20.2842 6.65733 20.2583C6.49056 20.2358 6.34626 20.131 6.27337 19.9793C6.18915 19.8041 6.29123 19.4667 6.49538 18.7919L7.84503 14.3308C7.90313 14.1387 7.93218 14.0427 7.92564 13.9507C7.91986 13.8695 7.89432 13.7909 7.85123 13.7217C7.80246 13.6435 7.72251 13.5829 7.56262 13.4616L3.84858 10.6459C3.28678 10.2199 3.00588 10.007 2.97101 9.81569C2.94082 9.65014 2.99594 9.48051 3.11767 9.36432C3.25831 9.23007 3.61074 9.22289 4.31559 9.20852L8.9754 9.11356C9.176 9.10947 9.27631 9.10743 9.36177 9.07278C9.43726 9.04218 9.50414 8.99359 9.55657 8.93125C9.61593 8.86068 9.64887 8.76592 9.71475 8.57639L11.245 4.174Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>\n\
                <span class="home-menu-item-title" data-word_code="favorites-channels"\n\
                  >Favorite Channels</span\n\
                >\n\
              </div>\n\
              <div\n\
                class="menu-item-container small-menu-item"\n\
                onmouseenter="home_page.hoverMainMenu(7)"\n\
                onclick="home_page.clickMainMenu()"\n\
              >\n\
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 9V18C4 19.1046 4.89543 20 6 20H9M4 9V6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V9M4 9H9M20 9H9M20 9V14.5M9 9V14.5M9 20H18C19.1046 20 20 19.1046 20 18V14.5M9 20V14.5M9 14.5H20" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>\n\
                <span class="home-menu-item-title" data-word_code="live_tv_layout"\n\
                  >Live TV Layout</span\n\
                >\n\
              </div>\n\
            </div>\n\
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
          <div class="settings-page-option" onclick="settings_page.handleMenuClick()" onmouseenter="settings_page.hoverSettingsItem(2)" data-word_code="theme">Theme</div>\n\
          <div class="settings-page-option" onclick="settings_page.handleMenuClick()" onmouseenter="settings_page.hoverSettingsItem(3)" data-word_code="parent_control">Parental Control</div>\n\
          <div class="settings-page-option" onclick="settings_page.handleMenuClick()" onmouseenter="settings_page.hoverSettingsItem(4)" data-word_code="clear_cache">Clear Cache</div>\n\
          <div class="settings-page-option" onclick="settings_page.handleMenuClick()" onmouseenter="settings_page.hoverSettingsItem(5)" data-word_code="clear_watch_lists">Clear Watch Lists</div>\n\
          <div class="settings-page-option" onclick="settings_page.handleMenuClick()" onmouseenter="settings_page.hoverSettingsItem(6)" data-word_code="subtitle_settings">Subtitle Settings</div>\n\
          <div class="settings-page-option" onclick="settings_page.handleMenuClick()" onmouseenter="settings_page.hoverSettingsItem(7)" data-word_code="stream_format">Stream Format</div>\n\
          <div class="settings-page-option" onclick="settings_page.handleMenuClick()" onmouseenter="settings_page.hoverSettingsItem(8)" data-word_code="toggle_tmdb">Toggle TMDB API</div>\n\
          <div class="settings-page-option" onclick="settings_page.handleMenuClick()" onmouseenter="settings_page.hoverSettingsItem(9)" data-word_code="toggle_home_favorites">Toggle Home Favorites</div>\n\
          <div class="settings-page-option" onclick="settings_page.handleMenuClick()" onmouseenter="settings_page.hoverSettingsItem(10)" data-word_code="live_initialization">Live Initialization</div>\n\
          <div class="settings-page-option" onclick="settings_page.handleMenuClick()" onmouseenter="settings_page.hoverSettingsItem(11)" data-word_code="live_layout">Live Layout</div>\n\
          <div class="settings-page-option" onclick="settings_page.handleMenuClick()" onmouseenter="settings_page.hoverSettingsItem(12)" data-word_code="smart_proxy">Stararcs Proxy</div>\n\
          <div class="settings-page-option" onclick="settings_page.handleMenuClick()" onmouseenter="settings_page.hoverSettingsItem(13)" data-word_code="load_on_demand">Load on Demand</div>\n\
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
                <img src="' +
  HOST +
  'app_src_min/images/subtitles-preview-bg.png" class="subtitle-settings-preview-bg" />\n\
                <div class="subtitle-settings-preview-text-wrapper">\n\
                  <div id="subtitle-settings-preview-text">This is how subtitles will look like</div>\n\
                </div>\n\
              </div>\n\
            </div>\n\
          </div>\n\
          <div class="setting-option-container" id="stream-format-settings">\n\
            <div class="setting-option-title-container">\n\
              <div class="setting-option-title" data-word_code="stream_format">Stream Format</div>\n\
            </div>\n\
            <div class="setting-option-description" data-word_code="stream_format_desc">Change the format of streaming, supporting many extensions.</div>\n\
            <div class="setting-option-body">\n\
              <div class="setting-select-options">\n\
                <div class="setting-select-option" data-word_code="default" onmouseenter="settings_page.hoverStreamFormatOption(0)" onclick="settings_page.handleMenuClick()">Default</div>\n\
                <div class="setting-select-option" onmouseenter="settings_page.hoverStreamFormatOption(1)" onclick="settings_page.handleMenuClick()">MPEGTS (.ts)</div>\n\
                <div class="setting-select-option" onmouseenter="settings_page.hoverStreamFormatOption(2)" onclick="settings_page.handleMenuClick()">HLS (.m3u8)</div>\n\
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
              <div class="account-page-info-item-value" id="playlist-username">Unknown</div>\n\
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
          CRPlayer is a general media player and it does not include any content, CRPlayer is not responsible for the content you use in the app.<br/> Please follow <span class="highlight website-url"></span> to add or manage playlists\n\
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
                <div class="channel-sidebar-suboption" onmouseenter="channel_page.hoverSidebarSubOptionItem(0)">Off</div>\n\
              </div>\n\
            </div>\n\
            <div id="channel-sidebar-audio-options-container">\n\
              <div class="channel-sidebar-options-title">Audio</div>\n\
              <div id="channel-sidebar-audio-options-wrapper">\n\
                <div class="channel-sidebar-suboption" onmouseenter="channel_page.hoverSidebarSubOptionItem(0)">Default</div>\n\
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
                    <img src="' +
  HOST +
  'app_src_min/images/layouts-previews/classic.png" />\n\
                  </div>\n\
                </div>\n\
                <div\n\
                  class="layout-setting-item"\n\
                  onmouseenter="layout_page.hoverMenuItem(1)"\n\
                  onclick="layout_page.changeLiveLayoutSetting(1)"\n\
                >\n\
                  <div>Classic (Compact)</div>\n\
                  <div class="layout-preview-img-container">\n\
                    <img src="' +
  HOST +
  'app_src_min/images/layouts-previews/classic-compact.png" />\n\
                  </div>\n\
                </div>\n\
                <div\n\
                  class="layout-setting-item"\n\
                  onmouseenter="layout_page.hoverMenuItem(2)"\n\
                  onclick="layout_page.changeLiveLayoutSetting(2)"\n\
                >\n\
                  <div>Normal</div>\n\
                  <div class="layout-preview-img-container">\n\
                    <img src="' +
  HOST +
  'app_src_min/images/layouts-previews/normal.png" />\n\
                  </div>\n\
                </div>\n\
                <div\n\
                  class="layout-setting-item"\n\
                  onmouseenter="layout_page.hoverMenuItem(3)"\n\
                  onclick="layout_page.changeLiveLayoutSetting(3)"\n\
                >\n\
                  <div>Normal (Compact)</div>\n\
                  <div class="layout-preview-img-container">\n\
                    <img src="' +
  HOST +
  'app_src_min/images/layouts-previews/normal-compact.png" />\n\
                  </div>\n\
                </div>\n\
                <div\n\
                  class="layout-setting-item"\n\
                  onmouseenter="layout_page.hoverMenuItem(4)"\n\
                  onclick="layout_page.changeLiveLayoutSetting(4)"\n\
                >\n\
                  <div>Modern</div>\n\
                  <div class="layout-preview-img-container">\n\
                    <img src="' +
  HOST +
  'app_src_min/images/layouts-previews/modern.png" />\n\
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
        <div id="loader-text" class="loader-text">Loading...</div>\n\
      </div>\n\
    </div>';

function createScriptElement(scriptData) {
  var script = document.createElement("script");
  script.src = scriptData.src;
  script.type = scriptData.type;
  script.onload = function () {
    console.log(scriptData.onSuccessMsg);
  };
  script.onerror = function () {
    console.error(scriptData.onFailMsg);
  };
  document.body.appendChild(script);
}

function getOSPlatform() {
  if (window.navigator.userAgent.toLowerCase().indexOf("web0s") !== -1)
    return "lg";
  else if (window.navigator.userAgent.toLowerCase().indexOf("tizen") !== -1)
    return "samsung";
  else if (
    window.navigator.userAgent.toLowerCase().indexOf("hisense") !== -1 ||
    window.navigator.userAgent.toLowerCase().indexOf("vidaa") !== -1
  )
    return "vidaa";
  else if (window.navigator.userAgent.toLowerCase().indexOf("titano") !== -1)
    return "titanos";
  else if (
    window.navigator.userAgent.toLowerCase().indexOf("zeasn") !== -1 ||
    window.navigator.userAgent.toLowerCase().indexOf("whale") !== -1 ||
    window.navigator.userAgent.toLowerCase().indexOf("philips") !== -1
  )
    return "zeasn";
  else if (window.navigator.userAgent.toLowerCase().indexOf("windows") !== -1)
    return "windows";
}

function loadPlatformSDK() {
  // Conditionally load platform SDK
  switch (platform) {
    case "samsung":
      createScriptElement({
        src: "$WEBAPIS/webapis/webapis.js",
        type: "text/javascript",
        onSuccessMsg: "webapis loaded successfully",
        onFailMsg: "Failed to load webapis",
      });
      break;
    case "lg":
      createScriptElement({
        src: "app_src_min/js/webOSTVjs-1.2.0/webOSTV.js",
        type: "text/javascript",
        onSuccessMsg: "WebOS loaded successfully",
        onFailMsg: "Failed to load WebOS",
      });
      break;
    case "zeasn":
      createScriptElement({
        src: "https://cache.zeasn.tv/webstatic/homepage_web/deviceinfo/zeasn_deviceInfo_sdk.js",
        type: "text/javascript",
        onSuccessMsg: "Zeasn SDK loaded successfully",
        onFailMsg: "Failed to load Zeasn SDK",
      });
      break;
    case "titanos":
      createScriptElement({
        src: "https://partners.titanos.tv/static/device-info-sdk.js",
        type: "text/javascript",
        onSuccessMsg: "Titanos SDK loaded successfully",
        onFailMsg: "Failed to load Titanos SDK",
      });
      break;
  }
}


