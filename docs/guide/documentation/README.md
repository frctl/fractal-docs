---
title: Overview
---

# Documentation Pages

Fractal makes it easy to create documentation for your project. Documentation pages are written in [Github-flavoured Markdown](https://guides.github.com/features/mastering-markdown/) and support the use of YAML 'front-matter' for configuration, as well as configuration via standard [configuration files](../core-concepts/configuration-files.html).

Additionally, if you need to generate more complex documentation, you can use a [template language](../core-concepts/view-templates.html) of your choosing (as for [components](../components/), the default is Handlebars) to help dynamically generate pages.

Pages can be organised into as many folders and sub-folders as is necessary for your project, but must all reside in the documentation folder that you have configured in your [project settings](../project-settings.html).

## A simple page

A very simple documentation page might look like this:

```markdown
This is some documentation for the project. Still to do:

* Finish the docs
* Write tests
* Make the tea
```
Fractal will then take that and turn it into HTML ready for display:

```html
<p>This is some documentation for the project. Still to do:</p>
<ul>
    <li>Finish the docs</li>
    <li>Write tests</li>
    <li>Make the tea</li>
</ul>
```
If there is no configuration data available (see below) then Fractal will generate metadata (such the title of the page) based on the file name.

## YAML front-matter

YAML 'front-matter' is a way of specifying configuration data at the top of a markdown file. It is a block of YAML that is fenced-off from the rest of the document via triple hyphen (`---`) separators. For example:

```yaml
---
title: Change Log
---
This is the body of the page
```

In this case we are specifying that we want the title of the page (used in the web UI and other places) to be 'Change Log'. To see a full list of available configuration items, check out the [documentation configuration reference](../documentation/configuration-reference.html).

If you don't want to use YAML front matter, you can also use a [separate configuration file](../core-concepts/configuration-files.html) in the same way as you would for a component.

## Using data in page templates

Because pages are rendered using Handlebars (or another [template engine](../customisation/template-engines.html) of your choosing) before being run through the Markdown processor, you can easily dynamically generate sections of pages.

As for components, any [context data](../core-concepts/context-data.html) that you wish to have access to in the page must be specified under the `context` property. You can then use Handlebars to generate content based on that data.

For instance, if you are using YAML front matter, you could re-create the example at the start of this page as follows:

```handlebars
---
title: Project Overview
context:
  items:
    - Finish the docs
    - Write tests
    - Make the tea
---
This is some documentation for the project. Still to do:

{{#each items}}
* {{ this }}
{{/each}}
```

::: tip
It's important to note that the template engine rendering happens **before** the Markdown parsing, so you are free to use it to generate Markdown or HTML (which is ignored by Markdown parsers).
:::

### Accessing page metadata

Pages only have direct access to data specified within the `context` object. If you need to access information about the page itself (such as the `title`) you have to use the special `_self` variable, as follows:

```handlebars
{{ _self.title }} <!-- Outputs: Project Overview -->
```

This is to prevent page configuration data clashing with context data intended to be used when rendering the page.

Note that the `_self` variable is actually a JSON representation of the page object itself, and not just a regurgitation of configuration data (i.e. `title` will have a value whether or not it is overridden in the configuration, as Fractal generates one for every page).

## Ordering pages

Pages can be ordered by prefixing file names with a **two digit number** (with leading zero, if required) **followed by a hyphen**. For example:

```
├── pages
│   ├── 01-index.md
│   ├── 02-changelog.md
│   └── 03-naming-conventions.md
```

Order prefixes are ignored when auto-generating page titles.

Alternatively, you can use the `order` property in the page's configuration file to specify an order without amending the filename.

## Hiding pages

Pages can be hidden from listings and navigation in two ways. You can either specify `hidden: true` in the pages's configuration file or you can prefix the page's filename with an underscore. So in the following example, the `changelog` page would not show up in any navigation:

```
├── pages
│   ├── _changelog.md
│   ├── index.md
│   └── naming-conventions.md
```

::: tip
You can also combine *ordering* and *hiding* by constructing a filename such as `_01-changelog.md`.
:::

## Escaping Handlebars expressions

Sometimes you may want to show a piece of code that itself contains a Handlebars expression, without that expression being parsed out at the rendering step. To do this you can prefix the expression with a backslash:

```handlebars
\{{ foo }}
```

This will prevent the Handlebars template engine from attempting to render that variable and will instead just keep it as a string.
