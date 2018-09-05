---
title: fractal.components
---

# fractal.components

The `.components` property on the main fractal instance provides access to the **components source** object.

```
const fractal = require('@frctl/fractal').create();
fractal.components.set('ext', '.html');
```

::: tip
The `fractal.components` object is a _Collection_ and so inherits all the methods that are available on Collection instances in addition to those documented below. See the ~@TODOLINK @api-collection', 'Collection documentation') }} for full details.
:::

## Methods

### .set(path, value)

* `path` - *String*
* `value` - *String | Object*

Set the value of a configuration setting, identified by its `path`. See the ~@TODOLINK @components-config', 'components configuration') }} documentation for details of available options.

```js
fractal.components.set('ext', '.html');
```

### .get(path)

* `path` - *String*

Get the value of a configuration setting, identified by it's `path`. For a complete list of configuration values see the ~@TODOLINK @components-config', 'components configuration') }} documentation.

```js
console.log(fractal.components.get('ext')); // '.html'
```

### .engine(adapter)

* `adapter` - *Adapter | String*

Set the ~@TODOLINK @template-engines', 'template engine adapter') }} to be used for rendering the component view templates.

```js
fractal.components.engine('@frctl/nunjucks'); // no customisation needed, pass string of module name

const nunjucks = require('@frctl/nunjucks')({
    // set config here
});
fractal.components.engine(nunjucks); // or pass in configured Adapter instance
```

### .resolve(context)

* `context` - *Object*

Resolve the supplied context object. Parses out and resolved `@handle` syntax data references and any promises contained in the data. Returns a `Promise`.

```js
const resolvedContext = fractal.components.resolve({
    title: '@list.title',
    text: 'Some text',
    entries: someFunctionThatReturnsAPromise()
});
```

### .on(event, callback)

* `event` - *String*
* `callback` - *Function*

Listen out and respond to lifecycle events. See the [Events](#events) section for more details.

```js
fractal.components.on('changed', function(eventData){
	console.log(`Change in component directory detected`);
});
```

### .load()

Perform an initial read and parse of the components directory. Returns a `Promise`.

```js
fractal.components.load().then(() => {
	console.log('Finished parsing components directory!');
});
```

### .watch()

Start a watch task to monitor the components directory for changes.

```js
fractal.components.watch();
```

### .unwatch()

Stop any currently running watch tasks.

```js
fractal.components.unwatch();
```


## Properties

### .label

The text used to reference the components source in any navigation.

### .title

The text used to reference the components source in any titles.

### .isLoaded

Boolean, `true` if the initial source directory read and parse has been completed.

### .fullPath

Full, resolved filesystem path to the components directory.


## Events

The `fractal.components` object is an _EventEmitter_ and emits events that can be listened to via using the `.on()` method (documented above). Available events to listen for are described below:

### loaded

Emitted when Fractal has finished the initial parse of the components directory.

```js
fractal.components.on('loaded', function(){
	console.log(`Components directory has been loaded`);
});
```

### changed

Emitted when one or more files in the components directory are added, removed or edited, but _before_ Fractal has re-parsed the contents of the directory.

```js
fractal.components.on('changed', function(eventData){
	console.log(`Change in components directory`);
});
```

* `eventData` - an event data object, e.g. `{ event: 'change', path: 'path/to/file.scss' }`

### updated

Emitted when Fractal has finished re-parsing the components directory after a change.

```js
fractal.components.on('updated', function(source, eventData){
	console.log(`Components source has been updated`);
});
```

* `eventData` - an event data object, e.g. `{ event: 'change', path: 'path/to/file.scss' }`
