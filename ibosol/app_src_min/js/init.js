var app_environment = "production"; // development or production
if(app_environment == "development"){
    var STYLES=[
        "app_src/css/style.css",
        "app_src/css/variables.css",
        "app_src/css/guide.css",
        "app_src/css/homepage.css",
        "app_src/css/vod_series_summary.css",
        "app_src/css/vod_series_player_page.css",
        "app_src/css/channel_page.css",
        "app_src/css/login.css",
        "app_src/css/movie_grid.css",
        "app_src/css/catchup.css",
        "app_src/css/catchup_detail.css",
        "app_src/css/rating.css",
        "app_src/css/loader.css",
        "app_src/css/playlist.css",
        "app_src/css/vod_series.css",
        "app_src/css/setting_page.css",
        "app_src/css/category_page.css",
        "app_src/css/subtitle.css",
        "app_src/css/search_page.css",
        "app_src/css/media.css"
    ];
      
      var SCRIPTS=[
        "app_src/js/settings.js",
        "app_src/js/common.js",
        "app_src/js/Models/VodModel.js",
        "app_src/js/Models/LiveModel.js",
        "app_src/js/Models/SeriesModel.js",
        "app_src/js/language_codes.js",
        "app_src/js/playlist.js",
        "app_src/js/keyTizen.js",
        "app_src/js/key_operations.js",
        "app_src/js/channel_operation.js",
        "app_src/js/mediaPlayer.js",
        "app_src/js/time_helper.js",
        "app_src/js/vod_summary.js",
        "app_src/js/vod_series_player.js",
        "app_src/js/trailer.js",
        "app_src/js/series_summary.js",
        "app_src/js/vod_series_page.js",
        "app_src/js/setting_page.js",
        "app_src/js/turn_off_page.js",
        "app_src/js/parent_confirm_page.js",
        "app_src/js/user_account_page.js",
        "app_src/js/activation_page.js",
        "app_src/js/side_menu.js",
        "app_src/js/catchup_page.js",
        "app_src/js/catchup_detail.js",
        "app_src/js/clear_recent_page.js",
        "app_src/js/clear_cache_page.js",
        "app_src/js/srt_parser.js",
        "app_src/js/srt_operation.js",
        "app_src/js/search_page.js",
        "app_src/js/login_operation.js",
        "app_src/js/home_operation.js",
        "app_src/js/main.js"
      ];

} else{
    var STYLES = ["app_src_min/css/application.min.css"];
    var SCRIPTS = ["app_src_min/js/application.min.js"]; 
}

  var HTML = '  <div id="loading-page" class="height-100 text-center">\n\
  <div class="loader-image-container">\n\
  <div class="loader-image-wrapper">\n\
<!--                <div class="loading">-->\n\
<!--                    <div class="loading-animation">-->\n\
<!--                        <span class="fa fa-cog loading-big"></span>-->\n\
<!--                        <span class="fa fa-cog loading-small"></span>-->\n\
<!--                    </div>-->\n\
<!--                    <p class="loading-text">loading</p>-->\n\
<!--                </div>-->\n\
      <img class="loader-image" src="app_src_min/images/login_loader1.gif">\n\
  </div>\n\
  <div class="loading-page-device-info-container">\n\
<!--                <div class="loading-page-device-info-item">-->\n\
          <div class="loading-page-device-info-label">Mac Address:</div>\n\
          <div class="loading-page-device-info-value mac-address">--:--:--:--:--:--</div>\n\
<!--                </div>-->\n\
  </div>\n\
</div>\n\
<div id="loading-issue-container">\n\
  <div id="network-issue-container" class="loading-issue-item hide">\n\
      <div id="network-issue-content-wrapper" class="loading-issue-message-container">\n\
          <div class="loading-issue-text">\n\
              Sorry, your network seems to be disconnected.<br>\n\
              Please check your network state and try again.\n\
          </div>\n\
      </div>\n\
      <div id="network-issue-btns-container" class="loading-issue-btn-container">\n\
          <div class="btn network-issue-btn loading-issue-btn"\n\
               onmouseenter="login_page.hoverNetworkIssueBtn(0)"\n\
               onclick="login_page.reloadApp()"\n\
               data-word_code="retry"\n\
          >\n\
              Retry.\n\
          </div>\n\
          <div class="network-issue-btn loading-issue-btn btn"\n\
               onmouseenter="login_page.hoverNetworkIssueBtn(1)"\n\
               onclick="login_page.exit()"\n\
               data-word_code="exit"\n\
          >\n\
              Exit\n\
          </div>\n\
      </div>\n\
  </div>\n\
  <div id="expired-issue-container" class="loading-issue-item hide">\n\
      <div class="loading-issue-message-container">\n\
          <div class="loading-issue-text">\n\
              Your 7 days trial has been expired, Put your Activation Code to activate app or visit our website <span class="login-page-link">https://<span class="main-domain"></span>/mylist</span> to activate your mac id\n\
          </div>\n\
          <div class="loading-issue-info-item">\n\
              <span class="loading-issue-info-item-label">Your TV mac Address:</span>\n\
              <span class="loading-issue-info-item-value mac-address"></span>\n\
          </div>\n\
<!--                    <div class="loading-issue-info-item">-->\n\
<!--                        <span class="loading-issue-info-item-label">Your Device Key:</span>-->\n\
<!--                        <span class="loading-issue-info-item-value device-key"></span>-->\n\
<!--                    </div>-->\n\
      </div>\n\
      <div class="loading-issue-btn-container">\n\
          <div class="btn expired-issue-btn loading-issue-btn"\n\
               onmouseenter="login_page.hoverExpiredIssueBtn(0)"\n\
               onclick="login_page.reloadApp()"\n\
               data-word_code="reload"\n\
          >\n\
              Reload\n\
          </div>\n\
          <div class="expired-issue-btn loading-issue-btn btn"\n\
               onmouseenter="login_page.hoverExpiredIssueBtn(1)"\n\
               onclick="login_page.enterActivationPage()"\n\
               data-word_code="enter_code"\n\
          >\n\
              Enter Code\n\
          </div>\n\
          <div class="expired-issue-btn loading-issue-btn btn"\n\
               onmouseenter="login_page.hoverExpiredIssueBtn(2)"\n\
               onclick="login_page.exit()"\n\
               data-word_code="exit"\n\
          >\n\
              Exit\n\
          </div>\n\
      </div>\n\
  </div>\n\
  <div id="no-playlist-issue-container" class="loading-issue-item hide">\n\
      <div class="loading-issue-message-container">\n\
          <div class="loading-issue-text">\n\
              You have not uploaded your playlist yet.\n\
              We only provide few contents in our demo playlist.<br>\n\
              To use our app, you need to upload your own playlists at https://<span class="main-domain"></span>,\n\
              or You can still continue with our demo playlists.\n\
          </div>\n\
          <div class="loading-issue-info-item">\n\
              <span class="loading-issue-info-item-label">Your TV mac Address:</span>\n\
              <span class="loading-issue-info-item-value mac-address"></span>\n\
          </div>\n\
<!--                    <div class="loading-issue-info-item">-->\n\
<!--                        <span class="loading-issue-info-item-label">Your Device Key:</span>-->\n\
<!--                        <span class="loading-issue-info-item-value device-key"></span>-->\n\
<!--                    </div>-->\n\
      </div>\n\
      <div class="loading-issue-btn-container">\n\
          <div class="btn no-playlist-btn loading-issue-btn"\n\
               onmouseenter="login_page.hoverNoPlaylistBtn(0)"\n\
               onclick="login_page.reloadApp()"\n\
               data-word_code="reload"\n\
          >\n\
              Reload\n\
          </div>\n\
          <div class="no-playlist-btn loading-issue-btn btn"\n\
               onmouseenter="login_page.hoverNoPlaylistBtn(1)"\n\
               onclick="login_page.continueDemoPlaylist()"\n\
               data-word_code="continue_demo_list"\n\
          >\n\
              Continue\n\
          </div>\n\
      </div>\n\
  </div>\n\
</div>\n\
</div>\n\
<div id="app" style="display: none">\n\
<div id="home-page" class="page-container1 hide">\n\
</div>\n\
<div id="side-bar-container">\n\
  <div id="side-bar-menus-container">\n\
      <div id="side-bar-menus-wrapper">\n\
          <div id="side-bar-time" class="current-time">\n\
              02:30 AM\n\
      </div>\n\
          <div class="side-bar-menu-item-container">\n\
              <div class="side-bar-menu-item-wrapper"\n\
                   onmouseenter="side_menu_page.hoverMenuItem(0)"\n\
                   onclick="side_menu_page.handleMenuClick()"\n\
              >\n\
                  <div class="side-bar-menu-item-img tv"></div>\n\
                  <div class="side-bar-menu-item-title" data-word_code="search">Search</div>\n\
              </div>\n\
          </div>\n\
          <div class="side-bar-menu-item-container">\n\
              <div class="side-bar-menu-item-wrapper"\n\
                   onmouseenter="side_menu_page.hoverMenuItem(1)"\n\
                   onclick="side_menu_page.handleMenuClick()"\n\
              >\n\
                  <div class="side-bar-menu-item-img tv"></div>\n\
                  <div class="side-bar-menu-item-title" data-word_code="live_tv">Live TV</div>\n\
              </div>\n\
          </div>\n\
          <div class="side-bar-menu-item-container">\n\
              <div class="side-bar-menu-item-wrapper"\n\
                   onmouseenter="side_menu_page.hoverMenuItem(2)"\n\
                   onclick="side_menu_page.handleMenuClick()"\n\
              >\n\
                  <div class="side-bar-menu-item-img series"></div>\n\
                  <div class="side-bar-menu-item-title" data-word_code="series">Series</div>\n\
              </div>\n\
          </div>\n\
          <div class="side-bar-menu-item-container">\n\
              <div class="side-bar-menu-item-wrapper"\n\
                   onmouseenter="side_menu_page.hoverMenuItem(3)"\n\
                   onclick="side_menu_page.handleMenuClick()"\n\
              >\n\
                  <div class="side-bar-menu-item-img movie"></div>\n\
                  <div class="side-bar-menu-item-title" data-word_code="movies">Movies</div>\n\
              </div>\n\
          </div>\n\
          <div class="side-bar-menu-item-container">\n\
              <div class="side-bar-menu-item-wrapper"\n\
                   onmouseenter="side_menu_page.hoverMenuItem(4)"\n\
                   onclick="side_menu_page.handleMenuClick()"\n\
              >\n\
                  <div class="side-bar-menu-item-img user-account"></div>\n\
                  <div class="side-bar-menu-item-title" data-word_code="replay">Replay</div>\n\
              </div>\n\
          </div>\n\
          <div class="side-bar-menu-item-container">\n\
              <div class="side-bar-menu-item-wrapper settings"\n\
                   onmouseenter="side_menu_page.hoverMenuItem(5)"\n\
                   onclick="side_menu_page.handleMenuClick()"\n\
              >\n\
                  <div class="side-bar-menu-item-img settings"></div>\n\
                  <div class="side-bar-menu-item-title" data-word_code="settings">Settings</div>\n\
              </div>\n\
          </div>\n\
      </div>\n\
<!--                <div id="side-bar-labels-container">-->\n\
<!--                    <div class="side-bar-label collapsed">>></div>-->\n\
<!--                    <div class="side-bar-label expanded"><<</div>-->\n\
<!--                </div>-->\n\
  </div>\n\
</div>\n\
<div id="channel-page" class="height-100 page-container1 hide">\n\
  <div class="player-container">\n\
      <object class="position-absolute" id="channel-page-video" type="application/avplayer"></object>\n\
      <video class="position-absolute" id="channel-page-video-lg"></video>\n\
<!--                <div class="video-loader">-->\n\
<!--                    <img src="app_src_min/images/loader.gif">-->\n\
<!--                </div>-->\n\
      <div class="video-error">\n\
          <img src="app_src_min/images/signallost.png">\n\
      </div>\n\
      <div class="video-reconnect-message" data-word_code="reconnecting">\n\
          Reconnecting...\n\
      </div>\n\
      <div id="full-screen-information">\n\
          <div class="full-screen-contents-wrapper">\n\
              <div class="full-screen-channel-logo-wrapper">\n\
                  <img class="full-screen-channel-logo" onerror="this.src=default_movie_icon">\n\
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
          <!--                    <div id="channel-page-video-controls-container" class="video-controls-container">-->\n\
          <!--                        <div class="video-control-icon-container">-->\n\
          <!--                            <div class="video-control-icon-wrapper" onclick="channel_page.showNextChannel(-1)">-->\n\
          <!--                                <i class="fa fa-step-backward"></i>-->\n\
          <!--                            </div>-->\n\
          <!--                        </div>-->\n\
          <!--                        <div class="video-control-icon-container">-->\n\
          <!--                            <div class="video-control-icon-wrapper" onclick="channel_page.playOrPause()">-->\n\
          <!--                                <i class="fa fa-play"></i>-->\n\
          <!--                            </div>-->\n\
          <!--                        </div>-->\n\
          <!--                        <div class="video-control-icon-container">-->\n\
          <!--                            <div class="video-control-icon-wrapper" onclick="channel_page.showNextChannel(1)">-->\n\
          <!--                                <i class="fa fa-step-forward"></i>-->\n\
          <!--                            </div>-->\n\
          <!--                        </div>-->\n\
          <!--                    </div>-->\n\
          <div class="video-resolution"></div>\n\
      </div>\n\
  </div>\n\
  <div class="page-content-area-1">\n\
      <div class="page-content-wrapper-1">\n\
          <div id="channel-page-content-area">\n\
              <div class="categories-container" id="channel-page-categories-container">\n\
              </div>\n\
              <div class="menus-container position-relative" id="channel-page-menu-container">\n\
              </div>\n\
          </div>\n\
      </div>\n\
      <div id="channel-page-bottom-container">\n\
          <div class="channel-page-bottom-item">\n\
              <div class="channel-page-bottom-icon bottom-item-blue"></div>\n\
              <div class="channel-page-bottom-text" data-word_code="search">Search</div>\n\
          </div>\n\
          <div class="channel-page-bottom-item">\n\
              <div class="channel-page-bottom-icon bottom-item-red"></div>\n\
              <div class="channel-page-bottom-text" data-word_code="move_category_or_channels">Move Category Or Channels</div>\n\
          </div>\n\
          <div class="channel-page-bottom-item">\n\
              <div class="channel-page-bottom-icon bottom-item-yellow"></div>\n\
              <div class="channel-page-bottom-text" data-word_code="fav">Fav</div>\n\
          </div>\n\
      </div>\n\
  </div>\n\
  <div id="typed-channel-number"></div>\n\
</div>\n\
<div id="catchup-page" class="height-100 hide">\n\
  <div id="catchup-page-container">\n\
      <div id="catchup-page-category-part" class="catchup-page-wrapper">\n\
          <div class="catchup-page-top-part">\n\
              <div class="catchup-page-title" data-word_code="catch_up">Catch Up</div>\n\
              <div class="stream-page-search-bar-wrapper search-bar-wrapper" id="catchup-page-category-search-bar"\n\
                   onmouseenter="catchup_page.hoverCategorySearchBar()"\n\
                   onclick="catchup_page.handleMenuClick()"\n\
                   onchange="catchup_page.categoryKeywordChange()"\n\
                   onkeyup="catchup_page.categoryKeywordChange()"\n\
              >\n\
                  <i class="fa fa-search search-icon"></i>\n\
                  <input class="stream-page-search-input search-input" id="catchup-page-category-search-input" onclick="event.stopPropagation()">\n\
              </div>\n\
          </div>\n\
          <div class="catchup-page-items-container" id="catchup-page-category-items-container">\n\
          </div>\n\
      </div>\n\
      <div id="catchup-page-channel-part" class="catchup-page-wrapper">\n\
          <div class="catchup-page-top-part">\n\
              <div class="catchup-page-title" id="catchup-category-title"></div>\n\
              <div class="stream-page-search-bar-wrapper search-bar-wrapper" id="catchup-page-channel-search-bar"\n\
                   onmouseenter="catchup_page.hoverChannelSearchBar()"\n\
                   onclick="catchup_page.handleMenuClick()"\n\
                   onchange="catchup_page.channelKeywordChange()"\n\
                   onkeyup="catchup_page.channelKeywordChange()"\n\
              >\n\
                  <i class="fa fa-search search-icon"></i>\n\
                  <input class="stream-page-search-input search-input" id="catchup-page-channel-search-input" onclick="event.stopPropagation()">\n\
              </div>\n\
          </div>\n\
          <div class="catchup-page-items-container" id="catchup-page-channel-items-container">\n\
          </div>\n\
      </div>\n\
  </div>\n\
</div>\n\
<div id="catchup-detail-page" class="height-100 hide">\n\
  <div id="catchup-detail-page-category-name" data-word_code="catch_up">\n\
      CATCH UP\n\
  </div>\n\
  <div id="epg-dates-container">\n\
      <div id="epg-dates-wrapper">\n\
      </div>\n\
  </div>\n\
  <div id="epg-programmes-container">\n\
  </div>\n\
</div>\n\
<div id="search-page" class="height-100" style="display: none">\n\
  <div id="search-page-top-menus-container">\n\
      <!--                <div class="search-page-top-menu-container"-->\n\
      <!--                >-->\n\
      <!--                    <i class="fa fa-arrow-left search-page-top-menu back-icon"-->\n\
      <!--                       onmouseenter="search_page.hoverTopMenu(0)"-->\n\
      <!--                       onclick="search_page.handleMenuClick()"-->\n\
      <!--                    ></i>-->\n\
      <!--                </div>-->\n\
      <div class="search-page-top-menu-container" id="search-page-input-container"\n\
      >\n\
          <div class="search-page-top-menu search-page-input-container"\n\
               onmouseenter="search_page.hoverTopMenu(0)"\n\
               onclick="search_page.handleMenuClick()"\n\
          >\n\
              <input id="search-page-input"\n\
                     onkeyup="search_page.keywordChange()"\n\
                     onchange="search_page.keywordChange()"\n\
                     maxlength="20"\n\
                     onclick="event.stopPropagation()"\n\
              >\n\
              <i class="fa fa-search"></i>\n\
          </div>\n\
      </div>\n\
  </div>\n\
  <div id="search-page-contents-wrapper">\n\
      <div class="search-page-stream-type-container">\n\
          <div class="search-page-stream-type-label" data-word_code="live_tv">\n\
              Live TV\n\
          </div>\n\
          <div class="search-page-stream-items-container" id="filtered_channels_container">\n\
          </div>\n\
      </div>\n\
      <div class="search-page-stream-type-container">\n\
          <div class="search-page-stream-type-label" data-word_code="movies">\n\
              Movies\n\
          </div>\n\
          <div class="search-page-stream-items-container" id="filtered_movies_container">\n\
          </div>\n\
      </div>\n\
      <div class="search-page-stream-type-container">\n\
          <div class="search-page-stream-type-label" data-word_code="series">\n\
              Series\n\
          </div>\n\
          <div class="search-page-stream-items-container" id="filtered_series_container">\n\
          </div>\n\
      </div>\n\
  </div>\n\
</div>\n\
<div id="vod-series-page" class="page-container2 height-100 hide">\n\
  <div id="vod-series-page-content-wrapper">\n\
      <div id="vod-series-left-part">\n\
          <div id="vod-series-categories-container"></div>\n\
      </div>\n\
      <div id="vod-series-right-part">\n\
          <div id="vod-series-title-part">\n\
          <span id="vod-series-search-wrapper"  class="top-menu"\n\
                onmouseenter="vod_series_page.hoverTopMenu(0)"\n\
                onclick="vod_series_page.handleMenuClick()"\n\
          >\n\
      <span id="vod-series-search-icon">\n\
          <i class="fa fa-search"></i>\n\
      </span>\n\
      <input id="vod-series-search-input" placeholder="Search"\n\
             onkeyup="vod_series_page.searchValueChange()"\n\
             onchange="vod_series_page.searchValueChange()"\n\
      >\n\
  </span>\n\
              <span id="vod-series-order-btn-wrapper">\n\
                  <span id="vod-series-order-btn-label" data-word_code="sort_by">Sort By:</span>\n\
                  <span id="vod-series-order-btn" class="top-menu bg-focus"\n\
                        onmouseenter="vod_series_page.hoverTopMenu(1)"\n\
                        onclick="vod_series_page.handleMenuClick()"\n\
                  >\n\
                      Added\n\
                  </span>\n\
              </span>\n\
          </div>\n\
          <div id="vod-series-menus-container">\n\
          </div>\n\
      </div>\n\
      <div id="vod-series-summary-container">\n\
          <div class="vod-series-summary-section title-part">\n\
              <div class="vod-series-summary-section-content-wrapper">\n\
                  <div class="vod-series-summary-title">\n\
                      Vod Series Summary Title\n\
                  </div>\n\
              </div>\n\
          </div>\n\
          <div class="vod-series-summary-section">\n\
              <div class="vod-series-summary-section-content-wrapper">\n\
                  <div class="vod-series-summary-poster-wrapper">\n\
                      <img id="vod-series-summary-poster-img" onerror="this.src=\'app_src_min/images/404.png\'">\n\
                  </div>\n\
                  <div class="vod-series-summary-items-wrapper">\n\
                      <div class="vod-series-summary-item">\n\
                          <span class="vod-series-summary-item-label" data-word_code="genre">\n\
                              Genre:\n\
                          </span>\n\
                          <span class="vod-series-summary-item-text" id="vod-series-summary-genre"></span>\n\
                      </div>\n\
                      <div class="vod-series-summary-item">\n\
                          <span class="vod-series-summary-item-label" data-word_code="release_date">\n\
                              Release Date:\n\
                          </span>\n\
                          <span class="vod-series-summary-item-text" id="vod-series-summary-release-date"></span>\n\
                      </div>\n\
                      <div class="vod-series-summary-item">\n\
                          <span class="vod-series-summary-item-label" data-word_code="director">\n\
                              Director:\n\
                          </span>\n\
                          <span class="vod-series-summary-item-text" id="vod-series-summary-director"></span>\n\
                      </div>\n\
                      <div class="vod-series-summary-item">\n\
                          <span class="vod-series-summary-item-label" data-word_code="cast">\n\
                              Cast:\n\
                          </span>\n\
                          <span class="vod-series-summary-item-text" id="vod-series-summary-cast"></span>\n\
                      </div>\n\
                  </div>\n\
              </div>\n\
          </div>\n\
          <div class="vod-series-summary-section">\n\
              <div class="vod-series-summary-section-content-wrapper">\n\
                  <div id="vod-series-summary-description-label" data-word_code="description">Description</div>\n\
                  <div id="vod-series-summary-description"></div>\n\
              </div>\n\
          </div>\n\
      </div>\n\
  </div>\n\
</div>\n\
<div id="series-summary-page" class="height-100 page-container2 position-relative hide">\n\
  <div id="series-summary-page-content-wrapper">\n\
      <img class="vod-series-background-img" onerror="this.src=\'\'">\n\
      <div class="vod-series-background-img-overlay"></div>\n\
      <div id="series-summary-contents-container">\n\
          <div class="position-relative" style="height: 100%">\n\
              <div id="series-summary-image-wrapper">\n\
                  <img onerror="this.src=\'app_src_min/images/series-icon.png\'">\n\
                  <div class="vod-series-rating-container" id="series-rating-container">\n\
                      <svg height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 47.94 47.94" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path style="fill:#ED8A19;" d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z"></path> </g></svg>\n\
                      <div class="rating-mark" id="series-rating-mark">4.5</div>\n\
                  </div>\n\
                  <div id="series-summary-action-container">\n\
                      <button data-word_code="watch_trailer"\n\
                              class="btn series-action-btn vod-series-action-btn bg-focus"\n\
                              onmouseenter="series_summary_page.hoverButton(0)"\n\
                              onclick="series_summary_page.showTrailerVideo()"\n\
                      >\n\
                          Watch Trailer\n\
                      </button>\n\
                      <button\n\
                              class="btn series-action-btn vod-series-action-btn bg-focus"\n\
                              data-action="add"\n\
                              onmouseenter="series_summary_page.hoverButton(1)"\n\
                              onclick="series_summary_page.toggleFavourite()" data-word_code="add_to_favorite"\n\
                      >\n\
                          Add To Favorite\n\
                      </button>\n\
                  </div>\n\
              </div>\n\
              <div id="series-summary-contents-wrapper">\n\
                  <div id="series-summary-name"></div>\n\
                  <div id="series-summary-informations-container">\n\
                      <div id="series-summary-description"></div>\n\
                  </div>\n\
                  <div id="season-episodes-part">\n\
                      <div id="season-part">\n\
                          <div id="season-part-title" data-word_code="seasons">Seasons</div>\n\
                          <div id="season-items-container"></div>\n\
                      </div>\n\
                      <div id="episode-part">\n\
                          <div id="episode-part-title" data-word_code="episodes">Episodes</div>\n\
                          <div id="episode-items-container">\n\
                              <div id="episode-items-wrapper">\n\
                              </div>\n\
                          </div>\n\
                      </div>\n\
                  </div>\n\
              </div>\n\
          </div>\n\
      </div>\n\
  </div>\n\
</div>\n\
<div id="user-account-page" class="height-100 page-container1 hide">\n\
  <div class="page-content-area-1">\n\
      <div id="user-account-title" data-word_code="user_account">Change playlist m3u</div>\n\
      <div id="playlist-error">\n\
          Sorry, current playlist is not working.\n\
          the status and expiration date are for your playlist service provider not (IBOSOL).\n\
          if you have any issues please contact your playlist service provider\n\
      </div>\n\
      <div id="user-account-part-1">\n\
          <div id="playlist-items-container">\n\
              <div class="playlist-item-container">\n\
                  <div class="playlist-item-wrapper">\n\
                      <span class="playlist-icon-wrapper">\n\
                          <img class="playlist-icon" src="app_src_min/images/playlist.png">\n\
                      </span>\n\
                      <span class="playlist-name">Sample</span>\n\
                      <div class="playlist-state">\n\
                          PLAYING\n\
                      </div>\n\
                  </div>\n\
              </div>\n\
          </div>\n\
      </div>\n\
      <div id="user-account-part-2">\n\
<!--                        <div id="user-notes-container">-->\n\
<!--                            <div id="notification-title">-->\n\
<!--                                This is Title-->\n\
<!--                            </div>-->\n\
<!--                            <div id="notification-content">-->\n\
<!--                            </div>-->\n\
<!--                        </div>-->\n\
          <div class="playlist-note colored">\n\
              <span data-word_code="please_follow_these_instructions">\n\
                  Please visit following page to add/manage playlists\n\
              </span>\n\
              <br>\n\
              https://<span class="main-domain"></span>/mylist\n\
          </div>\n\
          <div id="playlist-detail-container">\n\
              <div class="playlist-detail-label">\n\
                  Mac Address\n\
              </div>\n\
              <div class="playlist-detail-value mac-address" id="playlist-device-id">\n\
                  52:54:00:12:34:56\n\
              </div>\n\
<!--                        <div class="playlist-detail-label">-->\n\
<!--                            Device Key-->\n\
<!--                        </div>-->\n\
<!--                        <div class="playlist-detail-value" id="playlist-device-key">-->\n\
<!--                            123456-->\n\
<!--                        </div>-->\n\
              <div id="app-status-container">\n\
                  <div id="app-status-label" data-word_code="your_app_status">\n\
                      Your App Status\n\
                  </div>\n\
                  <div class="app-status-item-container">\n\
                      <span class="app-status-item-label" data-word_code="expire_date">Expire Date</span><span>:</span>\n\
                      <span class="app-status-item-value expire-date">2025-12-25</span>\n\
                  </div>\n\
                  <div class="app-status-item-container">\n\
                      <span class="app-status-item-label" data-word_code="app_status">App Status</span><span>:</span>\n\
                      <span class="app-status-item-value" id="user-account-status">Active</span>\n\
                  </div>\n\
              </div>\n\
              <div id="code-activation-btn" class="bg-focus" data-word="activate_with_code"\n\
                   onmouseenter="user_account_page.hoverActivationBtn()"\n\
                   onclick="user_account_page.handleMenuClick()"\n\
              >\n\
                  Activate With Code\n\
              </div>\n\
          </div>\n\
      </div>\n\
  </div>\n\
</div>\n\
<div id="vod-summary-page" class="height-100 page-container2 position-relative hide">\n\
  <img class="vod-series-background-img" onerror="this.src=\'\'">\n\
  <div class="vod-series-background-img-overlay"></div>\n\
  <div class="vod-series-summary-page-contents-container">\n\
      <div id="vod-summary-content-container">\n\
          <div id="vod-summary-image-wrapper">\n\
              <img onerror="this.src=\'app_src_min/images/404.png\'">\n\
              <div class="vod-series-rating-container" id="vod-rating-container">\n\
                  <svg height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 47.94 47.94" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path style="fill:#ED8A19;" d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z"></path> </g></svg>\n\
                  <div class="rating-mark" id="vod-rating-mark">4.5</div>\n\
              </div>\n\
          </div>\n\
          <div class="vod-summary-information-container position-relative">\n\
              <h3 id="vod-summary-name"></h3>\n\
              <p class="vod-summary-item">\n\
                  <span class="vod-summary-item-label" data-word_code="release_date">\n\
              Release Date:\n\
          </span>\n\
                  <span class="vod-summary-item-text" id="vod-summary-release-date"></span>\n\
              </p>\n\
              <p class="vod-summary-item max-line-2">\n\
                  <span class="vod-summary-item-label" data-word_code="director">\n\
                      Director:\n\
                  </span>\n\
                  <span class="vod-summary-item-text" id="vod-summary-release-director"></span>\n\
              </p>\n\
              <p class="vod-summary-item">\n\
                  <span class="vod-summary-item-label" data-word_code="length">\n\
                      Length:\n\
                  </span>\n\
                  <span class="vod-summary-item-text" id="vod-summary-release-length"></span>\n\
              </p>\n\
              <p class="vod-summary-item max-line-2">\n\
                  <span class="vod-summary-item-label" data-word_code="cast">\n\
                      Cast:\n\
                  </span>\n\
                  <span class="vod-summary-item-text" id="vod-summary-release-cast"></span>\n\
              </p>\n\
              <p id="vod-summary-description"></p>\n\
          </div>\n\
          <div id="vod-summary-action-container">\n\
              <button id="vod-watch-trailer-button" data-word_code="watch_trailer"\n\
                      class="btn vod-action-btn vod-series-action-btn bg-focus"\n\
                      onmouseenter="vod_summary_page.hoverButton(0)"\n\
                      onclick="vod_summary_page.showTrailerVideo()"\n\
              >\n\
                  Watch Trailer\n\
              </button>\n\
              <button id="vod-watch-movie-button"\n\
                      class="btn vod-action-btn vod-series-action-btn bg-focus"\n\
                      data-word_code="watch_movie"\n\
                      onmouseenter="vod_summary_page.hoverButton(1)"\n\
                      onclick="vod_summary_page.showMovie()"\n\
              >\n\
                  Watch Movie\n\
              </button>\n\
              <button id="vod-add-favourite-button"\n\
                      class="btn vod-action-btn vod-series-action-btn bg-focus"\n\
                      data-action="add"\n\
                      onmouseenter="vod_summary_page.hoverButton(2)"\n\
                      onclick="vod_summary_page.toggleFavourite()" data-word_code="add_to_favorite"\n\
              >\n\
                  Add To Favorite\n\
              </button>\n\
          </div>\n\
      </div>\n\
  </div>\n\
</div>\n\
<div id="vod-series-player-page" class="height-100 page-container2 position-relative hide">\n\
  <div class="player-container">\n\
      <object class="position-absolute" id="vod-series-player-video" type="application/avplayer" style="width: 100%; height: 100%;"></object>\n\
      <video class="position-absolute" id="vod-series-player-video-lg" style="width: 100%; height: 100%;"></video>\n\
      <div class="video-loader">\n\
          <img src="app_src_min/images/loader.gif">\n\
      </div>\n\
      <div id="vod-series-video-title" style="display:none">\n\
      </div>\n\
      <div class="subtitle-container text-center position-absolute">\n\
      </div>\n\
      <div class="video-error">\n\
          <img src="app_src_min/images/signallost.png">\n\
      </div>\n\
      <div class="video-reconnect-message" data-word_code="reconnecting">\n\
          Reconnecting...\n\
      </div>\n\
      <div id="vod-series-video-controls-container">\n\
          <div id="vod-series-progress-controls-container">\n\
              <div id="vod-series-progress-container">\n\
                  <div id="vod-series-video-progressbar-container">\n\
<!--                                <span class="progress-amount" id="vod-series-video-progress"></span>-->\n\
                      <input class="video-progress-bar-slider" type="range" data-rangeslider>\n\
                  </div>\n\
                  <div id="vod-series-video-time-container">\n\
                      <span id="vod-series-video-current-time" class="video-time video-current-time text-left">00:00</span>\n\
                      <span id="vod-series-video-duration" class="video-time text-right video-total-time text-right">00:00</span>\n\
                  </div>\n\
              </div>\n\
              <div id="vod-series-video-controls-wrapper">\n\
                  <div class="video-control-icon text-center">\n\
                      <i class="fa fa-step-backward"\n\
                         onmouseenter="vod_series_player.hoverVideoControlIcon(0)"\n\
                         onclick="vod_series_player.showNextVideo(-1)"\n\
                      ></i>\n\
                  </div>\n\
                  <div class="video-control-icon text-center">\n\
                      <i class="fa fa-backward"\n\
                         onmouseenter="vod_series_player.hoverVideoControlIcon(1)"\n\
                         onclick="vod_series_player.seekTo(-30)"\n\
                      ></i>\n\
                  </div>\n\
                  <div class="video-control-icon text-center">\n\
                      <i class="fa fa-pause" data-action_type="pause"\n\
                         onmouseenter="vod_series_player.hoverVideoControlIcon(2)"\n\
                         onclick="vod_series_player.playPauseVideo()"\n\
                      ></i>\n\
                  </div>\n\
                  <div class="video-control-icon text-center">\n\
                      <i class="fa fa-forward"\n\
                         onmouseenter="vod_series_player.hoverVideoControlIcon(3)"\n\
                         onclick="vod_series_player.seekTo(30)"\n\
                      ></i>\n\
                  </div>\n\
                  <div class="video-control-icon text-center">\n\
                      <i class="fa fa-step-forward"\n\
                         onmouseenter="vod_series_player.hoverVideoControlIcon(4)"\n\
                         onclick="vod_series_player.showNextVideo(1)"\n\
                      ></i>\n\
                  </div>\n\
              </div>\n\
          </div>\n\
          <div class="video-info-btns-container">\n\
              <!--                        <div class="video-info-btn">-->\n\
              <!--                            <div class="video-info-icon"-->\n\
              <!--                                 onmouseenter="vod_series_player.hoverVideoInfoIcon(0)"-->\n\
              <!--                                 onclick="vod_series_player.showVideoInfo()"-->\n\
              <!--                            >-->\n\
              <!--                                <i class="fa fa-info"></i>-->\n\
              <!--                            </div>-->\n\
              <!--                        </div>-->\n\
              <div class="video-info-btn">\n\
                  <div class="video-info-icon"\n\
                       onmouseenter="vod_series_player.hoverVideoInfoIcon(0)"\n\
                       onclick="vod_series_player.showSubtitleAudioModal(\'TEXT\')"\n\
                  >\n\
                      <i class="fa fa-closed-captioning"></i>\n\
                  </div>\n\
              </div>\n\
              <div class="video-info-btn">\n\
                  <div class="video-info-icon"\n\
                       onmouseenter="vod_series_player.hoverVideoInfoIcon(1)"\n\
                       onclick="vod_series_player.showSubtitleAudioModal(\'AUDIO\')"\n\
                  >\n\
                      <i class="fa fa-audio-description"></i>\n\
                  </div>\n\
              </div>\n\
          </div>\n\
          <div id="player-seasons-container">\n\
          </div>\n\
      </div>\n\
  </div>\n\
  <div id="vod-video-info-container">\n\
      <div id="vod-video-info-img-container">\n\
          <img src=""\n\
               onerror="this.src=\'app_src_min/images/404.png\'"\n\
          >\n\
          <!--                    onerror="this.src=\'app_src_min/images/404.png\'"-->\n\
      </div>\n\
      <div id="vod-video-info-wrapper">\n\
          <div id="vod-video-info-subwrapper1">\n\
              <div id="vod-video-info-title">\n\
                  Feride - 2020\n\
              </div>\n\
              <div id="vod-video-info-desc">\n\
              </div>\n\
          </div>\n\
          <div id="vod-video-info-subwrapper2">\n\
          </div>\n\
      </div>\n\
  </div>\n\
</div>\n\
<div class="modal" id="subtitle-selection-modal" data-backdrop="static">\n\
  <div class="modal-dialog modal-dialog-centered1 modal-lg" >\n\
      <div class="modal-content">\n\
          <div class="modal-header">\n\
              <h5 class="modal-title modal-title-text-3" id="subtitle-modal-title" data-word_code="subtitle">Subtitle</h5>\n\
          </div>\n\
          <div class="modal-body" id="subtitle-modal-body">\n\
              <div id="subtitle-loader-container">\n\
                  <div class="loader small"></div>\n\
              </div>\n\
              <div id="subtitle-selection-container">\n\
              </div>\n\
              <div class="modal-button-wrapper" style="margin:1.25rem 0; padding:0 1.25rem; white-space: nowrap">\n\
                  <div style="width: 50%; vertical-align: middle;display: inline-block">\n\
                      <button type="button" class="btn modal-btn-2 subtitle-item"\n\
                              onclick="vod_series_player.cancelSubtitle()" data-word_code="cancel"\n\
                              onmouseenter="vod_series_player.hoverSubtitle(-2)"\n\
                      >\n\
                          Cancel\n\
                      </button>\n\
                  </div>\n\
                  <div style="width: 50%; vertical-align: middle;display: inline-block; text-align: right;">\n\
                      <button type="button" class="btn modal-btn-2 subtitle-item"\n\
                              onmouseenter="vod_series_player.hoverSubtitle(-1)"\n\
                              onclick="vod_series_player.confirmSubtitle()" data-word_code="ok"\n\
                      >\n\
                          OK\n\
                      </button>\n\
                  </div>\n\
              </div>\n\
          </div>\n\
      </div>\n\
  </div>\n\
</div>\n\
<div id="setting-page" class="height-100 page-container1 position-relative hide">\n\
  <div class="page-content-area-1">\n\
      <div class="page-content-wrapper-1">\n\
          <div id="setting-menus-container">\n\
              <div class="setting-menu-item-container">\n\
                  <div class="setting-menu-item-wrapper bg-focus"\n\
                       onclick="setting_page.handleMenuClick()"\n\
                       onmouseenter="setting_page.hoverSettingMenu(0)"\n\
                  >\n\
                      <div class="setting-menu-item-icon-container">\n\
                          <i class="fa fa-unlock-alt"></i>\n\
                      </div>\n\
                      <div class="setting-menu-item-text-wrapper">\n\
                          <div class="setting-menu-item-text" data-word_code="parent_control">\n\
                              Parental Control\n\
                          </div>\n\
                      </div>\n\
                  </div>\n\
              </div>\n\
              <div class="setting-menu-item-container">\n\
                  <div class="setting-menu-item-wrapper bg-focus"\n\
                       onclick="setting_page.handleMenuClick()"\n\
                       onmouseenter="setting_page.hoverSettingMenu(1)"\n\
                  >\n\
                      <div class="setting-menu-item-icon-container">\n\
                          <i class="far fa-eye-slash"></i>\n\
                      </div>\n\
                      <div class="setting-menu-item-text-wrapper">\n\
                          <div class="setting-menu-item-text" data-word_code="hide_live_category">\n\
                              Hide Live Categories\n\
                          </div>\n\
                      </div>\n\
                  </div>\n\
              </div>\n\
              <div class="setting-menu-item-container">\n\
                  <div class="setting-menu-item-wrapper bg-focus"\n\
                       onclick="setting_page.handleMenuClick()"\n\
                       onmouseenter="setting_page.hoverSettingMenu(2)"\n\
                  >\n\
                      <div class="setting-menu-item-icon-container">\n\
                          <i class="far fa-eye-slash"></i>\n\
                      </div>\n\
                      <div class="setting-menu-item-text-wrapper">\n\
                          <div class="setting-menu-item-text" data-word_code="hide_vod_category">\n\
                              Hide Vod Categories\n\
                          </div>\n\
                      </div>\n\
                  </div>\n\
              </div>\n\
              <div class="setting-menu-item-container">\n\
                  <div class="setting-menu-item-wrapper bg-focus"\n\
                       onclick="setting_page.handleMenuClick()"\n\
                       onmouseenter="setting_page.hoverSettingMenu(3)"\n\
                  >\n\
                      <div class="setting-menu-item-icon-container">\n\
                          <i class="far fa-eye-slash"></i>\n\
                      </div>\n\
                      <div class="setting-menu-item-text-wrapper">\n\
                          <div class="setting-menu-item-text" data-word_code="hide_series_category">\n\
                              Hide Series Categories\n\
                          </div>\n\
                      </div>\n\
                  </div>\n\
              </div>\n\
<!--                        <div class="setting-menu-item-container">-->\n\
<!--                            <div class="setting-menu-item-wrapper bg-focus"-->\n\
<!--                                 onclick="setting_page.handleMenuClick()"-->\n\
<!--                                 onmouseenter="setting_page.hoverSettingMenu(4)"-->\n\
<!--                            >-->\n\
<!--                                <div class="setting-menu-item-icon-container">-->\n\
<!--                                    <i class="far fa-user"></i>-->\n\
<!--                                </div>-->\n\
<!--                                <div class="setting-menu-item-text" data-word_code="user_account">-->\n\
<!--                                    User Account-->\n\
<!--                                </div>-->\n\
<!--                            </div>-->\n\
<!--                        </div>-->\n\
              <div class="setting-menu-item-container">\n\
                  <div class="setting-menu-item-wrapper bg-focus"\n\
                       onclick="setting_page.handleMenuClick()"\n\
                       onmouseenter="setting_page.hoverSettingMenu(4)"\n\
                  >\n\
                      <div class="setting-menu-item-icon-container">\n\
                          <i class="fas fa-globe"></i>\n\
                      </div>\n\
                      <div class="setting-menu-item-text-wrapper">\n\
                          <div class="setting-menu-item-text" data-word_code="change_language">\n\
                              Change Language\n\
                          </div>\n\
                      </div>\n\
                  </div>\n\
              </div>\n\
              <div class="setting-menu-item-container">\n\
                  <div class="setting-menu-item-wrapper bg-focus"\n\
                       onclick="setting_page.handleMenuClick()"\n\
                       onmouseenter="setting_page.hoverSettingMenu(5)"\n\
                  >\n\
                      <div class="setting-menu-item-icon-container">\n\
                          <i class="fas fa-user-lock"></i>\n\
                      </div>\n\
                      <div class="setting-menu-item-text-wrapper">\n\
                          <div class="setting-menu-item-text" data-word_code="change_playlist_lock">\n\
                              Change PlayList Lock\n\
                          </div>\n\
                      </div>\n\
                  </div>\n\
              </div>\n\
              <div class="setting-menu-item-container">\n\
                  <div class="setting-menu-item-wrapper bg-focus"\n\
                       onclick="setting_page.handleMenuClick()"\n\
                       onmouseenter="setting_page.hoverSettingMenu(6)"\n\
                  >\n\
                      <div class="setting-menu-item-icon-container">\n\
                          <i class="fas fa-list"></i>\n\
                      </div>\n\
                      <div class="setting-menu-item-text-wrapper">\n\
                          <div class="setting-menu-item-text" data-word_code="change_playlist">\n\
                              Change Playlist\n\
                          </div>\n\
                      </div>\n\
                  </div>\n\
              </div>\n\
              <div class="setting-menu-item-container">\n\
                  <div class="setting-menu-item-wrapper bg-focus"\n\
                       onclick="setting_page.handleMenuClick()"\n\
                       onmouseenter="setting_page.hoverSettingMenu(7)"\n\
                  >\n\
                      <div class="setting-menu-item-icon-container">\n\
                          <i class="fas fa-ticket-alt"></i>\n\
                      </div>\n\
                      <div class="setting-menu-item-text-wrapper">\n\
                          <div class="setting-menu-item-text" data-word_code="stream_format">\n\
                              Stream Format\n\
                          </div>\n\
                      </div>\n\
                  </div>\n\
              </div>\n\
              <div class="setting-menu-item-container">\n\
                  <div class="setting-menu-item-wrapper bg-focus"\n\
                       onclick="setting_page.handleMenuClick()"\n\
                       onmouseenter="setting_page.hoverSettingMenu(8)"\n\
                  >\n\
                      <div class="setting-menu-item-icon-container">\n\
                          <i class="fas fa-trash"></i>\n\
                      </div>\n\
                      <div class="setting-menu-item-text-wrapper">\n\
                          <div class="setting-menu-item-text" data-word_code="clear_cache">\n\
                              Clear Cache\n\
                          </div>\n\
                      </div>\n\
                  </div>\n\
              </div>\n\
              <div class="setting-menu-item-container">\n\
                  <div class="setting-menu-item-wrapper bg-focus"\n\
                       onclick="setting_page.handleMenuClick()"\n\
                       onmouseenter="setting_page.hoverSettingMenu(9)"\n\
                  >\n\
                      <div class="setting-menu-item-icon-container">\n\
                          <i class="fas fa-trash"></i>\n\
                      </div>\n\
                      <div class="setting-menu-item-text-wrapper">\n\
                          <div class="setting-menu-item-text" data-word_code="clear_movie_watch_list">\n\
                              Clear Movie Watch List\n\
                          </div>\n\
                      </div>\n\
                  </div>\n\
              </div>\n\
              <div class="setting-menu-item-container">\n\
                  <div class="setting-menu-item-wrapper bg-focus"\n\
                       onclick="setting_page.handleMenuClick()"\n\
                       onmouseenter="setting_page.hoverSettingMenu(10)"\n\
                  >\n\
                      <div class="setting-menu-item-icon-container">\n\
                          <i class="fas fa-trash"></i>\n\
                      </div>\n\
                      <div class="setting-menu-item-text-wrapper">\n\
                          <div class="setting-menu-item-text" data-word_code="clear_series_watch_list">\n\
                              Clear Series Watch List\n\
                          </div>\n\
                      </div>\n\
                  </div>\n\
              </div>\n\
              <div class="setting-menu-item-container">\n\
                  <div class="setting-menu-item-wrapper bg-focus"\n\
                       onclick="setting_page.handleMenuClick()"\n\
                       onmouseenter="setting_page.hoverSettingMenu(11)"\n\
                  >\n\
                      <div class="setting-menu-item-icon-container">\n\
                          <i class="fas fa-closed-captioning"></i>\n\
                      </div>\n\
                      <div class="setting-menu-item-text-wrapper">\n\
                          <div class="setting-menu-item-text" data-word_code="subtitle_settings">\n\
                              Subtitle Settings\n\
                          </div>\n\
                      </div>\n\
                  </div>\n\
              </div>\n\
          </div>\n\
      </div>\n\
      <div class="setting-page-device-info-container">\n\
          <div class="setting-page-device-info-item">\n\
              <span class="setting-page-device-info-label" data-word_code="mac_address">Mac Address</span>\n\
              <span>:</span>\n\
              <span class="setting-page-device-info-value mac-address"></span>\n\
          </div>\n\
          <div class="setting-page-device-info-item">\n\
              <span class="setting-page-device-info-label" data-word_code="current_playlist_expird">Current Playlist Expired</span>\n\
              <span>:</span>\n\
              <span class="setting-page-device-info-value playlist-expire-date"></span>\n\
          </div>\n\
      </div>\n\
  </div>\n\
  <div class="modal" id="parent-control-modal" data-backdrop="static">\n\
      <div class="modal-dialog modal-dialog-centered1 modal-xl" >\n\
          <div class="modal-content modal-bg-cyan">\n\
              <div class="modal-header">\n\
                  <h5 class="modal-title modal-title-text-2 " style="font-size:2.5rem;" data-word_code="parent_control">Parent Control</h5>\n\
              </div>\n\
              <div class="modal-body p-20" style="padding:1.25rem 1.25rem;">\n\
                  <div class="parent-modal-input-container">\n\
                      <div class="parent-modal-input-item-container"\n\
                           onmouseenter="setting_page.hoverParentControl(0)"\n\
                           onclick="setting_page.clickParentControl(0)"\n\
                      >\n\
                          <div class="parent-modal-label-wrapper text-right">\n\
                              <label class="" data-word_code="parent_pass">Current Password:</label>\n\
                          </div>\n\
                          <div class="parent-modal-input-wrapper">\n\
                              <input class="form-control" id="current_parent_password" type="password" value="" maxlength="4">\n\
                          </div>\n\
                      </div>\n\
                      <div class="parent-modal-input-item-container"\n\
                           onmouseenter="setting_page.hoverParentControl(1)"\n\
                           onclick="setting_page.clickParentControl(1)"\n\
                      >\n\
                          <div class="parent-modal-label-wrapper text-right">\n\
                              <label class="" data-word_code="net_pass">New Password:</label>\n\
                          </div>\n\
                          <div class="parent-modal-input-wrapper">\n\
                              <input class="form-control" id="new_parent_password" type="password" value="" maxlength="4">\n\
                          </div>\n\
                      </div>\n\
                      <div class="parent-modal-input-item-container"\n\
                           onmouseenter="setting_page.hoverParentControl(2)"\n\
                           onclick="setting_page.clickParentControl(2)"\n\
                      >\n\
                          <div class="parent-modal-label-wrapper text-right">\n\
                              <label class="" data-word_code="confirm_password">Confirm Password:</label>\n\
                          </div>\n\
                          <div class="parent-modal-input-wrapper">\n\
                              <input class="form-control" id="new_parent_password_confirm" type="password" value="" maxlength="4">\n\
                          </div>\n\
                      </div>\n\
                      <div class="" style="margin-top:-0.9375rem">\n\
                          <div class="parent-modal-label-wrapper text-right"></div>\n\
                          <div class="parent-modal-input-wrapper">\n\
                          <span class="invalid-feedback" id="parent-account-valid-error" style="display:none; font-size:1.25rem;">\n\
                          </span>\n\
                          </div>\n\
                      </div>\n\
                  </div>\n\
                  <div class="text-right">\n\
                      <button type="button" class="btn modal-btn-1 parent-control-modal-button "\n\
                              data-word_code="ok"\n\
                              onmouseenter="setting_page.hoverParentControl(3)"\n\
                              onclick="setting_page.clickParentControl(3)"\n\
                      >\n\
                          OK\n\
                      </button>\n\
                      <button type="button" class="btn modal-btn-1 parent-control-modal-button"\n\
                              data-word_code="cancel"\n\
                              style="margin-left:0.3125rem"\n\
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
  <div class="modal" id="user-account-modal" data-backdrop="static">\n\
      <div class="modal-dialog modal-dialog-centered1 modal-xl" >\n\
          <div class="modal-content no-background">\n\
              <div class="modal-header modal-bg-cyan" style="border-bottom: 0.125rem solid #dd6807;">\n\
                  <h5 class="modal-title modal-title-text-2 " data-word_code="user_account" style="color: #f78d0b;">Account</h5>\n\
              </div>\n\
              <div class="modal-body p-20 modal-bg-cyan" style="padding:1.25rem 1.25rem;">\n\
                  <div class="user-account-item-wrapper">\n\
                      <div class="user-account-label " data-word_code="mac_address">Mac address</div>\n\
                      <div class="user-account-value" id="user-account-mac-address"></div>\n\
                  </div>\n\
<!--                            <div class="user-account-item-wrapper">-->\n\
<!--                                <div class="user-account-label" data-word_code="device_key">Device Key</div>-->\n\
<!--                                <div class="user-account-value device-key"></div>-->\n\
<!--                            </div>-->\n\
                  <div class="user-account-item-wrapper">\n\
                      <div class="user-account-label " data-word_code="expire_date">Expire Date</div>\n\
                      <div class="user-account-value expire-date" id="user-account-expire-date"></div>\n\
                  </div>\n\
                  <div class="user-account-item-wrapper">\n\
                      <div class="user-account-label " data-word_code="app_status">App Status</div>\n\
                      <div class="user-account-value" id="user-account-is_trial"></div>\n\
                  </div>\n\
              </div>\n\
          </div>\n\
      </div>\n\
  </div>\n\
  <div class="modal" id="hide-category-modal" data-backdrop="static">\n\
      <div class="modal-dialog modal-dialog-centered1 modal-xl" >\n\
          <div class="modal-content no-background">\n\
              <div class="modal-header modal-bg-cyan" style="padding:0.3125rem;">\n\
                  <h5 class="modal-title modal-title-text-2 " style="text-align: center" data-word_code="select_categories_you_want_to_hide">Unselect Categories you want to hide</h5>\n\
              </div>\n\
              <div class="modal-body p-20 modal-bg-cyan" id="hide-modal-categories-container"\n\
                   style="padding:1.25rem 1.25rem;margin-bottom:0.3125rem">\n\
              </div>\n\
          </div>\n\
      </div>\n\
  </div>\n\
  <div class="modal" id="change-lock-modal" data-backdrop="static">\n\
      <div class="modal-dialog modal-dialog-centered1 modal-xl" >\n\
          <div class="modal-content no-background">\n\
              <div class="modal-header modal-bg-cyan" style="padding:0.3125rem;">\n\
                  <h5 class="modal-title modal-title-text-2 " style="text-align: center" data-word_code="change_lock_state">\n\
                      Change Lock State\n\
                  </h5>\n\
              </div>\n\
              <div class="modal-body p-20 modal-bg-cyan" style="padding:1.25rem 1.25rem;margin-bottom:0.3125rem">\n\
                  <div id="change-lock-modal-container">\n\
                      <div class="change-lock-modal-option bg-focus"\n\
                          onmouseenter="setting_page.hoverChangeLockModal(0)"\n\
                          onclick="setting_page.handleMenuClick()"\n\
                      >\n\
                          <input class="magic-radio" type="radio" name="lock-state" value="0">\n\
                          <label>Off</label>\n\
                      </div>\n\
                      <div class="change-lock-modal-option bg-focus"\n\
                           onmouseenter="setting_page.hoverChangeLockModal(1)"\n\
                           onclick="setting_page.handleMenuClick()"\n\
                      >\n\
                          <input class="magic-radio" type="radio" name="lock-state" value="1">\n\
                          <label>On</label>\n\
                      </div>\n\
                  </div>\n\
                  <div class="modal-btn-wrapper text-right">\n\
                      <div id="change-lock-message">Lock State Updated Successfully</div>\n\
                      <button type="button" class="btn modal-btn-1 change-lock-modal-option bg-focus" data-word_code="cancel"\n\
                          onmouseenter="setting_page.hoverChangeLockModal(2)"\n\
                          onclick="setting_page.goBack()"\n\
                      >\n\
                          Cancel\n\
                      </button>\n\
                      <button type="button" class="btn modal-btn-1 change-lock-modal-option bg-focus" data-word_code="ok"\n\
                          onmouseenter="setting_page.hoverChangeLockModal(3)"\n\
                          onclick="setting_page.changeLockState()"\n\
                      >\n\
                          Ok\n\
                      </button>\n\
                  </div>\n\
              </div>\n\
          </div>\n\
      </div>\n\
  </div>\n\
  <div class="modal" id="theme-modal" data-backdrop="static">\n\
      <div class="modal-dialog modal-dialog-centered1 modal-lg" >\n\
          <div class="modal-content">\n\
              <div class="modal-header modal-header-bg-img-1">\n\
                  <h5 class="modal-title modal-title-text-2 text-center" data-word_code="change_theme">Change Theme</h5>\n\
              </div>\n\
              <div class="modal-body modal-body-bg-img-1" style="padding:1.25rem 0rem;" id="theme-modal-body">\n\
              </div>\n\
          </div>\n\
      </div>\n\
  </div>\n\
  <div class="modal" id="language-select-modal" data-backdrop="static">\n\
      <div class="modal-dialog modal-dialog-centered1 modal-lg">\n\
          <div class="modal-content">\n\
              <div class="modal-header modal-header-bg-img-1">\n\
                  <h5 class="modal-title modal-title-text-2 text-center" data-word_code="change_language">Select Language</h5>\n\
              </div>\n\
              <div class="modal-body modal-body-bg-img-1 p-20" style="padding: 1.25rem 0">\n\
                  <div class="position-relative"  id="select-language-body">\n\
                  </div>\n\
              </div>\n\
          </div>\n\
      </div>\n\
  </div>\n\
  <div class="modal" id="stream-format-modal" data-backdrop="static">\n\
      <div class="modal-dialog modal-dialog-centered1 modal-lg" >\n\
          <div class="modal-content no-background">\n\
              <div class="modal-header modal-bg-cyan" style="padding:0.3125rem;">\n\
                  <h5 class="modal-title modal-title-text-2 " style="text-align: center"\n\
                      data-word_code="stream-format">Stream Format</h5>\n\
              </div>\n\
              <div class="modal-body modal-bg-cyan" id="stream-format-modal-body">\n\
                  <div id="stream-format-items-container">\n\
                      <div class="stream-format-option stream-format-item"\n\
                           onclick="setting_page.handleMenuClick()"\n\
                           onmouseenter="setting_page.hoverStreamFormatItem(0)"\n\
                      >\n\
                          <input class="stream-format-radio magic-radio" type="radio" name="stream-format" value="default">\n\
                          <label>Default</label>\n\
                      </div>\n\
                      <div class="stream-format-option stream-format-item"\n\
                           onclick="setting_page.handleMenuClick()"\n\
                           onmouseenter="setting_page.hoverStreamFormatItem(1)"\n\
                      >\n\
                          <input class="stream-format-radio magic-radio" type="radio" name="stream-format" value="ts">\n\
                          <label>MPEGTS(.ts)</label>\n\
                      </div>\n\
                      <div class="stream-format-option stream-format-item"\n\
                           onclick="setting_page.handleMenuClick()"\n\
                           onmouseenter="setting_page.hoverStreamFormatItem(2)"\n\
                      >\n\
                          <input class="stream-format-radio magic-radio" type="radio" name="stream-format" value="m3u8">\n\
                          <label>HLS(.m3u8)</label>\n\
                      </div>\n\
                  </div>\n\
                  <div id="stream-format-btns-container">\n\
                      <button type="button" class="btn modal-btn-1 stream-format-btn stream-format-item"\n\
                              data-word_code="ok"\n\
                              onmouseenter="setting_page.hoverStreamFormatItem(3)"\n\
                              onclick="setting_page.handleMenuClick()"\n\
                      >\n\
                          OK\n\
                      </button>\n\
                      <button type="button" class="btn modal-btn-1 stream-format-btn stream-format-item"\n\
                              data-word_code="cancel"\n\
                              style="margin-left:0.3125rem"\n\
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
      <div class="modal-dialog modal-dialog-centered1 modal-lg" >\n\
          <div class="modal-content no-background">\n\
              <div class="modal-header modal-bg-cyan" style="border-bottom: 0.125rem solid #FFF6DA;">\n\
                  <h5 class="modal-title modal-title-text-2 " data-word_code="clear_cache">Clear Cache</h5>\n\
              </div>\n\
              <div class="modal-body p-20 modal-bg-cyan">\n\
                  <div class="clear-cache-desc" data-word_code="cache_clear_desc">\n\
                      If you remove cache, all the settings, favourite, recent category, saved videos would be empty\n\
                      <br>After clearing cache, app would be restarted to apply changes.\n\
                      <br>\n\
                      Do you still want to proceed?\n\
                  </div>\n\
                  <div class="modal-button-wrapper text-center">\n\
                      <button type="button" class="btn modal-btn-1" data-word_code="no"\n\
                              onmouseenter="clear_cache_page.hoverMenuItem(0)"\n\
                              onclick="clear_cache_page.handleMenuClick()"\n\
                      >\n\
                          No\n\
                      </button>\n\
                      <button type="button" class="btn modal-btn-1" data-word_code="yes"\n\
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
      <div class="modal-dialog modal-dialog-centered1 modal-lg" >\n\
          <div class="modal-content no-background">\n\
              <div class="modal-header modal-bg-cyan" style="border-bottom: 0.125rem solid #FFF6DA;">\n\
                  <h5 class="modal-title modal-title-text-2 " data-word_code="clear_watch_lists">Clear Watch Lists</h5>\n\
              </div>\n\
              <div class="modal-body p-20 modal-bg-cyan">\n\
                  <div class="clear-cache-desc" data-word_code="clear_watch_desc">\n\
                      Are you sure to remove all watch lists?\n\
                  </div>\n\
                  <div class="modal-button-wrapper text-center">\n\
                      <button type="button" class="btn modal-btn-1" data-word_code="no"\n\
                              onmouseenter="clear_recent_page.hoverMenuItem(0)"\n\
                              onclick="clear_recent_page.handleMenuClick()"\n\
                      >\n\
                          No\n\
                      </button>\n\
                      <button type="button" class="btn modal-btn-1" data-word_code="yes"\n\
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
      <div class="modal-dialog modal-dialog-centered1 modal-lg" >\n\
          <div class="modal-content no-background">\n\
              <div class="modal-header modal-bg-cyan" style="padding:0.3125rem;">\n\
                  <h5 class="modal-title modal-title-text-2 " style="text-align: center"\n\
                      data-word_code="subtitle_setting">Subtitle Setting</h5>\n\
              </div>\n\
              <div class="modal-body modal-bg-cyan">\n\
                  <div id="subtitle-setting-label" data-word_code="subtitle_size">Subtitle Size</div>\n\
                  <div id="subtitle-btns-container">\n\
                      <div class="subtitle-btn subtitle-setting-item"\n\
                           onmouseenter="setting_page.hoverSubtitleSetting(0)"\n\
                           onclick="setting_page.increaseSubtitleSize(-1)"\n\
                      >-\n\
                      </div>\n\
                      <div class="subtitle-btn" id="current-subtitle-size">30</div>\n\
                      <div class="subtitle-btn subtitle-setting-item"\n\
                           onmouseenter="setting_page.hoverSubtitleSetting(1)"\n\
                           onclick="setting_page.increaseSubtitleSize(1)"\n\
                      >+</div>\n\
                  </div>\n\
              </div>\n\
          </div>\n\
      </div>\n\
  </div>\n\
</div>\n\
<div id="trailer-player-page" class="height-100 page-container2 position-relative" style="display: none">\n\
  <div id="trailer-player">\n\
  </div>\n\
</div>\n\
<div id="sort-modal-container">\n\
  <div id="sort-modal-content-wrapper">\n\
      <div class="sort-modal-item bg-focus"\n\
           data-word_code="default" data-sort_key="default"\n\
           onmouseenter="vod_series_page.hoverSortItem(0)"\n\
           onclick="vod_series_page.handleMenuClick()"\n\
      >\n\
          Default\n\
      </div>\n\
      <div class="sort-modal-item bg-focus"\n\
           data-word_code="added" data-sort_key="added"\n\
           onmouseenter="vod_series_page.hoverSortItem(1)"\n\
           onclick="vod_series_page.handleMenuClick()"\n\
      >\n\
          Added\n\
      </div>\n\
      <div class="sort-modal-item bg-focus"\n\
           data-word_code="a_z" data-sort_key="a_z"\n\
           onmouseenter="vod_series_page.hoverSortItem(2)"\n\
           onclick="vod_series_page.handleMenuClick()"\n\
      >\n\
          A-Z\n\
      </div>\n\
      <div class="sort-modal-item bg-focus"\n\
           data-word_code="z_a" data-sort_key="z_a"\n\
           onmouseenter="vod_series_page.hoverSortItem(3)"\n\
           onclick="vod_series_page.handleMenuClick()"\n\
      >\n\
          Z-A\n\
      </div>\n\
      <div class="sort-modal-item bg-focus"\n\
           data-word_code="rating" data-sort_key="rating"\n\
           onmouseenter="vod_series_page.hoverSortItem(4)"\n\
           onclick="vod_series_page.handleMenuClick()"\n\
      >\n\
          Rating\n\
      </div>\n\
  </div>\n\
</div>\n\
</div>\n\
<div class="search-modal-container">\n\
<div class="search-modal-wrapper">\n\
  <div class="search-input-container">\n\
      <input type="text" class="form-control" id="search-value"\n\
          onkeyup="channel_page.searchValueChange()"\n\
          onchange="channel_page.searchValueChange()"\n\
          placeholder="At Least 2 Characters needed To Search"\n\
      >\n\
      <i class="fa fa-search search-icon"></i>\n\
  </div>\n\
  <div class="position-relative">\n\
      <div class="search-content-container">\n\
      </div>\n\
  </div>\n\
</div>\n\
</div>\n\
<div class="modal" id="parent-confirm-modal" data-backdrop="static">\n\
<div class="modal-dialog modal-dialog-centered1 modal-xl" >\n\
  <div class="modal-content modal-bg-cyan">\n\
      <div class="modal-header">\n\
          <h5 class="modal-title modal-title-text-2" style="font-size:2.5rem;" data-word_code="parent_control">Parent Control</h5>\n\
      </div>\n\
      <div class="modal-body p-20" style="padding:1.25rem 1.25rem;">\n\
          <div class="parent-modal-input-container">\n\
              <div class="parent-modal-input-item-container">\n\
                  <div class="parent-modal-label-wrapper text-right">\n\
                      <label data-word_code="parent_pass">Password:</label>\n\
                  </div>\n\
                  <div class="parent-modal-input-wrapper parent-confirm-item">\n\
                      <input class="form-control" id="parent-confirm-password" type="password" value="" maxlength="4">\n\
                  </div>\n\
              </div>\n\
              <div class="" style="margin-top:-0.9375rem">\n\
                  <div class="parent-modal-label-wrapper text-right">\n\
                  </div>\n\
                  <div class="parent-modal-input-wrapper">\n\
                      <span class="invalid-feedback" id="parent-confirm-password-error">\n\
                          Sorry, parent password does not match.\n\
                      </span>\n\
                  </div>\n\
              </div>\n\
          </div>\n\
          <div class="text-right">\n\
              <button type="button" class="btn modal-btn-1 parent-confirm-modal-button parent-confirm-item"\n\
                      onclick="confirmParentPassword()" data-word_code="ok"\n\
                      style="width:9.375rem;"\n\
              >\n\
                  OK\n\
              </button>\n\
              <button type="button" class="btn modal-btn-1 parent-confirm-modal-button parent-confirm-item" data-word_code="cancel"\n\
                      onclick="cancelParentPassword()"\n\
                      style="width:9.375rem; margin-left:0.3125rem;"\n\
              >\n\
                  Cancel\n\
              </button>\n\
          </div>\n\
      </div>\n\
  </div>\n\
</div>\n\
</div>\n\
<div class="modal" id="turn-off-modal" data-backdrop="static">\n\
<div class="modal-dialog modal-dialog-centered1 modal-lg" >\n\
  <div class="modal-content modal-bg-cyan" style="border-radius: 0.625rem;padding-top: 1.25rem;">\n\
      <div class="modal-body">\n\
          <h5 class="modal-text-1 text-center" style="color: #fff;font-size: 2.8125rem !important;margin: 0.625rem 0;" data-word_code="exit_app">\n\
              DO YOU WISH TO EXIT APP?\n\
          </h5>\n\
          <div class="modal-button-wrapper text-right" style="margin:1.25rem 0; padding:0 1.25rem;margin-top: 3.75rem;margin-bottom: 0.3125rem;white-space: nowrap">\n\
              <button type="button" class="btn modal-btn-1" style="width:12.5rem;" data-word_code="yes"\n\
                  onmouseenter="turn_off_page.hoverMenuItem(0)"\n\
                  onclick="turn_off_page.handleMenuClick()"\n\
              >\n\
                  Yes\n\
              </button>\n\
              <button type="button" class="btn modal-btn-1" style="width:12.5rem; margin-left:0.625rem;" data-word_code="no"\n\
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
<div class="modal-dialog modal-dialog-centered1 modal-lg" >\n\
  <div class="modal-content modal-bg-cyan" style="border-radius: 0.625rem;padding-top: 1.25rem;">\n\
      <div class="modal-body">\n\
          <div class="activation-title" data-word_code="enter_your_activation_code">\n\
              Enter Your Activation Code\n\
          </div>\n\
          <input id="activation-input"\n\
              onmouseenter="activation_page.hoverInput()"\n\
              onclick="activation_page.handleMenuClick()"\n\
          >\n\
          <div id="activation-code-message">Sorry, Code is not valid</div>\n\
          <div class="modal-button-wrapper text-center">\n\
              <button type="button" class="btn modal-btn-1 activation-btn" style="width:12.5rem;" data-word_code="yes"\n\
                      onmouseenter="activation_page.hoverBtn(0)"\n\
                      onclick="activation_page.handleMenuClick()"\n\
              >\n\
                  Yes\n\
              </button>\n\
              <button type="button" class="btn modal-btn-1 activation-btn" style="width:12.5rem; margin-left:0.625rem;" data-word_code="no"\n\
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
<div id="video-resume-modal" >\n\
<div id="video-resume-content">\n\
  <div class="text-center" data-word_code="resume" id="vod-resume-title-1">Resume</div>\n\
  <div class="text-center" data-word_code="resume_video" id="vod-resume-title-2">\n\
      Resume playback from last position?\n\
  </div>\n\
  <div class="text-center" id="vod-resume-time">03:35</div>\n\
  <button type="button"\n\
      class="btn btn-primary resume-action-btn"\n\
      data-word_code="yes"\n\
      onmouseenter="vod_series_player.hoverResumeBtn(0)"\n\
      onclick="vod_series_player.handleMenuClick()"\n\
  >\n\
      Yes\n\
  </button>\n\
  <button type="button"\n\
      class="btn btn-primary resume-action-btn"\n\
      data-word_code="no"\n\
      onmouseenter="vod_series_player.hoverResumeBtn(1)"\n\
      onclick="vod_series_player.handleMenuClick()"\n\
  >No\n\
  </button>\n\
</div>\n\
</div>\n\
<div id="epg-loading-modal">\n\
<div id="epg-loading-modal-content">\n\
  <div id="epg-loading-modal-content-text" data-word_code="epg_loading_title">\n\
      Please wait while downloading and parsing Epg Data.<br>\n\
      It will take some time.\n\
  </div>\n\
  <div id="loading-content-progress-bar">\n\
      <div id="loading-content-progress-amount">\n\
      </div>\n\
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
  <div class="loader">\n\
  </div>\n\
</div>\n\
</div>\n\
	\n\
  <script src="$WEBAPIS/webapis/webapis.js"></script>\n\
  <script src="app_src_min/js/webOSTVjs-1.2.0/webOSTV.js"></script>\n\
  <script src="app_src_min/js/libs/jquery.3.4.1.min.js"></script>\n\
  <script src="app_src_min/js/libs/popper.1.16.0.min.js"></script>\n\
  <script src="app_src_min/js/libs/bootstrap.4.4.1.min.js"></script>\n\
  <script src="app_src_min/js/libs/moment.js"></script>\n\
  <script src="app_src_min/js/libs/rangeslider.js"></script>\n\
  <script src="https://www.youtube.com/iframe_api"></script>';