---
title: Overview
---

# Fractal CLI Tool

The Fractal CLI tool is an optional, globally-installed NPM package that provides some useful commands for working with Fractal projects.

## Installation & setup

The Fractal CLI tool can be installed globally via NPM:

```bash
npm i -g @frctl/fractal
```

To use the CLI tool with your Fractal project, you must first make sure you have a  [project settings file](../project-settings.html) (typically called `fractal.config.js`) in the root of your project directory. This file should export a configured Fractal instance. For example:

```javascript
// fractal.config.js

var fractal = require('@frctl/fractal').create();
fractal.set('project.title', 'FooCorp Component Library');
fractal.components.set('path', __dirname + '/src/components');

module.exports = fractal; // export the configured Fractal instance for use by the CLI tool.
```

## Running commands

Commands are run from the command line, and typically take the format:

```bash
fractal <command-name> [args] [opts]
```

For example, to start the web UI dev server using the BrowserSync option, you can use the command:

```bash
fractal start --sync
```

When running commands in this format, the command will run and then immediately exit (unless it is watching or running a server in the background).

::: tip
Fractal also provides a more immersive [interactive mode](./interactive-mode.html) that makes running multiple commands easier and faster.
:::

## Command types

The Fractal CLI supports two different types of command - _global_ and _project-level_ commands.

### Global commands

Global commands can be run from anywhere *outside of a project folder*. An example of a global command is the `fractal new <project-name>` command which helps you quickly create a new Fractal project file structure.

### Project commands

Project-level commands must be run from within the root directory of your project, and require the presence of a [project settings file](../project-settings.html) in the root of the project directory.

An example of a project-level command would be the `fractal start` command that starts up the [project settings file](../web/development-server.html) for the web UI.

<!--
* Need to restart CLI on changes to project config file.
-->
