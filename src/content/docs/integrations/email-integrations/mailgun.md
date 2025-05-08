---
title: "Mailgun"
layout: default
parent: Email Integrations
description: Set up Enveloop to use Mailgun as a backend message platform.
---

# Mailgun

We assume you have a SendGrid account. If you don't, you'll need to set one up first. We also assume you have an Enveloop account set up and that you are logged in. :smile:

## Configuring Mailgun

### Step 1: Create a Mailgun key for Enveloop to use

Once logged into Mailgun, click on your name. It presents a dropdown menu. From the options, select **API Keys**. Mailgun will present your keys.

View & copy your **Private API Key**.&#x20;

**Please note:** For Mailgun, you'll need to add your Account API key and not your sending API key. This is available from your account settings.

## Adding your Mailgun key to Enveloop

Now that you have an API key in your clipboard, adding it to Enveloop is a quick process.

### Step 1: Inside Enveloop, open the team & project you want to use

Each project (which represents one of your apps) can have its own message settings. So, choose a **Project** and in the menu, choose **Integrations** from the options on the left.

### Step 2: Add your Mailgun API key to your project

Click **Configure** and on the **Service** dropdown, select **Mailgun** from the dropdown menu. Paste into **API Key** the key you just generated from SendGrid.

### Step 3: Add your API Domain

This will normally be in the format of `mg.your-domain.com`. If unsure what this is, click on the **Dashboard** in Mailgun and view your **Sending Domains** list at the bottom of the screen.

### Step 4: Add your Region

Mailgun supports multiple geographic regions -- for example, using EU-based servers for GDPR compliance. If you are located in the EU, enter "EU".&#x20;

More information about Mailgun support of the EU region can be found here: [https://www.mailgun.com/blog/product/we-have-a-new-region-in-europe-yall/](https://www.mailgun.com/blog/product/we-have-a-new-region-in-europe-yall/)

### Step 5: Add your "Default From"

Your Default From Email is a global setting that defines the email address and identity that will deliver the message by default. Once complete, click **Save Integration**.

The "Default From" is only a default setting. Each message template in your project can have a custom-set **from** value. If you do not specify it on the template, it will use the value you define on the integration.

### 🎉  Success

You should be all set to use Mailgun with Enveloop!
