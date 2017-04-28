# Installation instructions

## Table Of Content

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Setting up the environment](#setting-up-the-environment)
  - [Create lxc](#create-lxc)
  - [LXC configuration](#lxc-configuration)
- [Installing dependencies](#installing-dependencies)
  - [Installing general packages](#installing-general-packages)
- [Installing development dependencies](#installing-development-dependencies)
  - [Installing general packages](#installing-general-packages-1)
  - [Installing nvm](#installing-nvm)
  - [Installing node](#installing-node)
  - [Node dependencies](#node-dependencies)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->



## Setting up the environment

### Create lxc

Deploy new LXC :
```shell
sudo cdeploy [project] jessie-php
```

### LXC configuration

Add smile user to sudo group :
```shell
ssh root@[project].lxc
apt-get install sudo
adduser smile sudo
```

Make sudo folder readable :
```shell
chmod 755 /root
```

Then connect with the smile user :
```shell
ssh -A smile@[project].lxc
```



## Installing dependencies

### Installing general packages

Install following packages :
```shell
sudo apt-get update
sudo apt-get install aptitude
sudo aptitude install curl ca-certificates
```



## Installing development dependencies

### Installing general packages

Install following packages :
```shell
sudo aptitude install git build-essential bash-completion libssl-dev
```

### Installing nvm

Install nvm :
```shell
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
```

### Installing node

Install node :
```shell
nvm install node
```

### Node dependencies

Install commands globally with npm :
```shell
npm install -g doctoc getstorybook
```
