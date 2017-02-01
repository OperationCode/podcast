---
name: "David Cramer"
company: "Sentry"
title: "How to Fix Errors Quickly"
episode: 10
upcoming: false
twitter_url: https://twitter.com/zeeg
download_url: http://audio.simplecast.fm/13069.mp3
summary: |
  <a href="https://twitter.com/zeeg">David Cramer</a> tells us how to catch and fix critical errors that can affect your bottom line. We also discuss the key differences between exceptions and bugs, and how to handle errors gracefully.
summary_text: |
  David Cramer tells us how to catch and fix critical errors that can affect your bottom line. We also discuss the key differences between exceptions and bugs, and how to handle errors gracefully.
links:
  - :url: https://getsentry.com
    :label: "Sentry"
  - :url: http://cramer.io/
    :label: "David's blog"
  - :url: https://docs.oracle.com/javase/tutorial/essential/exceptions/definition.html
    :label: "Exceptions"
  - :url: https://en.wikipedia.org/wiki/Software_bug
    :label: "Bugs"
  - :url: https://en.wikipedia.org/wiki/Test_automation
    :label: "Test automation"
  - :url: https://en.wikipedia.org/wiki/Webhook
    :label: "Webhooks"
  - :url: https://en.wikipedia.org/wiki/Character_encoding
    :label: "Character encoding"
  - :url: https://en.wikipedia.org/wiki/Unicode
    :label: "Unicode"
  - :url: http://talkingcode.com/podcast/episode-1-florian-motlik/
    :label: "Talking Code: How to Ship Well-Tested Software Faster"
  - :url: https://en.wikipedia.org/wiki/Integration_testing
    :label: "Integration testing"
  - :url: https://en.wikipedia.org/wiki/Smoke_testing_(software)
    :label: "Smoke tests"
tweetables:
  - :quote: "A good example of a bug is maybe this page was supposed to be blue instead of red."
    :tweet: "&quot;A good example of a bug is maybe this page was supposed to be blue instead of red.&quot; - @zeeg"
  - :quote: "An exception would be taking a one and dividing by zero, so the program would crash at that point."
    :tweet: "&quot;An exception would be taking a one and dividing by zero, so the program would crash at that point.&quot; - @zeeg"
  - :quote: "Users see bugs and those bugs may not result in an actual error, whereas an exception is a hard error."
    :tweet: "&quot;Users see bugs and those bugs may not result in an actual error, whereas an exception is a hard error.&quot; - @zeeg"
  - :quote: "The main reason logs are bad is because I as a developer am never going to look at them."
    :tweet: "&quot;The main reason logs are bad is because I as a developer am never going to look at them.&quot; - @zeeg"
  - :quote: "There’s a ton of data and you don’t really know what’s important. Is that error affecting the most people?"
    :tweet: "&quot;There’s a ton of data and you don’t really know what’s important. Is that error affecting the most people?&quot; - @zeeg"
  - :quote: "You throw that input into a test, you put the expected output (the error), and you just go fix the code."
    :tweet: "&quot;You throw that input into a test, you put the expected output (the error), and you just go fix the code.&quot; - @zeeg"
  - :quote: "How does it affect the bottom line? Either it’s a monetary value or it’s overall customer happiness."
    :tweet: "&quot;How does it affect the bottom line? Either it’s a monetary value or it’s overall customer happiness.&quot; - @zeeg"
  - :quote: "More often the errors you’re seeing are machine to machine, so the customer would never even report those."
    :tweet: "&quot;More often the errors you’re seeing are machine to machine, so the customer would never even report those.&quot; - @zeeg"
  - :quote: "Some software seems less buggy because they’ve been allowed to spend a lot of time focusing on tests."
    :tweet: "&quot;Some software seems less buggy because they’ve been allowed to spend a lot of time focusing on tests.&quot; - @zeeg"
  - :quote: "Sentry affords you the ability to take a little bit of risk because I’ll know about problems right away."
    :tweet: "&quot;Sentry affords you the ability to take a little bit of risk because I’ll know about problems right away.&quot; - @zeeg"
  - :quote: "Try not to joke about things. Have a page to apologize and be clear that there was an error that happened."
    :tweet: "&quot;Try not to joke about things. Have a page to apologize and be clear that there was an error that happened.&quot; - @zeeg"
  - :quote: "If the error’s not in Sentry we probably don’t know about it."
    :tweet: "&quot;If the error’s not in Sentry we probably don’t know about it.&quot; - @zeeg"
questions:
  - :question: What is an exception?
    :timestamp: "00:43"
  - :question: What’s the difference between an exception and a bug?
    :timestamp: "01:21"
  - :question: What might a developer do to cause an exception?
    :timestamp: "01:56"
  - :question: What is the user’s experience when an exception occurs?
    :timestamp: "02:30"
  - :question: Do exceptions mean developers aren’t writing code well?
    :timestamp: "04:32"
  - :question: How can I become aware of the smaller errors that happen?
    :timestamp: "05:40"
  - :question: Why are logs bad?
    :timestamp: "11:38"
  - :question: If I can’t sift through logs as a developer, how is Sentry able to sift through it?
    :timestamp: "12:49"
  - :question: What information do you need to fix an error?
    :timestamp: "13:51"
  - :question: How do we reproduce bugs?
    :timestamp: "15:52"
  - :question: Is it possible to use information from bugs to improve automated tests?
    :timestamp: "17:44"
  - :question: What are my next steps after being notified about an error?
    :timestamp: "18:43"
  - :question: What are the other side effects you might see from errors?
    :timestamp: "20:19"
  - :question: Why is it not possible for Sentry to catch bugs?
    :timestamp: "24:16"
  - :question: What can we do to minimize the chance of exceptions occurring?
    :timestamp: "26:05"
  - :question: Are there any common things people should test for around exceptions?
    :timestamp: "28:16"
  - :question: Why do you think people don't do automated testing?
    :timestamp: "30:06"
  - :question: Are there any best practices on how to handle error display?
    :timestamp: "34:21"
  - :question: How does Sentry use Sentry to monitor Sentry?
    :timestamp: "36:40"
---