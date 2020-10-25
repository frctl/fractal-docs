---
title: Configuration reference
---

# Web UI configuration

There are a number of global configuration options available to customise the behaviour of both the [development web server](./development-server.html) and the [static HTML builder](../web/exporting-static-html.html).

These options can be set on your Fractal instance using the [`fractal.web.set()`](../../api/endpoints/fractal-web.html#set-path-value) method. See the [project settings](../project-settings.html) documentation for more details.

### builder.concurrency

How many concurrent export tasks to run at any one time. Useful if you are experiencing filesystem write errors when running the builder. More is not necessarily faster!

```js
fractal.web.set('builder.concurrency', 5); // default is 10
```

### builder.dest

Path to the folder that the static HTML build should be exported to.

```js
fractal.web.set('builder.dest', __dirname + '/export');
```

### builder.ext

The file extension that should be used for the exported HTML pages.

```js
fractal.web.set('builder.ext', '.php'); // default is '.html'
```

### builder.urls.ext

The file extension that should be used when rewriting URLs for the static export.

If you are going to be serving the exported content via a web server and want to have 'pretty' URLs, then setting this to `null` (to generate extension-less URLs) and then doing some URL-rewriting on the server (using an `.htaccess` file or equivalent) is often a good solution.

```js
fractal.web.set('builder.urls.ext', null); // default is '.html'
```

### server.sync

Whether or not to use [BrowserSync](http://browsersync.io) to watch the filesystem and reload the web UI when changes occur.

```js
fractal.web.set('server.sync', true); // default is false
```

### server.syncOptions

An object of options to pass to the underlying BrowserSync instance when using the `sync` option described above.

```js
fractal.web.set('server.syncOptions', {
    open: true,
    browser: ['google chrome', 'firefox'],
    notify: true
});
```

See the [BrowserSync documentation](https://www.browsersync.io/docs/options) for a full list of available options.

### server.port

Hard-code a port number to start the server on. Generally this option is not required because Fractal will automatically find an available port to use.

```js
fractal.web.set('server.port', 4444); // default is null
```

### server.watch

Whether to watch the filesystem for changes and trigger the re-building of the underlying data objects when updates occur.

This is effectively a light-weight alternative to the `server.sync` option, although it lacks any reload functionality or any of the advanced options that BrowserSync provides.

```js
fractal.web.set('server.watch', true); // default is false
```

### static.path

The path to the directory where your static assets live. Any assets within this directory will be made available to your components and preview layouts at a URL path relative to this directory. See the [static assets](../web/#static-assets) documentation for more details.

```js
fractal.web.set('static.path', __dirname + '/public');
// public/bar/foo.css will be served at http://localhost:3000/bar/foo.css
```

### static.mount

Virtual path prefix for the files that are served from the static asset directory specified in the `static.path` option. See the [static assets](../web/#static-assets) documentation for more details.

```js
fractal.web.set('static.mount', 'project-assets');
// public/bar/foo.css will be served at http://localhost:3000/project-assets/bar/foo.css
```

### highlighter <Badge text="added in v1.4.0" type="tip"/>

Override and/or extend the default [highlight.js](https://github.com/highlightjs/highlight.js/) syntax highlighter.

For example, adding svelte language support to highlight.js:
```js
const hljs = require('highlight.js');
const hljs_svelte = require('highlightjs-svelte');
const _ = require('lodash');

hljs_svelte(hljs);

fractal.web.set('highlighter', function (content, lang) {
    content = _.toString(content || '');
    lang = lang ? lang.toLowerCase() : lang;
    try {
        return lang ? hljs.highlight(lang, content).value : hljs.highlightAuto(content).value;
    } catch (e) {
        return hljs.highlightAuto(content).value;
    }
});
```

<!-- ### assets.mount -->
