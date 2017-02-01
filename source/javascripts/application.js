//= require _jquery
//= require _cookies
//= require ajaxchimp

$(document).ready(function(){


  $('.email-subscription-form').ajaxChimp();

  $(".ask-question-form form input[name='name']").val(Cookies.get("question-form-name"));
  $(".ask-question-form form input[name='email']").val(Cookies.get("question-form-email"));

  $('.ask-question-form form').submit(function(e){
    e.preventDefault();
    var form = $(this);
    var name = form.find("input[name='name']").val();
    var email = form.find("input[name='email']").val();
    var message = form.find("textarea[name='message']").val();

    Cookies.set("question-form-name", name)
    Cookies.set("question-form-email", email)

    message = "Question made from " + window.location.href + " : \n" + message

    $.ajax("https://mandrillapp.com/api/1.0/messages/send.json",
     {
      method: 'post',
      data: {
        key: "DlAkI3r7xD-oCL_q6PhYPg",
        message: {
        from_email: email,
        from_name: name,
        text: message,
        subject: "Message From question form on Talking Code",
        to: [
          {
            email: "venkat@talkingcode.com",
            type: "to"
          },
          {
            email: "josh@talkingcode.com",
            type: "to"
          }
        ]
        }
      }
    }).done(function(response) {
        alert("Thanks for your question!"); // show success message
        form.get(0).reset();
      }).fail(function(response) {
        alert('Error sending message.');
        console.log(response);
      });
  });
});
