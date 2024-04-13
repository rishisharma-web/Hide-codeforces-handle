chrome.storage.sync.get(['username'], function(result) {
  $(document).ready(function() {
    var bodyHtml = $('body').html();
    var spaces=' '.repeat(result.username.length);
 
    var replacedHtml = bodyHtml.replace(new RegExp(result.username, 'g'), spaces);
    $('body').html(replacedHtml);
    document.body.style.display = "block";

  });
});
