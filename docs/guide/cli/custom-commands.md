---
label: Custom commands
---

# Custom commands

It is possible to extend the Fractal CLI tool using custom commands. These allow you to hook into the power of Fractal's API to build bespoke commands to help you with your project workflow.

Custom commands are typically registered in your ~@TODOLINK @project-settings', 'project settings file') }} using the ~@TODOLINK @api-cli#command', '`fractal.cli.command()`') }} method. Once registered they can then be called via the command line or programmatically.

## An example custom command

An simple custom command to list all the components in the project, together with their status, is shown below. This would typically be registered in your ~@TODOLINK @project-settings', 'project settings file') }}.

```js
// fractal.js

var config = {
    description: 'Lists components in the project'
};

function listComponents(args, done){
    const app = this.fractal;
    for (let item of app.components.flatten()) {
        this.log(`${item.handle} - ${item.status.label}`);
    }
    done();
};

fractal.cli.command('list-components', listComponents, config); // register the command
```

Once created, the command can be run from within the project directory using the command:

```bash
fractal list-components
```

It can also be called programmatically using the ~@TODOLINK @api-cli#exec', '`fractal.cli.exec()`') }} method:

```js
fractal.cli.exec('list-components');
```

## Accepting arguments

The first argument passed to the `fractal.cli.command()` method describes the format that your command should take.

* **Required arguments** can be specified by surrounding the name with angle brackets, e.g. `<bar>`.
* **Optional arguments** can be specified by surrounding the name with square brackets e.g. `[foo]`.

For example:

```js
fractal.cli.command('foo <requiredArg> [optionalArg] [anotherOptionalArg]', function(args, done){
    console.log(args.requiredArg);
    done();
});
```

The values for the arguments supplied when the command is run will be made available to the callback function within the firs `args` object.

## Accepting options

You can specify available options by adding them to the config object that can be provided as the third argument when registering a command:

```js
var config = {
    options: [
        ['-p, --port <number>', 'The port to use.'],
    ]
};

fractal.cli.command('foo', function(args, done){
    // do something
    console.log(`Something was started on port ${args.options.port}`);
    done();
}, config);
```
