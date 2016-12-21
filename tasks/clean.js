'use strict';

module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-clean');

    return {
        bower: {
            src: ['.dist/public/components']
        },
        dist: {
            src: ['.dist']
        }
    };

};
