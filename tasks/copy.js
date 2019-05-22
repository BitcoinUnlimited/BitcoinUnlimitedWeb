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
                },
                {
                    expand: true,
                    cwd: 'node_modules/BitcoinUnlimitedWebDownloads',
                    src: [
                        '**/*.exe',
                        '**/*.zip',
                        '**/*.gz',
                        '**/*.dmg',
                        '**/*.sig',
                        '**/*.json',
                    ],
                    dest: './.dist/public/components/bitcoin-unlimited-web-downloads/'
                },
            ]
        }
    };

};
