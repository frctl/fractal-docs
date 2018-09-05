---
title: Build Tools
---

# Integrating Fractal into build tools

Fractal can happily be integrated into any JavaScript-based build tool by making use of ~@TODOLINK @api', 'its API') }}, and can reduce or replace the need to use Fractal's own ~@TODOLINK @cli', 'CLI tool') }} for running tasks such as starting the dev server.

## Gulp

The following is an example `gulpfile.js` that defines two tasks, one to start the ~@TODOLINK @server', 'dev server') }} and one to ~@TODOLINK @builder', 'run a static export') }} of the web UI.

Once added, these can be run as `gulp fractal:start` and `gulp fractal:build`. However you can of course change them to be called whatever you like!

```js
'use strict';

const gulp = require('gulp');

/*
 * Configure a Fractal instance.
 *
 * This configuration could also be done in a separate file, provided that this file
 * then imported the configured fractal instance from it to work with in your Gulp tasks.
 * i.e. const fractal = require('./my-fractal-config-file');
 */

const fractal = require('@frctl/fractal').create();

fractal.set('project.title', 'FooCorp Component Library'); // title for the project
fractal.web.set('builder.dest', 'build'); // destination for the static export
fractal.docs.set('path', `${__dirname}/docs`); // location of the documentation directory.
fractal.components.set('path', `${__dirname}/components`); // location of the component directory.

// any other configuration or customisation here

const logger = fractal.cli.console; // keep a reference to the fractal CLI console utility

/*
 * Start the Fractal server
 *
 * In this example we are passing the option 'sync: true' which means that it will
 * use BrowserSync to watch for changes to the filesystem and refresh the browser automatically.
 * Obviously this is completely optional!
 *
 * This task will also log any errors to the console.
 */

gulp.task('fractal:start', function(){
    const server = fractal.web.server({
        sync: true
    });
    server.on('error', err => logger.error(err.message));
    return server.start().then(() => {
        logger.success(`Fractal server is now running at ${server.url}`);
    });
});

/*
 * Run a static export of the project web UI.
 *
 * This task will report on progress using the 'progress' event emitted by the
 * builder instance, and log any errors to the terminal.
 *
 * The build destination will be the directory specified in the 'builder.dest'
 * configuration option set above.
 */

gulp.task('fractal:build', function(){
    const builder = fractal.web.builder();
    builder.on('progress', (completed, total) => logger.update(`Exported ${completed} of ${total} items`, 'info'));
    builder.on('error', err => logger.error(err.message));
    return builder.build().then(() => {
        logger.success('Fractal build completed!');
    });
});

```

## NPM Scripts

Because the locally-installed Fractal module also includes the ~@TODOLINK @cli', 'CLI tool') }} binary, you can use it in your NPM scripts to provide a convenient way to run CLI tasks without having to have the Fractal CLI tool installed globally.

An example `package.json` file may therefore look like this:

```
{
  "name": "foocorp-component-library",
  "version": "1.0.0",
  "description": "FooCorp Component Library.",
  "devDependencies": {
    "@frctl/fractal": "^{{ _config.project.version }}",
  },
  "scripts": {
    "start": "fractal start --sync",
    "build": "fractal build"
  }
}
```

One thing to note here is that because you can't directly configure your Fractal instance within your `package.json` file, you will still need to have a `fractal.js` file ~@TODOLINK @project-settings', 'in your project root') }} to contain all your project setup information.
