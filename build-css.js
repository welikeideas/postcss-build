// load node modules
var fs = require('fs');
var postcss = require('postcss');

// set our variables for the css to keep things organised
var INPUT = 'src/main.css';
var OUTPUT = 'build/main.css';

// read the contents of our css file
var CSS = fs.readFileSync('src/main.css');

// let's do this...
postcss([
    require('precss'),
    require('autoprefixer'),
    require('cssnano')
])
.process(CSS, { from: INPUT, to: OUTPUT, map: { inline: false } })
.then(function (result) {
    fs.writeFileSync('build/main.css', result.css);
    if (result.map) {
        fs.writeFileSync(OUTPUT + '.map', result.map);
    }
});
