function inject_templates() {
  var $templates = $('fbp-toggleButton');
  if( $templates.length == 0) {
    var templatesURL = chrome.extension.getURL("html/templates/templates.html");
    $.ajax({
      url: templatesURL, 
      success: function(data) {
        $('body').append(data);
      },
      async: false
    });
  }
}

function start_navigation_toggle_injection() {
  var navigation_detection_loop = setInterval(function() {
    var $el = $('#pagelet_welcome_box, #pagelet_navigation');
    if( $el.length != 0 ) {
      console.log("Found #pagelet_welcome_box, #pagelet_navigation");

      $el.hide();
      clearInterval(navigation_detection_loop);

      inject_templates();

      inject_navigation_toggle();
    }
  }, 125);
}

function start_ads_toggle_injection() {
  var ads_detection_loop = setInterval(function() {
    var $el = $('.home_right_column');
    if( $el.length != 0 ) {
      console.log("Found .home_right_column");

      $el.hide();
      clearInterval(ads_detection_loop);

      inject_templates();

      inject_ads_toggle();
    }
  }, 125);
}

start_navigation_toggle_injection();
start_ads_toggle_injection();