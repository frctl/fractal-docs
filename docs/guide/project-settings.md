---
title: Project Settings
---

# Project Settings and Configuration

Fractal is very flexible when it comes to things like project structure and organisation, and also offers many ways to customise things like view template engines and themes for the web UI.

Fractal comes with a few sensible defaults, but before you can get your project up and running you will generally need to provide some additional configuration information.

## The fractal.config.js file

By convention, project configuration and setup information should be kept in a file called `fractal.config.js` that lives in the **root of your project directory**.

::: tip
Note that previously the config file was called `fractal.js` by default. This changed in v1.3.0.
:::

If you are using the Fractal [CLI tool](./cli/) this file will need to exist (and be set up correctly) before you can run commands on your project.

::: tip A note on paths
When setting paths to directories in your Fractal configuration, it's possible to specify them relative to the root of your project directory - i.e. `src/components`. However it's recommended that you instead make use of Node's [`\__dirname`](https://nodejs.org/docs/latest/api/globals.html#globals_dirname) global to generate full absolute paths that look like:

`const myPath = __dirname + '/src/components';`

This will make your Fractal installation more portable (and more robust for any later integrations). All examples in this documentation will use this style.
:::

### Creating and exporting a new Fractal instance

At a bare minimum, your `fractal.config.js` file must `require` the Fractal module, create a new instance and then export it (so that other tools such as the CLI tool can make use of it). In the example below we are doing all this in a handy one-liner:

```js
'use strict';
const fractal = module.exports = require('@frctl/fractal').create();
```

### Project-related metadata

Most projects will want to customise the project title from the default. This can be done using the [`fractal.set()`](../api/endpoints/fractal.html#set-path-value) method as follows:

```js
fractal.set('project.title', 'FooCorp Component Library');
```

Any other project metadata that you may want to store for use in you app can be set on `project.*` keys as required. For instance you may want to keep a reference to your project version and author:

```js
fractal.set('project.version', 'v1.0');
fractal.set('project.author', 'Mickey Mouse');
```

Apart from the `project.title` value, Fractal will not use any of these other values directly, but you can use them in your pages and components should you wish.

### Configuring components

Component configuration is done using the [`fractal.components.set()`](../api/endpoints/fractal-components.html#set-path-value) method.

To specify the directory that your [components](./components/) will be created in, you can use the `path` setting:

```js
fractal.components.set('path', __dirname + '/src/components');
```

The [components configuration reference](./components/configuration-reference.md) contains details of all the other  options that you may want to tweak for the components in your project.


### Configuring documentation pages

Docs configuration is done using the [`fractal.docs.set()`](../api/endpoints/fractal-docs.html#set-path-value) method.

To specify the directory that your [documentation pages](./documentation/) will reside in, you can use the `path` setting:

```js
fractal.docs.set('path', __dirname + '/src/docs');
```

The [documentation pages configuration reference](./documentation/configuration-reference.html) contains details of all the other  available documentation configuration options.

### Configuring the web UI

Web UI configuration is done using the [`fractal.web.set()`](../api/endpoints/fractal-web.html#set-path-value) method.

To serve a directory of [static assets](./web/#static-assets) via the web UI (so that you can link to stylesheets from your preview layouts, for example), you can specify the path to the directory using the `static.path` setting:

```js
fractal.web.set('static.path', __dirname + '/public');
```

To set the directory within which any [static HTML exports](./web/exporting-static-html.html) of the web UI should be generated, use the `builder.dest` setting:

```js
fractal.web.set('builder.dest', __dirname + '/build');
```

The [web UI configuration reference](./web/configuration-reference.html) contains details of all the other available web configuration options.

## Example project setup file

Tying together the examples above, we can see that a basic `fractal.config.js` file might look something like this:

```js
'use strict';

/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = module.exports = require('@frctl/fractal').create();

/* Set the title of the project */
fractal.set('project.title', 'FooCorp Component Library');

/* Tell Fractal where the components will live */
fractal.components.set('path', __dirname + '/src/components');

/* Tell Fractal where the documentation pages will live */
fractal.docs.set('path', __dirname + '/src/docs');

/* Specify a directory of static assets */
fractal.web.set('static.path', __dirname + '/public');

/* Set the static HTML build destination */
fractal.web.set('builder.dest', __dirname + '/build');

```


<!-- ## Alternatives to using a fractal.config.js file for configuration

Whilst the standard fractal.config.js file works just fine, it's far from the only option. -->
