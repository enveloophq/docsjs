---
title: Get Templates Slug
layout: default
parent: API Endpoints
---


# Get Templates Slug

## Params

### slug (required)

Each template has a unique `slug` and this is required in the URL. This can be found, for a template, by viewing the template in Enveloop and selecting the **Deploy** tab for the template. The slug will be located in the the right-side drawer.

![](/doc-images/image.png)

## Response

### templateVariables

An array of the user defined variables found in the template

### body

A preview of the body of the message with `{{ variables }}` intact like you would see at in the Enveloop editor.

### error

If an error is present you will get a **http status** of **500** and the error field will contain the error

## Example

### Request

```shell
curl -X GET \
-H "Content-Type: application/json" \
-H "Authorization: token test_eYLQRrzxLcLAlmb2H5BXIFSUor3h/tRr" \
"https://api.enveloop.com/templates/customer-invoice"
```

### Response

```json
{
    "templateVariables": [
        "invoiceAmount",
        "invoiceNumber"
    ],
    "body": "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 3.2//EN\"><html ... </html>"
}
```

