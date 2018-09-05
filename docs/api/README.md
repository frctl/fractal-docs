---
title: Overview
---

# Fractal API documentation

Fractal provides a programmatic API that allows you to [write custom commands](../../guide/cli/custom-commands.html), [tie it into your build tools](../../guide/integration/build-tools.html) or help with integrating your component library into your [production site or application](../../guide/integration/integrating-into-production.html).

If you've created a [project settings file](../../guide/project-settings.html) for your project then you have already interacted with the Fractal API.

::: danger
The Fractal API docs are currently very much a <strong>work in progress</strong>. Keep checking back regularly for updates!
:::

## Obtaining a Fractal instance

All API methods are called on an instance of Fractal or one of the objects it exposes. To get a new instance of Fractal, first `require` the `@frctl/fractal` module and then call the `.create()` method on it. In one line that looks like this:

```js
const fractal = require('@frctl/fractal').create();
```

You can then call API methods on this fractal instance (or on the objects it exposes) like so:

```js
// set the project title
fractal.set('project.title', 'My New Project');
```

See the individual API documentation pages for full details of available properties and methods.

## Initial load & parse

Before you can access data about any components or documentation pages via the API, you need to first call the `fractal.load()` method to tell Fractal to perform an initial parse of the relevant filesystem directories. This method is asynchronous and returns a `Promise`:

```js
fractal.load().then(() => {

    // render a component with a custom set of context data
    fractal.components.render('@button', {
        text: 'Click here',
        style: 'primary-action'
    }).then(html => {
        console.log(html);
    });

});
```

This method is called behind the scenes when creating new development server instances or running CLI commands.
