---
title: "TextGrid"
layout: default
parent: SMS Integrations
---

# TextGrid

## Set up TextGrid Account

If you do not have a TextGrid account yet, it only takes a couple of minutes to get going. Visit [https://textgrid.com](https://textgrid.com) and follow the steps to create an account.

Already have an account? Sweet. Continue on!

## Create a Phone Number

Already have a TextGrid phone number you want to use? You can skip this part.

Once you are logged into your TextGrid account, you'll need to add a phone number.&#x20;

1. From your **Main Account** dashboard, click **Phone Number**.
2. Select **Buy a Number**.
3. Select the **Area Code**, enter a three digit area code, and search for numbers.
4. Find a phone number you like and click **Buy**. _(Assumes you have added a payment method on TextGrid.)_

The phone number you create will be available in Enveloop once you add your TextGrid authentication settings in the following steps.

## Getting Authentication from TextGrid

Once you have set up a number in TextGrid, return back to your **Account** page and then follow these steps.

1. Choose the TextGrid **Account** you want to use _(normally, this is the main account)_.
2. Locate and make note of your **Account SID** and your **Auth Token**.

## Adding TextGrid Account Settings to Enveloop

Now that you've set everything up in TextGrid to use them as a backend provider for your SMS & MMS messages, configuring the created number to your Enveloop project is easy.&#x20;

Once you log back into your Enveloop account, do the following:

1. Open the **Team** and **Project** you want use with your TextGrid phone number.
2. Select **Settings** from the navigation on the left.
3. Using the tabs at top, select **Integrations**.
4. Click **Setup** for TextGrid.

Once this is pulled up, you can add in the **Account SID** and the **Auth Token** that you accessed from your TextGrid account (in the previous steps).

## Adding Default Number

Now that you have this account information configured, the available **Default From Numbers** will populate in the dropdown. Select the number you want to use when sending messages from this Enveloop project.

## That's It!

Pretty straight-forward. Now that you have your number integrated, you can send text messages, via the Enveloop API, across TextGrid's backend message provider system.

In **Enveloop**, return back to your SMS templates, publish one of your templates, and then select the settings you need from the **Deploy** tab.

