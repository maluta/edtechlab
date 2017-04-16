document.addEventListener('DOMContentLoaded', function() {

  var btnLogo = document.getElementById('btnLogo');
  var btnHeader = document.getElementById('btnHeader');
  var btnRestore = document.getElementById('btnRestore');

  btnLogo.addEventListener('click', function() {
    chrome.tabs.executeScript(null, {file: "logo.js"});
  }, false);

  btnHeader.addEventListener('click', function() {
    chrome.tabs.executeScript(null, {file: "header.js"});
  }, false);

  btnRestore.addEventListener('click', function() {
      chrome.tabs.reload();
    }, false);

}, false); /* end: addEventListener */
