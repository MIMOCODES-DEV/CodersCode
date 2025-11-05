var app_environment = "production"; // development or production
if(app_environment == "development"){
    var STYLES=[
        "app_src/css/keyboard.css",
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
        "app_src/css/media.css"
    ];
      var SCRIPTS=[
        "app_src/js/keyboard.js",
        "app_src/js/Models/VodModel.js",
        "app_src/js/Models/LiveModel.js",
        "app_src/js/Models/SeriesModel.js",
        "app_src/js/settings.js",
        "app_src/js/common.js",
        "app_src/js/login_operation.js",
        "app_src/js/language_codes.js",
        "app_src/js/home_operation.js",
        "app_src/js/user_account_page.js",
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
        "app_src/js/side_menu.js",
        "app_src/js/main.js"
      ];

} else{
    var STYLES = ["app_src_min/css/application.min.css"];
    var SCRIPTS = ["app_src_min/js/application.min.js"]; 
}


var HTML = '<div id="loading-page" class="height-100 text-center">\n\
        <div class="loader-image-container">\n\
            <div class="loader-image-wrapper">\n\
                <ul>\n\
                    <li></li>\n\
                    <li></li>\n\
                    <li></li>\n\
                    <li></li>\n\
                    <li></li>\n\
                </ul>\n\
            </div>\n\
            <div class="loading-page-device-info-container">\n\
                <div class="loading-page-device-info-item">\n\
                    <span class="loading-page-device-info-label">Mac Address:</span>\n\
                    <span class="loading-page-device-info-value mac-address"></span>\n\
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
                        Your 7 days trial has been expired, Put your Activation Code to activate app or visit our website <span class="login-page-link">https://familyplayers.com/mylist</span> to activate your mac id\n\
                    </div>\n\
                    <div class="loading-issue-info-item">\n\
                        <span class="loading-issue-info-item-label">Your TV mac Address:</span>\n\
                        <span class="loading-issue-info-item-value mac-address"></span>\n\
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
                        To use our app, you need to upload your own playlists at https://familyplayers.com,\n\
                        or You can still continue with our demo playlists.\n\
                    </div>\n\
                    <div class="loading-issue-info-item">\n\
                        <span class="loading-issue-info-item-label">Your TV mac Address:</span>\n\
                        <span class="loading-issue-info-item-value mac-address"></span>\n\
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
        </div>\n\
        <div id="side-bar-container" class="collapsed">\n\
            <div id="side-bar-menus-container">\n\
                <div id="side-bar-menus-wrapper">\n\
                    <img id="side-bar-logo" src="app_src_min/images/logo.png">\n\
                    <div class="side-bar-menu-item-container">\n\
                        <div class="side-bar-menu-item-wrapper"\n\
                             onmouseenter="side_menu_page.hoverMenuItem(0)"\n\
                             onclick="side_menu_page.handleMenuClick()"\n\
                        >\n\
                            <div class="side-bar-menu-item-img tv"></div>\n\
                            <div class="side-bar-menu-item-title" data-word_code="live_tv">Live TV</div>\n\
                        </div>\n\
                    </div>\n\
                    <div class="side-bar-menu-item-container">\n\
                        <div class="side-bar-menu-item-wrapper"\n\
                             onmouseenter="side_menu_page.hoverMenuItem(1)"\n\
                             onclick="side_menu_page.handleMenuClick()"\n\
                        >\n\
                            <div class="side-bar-menu-item-img movie"></div>\n\
                            <div class="side-bar-menu-item-title" data-word_code="movies">Movies</div>\n\
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
                            <div class="side-bar-menu-item-img user-account"></div>\n\
                            <div class="side-bar-menu-item-title" data-word_code="user_account">User Account</div>\n\
                        </div>\n\
                    </div>\n\
                    <div class="side-bar-menu-item-container">\n\
                        <div class="side-bar-menu-item-wrapper settings"\n\
                             onmouseenter="side_menu_page.hoverMenuItem(4)"\n\
                             onclick="side_menu_page.handleMenuClick()"\n\
                        >\n\
                            <div class="side-bar-menu-item-img settings"></div>\n\
                            <div class="side-bar-menu-item-title" data-word_code="settings">Settings</div>\n\
                        </div>\n\
                    </div>\n\
                </div>\n\
                <div id="side-bar-labels-container">\n\
                    <div class="side-bar-label collapsed">>></div>\n\
                    <div class="side-bar-label expanded"><<</div>\n\
                </div>\n\
            </div>\n\
        </div>\n\
        <div id="channel-page" class="height-100 page-container1 hide">\n\
            <div class="player-container">\n\
                <object class="position-absolute" id="channel-page-video" type="application/avplayer"></object>\n\
                <video class="position-absolute" id="channel-page-video-lg"></video>\n\
                <div class="video-error">\n\
                    <img src="app_src_min/images/signallost.png">\n\
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
                <div id="user-account-title" data-word_code="user_account">User Account</div>\n\
                <div id="playlist-error">\n\
                    Sorry, current playlist is not working.\n\
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
                    <div class="playlist-note colored">\n\
                        <span data-word_code="please_follow_these_instructions">\n\
                            Please visit following page to add/manage playlists\n\
                        </span>\n\
                        <br>\n\
                        https://familyplayers.com/mylist\n\
                    </div>\n\
                    <div id="playlist-detail-container">\n\
                        <div class="playlist-detail-label">\n\
                            Mac Address\n\
                        </div>\n\
                        <div class="playlist-detail-value mac-address" id="playlist-device-id">\n\
                            52:54:00:12:34:56\n\
                        </div>\n\
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
            <div class="bottom-color-buttons-container">\n\
                <div class="bottom-color-button">\n\
                    <div class="bottom-color green"></div>\n\
                    <div class="bottom-color-label" data-word_code="refresh">Refresh</div>\n\
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
                                onmouseenter="vod_summary_variables.hoverButton(0)"\n\
                                onclick="vod_summary_variables.showTrailerVideo()"\n\
                        >\n\
                            Watch Trailer\n\
                        </button>\n\
                        <button id="vod-watch-movie-button"\n\
                                class="btn vod-action-btn vod-series-action-btn bg-focus"\n\
                                data-word_code="watch_movie"\n\
                                onmouseenter="vod_summary_variables.hoverButton(1)"\n\
                                onclick="vod_summary_variables.showMovie()"\n\
                        >\n\
                            Watch Movie\n\
                        </button>\n\
                        <button id="vod-add-favourite-button"\n\
                                class="btn vod-action-btn vod-series-action-btn bg-focus"\n\
                                data-action="add"\n\
                                onmouseenter="vod_summary_variables.hoverButton(2)"\n\
                                onclick="vod_summary_variables.toggleFavourite()" data-word_code="add_to_favorite"\n\
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
                <div id="vod-series-video-controls-container">\n\
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
                                   onmouseenter="vod_series_player_page.hoverVideoControlIcon(0)"\n\
                                   onclick="vod_series_player_page.showNextVideo(-1)"\n\
                                ></i>\n\
                            </div>\n\
                            <div class="video-control-icon text-center">\n\
                                <i class="fa fa-backward"\n\
                                   onmouseenter="vod_series_player_page.hoverVideoControlIcon(1)"\n\
                                   onclick="vod_series_player_page.seekTo(-30)"\n\
                                ></i>\n\
                            </div>\n\
                            <div class="video-control-icon text-center">\n\
                                <i class="fa fa-pause" data-action_type="pause"\n\
                                   onmouseenter="vod_series_player_page.hoverVideoControlIcon(2)"\n\
                                   onclick="vod_series_player_page.playPauseVideo()"\n\
                                ></i>\n\
                            </div>\n\
                            <div class="video-control-icon text-center">\n\
                                <i class="fa fa-forward"\n\
                                   onmouseenter="vod_series_player_page.hoverVideoControlIcon(3)"\n\
                                   onclick="vod_series_player_page.seekTo(30)"\n\
                                ></i>\n\
                            </div>\n\
                            <div class="video-control-icon text-center">\n\
                                <i class="fa fa-step-forward"\n\
                                   onmouseenter="vod_series_player_page.hoverVideoControlIcon(4)"\n\
                                   onclick="vod_series_player_page.showNextVideo(1)"\n\
                                ></i>\n\
                            </div>\n\
                        </div>\n\
                    </div>\n\
                    <div class="video-info-btns-container">\n\
                        <div class="video-info-btn">\n\
                            <div class="video-info-icon"\n\
                                 onmouseenter="vod_series_player_page.hoverVideoInfoIcon(0)"\n\
                                 onclick="vod_series_player_page.showSubtitleAudioModal(\'TEXT\')"\n\
                            >\n\
                                <i class="fa fa-closed-captioning"></i>\n\
                            </div>\n\
                        </div>\n\
                        <div class="video-info-btn">\n\
                            <div class="video-info-icon"\n\
                                 onmouseenter="vod_series_player_page.hoverVideoInfoIcon(1)"\n\
                                 onclick="vod_series_player_page.showSubtitleAudioModal(\'AUDIO\')"\n\
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
                        <div class="modal-body p-0" id="subtitle-modal-body">\n\
                            <div id="subtitle-selection-container">\n\
                            </div>\n\
                            <div class="modal-button-wrapper" style="margin:1.25rem 0; padding:0 1.25rem; white-space: nowrap">\n\
                                <div style="width: 50%; vertical-align: middle;display: inline-block">\n\
                                    <button type="button" class="btn modal-btn-2 subtitle-item"\n\
                                            onclick="vod_series_player_page.cancelSubtitle()" data-word_code="cancel"\n\
                                            onmouseenter="vod_series_player_page.hoverSubtitle(-2)"\n\
                                    >\n\
                                        Cancel\n\
                                    </button>\n\
                                </div>\n\
                                <div style="width: 50%; vertical-align: middle;display: inline-block; text-align: right;">\n\
                                    <button type="button" class="btn modal-btn-2 subtitle-item"\n\
                                            onmouseenter="vod_series_player_page.hoverSubtitle(-1)"\n\
                                            onclick="vod_series_player_page.confirmSubtitle()" data-word_code="ok"\n\
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
                                <div class="setting-menu-item-text" data-word_code="parent_control">\n\
                                    Parental Control\n\
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
                                <div class="setting-menu-item-text" data-word_code="hide_live_category">\n\
                                    Hide Live Categories\n\
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
                                <div class="setting-menu-item-text" data-word_code="hide_vod_category">\n\
                                    Hide Vod Categories\n\
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
                                <div class="setting-menu-item-text" data-word_code="hide_series_category">\n\
                                    Hide Series Categories\n\
                                </div>\n\
                            </div>\n\
                        </div>\n\
                        <div class="setting-menu-item-container">\n\
                            <div class="setting-menu-item-wrapper bg-focus"\n\
                                 onclick="setting_page.handleMenuClick()"\n\
                                 onmouseenter="setting_page.hoverSettingMenu(4)"\n\
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
            <div class="search-input-container" onclick="channel_page.handleMenuClick()">\n\
                <input type="text" class="form-control" id="search-value"\n\
                    onkeyup="channel_page.searchValueChange()"\n\
                    onchange="channel_page.searchValueChange()"\n\
                    placeholder="At Least 2 Characters needed To Search"\n\
                    onclick="event.stopPropagation()"\n\
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
                onmouseenter="vod_series_player_page.hoverResumeBtn(0)"\n\
                onclick="vod_series_player_page.handleMenuClick()"\n\
            >\n\
                Yes\n\
            </button>\n\
            <button type="button"\n\
                class="btn btn-primary resume-action-btn"\n\
                data-word_code="no"\n\
                onmouseenter="vod_series_player_page.hoverResumeBtn(1)"\n\
                onclick="vod_series_player_page.handleMenuClick()"\n\
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