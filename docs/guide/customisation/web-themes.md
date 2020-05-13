---
title: Web UI themes
---

# Web UI themes

Themes are used to power the Fractal web UI. They are responsible not only for the visual look and feel of the UI, but also for what URLs are exposed and even what functionality is provided.

 The default theme, [Mandelbrot](../web/default-theme.html), showcases much of Fractal's functionality, and offers a range of customisation options to allow it to be tailored to the needs of individual projects.

## Configuring themes

Themes will often expose a set of theme-specific configuration options, which can be applied when creating a new instance of a theme.

Below is an example of passing custom configuration settings to Mandelbrot:

```js
const mandelbrot = require('@frctl/mandelbrot');

const myCustomisedTheme = mandelbrot({
    skin: "fuchsia",
    panels: ["html", "info", "resources"]
});

fractal.web.theme(myCustomisedTheme);
```

See the Mandelbrot [configuration docs](../web/default-theme.html#customisation) for full details on available options, or the appropriate theme documentation/README for other themes.

::: warning
You will need to `npm install` any theme that you want to customise before you can `require()` it in your project settings file.
:::

## Template customisation

Fractal themes use [Nunjucks](http://mozilla.github.io/nunjucks/) templates to generate their HTML. It is possible to override any templates supplied by a theme by specifying a custom template directory within your own Fractal project, and then including within it adjusted copies of the templates that you would like to override.

Any templates within this directory **will be used in preference** to those of the same name within the theme's template directory.

Specifing a template directory can be done in your project setup file using the `.addLoadPath()` method on the theme instance. For example, using Mandelbrot:

```js
const myCustomisedTheme = require('@frctl/mandelbrot')({
    // theme config here
});

// specify a directory to hold the theme override templates
myCustomisedTheme.addLoadPath(__dirname + '/theme-overrides');

fractal.web.theme(myCustomisedTheme);
```

Custom templates could then be placed into the `/theme-overrides` directory and will be used in preference of any named with the same relative path as those in the Mandelbrot `views` directory.

## Subclassing themes

Often you will make tweaks to a theme that you want to apply to a number of projects. For instance, an agency may want all the component libraries that they build for clients to use the agency's own brand colours, and maybe some tweaks to the UI that they have made.

Repeating these theme customisations for every project is clearly not an optimal solution, so instead it can often make more sense to _subclass_ the theme, make adjustments and then pull in the customised sub-theme as a dependency in other projects.

### An example sub-theme

An example sub-theme folder structure, based on the default Mandelbrot theme with a few some UI tweaks, might look something like this:

```
├── assets
│   └── tweaks.css
├── views
│   └── partials
│       └── header.nunj
├── index.js
└── package.json
```

Some things to note:

* Theme customisation is be done in the `index.js` file, and this file should then `export` the customised theme instance (see example `index.js` file below).
* The `views` directory is where templates used override the default theme templates live. In this case the partial `header.nunj` is being customised.
* The `assets` directory contains static assets for the sub theme that can be linked to from the templates.

```js
// index.js
'use strict';

const mandelbrot = require('@frctl/mandelbrot');

/*
 * Configure the theme
 */
const subTheme = mandelbrot({
    skin: "fuchsia",
    styles: ['default', '/_subtheme/tweaks.css'] // link to the default stylesheet followed by a custom one
});

/*
 * Specify a template directory to override any view templates
 */
subTheme.addLoadPath(__dirname + '/views');

/*
 * Specify the static assets directory that contains the custom stylesheet.
 */
subTheme.addStatic(__dirname + '/assets', '/_subtheme');

/*
 * Export the customised theme instance so it can be used in Fractal projects
 */
module.exports = subTheme;
```

The sub-theme's `package.json` should include the parent theme as a dependency:

```js
// package.json
{
  "name": "my-subtheme",
  "version": "1.0.0",
  "description": "Fractal theme, based on Mandelbrot.",
  "main": "index.js",
  "dependencies": {
    "@frctl/mandelbrot": "^1.0.0"
  }
}

```

### Publishing and using the theme

Once you have created a sub-theme, you can [publish it as an NPM module](https://docs.npmjs.com/getting-started/publishing-npm-packages) or just push it up to a remote Git repository - for example on Github.com.

You can then install the theme in any of your projects by installing it via NPM, using using the `npm install` command:

```
npm install <module-name> --save
```

If you have not published the theme as a module but instead as a (for example) Github repo, you can still use the `npm install` command to install it [directly from your repository](http://www.zev23.com/2014/03/npm-install-from-github-or-bitbucket_13.html):

```
npm install git+ssh://git@github.com/<repo-owner>/<repo>.git
```

Then in the [setup file](../project-settings.html) for each of your projects you can `require` and use your subclassed theme:

```js
// fractal.config.js
'use strict';

const fractal    = module.exports = require('@frctl/fractal').create();
const mySubTheme = require('my-subtheme');

// ... project setup and configuration

fractal.web.theme(mySubTheme); // use the sub-classed theme
```


## Theme development from scratch
::: warning Coming soon...
_Full theme development documentation is coming soon._
:::
