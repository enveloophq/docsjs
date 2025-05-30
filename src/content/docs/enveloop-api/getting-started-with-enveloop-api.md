---
title: Getting Started
description: "Get started using the Enveloop API to send messages from your app."
---

#### API Tokens

To connect to the Enveloop API you will need to create an **API Token** for the project you want to interact with. After logging into your Enveloop account, go to the **Settings** page for the _Project_ you are in.

A **Project** in Enveloop represents one of your **apps**. Each project has its own templates and API tokens/settings.

![Project settings page](/images/Screen%20Shot%202022-12-08%20at%2011.21.29%20PM.png)

*Project settings page*

There are two types of API tokens associated with a project:

* Production
* Sandbox

**Production** tokens begin with `live_` and will send _actual_ messages with the configured provider. **Sandbox** token begin with `test_` and only mock the sending action. Therefore, calls made from your app, using your sandbox token, do not connect to the provider on the project.&#x20;

![Enveloop Sandbox Inbox](/images/image (3).png)

Important to note: sandbox messages do show up in the **Sandbox** tab on the **Message Log**. This allows you to send messages from your local development environment or your CI and test the full interaction without sending live messages. You can preview the contents of the messages as well, allowing a rich inbox experience for local development.

#### Multiple Tokens

You can create more than one token and use tokens for different needs, such as separating environments, testing specific functionalities, or managing access control for different parts of your application.
