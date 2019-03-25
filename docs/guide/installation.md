---
title: Installing Fractal
---

# Installing Fractal

Fractal is installed as a Node module in your project using NPM.

There is also an (optional, but recommended) Command-Line Interface (CLI) tool which can be installed globally on your system, again using NPM.

## Installing Fractal in your project

If you have not already created a folder for your project, do so now and then run `npm init` from within the folder to initialise your project directory.

Once this is done, run the following command to install Fractal in your project:

```bash
npm install --save @frctl/fractal
```

## Installing the Fractal CLI tool

Fractal provides a globally-installable CLI tool to make running tasks such as starting the development web server quick and easy. This tool is completely optional - there are plenty of other options (including direct integration with [Gulp, NPM scripts or other build tool](./integration/build-tools.md) if you don't want to use it.

To install the Fractal CLI tool, run the following command from your terminal:

```bash
npm i -g @frctl/fractal
```

You can then run tasks using the `fractal <task-name>` format from your terminal - see the [CLI tool documentation](./cli/) for full details.
