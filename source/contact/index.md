---
layout: page
title: Contact us
meta-title: Contact us
include-below: address.html
---


<form action="/thank-you/" netlify>

  <input type="hidden" name="utf8" value="✓">

  <input type="hidden" value="http://weareconvivio.com/thank-you" name="_redirect" />

    <p class="intro-copy">Send us a message using the form below, or <a href="mailto:hello@weareconvivio.com">email us directly</a></p>

    <div class="form-group">
      <label class="form-label" for="name">Name</label>
      <input class="text-input" type="text" id="name" name="name">
    </div>

    <div class="form-group">
      <label class="form-label" for="email">Email</label>
      <input class="text-input" required type="email" id="email" name="email">
    </div>

    <div class="form-group">
      <label class="form-label" for="company">Company</label>
      <input class="text-input" type="text" id="company" name="company">
    </div>

  <div class="form-group">
    <label class="form-label" for="message">How can we help you?</label>
    <textarea class="text-input text-input--large" rows="5" cols="50" type="email" id="message" name="message"></textarea>
  </div>

  <div class="form-group">
    <button class="button button--primary" type="submit">Send message</button>
  </div>
</form>


