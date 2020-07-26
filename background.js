chrome.browserAction.onClicked.addListener(function(tab) {
  var callback = function () {
    chrome.tabs.reload();
  };

  var millisecondsPerWeek = 1000 * 60 * 60 * 24 * 7;
  var oneWeekAgo = (new Date()).getTime() - millisecondsPerWeek;

  chrome.browsingData.remove({
      "since": oneWeekAgo
  }, {
      "appcache": true,
      "cache": true,
      "cacheStorage": true,
      "cookies": false,
      "downloads": false,
      "fileSystems": false,
      "formData": false,
      "history": false,
      "indexedDB": false,
      "localStorage": false,
      "pluginData": false,
      "passwords": false,
      "serviceWorkers": false,
      "webSQL": false
  }, callback);

});
