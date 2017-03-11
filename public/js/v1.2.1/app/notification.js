/**
 *  Init
 */

define('app/init',['jquery'], function($) {

    'use strict';

    let Config = {
        path: {
            img: 'public/img/',                                             // path for images
            // user API
            getCaptcha: 'api/user/getCaptcha',                              // ajax URL - get captcha image
            getServerStatus: 'api/user/getEveServerStatus',                 // ajax URL - get EVE-Online server status
            getCookieCharacterData: 'api/user/getCookieCharacter',          // ajax URL - get character data from cookie
            logIn: 'api/user/logIn',                                        // ajax URL - login
            logout: 'api/user/logout',                                      // ajax URL - logout
            deleteLog: 'api/user/deleteLog',                                // ajax URL - delete character log
            saveUserConfig: 'api/user/saveAccount',                         // ajax URL - saves/update user account
            deleteAccount: 'api/user/deleteAccount',                        // ajax URL - delete Account data
            // access API
            searchAccess: 'api/access/search',                              // ajax URL - search user/corporation/ally by name
            // main config/map ping API
            initMap: 'api/map/init',                                        // ajax URL - get static data
            getAccessData: 'api/map/getAccessData',                         // ajax URL - get map access tokens (WebSocket)
            updateMapData: 'api/map/updateData',                            // ajax URL - main map update trigger
            updateUserData: 'api/map/updateUserData',                       // ajax URL - main map user data trigger
            // map API
            saveMap: 'api/map/save',                                        // ajax URL - save/update map
            deleteMap: 'api/map/delete',                                    // ajax URL - delete map
            importMap: 'api/map/import',                                    // ajax URL - import map
            getMapConnectionData: 'api/map/getConnectionData',              // ajax URL - get connection data
            // system API
            searchSystem: 'api/system/search',                              // ajax URL - search system by name
            saveSystem: 'api/system/save',                                  // ajax URL - saves system to map
            deleteSystem: 'api/system/delete',                              // ajax URL - delete system from map
            getSystemGraphData: 'api/system/graphData',                     // ajax URL - get all system graph data
            getConstellationData: 'api/system/constellationData',           // ajax URL - get system constellation data
            setDestination: 'api/system/setDestination',                    // ajax URL - set destination
            // connection API
            saveConnection: 'api/connection/save',                          // ajax URL - save new connection to map
            deleteConnection: 'api/connection/delete',                      // ajax URL - delete connection from map
            // signature API
            getSignatures: 'api/signature/getAll',                          // ajax URL - get all signature data for system
            saveSignatureData: 'api/signature/save',                        // ajax URL - save signature data for system
            deleteSignatureData: 'api/signature/delete',                    // ajax URL - delete signature data for system
            // route API
            searchRoute: 'api/route/search',                                // ajax URL - search system routes
            // stats API
            getStatisticsData: 'api/statistic/getData',                     // ajax URL - get statistics data (activity log)
            // GitHub API
            gitHubReleases: 'api/github/releases'                           // ajax URL - get release info from GitHub
        },
        url: {
            ccpImageServer: 'https://image.eveonline.com/',                 // CCP image Server
            zKillboard: 'https://zkillboard.com/api/'                       // killboard api
        },
        breakpoints: [
            { name: 'desktop', width: Infinity },
            { name: 'tablet',  width: 1200 },
            { name: 'fablet',  width: 780 },
            { name: 'phone',   width: 480 }
        ],
        animationSpeed: {
            splashOverlay: 300,                                             // "splash" loading overlay
            headerLink: 100,                                                // links in head bar
            mapOverlay: 200,                                                // show/hide duration for map overlays
            mapMoveSystem: 180,                                             // system position has changed animation
            mapDeleteSystem: 200,                                           // remove system from map
            mapModule: 200,                                                 // show/hide of an map module
            dialogEvents: 180                                               // dialog events /slide/show/...
        },
        syncStatus: {
            type: 'ajax',
            webSocket: {
                status: 'closed',
                class: 'txt-color-danger',
                timestamp: undefined
            },
            sharedWorker: {
                status: 'offline',                                          // SharedWorker status
                class: 'txt-color-danger',
                timestamp: undefined
            },
            ajax: {
                status: 'enabled',
                class: 'txt-color-success',
                timestamp: undefined
            }
        },
        performanceLogging: {
            keyServerMapData: 'UPDATE_SERVER_MAP',                          // ajax request update map data
            keyClientMapData: 'UPDATE_CLIENT_MAP',                          // update client map data
            keyServerUserData: 'UPDATE_SERVER_USER_DATA',                   // ajax request update map user data
            keyClientUserData: 'UPDATE_CLIENT_USER_DATA',                   // update client map user data
        },
        mapIcons: [                                                         // map tab-icons
            {
                class: 'fa-desktop',
                label: 'desktop',
                unicode: '&#xf108;'
            },{
                class: 'fa-bookmark',
                label: 'bookmark',
                unicode: '&#xf02e;'
            },{
                class: 'fa-cube',
                label: 'cube',
                unicode: '&#xf1b2;'
            },{
                class: 'fa-plane',
                label: 'plane',
                unicode: '&#xf072;'
            },{
                class: 'fa-globe',
                label: 'globe',
                unicode: '&#xf0ac;'
            },{
                class: 'fa-rocket',
                label: 'rocket',
                unicode: '&#xf135;'
            },{
                class: 'fa-life-ring',
                label: 'life ring',
                unicode: '&#xf1cd;'
            },{
                class: 'fa-heart',
                label: 'heart',
                unicode: '&#xf004;'
            }
        ],

        classes: {
            // log types
            logTypes: {
                info: {
                    class: 'pf-log-info',
                    label: 'info'
                },
                warning: {
                    class: 'pf-log-warning',
                    label: 'warning'
                },
                error: {
                    class: 'pf-log-error',
                    label: 'error'
                }
            },
            // system effects
            systemEffects: {

                effect: {
                    class: 'pf-system-effect',
                    name: 'no effect'
                },
                magnetar: {
                    class: 'pf-system-effect-magnetar',
                    name: 'magnetar'
                },
                redGiant: {
                    class: 'pf-system-effect-redgiant',
                    name: 'red giant'
                },
                pulsar: {
                    class: 'pf-system-effect-pulsar',
                    name: 'pulsar'
                },
                wolfRayet: {
                    class: 'pf-system-effect-wolfrayet',
                    name: 'wolf rayet'
                },
                cataclysmic: {
                    class: 'pf-system-effect-cataclysmic',
                    name: 'cataclysmic'
                },
                blackHole: {
                    class: 'pf-system-effect-blackhole',
                    name: 'black hole'
                }
            },
            // system security
            systemSecurity: {
                security: {
                    class: 'pf-system-sec'
                },
                'SH': {
                    class: 'pf-system-sec-unknown'
                },
                'H': {
                    class: 'pf-system-sec-highSec'
                },
                'L': {
                    class: 'pf-system-sec-lowSec'
                },
                '0.0': {
                    class: 'pf-system-sec-nullSec'
                },
                'C6': {
                    class: 'pf-system-sec-high'
                },
                'C5': {
                    class: 'pf-system-sec-high'
                },
                'C4': {
                    class: 'pf-system-sec-mid'
                },
                'C3': {
                    class: 'pf-system-sec-mid'
                },
                'C2': {
                    class: 'pf-system-sec-low'
                },
                'C1': {
                    class: 'pf-system-sec-low'
                }
            },
            // true sec
            trueSec: {
                '0.0': {
                    class: 'pf-system-security-0-0'
                },
                '0.1': {
                    class: 'pf-system-security-0-1'
                },
                '0.2': {
                    class: 'pf-system-security-0-2'
                },
                '0.3': {
                    class: 'pf-system-security-0-3'
                },
                '0.4': {
                    class: 'pf-system-security-0-4'
                },
                '0.5': {
                    class: 'pf-system-security-0-5'
                },
                '0.6': {
                    class: 'pf-system-security-0-6'
                },
                '0.7': {
                    class: 'pf-system-security-0-7'
                },
                '0.8': {
                    class: 'pf-system-security-0-8'
                },
                '0.9': {
                    class: 'pf-system-security-0-9'
                },
                '1.0': {
                    class: 'pf-system-security-1-0'
                }
            },
            // system info
            systemInfo: {
                rally: {
                    class: 'pf-system-info-rally',
                    label: 'rally point'
                }
            },
            // easy-pie-charts
            pieChart: {
                class: 'pf-pie-chart',                                      // class for all pie charts
                pieChartMapCounterClass: 'pf-pie-chart-map-timer'           // class for timer chart
            }
        },
        // map scopes
        defaultMapScope: 'wh',                                              // default scope for connection
        // map connection types
        connectionTypes: {
            jumpbridge: {
                cssClass: 'pf-map-connection-jumpbridge',
                paintStyle: {
                    dashstyle: '4 2 1 2'
                }
            },
            stargate: {
                cssClass: 'pf-map-connection-stargate',
                paintStyle: {
                    dashstyle: '0' // solid line
                }
            },
            wh_eol: {
                cssClass: 'pf-map-connection-wh-eol',
                paintStyle: {
                    dashstyle: '0' // solid line
                }
            },
            wh_fresh: {
                cssClass: 'pf-map-connection-wh-fresh',
                paintStyle: {
                    dashstyle: '0' // solid line
                }
            },
            wh_reduced: {
                cssClass: 'pf-map-connection-wh-reduced',
                paintStyle: {
                    dashstyle: '0' // solid line
                }
            },
            wh_critical: {
                cssClass: 'pf-map-connection-wh-critical',
                paintStyle: {
                    dashstyle: '0' // solid line
                }
            },
            frigate: {
                cssClass: 'pf-map-connection-frig',
                paintStyle: {
                    dashstyle: '0.99'
                },
                overlays:[
                    ['Label',
                        {
                            label: 'frig',
                            cssClass: ['pf-map-connection-overlay', 'frig'].join(' '),
                            location: 0.6
                        }]
                ]
            },
            preserve_mass: {
                cssClass: 'pf-map-connection-preserve-mass',
                overlays:[
                    ['Label',
                        {
                            label: '<i class="fa fa-fw fa-warning"></i>&nbsp;save mass',
                            cssClass: ['pf-map-connection-overlay', 'mass'].join(' '),
                            location: 0.6
                        }]
                ]
            }
        },
        // signature groups
        signatureGroups: {
            1: {
                name: 'combat site', //*
                label: 'Combat'
            },
            2: {
                name: 'relic site', //*
                label: 'Relic'
            },
            3: {
                name: 'data site',
                label: 'Data'
            },
            4: {
                name: 'gas site',
                label: 'Gas'
            },
            5: {
                name: 'wormhole',
                label: 'Wormhole'
            },
            6: {
                name: 'ore site',
                label: 'Ore'
            },
            7: {
                name: 'ghost',
                label: 'Ghost'
            }
        },
        // frigate wormholes
        frigateWormholes: {
            1: {    // C1
                1: 'E004 - C1',
                2: 'L005 - C2',
                3: 'Z006 - C3',
                4: 'M001 - C4',
                5: 'C008 - C5',
                6: 'G008 - C6',
                7: 'Q003 - 0.0',
                8: 'A009 - (shattered)'
            },
            2: {    // C2
                1: 'E004 - C1',
                2: 'L005 - C2',
                3: 'Z006 - C3',
                4: 'M001 - C4',
                5: 'C008 - C5',
                6: 'G008 - C6',
                7: 'Q003 - 0.0',
                8: 'A009 - (shattered)'
            },
            3: {    // C3
                1: 'E004 - C1',
                2: 'L005 - C2',
                3: 'Z006 - C3',
                4: 'M001 - C4',
                5: 'C008 - C5',
                6: 'G008 - C6',
                7: 'Q003 - 0.0',
                8: 'A009 - (shattered)'
            },
            4: {    // C4
                1: 'E004 - C1',
                2: 'L005 - C2',
                3: 'Z006 - C3',
                4: 'M001 - C4',
                5: 'C008 - C5',
                6: 'G008 - C6',
                7: 'Q003 - 0.0',
                8: 'A009 - (shattered)'
            },
            5: {    // C5
                1: 'E004 - C1',
                2: 'L005 - C2',
                3: 'Z006 - C3',
                4: 'M001 - C4',
                5: 'C008 - C5',
                6: 'G008 - C6',
                7: 'Q003 - 0.0',
                8: 'A009 - (shattered)'
            },
            6: {    // C6
                1: 'E004 - C1',
                2: 'L005 - C2',
                3: 'Z006 - C3',
                4: 'M001 - C4',
                5: 'C008 - C5',
                6: 'G008 - C6',
                7: 'Q003 - 0.0',
                8: 'A009 - (shattered)'
            },
            13: {   // Shattered Wormholes (some of them are static)
                1: 'E004 - C1',
                2: 'L005 - C2',
                3: 'Z006 - C3',
                4: 'M001 - C4',
                5: 'C008 - C5',
                6: 'G008 - C6',
                7: 'Q003 - 0.0',
                8: 'A009 - (shattered)'
            }
        },
        // incoming wormholes
        incomingWormholes: {
            1: 'K162 - C1/2/3 (unknown)',
            2: 'K162 - C4/5 (dangerous)',
            3: 'K162 - C6 (deadly)',
            4: 'K162 - HS',
            5: 'K162 - LS',
            6: 'K162 - 0.0',
            7: 'K162 - Thera'
        }

    };

    return Config;
});

/*
 PNotify 3.0.0 sciactive.com/pnotify/
 (C) 2015 Hunter Perrin; Google, Inc.
 license Apache-2.0
 */
/*
 * ====== PNotify ======
 *
 * http://sciactive.com/pnotify/
 *
 * Copyright 2009-2015 Hunter Perrin
 * Copyright 2015 Google, Inc.
 *
 * Licensed under Apache License, Version 2.0.
 * 	http://www.apache.org/licenses/LICENSE-2.0
 */

(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as a module.
		define('pnotify', ['jquery'], function($){
			return factory($, root);
		});
	} else if (typeof exports === 'object' && typeof module !== 'undefined') {
		// CommonJS
		module.exports = factory(require('jquery'), global || root);
	} else {
		// Browser globals
		root.PNotify = factory(root.jQuery, root);
	}
}(this, function($, root){
	var init = function(root){
		var default_stack = {
			dir1: "down",
			dir2: "left",
			push: "bottom",
			spacing1: 36,
			spacing2: 36,
			context: $("body"),
			modal: false
		};
		var posTimer, // Position all timer.
			body,
			jwindow = $(root);
		// Set global variables.
		var do_when_ready = function(){
			body = $("body");
			PNotify.prototype.options.stack.context = body;
			jwindow = $(root);
			// Reposition the notices when the window resizes.
			jwindow.bind('resize', function(){
				if (posTimer) {
					clearTimeout(posTimer);
				}
				posTimer = setTimeout(function(){
					PNotify.positionAll(true);
				}, 10);
			});
		};
		var createStackOverlay = function(stack) {
			var overlay = $("<div />", {"class": "ui-pnotify-modal-overlay"});
			overlay.prependTo(stack.context);
			if (stack.overlay_close) {
				// Close the notices on overlay click.
				overlay.click(function(){
					PNotify.removeStack(stack);
				});
			}
			return overlay;
		};
		var PNotify = function(options){
			this.parseOptions(options);
			this.init();
		};
		$.extend(PNotify.prototype, {
			// The current version of PNotify.
			version: "3.0.0",

			// === Options ===

			// Options defaults.
			options: {
				// The notice's title.
				title: false,
				// Whether to escape the content of the title. (Not allow HTML.)
				title_escape: false,
				// The notice's text.
				text: false,
				// Whether to escape the content of the text. (Not allow HTML.)
				text_escape: false,
				// What styling classes to use. (Can be either "brighttheme", "jqueryui", "bootstrap2", "bootstrap3", or "fontawesome".)
				styling: "brighttheme",
				// Additional classes to be added to the notice. (For custom styling.)
				addclass: "",
				// Class to be added to the notice for corner styling.
				cornerclass: "",
				// Display the notice when it is created.
				auto_display: true,
				// Width of the notice.
				width: "300px",
				// Minimum height of the notice. It will expand to fit content.
				min_height: "16px",
				// Type of the notice. "notice", "info", "success", or "error".
				type: "notice",
				// Set icon to true to use the default icon for the selected
				// style/type, false for no icon, or a string for your own icon class.
				icon: true,
				// The animation to use when displaying and hiding the notice. "none"
				// and "fade" are supported through CSS. Others are supported
				// through the Animate module and Animate.css.
				animation: "fade",
				// Speed at which the notice animates in and out. "slow", "normal",
				// or "fast". Respectively, 600ms, 400ms, 200ms.
				animate_speed: "normal",
				// Display a drop shadow.
				shadow: true,
				// After a delay, remove the notice.
				hide: true,
				// Delay in milliseconds before the notice is removed.
				delay: 8000,
				// Reset the hide timer if the mouse moves over the notice.
				mouse_reset: true,
				// Remove the notice's elements from the DOM after it is removed.
				remove: true,
				// Change new lines to br tags.
				insert_brs: true,
				// Whether to remove notices from the global array.
				destroy: true,
				// The stack on which the notices will be placed. Also controls the
				// direction the notices stack.
				stack: default_stack
			},

			// === Modules ===

			// This object holds all the PNotify modules. They are used to provide
			// additional functionality.
			modules: {},
			// This runs an event on all the modules.
			runModules: function(event, arg){
				var curArg;
				for (var module in this.modules) {
					curArg = ((typeof arg === "object" && module in arg) ? arg[module] : arg);
					if (typeof this.modules[module][event] === 'function') {
						this.modules[module].notice = this;
						this.modules[module].options = typeof this.options[module] === 'object' ? this.options[module] : {};
						this.modules[module][event](this, typeof this.options[module] === 'object' ? this.options[module] : {}, curArg);
					}
				}
			},

			// === Class Variables ===

			state: "initializing", // The state can be "initializing", "opening", "open", "closing", and "closed".
			timer: null, // Auto close timer.
			animTimer: null, // Animation timer.
			styles: null,
			elem: null,
			container: null,
			title_container: null,
			text_container: null,
			animating: false, // Stores what is currently being animated (in or out).
			timerHide: false, // Stores whether the notice was hidden by a timer.

			// === Events ===

			init: function(){
				var that = this;

				// First and foremost, we don't want our module objects all referencing the prototype.
				this.modules = {};
				$.extend(true, this.modules, PNotify.prototype.modules);

				// Get our styling object.
				if (typeof this.options.styling === "object") {
					this.styles = this.options.styling;
				} else {
					this.styles = PNotify.styling[this.options.styling];
				}

				// Create our widget.
				// Stop animation, reset the removal timer when the user mouses over.
				this.elem = $("<div />", {
					"class": "ui-pnotify "+this.options.addclass,
					"css": {"display": "none"},
					"aria-live": "assertive",
					"aria-role": "alertdialog",
					"mouseenter": function(e){
						if (that.options.mouse_reset && that.animating === "out") {
							if (!that.timerHide) {
								return;
							}
							that.cancelRemove();
						}
						// Stop the close timer.
						if (that.options.hide && that.options.mouse_reset) {
							that.cancelRemove();
						}
					},
					"mouseleave": function(e){
						// Start the close timer.
						if (that.options.hide && that.options.mouse_reset && that.animating !== "out") {
							that.queueRemove();
						}
						PNotify.positionAll();
					}
				});
				// Maybe we need to fade in/out.
				if (this.options.animation === "fade") {
					this.elem.addClass("ui-pnotify-fade-"+this.options.animate_speed);
				}
				// Create a container for the notice contents.
				this.container = $("<div />", {
					"class": this.styles.container+" ui-pnotify-container "+(this.options.type === "error" ? this.styles.error : (this.options.type === "info" ? this.styles.info : (this.options.type === "success" ? this.styles.success : this.styles.notice))),
					"role": "alert"
				}).appendTo(this.elem);
				if (this.options.cornerclass !== "") {
					this.container.removeClass("ui-corner-all").addClass(this.options.cornerclass);
				}
				// Create a drop shadow.
				if (this.options.shadow) {
					this.container.addClass("ui-pnotify-shadow");
				}


				// Add the appropriate icon.
				if (this.options.icon !== false) {
					$("<div />", {"class": "ui-pnotify-icon"})
						.append($("<span />", {"class": this.options.icon === true ? (this.options.type === "error" ? this.styles.error_icon : (this.options.type === "info" ? this.styles.info_icon : (this.options.type === "success" ? this.styles.success_icon : this.styles.notice_icon))) : this.options.icon}))
						.prependTo(this.container);
				}

				// Add a title.
				this.title_container = $("<h4 />", {
					"class": "ui-pnotify-title"
				})
					.appendTo(this.container);
				if (this.options.title === false) {
					this.title_container.hide();
				} else if (this.options.title_escape) {
					this.title_container.text(this.options.title);
				} else {
					this.title_container.html(this.options.title);
				}

				// Add text.
				this.text_container = $("<div />", {
					"class": "ui-pnotify-text",
					"aria-role": "alert"
				})
					.appendTo(this.container);
				if (this.options.text === false) {
					this.text_container.hide();
				} else if (this.options.text_escape) {
					this.text_container.text(this.options.text);
				} else {
					this.text_container.html(this.options.insert_brs ? String(this.options.text).replace(/\n/g, "<br />") : this.options.text);
				}

				// Set width and min height.
				if (typeof this.options.width === "string") {
					this.elem.css("width", this.options.width);
				}
				if (typeof this.options.min_height === "string") {
					this.container.css("min-height", this.options.min_height);
				}


				// Add the notice to the notice array.
				if (this.options.stack.push === "top") {
					PNotify.notices = $.merge([this], PNotify.notices);
				} else {
					PNotify.notices = $.merge(PNotify.notices, [this]);
				}
				// Now position all the notices if they are to push to the top.
				if (this.options.stack.push === "top") {
					this.queuePosition(false, 1);
				}




				// Mark the stack so it won't animate the new notice.
				this.options.stack.animation = false;

				// Run the modules.
				this.runModules('init');

				// Display the notice.
				if (this.options.auto_display) {
					this.open();
				}
				return this;
			},

			// This function is for updating the notice.
			update: function(options){
				// Save old options.
				var oldOpts = this.options;
				// Then update to the new options.
				this.parseOptions(oldOpts, options);
				// Maybe we need to fade in/out.
				this.elem.removeClass("ui-pnotify-fade-slow ui-pnotify-fade-normal ui-pnotify-fade-fast");
				if (this.options.animation === "fade") {
					this.elem.addClass("ui-pnotify-fade-"+this.options.animate_speed);
				}
				// Update the corner class.
				if (this.options.cornerclass !== oldOpts.cornerclass) {
					this.container.removeClass("ui-corner-all "+oldOpts.cornerclass).addClass(this.options.cornerclass);
				}
				// Update the shadow.
				if (this.options.shadow !== oldOpts.shadow) {
					if (this.options.shadow) {
						this.container.addClass("ui-pnotify-shadow");
					} else {
						this.container.removeClass("ui-pnotify-shadow");
					}
				}
				// Update the additional classes.
				if (this.options.addclass === false) {
					this.elem.removeClass(oldOpts.addclass);
				} else if (this.options.addclass !== oldOpts.addclass) {
					this.elem.removeClass(oldOpts.addclass).addClass(this.options.addclass);
				}
				// Update the title.
				if (this.options.title === false) {
					this.title_container.slideUp("fast");
				} else if (this.options.title !== oldOpts.title) {
					if (this.options.title_escape) {
						this.title_container.text(this.options.title);
					} else {
						this.title_container.html(this.options.title);
					}
					if (oldOpts.title === false) {
						this.title_container.slideDown(200);
					}
				}
				// Update the text.
				if (this.options.text === false) {
					this.text_container.slideUp("fast");
				} else if (this.options.text !== oldOpts.text) {
					if (this.options.text_escape) {
						this.text_container.text(this.options.text);
					} else {
						this.text_container.html(this.options.insert_brs ? String(this.options.text).replace(/\n/g, "<br />") : this.options.text);
					}
					if (oldOpts.text === false) {
						this.text_container.slideDown(200);
					}
				}
				// Change the notice type.
				if (this.options.type !== oldOpts.type)
					this.container.removeClass(
						this.styles.error+" "+this.styles.notice+" "+this.styles.success+" "+this.styles.info
					).addClass(this.options.type === "error" ?
						this.styles.error :
						(this.options.type === "info" ?
								this.styles.info :
								(this.options.type === "success" ?
										this.styles.success :
										this.styles.notice
								)
						)
					);
				if (this.options.icon !== oldOpts.icon || (this.options.icon === true && this.options.type !== oldOpts.type)) {
					// Remove any old icon.
					this.container.find("div.ui-pnotify-icon").remove();
					if (this.options.icon !== false) {
						// Build the new icon.
						$("<div />", {"class": "ui-pnotify-icon"})
							.append($("<span />", {"class": this.options.icon === true ? (this.options.type === "error" ? this.styles.error_icon : (this.options.type === "info" ? this.styles.info_icon : (this.options.type === "success" ? this.styles.success_icon : this.styles.notice_icon))) : this.options.icon}))
							.prependTo(this.container);
					}
				}
				// Update the width.
				if (this.options.width !== oldOpts.width) {
					this.elem.animate({width: this.options.width});
				}
				// Update the minimum height.
				if (this.options.min_height !== oldOpts.min_height) {
					this.container.animate({minHeight: this.options.min_height});
				}
				// Update the timed hiding.
				if (!this.options.hide) {
					this.cancelRemove();
				} else if (!oldOpts.hide) {
					this.queueRemove();
				}
				this.queuePosition(true);

				// Run the modules.
				this.runModules('update', oldOpts);
				return this;
			},

			// Display the notice.
			open: function(){
				this.state = "opening";
				// Run the modules.
				this.runModules('beforeOpen');

				var that = this;
				// If the notice is not in the DOM, append it.
				if (!this.elem.parent().length) {
					this.elem.appendTo(this.options.stack.context ? this.options.stack.context : body);
				}
				// Try to put it in the right position.
				if (this.options.stack.push !== "top") {
					this.position(true);
				}
				this.animateIn(function(){
					that.queuePosition(true);

					// Now set it to hide.
					if (that.options.hide) {
						that.queueRemove();
					}

					that.state = "open";

					// Run the modules.
					that.runModules('afterOpen');
				});

				return this;
			},

			// Remove the notice.
			remove: function(timer_hide) {
				this.state = "closing";
				this.timerHide = !!timer_hide; // Make sure it's a boolean.
				// Run the modules.
				this.runModules('beforeClose');

				var that = this;
				if (this.timer) {
					root.clearTimeout(this.timer);
					this.timer = null;
				}
				this.animateOut(function(){
					that.state = "closed";
					// Run the modules.
					that.runModules('afterClose');
					that.queuePosition(true);
					// If we're supposed to remove the notice from the DOM, do it.
					if (that.options.remove) {
						that.elem.detach();
					}
					// Run the modules.
					that.runModules('beforeDestroy');
					// Remove object from PNotify.notices to prevent memory leak (issue #49)
					// unless destroy is off
					if (that.options.destroy) {
						if (PNotify.notices !== null) {
							var idx = $.inArray(that,PNotify.notices);
							if (idx !== -1) {
								PNotify.notices.splice(idx,1);
							}
						}
					}
					// Run the modules.
					that.runModules('afterDestroy');
				});

				return this;
			},

			// === Class Methods ===

			// Get the DOM element.
			get: function(){
				return this.elem;
			},

			// Put all the options in the right places.
			parseOptions: function(options, moreOptions){
				this.options = $.extend(true, {}, PNotify.prototype.options);
				// This is the only thing that *should* be copied by reference.
				this.options.stack = PNotify.prototype.options.stack;
				var optArray = [options, moreOptions], curOpts;
				for (var curIndex=0; curIndex < optArray.length; curIndex++) {
					curOpts = optArray[curIndex];
					if (typeof curOpts === "undefined") {
						break;
					}
					if (typeof curOpts !== 'object') {
						this.options.text = curOpts;
					} else {
						for (var option in curOpts) {
							if (this.modules[option]) {
								// Avoid overwriting module defaults.
								$.extend(true, this.options[option], curOpts[option]);
							} else {
								this.options[option] = curOpts[option];
							}
						}
					}
				}
			},

			// Animate the notice in.
			animateIn: function(callback){
				// Declare that the notice is animating in.
				this.animating = "in";
				var that = this;
				callback = (function(){
					if (that.animTimer) {
						clearTimeout(that.animTimer);
					}
					if (that.animating !== "in") {
						return;
					}
					if (that.elem.is(":visible")) {
						if (this) {
							this.call();
						}
						// Declare that the notice has completed animating.
						that.animating = false;
					} else {
						that.animTimer = setTimeout(callback, 40);
					}
				}).bind(callback);

				if (this.options.animation === "fade") {
					this.elem.one('webkitTransitionEnd mozTransitionEnd MSTransitionEnd oTransitionEnd transitionend', callback).addClass("ui-pnotify-in");
					this.elem.css("opacity"); // This line is necessary for some reason. Some notices don't fade without it.
					this.elem.addClass("ui-pnotify-fade-in");
					// Just in case the event doesn't fire, call it after 650 ms.
					this.animTimer = setTimeout(callback, 650);
				} else {
					this.elem.addClass("ui-pnotify-in");
					callback();
				}
			},

			// Animate the notice out.
			animateOut: function(callback){
				// Declare that the notice is animating out.
				this.animating = "out";
				var that = this;
				callback = (function(){
					if (that.animTimer) {
						clearTimeout(that.animTimer);
					}
					if (that.animating !== "out") {
						return;
					}
					if (that.elem.css("opacity") == "0" || !that.elem.is(":visible")) {
						that.elem.removeClass("ui-pnotify-in");
						if (this) {
							this.call();
						}
						// Declare that the notice has completed animating.
						that.animating = false;
					} else {
						// In case this was called before the notice finished animating.
						that.animTimer = setTimeout(callback, 40);
					}
				}).bind(callback);

				if (this.options.animation === "fade") {
					this.elem.one('webkitTransitionEnd mozTransitionEnd MSTransitionEnd oTransitionEnd transitionend', callback).removeClass("ui-pnotify-fade-in");
					// Just in case the event doesn't fire, call it after 650 ms.
					this.animTimer = setTimeout(callback, 650);
				} else {
					this.elem.removeClass("ui-pnotify-in");
					callback();
				}
			},

			// Position the notice. dont_skip_hidden causes the notice to
			// position even if it's not visible.
			position: function(dontSkipHidden){
				// Get the notice's stack.
				var stack = this.options.stack,
					elem = this.elem;
				if (typeof stack.context === "undefined") {
					stack.context = body;
				}
				if (!stack) {
					return;
				}
				if (typeof stack.nextpos1 !== "number") {
					stack.nextpos1 = stack.firstpos1;
				}
				if (typeof stack.nextpos2 !== "number") {
					stack.nextpos2 = stack.firstpos2;
				}
				if (typeof stack.addpos2 !== "number") {
					stack.addpos2 = 0;
				}
				var hidden = !elem.hasClass("ui-pnotify-in");
				// Skip this notice if it's not shown.
				if (!hidden || dontSkipHidden) {
					if (stack.modal) {
						if (stack.overlay) {
							stack.overlay.show();
						} else {
							stack.overlay = createStackOverlay(stack);
						}
					}
					// Add animate class by default.
					elem.addClass("ui-pnotify-move");
					var curpos1, curpos2;
					// Calculate the current pos1 value.
					var csspos1;
					switch (stack.dir1) {
						case "down":
							csspos1 = "top";
							break;
						case "up":
							csspos1 = "bottom";
							break;
						case "left":
							csspos1 = "right";
							break;
						case "right":
							csspos1 = "left";
							break;
					}
					curpos1 = parseInt(elem.css(csspos1).replace(/(?:\..*|[^0-9.])/g, ''));
					if (isNaN(curpos1)) {
						curpos1 = 0;
					}
					// Remember the first pos1, so the first visible notice goes there.
					if (typeof stack.firstpos1 === "undefined" && !hidden) {
						stack.firstpos1 = curpos1;
						stack.nextpos1 = stack.firstpos1;
					}
					// Calculate the current pos2 value.
					var csspos2;
					switch (stack.dir2) {
						case "down":
							csspos2 = "top";
							break;
						case "up":
							csspos2 = "bottom";
							break;
						case "left":
							csspos2 = "right";
							break;
						case "right":
							csspos2 = "left";
							break;
					}
					curpos2 = parseInt(elem.css(csspos2).replace(/(?:\..*|[^0-9.])/g, ''));
					if (isNaN(curpos2)) {
						curpos2 = 0;
					}
					// Remember the first pos2, so the first visible notice goes there.
					if (typeof stack.firstpos2 === "undefined" && !hidden) {
						stack.firstpos2 = curpos2;
						stack.nextpos2 = stack.firstpos2;
					}
					// Check that it's not beyond the viewport edge.
					if (
						(stack.dir1 === "down" && stack.nextpos1 + elem.height() > (stack.context.is(body) ? jwindow.height() : stack.context.prop('scrollHeight')) ) ||
						(stack.dir1 === "up" && stack.nextpos1 + elem.height() > (stack.context.is(body) ? jwindow.height() : stack.context.prop('scrollHeight')) ) ||
						(stack.dir1 === "left" && stack.nextpos1 + elem.width() > (stack.context.is(body) ? jwindow.width() : stack.context.prop('scrollWidth')) ) ||
						(stack.dir1 === "right" && stack.nextpos1 + elem.width() > (stack.context.is(body) ? jwindow.width() : stack.context.prop('scrollWidth')) )
					) {
						// If it is, it needs to go back to the first pos1, and over on pos2.
						stack.nextpos1 = stack.firstpos1;
						stack.nextpos2 += stack.addpos2 + (typeof stack.spacing2 === "undefined" ? 25 : stack.spacing2);
						stack.addpos2 = 0;
					}
					if (typeof stack.nextpos2 === "number") {
						if (!stack.animation) {
							elem.removeClass("ui-pnotify-move");
							elem.css(csspos2, stack.nextpos2+"px");
							elem.css(csspos2);
							elem.addClass("ui-pnotify-move");
						} else {
							elem.css(csspos2, stack.nextpos2+"px");
						}
					}
					// Keep track of the widest/tallest notice in the column/row, so we can push the next column/row.
					switch (stack.dir2) {
						case "down":
						case "up":
							if (elem.outerHeight(true) > stack.addpos2) {
								stack.addpos2 = elem.height();
							}
							break;
						case "left":
						case "right":
							if (elem.outerWidth(true) > stack.addpos2) {
								stack.addpos2 = elem.width();
							}
							break;
					}
					// Move the notice on dir1.
					if (typeof stack.nextpos1 === "number") {
						if (!stack.animation) {
							elem.removeClass("ui-pnotify-move");
							elem.css(csspos1, stack.nextpos1+"px");
							elem.css(csspos1);
							elem.addClass("ui-pnotify-move");
						} else {
							elem.css(csspos1, stack.nextpos1+"px");
						}
					}
					// Calculate the next dir1 position.
					switch (stack.dir1) {
						case "down":
						case "up":
							stack.nextpos1 += elem.height() + (typeof stack.spacing1 === "undefined" ? 25 : stack.spacing1);
							break;
						case "left":
						case "right":
							stack.nextpos1 += elem.width() + (typeof stack.spacing1 === "undefined" ? 25 : stack.spacing1);
							break;
					}
				}
				return this;
			},
			// Queue the position all function so it doesn't run repeatedly and
			// use up resources.
			queuePosition: function(animate, milliseconds){
				if (posTimer) {
					clearTimeout(posTimer);
				}
				if (!milliseconds) {
					milliseconds = 10;
				}
				posTimer = setTimeout(function(){
					PNotify.positionAll(animate);
				}, milliseconds);
				return this;
			},


			// Cancel any pending removal timer.
			cancelRemove: function(){
				if (this.timer) {
					root.clearTimeout(this.timer);
				}
				if (this.animTimer) {
					root.clearTimeout(this.animTimer);
				}
				if (this.state === "closing") {
					// If it's animating out, stop it.
					this.state = "open";
					this.animating = false;
					this.elem.addClass("ui-pnotify-in");
					if (this.options.animation === "fade") {
						this.elem.addClass("ui-pnotify-fade-in");
					}
				}
				return this;
			},
			// Queue a removal timer.
			queueRemove: function(){
				var that = this;
				// Cancel any current removal timer.
				this.cancelRemove();
				this.timer = root.setTimeout(function(){
					that.remove(true);
				}, (isNaN(this.options.delay) ? 0 : this.options.delay));
				return this;
			}
		});
		// These functions affect all notices.
		$.extend(PNotify, {
			// This holds all the notices.
			notices: [],
			reload: init,
			removeAll: function(){
				$.each(PNotify.notices, function(){
					if (this.remove) {
						this.remove(false);
					}
				});
			},
			removeStack: function(stack){
				$.each(PNotify.notices, function(){
					if (this.remove && this.options.stack === stack) {
						this.remove(false);
					}
				});
			},
			positionAll: function(animate){
				// This timer is used for queueing this function so it doesn't run
				// repeatedly.
				if (posTimer) {
					clearTimeout(posTimer);
				}
				posTimer = null;
				// Reset the next position data.
				if (PNotify.notices && PNotify.notices.length) {
					$.each(PNotify.notices, function(){
						var s = this.options.stack;
						if (!s) {
							return;
						}
						if (s.overlay) {
							s.overlay.hide();
						}
						s.nextpos1 = s.firstpos1;
						s.nextpos2 = s.firstpos2;
						s.addpos2 = 0;
						s.animation = animate;
					});
					$.each(PNotify.notices, function(){
						this.position();
					});
				} else {
					var s = PNotify.prototype.options.stack;
					if (s) {
						delete s.nextpos1;
						delete s.nextpos2;
					}
				}
			},
			styling: {
				brighttheme: {
					// Bright Theme doesn't require any UI libraries.
					container: "brighttheme",
					notice: "brighttheme-notice",
					notice_icon: "brighttheme-icon-notice",
					info: "brighttheme-info",
					info_icon: "brighttheme-icon-info",
					success: "brighttheme-success",
					success_icon: "brighttheme-icon-success",
					error: "brighttheme-error",
					error_icon: "brighttheme-icon-error"
				},
				jqueryui: {
					container: "ui-widget ui-widget-content ui-corner-all",
					notice: "ui-state-highlight",
					// (The actual jQUI notice icon looks terrible.)
					notice_icon: "ui-icon ui-icon-info",
					info: "",
					info_icon: "ui-icon ui-icon-info",
					success: "ui-state-default",
					success_icon: "ui-icon ui-icon-circle-check",
					error: "ui-state-error",
					error_icon: "ui-icon ui-icon-alert"
				},
				bootstrap3: {
					container: "alert",
					notice: "alert-warning",
					notice_icon: "glyphicon glyphicon-exclamation-sign",
					info: "alert-info",
					info_icon: "glyphicon glyphicon-info-sign",
					success: "alert-success",
					success_icon: "glyphicon glyphicon-ok-sign",
					error: "alert-danger",
					error_icon: "glyphicon glyphicon-warning-sign"
				}
			}
		});
		/*
		 * uses icons from http://fontawesome.io/
		 * version 4.0.3
		 */
		PNotify.styling.fontawesome = $.extend({}, PNotify.styling.bootstrap3);
		$.extend(PNotify.styling.fontawesome, {
			notice_icon: "fa fa-exclamation-circle",
			info_icon: "fa fa-info",
			success_icon: "fa fa-check",
			error_icon: "fa fa-warning"
		});

		if (root.document.body) {
			do_when_ready();
		} else {
			$(do_when_ready);
		}
		return PNotify;
	};
	return init(root);
}));

// Nonblock
(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as a module.
		define('pnotify.nonblock', ['jquery', 'pnotify'], factory);
	} else if (typeof exports === 'object' && typeof module !== 'undefined') {
		// CommonJS
		module.exports = factory(require('jquery'), require('./pnotify'));
	} else {
		// Browser globals
		factory(root.jQuery, root.PNotify);
	}
}(this, function($, PNotify){
	// Some useful regexes.
	var re_on = /^on/,
		re_mouse_events = /^(dbl)?click$|^mouse(move|down|up|over|out|enter|leave)$|^contextmenu$/,
		re_ui_events = /^(focus|blur|select|change|reset)$|^key(press|down|up)$/,
		re_html_events = /^(scroll|resize|(un)?load|abort|error)$/;
	// Fire a DOM event.
	var dom_event = function(e, orig_e){
		var event_object;
		e = e.toLowerCase();
		if (document.createEvent && this.dispatchEvent) {
			// FireFox, Opera, Safari, Chrome
			e = e.replace(re_on, '');
			if (e.match(re_mouse_events)) {
				// This allows the click event to fire on the notice. There is
				// probably a much better way to do it.
				$(this).offset();
				event_object = document.createEvent("MouseEvents");
				event_object.initMouseEvent(
					e, orig_e.bubbles, orig_e.cancelable, orig_e.view, orig_e.detail,
					orig_e.screenX, orig_e.screenY, orig_e.clientX, orig_e.clientY,
					orig_e.ctrlKey, orig_e.altKey, orig_e.shiftKey, orig_e.metaKey, orig_e.button, orig_e.relatedTarget
				);
			} else if (e.match(re_ui_events)) {
				event_object = document.createEvent("UIEvents");
				event_object.initUIEvent(e, orig_e.bubbles, orig_e.cancelable, orig_e.view, orig_e.detail);
			} else if (e.match(re_html_events)) {
				event_object = document.createEvent("HTMLEvents");
				event_object.initEvent(e, orig_e.bubbles, orig_e.cancelable);
			}
			if (!event_object) return;
			this.dispatchEvent(event_object);
		} else {
			// Internet Explorer
			if (!e.match(re_on)) e = "on"+e;
			event_object = document.createEventObject(orig_e);
			this.fireEvent(e, event_object);
		}
	};


	// This keeps track of the last element the mouse was over, so
	// mouseleave, mouseenter, etc can be called.
	var nonblock_last_elem;
	// This is used to pass events through the notice if it is non-blocking.
	var nonblock_pass = function(notice, e, e_name){
		notice.elem.addClass("ui-pnotify-nonblock-hide");
		var element_below = document.elementFromPoint(e.clientX, e.clientY);
		notice.elem.removeClass("ui-pnotify-nonblock-hide");
		var jelement_below = $(element_below);
		var cursor_style = jelement_below.css("cursor");
		if (cursor_style === "auto" && element_below.tagName === "A") {
			cursor_style = "pointer";
		}
		notice.elem.css("cursor", cursor_style !== "auto" ? cursor_style : "default");
		// If the element changed, call mouseenter, mouseleave, etc.
		if (!nonblock_last_elem || nonblock_last_elem.get(0) != element_below) {
			if (nonblock_last_elem) {
				dom_event.call(nonblock_last_elem.get(0), "mouseleave", e.originalEvent);
				dom_event.call(nonblock_last_elem.get(0), "mouseout", e.originalEvent);
			}
			dom_event.call(element_below, "mouseenter", e.originalEvent);
			dom_event.call(element_below, "mouseover", e.originalEvent);
		}
		dom_event.call(element_below, e_name, e.originalEvent);
		// Remember the latest element the mouse was over.
		nonblock_last_elem = jelement_below;
	};


	PNotify.prototype.options.nonblock = {
		// Create a non-blocking notice. It lets the user click elements underneath it.
		nonblock: false
	};
	PNotify.prototype.modules.nonblock = {
		init: function(notice, options){
			var that = this;
			notice.elem.on({
				"mouseenter": function(e){
					if (that.options.nonblock) {
						e.stopPropagation();
					}
					if (that.options.nonblock) {
						// If it's non-blocking, animate to the other opacity.
						notice.elem.addClass("ui-pnotify-nonblock-fade");
					}
				},
				"mouseleave": function(e){
					if (that.options.nonblock) {
						e.stopPropagation();
					}
					nonblock_last_elem = null;
					notice.elem.css("cursor", "auto");
					// Animate back to the normal opacity.
					if (that.options.nonblock && notice.animating !== "out") {
						notice.elem.removeClass("ui-pnotify-nonblock-fade");
					}
				},
				"mouseover": function(e){
					if (that.options.nonblock) {
						e.stopPropagation();
					}
				},
				"mouseout": function(e){
					if (that.options.nonblock) {
						e.stopPropagation();
					}
				},
				"mousemove": function(e){
					if (that.options.nonblock) {
						e.stopPropagation();
						nonblock_pass(notice, e, "onmousemove");
					}
				},
				"mousedown": function(e){
					if (that.options.nonblock) {
						e.stopPropagation();
						e.preventDefault();
						nonblock_pass(notice, e, "onmousedown");
					}
				},
				"mouseup": function(e){
					if (that.options.nonblock) {
						e.stopPropagation();
						e.preventDefault();
						nonblock_pass(notice, e, "onmouseup");
					}
				},
				"click": function(e){
					if (that.options.nonblock) {
						e.stopPropagation();
						nonblock_pass(notice, e, "onclick");
					}
				},
				"dblclick": function(e){
					if (that.options.nonblock) {
						e.stopPropagation();
						nonblock_pass(notice, e, "ondblclick");
					}
				}
			});
		}
	};
}));

// Desktop
(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as a module.
		define('pnotify.desktop', ['jquery', 'pnotify'], factory);
	} else if (typeof exports === 'object' && typeof module !== 'undefined') {
		// CommonJS
		module.exports = factory(require('jquery'), require('./pnotify'));
	} else {
		// Browser globals
		factory(root.jQuery, root.PNotify);
	}
}(this, function($, PNotify){
	var permission;
	var notify = function(title, options){
		// Memoize based on feature detection.
		if ("Notification" in window) {
			notify = function (title, options) {
				return new Notification(title, options);
			};
		} else if ("mozNotification" in navigator) {
			notify = function (title, options) {
				// Gecko < 22
				return navigator.mozNotification
					.createNotification(title, options.body, options.icon)
					.show();
			};
		} else if ("webkitNotifications" in window) {
			notify = function (title, options) {
				return window.webkitNotifications.createNotification(
					options.icon,
					title,
					options.body
				);
			};
		} else {
			notify = function (title, options) {
				return null;
			};
		}
		return notify(title, options);
	};


	PNotify.prototype.options.desktop = {
		// Display the notification as a desktop notification.
		desktop: false,
		// If desktop notifications are not supported or allowed, fall back to a regular notice.
		fallback: true,
		// The URL of the icon to display. If false, no icon will show. If null, a default icon will show.
		icon: null,
		// Using a tag lets you update an existing notice, or keep from duplicating notices between tabs.
		// If you leave tag null, one will be generated, facilitating the "update" function.
		// see: http://www.w3.org/TR/notifications/#tags-example
		tag: null
	};
	PNotify.prototype.modules.desktop = {
		tag: null,
		icon: null,
		genNotice: function(notice, options){
			if (options.icon === null) {
				this.icon = "http://sciactive.com/pnotify/includes/desktop/"+notice.options.type+".png";
			} else if (options.icon === false) {
				this.icon = null;
			} else {
				this.icon = options.icon;
			}
			if (this.tag === null || options.tag !== null) {
				this.tag = options.tag === null ? "PNotify-"+Math.round(Math.random() * 1000000) : options.tag;
			}
			notice.desktop = notify(notice.options.title, {
				icon: this.icon,
				body: options.text || notice.options.text,
				tag: this.tag
			});
			if (!("close" in notice.desktop) && ("cancel" in notice.desktop)) {
				notice.desktop.close = function(){
					notice.desktop.cancel();
				};
			}
			notice.desktop.onclick = function(){
				notice.elem.trigger("click");
			};
			notice.desktop.onclose = function(){
				if (notice.state !== "closing" && notice.state !== "closed") {
					notice.remove();
				}
			};
		},
		init: function(notice, options){
			if (!options.desktop)
				return;
			permission = PNotify.desktop.checkPermission();
			if (permission !== 0) {
				// Keep the notice from opening if fallback is false.
				if (!options.fallback) {
					notice.options.auto_display = false;
				}
				return;
			}
			this.genNotice(notice, options);
		},
		update: function(notice, options, oldOpts){
			if ((permission !== 0 && options.fallback) || !options.desktop)
				return;
			this.genNotice(notice, options);
		},
		beforeOpen: function(notice, options){
			if ((permission !== 0 && options.fallback) || !options.desktop)
				return;
			notice.elem.css({'left': '-10000px'}).removeClass('ui-pnotify-in');
		},
		afterOpen: function(notice, options){
			if ((permission !== 0 && options.fallback) || !options.desktop)
				return;
			notice.elem.css({'left': '-10000px'}).removeClass('ui-pnotify-in');
			if ("show" in notice.desktop) {
				notice.desktop.show();
			}
		},
		beforeClose: function(notice, options){
			if ((permission !== 0 && options.fallback) || !options.desktop)
				return;
			notice.elem.css({'left': '-10000px'}).removeClass('ui-pnotify-in');
		},
		afterClose: function(notice, options){
			if ((permission !== 0 && options.fallback) || !options.desktop)
				return;
			notice.elem.css({'left': '-10000px'}).removeClass('ui-pnotify-in');
			if ("close" in notice.desktop) {
				notice.desktop.close();
			}
		}
	};
	PNotify.desktop = {
		permission: function(){
			if (typeof Notification !== "undefined" && "requestPermission" in Notification) {
				Notification.requestPermission();
			} else if ("webkitNotifications" in window) {
				window.webkitNotifications.requestPermission();
			}
		},
		checkPermission: function(){
			if (typeof Notification !== "undefined" && "permission" in Notification) {
				return (Notification.permission === "granted" ? 0 : 1);
			} else if ("webkitNotifications" in window) {
				return window.webkitNotifications.checkPermission() == 0 ? 0 : 1;
			} else {
				return 1;
			}
		}
	};
	permission = PNotify.desktop.checkPermission();
}));

// Callbacks
(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as a module.
		define('pnotify.callbacks', ['jquery', 'pnotify'], factory);
	} else if (typeof exports === 'object' && typeof module !== 'undefined') {
		// CommonJS
		module.exports = factory(require('jquery'), require('./pnotify'));
	} else {
		// Browser globals
		factory(root.jQuery, root.PNotify);
	}
}(this, function($, PNotify){
	var _init   = PNotify.prototype.init,
		_open   = PNotify.prototype.open,
		_remove = PNotify.prototype.remove;
	PNotify.prototype.init = function(){
		if (this.options.before_init) {
			this.options.before_init(this.options);
		}
		_init.apply(this, arguments);
		if (this.options.after_init) {
			this.options.after_init(this);
		}
	};
	PNotify.prototype.open = function(){
		var ret;
		if (this.options.before_open) {
			ret = this.options.before_open(this);
		}
		if (ret !== false) {
			_open.apply(this, arguments);
			if (this.options.after_open) {
				this.options.after_open(this);
			}
		}
	};
	PNotify.prototype.remove = function(timer_hide){
		var ret;
		if (this.options.before_close) {
			ret = this.options.before_close(this, timer_hide);
		}
		if (ret !== false) {
			_remove.apply(this, arguments);
			if (this.options.after_close) {
				this.options.after_close(this, timer_hide);
			}
		}
	};
}));

define('app/notification',[
    'jquery',
    'app/init',
    'pnotify',
    //'pnotify.buttons',
    //'pnotify.confirm',
    'pnotify.nonblock',
    'pnotify.desktop',
    //'pnotify.history',
    'pnotify.callbacks'
], function($, Init, PNotify) {

    'use strict';

    var config = {
        title: '',
        text: '',
        type: '',                                                       // 'info', 'success', error, 'warning'
        icon: false,
        styling: 'fontawesome',                                         // 'fontawesome', 'bootstrap3', 'jqueryui'
        animate_speed: 'fast',                                          // animation speed for notifications moving up/down
        hide: true,                                                     // close after few seconds
        delay: 5000,                                                    // visible time for notification in browser
        mouse_reset: true,                                              // Reset the hide timer if the mouse moves over the notice.
        shadow: true,
        addclass: 'stack-bottomright',                                  // class for display, must changed on stack different stacks
        width: '250px',
        // nonblock extension parameter (click through notifications)
        nonblock: {
            nonblock: true,                                             // change for enable
            nonblock_opacity: 0.9
        },
        // desktop extension "Web Notifications"
        desktop: {
            desktop: false,                                             // change for enable
            icon: Init.path.img + 'notifications/logo.png'              // default image for desktop notifications
        }
    };

    // initial page title (cached)
    var initialPageTitle = document.title;

    // global blink timeout cache
    var blinkTimer;

    // stack container for all notifications
    var stack = {
        bottomRight: {
            stack: {
                dir1: 'up',
                dir2: 'left',
                firstpos1: 30,
                firstpos2: 10,
                spacing1: 5,
                spacing2: 5,
                push: 'bottom'
            },
            addclass: 'stack-bottomright',
            width: '250px',
        },
        barBottom: {
            stack: {
                dir1: 'up',
                dir2: 'right',
               // context: $('body'),
                spacing1: 0,
                spacing2: 0
            },
            addclass: 'stack-bar-bottom',
            width: '70%',
        }
    };

    /**
     * show a notification in browser and/or "Web Notifications"  in OS
     * @param customConfig
     * @param settings
     */
    var showNotify = function(customConfig, settings){

        customConfig = $.extend(true, {}, config, customConfig );

        // desktop notification
        if(
            settings &&
            settings.desktop === true
        ){
            // ask for Web Notifications permission
            PNotify.desktop.permission();

            customConfig.delay = 10000;
            customConfig.desktop.desktop = true;

            // make browser tab blink
            startTabBlink(customConfig.title);
        }

        // set notification stack
        if(
            settings &&
            settings.stack
        ){
            customConfig.stack = stack[settings.stack].stack;
            customConfig.addclass = stack[settings.stack].addclass;
            customConfig.width = stack[settings.stack].width;
        }else{
            customConfig.stack = stack.bottomRight.stack;
            customConfig.addclass = stack.bottomRight.addclass;
        }

        switch(customConfig.type){
            case 'info':
                customConfig.icon = 'fa fa-info fa-fw fa-lg';
                break;
            case 'success':
                customConfig.icon = 'fa fa-check fa-fw fa-lg';
                break;
            case 'warning':
                customConfig.icon = 'fa fa-exclamation-triangle fa-fw fa-lg';
                break;
            case 'error':
                customConfig.icon = 'fa fa-close fa-fw fa-lg';
                break;
            case 'lock':
                customConfig.icon = 'fa fa-lock fa-fw fa-lg';
                customConfig.type = 'success';
                break;
            case 'unlock':
                customConfig.icon = 'fa fa-unlock fa-fw fa-lg';
                customConfig.type = 'info';
                break;
            default:
                customConfig.icon = false;
        }

        new PNotify(customConfig);
    };

    /**
     * change document.title and make the browsers tab blink
     * @param blinkTitle
     */
    var startTabBlink = function(blinkTitle){
        var initBlink = (function(blinkTitle){

            // count blinks if tab is currently active
            var activeTabBlinkCount = 0;

            var blink = function(){
                // number of "blinks" should be limited if tab is currently active
                if(window.isVisible){
                    activeTabBlinkCount++;
                }

                // toggle page title
                document.title = (document.title === blinkTitle) ? initialPageTitle : blinkTitle;

                if(activeTabBlinkCount > 10){
                    stopTabBlink();
                }
            };

            return function () {
                if (!blinkTimer) {
                    blinkTimer = setInterval(blink, 1000);
                }
            };
        }( blinkTitle ));

        initBlink();
    };

    /**
     * stop blinking document.title
     */
    var stopTabBlink = function(){
        if(blinkTimer){
            clearInterval(blinkTimer);
            document.title = initialPageTitle;
            blinkTimer = null;
        }
    };

    return {
        showNotify: showNotify,
        startTabBlink: startTabBlink,
        stopTabBlink: stopTabBlink
    };
});



//# sourceMappingURL=notification.js.map