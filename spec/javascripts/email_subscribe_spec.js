describe("Mailchimp sign up", function() {
  beforeEach(function() {
    loadFixtures("sign_up_form.html");
    $.mockjax.clear();
    $('.email-subscription-form').ajaxChimp();
  });

  it("should render an error if the email is invalid", function() {
    $.mockjax({url: "//talking-code-subscription.herokuapp.com//*",
     responseText: {
      result: "error",
      msg: "0 - An email address must contain a single @"} 
    });

    $("#mc-email").val("some_invalid_string");

    runs(function() {
      $('.email-subscription-form').submit();
    });
    waitsFor(function() {
      return $(".email-subscription-form label").hasClass("error");
    }, "The request is made.", 2000);
     
    runs(function() {
      expect($(".email-subscription-form label")).toHaveClass("error")
      expect($(".email-subscription-form input[type=email]")).toHaveClass("error")
      expect($(".email-subscription-form label.error")).toHaveText("An email address must contain a single @");
    });

  });

  it("should render a success message if the subscribe is successful", function() {
    $.mockjax({url: "//talking-code-subscription.herokuapp.com//*",
     responseText: {
      result: "success",
      msg: "Almost finished... We need to confirm your email address. To complete the subscription process, please click the link in the email we just sent you."
    }});

    $("#mc-email").val("jon@somesite.com");

    runs(function() {
      $('.email-subscription-form').submit();
    });
    waitsFor(function() {
      return $(".email-subscription-form label").hasClass("valid");
    }, "The request is made.", 2000);
     
    runs(function() {
      expect($(".email-subscription-form label")).toHaveClass("valid")
      expect($(".email-subscription-form input[type=email]")).toHaveClass("valid")
      expect($(".email-subscription-form label")).toHaveText("We have sent you a confirmation email");
     });

  });
});