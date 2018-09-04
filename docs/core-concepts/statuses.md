---
title: Statuses
---

# Statuses

~@TODOLINK @components', 'Components') }} and ~@TODOLINK @docs', 'documentation pages') }} can have statuses associated with them.

Each status has a colour and a label that can be displayed in the ~@TODOLINK @web', 'web UI') }} (and other places) to help people quickly understand the status of each component.

Fractal defines some default statuses, but you are free to define your own to suit the needs of your project, or customise the colours and labels associated with these statuses.

## Default statuses

A default status can be set globally for both components and documentation pages. If you wish to **disable** the default status then you can set the value to `null`. Items will then not have a status unless specified in their configuration (or in a parent collection's configuration).

### Components

```js
fractal.components.set('default.status', 'wip');
```

By default the available options are `ready`, `wip` and `prototype`.


### Documentation pages

```js
fractal.docs.set('default.status', 'draft');
```

By default the available options are `ready` and `draft`.

## Setting the status of an item

You can specify a status for an item in its ~@TODOLINK @configuration-files', 'configuration file') }} (or in the YAML front-matter for documentation pages). For example:

```js
// component.config.json
{
	"status": "wip"
}
```

A status can also be defined for a ~@TODOLINK @collections', 'collection' ) }}; in this case the status will automatically be applied to all children unless specifically overridden on a case-by-case basis.


## Custom statuses

Custom statuses sets can be defined for both components and documentation pages.

```js
fractal.components.set('statuses', {
	/* status definitions here */
});

fractal.docs.set('statuses', {
	/* status definitions here */
});
```

The default statuses are defined as follows:

```js
// components
{
    prototype: {
        label: "Prototype",
        description: "Do not implement.",
        color: "#FF3333"
    },
    wip: {
        label: "WIP",
        description: "Work in progress. Implement with caution.",
        color: "#FF9233"
    },
    ready: {
        label: "Ready",
        description: "Ready to implement.",
        color: "#29CC29"
    }
}

// docs
{
    draft: {
        label: 'Draft',
        description: 'Work in progress.',
        color: '#FF3333'
    },
    ready: {
        label: 'Ready',
        description: 'Ready for referencing.',
        color: '#29CC29'
    }
}
```

So as an example, if you only wanted two statuses for components, `doing` and `done`, you could use the following configuration:

```js
// fractal.js
fractal.components.set('statuses', {
    doing: {
        label: "Doing",
        description: "I'm doing it.",
        color: '#F00'
    },
    done: {
        label: "Done",
        description: "I'm done with this.",
        color: "green"
    },
});
```
You could then assign these new statuses to your components using the values `doing` and `done`.

Alternatively, if you just want to change the label or colour on one of the existing statuses, you can target it specifically by its key:

```js
fractal.components.set('statuses.prototype.color', 'pink');
fractal.docs.set('statuses.ready.label', 'Good to go!');
```
