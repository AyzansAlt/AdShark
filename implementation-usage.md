# Implementation / Usage

## Using the code

First, you have to sign up for Google Analytics, then import the CSS to your head:

{% code title="page.html" %}
```markup
<head>
<!-- Your Code Goes Here -->
   <link href="https://adshark--bloxy-cola.repl.co/style.css" rel="stylesheet" type="text/css"/>
</head>

```
{% endcode %}

{% hint style="info" %}
It's used to style the ad so please import it!
{% endhint %}

Once you've done that, Import the JavaScript and the iFrame:

{% code title="page.html" %}
```bash
<body>
<!-- Your Code Goes Here -->

<iframe id="advert" scrolling="no" src="https://adshark--bloxy-cola.repl.co/ads.html">


<footer>
</footer>
</body>
```
{% endcode %}

{% hint style="info" %}
They have to be placed as the last thing on sites without the footer, the footer always comes last! **DO NOT CHANGE ANYTHING IN THE IFRAME!**
{% endhint %}

