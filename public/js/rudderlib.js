!function () {
  const k = "2EL15xyzDYBZ1V8C4ov6vX6MSOV"
  var e = window.rudderanalytics = window.rudderanalytics || []; e.methods = ["load", "page", "track", "identify", "alias", "group", "ready", "reset", "getAnonymousId", "setAnonymousId"], e.factory = function (t) { return function () { var r = Array.prototype.slice.call(arguments); return r.unshift(t), e.push(r), e } }; for (var t = 0; t < e.methods.length; t++) { var r = e.methods[t]; e[r] = e.factory(r) } e.loadJS = function (e, t) { var r = document.createElement("script"); r.type = "text/javascript", r.async = !0, r.src = "/js/rudderlib.js"; var a = document.getElementsByTagName("script")[0]; a.parentNode.insertBefore(r, a) }, e.loadJS(),
    e.load(k, "https://cdp.internxt.com",
      { sendAdblockPage: true }),
    e.page()
}();