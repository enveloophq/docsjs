---
title: "Google Domain SMTP Relay"
description: Set up Enveloop to use your Google Domain account to send email via SMTP.
---

Enveloop will be launching full support for Google OAuth for SMTP soon.

#### Step 1: Create an App password on Google for Enveloop.

You will not be able to log in with your normal Google password. For security, you will need to set up an **App Password** and will use this password to authenticate Enveloop to Google. Go to your [Google account security page](https://myaccount.google.com/security) and create a new **App password.**

#### Step 2: Configure SMTP Relay settings

Goto your [Google Admin Routing Settings](https://admin.google.com/u/1/ac/apps/gmail/routing) and perform the following steps:

* Click **"Add Another Rule"** beside **SMTP Relay Service**.
* Under **1. Allowed Senders** choose **"Only addresses in my domains"**
* Under **2. Authentication** choose **"Require SMTP Authentication"**

![Configure Google SMTP Admin Routing](/images/configure-google-smtp-admin-routing-in-enveloop.png)

#### Step 3: Configure your SMTP Provider

Follow the [steps on the SMTP setup](./#adding-smtp-to-enveloop) to configure the provider in Enveloop using the following settings:

* Host: **smtp-relay.gmail.com**
* User: **\<your google hosted email address>**
* Pass: **\<App password from step 1>**

#### Step 3: Add your "Default From"

Your Default From Email is a global setting that defines the email address and identity that will deliver the message by default. Once complete, click **Save Integration**.

When using Google SMTP Relay you can send emails as other users in the authed domain not just the logged in user.

::::tip
You can read more about Google SMTP Relay support in their docs:
[https://support.google.com/a/answer/2956491?hl=en](https://support.google.com/a/answer/2956491?hl=en)
::::
