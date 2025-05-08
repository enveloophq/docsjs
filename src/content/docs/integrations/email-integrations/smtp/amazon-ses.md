---
title: "Amazon SES"
layout: default
parent: SMTP
---

# Amazon SES

Amazon SES is a cloud-based email service provider that enables you to send and receive emails using your own email addresses and domains.

You can more about Amazon SES SMTP support in their docs:

[https://docs.aws.amazon.com/ses/latest/dg/send-email-smtp.html](https://docs.aws.amazon.com/ses/latest/dg/send-email-smtp.html)

## Step 1: Setup Amazon SES SMTP Credentials

Go to the SMTP settings page under your **Amazon SES**

****![](<doc-images/amazon-ses-smtp-settings>)****

**Here you will see a button allwing you to setup credentials for SMTP**

****![](doc-images/image (4).png>)****

Follow the instructions and be sure to copy the assigned **Username** and **Password** as you will need these in the next steps and they will not be shown again

## **Step 2: Configure your SMTP Provider**

You will need the **Username** and **Password** from Step 1 as well as the **SMTP endpoint** found on the **SMTP settings** page (ex: `email-smtp.us-east-1.amazonaws.com`)

Follow the [steps on the SMTP setup](./#adding-smtp-to-enveloop) to configure the provider in Enveloop using the following settings:

* Host: **\<SMTP endpoint>**
* User: **\<Username from step 1>**
* Pass: **\<Password from Step 1>**

## Step 3: Add your "Default From"

Your Default From Email is a global setting that defines the email address and identity that will deliver the message by default. Once complete, click **Save Integration**.
