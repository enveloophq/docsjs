---
title: "Twilio"
layout: default
parent: SMS Integrations
---

# Twilio

The first step will be to make sure that you have a Twilio account set up. This documentation doesn't highlight how to do this, but we'll step you through everything else.

## Configuring Twilio

If you already have Twilio set up with mobile numbers and API keys, you can skip this part. 💪

### Step 1: Create a telephone number

After setting up your account at Twilio, the first thing you will do is create a phone number. You can create a toll-free number for initial testing. _(Note: When using a Twilio free telephone number, all your SMS messages will be prefixed with "Sent from your Twilio trial account")_

Creating a local telephone number will require additional regulatory steps (to ensure you are not spam).&#x20;

### Step 2: Locate your Twilio API details

When you create your Twilio account, Twilio creates these credentials for you. In the normal process, they are located on your dashboard.

<figure><img src="/doc-images/Screenshot 2023-02-15 at 9.58.34 AM.png" alt="An example of a Twilio accout information page, showing account information required for the user to configure Twilio with Enveloop."><figcaption><p>You will need your Account SID, your Twilio Auth Token, and your Twilio Phone Number to complete your integration with Enveloop.</p></figcaption></figure>

## Adding Twilio Information to Enveloop

### Step 1: In Enveloop, open the team & project you want to use

Each project (which represents one of your apps) can have its own message settings. So, choose a **Project** and in the menu, choose **Integrations** from the options on the left.

### Step 2: Select "Configure" from SMS Integrations.

**Please note:** Enveloop provides you a small amount of test message credits to explore SMS use with Enveloop. However, once you want to configure your Twilio account and telephone numbers with Enveloop, you'll need to upgrade to our "Starter" plan.

### Step 3: Add your Twilio API details to your project

Add the Twilio values (SID, Token, Telephone Number) to your project's integration settings. If you only have one number, it will automatically be populated once you add your SID and token.

<figure><img src="/doc-images/Screenshot 2023-02-15 at 10.02.48 AM.png" alt="Web form in Enveloop where a user would enter their account information from Twilio to configure Twilio with Enveloop. Includes API keys and phone number input fields."><figcaption></figcaption></figure>

### 🎉  Success

Save the integration and you are successfully set up. Now, return to your templates, select an **SMS** template, and you'll notice your Default From Number is populated with your Twilio telephone number.

### Publish & Deploy

Once you have your **SMS** template created, you can choose to **Publish** it. Once published, click the **Deploy** tab in Enveloop, copy the cURL command, and execute the command in your local terminal.&#x20;

Remember: The default cURL command in Enveloop uses a test/sandbox API key. So, you will see the results in the Enveloop **Message Log**, under _Sandbox_.

If you want to test sending an actual message to a mobile device, go to Settings for your project and copy/paste your Production/Live key into your cURL command. Send your message again and it will arrive at the telephone number in the `to` field momentarily.&#x20;

