---
title: Configuration reference
---

# Collection configuration

Collection configuration files can specify a number of properties. Some of these apply to the collection itself, while other 'heritable' properties act instead as 'default' values for items contained within the collection.

See the [configuration inheritance](../core-concepts/configuration-files.html#configuration-inheritance) documentation for more details on this process works in practice.

## Collection properties

The following properties apply directly to the collection itself, and will not be inherited by children of the collection.

#### hidden

Whether or not the collection (and all its children) should be hidden from listings and navigation.

```yaml
hidden: false
```

#### label

The label is typically displayed in any UI navigation items that refer to the collection. Defaults to a title-cased version of the collection directory name if not specified.

```yaml
label: 'Website Layouts'
```

An integer order value, used when sorting collections. Overrides any order value set as a property of the directory name if set.

#### order

```yaml
order: 4
```

#### title

The string that is used when a UI needs a title for the collection. Defaults to the value of `label` if not set.

```yaml
title: 'My Favourite Website Layouts'
```

#### root <Badge text="added in v1.5.0" type="tip"/> <Badge text="requires Mandelbrot v1.6+" type="warning"/>

Pull the collection to the navigation top level, next to the defaults "Components" and "Documentation".

```yaml
root: true
```

::: warning
`root` option is available only for component collections, it won’t work for documentation.
:::

## Heritable properties

The majority of properties set in a collection configuration file apply not to the collection itself, but instead act as defaults which cascade down to the items within it.

**For details on the available cascading configuration properties** that will apply to  child items, see the relevant configuration reference sections:

* [Component collections](../components/configuration-reference.html#collection-properties)
* [Documentation collections](../documentation/configuration-reference.html#collection-properties)
