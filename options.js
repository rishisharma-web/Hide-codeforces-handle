// options.js
document.getElementById('saveButton').onclick = function() {
    var username = document.getElementById('username').value;
    chrome.storage.sync.set({'username': username}, function() {
      console.log('Username is set to ' + username);
    });
  }
  