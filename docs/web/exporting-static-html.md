---
title: Exporting to static HTML
---

# Exporting to static HTML

Fractal provides the option to export the web UI view into static HTML files, which can quickly and easily be shared with clients or hosted using a simple static file server.

::: tip
When developing locally you'll want to use the ~@TODOLINK @server', 'local development server') }} to preview your project while you work on it, rather than running repeated exports after changes have been made.
:::

## Configuration

Before you can run the build step you need to set a build destination for your Fractal instance:

```js
fractal.web.set('builder.dest', __dirname + '/build');
```

## Running the build

You can either start the export using the Fractal CLI tool (if you are using it) or programmatically using Fractal's API.

### Using the CLI tool

You can use the `build` command from within the root of your project to get the server up and running:

```bash
fractal build
```

You can provide the following optional command line options to override the default configuration:

* `-t, --theme <theme-name>` - a custom theme to use.

### Programmatically

If you wish to start the export process programmatically, (often useful for ~@TODOLINK @build-tools', 'build tool') }} integrations), you can create a new builder instance using the ~@TODOLINK @api-web#builder', '`fractal.web.builder()`') }} method and then start it as required:

```js
const builder = fractal.web.builder();

builder.build().then(function(){
    console.log(`Fractal static HTML build complete!`);
});
```

The ~@TODOLINK @api-builder', '`Builder`') }} object returned by the call to `fractal.web.builder()` is a Node EventEmitter and will emit error events (and others) that you can bind to. See the ~@TODOLINK @api-web', '`fractal.web`') }} API docs for full details.
