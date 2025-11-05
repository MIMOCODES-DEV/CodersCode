var app_environment = "production"; // development or production
if(app_environment == "development"){
  var STYLES = [
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
    "app_src/css/hide_category.css",
    "app_src/css/search_page.css",
    "app_src/css/storage_page.css",
    "app_src/css/gallary.css",
    "app_src/css/league.css",
    "app_src/css/subtitle.css",
    "app_src/css/media.css"
  ];
  var SCRIPTS = [
    "app_src/js/Models/VodModel.js",
    "app_src/js/Models/LiveModel.js",
    "app_src/js/Models/SeriesModel.js",
    "app_src/js/settings.js",
    "app_src/js/common.js",
    "app_src/js/login_operation.js",
    "app_src/js/language_codes.js",
    "app_src/js/home_operation.js",
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
    "app_src/js/activation_page.js",
    "app_src/js/hide_category_page.js",
    "app_src/js/catchup_page.js",
    "app_src/js/catchup_detail.js",
    "app_src/js/clear_cache_page.js",
    "app_src/js/search_page.js",
    "app_src/js/storage_operation.js",
    "app_src/js/image_page.js",
    "app_src/js/league_page.js",
    "app_src/js/sport_season_page.js",
    "app_src/js/clear_recent_page.js",
    "app_src/js/playlist_edit.js",
    "app_src/js/srt_parser.js",
    "app_src/js/srt_operation.js",
    "app_src/js/main.js"
  ];
} else{
  var STYLES = ["app_src_min/css/application.min.css"];
  var SCRIPTS = ["app_src_min/js/application.min.js"]; 
}

var HTML = '<div id="loading-page" class="height-100 text-center">\n\
        <div class="loader-image-container">\n\
            <img src="'+HOST+'app_src_min/images/loader1.gif">\n\
            <div class="loading-page-device-info-container">\n\
                <div class="loading-page-device-info-item">\n\
                    <span class="loading-page-device-info-label">Mac Address:</span>\n\
                    <span class="loading-page-device-info-value mac-address"></span>\n\
                </div>\n\
                <div class="loading-page-device-info-item">\n\
                    <span class="loading-page-device-info-label">Device Key:</span>\n\
                    <span class="loading-page-device-info-value device-key"></span>\n\
                </div>\n\
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
                        Your 7 days trial has been expired, to activate your device, visit our website <span class="login-page-link">https://<span class="main-domain"></span>/mylist</span> to activate your mac id\n\
                    </div>\n\
                    <div class="loading-issue-info-item">\n\
                        <span class="loading-issue-info-item-label">Your TV mac Address:</span>\n\
                        <span class="loading-issue-info-item-value mac-address"></span>\n\
                    </div>\n\
                    <div class="loading-issue-info-item">\n\
                        <span class="loading-issue-info-item-label" data-word_code="device_key">Device Key</span>:\n\
                        <span class="loading-issue-info-item-value device-key"></span>\n\
                    </div>\n\
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
                    <div class="loading-issue-info-item">\n\
                        <span class="loading-issue-info-item-label">Your Device Key:</span>\n\
                        <span class="loading-issue-info-item-value device-key"></span>\n\
                    </div>\n\
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
            <div id="reseller-notification"></div>\n\
            <div id="home-logo-container">\n\
                <img class="app-logo" src="'+HOST+'app_src_min/images/logo.png" alt="logo" onerror="this.src=\''+HOST+'app_src_min/images/logo.png\'">\n\
            </div>\n\
            <div id="home-sections-container">\n\
                <img class="home-menu-arrow-icon left" src="'+HOST+'app_src_min/images/arrow-left.png">\n\
                <div id="home-section-items-container">\n\
                    <div id="home-section-items-wrapper">\n\
                        <div class="home-section-item-container">\n\
                            <div class="home-section-item-wrapper"\n\
                                 data-kind="channel"\n\
                                 data-index="0"\n\
                            >\n\
                                <div class="home-section-sub-menus-container">\n\
                                </div>\n\
                                <div class="menu-item-container"\n\
                                     onmouseenter="home_page.hoverMainMenu(this,false)"\n\
                                >\n\
                                    <div class="menu-item">\n\
                                        <img class="menu-item-img" src="'+HOST+'app_src_min/images/live-tv-icon.png" alt="live">\n\
                                        <div class="menu-item-txt" data-word_code="live_tv">\n\
                                            Live TV\n\
                                        </div>\n\
                                    </div>\n\
                                </div>\n\
                            </div>\n\
                            <div class="home-section-arrow top">\n\
                                <img src="'+HOST+'app_src_min/images/top_arrow.png">\n\
                            </div>\n\
                            <div class="home-section-arrow bottom">\n\
                                <img src="'+HOST+'app_src_min/images/bottom_arrow.png">\n\
                            </div>\n\
                        </div>\n\
                        <div class="home-section-item-container">\n\
                            <div class="home-section-item-wrapper"\n\
                                 data-kind="vod"\n\
                                 data-index="1"\n\
                            >\n\
                                <div class="home-section-sub-menus-container">\n\
                                </div>\n\
                                <div class="menu-item-container"\n\
                                     onmouseenter="home_page.hoverMainMenu(this,false)"\n\
                                >\n\
                                    <div class="menu-item">\n\
                                        <img class="menu-item-img" src="'+HOST+'app_src_min/images/movie-icon.png" alt="movie">\n\
                                        <div class="menu-item-txt" data-word_code="movies">\n\
                                            Movies\n\
                                        </div>\n\
                                    </div>\n\
                                </div>\n\
                            </div>\n\
                            <div class="home-section-arrow top">\n\
                                <img src="'+HOST+'app_src_min/images/top_arrow.png">\n\
                            </div>\n\
                            <div class="home-section-arrow bottom">\n\
                                <img src="'+HOST+'app_src_min/images/bottom_arrow.png">\n\
                            </div>\n\
                        </div>\n\
                        <div class="home-section-item-container">\n\
                            <div class="home-section-item-wrapper"\n\
                                 data-kind="series"\n\
                                 data-index="2"\n\
                            >\n\
                                <div class="home-section-sub-menus-container">\n\
                                </div>\n\
                                <div class="menu-item-container"\n\
                                     onmouseenter="home_page.hoverMainMenu(this,false)"\n\
                                >\n\
                                    <div class="menu-item">\n\
                                        <img class="menu-item-img" src="'+HOST+'app_src_min/images/series-icon.png" alt="series">\n\
                                        <div class="menu-item-txt" data-word_code="series">\n\
                                            Series\n\
                                        </div>\n\
                                    </div>\n\
                                </div>\n\
                            </div>\n\
                            <div class="home-section-arrow top">\n\
                                <img src="'+HOST+'app_src_min/images/top_arrow.png">\n\
                            </div>\n\
                            <div class="home-section-arrow bottom">\n\
                                <img src="'+HOST+'app_src_min/images/bottom_arrow.png">\n\
                            </div>\n\
                        </div>\n\
                        <div class="home-section-item-container">\n\
                            <div class="home-section-item-wrapper"\n\
                                 data-kind="settings"\n\
                                 data-index="3"\n\
                            >\n\
                                <div class="home-section-sub-menus-container">\n\
                                    <div class="home-section-sub-menu-item"\n\
                                         data-index="0"\n\
                                         onmouseenter="home_page.hoverSubMenu(this)"\n\
                                         onclick="home_page.handleMenuClick()"\n\
                                         data-word_code="change_playlist"\n\
                                    >\n\
                                        Change PlayList\n\
                                    </div>\n\
                                    <div class="home-section-sub-menu-item"\n\
                                         data-index="1"\n\
                                         onmouseenter="home_page.hoverSubMenu(this)"\n\
                                         onclick="home_page.handleMenuClick()"\n\
                                         data-word_code="parent_control"\n\
                                    >\n\
                                        Parent Control\n\
                                    </div>\n\
                                    <div class="home-section-sub-menu-item"\n\
                                         data-index="2"\n\
                                         onmouseenter="home_page.hoverSubMenu(this)"\n\
                                         onclick="home_page.handleMenuClick()"\n\
                                         data-word_code="hide_live_categories"\n\
                                    >\n\
                                        Hide Live Categories\n\
                                    </div>\n\
                                    <div class="home-section-sub-menu-item"\n\
                                         data-index="3"\n\
                                         onmouseenter="home_page.hoverSubMenu(this)"\n\
                                         onclick="home_page.handleMenuClick()"\n\
                                         data-word_code="hide_vod_categories"\n\
                                    >\n\
                                        Hide Vod Categories\n\
                                    </div>\n\
                                    <div class="home-section-sub-menu-item"\n\
                                         data-index="4"\n\
                                         onmouseenter="home_page.hoverSubMenu(this)"\n\
                                         onclick="home_page.handleMenuClick()"\n\
                                         data-word_code="hide_series_categories"\n\
                                    >\n\
                                        Hide Series Categories\n\
                                    </div>\n\
                                    <div class="home-section-sub-menu-item"\n\
                                         data-index="5"\n\
                                         onmouseenter="home_page.hoverSubMenu(this)"\n\
                                         onclick="home_page.handleMenuClick()"\n\
                                         data-word_code="user_account"\n\
                                    >\n\
                                        User Account\n\
                                    </div>\n\
                                    <div class="home-section-sub-menu-item"\n\
                                         data-index="6"\n\
                                         onmouseenter="home_page.hoverSubMenu(this)"\n\
                                         onclick="home_page.handleMenuClick()"\n\
                                         data-word_code="change_language"\n\
                                    >\n\
                                        Change Language\n\
                                    </div>\n\
                                    <div class="home-section-sub-menu-item"\n\
                                         data-index="7"\n\
                                         onmouseenter="home_page.hoverSubMenu(this)"\n\
                                         onclick="home_page.handleMenuClick()"\n\
                                         data-word_code="stream_format"\n\
                                    >\n\
                                        Stream Format\n\
                                    </div>\n\
                                    <div class="home-section-sub-menu-item"\n\
                                         data-index="8"\n\
                                         onmouseenter="home_page.hoverSubMenu(this)"\n\
                                         onclick="home_page.handleMenuClick()"\n\
                                         data-word_code="clear_cache"\n\
                                    >\n\
                                        Clear Cache\n\
                                    </div>\n\
                                    <div class="home-section-sub-menu-item"\n\
                                         data-index="9"\n\
                                         onmouseenter="home_page.hoverSubMenu(this)"\n\
                                         onclick="home_page.handleMenuClick()"\n\
                                         data-word_code="subtitle_setting"\n\
                                    >\n\
                                        Subtitle Setting\n\
                                    </div>\n\
                                    <div class="home-section-sub-menu-item"\n\
                                         data-index="10"\n\
                                         onmouseenter="home_page.hoverSubMenu(this)"\n\
                                         onclick="home_page.handleMenuClick()"\n\
                                         data-word_code="clear_movie_watch_lists"\n\
                                    >\n\
                                        Clear Movie Watch Lists\n\
                                    </div>\n\
                                    <div class="home-section-sub-menu-item"\n\
                                         data-index="11"\n\
                                         onmouseenter="home_page.hoverSubMenu(this)"\n\
                                         onclick="home_page.handleMenuClick()"\n\
                                         data-word_code="clear_series_watch_lists"\n\
                                    >\n\
                                        Clear Series Watch Lists\n\
                                    </div>\n\
                                </div>\n\
                                <div class="menu-item-container"\n\
                                     onmouseenter="home_page.hoverMainMenu(this,false)"\n\
                                >\n\
                                    <div class="menu-item">\n\
                                        <img class="menu-item-img" src="'+HOST+'app_src_min/images/setting-icon.png" alt="refresh">\n\
                                        <div class="menu-item-txt" data-word_code="settings">\n\
                                            Settings\n\
                                        </div>\n\
                                    </div>\n\
                                </div>\n\
                            </div>\n\
                            <div class="home-section-arrow top">\n\
                                <img src="'+HOST+'app_src_min/images/top_arrow.png">\n\
                            </div>\n\
                            <div class="home-section-arrow bottom">\n\
                                <img src="'+HOST+'app_src_min/images/bottom_arrow.png">\n\
                            </div>\n\
                        </div>\n\
                        <div class="home-section-item-container">\n\
                            <div class="home-section-item-wrapper"\n\
                                 data-kind="replay"\n\
                                 data-index="4"\n\
                                 style="background: transparent;box-shadow: none"\n\
                            >\n\
                                <div class="menu-item-container"\n\
                                     onmouseenter="home_page.hoverMainMenu(this,false)"\n\
                                >\n\
                                    <div class="menu-item">\n\
                                        <img class="menu-item-img" src="'+HOST+'app_src_min/images/replay-icon.png">\n\
                                        <div class="menu-item-txt" data-word_code="replay">\n\
                                            Replay\n\
                                        </div>\n\
                                    </div>\n\
                                </div>\n\
                            </div>\n\
                        </div>\n\
                        <div class="home-section-item-container">\n\
                            <div class="home-section-item-wrapper"\n\
                                 data-kind="search"\n\
                                 data-index="5"\n\
                            >\n\
                                <div class="home-section-sub-menus-container">\n\
                                    <div class="home-section-sub-menu-item" data-index="0"\n\
                                         onmouseenter="home_page.hoverSubMenu(this)"\n\
                                         onclick="home_page.handleMenuClick()"\n\
                                         data-word_code="live_tv"\n\
                                    >\n\
                                        Live TV\n\
                                    </div>\n\
                                    <div class="home-section-sub-menu-item" data-index="1"\n\
                                        onmouseenter="home_page.hoverSubMenu(this)"\n\
                                        onclick="home_page.handleMenuClick()"\n\
                                        data-word_code="movies"\n\
                                    >\n\
                                        Movies\n\
                                    </div>\n\
                                    <div class="home-section-sub-menu-item" data-index="2"\n\
                                         onmouseenter="home_page.hoverSubMenu(this)"\n\
                                         onclick="home_page.handleMenuClick()"\n\
                                         data-word_code="series"\n\
                                    >\n\
                                        Series\n\
                                    </div>\n\
                                </div>\n\
                                <div class="menu-item-container"\n\
                                     onmouseenter="home_page.hoverMainMenu(this,false)"\n\
                                >\n\
                                    <div class="menu-item">\n\
                                        <img class="menu-item-img" src="'+HOST+'app_src_min/images/search3.png">\n\
                                        <div class="menu-item-txt" data-word_code="search">\n\
                                            Search\n\
                                        </div>\n\
                                    </div>\n\
                                </div>\n\
                            </div>\n\
                            <div class="home-section-arrow top">\n\
                                <img src="'+HOST+'app_src_min/images/top_arrow.png">\n\
                            </div>\n\
                            <div class="home-section-arrow bottom">\n\
                                <img src="'+HOST+'app_src_min/images/bottom_arrow.png">\n\
                            </div>\n\
                        </div>\n\
                    </div>\n\
                </div>\n\
                <img class="home-menu-arrow-icon right" src="'+HOST+'app_src_min/images/arrow-right.png">\n\
            </div>\n\
            <div id="home-subscription-section-container">\n\
                <div class="user-account-item-wrapper">\n\
                    <div class="user-account-label " data-word_code="mac_address">Mac address</div>\n\
                    <div>:</div>\n\
                    <div class="user-account-value mac-address"></div>\n\
                </div>\n\
                <div class="user-account-item-wrapper">\n\
                    <div class="user-account-label" data-word_code="device_key">Device Key</div>\n\
                    <div>:</div>\n\
                    <div class="user-account-value device-key"></div>\n\
                </div>\n\
                <div class="user-account-item-wrapper">\n\
                    <div class="user-account-label " data-word_code="expire_date">Playlist Expire Date</div>\n\
                    <div>:</div>\n\
                    <div class="user-account-value expire-date"></div>\n\
                </div>\n\
                <div class="user-account-item-wrapper">\n\
                    <div class="user-account-label " data-word_code="app_status">App Status</div>\n\
                    <div>:</div>\n\
                    <div class="user-account-value app-status"></div>\n\
                </div>\n\
            </div>\n\
        </div>\n\
        <div id="search-page" class="height-100" style="display: none">\n\
            <div id="search-page-top-menus-container">\n\
                <div class="search-page-top-menu-container" id="search-page-input-container"\n\
                >\n\
                    <div class="search-page-top-menu search-page-input-container"\n\
                         onmouseenter="search_page.hoverTopMenu(0)"\n\
                         onclick="search_page.handleMenuClick()"\n\
                    >\n\
                        <input id="search-page-input"\n\
                               onkeyup="search_page.keywordChange()"\n\
                               onchange="search_page.keywordChange()"\n\
                               onclick="event.stopPropagation()"\n\
                               maxlength="20"\n\
                               placeholder="Type Keyword Here"\n\
                        >\n\
                        <i class="fa fa-search"></i>\n\
                    </div>\n\
                </div>\n\
            </div>\n\
            <div id="search-page-title"></div>\n\
            <div id="search-page-contents-wrapper">\n\
            </div>\n\
        </div>\n\
        <div id="channel-page" class="height-100 hide">\n\
            <div id="channel-page-left-part">\n\
                <div class="categories-container" id="channel-page-categories-container">\n\
                    <div id="current-channel-category"></div>\n\
                    <div id="channel-page-categories-wrapper"></div>\n\
                </div>\n\
                <div class="menus-container position-relative" id="channel-page-menu-container">\n\
                    <div id="current-channel-name-container">\n\
                        <span id="current-channel-name"></span>\n\
                        <img class="channel-page-back-icon" src="'+HOST+'app_src_min/images/back.png">\n\
                    </div>\n\
                    <div id="channel-page-menu-wrapper"></div>\n\
                </div>\n\
            </div>\n\
            <div class="right-container" id="channel-page-right-part">\n\
                <div class="current-date" id="channel-page-date">Tue, Mar 15</div>\n\
                <div class="player-container">\n\
                    <object class="position-absolute" id="channel-page-video" type="application/avplayer"></object>\n\
                    <video class="position-absolute" id="channel-page-video-lg"></video>\n\
                        <div class="video-loader">\n\
                            <img src="'+HOST+'app_src_min/images/loader.gif">\n\
                        </div>\n\
                    <div class="video-error">\n\
                        <img src="'+HOST+'app_src_min/images/no_signal.jpg">\n\
                    </div>\n\
                    <div class="video-reconnect-message" data-word_code="reconnecting">\n\
                        Reconnecting...\n\
                    </div>\n\
                </div>\n\
                <div class="channel-information-container">\n\
                    <div id="catch-up-btn"\n\
                        onmouseenter="channel_page.hoverCatchUpBtn()"\n\
                        onclick="channel_page.handleMenuClick()"\n\
                    >\n\
                        <img class="catch-up-icon" src="'+HOST+'app_src_min/images/clock.png">\n\
                        <span data-word_code="catch_up">Catch Up</span>\n\
                        <img class="catch-up-right-icon" src="'+HOST+'app_src_min/images/arrow-right.png">\n\
                    </div>\n\
                    <div id="channel-title-container">\n\
                        <div id="channel-title"></div>\n\
                        <div class="current-time" id="channel-page-current-time">\n\
                            10:58\n\
                        </div>\n\
                    </div>\n\
                    <div class="next-program-item" id="channel-page-current-programme"></div>\n\
                    <div id="channel-current-programme-infos">\n\
                        <div id="channel-page-progress-container" class="progress">\n\
                            <span class="progress-amount"></span>\n\
                        </div>\n\
                        <div id="channel-current-programme-description"></div>\n\
                    </div>\n\
                </div>\n\
                <div id="full-screen-information">\n\
                    <div class="full-screen-contents-wrapper">\n\
                        <div id="full-screen-channel-title-wrapper">\n\
                            <span id="full-screen-channel-number">\n\
                                5\n\
                            </span>\n\
                            <img id="full-screen-channel-logo" onerror="this.src=default_movie_icon">\n\
                            <span id="full-screen-channel-title">Channel Title Here</span>\n\
                        </div>\n\
                        <div class="full-screen-program-names-wrapper">\n\
                            <span class="full-screen-program-name-wrapper current">\n\
                                <span class="full-screen-program-name"></span>\n\
                            </span>\n\
                            <span class="full-screen-program-name-wrapper next">\n\
                                <span class="full-screen-next-program-label" data-word_code="next">Next</span>:\n\
                                <span class="full-screen-program-name">Next Programme Here</span>\n\
                            </span>\n\
                        </div>\n\
                        <div id="full-screen-progress-bar-container">\n\
                            <div class="full-screen-program-time current"></div>\n\
                            <div id="full-screen-progress" class="progress-amount">\n\
                                <span class="progress-amount"></span>\n\
                            </div>\n\
                            <div class="full-screen-program-time next"></div>\n\
                        </div>\n\
                    </div>\n\
                    <div class="video-resolution"></div>\n\
                </div>\n\
                <div id="channel-page-bottom-container" class="bottom-container">q\n\
                    <div class="bottom-label-item">\n\
                        <div class="bottom-label-icon bottom-item-blue"></div>\n\
                        <div class="bottom-label-txt" data-word_code="search">Search</div>\n\
                    </div>\n\
                    <div class="bottom-label-item">\n\
                        <div class="bottom-label-icon bottom-item-red"></div>\n\
                        <div class="bottom-label-txt" data-word_code="move_category_position">Move Category Position</div>\n\
                    </div>\n\
                    <div class="bottom-label-item">\n\
                        <div class="bottom-label-icon bottom-item-yellow"></div>\n\
                        <div class="bottom-label-txt" data-word_code="fav">Fav</div>\n\
                    </div>\n\
                    <div class="bottom-label-item">\n\
                        <div class="bottom-label-txt">CH+ / CH-</div>\n\
                    </div>\n\
                </div>\n\
            </div>\n\
            <div id="typed-channel-number"></div>\n\
            <div id="channel-epg-container">\n\
                <div id="channel-epg-sub-container">\n\
                    <div id="epg-channel-name"></div>\n\
                    <div id="channel-epg-wrapper" class="has-vertical-scroll">\n\
                    </div>\n\
                </div>\n\
            </div>\n\
        </div>\n\
        <div id="vod-series-page" class="height-100 hide">\n\
            <div id="vod-series-page-container">\n\
                <div id="vod-series-page-wrapper">\n\
                    <div id="vod-series-right-part">\n\
                        <div id="vod-series-page-title-container">\n\
                            <span id="vod-series-video-type">Movies</span>\n\
                            <span class="vod-series-page-title-separate">/</span>\n\
                            <span id="vod-series-current-category">New Releases</span>\n\
                            <span class="vod-series-page-title-separate">/</span>\n\
                            <span id="vod-series-sort-key-container">\n\
                        <span data-word_code="by">By </span>\n\
                        <span id="vod-series-sort-key">Added</span>\n\
                    </span>\n\
                        </div>\n\
                        <div id="vod-series-title-part">\n\
                        <span id="vod-series-search-wrapper"  class="top-menu"\n\
                              onmouseenter="vod_series_page.hoverTopMenu(0)"\n\
                              onclick="vod_series_page.handleMenuClick()"\n\
                        >\n\
                            <span id="vod-series-search-icon">\n\
                                <i class="fa fa-search"></i>\n\
                            </span>\n\
                            <input id="vod-series-search-input" placeholder="Search" maxlength="20"\n\
                                   onkeyup="vod_series_page.searchValueChange()"\n\
                                   onchange="vod_series_page.searchValueChange()"\n\
                                   onclick="event.stopPropagation()"\n\
                            >\n\
                        </span>\n\
                            <span class="vod-series-top-menu-container">\n\
                            <span class="vod-series-top-menu-btn top-menu" data-word_code="sort"\n\
                                  onmouseenter="vod_series_page.hoverTopMenu(1)"\n\
                                  onclick="vod_series_page.handleMenuClick()"\n\
                            >\n\
                                Sort\n\
                            </span>\n\
                        </span>\n\
                        </div>\n\
                        <div id="vod-series-categories-container">\n\
                        </div>\n\
                        <div id="vod-series-menus-container"></div>\n\
                    </div>\n\
                    <div id="vod-series-page-summary-container">\n\
                        <div class="vod-series-page-summary-item">\n\
                            <span class="vod-series-page-summary-item-label" data-word_code="rating">Rating</span>\n\
                            <span class="vod-series-page-summary-item-value" id="vod-series-rating">5.6</span>\n\
                        </div>\n\
                        <div class="vod-series-page-summary-item">\n\
                            <span class="vod-series-page-summary-item-label" data-word_code="age">Age</span>\n\
                            <span class="vod-series-page-summary-item-value" id="vod-series-age">12+</span>\n\
                        </div>\n\
                        <div class="vod-series-page-summary-item">\n\
                            <span class="vod-series-page-summary-item-label" data-word_code="genre">Genre</span>\n\
                            <span class="vod-series-page-summary-item-value" id="vod-series-genre">Commedy/Action/Advanture</span>\n\
                        </div>\n\
                        <div class="vod-series-page-summary-item">\n\
                            <span class="vod-series-page-summary-item-label" data-word_code="director">Director</span>\n\
                            <span class="vod-series-page-summary-item-value" id="vod-series-director">Carolina Jemith</span>\n\
                        </div>\n\
                        <div id="vod-series-page-summary-img-container">\n\
                            <div id="vod-series-page-summary-img-wrapper">\n\
                                <div id="vod-series-page-summary-watch-status">\n\
                                    <i class="fa fa-eye"></i>\n\
                                </div>\n\
                                <img id="vod-series-page-summary-img" onerror="this.src=\''+HOST+'app_src_min/images/logo.png\'">\n\
                            </div>\n\
                        </div>\n\
                    </div>\n\
                </div>\n\
                <div class="vod-series-guidance-container right">\n\
                    <div class="vod-series-guidance-wrapper">\n\
                        <div class="vod-series-guidance-content-wrapper">\n\
                            <i class="fa fa-caret-right vod-series-guidance-icon"></i>\n\
                            <span class="vod-series-guidance-text" data-word_code="about_movie">About Movie</span>\n\
                            <i class="fa fa-caret-right vod-series-guidance-icon"></i>\n\
                        </div>\n\
                    </div>\n\
                </div>\n\
            </div>\n\
            <div id="vod-series-page-bottom-labels-container">\n\
                <div class="bottom-label-item">\n\
                    <div class="bottom-label-icon bottom-item-blue"></div>\n\
                    <div class="bottom-label-txt" data-word_code="search">Search</div>\n\
                </div>\n\
                <div class="bottom-label-item">\n\
                    <div class="bottom-label-icon bottom-item-yellow"></div>\n\
                    <div class="bottom-label-txt" data-word_code="favourite">Favourite</div>\n\
                </div>\n\
                <div class="bottom-label-item">\n\
                    <div class="bottom-label-icon bottom-item-red"></div>\n\
                    <div class="bottom-label-txt" data-word_code="sort">Sort</div>\n\
                </div>\n\
                <div class="bottom-label-item">\n\
                    <div class="bottom-label-icon bottom-item-green"></div>\n\
                    <div class="bottom-label-txt" data-word_code="move_category_position">Move Category Position</div>\n\
                </div>\n\
            </div>\n\
        </div>\n\
        <div id="playlist-page" class="height-100 hide">\n\
            <div id="playlist-page-part-1">\n\
                <div id="playlist-error">\n\
                    Sorry, current playlist is not working.\n\
                    the status and expiration date are for your playlist service provider not (IBO STB).\n\
                    if you have any issues please contact your playlist service provider\n\
                </div>\n\
                <div id="playlist-items-container">\n\
                    <div class="playlist-item-container">\n\
                        <div class="playlist-item-wrapper">\n\
                            <span class="playlist-name">Sample</span>\n\
                            <div class="playlist-state">\n\
                                PLAYING\n\
                            </div>\n\
                        </div>\n\
                    </div>\n\
                </div>\n\
                <div id="user-notes-container">\n\
                    <div id="notification-title">\n\
                        This is Title\n\
                    </div>\n\
                    <div id="notification-content">\n\
                    </div>\n\
                </div>\n\
                <div id="playlist-page-bottom-container">\n\
                    <div class="bottom-label-item">\n\
                        <div class="bottom-label-icon bottom-item-blue"></div>\n\
                        <div class="bottom-label-txt" data-word_code="add_playlist">Add PlayList</div>\n\
                    </div>\n\
                    <div class="bottom-label-item">\n\
                        <div class="bottom-label-icon bottom-item-red"></div>\n\
                        <div class="bottom-label-txt" data-word_code="remove_playlist">Remove PlayList</div>\n\
                    </div>\n\
                </div>\n\
            </div>\n\
            <div id="playlist-page-part-2">\n\
                <div class="playlist-note colored">\n\
                    Please follow these instructions to add/manage playlists\n\
                </div>\n\
                <div class="playlist-note">\n\
                    Use the following information to manage the playlists\n\
                </div>\n\
                <div class="playlist-note colored">\n\
                    Please login to https://<span class="main-domain"></span>/mylist\n\
                </div>\n\
                <div id="playlist-detail-container">\n\
                    <div class="playlist-detail-label">\n\
                        Mac Address\n\
                    </div>\n\
                    <div class="playlist-detail-value mac-address" id="playlist-device-id">\n\
                        52:54:00:12:34:56\n\
                    </div>\n\
                    <div class="playlist-detail-label">\n\
                        Device Key\n\
                    </div>\n\
                    <div class="playlist-detail-value device-key">\n\
                    </div>\n\
                </div>\n\
            </div>\n\
        </div>\n\
        <div id="playlist-edit-page" class="height-100 hide page-container1 h-padding-page page-element">\n\
            <div id="playlist-edit-page-container">\n\
                <div class="playlist-edit-item-wrapper">\n\
                    <label data-word_code="playlist_name">PlayList Name</label>\n\
                    <input class="form-control playlist-edit-item" id="playlist-name"\n\
                           onmouseenter="playlist_edit_page.hoverPlaylistEditItem(0)"\n\
                           onclick="playlist_edit_page.handleMenuClick()"\n\
                    >\n\
                </div>\n\
                <div class="playlist-edit-item-wrapper">\n\
                    <label data-word_code="host_url">Host Url</label>\n\
                    <input class="form-control playlist-edit-item" id="playlist-url" placeholder="http://yoursite.com:port/"\n\
                           onmouseenter="playlist_edit_page.hoverPlaylistEditItem(1)"\n\
                           onclick="playlist_edit_page.handleMenuClick()"\n\
                    >\n\
                </div>\n\
                <div class="playlist-edit-item-wrapper">\n\
                    <label data-word_code="user_name">User Name</label>\n\
                    <input class="form-control playlist-edit-item" id="user-name"\n\
                           onmouseenter="playlist_edit_page.hoverPlaylistEditItem(2)"\n\
                           onclick="playlist_edit_page.handleMenuClick()"\n\
                    >\n\
                </div>\n\
                <div class="playlist-edit-item-wrapper">\n\
                    <label data-word_code="password">Password</label>\n\
                    <input class="form-control playlist-edit-item" id="password"\n\
                           onmouseenter="playlist_edit_page.hoverPlaylistEditItem(3)"\n\
                           onclick="playlist_edit_page.handleMenuClick()"\n\
                    >\n\
                </div>\n\
                <div id="playlist-edit-error-message"></div>\n\
                <div id="playlist-edit-btns-container">\n\
                    <button class="btn playlist-edit-btn  playlist-edit-item"\n\
                            onmouseenter="playlist_edit_page.hoverPlaylistEditItem(4)"\n\
                            onclick="playlist_edit_page.handleMenuClick()"\n\
                    >\n\
                        Save\n\
                    </button>\n\
                    <button class="btn playlist-edit-btn  playlist-edit-item"\n\
                            onmouseenter="playlist_edit_page.hoverPlaylistEditItem(5)"\n\
                            onclick="playlist_edit_page.handleMenuClick()"\n\
                    >\n\
                        Cancel\n\
                    </button>\n\
                </div>\n\
            </div>\n\
        </div>\n\
        <div id="vod-summary-page" class="height-100 position-relative hide">\n\
            <img class="vod-series-background-img" onerror="hideImg(this)">\n\
            <div class="vod-series-summary-contents-container">\n\
                <div class="position-relative">\n\
                    <div id="vod-summary-image-wrapper">\n\
                        <img onerror="this.src=\''+HOST+'app_src_min/images/logo.png\'">\n\
                    </div>\n\
                    <div id="vod-summary-action-container" class="vod-series-btns-container">\n\
                        <button id="vod-watch-trailer-button" data-word_code="watch_trailer"\n\
                                class="btn vod-action-btn vod-series-action-btn"\n\
                                onmouseenter="vod_summary_page.hoverButton(0)"\n\
                                onclick="vod_summary_page.showTrailerVideo()"\n\
                        >\n\
                            Watch Trailer\n\
                        </button>\n\
                        <button id="vod-watch-movie-button"\n\
                                class="btn vod-action-btn vod-series-action-btn"\n\
                                data-word_code="watch_movie"\n\
                                onmouseenter="vod_summary_page.hoverButton(1)"\n\
                                onclick="vod_summary_page.showMovie()"\n\
                        >\n\
                            Watch Movie\n\
                        </button>\n\
                        <button id="vod-add-favourite-button"\n\
                                class="btn vod-action-btn vod-series-action-btn"\n\
                                data-action="add"\n\
                                onmouseenter="vod_summary_page.hoverButton(2)"\n\
                                onclick="vod_summary_page.toggleFavourite()" data-word_code="add_to_favorite"\n\
                        >\n\
                            Add To Favorite\n\
                        </button>\n\
                    </div>\n\
                    <div class="vod-series-contents-wrapper">\n\
                        <h3 id="vod-summary-name"></h3>\n\
                        <div class="vod-series-short-info-container">\n\
                            <span class="vod-series-short-info-item" id="vod-summary-release-genre"></span>\n\
                            <span class="vod-series-short-info-item" id="vod-summary-release-date"></span>\n\
                            <div class="vod-series-rating-container" id="vod-rating-container">\n\
                                <div class="rating">\n\
                                    <div class="rating-upper" style="width: 0%">\n\
                                        <span>★</span>\n\
                                        <span>★</span>\n\
                                        <span>★</span>\n\
                                        <span>★</span>\n\
                                        <span>★</span>\n\
                                        <span>★</span>\n\
                                        <span>★</span>\n\
                                        <span>★</span>\n\
                                        <span>★</span>\n\
                                        <span>★</span>\n\
                                    </div>\n\
                                    <div class="rating-lower">\n\
                                        <span>★</span>\n\
                                        <span>★</span>\n\
                                        <span>★</span>\n\
                                        <span>★</span>\n\
                                        <span>★</span>\n\
                                        <span>★</span>\n\
                                        <span>★</span>\n\
                                        <span>★</span>\n\
                                        <span>★</span>\n\
                                        <span>★</span>\n\
                                    </div>\n\
                                </div>\n\
                                <div class="rating-mark" id="vod-rating-mark"></div>\n\
                            </div>\n\
                        </div>\n\
                        <p id="vod-summary-description"></p>\n\
                    </div>\n\
                </div>\n\
            </div>\n\
        </div>\n\
        <div id="series-summary-page" class="height-100 position-relative hide">\n\
            <img class="vod-series-background-img" onerror="hideImg(this)">\n\
            <div id="series-summary-contents-container" class="vod-series-summary-contents-container">\n\
                <div class="position-relative">\n\
                    <div id="series-summary-image-wrapper">\n\
                        <img onerror="this.src=\''+HOST+'app_src_min/images/series-icon.png\'">\n\
                    </div>\n\
                    <div id="series-summary-action-container" class="vod-series-btns-container">\n\
                        <button data-word_code="watch_trailer"\n\
                                class="btn series-action-btn vod-series-action-btn"\n\
                                onmouseenter="series_summary_page.hoverButton(0)"\n\
                                onclick="series_summary_page.showTrailerVideo()"\n\
                        >\n\
                            Watch Trailer\n\
                        </button>\n\
                        <button\n\
                                class="btn series-action-btn vod-series-action-btn"\n\
                                onmouseenter="series_summary_page.hoverButton(1)"\n\
                                onclick="series_summary_page.showSeasons()"\n\
                                data-word_code="episodes"\n\
                        >\n\
                            Episode\n\
                        </button>\n\
                        <button\n\
                                class="btn series-action-btn vod-series-action-btn"\n\
                                data-action="add"\n\
                                onmouseenter="series_summary_page.hoverButton(2)"\n\
                                onclick="series_summary_page.toggleFavourite()" data-word_code="add_to_favorite"\n\
                        >\n\
                            Add To Favorite\n\
                        </button>\n\
                    </div>\n\
                    <div id="series-summary-contents-wrapper" class="vod-series-contents-wrapper">\n\
                        <div id="series-summary-name"></div>\n\
                        <div class="vod-series-short-info-container">\n\
                            <span class="vod-series-short-info-item" id="series-summary-release-genre"></span>\n\
                            <span class="vod-series-short-info-item" id="series-summary-release-date"></span>\n\
                            <div class="vod-series-rating-container" id="series-rating-container">\n\
                                <div class="rating">\n\
                                    <div class="rating-upper" style="width: 0%">\n\
                                        <span>★</span>\n\
                                        <span>★</span>\n\
                                        <span>★</span>\n\
                                        <span>★</span>\n\
                                        <span>★</span>\n\
                                        <span>★</span>\n\
                                        <span>★</span>\n\
                                        <span>★</span>\n\
                                        <span>★</span>\n\
                                        <span>★</span>\n\
                                    </div>\n\
                                    <div class="rating-lower">\n\
                                        <span>★</span>\n\
                                        <span>★</span>\n\
                                        <span>★</span>\n\
                                        <span>★</span>\n\
                                        <span>★</span>\n\
                                        <span>★</span>\n\
                                        <span>★</span>\n\
                                        <span>★</span>\n\
                                        <span>★</span>\n\
                                        <span>★</span>\n\
                                    </div>\n\
                                </div>\n\
                                <div class="rating-mark" id="series-rating-mark">4.5</div>\n\
                            </div>\n\
                        </div>\n\
                        <p id="series-summary-description"></p>\n\
                    </div>\n\
                </div>\n\
            </div>\n\
            <div id="season-episodes-container">\n\
                <div id="season-items-container">\n\
                    <div id="season-items-wrapper">\n\
                    </div>\n\
                </div>\n\
                <div id="episode-items-container">\n\
                    <div id="episode-items-wrapper"></div>\n\
                </div>\n\
            </div>\n\
        </div>\n\
        <div id="vod-series-player-page" class="height-100 position-relative hide">\n\
            <div class="player-container">\n\
                <object class="position-absolute" id="vod-series-player-video" type="application/avplayer" style="width: 100%; height: 100%;"></object>\n\
                <video class="position-absolute" id="vod-series-player-video-lg" style="width: 100%; height: 100%;"></video>\n\
                <div class="video-loader">\n\
                    <img src="'+HOST+'app_src_min/images/loader.gif">\n\
                </div>\n\
                <div class="subtitle-container text-center position-absolute">\n\
                </div>\n\
                <div class="video-error">\n\
                    <img src="'+HOST+'app_src_min/images/no_signal.jpg">\n\
                </div>\n\
                <div class="video-reconnect-message" data-word_code="reconnecting">\n\
                    Reconnecting...\n\
                </div>\n\
                <div id="vod-series-video-controls-container">\n\
                    <div id="vod-series-video-title"></div>\n\
                    <div id="vod-series-progress-controls-container">\n\
                        <div id="vod-series-progress-container">\n\
                            <div id="vod-series-video-progressbar-container">\n\
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
                         onerror="this.src=\''+HOST+'app_src_min/images/logo.png\'"\n\
                    >\n\
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
        </div>\n\
        <div id="setting-page" class="height-100 position-relative hide">\n\
            <div id="setting-menus-container">\n\
                <div class="setting-menu-item-container">\n\
                    <div class="setting-menu-item-wrapper"\n\
                         onclick="setting_page.handleMenuClick()"\n\
                         onmouseenter="setting_page.hoverSettingMenu(0)"\n\
                    >\n\
                        <div class="setting-menu-item-icon-container">\n\
                            <i class="fa fa-unlock-alt"></i>\n\
                        </div>\n\
                        <div class="setting-menu-item-text" data-word_code="parent_control">\n\
                            Parental Control\n\
                        </div>\n\
                    </div>\n\
                </div>\n\
                <div class="setting-menu-item-container">\n\
                    <div class="setting-menu-item-wrapper"\n\
                         onclick="setting_page.handleMenuClick()"\n\
                         onmouseenter="setting_page.hoverSettingMenu(1)"\n\
                    >\n\
                        <div class="setting-menu-item-icon-container">\n\
                            <i class="far fa-eye-slash"></i>\n\
                        </div>\n\
                        <div class="setting-menu-item-text" data-word_code="hide_live_category">\n\
                            Hide Live Categories\n\
                        </div>\n\
                    </div>\n\
                </div>\n\
                <div class="setting-menu-item-container">\n\
                    <div class="setting-menu-item-wrapper"\n\
                         onclick="setting_page.handleMenuClick()"\n\
                         onmouseenter="setting_page.hoverSettingMenu(2)"\n\
                    >\n\
                        <div class="setting-menu-item-icon-container">\n\
                            <i class="far fa-eye-slash"></i>\n\
                        </div>\n\
                        <div class="setting-menu-item-text" data-word_code="hide_vod_category">\n\
                            Hide Vod Categories\n\
                        </div>\n\
                    </div>\n\
                </div>\n\
                <div class="setting-menu-item-container">\n\
                    <div class="setting-menu-item-wrapper"\n\
                         onclick="setting_page.handleMenuClick()"\n\
                         onmouseenter="setting_page.hoverSettingMenu(3)"\n\
                    >\n\
                        <div class="setting-menu-item-icon-container">\n\
                            <i class="far fa-eye-slash"></i>\n\
                        </div>\n\
                        <div class="setting-menu-item-text" data-word_code="hide_series_category">\n\
                            Hide Series Categories\n\
                        </div>\n\
                    </div>\n\
                </div>\n\
                <div class="setting-menu-item-container">\n\
                    <div class="setting-menu-item-wrapper"\n\
                         onclick="setting_page.handleMenuClick()"\n\
                         onmouseenter="setting_page.hoverSettingMenu(4)"\n\
                    >\n\
                        <div class="setting-menu-item-icon-container">\n\
                            <i class="far fa-user"></i>\n\
                        </div>\n\
                        <div class="setting-menu-item-text" data-word_code="user_account">\n\
                            User Account\n\
                        </div>\n\
                    </div>\n\
                </div>\n\
                <div class="setting-menu-item-container">\n\
                    <div class="setting-menu-item-wrapper"\n\
                         onclick="setting_page.handleMenuClick()"\n\
                         onmouseenter="setting_page.hoverSettingMenu(5)"\n\
                    >\n\
                        <div class="setting-menu-item-icon-container">\n\
                            <i class="fas fa-globe"></i>\n\
                        </div>\n\
                        <div class="setting-menu-item-text" data-word_code="change_language">\n\
                            Change Language\n\
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
        </div>\n\
        <div class="modal" id="parent-control-modal" data-backdrop="static">\n\
            <div class="modal-dialog modal-dialog-centered1 modal-xl" >\n\
                <div class="modal-content modal-bg-cyan">\n\
                    <div class="modal-header">\n\
                        <h5 class="modal-title modal-title-text-2 " style="font-size:2.5rem;" data-word_code="parent_control">Parent Control</h5>\n\
                    </div>\n\
                    <div class="modal-body p-20" style="padding:1.25rem 1.25rem;">\n\
                        <div class="parent-modal-input-container">\n\
                            <div class="parent-modal-input-item-container parent-control-item"\n\
                                 onmouseenter="home_page.hoverParentControl(0)"\n\
                                 onclick="home_page.clickParentControl(0)"\n\
                            >\n\
                                <div class="parent-modal-label-wrapper text-right">\n\
                                    <label class="" data-word_code="parent_pass">Current Password:</label>\n\
                                </div>\n\
                                <div class="parent-modal-input-wrapper">\n\
                                    <input class="form-control" id="current_parent_password" type="password" value="" maxlength="4">\n\
                                </div>\n\
                            </div>\n\
                            <div class="parent-modal-input-item-container parent-control-item"\n\
                                 onmouseenter="home_page.hoverParentControl(1)"\n\
                                 onclick="home_page.clickParentControl(1)"\n\
                            >\n\
                                <div class="parent-modal-label-wrapper text-right">\n\
                                    <label class="" data-word_code="net_pass">New Password:</label>\n\
                                </div>\n\
                                <div class="parent-modal-input-wrapper">\n\
                                    <input class="form-control" id="new_parent_password" type="password" value="" maxlength="4">\n\
                                </div>\n\
                            </div>\n\
                            <div class="parent-modal-input-item-container parent-control-item"\n\
                                 onmouseenter="home_page.hoverParentControl(2)"\n\
                                 onclick="home_page.clickParentControl(2)"\n\
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
                                    <div id="parent-account-valid-error"></div>\n\
                                </div>\n\
                            </div>\n\
                        </div>\n\
                        <div class="text-right">\n\
                            <button type="button" class="btn modal-btn-1 parent-control-modal-button parent-control-item"\n\
                                    data-word_code="ok"\n\
                                    onmouseenter="home_page.hoverParentControl(3)"\n\
                                    onclick="home_page.clickParentControl(3)"\n\
                            >\n\
                                OK\n\
                            </button>\n\
                            <button type="button" class="btn modal-btn-1 parent-control-modal-button parent-control-item"\n\
                                    data-word_code="cancel"\n\
                                    style="margin-left:0.3125rem"\n\
                                    onmouseenter="home_page.hoverParentControl(4)"\n\
                                    onclick="home_page.clickParentControl(4)"\n\
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
                        <div class="user-account-item-wrapper">\n\
                            <div class="user-account-label" data-word_code="device_key">Device Key</div>\n\
                            <div class="user-account-value device-key"></div>\n\
                        </div>\n\
                        <div class="user-account-item-wrapper">\n\
                            <div class="user-account-label " data-word_code="expire_date">Expire Date</div>\n\
                            <div class="user-account-value" id="user-account-expire-date"></div>\n\
                        </div>\n\
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
                    <div class="modal-body modal-body-bg-img-1 p-20" style="padding: 0 0">\n\
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
                                 onmouseenter="home_page.hoverStreamFormatItem(0)"\n\
                            >\n\
                                <input class="stream-format-radio magic-radio" type="radio" name="stream-format" value="default">\n\
                                <label>Default</label>\n\
                            </div>\n\
                            <div class="stream-format-option stream-format-item"\n\
                                 onclick="setting_page.handleMenuClick()"\n\
                                 onmouseenter="home_page.hoverStreamFormatItem(1)"\n\
                            >\n\
                                <input class="stream-format-radio magic-radio" type="radio" name="stream-format" value="ts">\n\
                                <label>MPEGTS(.ts)</label>\n\
                            </div>\n\
                            <div class="stream-format-option stream-format-item"\n\
                                 onclick="setting_page.handleMenuClick()"\n\
                                 onmouseenter="home_page.hoverStreamFormatItem(2)"\n\
                            >\n\
                                <input class="stream-format-radio magic-radio" type="radio" name="stream-format" value="m3u8">\n\
                                <label>HLS(.m3u8)</label>\n\
                            </div>\n\
                        </div>\n\
                        <div id="stream-format-btns-container">\n\
                            <button type="button" class="btn modal-btn-1 stream-format-btn stream-format-item"\n\
                                    data-word_code="ok"\n\
                                    onmouseenter="home_page.hoverStreamFormatItem(3)"\n\
                                    onclick="setting_page.handleMenuClick()"\n\
                            >\n\
                                OK\n\
                            </button>\n\
                            <button type="button" class="btn modal-btn-1 stream-format-btn stream-format-item"\n\
                                    data-word_code="cancel"\n\
                                    style="margin-left:0.3125rem"\n\
                                    onmouseenter="home_page.hoverStreamFormatItem(4)"\n\
                                    onclick="setting_page.handleMenuClick()"\n\
                            >\n\
                                Cancel\n\
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
                                 onmouseenter="home_page.hoverSubtitleSetting(0)"\n\
                                 onclick="home_page.increaseSubtitleSize(-1)"\n\
                            >-\n\
                            </div>\n\
                            <div class="subtitle-btn" id="current-subtitle-size">30</div>\n\
                            <div class="subtitle-btn subtitle-setting-item"\n\
                                 onmouseenter="home_page.hoverSubtitleSetting(1)"\n\
                                 onclick="home_page.increaseSubtitleSize(1)"\n\
                            >+</div>\n\
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
        <div id="trailer-player-page" class="height-100 position-relative" style="display: none">\n\
            <div id="trailer-player">\n\
            </div>\n\
        </div>\n\
        <div id="sort-modal-container" class="sort-modal-container">\n\
            <div class="sort-modal-content-container">\n\
                <div class="sort-modal-wrapper">\n\
                    <div class="sort-modal-title" data-word_code="select_year">Select Year</div>\n\
                    <div class="sort-modal-items-wrapper">\n\
                        <div class="sort-modal-item"\n\
                             data-word_code="default" data-sort_key="default"\n\
                             onmouseenter="vod_series_page.hoverSortItem(0)"\n\
                             onclick="vod_series_page.handleMenuClick()"\n\
                        >\n\
                            Default\n\
                        </div>\n\
                        <div class="sort-modal-item"\n\
                             data-word_code="added" data-sort_key="added"\n\
                             onmouseenter="vod_series_page.hoverSortItem(1)"\n\
                             onclick="vod_series_page.handleMenuClick()"\n\
                        >\n\
                            Added\n\
                        </div>\n\
                        <div class="sort-modal-item"\n\
                             data-word_code="a_z" data-sort_key="a_z"\n\
                             onmouseenter="vod_series_page.hoverSortItem(2)"\n\
                             onclick="vod_series_page.handleMenuClick()"\n\
                        >\n\
                            A-Z\n\
                        </div>\n\
                        <div class="sort-modal-item"\n\
                             data-word_code="z_a" data-sort_key="z_a"\n\
                             onmouseenter="vod_series_page.hoverSortItem(3)"\n\
                             onclick="vod_series_page.handleMenuClick()"\n\
                        >\n\
                            Z-A\n\
                        </div>\n\
                        <div class="sort-modal-item"\n\
                             data-word_code="rating" data-sort_key="rating"\n\
                             onmouseenter="vod_series_page.hoverSortItem(4)"\n\
                             onclick="vod_series_page.handleMenuClick()"\n\
                        >\n\
                            Rating\n\
                        </div>\n\
                    </div>\n\
                </div>\n\
            </div>\n\
        </div>\n\
        <div id="year-filter-modal-container" class="sort-modal-container">\n\
            <div class="sort-modal-content-container">\n\
                <div class="sort-modal-wrapper">\n\
                    <div class="sort-modal-title" data-word_code="select_year">Select Year</div>\n\
                    <div class="sort-modal-items-wrapper">\n\
                    </div>\n\
                </div>\n\
            </div>\n\
        </div>\n\
        <div id="hide-category-page" class="height-100 hide">\n\
            <div id="hide-category-page-label-part">\n\
                <div id="hide-category-page-label-container">\n\
                    <div id="hide-category-stream-type">TV Series</div>\n\
                    <div id="hide-category-title">Category Edit</div>\n\
                </div>\n\
            </div>\n\
            <div id="hide-category-categories-container">\n\
                <div id="hide-category-categories-wrapper">\n\
                </div>\n\
            </div>\n\
            <div id="hide-category-actions-container">\n\
                <div class="hide-category-actions-wrapper">\n\
                    <div class="hide-category-action-btn" data-word_code="select_all"\n\
                        onmouseenter="hide_category_page.hoverActionBtn(0)"\n\
                        onclick="hide_category_page.selectAll()"\n\
                    >\n\
                        Select All\n\
                    </div>\n\
                    <div class="hide-category-action-btn" data-word_code="save"\n\
                         onmouseenter="hide_category_page.hoverActionBtn(1)"\n\
                         onclick="hide_category_page.saveHiddenCategories()"\n\
                    >\n\
                        Save\n\
                    </div>\n\
                    <div class="hide-category-action-btn" data-word_code="cancel"\n\
                         onmouseenter="hide_category_page.hoverActionBtn(2)"\n\
                         onclick="hide_category_page.cancel()"\n\
                    >\n\
                        Cancel\n\
                    </div>\n\
                </div>\n\
            </div>\n\
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
                            <input class="stream-page-search-input search-input" id="catchup-page-category-search-input" onclick="event.stopPropagation()" >\n\
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
        <div id="storage-page" class="height-100" style="display:none">\n\
            <div id="storage-page-path-container">\n\
                internal0/Subdir1\n\
            </div>\n\
            <div id="storage-page-container">\n\
                <div id="directories-container">\n\
                    <div id="directories-wrapper">\n\
                    </div>\n\
                </div>\n\
                <div id="description-container">\n\
                    <div id="description-wrapper">\n\
                        <div class="description-item-wrapper">\n\
                            <span class="description-item-label">Date Modified:</span>\n\
                            <span class="description-item-value">23/12/2022 11:33 PM</span>\n\
                        </div>\n\
                        <div class="description-item-wrapper">\n\
                            <span class="description-item-label">Size</span>\n\
                            <span class="description-item-value">12.23MB</span>\n\
                        </div>\n\
                    </div>\n\
                </div>\n\
            </div>\n\
        </div>\n\
        <div id="image-page" class="height-100" style="display: none">\n\
            <ul id=\'image-gallery\' class="info-gallery"></ul>\n\
        </div>\n\
        <div id="league-page" class="height-100 hide">\n\
            <div id="league-page-content-wrapper">\n\
                <div id="league-page-left-side-bar" class="league-page-side-bar">\n\
                    <div id="league-page-title" data-word_code="sport_leagues">Sport Leagues</div>\n\
                    <div id="sport-items-container">\n\
                    </div>\n\
                </div>\n\
                <div id="league-page-right-side-bar" class="league-page-side-bar">\n\
                    <div class="stream-page-search-bar-wrapper search-bar-wrapper top-menu" id="league-page-search-bar"\n\
                         onmouseenter="league_page.hoverTopMenu(0)"\n\
                         onclick="league_page.handleMenuClick()"\n\
                         onchange="league_page.searchValueChange()"\n\
                         onkeyup="league_page.searchValueChange()"\n\
                    >\n\
                        <i class="fa fa-search search-icon"></i>\n\
                        <input class="stream-page-search-input search-input" id="league-page-search-input">\n\
                    </div>\n\
                    <div id="league-items-container"></div>\n\
                </div>\n\
                <div id="league-page-seasons-part" class="league-page-side-bar">\n\
                    <div id="league-page-season-items-container"></div>\n\
                </div>\n\
            </div>\n\
        </div>\n\
        <div id="sport-season-page">\n\
            <div id="sport-season-league-name">Current League</div>\n\
            <div id="sport-season-page-contents-wrapper">\n\
                <div class="season-detail-section">\n\
                    <div class="season-detail-title" data-word_code="attended_teams">Attended Teams</div>\n\
                    <div class="season-detail-section-items-container" id="season-teams-container">\n\
                    </div>\n\
                </div>\n\
                <div class="season-detail-section" id="standings-container">\n\
                    <div class="season-detail-title" data-word_code="standings">Season Standing</div>\n\
                    <div class="season-detail-section-items-container" id="standing-items-container">\n\
                    </div>\n\
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
                                onclick="parent_confirm_page.handleMenuClick()" data-word_code="ok"\n\
                                style="width:9.375rem;"\n\
                        >\n\
                            OK\n\
                        </button>\n\
                        <button type="button" class="btn modal-btn-1 parent-confirm-modal-button parent-confirm-item" data-word_code="cancel"\n\
                                onclick="parent_confirm_page.handleMenuClick()"\n\
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
    </div>';