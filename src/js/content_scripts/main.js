// Fetch our templates and inject them into the page
function inject_navigation_toggle() {
  if( $('#fbp-navigation-toggle').length != 0 ) {
    return true;
  }

  var $navigation_button = toggle_button(
    "Navigation", 
    "#pagelet_welcome_box, #pagelet_navigation",
    {default_state: "Show"}
  );

  $navigation_button.val('id', "fbp-navigation-toggle");
  $('#leftCol').prepend($navigation_button);

  return true;
};

function inject_ads_toggle() {
  if( $('#fbp-ads-toggle').length != 0 ) {
    return true;
  }

  var $ads_button = toggle_button(
    "Ads", 
    ".home_right_column",
    {default_state: "Show"}
  );

  $ads_button.val('id', "fbp-ads-toggle");
  $('#rightCol').prepend($ads_button);

  return true;
}

function toggle_element(el) {
  $(el).slideToggle();
}

// button_name: the name of the button i.e. Show Navigation, Show <button_name>
// el: the id of the element to be toggled between show and hide
function toggle_button(button_name, el, options) {
  defaultOptions = {
    default_state: "Show",
    template: "#fbp-toggleButton"
  }

  if (typeof options == 'object') {
    options = $.extend(defaultOptions, options);
  } else {
    options = defaultOptions;
  }

  var even = "Show";
  var odd = "Hide";

  if (options.default_state == "Show") {
    $(el).hide();
    var tmp = even;
    even = odd;
    odd = tmp;
  }

  var buttonHTML = $(options.template).html();
  $buttonHTML = $(buttonHTML);
  $button = $buttonHTML.find('input');
  $button.val(options.default_state+" "+button_name);

  $button.click(function() {
    toggle_element(el);
  });

  $button.toggle(
    function() {
      $(this).val(even+" "+button_name);
    },
    function() {
      $(this).val(odd+" "+button_name);
    }
  );

  return $buttonHTML;
}