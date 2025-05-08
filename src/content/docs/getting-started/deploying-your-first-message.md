---
title: Deploying your First Message
layout: default
parent: Getting Started
nav_order: 6
---

Now that you have created and tested a message, you can publish/deploy your message template and, from there, call it programmatically from your app.

You can do this by selecting the **Deploy** tab at top.


![Deploy Tab Screenshot](/docs-images/Screen%20Shot%202022-12-15%20at%203.59.07%20PM.png)


### Publishing

When your message template is ready to be used, you can click the green **Publish** button located in the top-right of the Enveloop UI.

While not covered in great detail in this doc, Publishing a template is a way to manage versioning for your message templates.

### Code Snippets

In the **Deploy** tab, Enveloop provides you with code snippets for HTTP as well as popular languages. All the variables you used when crafting your message are automatically injected into the code snippets.

![Deploy Tab Code Snippets](/docs-images/Screen%20Shot%202022-12-15%20at%204.38.41%20PM.png)

*The Deploy tab includes an area with language support for making API calls with multiple languages.*

To **find out more** about our API, code snippets, and the open-source SDKs that we have made available to you, visit: [Enveloop API](../../enveloop-api/getting-started-with-enveloop-api.md).

### Message Log

Once you programmatically send a message, either your Production or Sandbox Enveloop API key for a project, you can view the message, the response, and the events status in the **Message Log** for the project.

Each Project you create has a dedicated Message Log.

![Enveloop Message Log](/docs-images/Screen%20Shot%202022-12-15%20at%205.01.49%20PM.png)

*The Enveloop Message Log allows you to see both production and sandbox messages as well as key response data.*

From here, you should be all set and sending messages. Enveloop provides you with 100 messages per month sent on our domain, but once you are confident in your setup, you can [set up a backend provider](../../integrations/do-i-need-integrations.md) for your project via the Integration settings.

