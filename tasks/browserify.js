'use strict';

module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-browserify');

    return {
        dist: {
            options: {
                transform: [
                    [
                        'babelify'
                    ]
                ]
            },
            files: {
                '.dist/public/bundle.js': 'src/public/views/main.jsx'
            }
        }
    };

};
