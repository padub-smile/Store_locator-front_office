# Usage and delivery

## Table Of Content

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Setting up your local environment](#setting-up-your-local-environment)
  - [SSH configuration](#ssh-configuration)
  - [Access](#access)
  - [Git configuration](#git-configuration)
- [Workflow commands](#workflow-commands)
  - [Running the frontend workflow for development](#running-the-frontend-workflow-for-development)
- [Delivery](#delivery)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->



## Setting up your local environment

**Important : LXC must not be accessed using the `root` user ! Only use the `smile` user which can use `sudo` if needed. ** 

### SSH configuration

On your own machine, edit the `~/.ssh/config` file (create it if needed) and add the following lines :
```
Host dior-sl-dev
      Hostname store_locator.lxc
      User smile
      ForwardAgent yes
```

### Access

After configuration you can access the LXC with :
* development : `ssh ehs-dev`

### Git configuration

**Important : You must set up your git credentials inside your LXC**

```shell
git config --global user.name "[your name]"
git config --global user.email [your email]
```



## Workflow commands

### Running the frontend workflow for development

When developing :
```shell
cd /home/smile/[project]/src/
npm start
```

Building for production :
```shell
cd /home/smile/[project]/src/
npm run build
```



## Delivery

TODO
