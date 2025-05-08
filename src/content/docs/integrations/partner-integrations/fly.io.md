---
title: "Fly.io"
layout: default
parent: Partner Integrations
icon: balloon
description: Learn how to create and integrate Enveloop messaging for Fly apps.
---

# Fly.io

Enveloop integrates with [Fly.io](https://fly.io) -- combining the power of launching and managing apps on Fly with the ease of designing and sending email and text messages with Enveloop!

#### About Enveloop

[Enveloop](https://enveloop.com) makes it easy for developers and non-developers to create, design, and send transactional email and SMS messages with a simple API call. [Creating an Enveloop account](https://app.enveloop.com/auth/new) is free and only takes a few moments.

#### About Fly.io

[Fly](https://fly.io) is a powerful, developer-focused public cloud. Combined, you can rapidly create and deploy an application that effectively communicates to your users. Try Fly.io for free -- it's a powerful cloud service for running your apps!

Ok, let's dive in!

***

This article assumes that you are _somewhat_ familiar with Fly and the Fly CLI -- if you need help launching apps, they have a fantastic [Getting Started Guide](https://fly.io/docs/getting-started/launch/).

### Creating an Enveloop Project via the Fly CLI

While you can separately have an Enveloop account and make calls to the Enveloop API via apps you run on top of Fly.io, the focus of this doc is integrating both services via Fly.io.

Creating an Enveloop project happens via the [Fly.io CLI](https://fly.io/docs/hands-on/install-flyctl/). Once the Fly.io CLI is installed, sign up for a Fly.io account and create your first Fly app. From there, you can add an Enveloop project to your app.

You don't need an Enveloop account before adding Enveloop to your Fly app. As you issue the following commands, Enveloop will automatically set up your account.&#x20;

To create an Enveloop project for your Fly app, in your terminal, scoped to your Fly app, use the following command:

```
> flyctl ext enveloop create
```

Fly will respond and ask for some additional information. Most of it is defaulted.

```
? Select Organization: moon (moon)
? Choose a name, use the default, or leave blank to generate one:
```

Once you confirm the information Fly needs, you should see a confirmation that your project, auto-named, is ready to be used. Boom.

```
Your Enveloop project (quiet-butterfly-6638) is ready. See details and next steps with:

Setting the following secrets on quiet-butterfly-6638:
ENVELOOP_LIVE_API_KEY: live_**********
ENVELOOP_SANDBOX_API_KEY: test_**********
```

### Fly Secrets and the Enveloop API

Fly Secrets acts as a vault for your credentials.

When you provision Enveloop for your Fly application, Enveloop will issue API keys to Fly and Fly will store those keys for you in [Fly Secrets](https://fly.io/docs/apps/secrets/). When you send your first message on Enveloop, via your Fly app, you can reference your keys using the vault provided via Fly Secrets.

So, as you can see in the code example above, `ENVELOOP_LIVE_API_KEY` and `ENVELOOP_SANDBOX_API_KEY` are accessible to your Fly app, and can be safely used when making programmatic API calls to Enveloop to send messages.

### Accessing the Enveloop Console

Enveloop provides a visual display of your message templates, a template builder, and message/API logging and monitoring. To access these features, use the dashboard command to launch the Enveloop web app:

From the Fly.io CLI, you can issue the following command:

```
> flyctl ext enveloop dashboard quiet-butterfly-6638
```

In this example, the project name is `quiet-butterfly-6638`. Once you open the Enveloop console, you can create and design message templates as well as configure your sending settings.

### List your Projects / View Project Status

In Fly.io, via the Fly CLI, you can quickly get a list of your Enveloop projects.

```atom
> flyctl ext enveloop list

NAME ORG PRIMARY REGION
quiet-butterfly-6638 moon
```

```
> flyctl ext enveloop status quiet-butterfly-6638

Status
  Name   = quiet-butterfly-6638
  Status = created
  Region = 
```

### Deleting an Enveloop Project

Please note: Deleting is forever. This will remove all message settings, templates, and message logs for the Enveloop project you created. Before you do this, Enveloop does provide a way to back up all your templates.

```
> fly ext enveloop destroy quiet-butterfly-6638

Destroying an Enveloop project is not reversible.

? Destroy Enveloop project named quiet-butterfly-6638? Yes
Your Enveloop project quiet-butterfly-6638 was destroyed
```

### Use Enveloop with your Language and Framework <a href="#use-enveloop-with-your-language-and-framework" id="use-enveloop-with-your-language-and-framework"></a>

Now that you know how to add an Enveloop integration via Fly, here are some useful examples for how to use Enveloop with various languages and frameworks that you may be running via Fly.io.

* [Rails with ActionMailer](https://docs.enveloop.com/enveloop-api/languages-and-frameworks/ruby-on-rails)
* [Ruby](https://github.com/enveloophq/enveloop-ruby)
* [Node.js](https://github.com/enveloophq/enveloop-js)
* [Python](https://github.com/enveloophq/enveloop-py)

### Pricing

Enveloop charges on a per-message basis. You can find the latest pricing information for Enveloop and Fly located here: [https://fly.io/docs/reference/enveloop/](https://fly.io/docs/reference/enveloop/). Enveloop usage fees are billed daily and will show up, throughout the month, on your Fly.io invoice.\
