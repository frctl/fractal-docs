---
title: Getting Started
---

# Getting Started

This guide outlines two ways of creating a new Fractal project. The end result is similar but the first one uses the Fractal CLI `new` command to generate the project structure for you, whilst the second goes through in a little more detail some of the steps involved.

Both assume you have installed the Fractal CLI tool globally as described in the [installation guide](./installation.md).

## The TL;DR method

1. Open up your terminal in a folder where you would like your new project to be created.
2. Run the command `fractal new <project-name>`, replacing `<project-name>` with the name of the folder you want be created for your project. For instance, `fractal new example-project`
3. Answer the questions that you are prompted with.
4. Once the initial structure has been set up and the dependencies have been downloaded, `cd` into your new project folder - `cd example-project`
5. Start up the development server: `fractal start --sync`
6. Browse to the 'Local URL' displayed in your terminal to view your component library.

## The 'from scratch' method

The following steps will describe how to create a basic Fractal project from scratch.

It assumes that you have already created a new, empty directory for your project and have installed Fractal as a dependency in your project (as well as the global CLI tool). If not then first check out the [installation guide](./installation.md) for instructions.

### 1. Set up your project structure

The first thing to do is to create directories for your components and for your documentation pages. These can be called whatever you like and can live anywhere in your project directory. In this example they will be called `components` and `docs` and will reside within a parent `src` directory.

So the project directory now looks like this:

```
├── src
│   ├── components
│   └── docs
└── package.json
```

You can of course put anything else you like into your project directory - build files, READMEs, other app code, whatever you like. Fractal will just ignore anything it doesn't recognise.

### 2. Create and configure a Fractal instance

You now need to create a new instance of Fractal, and set a few configuration options to tell it about the structure of your project and other information.

The convention is to do this in a file named `fractal.js` in the root of your project directory:

```
├── src
│   ├── components
│   └── docs
├── fractal.js
└── package.json
```

A very simple `fractal.js` file should look something like this:

```javascript
'use strict';

/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = module.exports = require('@frctl/fractal').create();

/* Set the title of the project */
fractal.set('project.title', 'FooCorp Component Library');

/* Tell Fractal where the components will live */
fractal.components.set('path', __dirname + '/src/components');

/* Tell Fractal where the documentation pages will live */
fractal.docs.set('path', __dirname + '/src/docs');

```

A full list of project configuration options for the various parts of Fractal can be found within their dedicated documentations sections.

<!-- > Unless configured otherwise, the `fractal.js` file is where the CLI tool will expect to find the project setup information. There are many other options for where this can live however, depending the needs of your project. -->

### 3. Create your first component

Components can be very simple, consisting of just a single view template file, or much more complex. To get up and running we are going just create the simplest possible component by adding a single file called `alert.hbs` into **the components directory**.

```html
<!-- src/components/alert.hbs -->
<div class="alert">This is an alert!</div>
```

<!-- There are a number of different ways components can be setup and organised. For this first component however we'll create one in the following way:

1. Create a folder called `<component-name>` in the components directory.
1. Create a view file within there called `<component-name>.hbs` (The `.hbs` extension is the extension for Handlebars templates, the view template engine that Fractal uses by default);
1. Add a configuration file that contains some context data that we want to use to render the view template with. -->

Obviously this isn't a very exciting component at this point, but there is [plenty more you can do](./components) once you've got to grips with the basics.

### 4. Add a documentation index page

Next we'll add a Markdown file to act as our index page. The page will be called `index.md` and should live **in the documentation directory** (i.e. at `src/docs/index.md`).

```md
---
title: FooCorp Components
---
This is the component library for FooCorp. **Feel free to look around!**
```

The Markdown file also contains some YAML front-matter to specify a title for the page - check out the [documentation pages section](./docs) for more details on this and all the other things that you can do with Fractal's powerful documentation engine.

### 5. Start the development server

Now all that's left to do is to fire up the development server and have a look at your component library.

Open up your terminal, make sure you are in the root of your project directory and use the following command to start the server:

```bash
fractal start --sync
```

::: tip
Note that using the `--sync` option here instructs Fractal to use BrowserSync to seamlessly watch your file system for changes and refresh the web UI when you make updates to your files.
:::

Once it has booted up you should see something like this in your terminal window:

<img :src="$withBase('/sync-server-started.png')" alt="Sync Server Screenshot">

If so, visit the 'Local URL' (It should be something like [http://localhost:3000](http://localhost:3000)) and have a look at your component library's web UI.

The [web UI docs](./web) has full details on the options available when starting up development servers, as well as information on how to run static HTML exports of your component library UI and more.
