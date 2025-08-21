// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2025-08-21
// @description  try to take over the world!
// @author       You
// @match        https://chzzk.naver.com/*
// @icon         https://chzzk.naver.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const Win = typeof unsafeWindow !== "undefined" ? unsafeWindow : window

Win.Object.defineProperty = new Proxy(Win.Object.defineProperty, {
  apply(Target, ThisArg, Args) {
    if (typeof Args[1] === "string" && Args[1] === "isSupportedPlatform") {
      return Reflect.apply(Target, ThisArg, [
        Args[0],
        Args[1],
        {
          value: () => false,
          writable: false,
          enumerable: true,
          configurable: true
        }
      ])
    }
    if (typeof Args[1] === "string" && Args[1] === "isSupportedBrowser") {
      return Reflect.apply(Target, ThisArg, [
        Args[0],
        Args[1],
        {
          value: () => true,
          writable: false,
          enumerable: true,
          configurable: true
        }
      ])
    }
    return Reflect.apply(Target, ThisArg, Args)
  }
})

  }
}).
})();
