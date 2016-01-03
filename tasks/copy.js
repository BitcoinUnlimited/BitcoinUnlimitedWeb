'use strict';

module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-copy');

    return {
        target: {
            files: [
                {
                    expand: true,
                    cwd: 'src/',
                    src: [
                        '**/*.html',
                        '**/*.css',
                        '**/*.js',
                        '**/*.png',
                        '**/*.jpg',
                        '**/*.svg',
                        '**/*.pdf'
                    ],
                    dest: '.dist/'
                }
            ]
        }
    };

};
