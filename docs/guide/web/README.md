---
title: Overview
---

# Web UI

The Fractal web UI provides a web-based interface to browse your components and their associated files, as well as view project documentation and assets.

It can be run as via an in-built development server or exported to static HTML.

If you are using the Fractal CLI tool, you can start the local web UI server (and watch the file system for changes) with the `start` command from within the root of your project directory:

```bash
fractal start --watch
```

See the ~@TODOLINK @server', 'dev server') }} documentation for more information and configuration options.


## Configuration

You can configure various aspects of the web UI using the ~@TODOLINK @api-web#set', '`fractal.web.set()`') }} method. For example, to use the integrated BrowserSync option by default, you can set the `sync` option to `true` as follows:

```js
fractal.web.set('server.sync', true);
```

::: warning
Only ~@TODOLINK @web-config', 'core web configuration') }} options can be set using the `fractal.web.set()` method. Theme-specific configuration options must be set on the theme instance itself.

See the ~@TODOLINK @default-theme#configuration', 'default theme docs') }} or the ~@TODOLINK @customisation-web', 'themes customisation guide') }} for more information.
:::

## Static Assets

Most projects will have a directory of static assets (such as compiled stylesheets, JavaScript files, images etc) that need to be used by ~@TODOLINK @components', 'components') }} or linked to from within ~@TODOLINK @preview-layouts', 'preview layouts') }}.

To serve static assets from within the web UI you can use the `static.path` configuration option to specify the path to a directory of assets:

```js
fractal.web.set('static.path', __dirname + '/public');
```

All files within that directory will now be made available at a URL that matches the file's path relative to the directory. For example, given the following project structure (and the configuration setting above):

```
├── components
│   └── ...
├── public
│   ├── css
│   │   └── example.css
│   └── js
│       └── scripts.js
```

The the dev server will serve up the CSS and JS files at the URLs `/css/example.css` and `/js/scripts.js` respectively.

If you want to prefix the URL path of the assets that are being served up, you can do so with the `static.mount` option:

```js
fractal.web.set('static.mount', 'foobar');
```

The the dev server will now serve up the CSS and JS files from the previous example at the URLs `/foobar/css/example.css` and `/foobar/js/scripts.js` respectively.

### Linking to assets from view templates

If you want to link to any of your static assets from your components or preview layouts, it is **strongly recommended** that you use the supplied Handlebars ~@TODOLINK @views#handlebars-helpers', '`path` helper') }} to do so:

```
{{path '/foobar/css/example.css'}}
```

This helper lets you specify the static asset path as a root-relative URL such as `/foobar/css/example.css` and will then automatically take care of any path-rewriting necessary to support the ~@TODOLINK @builder', 'static HTML export process') }}.

<!-- ### Exporting to static HTML

If you are using the static HTML export functionality, asset paths need to be amended for the export to ensure that relative paths -->


## Themes

The web UI is built upon *themes*. Themes are very powerful, and allow complete control over everything from look and feel to URLs and functionality. Themes can be used to customise the look and feel of the web UI to match your project or even to give a completely different 'view' of your component library to different project stakeholders - for instance a 'no code' theme for people that might only be interested in reviewing the component previews.

The ~@TODOLINK @default-theme', 'default theme') }} (called 'Mandelbrot') that ships with Fractal also supports a number of customisation options if you don't want to roll your own custom theme from scratch.

<!--

## Local development server

## Exporting to static HTML

## Static Assets

-->
