---
title: "Themes"
layout: default
parent: Product Guides
---

# Themes

Enveloop Themes allow you to create and mange the usage of colors across the message templates that you host on Enveloop. Themes extend the design capabilities of Enveloop templates in two powerful ways:

* **Centralizing use of colors.** You can now manage all colors on your template from one location and quickly update multiple templates when design adjustments are needed.
* **Dynamic branding from a single template.** When a theme is created, variables are assigned to colors, allowing you to send real-time values, via the Enveloop API, each time you send a message.&#x20;

We'll share additional details on both below.

## Getting Started with Themes

When you open a email template, the themes area is located at the top of the Template Settings panel -- depending on if you have an existing theme or not, you may see colors for a _template_ or colors for a _theme_.

### Creating a New Theme

If you create a blank email template, Enveloop will include basic colors (background, text, etc.) in the template. So, even a _blank_ template is has some basic colors available. Therefore, in Template Settings, you'll notice colors located in your Template colors.&#x20;

<div align="center">

![Theme Example 1](/docs-images/image%20(6).png)

</div>

Select the colors (or the plus-sign icon) and you'll see New Theme, with the colors assigned to variable names. You can add, edit, or remove the existing colors as needed. Select **Create Theme** and you now have a theme assigned to your new email template.

<div align="center">

![Theme Example 2](/docs-images/image%20(7).png)

</div>

Each color in a theme, as you see here, will need to have a name. This serves as an easy method to reference what the color is used for (hyperlinks, text background, etc.), but it can also serve as reference to that color and color usage via the Enveloop API. We'll talk more about that later in this document.

### Adding Theme Colors

Now that your theme is created, you can easily add additional colors by clicking the plus button. It will insert a new row with a color selector and an available name.

![Add/Edit Theme Colors](/docs-images/add-a-theme-color.gif)

*Easily add/edit theme colors by opening the theme.*

To remove a color, choose the trash can icon and click **Save Changes**.

### **Add a Theme to Existing Templates**

If you have _existing_ templates inside Enveloop, we make it easy to get started by _auto-detecting_ all the colors you currently use in a template and attaching them to a theme art board. From here, you can click **Create Theme** and your colors will be added to a theme for the template.

We'll attempt to provide a variable name for each color, based on how it is used in your template. Before creating the theme, you will need to provide each color with a unique name.&#x20;

<div align="center">

![Theme Example 3](/docs-images/image%20(5).png)

*Adding a theme to an existing template? Enveloop will find and list all the colors you are using in your template, making it a one-click effort to create a theme.*

</div>

### Applying Theme Colors

Now that you have a theme for your template, when you set colors for various items in your template (text, sections, images, etc.), template colors will be available in the color picker for the object you are editing.

<div align="center">

![Select/Apply Theme Color](/docs-images/select-apply-theme-color.gif)

*After creating a theme, theme colors are available to you in all the color picker dropdowns.*

</div>

Now that you have a theme color applied, whenever you update your template theme, all the elements that use that theme color will be updated with the new color.

## Color Variables / Dynamic Themes

As you noticed in the previous sections, all the colors in a theme have a name assigned to them. This name, while useful when assigning colors to sections and elements, is also, a variable name that is now accessible when you are using the Enveloop API.

The immediate benefit is that, via these variables and the API, you now have real-time control over the branding of an email template during the sending action. You can pass, for example, logo and color information via the sending API call and use a single template to accomplish a task while matching the look/feel of all your customers.



Additional information about how to use your color variables in an API call is located in the [Enveloop API Docs](../enveloop-api/core-api-endpoints/post-messages.md).

## Additional Capabilities

#### Copy and Paste Themes

Once you have created a theme you like, you can easily implement it across multiple templates. In both the Template Config options and on the actual theme, Enveloop gives you an option to copy the theme.

<div align="center">

![Theme Colors Copy/Paste](/docs-images/Screenshot%202024-10-25%20at%203.29.59%20PM.png)

*You can copy theme colors & names and paste the theme into...*

</div>

Once copied, you can navigate to a different template and a floating button, located in the bottom of your browser window, allows you to click and paste the theme into your new template. After applying the the theme, select the Save Changes button to save the updated theme in your email template.

<div align="center">

![Apply Button for Themes](/docs-images/Screenshot%202024-10-25%20at%203.28.07%20PM.png)

*The Apply button will follow you around, allowing you to paste themes from one template to another template.*

</div>

**Note:** Pasting in a theme in is non-destructive. So, you may have to clear out unneeded color artifacts after applying a theme.

&#x20;
