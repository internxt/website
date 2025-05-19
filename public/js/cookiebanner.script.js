'use strict';

var headerScripts = [
  {
    title: 'Google Analytics',
    type: 'analytics',
    value:
      "<!-- Google tag (gtag.js) -->\n<script async src=\"https://www.googletagmanager.com/gtag/js?id=G-CHHGLQTHSB\"></script>\n<script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'G-CHHGLQTHSB');\n</script>",
  },
];

var config = {
  primaryColor: '#0864fc',
  darkColor: '#3b3e4a',
  lightColor: '#ffffff',
  themeMode: 'light',
  showSettingsBtn: true,
  showCloseIcon: false,
  showDeclineBtn: true,
  fullWidth: false,
  displayPosition: 'left',
  settingsBtnLabel: 'Personalizar',
  delay: 2000,
  expires: 365,
  title: 'Consentimiento de Cookies',
  description:
    'Este sitio web utiliza cookies propias y de terceros para fines estrictamente funcionales, permitiendo la navegación en la web, así como para fines analíticos.',
  acceptBtnLabel: 'Aceptar',
  declineInfoBtnLabel: 'Rechazar',
  moreInfoBtnLink: '/es/legal',
  moreInfoBtnLabel: 'Política de privacidad',
  cookieTypesTitle: 'Select cookies to accept',
  necessaryCookieTypeLabel: 'Necesarias',
  necessaryCookieTypeDesc:
    'These cookies are necessary for the website to function and cannot be switched off in our systems.',
  cookieTypes: [
    {
      type: 'Analytics',
      value: 'analytics',
      description:
        'Analytics cookies allow us to count visits and traffic sources, so we can measure and improve the performance of our site. They help us know which pages are the most and least popular and see how visitors move around the site.',
    },
  ],
};

function _slicedToArray(e, c) {
  return _arrayWithHoles(e) || _iterableToArrayLimit(e, c) || _unsupportedIterableToArray(e, c) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}
function _unsupportedIterableToArray(e, c) {
  if (e) {
    if ('string' == typeof e) return _arrayLikeToArray(e, c);
    var i = Object.prototype.toString.call(e).slice(8, -1);
    return (
      'Object' === i && e.constructor && (i = e.constructor.name),
      'Map' === i || 'Set' === i
        ? Array.from(e)
        : 'Arguments' === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
        ? _arrayLikeToArray(e, c)
        : void 0
    );
  }
}
function _arrayLikeToArray(e, c) {
  (null == c || c > e.length) && (c = e.length);
  for (var i = 0, r = Array(c); c > i; i++) r[i] = e[i];
  return r;
}
function _iterableToArrayLimit(e, c) {
  var i = null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
  if (null != i) {
    var r,
      t,
      o = [],
      n = !0,
      l = !1;
    try {
      for (i = i.call(e); !(n = (r = i.next()).done) && (o.push(r.value), !c || o.length !== c); n = !0);
    } catch (a) {
      (l = !0), (t = a);
    } finally {
      try {
        n || null == i['return'] || i['return']();
      } finally {
        if (l) throw t;
      }
    }
    return o;
  }
}
function _arrayWithHoles(e) {
  return Array.isArray(e) ? e : void 0;
}
function appendScriptInHead(e) {
  headerScripts.forEach(function (c) {
    c.type === e && $('head').append(c.value);
  });
}
var injectScripts = function () {
  appendScriptInHead('analytics');
  appendScriptInHead('marketing');
  appendScriptInHead('preferences');
};

!(function (e) {
  var c = this;
  e.fn.cookieBanner = function () {
    e(':root').css('--cookieBannerLight', config.lightColor), e(':root').css('--cookieBannerDark', config.darkColor);
    var c = i('cookieConsent');
    if (c) injectScripts();
    else {
      e('#cookieBanner').remove();
      var n =
        '<li><input type="checkbox" name="gdprPrefItem" value="necessary" checked="checked" disabled="disabled" data-compulsory="on"> <label title="' +
        config.necessaryCookieTypeDesc +
        '">' +
        config.necessaryCookieTypeLabel +
        '</label></li>';
      e.each(config.cookieTypes, function (e, c) {
        if ('' !== c.type && '' !== c.value) {
          var i = '';
          c.description !== !1 && (i = ' title="' + c.description + '"'),
            (n +=
              '<li><input type="checkbox" id="gdprPrefItem' +
              c.value +
              '" name="gdprPrefItem" value="' +
              c.value +
              '" data-compulsory="on"> <label for="gdprPrefItem' +
              c.value +
              '"' +
              i +
              '>' +
              c.type +
              '</label></li>');
        }
      });
      var p =
        '<div id="cookieBanner" class="' +
        config.themeMode +
        ' display-' +
        config.displayPosition +
        ' full-width-' +
        config.fullWidth +
        '"><div id="closeIcon">' +
        s +
        '</div><div class="title-wrap">' +
        '<h4>' +
        config.title +
        '</h4></div><div class="content-wrap"><div class="msg-wrap"><p>' +
        config.description +
        ' <a target="_blank" style="color:' +
        config.primaryColor +
        '"  href="' +
        config.moreInfoBtnLink +
        '">' +
        config.moreInfoBtnLabel +
        '</a></p><div id="cookieSettings">' +
        l +
        config.settingsBtnLabel +
        '</div><div id="cookieTypes" style="display:none;"><h5>' +
        config.cookieTypesTitle +
        '</h5><ul>' +
        n +
        '</ul></div></div><div class="btn-wrap"><button id="cookieAccept" style="color:' +
        config.lightColor +
        ';background:' +
        config.primaryColor +
        ';border: 1px solid ' +
        config.primaryColor +
        ';" type="button">' +
        config.acceptBtnLabel +
        '</button><button id="cookieReject" style="color:' +
        config.primaryColor +
        ';border: 1px solid ' +
        config.primaryColor +
        ';" type="button">' +
        config.declineInfoBtnLabel +
        '</button></div>';
      setTimeout(function () {
        e('body').append(p),
          e('#cookieBanner').hide().fadeIn('slow'),
          config.showSettingsBtn || e('#cookieSettings').hide(),
          config.showDeclineBtn || e('#cookieReject').hide(),
          config.showCloseIcon || e('#closeIcon').hide();
      }, config.delay),
        e('body').on('click', '#cookieAccept', function () {
          r(!0, config.expires), e('input[name="gdprPrefItem"][data-compulsory="on"]').prop('checked', !0);
          var c = [];
          e.each(e('input[name="gdprPrefItem"]').serializeArray(), function (e, i) {
            c.push(i.value);
          }),
            t('cookieConsentPrefs', encodeURIComponent(JSON.stringify(c)), { expires: o(365), path: '/' }),
            injectScripts();
          if (typeof gtag === 'function') {
            gtag('consent', 'update', {
              ad_storage: 'granted',
              analytics_storage: 'granted',
              ad_user_data: 'granted',
              ad_personalization: 'granted',
            });
          }
        }),
        e('body').on('click', '#cookieSettings', function () {
          e('input[name="gdprPrefItem"]:not(:disabled)').attr('data-compulsory', 'off').prop('checked', !0),
            e('#cookieTypes').toggle('fast', function () {
              e('#cookieSettings').prop('disabled', !1);
            });
        }),
        e('body').on('click', '#closeIcon', function () {
          e('#cookieBanner').remove();
        }),
        e('body').on('click', '#cookieReject', function () {
          r(!1, config.expires), t('cookieConsentPrefs', '', { expires: o(-365), path: '/' });
        });
    }
  };
  var i = function (e) {
      return document.cookie.indexOf(e) > -1 ? !0 : !1;
    },
    r = function (i, r) {
      t('cookieConsent', i, { expires: o(r), path: '/' }),
        e('#cookieBanner').fadeOut('fast', function () {
          e(c).remove();
        });
    },
    t = function (e, c) {
      var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      document.cookie = ''
        .concat(e, '=')
        .concat(c)
        .concat(
          Object.keys(i).reduce(function (e, c) {
            return (
              e +
              ';'
                .concat(
                  c.replace(/([A-Z])/g, function (e) {
                    return '-' + e.toLowerCase();
                  }),
                  '=',
                )
                .concat(i[c])
            );
          }, ''),
        );
    },
    o = function (e) {
      var c = new Date();
      return c.setTime(c.getTime() + 24 * e * 60 * 60 * 1e3), c.toUTCString();
    },
    n = function (e) {
      var c = document.cookie.split(';').reduce(function (e, c) {
        var i = c.split('=').map(function (e) {
            return e.trim();
          }),
          r = _slicedToArray(i, 2),
          t = r[0],
          o = r[1];
        return t && o && (e[t] = decodeURIComponent(o)), e;
      }, {});
      return e ? c[e] || !1 : c;
    },
    l =
      '<?xml version="1.0" ?><svg height="16px" version="1.1" viewBox="0 0 20 20" width="16px" xmlns="http://www.w3.org/2000/svg" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" xmlns:xlink="http://www.w3.org/1999/xlink"><title/><desc/><defs/><g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1"><g fill="#bfb9b9" id="Core" transform="translate(-464.000000, -380.000000)"><g id="settings" transform="translate(464.000000, 380.000000)"><path d="M17.4,11 C17.4,10.7 17.5,10.4 17.5,10 C17.5,9.6 17.5,9.3 17.4,9 L19.5,7.3 C19.7,7.1 19.7,6.9 19.6,6.7 L17.6,3.2 C17.5,3.1 17.3,3 17,3.1 L14.5,4.1 C14,3.7 13.4,3.4 12.8,3.1 L12.4,0.5 C12.5,0.2 12.2,0 12,0 L8,0 C7.8,0 7.5,0.2 7.5,0.4 L7.1,3.1 C6.5,3.3 6,3.7 5.4,4.1 L3,3.1 C2.7,3 2.5,3.1 2.3,3.3 L0.3,6.8 C0.2,6.9 0.3,7.2 0.5,7.4 L2.6,9 C2.6,9.3 2.5,9.6 2.5,10 C2.5,10.4 2.5,10.7 2.6,11 L0.5,12.7 C0.3,12.9 0.3,13.1 0.4,13.3 L2.4,16.8 C2.5,16.9 2.7,17 3,16.9 L5.5,15.9 C6,16.3 6.6,16.6 7.2,16.9 L7.6,19.5 C7.6,19.7 7.8,19.9 8.1,19.9 L12.1,19.9 C12.3,19.9 12.6,19.7 12.6,19.5 L13,16.9 C13.6,16.6 14.2,16.3 14.7,15.9 L17.2,16.9 C17.4,17 17.7,16.9 17.8,16.7 L19.8,13.2 C19.9,13 19.9,12.7 19.7,12.6 L17.4,11 L17.4,11 Z M10,13.5 C8.1,13.5 6.5,11.9 6.5,10 C6.5,8.1 8.1,6.5 10,6.5 C11.9,6.5 13.5,8.1 13.5,10 C13.5,11.9 11.9,13.5 10,13.5 L10,13.5 Z" id="Shape"/></g></g></g></svg>',
    s =
      '<?xml version="1.0" ?><svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><title/><g fill="#bfb9b9"><path d="M48,0A48,48,0,1,0,96,48,48.0512,48.0512,0,0,0,48,0Zm0,84A36,36,0,1,1,84,48,36.0393,36.0393,0,0,1,48,84Z"/><path d="M64.2422,31.7578a5.9979,5.9979,0,0,0-8.4844,0L48,39.5156l-7.7578-7.7578a5.9994,5.9994,0,0,0-8.4844,8.4844L39.5156,48l-7.7578,7.7578a5.9994,5.9994,0,1,0,8.4844,8.4844L48,56.4844l7.7578,7.7578a5.9994,5.9994,0,0,0,8.4844-8.4844L56.4844,48l7.7578-7.7578A5.9979,5.9979,0,0,0,64.2422,31.7578Z"/></g></svg>';
  return (window.cookieBanner = {
    init: function () {
      e.fn.cookieBanner();
    },
    isAccepted: function () {
      var e = n('cookieConsent');
      return JSON.parse(e);
    },
    getPreferences: function () {
      var e = n('cookieConsentPrefs');
      return JSON.parse(e);
    },
    isPreferenceAccepted: function (e) {
      var c = n('cookieConsent'),
        i = n('cookieConsentPrefs');
      return (i = JSON.parse(i)), c === !1 ? !1 : i === !1 || -1 === i.indexOf(e) ? !1 : !0;
    },
  });
})(jQuery);
