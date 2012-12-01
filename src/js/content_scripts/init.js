var templatesURL = chrome.extension.getURL("html/templates/templates.html");
$.ajax({
  url: templatesURL, 
  success: function(data) {
    $('body').append(data);
  },
  async: false
});

inject_navigation_toggle();
inject_ads_toggle();