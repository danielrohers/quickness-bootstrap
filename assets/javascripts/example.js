;(function (window, document, undefined) {

  'use strict';

  var Main = (function () {

    var _getPathname = function () {
      return window.location.pathname;
    };

    var _isMenuActive = function (path) {
      return path === _getPathname();
    };

    var _setMenuActive = function () {
      var links = document.querySelectorAll('nav a');
      [].forEach.call(links, function (link) {
        if (_isMenuActive(link.getAttribute('href'))) {
          link.parentElement.classList.add('active');
        }
      });
    }

    return {

      init : function () {
        _setMenuActive();
      }

    }

  })();

  window.Main = Main;

  Main.init();

})(window, document);
