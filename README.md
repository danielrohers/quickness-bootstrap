# quickness-bootstrap

Bootstrap for static site with [gulp](http://gulpjs.com) + [pug](https://pugjs.org) + [stylus](https://github.com/stevelacy/gulp-stylus) + [uglify](https://www.npmjs.com/package/gulp-uglify) + [image optimization](https://www.npmjs.com/package/gulp-imagemin)

[![Build Status](https://travis-ci.org/danielrohers/quickness-bootstrap.svg?branch=master)](https://travis-ci.org/danielrohers/quickness-bootstrap)
[![devDependency Status](https://david-dm.org/danielrohers/quickness-bootstrap/dev-status.svg)](https://david-dm.org/danielrohers/quickness-bootstrap#info=devDependencies)

## Requirements

#### Install NodeJS
- https://nodejs.org

## Structure

```
|-- project
|   |-- _includes <-- Include files - https://pugjs.org/language/includes.html
|   |   |-- footer.pug
|   |   |-- navbar.pug
|   |-- _layouts <-- Layout files - https://pugjs.org/language/extends.html
|   |   |-- default.pug
|   |-- _mixins <-- Mixin files - https://pugjs.org/language/mixins.html
|   |-- _site <-- Your pug files to site
|   |   |-- contact
|   |   |   |-- index.pug
|   |   |-- features
|   |   |   |-- index.pug
|   |   |-- index.pug
|   |-- assets
|   |   |-- images
|   |   |   |-- example.png
|   |   |-- javascripts
|   |   |   |-- example.js
|   |   |-- stylesheets
|   |   |   |-- example.css
|   |-- dist <-- Folder with compiled files
|   |-- .editorconfig <-- Indentation  styles - http://editorconfig.org
|   |-- .gitignore
|   |-- gulpfile.js
|   |-- package.json
```

## Quick Start

The quickest way to get started with quickness is to utilize the executable `quickness(1)` to generate an application as shown below:

**Create the app:**
```bash
$ npm install -g quickness
$ quickness foo && cd foo
```

**Install dependencies:**
```bash
$ npm install
```
or
```bash
$ yarn
```

**Development:**
```bash
$ npm start
```

**Compile files:**

```bash
$ npm run deploy
```
or
```bash
$ gulp dist
```

## Licence
[Licence](LICENSE)
