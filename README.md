# Hạnh Store
### Tasks
| Task Name | Description | Environment |
| :------------- | :------------- | :------------- |
| `yarn start` or `npm run start` | Generate a development environment, start the server and watch for changes | Development
| `yarn watch` or `npm run watch` | Start the server and watch for changes | Development
| `yarn build` or `npm run build` | Compile production code | Production
| `yarn deploy` or `npm run deploy` | Compile production code and deploy to GitHub Pages | Production

## Structure

```
|--dist/                   # →  Static version of the website ready to upload (never edit)
|
|--gulpfile.babel.js/      # →  Gulpfile config and tasks
|--node_modules/           # →  Node.js packages (never edit)
|--src/                    # →  Source files
|  |--assets/              # →  Assets
|  |  |--fonts/            # →  Assets: Fonts
|  |  |--img/              # →  Assets: Images
|  |--modules/             # →  Modules: Multi-part components e.g. Navbar (HTML, CSS and JS)
|  |--scripts/             # →  JS
|  |  |--components/       # →  JS: Components
|  |  |--app.js            # →  JS: Main file
|  |--styles/              # →  Styles: ITCSS Architecture + BEM Methodology
|  |  |--main.scss         # →  Styles: Main stylesheet file
|  |--templates/           # →  Site templates (Twig.js)
|  |  |--layouts/          # →  Templates: Layouts
|  |  |--components/       # →  Templates: Components
|  |  |--pages/            # →  Templates: Pages
|--.babelrc                # →  Babel presets
|--.browserslistrc         # →  Browserslist config, browsers that we support
|--.eslintrc               # →  ESLint config
|--.gitignore              # →  Gitignore
|--.stylelintrc            # →  Stylelint config
|--package-lock.json       # →  NPM lock file (never edit)
|--package.json            # →  Node.js dependencies and scripts
|--webpack.config.js       # →  Webpack config
|--yarn.lock               # →  Yarn lock file (never edit)
```

## Copyright and license

Copyright 2018-2019 Tomasz Bujnowicz under the [MIT license](http://opensource.org/licenses/MIT).
