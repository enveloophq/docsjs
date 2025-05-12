---
title: "Adding a Sending Domain"
description: "Set up Enveloop to send messages using your own sending domain."  
---

Enveloop is a full end-to-end email provider. You can set up your domains in the app and send using multiple email addresses.

Now that you've created a template and sent yourself some test messages, the next step is to set up sending, which allows you to send messages in production. In this segment of the Getting Started guide, we'll walk you through how to do that.

We call it **Enveloop Send**. It's simple -- let's go!

#### What is Enveloop Send?

Enveloop Send allows you to easily configure and send emails from an individual email address or by using a full domain of emails – across all your teams and projects – without needing a separate backend message provider.

#### Adding your Domain Name

Once you've **created your Enveloop account** and are ready to set up sending, choose **Mail Settings**, located in the left-side navigation.

![Sender ID Step 1](/docs-images/sender-id-01.png)

Click on the **Add Sender ID** button.

You'll be prompted to enter a domain name _(for example: reallyredpanda.com)_. Add the domain name.

[Youtube: Add a Domain in Enveloop](https://www.youtube.com/watch?v=_ugIHY-7Icw)

Once the domain has been saved, Enveloop will present you with the following:

* **DKIM** `TXT` record. You will add this record your domain.
* **SPF** `TXT` record. You will add this record your domain.
* **DMARC** `TXT` record. You will add this record your domain.

::::tip
If you need specific help on how to do this with your domain hosting solution, please let us know. We're happy to assist.
::::

Once back in Enveloop, you'll notice a **Yellow Shield** icon. This icon will remain in place for a few moments until Enveloop verifies that your `TXT` record was saved correctly.

There is nothing more you need to do at this point – Enveloop will continue to check your domain every 20-30 seconds to verify everything is proper. The entire process should take around 60 seconds.

![Sender ID Step 3](/docs-images/sender-id-03.png)

Once the domain-based DKIM record has been verified, you'll see a **Green Shield** icon. From there, you are all set to start sending!

**Default From.** Now that your domain is set up, you can define a _Default From Address_ and Name for your email templates. You can override this value inside individual templates, but having a default set up is good practice.

[Youtube - Set a Default From Address](https://youtu.be/iMRrUtnudBE)

That's it -- your domain is now set up to send emails via Enveloop.

#### Verified Senders

If you, as a developer at your company, do not have access to the configuration settings for your domain name, you can still set up an email address you manage as a Verified Sender.

We added a separate article, [Using Verified Senders with Enveloop](adding-a-sending-domain), to tell you about this and show you how to set it up.

#### Third-Party Integrations

If you have an account with another email provider (like Postmark, Sendgrid, Mailgun, etc.), you can use Enveloop to create and manage all your message templates while still using your account on the email provider.

We provide more information in: [Email Integrations](../../integrations/do-i-need-integrations/).
