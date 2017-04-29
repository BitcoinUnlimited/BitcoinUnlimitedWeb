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
                '**/*.gif',
                '**/*.jpg',
                '**/*.jpeg',
                '**/*.gif',
                '**/*.svg',
                '**/*.json',
                '**/*.pdf',
                '**/*.exe',
                '**/*.zip',
                '**/*.gz'
            ],
            tasks: ['copy']
        },
        stylus: {
            files: ['src/public/css/*.styl'],
            tasks: ['stylus']
        }
    };

};
