---
title: Interactive Mode
---

# Interactive Mode

As well as exposing 'traditional' terminal commands, Fractal also provides an *interactive CLI* for you to work with on your projects. This greatly speeds up running commands and allows you to do things like start a dev server instance and then still be able to run subsequent commands in the same CLI window.

You launch the interactive CLI by running the `fractal` command in your terminal. This will drop you into interactive mode, and you should see an info box appear in your terminal, with a prompt beneath it.

You can tell when you are in interactive mode because your terminal prompt will look like this:

```bash
fractal ➤
```

You can now enter commands to interact with your fractal project.

## Running commands

Commands in interactive mode are identical to the ~@TODOLINK @commands', 'standard-format commands') }}, except that you no longer need to prefix them with `fractal`.

For example, to start the dev server when in interactive mode, just use the `start` command. Flags can be used as per usual:

```bash
start --sync
```

::: tip
Servers will run in the background without blocking the CLI so you can start a dev server instance and then run multiple subsequent commands without having to open up a new terminal window.
:::

## Interactive CLI tips

* You can use the `help` command at any point to show all the available commands.
* To **exit** the interactive CLI and go back into your 'regular' terminal, use the `exit` command.
* Global (as opposed to project-level) commands cannot be run from within the interactive CLI.
