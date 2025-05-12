---
title: "Webhooks"
layout: default
parent: Product Guides
description: Enveloop webhooks allow you to send data, from Enveloop, to your app when a messaging event occurs.
icon: puzzle-piece-simple
---

# Webhooks

When Enveloop sends a message on your behalf, it can trigger various events. Sometimes, developers want to use these message event moments to capture data in their apps (or in a third-party tool). A simple example would be alerting, or basic analytics.&#x20;

#### **What is a webhook?**

A webhook is a lightweight, automated message that sends data between applications in real time when a specific event occurs. Webhooks are triggered by events and send an **HTTP request to another system**, and often include a payload of data.

### Using Webhooks in Enveloop

You can use webhooks to notify your application when certain events happen when messages are sent from Enveloop, and _to_ _messages_ sent from Enveloop. Some examples of this include:

* A message being **delivered**
* A message being **opened**
* A message **failing** to send

When events like this happen, Enveloop will send a JSON payload to the URL(s) that you provide, including detailed message information. We'll walk you through a brief description of how to set up a webhook.

### Setting up Webhooks in Enveloop

Webhooks are located on the _Project_ level in Enveloop -- this means that you can segment out events across multiple projects within a single team. Think of a project in Enveloop as a 1:1 map to your application. One application -- one Enveloop project.

Click **Settings** in your Enveloop project navigation. In the General tab, you'll see an area labeled **Webhooks**. From here, you can create the webhooks that you need, expanding as your needs expand.

![Webhooks Table](/images/Pasted%20image%2020241001150852.png)

*Webhooks are available, per project, in Enveloop. You can find them in the Project Settings.*

Click the **Add Webhook** button and you will be presented with a dialog allowing you to specify the following:

* The HTTP web address Enveloop should call when the event happens.
* The event you want to monitor.
* If you want the content of the message included in the JSON payload sent to the address.

After providing these settings, save the webhook and you are now ready to use the webhook when the defined event occurs.

![Create Webhook Dialog](/images/Screenshot%202024-10-01%20at%203.08.50%20PM.png)

*You can create an Enveloop webhook by including a URL and the event you want to monitor.*

It's a simple process that can add real value to your data collection and event monitoring efforts.&#x20;

### Additional Options

If you do not currently have functionality to support Enveloop calling into your app when an event happens, there are other ways you can capture events -- using third party API tools. For example, you may use Zapier, IFTTT, or Make.

In future documentation, we'll include some basic steps that show how to integrate these tools with message events in Enveloop!
