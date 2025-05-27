var capacitorFacebookEvents = (function (exports, core) {
    'use strict';

    const FacebookEvents = core.registerPlugin('FacebookEvents', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.FacebookEventsWeb()),
    });

    class FacebookEventsWeb extends core.WebPlugin {
        constructor() {
            super();
            this.loadFBSDK();
        }
        loadFBSDK() {
            ((d, s, id) => {
                var _a;
                const fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) {
                    return;
                }
                const js = d.createElement(s);
                js.id = id;
                js.src = 'https://connect.facebook.net/en_US/sdk.js';
                (_a = fjs.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(js, fjs);
            })(document, 'script', 'facebook-jssdk');
        }
        async setAdvertiserTrackingEnabled({ enabled, }) {
            console.warn(`setAdvertiserTrackingEnabled called with enabled: ${enabled}. Note: This is not applicable on the web platform.`);
        }
        async logEvent(options) {
            if (typeof FB !== 'undefined') {
                FB.AppEvents.logEvent(options.event, options.params);
            }
            else {
                console.error('Facebook SDK not loaded');
            }
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        FacebookEventsWeb: FacebookEventsWeb
    });

    exports.FacebookEvents = FacebookEvents;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
