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
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-angular-architecture-graph');

  // Default task(s).
  grunt.registerTask('default', ['angular_architecture_graph']);

};