---
title: Development Server
---

# Development server

Fractal comes with a local development server for running the web UI while you are building your component library.

## Starting the server

You can either start the server using the Fractal CLI tool (if you are using it) or programmatically using Fractal's API.

### Using the CLI tool

You can use the `start` command from within the root of your project to get the server up and running:

```bash
fractal start
```

You can provide the following (optional) command line options to override the default configuration:

* `-p, --port <port-number>` - the port number to use, for example `5000`.
* `-t, --theme <theme-name>` - the custom theme to use.
* `-s, --sync` - whether to use the integrate [BrowserSync](#browsersync-integration) instance to provide auto-refresh and syncing capabilities
* `-w, --watch` - whether to watch components and documentation pages for changes

As an example, the command:

```bash
fractal start --watch --port 4000
```

Would start the preview server at the URL [`http://localhost:4000`](http://localhost:4000) and start watching the filesystem for changes.

### Programmatically

If you wish to start the server programmatically, (often useful for [build tool](../integration/build-tools.html) integrations), you can create a new server instance using the [`fractal.web.server()`](../../api/endpoints/fractal-docs.html#set-path-value) method and then start and stop it as required:

```js
const server = fractal.web.server();

server.start().then(function(){
    console.log(`Fractal server is now running at ${server.url}`);
});

server.stop();
```

The [`Server`](../../api/entities/server.html) object returned by the call to `fractal.web.server()` is a Node EventEmitter and will emit error events (and others) that you can bind to. See the [`fractal.web`](../../api/endpoints/fractal-web.html) API docs for full details.

## BrowserSync integration

The Fractal web server includes a seamless integration with BrowserSync, should you require it.

When enabled, it provides:

* Auto-reloading of the web UI when files change
* Re-injecting of static assets (such as stylesheets) when changes are made
* A network-accessible URL for device testing
* Syncing of page navigation between tabs
* Lots more - see the [BrowserSync website](https://www.browsersync.io/) for details.

BrowserSync can be enabled as a global option, when starting the server via the CLI tool or programmatically:

### Enabling globally

You can [configure](../project-settings.html) your Fractal instance to use BrowserSync integration whenever the server is started as follows:

```js
fractal.web.set('server.sync', true);
```

You can also pass [options](https://www.browsersync.io/docs/options) to the underlying BrowserSync instance using the `server.syncOptions` property:

```js
fractal.web.set('server.syncOptions', {
    open: true,
    browser: ['google chrome', 'firefox'],
    notify: true
});
```

### Using the CLI tool

You can use the `--sync` option to enable BrowserSync when starting the server:

```bash
fractal start --sync
```

### Programmatically

You can set the `sync` option to `true` in the server config object when getting a new server instance:

```js
const server = fractal.web.server({
    sync: true
});

server.start().then(function(){
    console.log(`Local URL: ${server.url}`);
    console.log(`Network URL: ${server.urls.sync.external}`);
});
```
