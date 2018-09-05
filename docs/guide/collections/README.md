---
title: Overview
---

# Collections

Collections are just groups of related components or documentation pages. When you create a directory that contains one or more components or pages inside it, you have created a collection.

However beyond just grouping items, collections are useful because they can have their own [configuration files](../core-concepts/configuration-files.html) within which you can specify properties that will then be **applied to all child items** within that collection, saving you from having to specify them on each item. Of course, individual components, pages (or indeed sub-collections) can still [override these defaults](../core-concepts/configuration-files.html#configuration-inheritance) on a case-by-case basis if needed.

## Configuration files

A collection configuration file follows the same rules as component and documentation page configuration files. It must reside in the collection directory and have the same name as the directory itself, followed by `.config.{js|json|yml}`, depending on the format.

So a component collection called 'layouts' could have a YAML configuration file called `layouts.config.yml`:

```
├── components
│   ├── layouts
│   │   ├── layouts.config.yml
│   │   ├── full-screen.hbs
│   │   └── sidebar.hbs
```

A sample collection configuration file contents might look like this:

```yaml
title: "Website Layouts"
status: "ready"
context:
    title: "My Website"
```

### Available config properties

The [collection configuration reference](./configuration-reference.html) contains full details of all the collection properties available for use.

## Ordering collections

A collection can be given an order by which to sort it with regards to its siblings. This can be done by using the `order` property in the collection's configuration file, or it can be done by prefixing the collection directory name with a **two-digit number** (with leading zero, if required) **followed by a hyphen**. For example:

```
├── components
│   ├── 01-patterns
│   │   └── article.hbs
│   └── 02-layouts
│       └── sidebar.hbs
```

## Hiding collections

A collection can be hidden from navigation and listings by using the `hidden` property in its configuration file or by prefixing the collection directory name with an underscore like this:

```
├── components
│   ├── _layouts
│   │   └── sidebar.hbs
│   └── patterns
│       └── article.hbs
```

In this case the `layouts` collection would not show up in any navigation, but the `patterns` collection would.

::: tip Note
Any components or variants *within* hidden collections can still be referenced by other components, included in templates etc.
:::

::: tip
You can also combine *ordering* and *hiding* by constructing a directory name such as `_01-patterns`.
:::
