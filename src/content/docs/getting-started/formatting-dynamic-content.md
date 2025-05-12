---
title: "Formatting / Dynamic Content"
description: How to format text and use variables to display dynamic content
---

There are various useful styling options available for Enveloop templates, sections and elements. Along with this, you'll want to have control over the basic formatting and use of text in your messages.

### Using Markdown

So, while a "text" element can have color, padding, and alignment, you still want to describe your text for bold, italic, bullets (ordered / unordered lists), headings, etc. This is accomplished using **Markdown**.&#x20;

The "Content" field for a text element allows you to inject markdown.

![Using Markdown](/docs-images/enveloop-using-markdown.png)

Use Markdown to accurately describe text. It's better than fighting with endless WYSIWYG editors that never format it quite right.


As you add markdown to your text, the viewer on the left will live-update to show you the formatting effects.

If you are not familiar with Markdown as a tool, we've included [additional resources for Markdown](../product-guides/markdown-for-formatting.html) in our docs so you can learn more. It's simple, and a bit fun, too. 

### Dynamic Content

In addition to formatting your message content, providing dynamic or custom/personalized info to your users, from your app, is vital. Enveloop makes this super-easy.

Using **Mustache**, you can inject variables into your content with the use of curly-brackets. As you add in new variables to your content, Enveloop will automatically begin tracking them, providing you ways to test, updated code snippets, etc. This will be discussed in more detail in later sections.

![Using Mustache](/docs-images/enveloop-using-mustache-for-dynamic-content.png)

In the builder mode, variables will be displayed as variables. However, you can move to the "Test" mode and, after providing some inputs, can see what live data will look like in the message.

If you are not familiar with Mustache syntax, we've included a [guide as well as additional examples](../../product-guides/mustache-for-dynamic-content) in our docs.
