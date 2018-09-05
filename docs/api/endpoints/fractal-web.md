---
title: fractal.web
---

# fractal.web

The `.web` property on the main fractal instance provides access to utilities for working with the development server and web-UI exporter.

```
const fractal = require('@frctl/fractal').create();
fractal.web.server(); // obtain a server instance.
```

### .server(config)

* `config` - *Object* [optional]

Obtain a new development ~@TODOLINK @api-server', 'Server') }} instance. Any configuration properties passed in will be merged with the current set of global ~@TODOLINK @web-config', 'server configuration properties') }},

```js
const server1 = fractal.web.server();
const server2 = fractal.web.server({
    sync: true
});
```

See the ~@TODOLINK @api-server', 'Server API') }} documentation for details on usage.

### .builder(config)

* `config` - *Object* [optional]

Obtain a new ~@TODOLINK @api-builder', 'Builder') }} instance. Any configuration properties passed in will be merged with the current set of global ~@TODOLINK @web-config', 'web builder configuration properties') }},

```js
const builder = fractal.web.builder();
```

See the ~@TODOLINK @api-builder', 'Builder API') }} documentation for details on usage.

### .theme(theme)

* `theme` - *String | WebTheme*

Set the theme to be used for the dev server and static web UI exporter.

```js
fractal.web.theme('@frctl/mandelbrot'); // just use an installed package name
fractal.web.theme(myTheme); // or pass in a configured instance of a WebTheme
```

### .set(path, value)

* `path` - *String*
* `value` - *String | Object*

Set the value of a configuration setting, identified by its `path`. See the ~@TODOLINK @web-config', 'web configuration') }} documentation for details of available options.

```js
fractal.web.set('builder.dest', 'dist/output');
```

### .get(path)

* `path` - *String*

Get the value of a configuration setting, identified by it's `path`. For a complete list of configuration values see the ~@TODOLINK @web-config', 'web configuration') }} documentation.

```js
console.log(fractal.web.get('builder.dest')); // 'dist/output'
```
