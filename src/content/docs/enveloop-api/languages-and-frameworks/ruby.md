---
title: Ruby
layout: default
parent: Languages and Frameworks
---

# 🏮 Ruby

Enveloop provides the [Enveloop Ruby](https://github.com/enveloophq/enveloop-ruby) wrapper for our Enveloop API. It simplifies configuring and sending messages (email & SMS/text) via Enveloop inside your Ruby apps.

## Installing the Enveloop Ruby Gem

There are a couple of ways to get started. Using [RubyGems](https://rubygems.org/), you can install it locally with the following command:

```console
$ gem install enveloop
```

Additionally, you can add the following to your application's Gemfile:

```ruby
gem 'enveloop'
```

After doing so, you can run the following terminal command:

```console
$ bundle install
```

## Using the Enveloop Gem

The Enveloop Gem includes helpful methods to interact with the Enveloop API, including:

* `send_message`
* `template_info`

We'll talk about how to use some of these methods in the notes to follow.

### Setting up a Connection

First, let's set up a connection. You'll need to require the `enveloop` gem, define a client, and add in your Enveloop API token. Your API token is located in the **Settings** for each project you have on [Enveloop](https://app.enveloop.com).

```ruby
require 'enveloop'

enveloop = Enveloop::Client.new(api_key:`ENVELOOP_API_TOKEN')
```

Now that your connection is established, let's use a method to send a message.

_(Note: This method call assumes that you have created a basic template in Enveloop and provides an example of a template variable you may use. Please alter according to how you have set up your template.)_

### Send an email message using an Enveloop Template

```ruby
enveloop.send_message(
  template: 'welcome-email',
  to: 'user@email.com',
  from: 'welcome@myapp.com',
  subject: 'Welcome to My App!',
  template_variables: {
    first_name: 'John',
  }
)
```

### Send an email message using custom HTML

If you want to send a message, via Enveloop, and not use an Enveloop template, you can remove the `template` argument from the method and include the `html` argument instead _(it takes a custom HTML body and creates a structured email message to send out)_.

```ruby
enveloop.send_message(
  html: '<h1>Hello John, Welcome to MyApp</h1>',
  to: 'user@email.com',
  from: 'welcome@myapp.com',
  subject: 'Welcome to MyApp',
)
```

### Send a text/SMS message using an Enveloop Template

Along with email messages, you can also send text/SMS messages via Enveloop. In this example, the `registration-complete` template is an SMS template. Therefore, Enveloop can accept mobile numbers for to/from.&#x20;

```ruby
enveloop.send_message(
   template: 'registration-complete',
   to: '+14155551212',
   from: '+12056113369',
   template_variables: {
      first_name: 'Paul'
   }
)
```

### Get information about an Enveloop template (variables, body HTML)

```ruby
enveloop.template_info(template: 'welcome-email')
```

## Contributing

Bug reports and pull requests are welcome on GitHub at [https://github.com/enveloophq/enveloop-ruby](https://github.com/enveloophq/enveloop-ruby). Additional information, including license, development procedures, and Code of Conduct are available in the source repository documentation.
