---
title: "Mustache for Dynamic Content"
layout: default
parent: Product Guides
description: Use Mustache to inject dynamic content into your Enveloop messages.
---

# Mustache for Dynamic Content

Enveloop supports [Mustache](https://mustache.github.io/) in our messaging platform -- you will use this whenever you use variables or dynamic content in your messages. Also, this is a good way to inject some basic logic. Below are a few examples:

### Using Mustache to Display Variables in Messages

Here's a simple message that notifies a user about updated contact information.

```markup
Hey Betty, we've updated your email address to: betty@sentwithenveloop.com.
Thank you!
```

Here is the same message, but updated to include variables using Mustache. These variables can be received via an API call and tested inside the Enveloop app.

```markup
Hey {{customer_first_name}}, we've updated your email address to: {{customer_email_address}}.
Thank you!
```

When you add these to your message, Enveloop auto-detects the variables and provides input areas for testing content in the **Test** view of the message.

### Conditional Content in Mustache

**When a variable exists ...**

Sometimes it makes sense to have multiple templates in Enveloop. However, if you have a couple of conditional changes, using Mustache, you can block out content in a single template, and the content will only be displayed if a variable _<mark style="background-color:yellow;">exists</mark>_.

In the below example, a user receives an invite to a project. If the user doesn't have an account already, we want to provide some additional instructional text. If our variable `new_user` exists or is `true`, then the content in the block will be displayed in the email.&#x20;

<pre class="language-mustache" data-overflow="wrap" data-line-numbers><code class="lang-mustache"><strong>
</strong><strong>**{{user}}** has invited you to collaborate on a project!. 🥳
</strong>
{{ #new_user }}  
Looks like this is your first project ... so welcome to Enveloop! Below are a couple of links to get started and to reach out to support. We look forward to working with you! 
{{ /new_user }}

</code></pre>

Note: If the `new_user` variable _does not exist_ or is `false`, the content will not be displayed.

**When a variable does not exist ...**

You can provide content conditional on a variable **not** existing as well. You'll need to change the prefix symbol on the variable. Instead of using a `#` (pound/octothorp), you will use a `^` (caret), and the text within the block will be displayed, assuming the variable has not been provided in your API call.

You'll still terminate the tag using the same backslash.

```mustache
{{ ^new_user }}
Whoa, youv'e been added to a lot of projects. You're quite the rockstar in the community. Well done!  
{{ /new_user }}
```

### Iterating in Mustache

In Enveloop, you can send a JSON object via a variable in an API call.

You can use a Mustache **Section** to render the object(s), **Sections** render blocks of text one or more times, depending on the value of the key in the current context.

A section begins with a pound and ends with a slash. That is, `{{#person}}` begins a "person" section while `{{/person}}` ends it.

#### Template

```mustache
{{#person}}
    {{name}} is {{age}} years old
{{/person}}
```

#### Data

```json
{
    person: {
        name: "John Doe",
        age: 45
    }
}
```

#### Output

```
John Doe is 45 years old
```

Also, you can use a single dot/period to output an object.

In this example, we want to create an unordered list of tags. If there are no tags present, we want to skip the list and simply say "No tags assigned yet."

#### Template

```mustache
{{ #tags }}
  * {{ . }}
{{ /tags }}
{{ ^tags }}
  No tags assigned yet.
{{ /tags }}
```

#### Data

```json
{
    page: "Mustache Info",
    tags: [
        "Template",
        "Simple",
        "Logicless"
    ]
}
```

#### Output

```
* Template
* Simple
* Logicless
```

This also works with nested sections like with a more complex example of an invoice item:

#### Template

```mustache
{{ #invoiceItems }}
- {{ itemNumber }}
  {{ #paid }}
    Paid
  {{ /paid }}
  {{ #product }}
    {{ name }}
  {{ /product }}
{{ /invoiceItems }}
```

#### Data

```json
{
    invoiceItems: [
        {
            itemNumber: '001',
            paid: true,
            product: {
                name: "Photobook",
                info: "34 pages"
            }
        },
        {
            itemNumber: '002',
            paid: false,
            product: {
                name: "Photo Session",
                info: "2 hour"
            }
        }
    ]
}
```

#### Output

```
- 001
    Paid
    Photobook
- 002
    Photoshoot
```

### Tips

* It's important to note that the object passed with the API call to Enveloop must be in a valid JSON format.
* You can iterate over an array of objects in Mustache as well, using the `{{#.}}` notation.

### Additional References

Looking to do more with Mustache? Awesome. Here's a [manual for Mustache features](https://mustache.github.io/mustache.5.html). It outlines additional functionality you can use. We'd love to hear more about how you are using this!
