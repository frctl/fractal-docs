---
title: fractal.docs
---

# fractal.docs

The `.docs` property on the main fractal instance provides access to the **documentation source** object.

```
const fractal = require('@frctl/fractal').create();
fractal.docs.set('ext', '.html'); // set a configuration property on the documentation source object.
```

::: tip
The `fractal.docs` object is a _Collection_ and so inherits all the methods that are available on Collection instances in addition to those documented below. See the ~@TODOLINK @api-collection', 'Collection documentation') }} for full details.
:::

## Methods

### .set(path, value)

* `path` - *String*
* `value` - *String | Object*

Set the value of a configuration setting, identified by its `path`. See the ~@TODOLINK @docs-config', 'docs configuration') }} documentation for details of available options.

```js
fractal.docs.set('ext', '.html');
```

### .get(path)

* `path` - *String*

Get the value of a configuration setting, identified by it's `path`. For a complete list of configuration values see the ~@TODOLINK @docs-config', 'docs configuration') }} documentation.

```js
console.log(fractal.docs.get('ext')); // '.html'
```

### .engine(adapter)

* `adapter` - *Adapter | String*

Set the ~@TODOLINK @template-engines', 'template engine adapter') }} to be used for rendering the component view templates.

```js
fractal.docs.engine('@frctl/nunjucks'); // no customisation needed, pass string of module name

const nunjucks = require('@frctl/nunjucks')({
    // set config here
});
fractal.docs.engine(nunjucks); // or pass in configured Adapter instance
```

### .resolve(context)

* `context` - *Object*

Resolve the supplied context object. Parses out and resolved `@handle` syntax data references and any promises contained in the data. Returns a `Promise`.

```js
const resolvedContext = fractal.components.resolve({
    title: '@styleguide.title',
    text: 'Some text',
    entries: someFunctionThatReturnsAPromise()
});
```

### .on(event, callback)

* `event` - *String*
* `callback` - *Function*

Listen out and respond to lifecycle events. See the [Events](#events) section for more details.

```js
fractal.docs.on('changed', function(eventData){
	console.log(`Change in component directory detected`);
});
```

### .load()

Perform an initial read and parse of the docs directory. Returns a `Promise`.

```js
fractal.docs.load().then(() => {
	console.log('Finished parsing docs directory!');
});
```

### .watch()

Start a watch task to monitor the docs directory for changes.

```js
fractal.docs.watch();
```

### .unwatch()

Stop any currently running watch tasks.

```js
fractal.docs.unwatch();
```


## Properties

### .label

The text used to reference the docs source in any navigation.

### .title

The text used to reference the docs source in any titles.

### .isLoaded

Boolean, `true` if the initial source directory read and parse has been completed.

### .fullPath

Full, resolved filesystem path to the docs directory.


## Events

The `fractal.docs` object is an _EventEmitter_ and emits events that can be listened to via using the `.on()` method (documented above). Available events to listen for are described below:

### loaded

Emitted when Fractal has finished the initial parse of the docs directory.

```js
fractal.docs.on('loaded', function(){
	console.log(`Docs directory has been loaded`);
});
```

### changed

Emitted when one or more files in the docs directory are added, removed or edited, but _before_ Fractal has re-parsed the contents of the directory.

```js
fractal.docs.on('changed', function(eventData){
	console.log(`Change in docs directory`);
});
```

* `eventData` - an event data object, e.g. `{ event: 'change', path: 'path/to/file.scss' }`

### updated

Emitted when Fractal has finished re-parsing the docs directory after a change.

```js
fractal.docs.on('updated', function(source, eventData){
	console.log(`Docs source has been updated`);
});
```

* `eventData` - an event data object, e.g. `{ event: 'change', path: 'path/to/file.scss' }`
