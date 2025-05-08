---
title: "Monitoring"
layout: default
parent: Product Guides
---

# Monitoring

To use Enveloop Monitoring, you need to have [set up a Sending Domain](../getting-started/adding-a-sending-domain.html) with us. It only takes a moment and we step you through everything!

Email deliverability, as a concept, is easy. Real people want to send messages in a way that is trusted. A person receiving an email only wants to get messages from real senders. It's that simple.&#x20;

Granted, making that happen is, unfortunately, full of tough technical hurdles. Plus, when mail servers are managed in various ways, expected delivery outcomes, even when you are following all the rules, can vary and not match your expectations.

For that reason, at Enveloop, we see deliverability as two main focuses:

* Proper Domain Settings (SPF, DKIM, DMARC)
* Effective Monitoring

## Settings

When creating and setting up your Enveloop account, we do everything possible to ensure that you have settings optimized for delivery. For more information about this, please visit [**Sending Domains**](../getting-started/adding-a-sending-domain.html) for more detail!

## Monitoring

Even when you take all the correct steps, mail servers can act in ways that don't match expectations. Therefore, it's good practice to maintain active monitoring of your configuration as well as responses you are getting from mail servers.

Enveloop provides this monitoring as part of your account, allowing you to be alerted to changes and take action if deliverability rates trend down for any reason.

To use Enveloop Monitoring, go to the **Monitoring** section, located in the left-side navigation.

![Monitoring Step 1](/docs-images/monitoring.png)

Some areas to point out:

#### Date Range

You have the option to adjust the date range of the reports mail servers have issued about your domain. You can choose from simple selections, such as weeks, or provide a custom date. This is helpful when understanding trends.

#### Summaries

For a given date, view high-level numbers for DMARC reports  you have received from participating mail servers. This saves tons of time where you'd normally be digging through difficult-to-understand XML documents.

#### Submitter Detail

You can view, in detail, a DMARC response received for your domain and the mail server that issued it. Enveloop Monitoring provides a quick view for DMARC and DKIM compliance -- plus, for each report received, you can click the report to view a visual breakdown _(including source IP and source domain)_.

![Monitoring Step 2](/docs-images/monitoring-02.png)

***

### Seeing Issues?

When setting up a sending domain, Enveloop helps you by providing you and stepping you through the process of adding proper records for your domain. Once set up, your sending domains are in great shape and optimized for transactional sending.

That said, mail servers may still issue odd reports. If they do, [let us know](mailto:hey@enveloop.com) and we can help with your investigation.

