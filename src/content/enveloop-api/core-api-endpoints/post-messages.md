---
title: POST messages
layout: default
parent: API Endpoints
---


# POST /messages

## Params

### template (required)

The `template` field is required and should be the template slug you wish to send.

### to (required)

The `to` field is required to send a message. It should be a single recipient.

### from (optional)

The `from` field is optional on the API call as long as it is set on either the **Template** or the **Provider**.&#x20;

The order of precedence for the from field on a message is:

1. `from` attribute in the API call
2. If not set in API call it will look in **Template** defaults
3. If not set in **Template** it will look in **Provider** defaults
4. If not set in 1-3 it will return an error and fail to send **Message**

### subject (optional)

The `subject` field is optional on the API call as long as it is set in the **Template** defaults.

### templateVariables (optional)

The `templateVariables` field accepts a hash/object of key/value pairs, and an optional `theme` object, to replace variables in the template.

For example if you have the text `Hello {{{user}}}` in your template and pass `{ user: "Bob" }` as `templateVariables` then the template will render `Hello Bob`.

In addition to passing dynamic text for a template variable, you can also pass a `theme` hash/object, within `templateVariables`, to provide theme colors dynamically.&#x20;

### theme (optional)

The theme field, when used inside `templateVariables`, accepts a hash/object of variables that allow you to pass hexadecimal color values to pre-defined theme variables for your template.&#x20;

For example: If you have a template theme that has a theme variable called `headerBackgroundColor` and is set to `#FF0000` as a default, you can optionally pass a different value on send, allowing you to real-time send custom themed messages.

Here is how the call would look:

```
curl -X POST \
-H "Content-Type: application/json" \
-H "Authorization: token test_7NoodQpiPzkUAABN2u0rlBYUbXLYpsTB" \
-d '{
      "to": "john.doe@dev.com",
      "template": "confirm-account",
      "templateVariables": {
        "user": "Bob",
        "theme": {
          "headerBackgroundColor": "#FFA500"
        }
      }
    }' \
"http://localhost:4000/messages"
```

If you chose to pass no theme values in the call, the message would be sent with the default red color set in the template theme.

## Response

### to

The recipient of the message

### from

The from address of the message sent

### body

A preview of the body of the message delivered to the recipient

### message\_id

A unique identifier, for the message sent, issued from the provider.

### error

If an error is present you will get a **http status** of **500** and the error field will contain the error

## Example

### Request

```shell
curl -X POST \
-H "Content-Type: application/json" \
-H "Authorization: token test_eYLQRrzxLcLAlmb2H5BXIFSUor3h/tRr" \
-d '{
      "template": "user-welcome",
      "to": "bob@test.com",
      "from": "Northwind App <app@northwind.com>",
      "subject": "Welcome to Northwind",
      "templateVariables": {
        "name": "Bob Vance"
      }
    }' \
"https://api.enveloop.com/messages"
```

### Response

```json
{
    "to": "bob@test.com",
    "from": "Northwind App <app@northwind.com>",
    "body": "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 3.2//EN\"><html ... </html>"
}
```
