---
title: Template engines
---

# Template engines

By default, Fractal uses **Handlebars** to render [view templates](../core-concepts/view-templates.html) for both components and documentation pages.
It's bundled with a number of built-in Fractal helpers, but you can also customise it to include your own custom helpers and/or partials if required.

However, it's easy to use an alternate template engine (via the use of _adapters_) if you need a more bespoke solution for your project.

## Customising Handlebars

See the [view templates documentation](../core-concepts/view-templates.html#using-handlebars) for details on how to customise the default Handlebars install to include your own helpers or partials.


## Loading template engines

Template engines for components and documentation pages are loaded separately, using the `fractal.components.engine()` and `fractal.docs.engine()` methods respectively.

If you don't need to customise the template engine adapter, you can just pass its package name into the `.engine()` method directly:

```js
fractal.components.engine('@frctl/nunjucks'); // use Nunjucks for components
fractal.docs.engine('@frctl/mustache'); // use Mustache for docs
```

You will also likely want to change the file extension for the view template using the `ext` configuration option:

```js
fractal.components.set('ext', '.nunj');
fractal.docs.set('ext', '.html');
```

::: warning
You must **install your chosen template adapter** package via `npm install` before you can use it with Fractal.
:::

### Customising adapters

If you wish to first customise the behaviour of the adapter (for instance to add helper methods or suchlike), the `.engine()` method will also accept a configured template engine adapter instance.

The following is an example using the Fractal [Nunjucks adapter](https://github.com/frctl/nunjucks):

```js
const nunjucks = require('@frctl/nunjucks')({
    filters: {
        shorten: function(str, count) {
            return str.slice(0, count || 5); // bespoke 'shorten' filter to use in view templates
        }
    }
    // ...other config properties here
});

fractal.components.engine(nunjucks); // use the configured Nunjucks instance for components
fractal.components.set('ext', '.nunj'); // look for files with a .nunj file extension
```

::: warning
Configuration details can vary between adapters, so you should refer to your chosen adapter's documentation for full configuration and setup details.
:::

## Available adapters

Currently there are specific 'official' adapters implemented for Handlebars, [Mustache](https://github.com/frctl/mustache) and [Nunjucks](https://github.com/frctl/nunjucks). However, if you want to use something else, there is also a [generic adapter](https://github.com/frctl/consolidate) that uses the Consolidate.js library to provide compatibility with 30+ other template engines.

For full information on installing, using and customising individual template engine adapters, see the appropriate READMEs:

* Handlebars adapter - see the [view templates](../core-concepts/view-templates.html) documentation
* [Mustache adapter](https://github.com/frctl/mustache)
* [Nunjucks adapter](https://github.com/frctl/nunjucks)
* [Generic/consolidate adapter](https://github.com/frctl/consolidate)
