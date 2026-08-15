

var platform = getOSPlatform();
loadPlatformSDK();

var app_environment = "production"; // development or production
if (app_environment == "development") {
  var STYLES = [
    "app_src/css/svg_icons.css",
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
    "app_src/css/stararcs_page.css",
    "app_src/css/pin_overlay.css",
    "app_src/css/category_page.css",
    "app_src/css/subtitle.css",
    "app_src/css/search_page.css",
    "app_src/css/static_keyboard.css",
    "app_src/css/media.css",
  ];
  var SCRIPTS = [
    "app_src/js/svg_icons.js",
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
    "app_src/js/stararcs_page.js",
    "app_src/js/turn_off_page.js",
    "app_src/js/parent_confirm_page.js",
    "app_src/js/pin_overlay.js",
    "app_src/js/srt_parser.js",
    "app_src/js/srt_operation.js",
    "app_src/js/catchup_page.js",
    "app_src/js/static_keyboard.js",
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
  var STYLES = ["app_src_min/css/application.min.css"];
  var SCRIPTS = ["app_src_min/js/application.min.js"];
}

// Stararcs proxy keys are now handled by clearStararcsConnectionKeys() in
// common.js, invoked from getPlayListDetail() in login_operation.js.

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
        <div id="no-internet-modal">\n\
          <div class="network-error-container">\n\
            <div class="network-error-title">No Internet Connection</div>\n\
            <div class="network-error-description">Please check your internet connection and try again.</div>\n\
            <div class="network-error-cta-btns">\n\
              <div class="network-error-cta-btn" onclick="login_page.clickNoInternetOption(0)" onmouseenter="login_page.hoverNoInternetOption(0)">Reload</div>\n\
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
    <div id="terms-modal" class="hide">\n\
      <div class="terms-modal-panel">\n\
        <div class="terms-modal-title">Welcome to CRPlayer</div>\n\
        <div class="terms-modal-body">\n\
          <p>Our products and services are designed for <span class="terms-modal-highlight">legal use only</span>. By accessing this application, you confirm you understand and agree to the following: You are permitted to use our services only for purposes such as:</p>\n\
          <ul class="terms-modal-list">\n\
            <li>Streaming your own personal media (Playlist, YouTube Playlist, etc...).</li>\n\
            <li>Accessing content from official, licensed providers (broadcasters, VOD services).</li>\n\
            <li>Managing internal, private streams for businesses, institutions, or live events.</li>\n\
            <li>Using legally available free-to-air public streams.</li>\n\
            <li>Software development and testing.</li>\n\
          </ul>\n\
          <div class="terms-modal-warning">\n\
            <p>You agree that you will <strong>NOT</strong> use our services for unauthorized streaming of copyrighted content.<br />You are solely responsible for ensuring your use complies with all applicable laws and copyrights.</p>\n\
          </div>\n\
          <p class="terms-modal-note">By clicking "Accept," you agree to our Terms and Conditions and confirm you will use this application and our products legally.</p>\n\
        </div>\n\
        <div class="terms-modal-footer">\n\
          <button class="terms-modal-accept-btn active" id="terms-modal-accept-btn" onclick="login_page.confirmTermsModal()">Accept legal terms</button>\n\
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
          <div class="settings-page-option" onclick="settings_page.handleMenuClick()" onmouseenter="settings_page.hoverSettingsItem(12)" data-word_code="load_on_demand">Load on Demand</div>\n\
          <div class="settings-page-option" onclick="settings_page.handleMenuClick()" onmouseenter="settings_page.hoverSettingsItem(13)" data-word_code="app_initialization">App Initialization</div>\n\
          <div class="settings-page-option" onclick="settings_page.handleMenuClick()" onmouseenter="settings_page.hoverSettingsItem(14)" data-word_code="player_clock">Player Clock</div>\n\
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
              <div id="parental-control-toggle" class="settings-page-toggle" onclick="settings_page.clickParentalControlOption(0)" onmouseenter="settings_page.hoverParentalControlOption(0)">\n\
                <div class="settings-page-toggle-label">Parental Control</div>\n\
                <div class="toggle-switch off" id="parental-control-toggle-value">\n\
                  <div class="toggle-switch-circle"></div>\n\
                </div>\n\
              </div>\n\
              <div id="settings-parental-control-change">\n\
                <div class="settings-parental-control-change-title">Change PIN</div>\n\
                <div class="settings-input-container" onclick="settings_page.clickParentalControlOption(1)">\n\
                  <div class="settings-input-label" data-word_code="new_password">New PIN</div>\n\
                  <input class="settings-input" id="settings-new-parental-password" type="password" value="" maxlength="4" onmouseenter="settings_page.hoverParentalControlOption(1)" />\n\
                </div>\n\
                <div class="settings-input-container" onclick="settings_page.clickParentalControlOption(2)">\n\
                  <div class="settings-input-label" data-word_code="confirm_new_password">Confirm New PIN</div>\n\
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
          <div class="setting-option-container" id="app-initialization-settings">\n\
            <div class="setting-option-title-container">\n\
              <div class="setting-option-title" data-word_code="app_initialization">App Initialization</div>\n\
            </div>\n\
            <div class="setting-option-description" data-word_code="app_initialization_desc">Choose how you want the application to start.<br />Playlist First: You will be prompted every time to choose the playlist before the app initializes.<br />Automatic: The app will automatically choose your last selected playlist, or the first playlist by default.</div>\n\
            <div class="setting-option-body">\n\
              <div class="setting-select-options">\n\
                <div class="setting-select-option" data-word_code="automatic" onmouseenter="settings_page.hoverAppInitializationOption(0)" onclick="settings_page.handleMenuClick()">Automatic</div>\n\
                <div class="setting-select-option" data-word_code="playlist_selection" onmouseenter="settings_page.hoverAppInitializationOption(1)" onclick="settings_page.handleMenuClick()">Playlist Selection</div>\n\
              </div>\n\
            </div>\n\
          </div>\n\
          <div class="setting-option-container" id="player-time-settings">\n\
            <div class="setting-option-title-container">\n\
              <div class="setting-option-title" data-word_code="player_timer">Player Clock</div>\n\
            </div>\n\
            <div class="setting-option-description" data-word_code="player_timer_desc">Enable this option to show the time on the top left corner of the player.</div>\n\
            <div class="setting-option-body">\n\
              <div id="player-timer">\n\
                <div class="settings-toggle-switch player-time-choice" onmouseenter="settings_page.hoverPlayerTimeOption(0)" onclick="settings_page.handleMenuClick()">\n\
                  <div class="settings-toggle-switch-label" data-word_code="toggle-connection">Toggle Player Clock</div>\n\
                  <div class="settings-toggle-switch-value off">\n\
                    <div class="settings-toggle-switch-circle"></div>\n\
                  </div>\n\
                </div>\n\
              </div>\n\
            </div>\n\
          </div>\n\
        </div>\n\
      </div>\n\
      <div id="stararcs-page" style="display: none;">\n\
        <div class="stararcs-hero">\n\
          <div class="stararcs-title"><svg class="stararcs-logo" width="171" height="36" viewBox="0 0 171 36" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_3431_10442)"><path d="M62.8811 8.54109C62.1129 8.54109 61.5361 8.76046 61.1508 9.20158C60.7655 9.64031 60.574 10.2007 60.574 10.8826C60.574 11.4787 60.708 11.9747 60.9785 12.3705C61.2489 12.7687 61.6821 13.0238 62.2804 13.1359V14.5188C61.84 14.5188 61.4236 14.4187 61.0311 14.2208C60.6386 14.0229 60.294 13.7606 59.9948 13.4339C59.6957 13.1073 59.4612 12.7258 59.2912 12.2846C59.1213 11.8459 59.0352 11.3762 59.0352 10.8802C59.0352 10.327 59.1213 9.82391 59.2912 9.37087C59.4612 8.91783 59.6957 8.53156 59.9948 8.21204C60.294 7.89253 60.6434 7.64455 61.0407 7.4681C61.438 7.29166 61.8664 7.20105 62.3211 7.20105H70.5419V8.54109H62.8763H62.8811ZM66.9161 19.1327C67.6844 19.1327 68.2611 18.9133 68.6464 18.4722C69.0318 18.0335 69.2232 17.4731 69.2232 16.7912C69.2232 16.1951 69.0868 15.7039 68.8188 15.3129C68.5483 14.9218 68.1151 14.6714 67.5168 14.557V13.1526C67.9572 13.1526 68.3736 13.2527 68.7661 13.4506C69.1586 13.6485 69.5032 13.9108 69.8024 14.2375C70.1015 14.5641 70.3361 14.9504 70.506 15.3963C70.6759 15.8422 70.7621 16.3072 70.7621 16.7888C70.7621 17.342 70.6735 17.8451 70.494 18.2981C70.3169 18.7512 70.0776 19.1375 69.7784 19.457C69.4793 19.7765 69.1299 20.0245 68.7326 20.2009C68.3329 20.3774 67.9141 20.468 67.4737 20.468H59.2529V19.1279H66.9185L66.9161 19.1327Z" fill="white"/><path d="M85.1496 7.19879V8.53884H80.0688V20.4729H78.573V8.53884H73.5137V7.19879H85.1496Z" fill="white"/><path d="M98.3003 20.4753H96.6346L91.2545 9.69054L86.6212 19.1352H92.8987L93.8177 20.4753H84.2734L91.2545 6.50018L98.3003 20.4753Z" fill="white"/><path d="M106.863 13.539H108.911C109.254 13.539 109.545 13.4603 109.787 13.3053C110.029 13.1503 110.232 12.95 110.395 12.7092C110.558 12.4684 110.675 12.2061 110.747 11.9223C110.819 11.6386 110.855 11.3691 110.855 11.114C110.855 10.8303 110.809 10.537 110.716 10.2318C110.622 9.92657 110.491 9.64998 110.321 9.402C110.151 9.15402 109.94 8.94896 109.691 8.78443C109.443 8.62229 109.16 8.53884 108.849 8.53884H102.189V20.4729H100.693V7.19879H109.127C109.567 7.19879 109.988 7.30132 110.386 7.50638C110.783 7.71144 111.132 7.98803 111.431 8.33616C111.731 8.68429 111.967 9.09918 112.147 9.58083C112.324 10.0625 112.415 10.5799 112.415 11.1331C112.415 11.629 112.329 12.1012 112.159 12.547C111.989 12.9929 111.757 13.3911 111.465 13.7393C111.173 14.0874 110.831 14.364 110.441 14.569C110.048 14.7741 109.632 14.8766 109.191 14.8766L112.032 20.4705H110.431L106.865 13.5366L106.863 13.539Z" fill="white"/><path d="M127.812 20.4753H126.146L120.766 9.69054L116.132 19.1352H122.41L123.329 20.4753H113.785L120.766 6.50018L127.812 20.4753Z" fill="#C1272D"/><path d="M136.374 13.539H138.423C138.765 13.539 139.057 13.4603 139.298 13.3053C139.54 13.1503 139.744 12.95 139.906 12.7092C140.069 12.4684 140.186 12.2061 140.258 11.9223C140.33 11.6386 140.366 11.3691 140.366 11.114C140.366 10.8303 140.32 10.537 140.227 10.2318C140.134 9.92657 140.002 9.64998 139.832 9.402C139.662 9.15402 139.452 8.94896 139.203 8.78443C138.954 8.62229 138.671 8.53884 138.36 8.53884H131.7V20.4729H130.204V7.19879H138.638C139.078 7.19879 139.499 7.30132 139.897 7.50638C140.294 7.71144 140.643 7.98803 140.943 8.33616C141.242 8.68429 141.479 9.09918 141.658 9.58083C141.835 10.0625 141.926 10.5799 141.926 11.1331C141.926 11.629 141.84 12.1012 141.67 12.547C141.5 12.9929 141.268 13.3911 140.976 13.7393C140.684 14.0874 140.342 14.364 139.952 14.569C139.559 14.7741 139.143 14.8766 138.703 14.8766L141.543 20.4705H139.942L136.376 13.5366L136.374 13.539Z" fill="#C1272D"/><path d="M144.678 11.2308C145.035 10.4153 145.514 9.70713 146.119 9.10387C146.724 8.50061 147.44 8.02372 148.266 7.66844C149.091 7.31317 149.975 7.13672 150.913 7.13672C151.595 7.13672 152.251 7.2321 152.878 7.42285C153.505 7.6136 154.081 7.88781 154.608 8.24071C155.134 8.59599 155.608 9.01326 156.027 9.49491C156.446 9.97657 156.793 10.5011 157.063 11.0686L155.867 11.834C155.654 11.3667 155.378 10.9327 155.046 10.5369C154.711 10.1411 154.33 9.79296 153.904 9.49491C153.478 9.19686 153.012 8.96557 152.507 8.80343C152.002 8.64129 151.477 8.55783 150.937 8.55783C150.211 8.55783 149.52 8.70328 148.866 8.99418C148.211 9.28508 147.641 9.67136 147.158 10.153C146.674 10.6347 146.289 11.1998 146.004 11.8436C145.719 12.4897 145.578 13.1598 145.578 13.8536C145.578 14.5475 145.719 15.2342 146.004 15.8637C146.289 16.4956 146.672 17.0511 147.158 17.5328C147.641 18.0145 148.208 18.3983 148.854 18.6821C149.503 18.9658 150.19 19.1065 150.915 19.1065C151.413 19.1065 151.896 19.0398 152.368 18.9038C152.837 18.7703 153.275 18.5819 153.682 18.3411C154.089 18.1003 154.457 17.8118 154.792 17.4803C155.127 17.1489 155.407 16.7746 155.635 16.3644L156.659 17.4064C156.061 18.3435 155.268 19.097 154.278 19.6716C153.289 20.2463 152.167 20.5324 150.915 20.5324C149.975 20.5324 149.094 20.356 148.268 20.0007C147.442 19.6454 146.727 19.1685 146.121 18.5653C145.516 17.962 145.035 17.2538 144.681 16.4383C144.324 15.6229 144.147 14.7549 144.147 13.8322C144.147 12.9094 144.324 12.0415 144.681 11.226L144.678 11.2308Z" fill="#C1272D"/><path d="M163.233 8.54109C162.464 8.54109 161.888 8.76046 161.502 9.20158C161.117 9.64031 160.926 10.2007 160.926 10.8826C160.926 11.4787 161.06 11.9747 161.33 12.3705C161.6 12.7687 162.034 13.0238 162.632 13.1359V14.5188C162.192 14.5188 161.775 14.4187 161.383 14.2208C160.99 14.0229 160.646 13.7606 160.346 13.4339C160.047 13.1073 159.813 12.7258 159.643 12.2846C159.473 11.8459 159.387 11.3762 159.387 10.8802C159.387 10.327 159.473 9.82391 159.643 9.37087C159.813 8.91783 160.047 8.53156 160.346 8.21204C160.646 7.89253 160.995 7.64455 161.392 7.4681C161.79 7.29166 162.218 7.20105 162.673 7.20105H170.893V8.54109H163.228H163.233ZM167.268 19.1327C168.036 19.1327 168.613 18.9133 168.998 18.4722C169.383 18.0335 169.575 17.4731 169.575 16.7912C169.575 16.1951 169.438 15.7039 169.17 15.3129C168.9 14.9218 168.467 14.6714 167.868 14.557V13.1526C168.309 13.1526 168.725 13.2527 169.118 13.4506C169.51 13.6485 169.855 13.9108 170.154 14.2375C170.453 14.5641 170.688 14.9504 170.858 15.3963C171.027 15.8422 171.114 16.3072 171.114 16.7888C171.114 17.342 171.025 17.8451 170.846 18.2981C170.668 18.7512 170.429 19.1375 170.13 19.457C169.831 19.7765 169.481 20.0245 169.084 20.2009C168.684 20.3774 168.266 20.468 167.825 20.468H159.604V19.1279H167.27L167.268 19.1327Z" fill="#C1272D"/><path d="M83.8162 28.1655C83.8162 28.0249 83.7971 27.9009 83.7588 27.7936C83.7205 27.6863 83.6583 27.5885 83.5721 27.5003C83.486 27.4121 83.3687 27.331 83.2203 27.2547C83.0719 27.1784 82.8877 27.1021 82.6675 27.0282C82.4521 26.9566 82.2558 26.8756 82.0835 26.7897C81.9112 26.7039 81.7628 26.6037 81.6384 26.4917C81.5139 26.3796 81.4206 26.2485 81.356 26.0959C81.2914 25.9433 81.2579 25.7692 81.2579 25.5665C81.2579 25.3638 81.2938 25.1898 81.3632 25.0276C81.4326 24.8655 81.5331 24.7248 81.6647 24.608C81.7963 24.4911 81.9495 24.4005 82.1242 24.3362C82.2989 24.2718 82.4952 24.2408 82.7106 24.2408C83.0169 24.2408 83.2802 24.3099 83.5027 24.4458C83.7253 24.5841 83.8952 24.7677 84.0149 24.9966C84.1345 25.2279 84.192 25.4855 84.192 25.7692H83.7923C83.7923 25.5474 83.7516 25.3495 83.6679 25.1755C83.5841 25.0014 83.462 24.8655 83.2993 24.7654C83.1366 24.6652 82.9403 24.6151 82.7106 24.6151C82.4808 24.6151 82.287 24.6581 82.129 24.7439C81.971 24.8297 81.8562 24.9442 81.7772 25.0849C81.6982 25.2255 81.6599 25.3829 81.6599 25.5546C81.6599 25.6762 81.6791 25.7883 81.7174 25.8932C81.7557 25.9957 81.8203 26.0911 81.9088 26.1769C81.9974 26.2628 82.1146 26.3462 82.2582 26.4201C82.4018 26.4941 82.5789 26.568 82.7895 26.6371C83.0217 26.7087 83.2275 26.7921 83.4046 26.8827C83.5817 26.9733 83.7325 27.0806 83.8521 27.1999C83.9742 27.3191 84.0651 27.4574 84.125 27.6147C84.1872 27.7721 84.2159 27.9533 84.2159 28.1608C84.2159 28.3682 84.18 28.5566 84.1058 28.7211C84.0316 28.8856 83.9311 29.0263 83.7971 29.1432C83.6631 29.26 83.5075 29.3482 83.3256 29.4078C83.1437 29.4698 82.9451 29.4984 82.7297 29.4984C82.5358 29.4984 82.3444 29.4698 82.1553 29.4102C81.9663 29.3506 81.7916 29.26 81.6336 29.136C81.4756 29.012 81.3512 28.8523 81.2555 28.6567C81.1621 28.4612 81.1143 28.2299 81.1143 27.9605H81.5211C81.5211 28.1727 81.557 28.3539 81.6264 28.5041C81.6958 28.652 81.7915 28.7736 81.9064 28.8618C82.0237 28.9524 82.1529 29.0168 82.2965 29.0597C82.4401 29.1002 82.5837 29.1217 82.7297 29.1217C82.9499 29.1217 83.1413 29.0812 83.3041 29.0025C83.4644 28.9238 83.5889 28.8117 83.6774 28.6687C83.766 28.5256 83.8091 28.3587 83.8091 28.1655H83.8162Z" fill="white"/><path d="M85.1401 24.3094H85.4919L85.5422 27.1994V29.4288H85.1401V24.3094ZM85.2646 24.3094H85.6714L87.227 28.8089L88.7898 24.3094H89.1895L87.3874 29.4288H87.0763L85.267 24.3094H85.2646ZM88.9646 24.3094H89.3211V29.4288H88.9191V27.1994L88.9646 24.3094Z" fill="white"/><path d="M91.9882 24.6194L90.5092 29.4288H90.0928L91.7274 24.3094H92.0122L91.9882 24.6194ZM93.0867 27.6214V27.9981H90.7725V27.6214H93.0867ZM93.3189 29.4288L91.8374 24.6194L91.8207 24.3094H92.1031L93.7377 29.4288H93.3213H93.3189Z" fill="white"/><path d="M94.5029 24.3094H95.9101C96.2117 24.3094 96.4725 24.3667 96.6927 24.4835C96.9129 24.6003 97.0828 24.7696 97.2025 24.9938C97.3221 25.2179 97.382 25.4921 97.382 25.8188C97.382 26.0596 97.3389 26.279 97.2527 26.4769C97.1666 26.6748 97.0493 26.8369 96.9009 26.9681C96.7525 27.0992 96.5778 27.1898 96.3744 27.2399L96.2428 27.2995H94.7757L94.7685 26.9228H95.9747C96.1973 26.9228 96.384 26.8703 96.5324 26.7678C96.6807 26.6653 96.7908 26.5293 96.865 26.3601C96.9392 26.1908 96.9751 26.0119 96.9751 25.8188C96.9751 25.5875 96.9344 25.3848 96.853 25.2155C96.7717 25.0462 96.652 24.9151 96.4941 24.8245C96.3361 24.7339 96.1399 24.6886 95.9077 24.6886H94.9026V29.4312H94.5005V24.3118L94.5029 24.3094ZM97.1378 29.4288L96.0346 27.1398H96.4653L97.5662 29.3835V29.4288H97.1402H97.1378Z" fill="white"/><path d="M101.419 24.3094V24.6862H98.0991V24.3094H101.419ZM99.9539 24.3094V29.4288H99.5542V24.3094H99.9539Z" fill="white"/><path d="M105.364 27.3468H104.145V26.97H105.364C105.615 26.97 105.818 26.92 105.974 26.8198C106.129 26.7197 106.242 26.5862 106.314 26.4145C106.385 26.2452 106.421 26.0544 106.421 25.8422C106.421 25.63 106.385 25.4416 106.314 25.2652C106.242 25.0887 106.129 24.9481 105.974 24.8408C105.818 24.7335 105.615 24.681 105.364 24.681H104.272V29.4236H103.87V24.3043H105.364C105.679 24.3043 105.945 24.3686 106.163 24.4974C106.381 24.6262 106.546 24.805 106.656 25.0363C106.768 25.2652 106.823 25.5322 106.823 25.8351C106.823 26.1379 106.768 26.4192 106.658 26.6458C106.548 26.8723 106.383 27.044 106.168 27.1632C105.952 27.2824 105.682 27.342 105.364 27.342V27.3468Z" fill="white"/><path d="M107.757 24.3094H109.165C109.466 24.3094 109.727 24.3667 109.947 24.4835C110.167 24.6003 110.337 24.7696 110.457 24.9938C110.577 25.2179 110.636 25.4921 110.636 25.8188C110.636 26.0596 110.593 26.279 110.507 26.4769C110.421 26.6748 110.304 26.8369 110.155 26.9681C110.007 27.0992 109.832 27.1898 109.629 27.2399L109.497 27.2995H108.03L108.023 26.9228H109.229C109.452 26.9228 109.638 26.8703 109.787 26.7678C109.935 26.6653 110.045 26.5293 110.119 26.3601C110.194 26.1908 110.23 26.0119 110.23 25.8188C110.23 25.5875 110.189 25.3848 110.107 25.2155C110.026 25.0462 109.906 24.9151 109.748 24.8245C109.591 24.7339 109.394 24.6886 109.162 24.6886H108.157V29.4312H107.755V24.3118L107.757 24.3094ZM110.392 29.4288L109.289 27.1398H109.72L110.821 29.3835V29.4288H110.395H110.392Z" fill="white"/><path d="M114.914 26.3169V27.4233C114.914 27.7642 114.875 28.0623 114.799 28.3222C114.722 28.5821 114.612 28.7967 114.471 28.9707C114.33 29.1448 114.155 29.276 113.952 29.3666C113.748 29.4572 113.516 29.5025 113.26 29.5025C113.004 29.5025 112.777 29.4572 112.573 29.3666C112.37 29.276 112.195 29.1448 112.049 28.9707C111.903 28.7967 111.79 28.5821 111.712 28.3222C111.633 28.0623 111.594 27.7642 111.594 27.4233V26.3169C111.594 25.9783 111.633 25.6802 111.712 25.4203C111.788 25.1604 111.901 24.9435 112.044 24.7694C112.188 24.5953 112.362 24.4642 112.566 24.3736C112.769 24.283 112.999 24.2377 113.253 24.2377C113.506 24.2377 113.739 24.283 113.944 24.3736C114.148 24.4642 114.325 24.5953 114.471 24.7694C114.617 24.9435 114.727 25.1604 114.804 25.4203C114.88 25.6802 114.916 25.9783 114.916 26.3169H114.914ZM114.516 27.4233V26.3097C114.516 26.0284 114.488 25.7828 114.433 25.5729C114.378 25.3631 114.296 25.1891 114.191 25.0484C114.086 24.9077 113.954 24.8028 113.796 24.7312C113.638 24.6597 113.456 24.6263 113.253 24.6263C113.049 24.6263 112.877 24.6621 112.721 24.7312C112.566 24.8004 112.434 24.9077 112.327 25.0484C112.219 25.1891 112.138 25.3631 112.082 25.5729C112.025 25.7828 111.999 26.0284 111.999 26.3097V27.4233C111.999 27.707 112.027 27.9526 112.082 28.1624C112.14 28.3723 112.221 28.5487 112.331 28.6894C112.441 28.8301 112.573 28.9374 112.731 29.0065C112.887 29.0757 113.064 29.1114 113.262 29.1114C113.461 29.1114 113.648 29.0757 113.803 29.0065C113.959 28.9374 114.09 28.8301 114.196 28.6894C114.301 28.5487 114.382 28.3723 114.435 28.1624C114.49 27.9526 114.516 27.707 114.516 27.4233Z" fill="white"/><path d="M116.147 24.3094L117.329 26.465L118.507 24.3094H118.988L117.574 26.8298L119.026 29.4288H118.55L117.329 27.2041L116.104 29.4288H115.623L117.083 26.8298L115.669 24.3094H116.145H116.147Z" fill="white"/><path d="M119.867 24.3094L121.14 27.0897L122.421 24.3094H122.887L121.341 27.5022V29.4288H120.939V27.5022L119.393 24.3094H119.867Z" fill="white"/><path d="M127.685 28.1647C127.685 28.024 127.666 27.9 127.628 27.7927C127.59 27.6854 127.527 27.5877 127.441 27.4994C127.355 27.4112 127.238 27.3301 127.089 27.2538C126.941 27.1775 126.757 27.1012 126.537 27.0273C126.321 26.9558 126.125 26.8747 125.953 26.7889C125.78 26.703 125.632 26.6029 125.508 26.4908C125.383 26.3788 125.29 26.2476 125.225 26.095C125.161 25.9424 125.127 25.7683 125.127 25.5657C125.127 25.363 125.163 25.1889 125.232 25.0268C125.302 24.8646 125.402 24.724 125.534 24.6071C125.665 24.4903 125.819 24.3997 125.993 24.3353C126.168 24.2709 126.364 24.2399 126.58 24.2399C126.886 24.2399 127.149 24.3091 127.372 24.445C127.594 24.5833 127.764 24.7669 127.884 24.9958C128.004 25.2271 128.061 25.4846 128.061 25.7683H127.661C127.661 25.5466 127.621 25.3487 127.537 25.1746C127.453 25.0006 127.331 24.8646 127.168 24.7645C127.006 24.6644 126.809 24.6143 126.58 24.6143C126.35 24.6143 126.156 24.6572 125.998 24.743C125.84 24.8289 125.725 24.9433 125.646 25.084C125.567 25.2247 125.529 25.3821 125.529 25.5537C125.529 25.6753 125.548 25.7874 125.587 25.8923C125.625 25.9949 125.689 26.0902 125.778 26.1761C125.867 26.2619 125.984 26.3454 126.127 26.4193C126.271 26.4932 126.448 26.5671 126.659 26.6363C126.891 26.7078 127.097 26.7913 127.274 26.8819C127.451 26.9725 127.602 27.0798 127.721 27.199C127.843 27.3182 127.934 27.4565 127.994 27.6139C128.056 27.7713 128.085 27.9525 128.085 28.1599C128.085 28.3674 128.049 28.5557 127.975 28.7203C127.901 28.8848 127.8 29.0255 127.666 29.1423C127.532 29.2591 127.377 29.3474 127.195 29.407C127.013 29.469 126.814 29.4976 126.599 29.4976C126.405 29.4976 126.214 29.469 126.024 29.4094C125.835 29.3497 125.661 29.2591 125.503 29.1351C125.345 29.0112 125.22 28.8514 125.125 28.6559C125.031 28.4604 124.983 28.2291 124.983 27.9596H125.39C125.39 28.1718 125.426 28.3531 125.496 28.5033C125.565 28.6511 125.661 28.7727 125.776 28.8609C125.893 28.9515 126.022 29.0159 126.166 29.0588C126.309 29.0994 126.453 29.1208 126.599 29.1208C126.819 29.1208 127.01 29.0803 127.173 29.0016C127.334 28.9229 127.458 28.8109 127.547 28.6678C127.635 28.5247 127.678 28.3578 127.678 28.1647H127.685Z" fill="white"/><path d="M129.411 24.3094V29.4288H129.009V24.3094H129.411ZM131.685 24.3094V24.6862H129.304V24.3094H131.685ZM131.403 26.6009V26.9776H129.304V26.6009H131.403ZM131.702 29.0521V29.4288H129.301V29.0521H131.702Z" fill="white"/><path d="M132.598 24.3094H134.005C134.307 24.3094 134.568 24.3667 134.788 24.4835C135.008 24.6003 135.178 24.7696 135.298 24.9938C135.417 25.2179 135.477 25.4921 135.477 25.8188C135.477 26.0596 135.434 26.279 135.348 26.4769C135.262 26.6748 135.145 26.8369 134.996 26.9681C134.848 27.0992 134.673 27.1898 134.47 27.2399L134.338 27.2995H132.871L132.864 26.9228H134.07C134.293 26.9228 134.479 26.8703 134.628 26.7678C134.776 26.6653 134.886 26.5293 134.96 26.3601C135.034 26.1908 135.07 26.0119 135.07 25.8188C135.07 25.5875 135.03 25.3848 134.948 25.2155C134.867 25.0462 134.747 24.9151 134.589 24.8245C134.431 24.7339 134.235 24.6886 134.003 24.6886H132.998V29.4312H132.596V24.3118L132.598 24.3094ZM135.233 29.4288L134.13 27.1398H134.561L135.661 29.3835V29.4288H135.235H135.233Z" fill="white"/><path d="M136.569 24.3096L137.907 28.7876L138.051 29.4266H137.732L136.131 24.3073H136.569V24.3096ZM137.933 28.7876L139.274 24.3096H139.712L138.106 29.429H137.785L137.933 28.79V28.7876Z" fill="white"/><path d="M143.158 27.8311H143.565C143.541 28.2126 143.464 28.5274 143.332 28.773C143.201 29.0186 143.021 29.2022 142.792 29.3214C142.562 29.4406 142.287 29.5002 141.968 29.5002C141.719 29.5002 141.497 29.4525 141.301 29.3572C141.104 29.2618 140.937 29.1211 140.796 28.9399C140.657 28.7587 140.549 28.5369 140.475 28.277C140.401 28.0171 140.365 27.7238 140.365 27.3972V26.3003C140.365 25.9784 140.401 25.6923 140.475 25.4372C140.549 25.182 140.657 24.965 140.8 24.7862C140.944 24.6074 141.114 24.4715 141.317 24.3761C141.521 24.2831 141.746 24.2354 141.999 24.2354C142.31 24.2354 142.579 24.295 142.806 24.4119C143.033 24.5287 143.21 24.7099 143.34 24.9579C143.469 25.2035 143.545 25.5206 143.569 25.9117H143.162C143.141 25.5969 143.086 25.3466 142.995 25.1558C142.904 24.965 142.777 24.8291 142.61 24.7433C142.444 24.6575 142.239 24.6145 141.997 24.6145C141.798 24.6145 141.624 24.6527 141.473 24.729C141.322 24.8053 141.193 24.915 141.088 25.0604C140.982 25.2059 140.903 25.3799 140.848 25.5874C140.793 25.7948 140.767 26.0309 140.767 26.2956V27.3995C140.767 27.6594 140.793 27.8955 140.843 28.1077C140.894 28.3199 140.97 28.5011 141.068 28.6537C141.166 28.8063 141.293 28.9232 141.442 29.0043C141.59 29.0853 141.765 29.1259 141.966 29.1259C142.22 29.1259 142.43 29.0853 142.595 29.0066C142.76 28.928 142.89 28.792 142.983 28.6037C143.076 28.4153 143.134 28.1578 143.158 27.8311Z" fill="white"/><path d="M145.05 24.3094V29.4288H144.644V24.3094H145.05Z" fill="white"/><path d="M146.739 24.3094V29.4288H146.337V24.3094H146.739ZM149.013 24.3094V24.6862H146.632V24.3094H149.013ZM148.731 26.6009V26.9776H146.632V26.6009H148.731ZM149.03 29.0521V29.4288H146.629V29.0521H149.03Z" fill="white"/><path d="M5.83048 22.5805C0.0795005 21.9033 -2.21323 14.2422 2.64267 10.5678C4.70086 9.01073 6.12724 9.32786 8.45108 9.33263C12.7661 9.33978 17.0835 9.31117 21.3986 9.32786L27.5205 0.171678L27.9202 0L45.1683 36H34.1641C33.8434 35.2227 33.5251 34.4048 33.1566 33.6513C30.4211 28.0885 27.6928 21.889 24.7276 16.5217C22.9637 13.3313 19.3954 12.9021 17.1122 15.8206L12.6488 22.5829H19.7927C22.8249 22.5829 26.0462 26.0474 26.1276 29.0446C26.209 32.0252 23.4568 36 20.2857 36H3.12132L12.1558 22.5829C10.1551 22.4112 7.78815 22.8141 5.83287 22.5829L5.83048 22.5805Z" fill="white"/></g><defs><clipPath id="clip0_3431_10442"><rect width="171" height="36" fill="white"/></clipPath></defs></svg></div>\n\
          <div class="stararcs-description" data-word_code="smart_proxy_desc">Enable or customize Stararcs Proxy to improve stream loading and bypass regional restrictions. Choose the mode that best suits your connection and server location.</div>\n\
        </div>\n\
        <div class="stararcs-body">\n\
          <div id="stararcs-proxy-loading" class="stararcs-loader" style="display:none;">\n\
            <div class="stararcs-spinner"></div>\n\
            <div class="stararcs-loader-text" data-word_code="proxy-loading">Checking your subscription...</div>\n\
          </div>\n\
          <div id="stararcs-proxy-not-active" class="stararcs-not-active">\n\
            <div class="stararcs-not-active-text" data-word_code="proxy-sub-instructions">This device does not have an active stararcs proxy subscription.<br /> Scan the QR code to make an account and subscribe to this service.</div>\n\
            <div id="stararcs-proxy-sub-qr-container" class="stararcs-qr-card"></div>\n\
            <div class="stararcs-btn"\n\
              id="stararcs-proxy-sub-confirmation-btn"\n\
              data-word_code="continue"\n\
              onmouseenter="stararcs_page.hoverSmartProxyOption(0)"\n\
              onclick="stararcs_page.clickSmartProxyOption(0)"\n\
            >Continue</div>\n\
          </div>\n\
          <div id="stararcs-proxy-active" class="stararcs-active">\n\
            <div id="stararcs-proxy-guest-info" class="stararcs-info-card" style="display:none;">\n\
              <div class="stararcs-info-header">\n\
                <div class="stararcs-sub-details" id="stararcs-proxy-sub-details" style="display:none;">\n\
                  <div class="stararcs-sub-plan" id="stararcs-proxy-sub-plan"></div>\n\
                  <div class="stararcs-sub-duration" id="stararcs-proxy-sub-duration"></div>\n\
                </div>\n\
                <div class="stararcs-badge">Guest User</div>\n\
              </div>\n\
              <div class="stararcs-quota">\n\
                <div class="stararcs-quota-text" id="stararcs-proxy-guest-quota-text">10 GB remaining of 10 GB</div>\n\
                <div class="stararcs-quota-bar">\n\
                  <div class="stararcs-quota-bar-fill" id="stararcs-proxy-guest-quota-bar-fill"></div>\n\
                </div>\n\
              </div>\n\
            </div>\n\
            <div class="stararcs-item stararcs-toggle-row" onmouseenter="stararcs_page.hoverSmartProxyOption(0)" onclick="stararcs_page.handleMenuClick()">\n\
              <div class="stararcs-item-label" data-word_code="toggle-connection">Toggle Connection</div>\n\
              <div class="stararcs-toggle off">\n\
                <div class="stararcs-toggle-circle"></div>\n\
              </div>\n\
            </div>\n\
            <div class="stararcs-item stararcs-value-row" onmouseenter="stararcs_page.hoverSmartProxyOption(1)" onclick="stararcs_page.handleMenuClick()">\n\
              <div class="stararcs-item-label" data-word_code="region">Region</div>\n\
              <div class="stararcs-value-container">\n\
                <svg class="stararcs-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" fill="#ffffff"></path> </g></svg>\n\
                <div class="stararcs-value">Nearest</div>\n\
                <svg class="stararcs-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" fill="#ffffff"></path> </g></svg>\n\
              </div>\n\
            </div>\n\
            <div class="stararcs-item stararcs-value-row" onmouseenter="stararcs_page.hoverSmartProxyOption(2)" onclick="stararcs_page.handleMenuClick()">\n\
              <div class="stararcs-item-label" data-word_code="country">Country</div>\n\
              <div class="stararcs-value-container">\n\
                <svg class="stararcs-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" fill="#ffffff"></path> </g></svg>\n\
                <div class="stararcs-value">Nearest</div>\n\
                <svg class="stararcs-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" fill="#ffffff"></path> </g></svg>\n\
              </div>\n\
            </div>\n\
            <div id="stararcs-proxy-guest-subscribe" class="stararcs-subscribe" style="display:none;">\n\
              <div class="stararcs-subscribe-divider"></div>\n\
              <div class="stararcs-subscribe-text">Want unlimited access? Scan to subscribe.<br />This action will take effect the next time the app is loaded, reload to use your subscription immediately.</div>\n\
              <div id="stararcs-proxy-guest-sub-qr-container" class="stararcs-qr-card small"></div>\n\
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
        <div class="playlists-page-background">\n\
          <div class="playlists-page-background-img-container"><img src="'+HOST+'app_src_min/images/app_background2.png" class="playlists-page-background-img" /></div>\n\
          <div class="playlists-page-background-img-dim"></div>\n\
        </div>\n\
        <div class="playlists-page-title">Choose Your Playlist</div>\n\
        <div id="playlist-error">\n\
          Playlist is not working or your subscription has expired.<br />\n\
          Please contact your IPTV provider for renewal or support.<br />\n\
          The app provider is not responsible for playlist services.<br />\n\
        </div>\n\
        <div id="playlist-items-container"></div>\n\
        <div class="playlists-page-btns-container">\n\
          <div class="playlists-page-btn playlist-page-toggle" onmouseenter="playlist_page.hoverBottomMenu(0)" onclick="playlist_page.handleMenuClick()">\n\
            <span class="playlist-page-toggle-label" data-word_code="auto_switch_playlist">Auto Switch Playlist</span>\n\
            <div class="playlist-page-toggle-value playlist-page-auto-switch-toggle-value off">\n\
              <div class="playlist-page-toggle-circle"></div>\n\
            </div>\n\
          </div>\n\
          <div class="playlists-page-btn playlist-page-toggle" onmouseenter="playlist_page.hoverBottomMenu(1)" onclick="playlist_page.handleMenuClick()">\n\
            <span class="playlist-page-toggle-label" data-word_code="start_on_playlist">Start on Playlist</span>\n\
            <div class="playlist-page-toggle-value playlist-page-auto-start-toggle-value off">\n\
              <div class="playlist-page-toggle-circle"></div>\n\
            </div>\n\
          </div>\n\
          <div class="playlists-page-btn" onmouseenter="playlist_page.hoverBottomMenu(2)" onclick="playlist_page.handleMenuClick()"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="28" viewBox="0 0 189 151" fill="none"><g clip-path="url(#clip0_21_5034)"><path d="M24.3601 94.7C0.330059 91.86 -9.24994 59.73 11.0401 44.32C19.6401 37.79 25.6001 39.12 35.3101 39.14C53.3401 39.17 71.3801 39.05 89.4101 39.12L114.99 0.72L116.66 0L188.73 150.98H142.75C141.41 147.72 140.08 144.29 138.54 141.13C127.11 117.8 115.71 91.8 103.32 69.29C95.9501 55.91 81.0401 54.11 71.5001 66.35L52.8501 94.71H82.7001C95.3701 94.71 108.83 109.24 109.17 121.81C109.51 134.31 98.0101 150.98 84.7601 150.98H13.0401L50.7901 94.71C42.4301 93.99 32.5401 95.68 24.3701 94.71L24.3601 94.7Z" fill="white"/></g><defs><clipPath id="clip0_21_5034"><rect width="188.73" height="150.98" fill="white"/></clipPath></defs></svg> StarArcs</div>\n\
          <div class="playlists-page-btn" onmouseenter="playlist_page.hoverBottomMenu(3)" onclick="playlist_page.handleMenuClick()" data-word_code="add_playlist">Add Playlist</div>\n\
          <div class="playlists-page-btn" onmouseenter="playlist_page.hoverBottomMenu(4)" onclick="playlist_page.handleMenuClick()" data-word_code="reload">Reload</div>\n\
          <div class="playlists-page-btn" onmouseenter="playlist_page.hoverBottomMenu(5)" onclick="playlist_page.handleMenuClick()" data-word_code="playlists_qr_code">Playlists QR Code</div>\n\
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
        <div class="playlists-page-footer">CRPlayer is a general media player and it does not include any content, CRPlayer is not responsible for the content you use in the application.<br />Please follow <span class="website-url highlight"></span> to add or manage your playlists.</div>\n\
        <div class="playlists-qr-modal-container">\n\
          <div class="playlists-qr-modal">\n\
            <div id="playlists-qr"></div>\n\
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
          <div id="live-clock" class="current-time"></div>\n\
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
              <div\n\
                class="channel-sidebar-option"\n\
                id="channel-sidebar-favorites-toggle"\n\
                onmouseenter="channel_page.hoverSidebarOption(3)"\n\
                onclick="channel_page.clickSidebarMainItem(3)"\n\
              >\n\
                Add to Fav\n\
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
        <div id="reusable-keyboard-wrapper"></div>\n\
        <div id="playlist-edit-page-container">\n\
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
          <div id="playlist-edit-or-divider">\n\
            <span class="playlist-edit-or-line"></span>\n\
            <span class="playlist-edit-or-text">OR</span>\n\
            <span class="playlist-edit-or-line"></span>\n\
          </div>\n\
          <div id="playlist-edit-qr-section">\n\
            <div class="playlist-edit-qr-details">\n\
              <div class="playlist-edit-qr-title">Scan to add a playlist from your phone</div>\n\
              <div class="playlist-edit-qr-description">You can now add playlists of all types through the website without needing to login to your account/device, simply scan the QR code and follow the instructions on the website.</div>\n\
            </div>\n\
            <div id="add-playlist-qr"></div>\n\
          </div>\n\
        </div>\n\
      </div>\n\
      <div\n\
        id="vod-series-page"\n\
        class="height-100 page-container1 hide categories-open"\n\
      >\n\
        <div class="page-title" data-word_code="movies">Movies</div>\n\
          <div class="vod-img-bg">\n\
            <img  id="movie-image" alt="Movie Poster" onerror="this.src=\''+HOST+'app_src_min/images/default_movie_bg.png\'">\n\
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
            <div class="series-summary-bottom-label-item">\n\
              <div class="bottom-label-icon bottom-item-yellow"></div>\n\
              <div class="bottom-label-text" data-word_code="toggle_favorite">\n\
                Toggle Favorite\n\
              </div>\n\
              <div id="series-summary-favorite-icon"></div>\n\
            </div>\n\
            </div>\n\
            <div\n\
              id="series-summary-informations-container"\n\
              style="height: 100vh; overflow: hidden"\n\
            >\n\
              <div\n\
                class="series-summary-information-container position-relative"\n\
              >\n\
                <div class="vod-summary-item">\n\
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
                </div>\n\
                <div class="vod-summary-item">\n\
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
        <div id="search-page-specific-layout">\n\
          <div id="search-page-left-column">\n\
            <div id="static-keyboard-wrapper"></div>\n\
            <div id="search-suggestions-list"></div>\n\
          </div>\n\
          <div id="search-page-right-column">\n\
            <div id="search-query-display"></div>\n\
            <div id="search-page-specific-results"></div>\n\
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
                  <div\n\
                    class="video-control-icon-wrapper"\n\
                    onmouseenter="vod_series_player.hoverVideoControlIcon(0)"\n\
                    onclick="vod_series_player.showNextVideo(-1)"\n\
                  >\n\
                    <i class="fa fa-step-backward" style="width: 1.5rem; height: 1.5rem"></i>\n\
                  </div>\n\
                </div>\n\
                <div class="video-control-icon text-center">\n\
                  <div\n\
                    class="video-control-icon-wrapper"\n\
                    onmouseenter="vod_series_player.hoverVideoControlIcon(1)"\n\
                    onclick="vod_series_player.seekTo(-30)"\n\
                  >\n\
                    <i class="fa fa-backward" style="width: 1.5rem; height: 1.5rem"></i>\n\
                  </div>\n\
                </div>\n\
                <div class="video-control-icon text-center">\n\
                  <div\n\
                    class="video-control-icon-wrapper"\n\
                    data-action_type="pause"\n\
                    onmouseenter="vod_series_player.hoverVideoControlIcon(2)"\n\
                    onclick="vod_series_player.playPauseVideo()"\n\
                  >\n\
                    <i class="fa fa-pause" style="width: 1.5rem; height: 1.5rem"></i>\n\
                  </div>\n\
                </div>\n\
                <div class="video-control-icon text-center">\n\
                  <div\n\
                    class="video-control-icon-wrapper"\n\
                    onmouseenter="vod_series_player.hoverVideoControlIcon(3)"\n\
                    onclick="vod_series_player.seekTo(30)"\n\
                  >\n\
                    <i class="fa fa-forward" style="width: 1.5rem; height: 1.5rem"></i>\n\
                  </div>\n\
                </div>\n\
                <div class="video-control-icon text-center">\n\
                  <div\n\
                    class="video-control-icon-wrapper"\n\
                    onmouseenter="vod_series_player.hoverVideoControlIcon(4)"\n\
                    onclick="vod_series_player.showNextVideo(1)"\n\
                  >\n\
                    <i class="fa fa-step-forward" style="width: 1.5rem; height: 1.5rem"></i>\n\
                  </div>\n\
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
          <div id="vod-clock" class="current-time"></div>\n\
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
    <div id="pin-overlay" class="hide">\n\
  <div class="pin-overlay-dim"></div>\n\
  <div class="pin-overlay-panel">\n\
    <div class="pin-overlay-title" id="pin-overlay-title">Enter your PIN</div>\n\
    <div class="pin-overlay-digits" id="pin-overlay-digits"></div>\n\
    <div class="pin-overlay-error hide" id="pin-overlay-error"></div>\n\
    <div class="pin-overlay-keypad">\n\
      <div class="pin-keypad-row">\n\
        <div class="pin-key pin-overlay-item" data-index="0" onclick="pin_overlay.clickKey(0)" onmouseenter="pin_overlay.hoverKey(this)">1</div>\n\
        <div class="pin-key pin-overlay-item" data-index="1" onclick="pin_overlay.clickKey(1)" onmouseenter="pin_overlay.hoverKey(this)">2</div>\n\
        <div class="pin-key pin-overlay-item" data-index="2" onclick="pin_overlay.clickKey(2)" onmouseenter="pin_overlay.hoverKey(this)">3</div>\n\
      </div>\n\
      <div class="pin-keypad-row">\n\
        <div class="pin-key pin-overlay-item" data-index="3" onclick="pin_overlay.clickKey(3)" onmouseenter="pin_overlay.hoverKey(this)">4</div>\n\
        <div class="pin-key pin-overlay-item" data-index="4" onclick="pin_overlay.clickKey(4)" onmouseenter="pin_overlay.hoverKey(this)">5</div>\n\
        <div class="pin-key pin-overlay-item" data-index="5" onclick="pin_overlay.clickKey(5)" onmouseenter="pin_overlay.hoverKey(this)">6</div>\n\
      </div>\n\
      <div class="pin-keypad-row">\n\
        <div class="pin-key pin-overlay-item" data-index="6" onclick="pin_overlay.clickKey(6)" onmouseenter="pin_overlay.hoverKey(this)">7</div>\n\
        <div class="pin-key pin-overlay-item" data-index="7" onclick="pin_overlay.clickKey(7)" onmouseenter="pin_overlay.hoverKey(this)">8</div>\n\
        <div class="pin-key pin-overlay-item" data-index="8" onclick="pin_overlay.clickKey(8)" onmouseenter="pin_overlay.hoverKey(this)">9</div>\n\
      </div>\n\
      <div class="pin-keypad-row">\n\
        <div class="pin-key pin-key-action pin-overlay-item" data-index="9" onclick="pin_overlay.clickKey(9)" onmouseenter="pin_overlay.hoverKey(this)"><svg fill="#ffffff" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M 19.5 4.59375 L 18.78125 5.28125 L 8.0625 16 L 18.78125 26.71875 L 19.5 27.40625 L 20.90625 26 L 20.21875 25.28125 L 10.9375 16 L 20.21875 6.71875 L 20.90625 6 Z"/></svg></div>\n\
        <div class="pin-key pin-overlay-item" data-index="10" onclick="pin_overlay.clickKey(10)" onmouseenter="pin_overlay.hoverKey(this)">0</div>\n\
        <div class="pin-key pin-key-action pin-key-confirm pin-overlay-item" data-index="11" onclick="pin_overlay.clickKey(11)" onmouseenter="pin_overlay.hoverKey(this)"><svg fill="#ffffff" viewBox="0 0 16 16" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><path class="cls-1" d="M14,4.69298L5.81846,12.87529l-3.81846-3.81846,1.63615-1.63692,2.25019,2.25019L12.43173,3.12471l1.56827,1.56827Z"></path></svg></div>\n\
      </div>\n\
    </div>\n\
    <div class="pin-overlay-cancel pin-overlay-item" data-index="12" onclick="pin_overlay.clickKey(12)" onmouseenter="pin_overlay.hoverKey(this)" data-word_code="cancel">Cancel</div>\n\
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


