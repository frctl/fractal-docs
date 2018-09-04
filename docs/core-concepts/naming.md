---
title: Naming & Referencing
---

# Naming & Referencing

Fractal is a flat-file system, and makes use of some simple file and folder naming conventions to help it parse the file system and generate the underlying data model.

And whilst Fractal will automatically generate a lot of data about items based on their file and folder names, it is of course straightforward to override that generated data with bespoke data if required.

One of the main _disadvantages_ of flat-file systems is that when one item references another via a path, moving any of those items inevitably results in those links breaking. So Fractal also supports a **reference** system, whereby items can use 'handles' instead of paths to link parts of the system together.

## Generated names & handles

Unless told otherwise, Fractal will infer the **name** of a component or documentation page from its ~@TODOLINK @views', 'view template') }} **file name** (or the parent directory for ~@TODOLINK @components#compound-components', "'compound' components") }}).

It will then use this name (plus some other information) to generate a **handle** for the item. Handles are what will be used to reference that item elsewhere around your project.

::: tip
**Names** and **handles** are both 'slug' type strings, and will contain only lowercase, alphanumeric characters plus underscores and dashes.
:::

The name will also be used to generate a default **label** and a **title** for the item. Labels are the text that will be used when the item is referenced in any navigation (for example in the ~@TODOLINK @web', 'web UI') }}) and the title value is the text that will be used anywhere else a human-readable name for the item is required.

Let's look at a simple example of how this works in practice, assuming that we have a component with a view template called `blockquote-large.hbs`:

```tree
├── components
│   └── blockquote-large.hbs
```

* **name**: `blockquote-large`
* **handle**: `blockquote-large`
* **label**: `Blockquote Large`
* **title**: `Blockquote Large`

## Uniqueness

Fractal relies on all items of a particular 'type' having **a unique handle**. So no two components can have the same 'button' handle, for instance, but you _could_ have a component called 'button' **and** documentation page called 'button', if you liked.

So in the following situation, Fractal would not 'see' the second `button` component:

```tree
├── components
│   ├── standard
│   │   └── button.hbs
│   └── special
│       └── button.hbs
```

Luckily this problem is easy to fix! You can take one of two approaches:

1. Use a [collection prefix](#prefixes) to generate unique handles for the items within a collection
2. Set a [bespoke handle](#customising-names-and-handles) for the item in question within the item's configuration file.

## Ordering and hiding

Fractal also supports the use of optional filename 'metadata' for _hiding_ and _ordering_ components and pages. **This metadata is ignored when generating the item's name and other properties.**

Items can be ordered by prefixing file names with a **two digit number** (with leading zero, if required) **followed by a hyphen**. For example:

```tree
├── pages
│   ├── 01-index.md
│   ├── 02-changelog.md
│   └── 03-naming-conventions.md
```

Items can be hidden by **prefixing the filename by an underscore**:

```tree
├── components
│   ├── _hidden-component.hbs
│   └── article.hbs
```

::: tip Note
Any hidden components or variants can still be referenced by other components, included in templates etc, but will not be included in any navigation.
:::

## Prefixes

If you have your components or docs organised into sub-folder ~@TODOLINK @views', 'collections') }} then you can include a collection ~@TODOLINK @configuration-files', 'configuration file') }} to specify properties that will apply to all the items within that collection.

One of the available properties you can set on a collection is the `prefix` property. When you set a value for this property in a parent collection, all children of this collection will have handle's generated that take the format `[prefix]-[item-name]`, making them much more likely to be unique across your whole component library.

Given the following setup:

```tree
├── components
│   ├── standard
│   │   └── button.hbs
│   └── special
│       ├── special.config.json
│       ├── alert.hbs
│       └── button.hbs
```

```js
// special.config.json
{
    "prefix": "sparkly"
}
```

The handles generated for the two components in the `special` collection would be `sparkly-alert` and `sparkly-button`.

## Customising names & handles

You can also specify custom **names** and **handles** in an item's own configuration file to override the ones that would be auto-generated from the file name by Fractal.

See the configuration reference documentation for ~@TODOLINK @components-config', 'components') }} and ~@TODOLINK @docs-config', 'documentation pages') }} for full details of how to set custom names, handles, labels and titles.

There are a few things to note when specifying bespoke names or handles for items:

* **Handles** are generated from **names**, so customising a name **will also change** the item's generated handle (unless that too is overridden).
* Changing the **name** of an item will _not_ prevent its **handle** from having any [prefix](#prefix) applied to it when it is generated. However if you specify a custom **handle** any parent collection prefixes **will be ignored** for that item.

## Referencing other items

You can use an item's handle to reference it throughout your project, using the special `@[handle]` reference syntax.

This syntax can be used in a number of places, including:

* ~@TODOLINK @context-data#static-data-references', 'Static data references') }} in context data
* Including ~@TODOLINK @sub-components', 'sub-component view templates') }} within parent templates
* Specifying ~@TODOLINK @preview-layouts', 'preview layouts') }} in configuration data

So for this example structure and data:

```tree
├── components
│   └── banner.hbs
│   ├── standard
│       ├── button.config.json
│   │   └── button.hbs
│   └── special
│       ├── special.config.json
│       ├── alert.hbs
│       └── button.hbs
```

```js
// components/standard/button.config.json
{
    "handle": "clickme"
}
```
```js
// components/special/special.config.json
{
    "prefix": "sparkly"
}
```


The following references could be used:

```plain
banner.hbs           --> @banner
standard/button.hbs` --> @clickme
special/alert.hbs`   --> @sparkly-alert
special/button.hbs`  --> @sparkly-button
```

For example in a component view template, to include another component as a ~@TODOLINK @sub-components', 'sub-component') }}:

```handlebars
<!-- components/banner.hbs -->
<div class="banner">
    <p>Some banner text here</p>
    <p>Click here if you like this! {{> @sparkly-button}}</p>
</div>
```
