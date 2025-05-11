---
title: "SMTP"
description: Set up Enveloop to use SMTP to send messages.
---

Using SMTP will allow you to use your own in-house mail server, or any mail service that exposes direct access to SMTP like Amazon SES or Gmail.

#### Adding SMTP to Enveloop

Once you have your SMTP credentials, adding it to Enveloop is a quick process.

##### Step 1: Inside Enveloop, open the team & project you want to use

Each project (which represents one of your apps) can have its own message settings. So, choose a **Project** and in the menu, choose **Integrations** from the options on the left.

##### Step 2: Add your SMTP credentials to your project

Click **Configure** and on the **Service** dropdown, select **SMTP** from the dropdown menu. Paste your **Host**, **User**, **Pass**, & **Port** _(defaults to 587)_ information.

##### Step 3: Add your "Default From"

Your Default From Email is a global setting that defines the email address and identity that will deliver the message by default. Once complete, click **Save Integration**.

The "Default From" is only a default setting. Each message template in your project can have a custom-set **from** value. If you do not specify it on the template, it will use the value you define on the integration.

#### Examples of Email providers who provide SMTP

* [Amazon SES](amazon-ses.md)
* [Gmail SMTP](gmail-smtp.md)
* [Google Domain SMTP Relay](google-domain-smtp-relay.md)
