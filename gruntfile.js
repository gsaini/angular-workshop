module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    angular_architecture_graph: {
        diagram: {
            files: {
                // "PATH/TO/OUTPUT/FILES": ["PATH/TO/YOUR/FILES/*.js"]
                "architecture": [
                    "public/scripts/**/*.js"
                ]
            }
        }
    },
    jasmine: {
        src: {
            src: [
                'src/js/**/*.js',
                '!src/js/**/*.test.js'
            ],
            options: {
                specs: 'src/js/**/*.test.js',
                junit: {
                    path: 'output/testresults'
                }
            }
        }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-angular-architecture-graph');

  // Default task(s).
  grunt.registerTask('build', ['angular_architecture_graph']);

};