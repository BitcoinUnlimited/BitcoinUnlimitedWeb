'use strict';

module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-stylus');

    return {
        dist: {
            files: {
                '.dist/public/css/site.css': 'src/public/css/site.styl', // this styl file is used by the used
                '.dist/public/css/bu.css': 'src/public/css/bu.styl' // this styl file is shared between the site and the voting app
            }
        }
    };
};
