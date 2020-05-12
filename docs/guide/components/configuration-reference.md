---
title: Configuration reference
---

# Configuring components

There are a number of global configuration options you can set to determine how Fractal handles components.

Additionally, components and component [collections](../collections/) can also have their own (optional) [configuration files](../core-concepts/configuration-files.html)  associated with them. [Component variants](../components/variants.html) are configured within their parent component's configuration file.

## Global configuration options

These options can be set on your Fractal instance using the [`fractal.components.set()`](../../api/endpoints/fractal-components.html#set-path-value) method. See the [project settings](../project-settings.html) documentation for more details.

### default.collated

Whether variants should default to being collated in rendered previews.

```js
fractal.components.set('default.collated', true); // default is false
```

### default.collator

Default collation function, responsible for collating components.

```js
fractal.components.set('default.collator', function(markup, item) {
    return `<!-- Start: @${item.handle} -->\n${markup}\n<!-- End: @${item.handle} -->\n`
});
```

### default.context

Global [context data](../core-concepts/context-data.html) that will be made available to all components when rendering previews, unless overridden in a collection or component configuration file.

```js
fractal.components.set('default.context', {
    'site-name': 'FooCorp'
});
```

### default.display

Default global CSS property key/value pairs that preview UIs *may* choose to use to apply to the preview rendering area.

This *does not* leak into the styling of the component itself; it is just applied to the area (typically an iframe) that the component is previewed within in plugins such as the web preview UI.

```js
fractal.components.set('default.display', {
    'max-width': '400px'
});
```

### default.prefix

Global prefix to apply to all generated [handles](../core-concepts/naming.html#referencing-other-items) unless overridden in a collection or component configuration file.

```js
fractal.components.set('default.prefix', 'foobar'); // default is null
```

### default.preview

Which layout (specified by its [handle](../core-concepts/naming.html#referencing-other-items)) to use to when rendering previews of this layout. See the [preview layouts](./preview-layouts.html) documentation for more details

```js
fractal.components.set('default.preview', '@my-preview-layout');
```

### default.status

The status to apply to all components unless overridden in a collection or component configuration file.

```js
fractal.components.set('default.status', 'wip'); // default is 'ready'
```

### exclude

Glob or array of globs that should be excluded by Fractal when parsing the [components directory](#path) for component view files.

```js
fractal.components.set('exclude', '**/node_modules/**');
```

or

```js
fractal.components.set('exclude', ['**/node_modules/**', '**/tests/**']);
```

### ext

The file extension that will be used for all component [view templates](../core-concepts/view-templates.html). Note that this must include the leading `.`

```js
fractal.components.set('ext', '.handlebars'); // default is '.hbs'
```

### label

How the collection of components will be referenced in any navigation.

```js
fractal.components.set('label', 'Patterns'); // default is 'Components'
```

### path

The path to the directory where your components live.

```js
fractal.components.set('path', __dirname + '/src/components');
```

<!-- ### resources -->

### statuses

The set of available statuses that can be assigned to components. See the [statuses documentation](../core-concepts/statuses.html) for details of the default values and how to override them as required.

```js
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
    }
});
```

### title

How the collection of components will be referenced in any titles.

```js
fractal.components.set('title', 'Patterns'); // default is 'Components'
```

### yield

The name of the variable that will be used in preview layouts as a placeholder for the rendered content. See the [preview layouts documentation](./preview-layouts.html) for more information.

```js
fractal.components.set('yield', 'rendered_content'); // default is 'yield'
```

## Component properties

The following properties can be specified in a component [configuration file](../core-concepts/configuration-files.html):

### collated

If set to true, individual variants of this component will not be visible in the web UI - instead the preview of this component will concatenate all variants together into a single preview.

```yaml
collated: false
```

### collator

Function to be used when collating components. Can only be specified if using JS formatted config files.

```js
{
    collator: function(markup, item) {
        return `<!-- Start: @${item.handle} -->\n${markup}\n<!-- End: @${item.handle} -->\n`
    }
}
```

### context

The [context data](../core-concepts/context-data.html) to pass to the template when rendering previews.

`context` is an **inheritable property**. Any context data set on the component will be *merged* with context data set upstream in the [configuration cascade](../core-concepts/configuration-files.html#configuration-inheritance).

```yaml
context:
  buttonText: 'Click here!'
  listItems: ['foo','bar','baz']
```

### default

The name of the variant that should be used as the default variant. Defaults to `default`.

```yaml
default: primary
```

### display

CSS property key/value pairs that preview UIs *may* choose to use to apply to the preview rendering area. Useful for doing things like setting max-widths for components that are designed to only be used in sidebars.

This *does not* leak into the styling of the component itself; it is just applied to the area (typically an iframe) that the component is previewed within in plugins such as the web preview UI.

```yaml
display:
  max-width: 400px
  min-width: 250px
```

### handle

Override the generated handle. Note that this will also have the side effect of preventing any [prefixes](#prefix) set in upstream collections being applied to the handle.

```yaml
handle: my-great-component
```

### hidden

Specifies whether the component is hidden (i.e. does not show up in listings or navigation) or not. Overrides the inferred value from an underscore-prefixed file name if set.

```yaml
hidden: true
```

### label

The label is typically displayed in any UI navigation items that refer to the component. Defaults to a title-cased version of the component name if not specified.

```yaml
label: 'Mega Buttons'
```

### name

Overrides the component name, which is otherwise extracted from the component view filename. Name values must be all lowercase, and contain only alphanumeric characters with hyphens or underscores for word seperators.

Setting this will also have the affect of changing the [component\'s handle](../core-concepts/naming.html#referencing-other-items).

```yaml
name: 'mega-buttons'
```

### notes

Any notes about the component. Displayed in the web preview UI if present. Any notes set here override content taken from the component's README.md file, if there is one.  Accepts markdown.

```yaml
notes: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
```

### order

An integer order value, used when sorting components. Overrides any order value set as a property of the filename if set.

```yaml
order: 4
```

### preview

Which layout (specified by [handle](../core-concepts/naming.html#referencing-other-items)) to use to when rendering previews of this layout. See the [preview layouts](./preview-layouts.html) documentation for more details

```yaml
preview: '@my-preview-layout'
```

### status

The status of a component. See the [statuses documentation](../core-concepts/statuses.html) for information on using and customising component statuses.

`status` is an **inheritable property**. If not set directly on the component it will inherit any status set further up in the [configuration cascade](../core-concepts/configuration-files.html#configuration-inheritance).

```yaml
status: 'wip'
```

### title

The title of a component is typically what is displayed at the top of any pages related to the component. Defaults to the same as the `label` if not specified.

```yaml
title: 'Amazing Mega Buttons'
```

### tags

An array of tags to add to the component. Can be used by plugins and tasks to filter components.

`tags` is an **inheritable property**. Tags set on the component will be *merged* with tags set upstream in the [configuration cascade](../core-concepts/configuration-files.html#configuration-inheritance).

```yaml
tags: ['sprint-1', 'foobar']
```

### variants

An array of variant configuration objects. See the variant properties options (below) and the [variants documentation](./variants.html) for more information on working with variants.

Many variant properties are **inherited from the parent component**, and all apart from the `name` value are optional.

```yaml
variants:
  - name: 'large'
    status: 'ready'
    context:
      buttonText: "I'm a large button!"
  - name: 'small'
    context:
      isSmall: true
```
## Variant properties

Variants can be defined in the parent component's configuration file. See the [variants documentation](./variants.html) for full details on creating and configuring variants.

### context

The [context data](../core-concepts/context-data.html) to pass to the variant view template when rendering previews.

Any context set on a variant will be merged with its parent component's (inherited and merged) context data.

```yaml
context:
  buttonText: 'It's a unicorn button!'
```

### display

Set the component display property description for details. This is merged with any display properties assigned to the parent content.

```yaml
display:
  max-width: 300px
```

### name

The name of the variant. This is the only **mandatory property** for variant definitions.

A variant with a name of 'large' that belongs to the component named 'button' will have a [handle](../core-concepts/naming.html#referencing-other-items) of **@button--large**.

```yaml
name: 'unicorn'
```

### notes

Any notes about the variant. Displayed in the web preview UI if present. Accepts markdown.

```yaml
notes: "Different from the default component because this one is *funky*."
```

### preview

Which layout (specified by its [handle](../core-concepts/naming.html#referencing-other-items) to use to when rendering previews of this layout. See the [preview layouts](./preview-layouts.html) documentation for more details.

This overrides any the (inherited) `preview` value of the parent component.

```yaml
preview: '@my-special-layout'
```

### status

The status of the variant. Overrides the default status of its parent component.

```yaml
status: 'wip'
```

### view

The view file to use. If not specified and a view file matching the variant's handle is found (i.e. `component--variant.hbs` or similar) then that view will be used. If none is specified and no matching template is found, then the view file for the parent component will be used.

```yaml
view: 'component--funky.hbs'
```

## Collection properties

Collections can specify properties that should be applied to all child components of that collection via [configuration cascade](../core-concepts/configuration-files.html#configuration-inheritance). See the [documentations on collections](../collections/) for more details on how to work with collections, and for details on available non-inheritable properties like `label` and `title`.

The following properties can be set on page collections and will affect the pages within them:

### collated

Whether or not child components of this collection [should be collated](#collated) or not.

```yaml
collated: false
```

### collator

Function to be used when collating components in the collection. Can only be specified if using JS formatted config files.

```js
{
    collator: function(markup, item) {
        return `<!-- Start: @${item.handle} -->\n${markup}\n<!-- End: @${item.handle} -->\n`
    }
}
```

### context

[context data](../core-concepts/context-data.html) to be applied to children of the collection. Any context set on a collection will be merged into any contexts set by its children.

```yaml
context:
  buttonText: 'It's a unicorn button!'
```

### display

Display property options for child components. This is merged with any display properties set on individual child components.

```yaml
display:
  max-width: 300px
```

### preview

The default preview layout (specified by its [handle](../core-concepts/naming.html#referencing-other-items) that child components should when being rendered as a preview. See the [preview layouts](./preview-layouts.html) documentation for more details.

```yaml
preview: '@my-special-layout'
```

### prefix

A string to be prefixed on to the generated [handles](../core-concepts/naming.html#referencing-other-items) of all components (and variants) in that collection.

```yaml
prefix: 'atoms'
```
Given the prefix above, a component with the name of `button` that lives within this collection will have the handle `@atoms-button`.

### status

The default status for all children of the collection.

```yaml
status: 'wip'
```

### tags

An array of tags to add to all child components. Will be merged together with any tags specified on the components themselves.

```yaml
tags: ['sprint-1', 'foobar']
```

## Example component configuration file

A fairly full-featured, JS-formatted example component config file may look something like this:

```js
module.exports = {
	title: "Amazing Mega Buttons",
	status: "prototype",
	tags: ['sprint-1', 'author:mark'],
	preview: '@preview-layout',
	context: {
		"button-text": "Click me!",
		"is-sparkly": true
	},
	variants: [{
		name: 'large',
		notes: 'Only use this when you need a really big button!',
		context: {
			modifier: 'is-large'
		}
	},{
		name: 'warning',
		status: 'wip',
		context: {
			modifier: 'is-warning',
			button-text: 'Do not click'
		}
	}]
};
```
