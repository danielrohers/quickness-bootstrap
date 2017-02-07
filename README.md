# quickness-bootstrap

Bootstrap for static site with [gulp](http://gulpjs.com) + [pug](https://pugjs.org) + [minify](https://www.npmjs.com/package/gulp-clean-css) + [uglify](https://www.npmjs.com/package/gulp-uglify) + [image optimization](https://www.npmjs.com/package/gulp-imagemin)

[![Build Status](https://travis-ci.org/danielrohers/quickness-bootstrap.svg?branch=master)](https://travis-ci.org/danielrohers/quickness-bootstrap)
[![devDependency Status](https://david-dm.org/danielrohers/quickness-bootstrap/dev-status.svg)](https://david-dm.org/danielrohers/quickness-bootstrap#info=devDependencies)

## Requirements

#### Install NodeJS
- https://nodejs.org

#### Install dependencies
```bash
[sudo] npm install
```
or
```bash
yarn
```

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

## Launching

Development

```bash
$ npm start
```
or
```bash
$ gulp serve
```

Compile files

```bash
$ npm run deploy
```
or
```bash
$ gulp dist
```

## Licence
[Licence](LICENSE)
