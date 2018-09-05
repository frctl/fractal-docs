---
title: Collection
---

# Collection

Collection objects provide a set of utility methods for working with groups of items, such as components or documentation pages.

::: warning
It's important to note that Collection objects are _immutable_ - when you call a filter method or similar you get back a new Collection object, leaving the original object intact.
:::

The documentation below assumes that you already have a reference to a collection object, such as the component source object:

```
const collection = fractal.components;
```

Collections are themselves _iterators_, so you can iterate over them directly using expressions such as the new ES2015 `for...of` loops:

```js
for (let item of collection) {
    console.log(item.handle);
}
```

Collections can contain sub-collections within them. If you want to iterate over _all_ items in a collection (as opposed to only the collection's direct children) you can use the `.flatten()` method:

```js
for (let item of collection.flatten()) {
    console.log(item.handle);
}
```

## Methods

### .find(args...)

Find an item within the collection. Search is recursive down through any sub-collections.

```js
const button = collection.find('@button');
const sameButton = collection.find('handle', 'button');
const sameButtonAgain = collection.find(function(item){
    return item.handle === 'button';
});
```

### .filter(predicate...)

Returns a new collection that is the result of filtering the old collection using the `predicate`arguments.

```js
const hiddenItems = collection.filter('isHidden', true);
const taggedWithFoo = collection.filter(function(){
    return item.tags.includes('foo');
});
```

### .flatten()

Return a new collection created by recursing down through the original collections items and all its sub-collections and extracting out all non-collection entities.

```js
const allItems = collection.flatten();
```

### .flattenDeep()

Same as flatten, except in the case of component collections will also pull out any variants of the components as well as the root components themselves.

```js
const allVariants = collection.flattenDeep();
```

### .orderBy(args...)

Returns a new collection that is the result of ordering the old collection using according to the arguments supplied.

```js
const subCollectionsFirstThenByTitle = collection.orderBy(['isCollection', 'title'], ['asc', 'asc']);
```

### .forEach(callback)

Iterate over all of the items in the collection, calling the callback for each one.

```js
collection.forEach(function(item){
    console.log(item.title);
});
```

### .map(callback)

Return a new collection made up of mapped items from the source collection.

```js
const newCollection = collection.forEach(function(item){
    collection.title = collection.title.toUpperCase();
    return collection;
});
```

### .first()

Get the first item in the collection

```js
const first = collection.first();
```

### .last()

Get the last item in the collection

```js
const first = collection.last();
```

### .eq(pos)

* `pos`: **Integer**

Get the item at position `pos` in the collection (collections are zero-indexed).

```js
const third = collection.eq(2);
```

### .toArray()

Converts the collection to an array of items, as opposed to an iteratable object.

```js
const items = collection.toArray();
```

### .toJSON()

Returns a simplified, 'template engine friendly' object representation of the collection and all it's children, recursively.

```js
const items = collection.toJSON();
```

### .toStream()

Turns the collection into a Gulp-compatible Vinyl stream.

```js
const stream = collection.toStream();
```


## Properties

### .size

The number of items in the collection (does **not** include items within sub-collections).
