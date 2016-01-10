'use strict';

module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-babel');

    return {
        dist: {
            files: [
                {
                    expand: true,
                    cwd: 'src/',
                    src: ['**/*.js'],
                    dest: '.dist/'
                }
            ]
        }
    };

};
