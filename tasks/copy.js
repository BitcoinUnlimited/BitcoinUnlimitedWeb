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
                        '**/*.png',
                        '**/*.gif',
                        '**/*.ico',
                        '**/*.jpg',
                        '**/*.jpeg',
                        '**/*.gif',
                        '**/*.svg',
                        '**/*.json',
                        '**/*.pdf',
                        '**/*.exe',
                        '**/*.zip',
                        '**/*.gz',
                        '**/*.dmg',
                        '**/*.sig'
                    ],
                    dest: '.dist/'
                }
            ]
        }
    };

};
