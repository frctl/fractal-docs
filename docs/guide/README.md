---
title: Overview
---

# Fractal User Guide

::: warning Project update - please read
As you may be aware, there have recently been some changes in Fractal's core team.

In order to safeguard its future, we decided to ask our community for help, and the response has been overwhelming. **We've received so many offers of support in all forms that we can safely say that development will be starting up again shortly. Thank you all!**

We have an active and helpful community on [Fractal's Slack workspace](https://slack.fractal.build/) - join us there for support and tips.

Please see [issue #449](https://github.com/frctl/fractal/issues/449) ('An update on Fractal's future development') for more details about how we are planning on moving Fractal forwards in the future.

Currently the 1.x (master) branch is stable and is being used in many projects. Documentation for this version is available at [https://fractal.build](https://fractal.build). The 2.0 (beta) branch is _not_ recommended for use as there are many outstanding issues + bugs, limited documentation and may change _significantly_ once development begins again.
:::

Fractal is a tool to help you **build** and **document** web component libraries, and then **integrate** them into your projects.

Component (or pattern) libraries are a way of designing and building websites in a modular fashion, breaking up the UI into small, reusable chunks that can then later be assembled in a variety of ways to build anything from larger components right up to whole pages.

Fractal helps you assemble, preview and document website component libraries, and then integrate them into your web sites, apps and build processes to create joined up, 'living' projects.

Fractal can be run from the command line or integrated into your project via its API.

<div style="margin-bottom: 15px;">
<a style="margin-right: 8px;" target="_blank" href="https://www.npmjs.com/package/@frctl/fractal"><img src="https://img.shields.io/npm/v/@frctl/fractal.svg?style=flat-square" alt="NPM Badge"/></a>
<a style="margin-right: 8px;" target="_blank" href="https://travis-ci.org/frctl/fractal"><img src="https://img.shields.io/travis/frctl/fractal/master.svg?style=flat-square" alt="Build Status Badge"/></a>
<a style="margin-right: 8px;" target="_blank" href="http://github.com/frctl/fractal"><img src="https://img.shields.io/github/stars/frctl/fractal.svg?style=social&label=Star" alt="Github Badge"/></a>
</div>

## Requirements

Fractal requires [Node.js](https://nodejs.org) v4.4.7+ to run.

It is the intention that Fractal's Node.js version support will track the latest Node LTS release version.

## Why Fractal?

Existing tools to help you build these component libraries often force you to use a particular template language, a specific build tool or a pre-determined way to organise the individual elements within your library. They generate a web preview to allow you to browse your rendered components, but generally aren't able to help much when it comes to integrating your component library into your build process or live site.

**Fractal is different:**

* **Flexible**: Complete freedom to use whichever templating language, build tool and organisational model best suits your project. Build your components using the same tools that you use for your production site.
* **Integrated**: Fractal can help you seamlessly integrate your component library into your site, app or build tools by including it as a dependency in your build. Custom commands and API integration can help you build a smart, component-focussed workflow to ensure your component library is a living part of your application.
* **Data-driven**: Component preview data can be hardcoded or dynamically generated any way you like - for instance using libraries such as Faker or from HTTP API calls.

The web UI provides a web-based way to browse your component library, either running as a local web server or as a static HTML export. A powerful theme API means you can create your own web UI themes from scratch or by customising the default theme to your liking.

A companion CLI tool helps make running tasks and adding your own CLI commands built upon the Fractal API quick and easy.


## About this guide

This guide will assume basic knowledge of the command line, Node.js and how to use NPM to install and manage project dependencies.
