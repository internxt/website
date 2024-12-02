!(function () {
  let k = '2EFjDkXZ8xv0qKyI2dHZ4d5VtmM';
  if (location.hostname === 'internxt.com') {
    k = '2EL15xyzDYBZ1V8C4ov6vX6MSOV';
  }
  var e = (window.rudderanalytics = window.rudderanalytics || []);
  (e.methods = [
    'load',
    'page',
    'track',
    'identify',
    'alias',
    'group',
    'ready',
    'reset',
    'getAnonymousId',
    'setAnonymousId',
  ]),
    (e.factory = function (t) {
      return function () {
        var r = Array.prototype.slice.call(arguments);
        return r.unshift(t), e.push(r), e;
      };
    });
  for (var t = 0; t < e.methods.length; t++) {
    var r = e.methods[t];
    e[r] = e.factory(r);
  }
  (e.loadJS = function (e, t) {
    var r = document.createElement('script');
    (r.type = 'text/javascript'),
      (r.async = !0),
      (r.src = 'https://s3.us-east-1.wasabisys.com/djdjdkwl/ruddersnippet.js');
    var a = document.getElementsByTagName('script')[0];
    a.parentNode.insertBefore(r, a);
  }),
    e.loadJS(),
    e.load(k, '', {
      sessions: {
        autoTrack: true,
      },
    }); //,
  // e.page()
})();
