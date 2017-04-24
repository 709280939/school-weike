;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-eye" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 240C178.704 240 12.304 483.872 5.376 494.256c-7.168 10.752-7.168 24.752 0 35.504C12.304 540.128 178.704 784 512 784s499.696-243.872 506.624-254.256c7.168-10.752 7.168-24.752 0-35.504C1011.696 483.872 845.296 240 512 240zM512 720C263.888 720 115.744 565.152 72.192 511.936 115.6 458.608 262.976 304 512 304c248.112 0 396.256 154.848 439.808 208.064C908.4 565.392 761.024 720 512 720z"  ></path>' +
    '' +
    '<path d="M512 368c-79.408 0-144 64.608-144 144s64.592 144 144 144 144-64.608 144-144S591.408 368 512 368zM512 592c-44.112 0-80-35.888-80-80s35.888-80 80-80 80 35.888 80 80S556.112 592 512 592z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-X" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M984.3712 793.02656c52.85376 52.85376 52.85376 138.3424 0 191.32416a134.85056 134.85056 0 0 1-95.66208 39.63904 134.8608 134.8608 0 0 1-95.6672-39.63904l-281.04192-281.04192-281.04704 281.04192a134.84032 134.84032 0 0 1-95.66208 39.63904c-34.61632 0-69.23264-13.2096-95.59552-39.63904-52.92032-52.98688-52.92032-138.4704 0-191.32416l280.97536-281.0368L39.70048 230.94272c-52.92032-52.85376-52.92032-138.60352 0-191.19616 52.7872-52.98688 138.40384-52.98688 191.2576 0l281.04704 280.9088L793.04704 39.74656c52.84864-52.98688 138.47552-52.98688 191.32416 0 52.85376 52.58752 52.85376 138.3424 0 191.19616l-281.04192 281.04704 281.04192 281.0368z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)