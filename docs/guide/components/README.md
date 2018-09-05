---
title: Overview
---

# Components

'Component' is a generic term used by Fractal to describe individual pieces of your website's UI.

**Fractal considers every piece of your markup to be a component**. A component could be a tiny chunk of HTML for a text input, it could be a whole page or it could be something in between.

Unlike some other systems, Fractal does not enforce any specific nomenclature or taxonomy on your components - you are free to organise and name them as you wish.

## What defines a component?

In order for Fractal to recognise your components, they must:

1. Live within the component directory that you specified in your [project settings](../project-settings.html).
2. Have a 'view' file, containing the markup required to render your component. This should have a file extension that matches the one specified in your [project settings](../project-settings.html) (if not specified, the default is `.hbs`).

Optionally, components can also:

* Have per-component configuration and preview data.
* Be organised into directories and sub-directories as required.
* Include as many related files (such as JavaScript, CSS, tests and READMEs) as you like.
* Have one or more *variants* - useful for when you have a component which needs to have a number of very similar instances.

The markup for a component can either be written as 'vanilla' HTML or using a template language of your choosing. By default, Fractal expects that you are using [Handlebars](http://handlebarsjs.com) templates for your component view files, and that these files will have a `.hbs` file extension.

::: tip
The [view templates](../core-concepts/view-templates.html) documentation contains more details on the default Handlebars instance and the [template engine customisation](../customisation/template-engines.html) documentation has full details how to use and configure alternative template engines with Fractal.
:::

Components can be created in two ways. The simplest component is just as a single file containing your markup, whilst more complex, 'compound' components can be created as a directory of associated files.

## Simple components

The simplest possible component consists of just a single [view template](../core-concepts/view-templates.html). The name of the component will be taken to be the name of that file, minus the file extension.

So a `button.hbs` file in the components directory will be identified as a component with the name of 'button'.

```
├── components
│   └── button.hbs
```

Simple components can have [configuration files](../core-concepts/configuration-files.html) associated with them. These must reside in the same directory and have the same name as the component but have a `.config.{js|json|yml}` file extension. So a JSON configuration file for the button component would be called `button.config.json`.

```
├── components
│   ├── button.config.json
│   └── button.hbs
```

The one caveat regarding naming simple components is that they **must not have the same name as the parent folder** that contains them. This is to prevent them being identified as 'compound' components.

## Compound components

Compound components allow you to group associated files (such as asset files, tests, READMEs etc) along with your primary component files.

The simplest compound component consists of a directory containing a single [view template](../core-concepts/view-templates.html). The name of this view file **must** match the name of the directory. A 'block quote' component might therefore look like this:

```
├── components
│   └── blockquote
│       └── blockquote.hbs
```

[Configuration files](../core-concepts/configuration-files.html) can of course be added, again following the same naming convention (`[component-name].config.{js|json|yml}`). Other files added to the directory will then be associated with the component. These files do not have to adhere to any particular naming convention. So a full example may look like:

```
├── components
│   └── blockquote
│   │   ├── blockquote.config.yml
│   │   ├── blockquote.hbs
│   │   ├── fancy-quote.js
│   │   ├── README.md
│   │   └── styles.css
```

## Referencing components

When using Fractal, components (and their variants) are not referenced by their *path*, but instead by their **handle**. A handle is a bit like an ID, and using it instead of a file path means that you can move your components around without having to make updates to files that they are referenced in.

Handles take the form:

```js
@component-name // component
@component-name--variant-name // variant - note the double hyphen seperator.
```

And can be used in many places, such as when including another component via a partial. For instance, one component may include another component like this:

```handlebars
<div class="Parent-component">
    <p>Parent component</p>
    {{> @child-component}}
</div>
```

Other places that handles are used include when specifying a [preview layout](./preview-layouts.html) for a component or when referencing another components [context data](../core-concepts/context-data.html).

::: tip
See the documentation on [naming & referencing](./notes.html) for more details on working with handles in Fractal.
:::

## Ordering components

A component can be given an order by which to sort it with regards to its siblings. This can be done by using the `order` property in the components's configuration file, or it can be done by prefixing the component file name (or the parent folder name for compound components) with a **two-digit number** (with leading zero, if required) **followed by a hyphen**. For example:

```
├── components
│   ├── 01-blockquote.hbs
│   ├── 01-link-list
│   │   └──link-list.hbs
```

## Hiding components

A component can be hidden from navigation and listings by using the `hidden` property in its configuration file or by prefixing its file name (or the parent folder name for compound components) with an underscore like this:

```
├── components
│   ├── _blockquote.hbs
│   ├── _link-list
│   │   └──link-list.hbs
│   └── article.hbs
```

In this case the `blockquote` and `link-list` components would **not** show up in any navigation, but the `article` component would.

::: tip
Any hidden components or variants can still be referenced by other components, included in templates etc, but will not be included in any navigation or similar.
:::

::: tip
You can also combine *ordering* and *hiding* by constructing a file name such as `_01-article.hbs`.
:::
