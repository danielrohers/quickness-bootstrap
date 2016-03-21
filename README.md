# static-bootstrap

Bootstrap for static site with gulp + jade + minify + uglify

## Setup

## Structure
```
project
|-- _includes <-- Include files - http://jade-lang.com/reference/includes
|-- _layouts <-- Layout files - http://jade-lang.com/reference/extends
|-- _mixins <-- Mixin files - http://jade-lang.com/reference/mixins
|-- _site <-- Your jade files to site
|-- assets
    |-- images
    |-- javascripts
        |-- example.js
    |-- stylesheets
        |-- example.css
|-- dist
|-- .editorconfig
|-- .gitignore
|-- gulpfile.js
|-- package.json
```

### Installation

[Install NodeJS](https://nodejs.org/en)

```bash
npm install
```

## Launching

Compile files

> gulp dist

Watch files

> gulp watch

Preview compiled files

> npm run preview

## Licence
[Licence](https://github.com/danielrohers/static-bootstrap/blob/master/LICENSE)
