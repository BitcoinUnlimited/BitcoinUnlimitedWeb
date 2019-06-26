'use strict';

module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-clean');

    return {
        dist: {
            src: ['.dist']
        }
    };

};
