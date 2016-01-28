module.exports = function(grunt) {

    // let's do this...
    grunt.initConfig({
        postcss: {
            options: {
                map: {
                    inline: false
                },
                processors: [
                    require('precss')(),
                    require('autoprefixer')(),
                    require('cssnano')()
                ]
            },
            dist: {
                src: 'src/main.css',
                dest: 'build/main.css'
            }
        }
    });

    // load the grunt npm module
    grunt.loadNpmTasks('grunt-postcss');

    // specify the default task(s)
    grunt.registerTask('default', ['postcss']);

}
