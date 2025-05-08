---
title: "Do I Need Integrations?"
layout: default
parent: Integrations
---

# Do I Need Integrations?

If you are just getting started and still in development and/or testing, you can use Enveloop to deliver messages using a couple of methods.

## Send a Test Message

As you design your message templates and add in markdown and mustache variables/logic, you can always send a test message to view the results of your formatting in your personal inbox.

Inside an Enveloop template, you can do this by selecting the **Test** tab at top. On the right, you will see a **Send Test Email** button. It will send a test message, based on the selected template, to the email address associated with your account.

You can send as many test messages as you need.

## Enveloop Testing Service

If you want to programmatically test _actual_ delivery of your messages before connecting to your message delivery provider, Enveloop provides you with 100 free emails _per month_ that will deliver messages via our testing domains. This is a good way to ensure your code delivers dynamic content correctly, etc.

Also, it allows you to get a good sense of how delivered messages will look before taking the next step with Enveloop (configuring a backend message provider).

It's important to note that, when using Enveloop Testing Domains, any emails you send will be delivered via Enveloop, but will use an Enveloop domain (normally: sentwithenveloop.com).

## Enveloop Sandbox

In your project settings you will notice Api Tokens for both `Production` and `Sandbox` environments. Sandbox tokens begin with `test_`. Messages sent using the Sandbox tokens are not sent publicly, but show up in the Message Log under the Sandbox tab.

This is great for testing out API functionality as well as configuring for development and staging since you can use any email real or generated. This can also take the place of libraries meant to capture and display emails sent locally in development.
