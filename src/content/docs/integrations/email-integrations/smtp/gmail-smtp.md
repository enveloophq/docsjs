---
title: "Gmail SMTP"
description: "Set up Enveloop to use Gmail SMTP to send messages."
---

**Please note:** Your normal Gmail password will not work when setting up Gmail SMTP. Google requires you to set up an "App" password.

Google will be sunsetting App Passwords in September 2024. **Enveloop will be launching full OAuth support for Gmail SMTP soon.**

#### Step 1: Create an "App Password" in your Google Account.

You will not be able to login with your normal Gmail password. For security reasons you will need to setup an **App password** used to authenticate Enveloop to Google. Here's how to do this:

1. Log in to your Gmail account.
2. On the top-right, click on your Profile Icon and click the [**Manage your Google Account**](https://myaccount.google.com/) button.
3. Click **Security** from the left navigation.
4. In the "How you Sign In to Google" area, click **Two-Step Verification**.
5. Scroll down to the App Passwords area and click **App Passwords**.
6. Type in "Enveloop" for the App Name and click the **Create** button.

From here, Google will present you with a 16-digit password it created for you. You need to save this password in a safe place. We'll use it in an upcoming step.

#### Step 2: Add the Gmail SMTP Integration to your Enveloop Project

Assuming your are logged into Enveloop, use the following steps to configure Gmail SMTP.

1. Select your team from the left-side navigation.
2. Under the project you want to configure, click the **Settings** link.
3. In the tabs at top, click the Integrations tab.
4. In Third-Party Email Provider, click the **Setup** button for SMTP.

#### Step 3: Configure your SMTP Provider

Use the following settings to successfully configure your Gmail SMTP provider.

* Host: `smtp.gmail.com`
* User: `<youremail>@gmail.com`
* Pass: _Use the App Password you created in Step 1._
* Port: `587`
* Default From Email: `<youremail>@gmail.com`
* Click the **Save Integration** button.

When using Gmail SMTP you can only send email from the signed in user. Google will ignore the `from` field if you pass anything different.

#### Step 4: Test it out!

Ok, all settings should now be good. Nice work! Now, let's return to an email template and try it out.&#x20;

1. Click **Templates** for the project you added SMTP settings to and select a template.
2. Click the **Deploy** tab in the top navigation.
3. In the settings on the right, choose your **Production** key. _(This will add your production key into the available code snippets.)_
4. For simplicity, copy the **cURL command**, paste into a terminal, then go check the email address you sent the message to.

Hopefully, success! If not, let us know at: support@enveloop.com. Happy to help!
