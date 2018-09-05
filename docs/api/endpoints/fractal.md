---
title: fractal
---

# fractal 

The following properties and methods are available directly on any Fractal instance. You can get a new instance via the `.create()` convenience method when requiring the Fractal module, like so:

```js
const fractal = require('@frctl/fractal').create();
```

## Methods

### .set(path, value)

* `path` - *String*
* `value` - *String | Object*

Set the value of a configuration setting, identified by its `path`. See the ~@TODOLINK @project-settings', 'project settings') }} documentation for details of available options.

```js
fractal.set('project.title', 'My Component Library');
```

### .get(path)

* `path` - *String*

Get the value of a configuration setting, identified by it's `path`. For a complete list of configuration values see the [project settings](/docs/project-settings.md) documentation.

```js
console.log(fractal.get('project.title')); // 'My Component Library'
```

### .on(event, callback)

* `event` - *String*
* `callback` - *Function*

Listen out and respond to lifecycle events. See the [Events](#events) section for more details.

```js
fractal.on('source:changed', function(source, eventData){
	console.log(`Change in ${source.name} directory`);
});
```

### .load()

Perform an initial read and parse of the relevant project directories. Returns a `Promise`.

```js
fractal.load().then(() => {
	console.log('Finished parsing components and documentation!');
});
```

### .watch()

Start a watch task to monitor the relevant project directories for changes.

```js
fractal.watch();
```

### .unwatch()

Stop any currently running watch tasks.

```js
fractal.unwatch();
```

## Properties

### .components

The component source object. See the ~@TODOLINK @api-components', '`fractal.components`') }} documentation for full details.

### .docs

The documentation source object. See the ~@TODOLINK @api-docs', '`fractal.docs`') }} documentation for full details.

### .web

Provides access to web server and build related methods. See the ~@TODOLINK @api-web', '`fractal.web`') }} documentation for full details.

### .cli

Provides access to CLI related methods. See the ~@TODOLINK @api-cli', '`fractal.cli`') }} documentation for full details.

### .version

The version of the local Fractal install.

## Events

The main Fractal instance emits events that can be listened to via using the `.on()` method documented above. Available events to listen for are described below:

### source:loaded

Emitted when Fractal has finished the initial parse of the source directory.

```js
fractal.on('source:loaded', function(source){
	console.log(`${source.name} has been loaded`);
});
```

* `source` - the source object that has finished loading

### source:changed

Emitted when one or more files in a component or documentation source are added, removed or edited, but _before_ Fractal has re-parsed the contents of the source directory.

```js
fractal.on('source:changed', function(source, eventData){
	console.log(`Change in ${source.name} directory`);
});
```

* `source` - the source that has had a change to one of it's files
* `eventData` - an event data object, e.g. `{ event: 'change', path: 'path/to/file.scss' }`

### source:updated

Emitted when Fractal has finished re-parsing the source directory after a change.

```js
fractal.on('source:updated', function(source, eventData){
	console.log(`${source.name} has been updated`);
});
```

* `source` - the source object that has been updated
* `eventData` - an event data object, e.g. `{ event: 'change', path: 'path/to/file.scss' }`
