---
title: "Postmark"
description: Set up Enveloop to use Postmark as a backend message platform.
---

These docs assume you have a [Postmark](https://postmarkapp.com) and [Enveloop](https://app.enveloop.com) account. If you don't have one of those, they're super-easy to get.

#### Setting up Postmark

Before we dive into Enveloop, let's spend some time making sure that your Postmark environment is set up properly. If you're familiar with Postmark, you may want to skip over it.

Once you're logged into Postmark, you'll need to do the following:

1. Create a new **Server**\
   \
   You can name your server and decide if it should be "Live" or a test "Sandbox" server. Of note, Enveloop has a powerful sandbox feature as well, so you can safely select "Live" here and test your messages in Enveloop.\

2. Choose **Default Transactional Stream**\
   \
   Enveloop is primarily focused on sending transactional messages (from your apps). So, select this message type.\

3. Choose **Settings** to view Stream Settings and API key\
   \
   In the settings for the stream, Postmark provides a **Server API Token**. This allows you to send messages via this specific server. Copy this -- you'll need it add it to Enveloop in just a moment.

#### Setting up Enveloop

Now that you have your server and stream set up in Postmark, let's add your key to Enveloop. From there, you'll be all set to send messages from Enveloop, via your Postmark account.

Once you are logged into Enveloop, you'll need to do to the following:

1. Open the **Team** and **Project** you want to use\
   \
   If you haven't created a team and project, it only takes a moment. A project is is a 1:1 map to the application that you are sending messages from.\

2. Select **Integrations** and choose Postmark\
   \
   Enveloop has a number of direct and SMTP integrations available for you to use. For this example, we'll be using Postmark. You are adding an integration for this project only.\

3. Add your Postmark **Server API key** to your project\
   \
   Paste in your Postmark Server API key.\

4. Set your **Default From** email address\
   \
   Don't worry, this is just the default address. You can send from additional email addresses based on your API call.

#### 🎉  Success

You should be good to go! From here, you can go to the **Deploy** tab of a _published_ message template, select either the Sandbox or Production code snippets and try it out!



#### 🪄 Tips

If you don't have a lot of experience with Postmark as a backend message provider, here are a couple of tips to help you avoid feelings of confusion when you are just starting out.\


**⚠️ Servers in Test Mode** (limited "to" options)

When you first create a "server" on Postmark, it will be in test mode. Until you get Postmark to approve the server, you will only be able to send to emails within your approved domain.

If you attempt to send an email, via Postmark, to any address outside the domain, Postmark will reject it. You'll notice this in your Enveloop Message Logs, under the **Response** tab.\


**⚠️ Adding a Sender Signature**

Before you can send any messages via Postmark, you have to verify your "from" email address by creating (what Postmark calls) a _Sender Signature_.&#x20;

If you attempt to send an email, via Postmark, without this signature saved, Postmark will reject it. You'll notice this in your Enveloop Message Logs, under the **Response** tab.
