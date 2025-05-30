---
title: Ruby on Rails
layout: default
parent: Languages and Frameworks
---

# 🏮 Ruby on Rails

Enveloop provides the [Enveloop Ruby](https://github.com/enveloophq/enveloop-ruby) wrapper for our Enveloop API. It simplifies configuring and sending messages (email & SMS/text) via Enveloop inside your Ruby on Rails apps.

Provided are some quick docs for setting up Enveloop inside your Ruby on Rails app and interacting with the Enveloop Ruby gem.

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

## Configuring Enveloop in your Rails app

This documentation assumes that you have a mostly standard Rails app up and running. Obviously, there are variations to the mailer types you can use -- and we cover some of this, including [Devise](https://blog.enveloop.com/send-better-emails-with-enveloop-and-devise/), on the Enveloop Blog.&#x20;

### Update your Initializer

Add/update the following lines in your respective Rails environments file.

```ruby
# remember to never include production keys in files you check into repos.

ENV['ENVELOOP_API_KEY'] = 'ENVELOOP_API_KEY'

config.action_mailer.delivery_method = :enveloop

config.action_mailer.enveloop_settings = { 
  api_key: ENV['ENVELOOP_API_TOKEN']
}
```

### Create an Enveloop Mailer

From your command line, use a Rails generator to create a new Enveloop Mailer.

```console
$ rails generate mailer EnveloopMailer
```

### Modify your Enveloop Mailer to set up a Connection

Now that the mailer is created, you can modify it and add in a custom method, based on your application, to call the `send_message` method in the Enveloop API.

```ruby
class EnveloopMailer < ActionMailer::Base

   include Rails.application.routes.url_helpers 

   def new_comment_email(recipient, comment)
      enveloop.send_message(
         template: 'new-comment',
         to: recipient,
         from: 'hello@myapp.com',
         subject: subject,
         template_variables:{
            account_url: 'https://myapp.com',
            user_comment: comment
         }
      )
   end

   private

   def enveloop
      @enveloop ||= Enveloop::Client.new(api_key: ENV['ENVELOOP_API_KEY']) 
   end

end
```

### Send a Message from your Rails app

Now, all that is left is to make a call to send a message, via Enveloop, whenever you need it.

```ruby
EnveloopMailer.new_comment_email(
    @comment.user_email_address, 
    @comment.body
).deliver_now
```

## Additional Information

You can find additional information for other methods, sending text/SMS messages, and more by viewing the [Enveloop Language page for Ruby](ruby.md).

## Contributing

Bug reports and pull requests are welcome on GitHub at [https://github.com/enveloophq/enveloop-ruby](https://github.com/enveloophq/enveloop-ruby). Additional information, including license, development procedures, and Code of Conduct are available in the source repository documentation.
