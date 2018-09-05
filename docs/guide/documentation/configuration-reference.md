---
title: Configuration reference
---

# Configuring documentation pages

There are a number of global configuration options you can set to determine how Fractal handles documentation pages.

Additionally, documentation pages and ~@TODOLINK @collections', 'collections') }} can have their own (optional) configuration files associated with them; or if you prefer pages can specify their configuration in a ~@TODOLINK @docs#yaml-front-matter', 'YAML front-matter section') }} within the page template itself. See the ~@TODOLINK @docs#yaml-front-matter', 'documentation overview') }} for more information.

## Global configuration options

These options can be set on your Fractal instance using the ~@TODOLINK @api-docs#set', '`fractal.docs.set()`') }} method. See the ~@TODOLINK @project-settings', 'project settings') }} documentation for more details.

### default.context

Global ~@TODOLINK @context-data', 'context data') }} that will be made available to all pages.

```js
fractal.docs.set('default.context', {
    'site-name': 'FooCorp'
});
```

### default.prefix

Global prefix to apply to all generated ~@TODOLINK @naming#referencing-other-items', 'handles') }} unless overridden in a collection or page configuration file.

```js
fractal.docs.set('default.prefix', 'foobar'); // default is null
```

### default.status

The status to apply to all pages unless overridden in a collection or page configuration file.

```js
fractal.docs.set('default.status', 'wip'); // default is null
```

### ext

The file extension that will be used for all documentation ~@TODOLINK @views', 'view templates') }}. Note that this must include the leading `.`

```js
fractal.docs.set('ext', '.html'); // default is '.md'
```

### indexLabel

The default label to be used for index pages.

```js
fractal.docs.set('indexLabel', 'Listing'); // default is 'Overview'
```

### label

How the collection of documentation pages will be referenced in any navigation.

```js
fractal.docs.set('label', 'Pages'); // default is 'Documentation'
```

### markdown

Whether to use Markdown to parse the contents of documentation pages.

```js
fractal.docs.set('markdown', false); // defaults to true
```

You can also toggle on or off other more fine-grained settings to customise the details of the Markdown parsing:

```js
fractal.docs.set('markdown.smartypants', false);
```

The default values are:

```js
{
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: true
}
```

See the [Marked markdown parser documentation](https://github.com/chjj/marked#options-1) for details on what each option does.

### path

The path to the directory where your documentation pages live.

```js
fractal.docs.set('path', __dirname + '/src/docs');
```

<!-- ### resources -->

### statuses

The set of available statuses that can be assigned to pages. See the ~@TODOLINK @statuses', 'statuses documentation') }} for details of the default values and how to override them as required.

```js
fractal.docs.set('statuses', {
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

How the collection of documentation pages will be referenced in any titles.

```js
fractal.docs.set('title', 'Pages'); // default is 'Documentation'
```

## Page properties

These are properties that can be specified in an individual page's YAML front matter section _or_ in a configuration file for that page.

### context

Data to pass to the page when rendering it.

`context` is an **inheritable property**. Any context data set on the page will be *merged* with any context data set upstream in the ~@TODOLINK @configuration-files#configuration-inheritance', 'configuration cascade') }}.

```yaml
context:
  colors: ['red','pink','blue']
```

### handle

Override the generated handle. Note that this will also have the side effect of preventing any [prefixes](#prefix) set in upstream collections being applied to the handle.

```yaml
handle: my-great-page
```

### hidden

Specifies whether the page is hidden (i.e. does not show up in listings or navigation) or not. Overrides the inferred value from an underscore-prefixed file name if set.

```yaml
hidden: true
```

### label

The label is typically displayed in any UI navigation items that refer to the page. Defaults to a title-cased version of the page file name if not specified.

```yaml
label: 'Naming Conventions'
```

### order

An integer order value, used when sorting pages. Overrides any order value set as a property of the filename if set.

```yaml
order: 4
```

### title

The title of a page. Defaults to the same as the `label` if not specified.

```yaml
title: 'Amazing Mega Buttons'
```

## Collection properties

Collections can specify properties that should be applied to all child pages of that collection via ~@TODOLINK @configuration-files#configuration-inheritance', 'configuration inheritance') }}. See the ~@TODOLINK @collections', 'documentation on collections') }} for more details on how to work with collections, and for details on available non-inheritable properties like `label` and `title`.

The following properties can be set on page collections and will affect the pages within them:

### context

Context data to be made available to (and merged into) all child pages within the collection.

```yaml
context:
  colors: ['red','pink','blue']
```

### prefix

A string to be prefixed on to the generated ~@TODOLINK @naming', 'handles') }} of all pages in that collection.

```yaml
prefix: 'api'
```
Given the prefix above, a page with the name of `logging` that lives within this collection will have the handle `@api-logging`.

### status

The default status for all pages within the collection.

```yaml
status: 'wip'
```
