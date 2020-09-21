var s = browser.extension.getURL("basicBot.js");
var s2 = browser.extension.getURL("extension.js");
var langru = browser.extension.getURL("lang/ru.json");
var langen = browser.extension.getURL("lang/en.json");
var banned_list = browser.extension.getURL("blacklists/BANNEDlist.json");
var nsfw_list = browser.extension.getURL("blacklists/NSFWlist.json");
var op_list = browser.extension.getURL("blacklists/OPlist.json");

setTimeout(function () {
window.eval(`
var botscript = '${s}';
var langru = '${langru}';
var langen = '${langen}';
var banned_list = '${banned_list}';
var nsfw_list = '${nsfw_list}';
var op_list = '${op_list}';

var script2 = document.createElement('script');
script2.src = "${s2}";
document.getElementsByTagName('body')[0].appendChild(script2);
`);
}, 1000);