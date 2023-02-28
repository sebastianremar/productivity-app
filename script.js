var $content = $('.sidebar-menu');

function showContent(selector) {
  $content.hide();
  $(selector).show();
}

$('.sidebar').on('click', '.sidebar-menu', function(e) {
  showContent(e.currentTarget.hash);
  e.preventDefault();
}); 

// show '#about' content only on page load (if you want)
showContent('#management');