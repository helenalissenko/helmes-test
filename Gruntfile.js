module.exports = function(grunt) {
    grunt.initConfig({
        distFolder: 'dist',
        pkg: grunt.file.readJSON('package.json'),

        less: {
            options: {
                paths: ["assets/css/"],
            },
            files: {
                "assets/css/styles.css": "assets/css/styles.less"
            }
        },

        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['assets/js/*.js'],
                dest: '<%= distFolder %>/main.js'
            }
        },

        concat_css: {
            options: {
                separator: ';'
            },
            all: {
                src: ["assets/css/*.css"],
                dest: "styles.css"
            },
        },
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-concat-css');

    grunt.registerTask('build', ['less', 'concat', 'concat_css']);
};