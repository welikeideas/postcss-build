# postcss-build

This repository demonstrates how to use [PostCSS](https://github.com/postcss/postcss) in your build process.

To see an example of how to build `src/main.css` in your preferred build tool, simple switch to the branch to see how it can be used as part of the build process. This file is the [example](https://jonathantneal.github.io/precss/) from [PreCSS](https://github.com/jonathantneal/precss) and therefore requires the use of the PreCSS PostCSS plugin.


### Gulp
To see how to use PostCSS with [Gulp](http://gulpjs.com), switch to the gulp branch.

### Grunt
To see how to use PostCSS with [Grunt](http://gruntjs.com), switch to the grunt branch.

### Node
You can also build your PostCSS files using [Node](https://nodejs.org) which removes the need for a task runner like Gulp or Grunt. Switch to the node branch.

## Using the Gulp example
This assumes you have [node](https://nodejs.org) and [npm](https://www.npmjs.com) installed.

Firstly, you'll need to install the node modules using npm using the following command:

`npm install`

Once installed, you can then run the following command to build `src/main.css`:

`gulp`

This builds the css using Gulp and the PostCSS modules specified in `gulpfile.js` and saves it to `build/main.css`, along with source maps for the minified css.
