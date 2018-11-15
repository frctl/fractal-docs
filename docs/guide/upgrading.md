---
title: Upgrading
---

# Upgrade Guide

## Upgrading from a pre-1.0 version

If you have been using a pre-1.0 version of Fractal, you will need to update both the local Fractal version in your project dependencies **and** your Fractal CLI tool version.

### CLI tool

Update your CLI tool to the latest version:

```bash
npm i -g @frctl/fractal
```

### Per-project dependencies

Update the Fractal version in your project's `package.json` file:

```js
{
  "dependencies": {
    "@frctl/fractal": "^1.0.0"
  }
}
```

Then run `npm update` from within your project directory to install the latest 1.x version of Fractal.

### Breaking changes

Fractal v1.x contains a number of breaking changes with respect to the 0.x branch. Most of which are centered around project setup and configuration.

* **Project setup:** See the [project setup](./project-settings.md) documentation for details on the updated syntax for creating and configuring a new Fractal instance.
* **Template engines**: The syntax for registering and configuring template engines has changed. See the documentation for the [default Handlebars engine](./core-concepts/view-templates.md) and the [template engine customisation](./customisation/template-engines.md) documentation for full details.
* **Themes**: Theme loading and configuration has had significant changes, and the default theme (Mandelbrot) has been updated accordingly. See the [Mandelbrot](./web/default-theme.md) and the more general [web theme customisation](./customisation/web-themes.md) docs for info.
