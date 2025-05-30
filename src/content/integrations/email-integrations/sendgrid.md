---
title: "SendGrid"
description: Set up Enveloop to use SendGrid as a backend message platform.
---

We assume you have a SendGrid account. If you don't, you'll need to set one up first. We also assume you have an Enveloop account set up and that you are logged in. :smile:

#### Configuring SendGrid

After logging into your SendGrid account, navigate to: **Settings > API Keys**

##### Step 1: Create a SendGrid API key for Enveloop

Click the button for **Create API Key** and provide a name (Ex: `Enveloop`). Choose **Restricted Access**. From there, click **Create & View**.

##### Step 2: Define your API key permissions

Under **Access Details**, find the **Mail Send** setting and expand it. For the **Mail Send** option, choose **Full Access**. The UI is a bit funky, but click the circle, so that the blue bar goes all the way across.

##### Step 3: Save and copy SendGrid key value

Click the **Save** button. SendGrid will present you with an API key. You will need to copy and save the key or immediately paste it into Enveloop (we'll show you how to do that below). Once you have completed that, you can click **Done**.

For security, the full API key is only presented once. If you forget the key or don't paste it properly into Enveloop, delete the key and start the above process again.

#### Adding your SendGrid key to Enveloop

Now that you have an API key, adding it to Enveloop is a quick process.

##### Step 1: Inside Enveloop, open the team & project you want to use

Each project (which represents one of your apps) can have its own message settings. So, choose a **Project** and in the menu, choose **Integrations** from the options on the left.

##### Step 2: Add your SendGrid API key to your project

Click **Configure** and on the **Service** dropdown, select **SendGrid** from the dropdown menu. Paste into **API Key** the key you just generated from SendGrid.

##### Step 3: Add your "Default From"

Your Default From Email is a global setting that defines the email address and identity that will deliver the message by default. Once complete, click **Save Integration**.

The "Default From" is only a default setting. Each message template in your project can have a custom-set **from** value. If you do not specify it on the template, it will use the value you define on the integration.

#### 🎉  Success

You should be good to go!



