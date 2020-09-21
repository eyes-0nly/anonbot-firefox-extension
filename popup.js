function showError(error) {
    console.error(`Failed to execute content script with error: ${error.message}`);
  }

function loaded() {
    document.getElementById('loadBot').hidden = true;
    setTimeout(function () {
        document.getElementById('loadBot').hidden = false;
    }, 1000);
  }

document.addEventListener('DOMContentLoaded', function () {
    var loadButton = document.getElementById('loadBot');
    loadButton.addEventListener('click', function () {
        browser.tabs.executeScript({file: "load.js"})
        .then(loaded)
        .catch(showError);
    }, false);
}, false);