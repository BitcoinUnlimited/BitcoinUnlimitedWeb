'use strict';

module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-babel');

    return {
        dist: {
            options: {
                compact: true,
                comments: false
            },
            files: [
                {
                    expand: true,
                    cwd: 'src/',
                    src: ['*.js'],
                    dest: '.dist/'
                }
            ]
        }
    };

};
