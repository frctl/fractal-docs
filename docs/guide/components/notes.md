---
title: Notes
---

# Notes

It's often very important to be able to clearly document the individual components in a system. You might want to include rationale about a component's structure, add notes on how and where it can be used or include any other useful information for the people who may be using the component library.

Whilst Fractal lets you create rich standalone [documentation pages](../documentation/), often it makes more sense for individual components' documentation to live alongside the component itself. There are a few ways you can do this in Fractal:

## The README.md file

[Components](../components/#components) and [variants](../component/#variants) can include notes in a `README.md`,
`<component-name>.readme.md`, or `<component-name>--<variant-name>.readme.md` file within their component folder:

```
├── components
│   ├── blockquote
│   │   ├── blockquote.hbs
│   │   └── README.md
|   ├── button.hbs
|   ├── button.readme.md
|   ├── button--primary.hbs
|   ├── button--primary.readme.md   
```

If present, the contents of the README file will be run through the **full Fractal documentation parser** before being displayed to the user in places such as the [web UI](../web/). That means that the file will be rendered with the documentation template engine (Handlebars by default) before being passed through a Markdown parser.

This means you can do almost anything that you can do in standard documentation pages in your component-specific documentation, including creating ['dynamic' documentation](../documentation/dynamic-docs.html) that is tied tightly to the component's templates or context data.

::: warning
Fractal does not support the use of YAML front-matter in README.md files.
:::

## Notes in config files

If you do not want to include a README.md file, you can also specify component notes in a configuration file using the `notes` property:

```js
// my-component.config.json
{
    "notes": "These are some **notes** about the component"
}
```

Notes created in this format will also be run through the template engine and Markdown parser before display.
