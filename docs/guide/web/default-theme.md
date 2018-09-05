---
title: Default theme
---

# Default theme - Mandelbrot

[Mandelbrot](https://github.com/frctl/mandelbrot) is the name of the default web UI theme that ships with Fractal. A standard installation will look something like this:

<picture>
  <source :srcset="$withBase('/screenshot-demo-cl-large.png')" media="(min-width: 900px)">
  <source :srcset="$withBase('/screenshot-demo-cl-medium.png')" media="(min-width: 700px)">
  <source :srcset="$withBase('/screenshot-demo-cl-small.png')" media="(min-width: 500px)">
  <img :src="$withBase('/screenshot-demo-cl-small.png')">
</picture>

## Configuration

Mandelbrot offers some theme-specific configuration options. Configuration properties can be set when initialising a new instance of the theme:

```js
const mandelbrot = require('@frctl/mandelbrot'); // require the Mandelbrot theme module

// create a new instance with custom config options
const myCustomisedTheme = mandelbrot({
    skin: "fuchsia"
    // any other theme configuration values here
});

fractal.web.theme(myCustomisedTheme); // tell Fractal to use the configured theme by default
```

::: tip
You will need to run `npm install --save @frctl/mandelbrot` within your project directory before you can `require()` it in your project settings file.
:::

### skin

Mandelbrot offers a pre-defined set of colour 'skins' that you can apply to the UI for quick and easy customisation.

```js
{
    "skin": "lime"
}
```

* **Choices:** `aqua` | `black` | `blue` | `default` | `fuchsia` | `green` | `grey` | `lime` | `maroon` | `navy` | `olive` | `orange` | `purple` | `red` | `teal` | `white` | `yellow`
* **Default:** `default` (blue)

### format

The format to use when outputting context data.

```js
{
    "format": "yaml"
}
```

* **Choices:** `json` | `yaml`
* **Default:** `json`

### nav

The nav sections that should show up in the sidebar (and in which order):

```js
{
    "nav": ["docs", "components"] // show docs above components in the sidebar
}
```

* **Possible values:** `docs`, `components`
* **Default:** `["components", "docs"]`

### panels

The component info panels that should be displayed in the component browser (and in which order the tabs should be displayed):

```js
{
    "panels": ["html", "view", "context", "resources", "info", "notes"]
}
```

* **Possible values:** `html`, `view`, `context`, `resources`, `info`, `notes`
* **Default:** `["html", "view", "context", "resources", "info", "notes"]`

### styles

The URL of a stylesheet to apply the to the UI. If none is specified then the appropriate Mandelbrot stylesheet for the chosen `skin` value (see above) will be used instead.

```js
{
    "styles": "http://mega-corp.com/css/custom-mandelbrot-stylesheet.css"
}
```

This option can also take an **array** of stylesheets URLs to use. If you do not wish to _replace_ the default stylesheet, but instead want to add an additional stylesheet before or after it, you can use the `default` placeholder value and Mandelbrot will expand that out into the correct URL before use. For example:


```js
{
    "styles": [
        "http://mega-corp.com/css/custom-mandelbrot-stylesheet.css",
        "default",
        "/another/stylesheet.css"
    ]
}
```

In this case the default Mandelbrot stylesheet link will be output between the two other custom styleheets.

::: warning
This option **is not used** for applying styles to your _components_ - for information on how to include component stylesheets see the docs on linking to [static assets](../web#static-assets).
:::

### scripts

URL for the JavaScript file to use in the Mandelbrot UI. If none is specified then the default Mandelbrot JS file will be used instead.

```js
{
    "scripts": "http://mega-corp.com/js/custom-mandelbrot-scripts.js"
}
```

This option can also take an **array** of JavaScript file URLs to use. If you do not wish to _replace_ the default JS, but instead want to add a additional scripts before or after it, you can use the `default` placeholder value and Mandelbrot will expand that out into the correct URL before use. For example:


```js
{
    "scripts": [
        "http://mega-corp.com/js/custom-mandelbrot-scripts.js",
        "default",
        "/another/script.js"
    ]
}
```

In this case the default Mandelbrot script tag link will be output between the two other custom script sources.

::: warning
This option **is not used** for applying JavaScript to your _components_ - for information on how to include component JS files see the docs on linking to [static assets](../web#static-assets).
:::


### lang

Specify the value of the `lang` attribute that is applied to the `html` element.

```js
{
    "lang": "fr" // defaults to 'en'
}
```

### rtl

Switch the theme into RTL mode.

```js
{
    "rtl": true  // defaults to false
}
```

### static.mount

Virtual path prefix for the theme's static assets. The value of this is prepended to the generated theme static asset URLs.

```js
{
    "static": {
        "mount": "no-clash", // Theme asset URLs would now look something like: '/no-clash/path/to/file.js'
    }
}
```

* **Default:** `_theme`

## Template customisation

Mandelbrot (as with all themes) uses [Nunjucks](http://mozilla.github.io/nunjucks/) templates to generate its HTML. The source code for these templates can be seen in the `views` directory of the [Mandelbrot repository](https://github.com/frctl/mandelbrot/tree/master/views).

To override the contents of any of Mandelbrot's templates you can specify a custom `views` directory within your own Fractal project using the `theme.addLoadPath()` method:

```js
const myCustomisedTheme = require('@frctl/mandelbrot')({
    // theme config here
});

// specify a directory to hold the theme override templates
myCustomisedTheme.addLoadPath(__dirname + '/theme-overrides');  

fractal.web.theme(myCustomisedTheme);
```

Any templates within this directory **will be used in preference** to those of the same name within the Mandelbrot `views` directory. This allows you to copy a template from the Mandelbrot repo into your own project and adjust it to your liking. The next time you start up the web UI it will use your custom template instead of the default one.

::: tip
You do not need to copy _all_ of Mandelbrot's templates into your own theme templates directory - you should only create templates to override the specific parts of the UI that you want to adjust.
:::
