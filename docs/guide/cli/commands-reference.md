---
label: Commands reference
---

# Commands reference

## Project commands

The default installation of the Fractal CLI tool provides a number of project-level commands:

### start

Start a web UI local development server. See the [dev server documentation](../web/development-server.html) for more details and options.

```bash
fractal start
```

Available options:

* `-p, --port <port-number>` - the port number to use, for example `5000`.
* `-t, --theme <theme-name>` - the custom theme to use.
* `-s, --sync` - whether to use the integrate [BrowserSync](../web/development-server.html#browsersync-integration) instance to provide auto-refresh and syncing capabilities
* `-w, --watch` - whether to watch components and documentation pages for changes

### build

Export a static HTML version of the web UI into a directory in the root of your project. See the [HTML export docs](../web/exporting-static-html.html) for more details and options.

```bash
fractal build
```

Available options:

* `-t, --theme <theme-name>` - the custom theme to use.

### help

Show help info, including a list of all available commands.

```bash
fractal help
```

## Global commands

The default installation of Fractal CLI tool provides one **global** command. Note that global commands *cannot* be run when in [interactive mode](./interactive-mode.html) or within an existing Fractal project.

### new

Create a new Fractal project skeleton. Sets up the basic file structure (including creating a basic `fractal.config.js` project settings file) for you.

```bash
fractal new <directory-name>
```

The `directory-name` argument will determine the name of the directory to create. It can be a relative path name, too - for instance `example/my-new-project`.
