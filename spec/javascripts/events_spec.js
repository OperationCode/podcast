describe("Analytics", function() {
  beforeEach(function() {
    spyOn(analytics, 'track');
  });

  it("should call analytics track if a user signs up", function() {
    loadFixtures("sign_up_form.html");
    $('.email-subscription-form').ajaxChimp();

    $.mockjax({url: "//talking-code-subscription.herokuapp.com/*",
     responseText: {
      result: "success",
      msg: "Almost finished... We need to confirm your email address. To complete the subscription process, please click the link in the email we just sent you."
    }});

    runs(function() {
      $('.email-subscription-form').submit();
    });
    waitsFor(function() {
      return $(".email-subscription-form label").hasClass("valid");
    }, "The request is made.", 2000);

    runs(function() {
     expect(analytics.track).toHaveBeenCalledWith('Signed Up for Mailchimp', { episodeTitle : undefined, source : 'header_form' });
     $.mockjax.clear();
    });
  });

  it("should track a click on listen on itunes link", function(){
    loadFixtures("listen_on_itunes.html");
    var analyticsScriptLoaded = false;
    runs(function() {
      $.getScript('/source/javascripts/podcast_analytics.js', function(){
        analyticsScriptLoaded = true;
      });
    });

    waitsFor(function() {
      return analyticsScriptLoaded;
    }, "script is loaded.", 2000);

    runs(function() {
      $('a.itunes').get(0).click();
      expect(analytics.track).toHaveBeenCalledWith('Clicked Listen on Itunes', { episode : undefined, episodeTitle : undefined });
    });
  });

  it("should track a click on download mp3 link", function(){
    loadFixtures("download_mp3.html");

    var analyticsScriptLoaded = false;
    runs(function() {
      $.getScript('/source/javascripts/podcast_analytics.js', function(){
        analyticsScriptLoaded = true;
      });
    });

    waitsFor(function() {
      return analyticsScriptLoaded;
    }, "script is loaded.", 2000);

    runs(function() {
      $('a.mp3').get(0).click();
      expect(analytics.track).toHaveBeenCalledWith( 'Clicked Download MP3', { episode : undefined, episodeTitle : undefined });
    });
  });

  it("should track a click the player play button", function(){
    loadFixtures("player.html");

    var analyticsScriptLoaded = false;
    runs(function() {
      $.getScript('/source/javascripts/podcast_analytics.js', function(){
        analyticsScriptLoaded = true;
      });
    });

    waitsFor(function() {
      return analyticsScriptLoaded;
    }, "script is loaded.", 2000);

    runs(function() {
      $(".player .jp-play").get(0).click();
      expect(analytics.track).toHaveBeenCalledWith('Clicked player play button', { episode : undefined, episodeTitle : undefined });
    });
  });
});