'use strict';

module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-watch');

    return {
        browserify: {
            files: ['src/**/*.jsx'],
            tasks: ['browserify']
        },
        babel: {
            files: ['src/**/*.js'],
            tasks: ['babel']
        },
        copy: {
            files: [
                '**/*.html',
                '**/*.css',
                '**/*.png',
                '**/*.jpg',
                '**/*.jpeg',
                '**/*.svg',
                '**/*.json',
                '**/*.pdf',
                '**/*.exe',
                '**/*.zip',
                '**/*.gz'
            ],
            tasks: ['copy']
        }
    };

};
