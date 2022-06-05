// ==UserScript==
// @name           BoyzTube paywall remover
// @description    description
// @author         Dmitry SCS <gthescs@gmail.com> (http://github.com/thescs)
// @namespace      https://boyztube.com/
// @version        0.0.1
// @icon           https://github.com/favicon.ico
// @match        https://www.boyztube.com/*
// @grant          none
// @run-at         document-end
// @require        https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.js
// @require        https://rawgit.com/spiralx/653f2226b08167e4aaf8/raw/e830ed1ff2202102b91eb326f7826613ae9070ed/urijs-all.js
// ==/UserScript==

/* jshint asi: true, esnext: true, -W097 */

(function($) {
  'use strict'
  $("#freeMember").remove();
  $("#loggedinMember").remove();
  var element = document.getElementsByClassName('freeHide');
  var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.type === "attributes" && $('.freeHide').attr('style') !== "") {
        $(".freeHide").attr("style", "");
      console.log("attributes changed")
    }
  });
});

observer.observe(element[0], {
  attributes: true
});

}).bind(this)(jQuery)

jQuery.noConflict()
