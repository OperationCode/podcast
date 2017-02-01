$(document).ready(function(){

  var episodeData = {episode: window.episodeId, episodeTitle: window.episodeTitle}

  analytics.trackLink($(".podcast-download-options a.mp3"), 'Clicked Download MP3', episodeData);
  analytics.trackLink($(".podcast-download-options a.itunes"), 'Clicked Listen on Itunes', episodeData);
  analytics.trackLink($(".player .jp-play"), 'Clicked player play button', episodeData);

  document.getElementById('twitter-wjs').addEventListener('load', function() {
    twttr.ready(function (twttr) {
      twttr.events.bind('click', function (event) {
        if(event.region == "tweet"){
          analytics.track('Clicked Tweet Episode Quote', episodeData);
        }
      });
    });

  }, false);
});