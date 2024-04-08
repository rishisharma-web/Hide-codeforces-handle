
$(document).ready(function() {
  var bodyHtml = $('body').html();
  var replacedHtml = bodyHtml.replace(/RISHI_SHARMA/g, '           '); // 11 spaces
  $('body').html(replacedHtml);
  document.body.style.display = "block";
});
