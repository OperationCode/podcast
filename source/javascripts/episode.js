$(document.body).ready(function(){
  window.addEventListener("hashchange", forwardAudioForHash, false);
  $("#simplecast-audio-player").bind("jPlayer_loadstart", forwardAudioForHash)
  $("#simplecast-audio-player").bind("jPlayer_waiting", showLoading)
  $("#simplecast-audio-player").bind("jPlayer_playing", hideLoading)
  $("#simplecast-audio-player").bind("jPlayer_pause", hideLoading)

  $('.player a.jp-loading').click(function(){
    $("#simplecast-audio-player").jPlayer("pause", seconds);
  });


});

function hmsToSecondsOnly(str) {
    var p = str.split(':'),
        s = 0, m = 1;

    while (p.length > 0) {
        s += m * parseInt(p.pop(), 10);
        m *= 60;
    }

    return s;
}

function forwardAudioForHash(){
  hash = window.location.hash
  if (hash){
    timestamp = hash.replace("#", "");
    seconds = hmsToSecondsOnly(timestamp);
    $("#simplecast-audio-player").jPlayer("play", seconds);
    scrollToElementWithPadding(".podcast-header", 20);
  }
}

function scrollToElementWithPadding(selector, padding){
  $('html, body').animate({
        scrollTop: $(selector).offset().top - padding
    }, 1000);
}

function showLoading(){
  $('.player .jp-gui .jp-play').hide();
  $('.player .jp-gui .jp-pause').hide();
  $('.player .jp-gui .jp-loading').show();
}

function hideLoading(){
  $('.player .jp-gui .jp-loading').hide();
}