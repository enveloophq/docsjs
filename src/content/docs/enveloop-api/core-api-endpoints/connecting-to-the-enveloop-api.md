---
title: Connecting to the Enveloop API
layout: default
parent: API Endpoints
---

# Connecting to the Enveloop API

## Connecting

You can connect directly over HTTPS or by using one of the provided [SDKs](../languages-and-frameworks/)

## Connecting via HTTPS

### Endpoint

You can send messages directly over HTTPS by sending a request to any of the [Api Endpoints](./):\
_(ex: **POST**`https://api.enveloop.com/messages`)_

### Authentication

You will need to pass your **Api Token** as an **Authorization** header prefixed with `token`.\
`Authorization: token <API Token>`

### cURL example

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

The above cURL example uses a **Sandbox** **token**. Sandbox tokens, used with cURL commands in Enveloop, are an easy way to test your message structure and style. You can view Sandbox messages in the Message Log area of the project.

### JS fetch example

```javascript
data = {
  to: "bob@test.com",
  from: "Northwind App <app@northwind.com>",
  subject: "Welcome to Northwind",
  template: "user-welcome",
  templateVariables: {
    name: "Bob Vance"
  }
}

fetch("https://api.enveloop.com/messages", {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    "Content-Type": "application/json",
    "Authorization": "token test_eYLQRrzxLcLAlmb2H5BXIFSUor3h/tRr",
  },
})
.then(response => response.json()) 
.then(json => console.log(json))
.catch(err => console.log(err))
```
