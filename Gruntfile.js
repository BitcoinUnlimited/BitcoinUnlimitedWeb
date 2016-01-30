'use strict';

module.exports = function(grunt) {

    require('grunt-config-dir')(grunt, {
        configDir: require('path').resolve('tasks'),
        fileExtensions: ['js']
    });

    grunt.registerTask('build', ['babel', 'browserify', 'copy']);

};
