  /*
 * Generated on 2014-07-16
 * generator-assemble v0.4.10
 * https://github.com/assemble/generator-assemble
 *
 * Copyright (c) 2014 Hariadi Hinta
 * Licensed under the MIT license.
 */

'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// '<%= config.src %>/templates/pages/{,*/}*.hbs'
// use this if you want to match all subfolders:
// '<%= config.src %>/templates/pages/**/*.hbs'

module.exports = function(grunt) {

  require('time-grunt')(grunt);

  // Project configuration.
  grunt.initConfig({

    config: {
      src: 'src',
      dist: 'dist'
    },
    compass: {
      dist: {
        options: {
          config: 'compass.rb',
          force: true
        }
      }
    },
    autoprefixer: {
        single_file: {
            src: '<%= config.dist %>/assets/css/styles.css',
            dest: '<%= config.dist %>/assets/css/styles.css'
        }
    },
    copy: {
      javascript: {
        files: [
          {
            expand: true,
            flatten: false,
            cwd: '<%= config.src %>/assets/js/',
            src: ['**/*.js'],
            dest: '<%= config.dist %>/assets/js/'
          }
        ]
      }
    },
    watch: {
      assemble: {
        files: ['<%= config.src %>/{content,data,templates}/{,*/}*.{md,hbs,yml}'],
        tasks: ['assemble']
      },
      copy: {
        files: ['<%= config.src %>/assets/js/{,*/}*.js'],
        tasks: ['copy']
      },
      autoprefixer: {
        files: ['<%= config.src %>/assets/scss/**/{,*/}*.scss'],
        tasks: ['autoprefixer']
      },
      compass: {
         files: ['<%= config.src %>/assets/scss/**/{,*/}*.scss'],
         tasks: ['compass', 'autoprefixer'],
         options: { livereload: true }
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= config.dist %>/{,*/}*.html',
          '<%= config.dist %>/assets/{,*/}*.css',
          '<%= config.dist %>/assets/{,*/}*.js',
          '<%= config.dist %>/assets/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: [
            '<%= config.dist %>'
          ]
        }
      }
    },

    assemble: {
      pages: {
        options: {
          flatten: true,
          assets: '<%= config.dist %>/assets',
          layout: '<%= config.src %>/templates/layouts/default.hbs',
          data: '<%= config.src %>/data/*.{json,yml}',
          partials: '<%= config.src %>/templates/partials/*.hbs'
        },
        files: {
          '<%= config.dist %>/': ['<%= config.src %>/templates/pages/*.hbs']
        }
      }
    },

    // Before generating any new files,
    // remove any previously-created files.
    clean: ['<%= config.dist %>/**/*.{html,xml}']

  });

  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks( 'grunt-contrib-compass' );
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');


  grunt.registerTask('server', [
    'clean',
    'assemble',
    'connect:livereload',
    'watch',
    'copy',
  ]);

  grunt.registerTask('build', [
    'clean',
    'assemble',
    'autoprefixer',
  ]);

  grunt.registerTask('default', [
    'build'
  ]);

};
