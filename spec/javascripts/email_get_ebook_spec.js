describe("Mailchimp sign up for ebooks", function() {
	beforeEach(function() {
    loadFixtures("ebook_sign_up_form.html");
    $.mockjax.clear();
    $('.email-subscription-form.ebook').ajaxChimp();
  });

  it("should render an error if the email is invalid", function() {
    $.mockjax({url: "//subscribe/*",
     responseText: {
      result: "error",
      msg: "0 - An email address must contain a single @"}
    });

    $("#mc-ebook").val("some_invalid_string");

    runs(function() {
      $('.email-subscription-form.ebook').submit();
    });
    waitsFor(function() {
      return $(".email-subscription-form.ebook label").hasClass("error");
    }, "The request is made.", 2000);

    runs(function() {
      expect($(".email-subscription-form.ebook label")).toHaveClass("error");
      expect($(".email-subscription-form.ebook input[type=email]")).toHaveClass("error");
      expect($(".email-subscription-form.ebook label.error")).toHaveText("An email address must contain a single @");
    });

  });

  it("should render a success message if the subscribe is successful", function() {
    $.mockjax({url: "//talking-code-subscription.herokuapp.com/*",
     responseText: {
      result: "success",
      msg: "Almost finished... We need to confirm your email address. To complete the subscription process, please click the link in the email we just sent you."
    }});

    $("#mc-email").val("jon@somesite.com");

    runs(function() {
      $('.email-subscription-form.ebook').submit();
    });
    waitsFor(function() {
      return $(".email-subscription-form.ebook label").hasClass("valid");
    }, "The request is made.", 2000);

    runs(function() {
      expect($(".email-subscription-form.ebook label")).toHaveClass("valid");
      expect($(".email-subscription-form.ebook input[type=email]")).toHaveClass("valid");
      expect($(".email-subscription-form.ebook label")).toHaveText("We have sent you a confirmation email");
     });

  });
});
