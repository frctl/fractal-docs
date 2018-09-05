---
title: fractal.cli
---

# fractal.cli

The `.cli` property on the main fractal instance provides access to utilities for working with the Fractal [CLI tool](../../guide/cli/).

```
const fractal = require('@frctl/fractal').create();
fractal.cli.exec('start -s');
```

### .command(commandString, callback, opts)

* `commandString` - *String*
* `callback` - *Function*
* `opts` - *String | Object* [optional]

Register a custom command to be made available to the Fractal CLI tool.

```js
fractal.cli.command('foo <requiredArg> [optionalArg]', function(args, done){
    console.log(args.requiredArg);
    done();
});
```

The `commandString` describes the format that your command should take, and allows you to specify required and optional arguments.

The callback is a function that will be run when the command is called. The first argument it receives is a object containing the arguments parsed out of the command string, plus an object (`options`) containing any option flags that have been provided.

The `opts` argument can be a string to describe the function of the command, or it can be an configuration object. For example:

```js
const options = {
    description: 'Start a server to run an HTTP API',
    options: [
        ['-p, --port <number>', 'The port to run the server on.'],
    ]
}

fractal.cli.command('api', function(args, done){
    // start the server...
    console.log(`Server started on port: ${args.options.port}`);
    done();
}, options);

// Use the command: `fractal api --port=4444`
```

### .exec()

Programmatically run any command that is available from the fractal CLI.

```js
fractal.cli.exec('start --port=3333 --watch');
```

### .log()

Log a message to the console via Fractal's CLI formatter.

```js
fractal.cli.log('Just some information');
```

### .error()

Log a message to the console via Fractal's CLI error formatter.

```js
fractal.cli.error('Oops somthing went wrong!');
```

<!-- ### .set(path, value)

* `path` - *String*
* `value` - *String | Object*

Set the value of a configuration setting, identified by its `path`. See the [web configuration](../../guide/web/configuration-reference.html) documentation for details of available options.

```js
fractal.web.set('builder.dest', 'dist/output');
```

### .get(path)

* `path` - *String*

Get the value of a configuration setting, identified by it's `path`. For a complete list of configuration values see the [web configuration](../../guide/web/configuration-reference.html) documentation.

```js
console.log(fractal.web.get('builder.dest')); // 'dist/output'
```
 -->
