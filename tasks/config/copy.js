/**
 * Copy files and folders.
 *
 * ---------------------------------------------------------------
 *
 * # dev task config
 * Copies all directories and files, exept coffescript and less fiels, from the sails
 * assets folder into the .tmp/public directory.
 *
 * # build task config
 * Copies all directories nd files from the .tmp/public directory into a www directory.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-copy
 */
module.exports = function(grunt) {

	grunt.config.set('copy', {
		dev: {
			files: [{
				expand: true,
				cwd: './assets',
				src: ['**/*.!(coffee|less)'],
				dest: '.tmp/public'
			}]
		},
		build: {
			files: [{
				expand: true,
				cwd: '.tmp/public',
				src: ['**/*'],
				dest: 'www'
			}]
		},
    jsDeps: {
      files: [{
        '.tmp/public/js/dependencies/angular.js': 'bower_components/angular/angular.js',
        '.tmp/public/js/dependencies/angular-animate.js': 'bower_components/angular-animate/angular-animate.js',
        '.tmp/public/js/dependencies/angular-aria.js': 'bower_components/angular-aria/angular-aria.js',
        '.tmp/public/js/dependencies/angular-messages.js': 'bower_components/angular-messages/angular-messages.js',
        '.tmp/public/js/dependencies/angular-material.js': 'bower_components/angular-material/angular-material.js'
      }]
    },
    cssDeps: {
      files: [{
        '.tmp/public/styles/angular-material/angular-material.css': 'bower_components/angular-material/angular-material.css'
      }]
    }
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
};
