'use strict';

module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-browserify');

    return {
        dist: {
            options: {
                transform: [
                    [
                        'babelify', {
                            compact: true,
                            comments: false
                        }
                    ]
                ]
            },
            files: {
                '.dist/public/bundle.js': 'src/public/views/index.jsx'
            }
        }
    };

};
