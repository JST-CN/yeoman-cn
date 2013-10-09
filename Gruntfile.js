'use strict';

module.exports = function(grunt) {
    var exec = require('child_process').exec,
        fs = require('fs');
    //Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // translation progress log file
        progress_file : 'progress.md',
        // official wiki URL
        official_wiki_url : 'https://github.com/yeoman/yeoman.wiki.git',
        // clean directories
        clean : ['tmp/'],
        copy : {
            en : {
                cwd : 'tmp/',
                src : '**/*md',
                dest: 'wiki-en/',
                expand: true
            }
        }
    });

    // load contrib tasks
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // define the tasks
    grunt.registerTask('update_cn', 'Check the git status to update wiki-cn folder', function(){
        var done = this.async(),
            re_updates = /( M |\?\? )wiki-en\/((\w+\/)*\w+\.md)/,
            re_progress = /\* (.*\.md) /,
            i, lines, wiki_cn_path, wiki_en_path, progress, found;

        exec('git status -s', function(error, stdout, stderr){
            if (error == null){
                progress = grunt.file.read(grunt.config.get('progress_file'));
                lines = stdout.split(/\r?\n/);
                for(i in lines){
                    found = lines[i].match(re_updates);
                    if (found) {
                        wiki_cn_path = 'wiki-cn/' + found[2];
                        wiki_en_path = 'wiki-en/' + found[2];
                        if (progress.indexOf(found[2]) > -1){
                            grunt.log.warn("Warning: " + wiki_en_path + " has been changed on official site, please update your translation.");
                        } else {
                            // it will copy and replace the existing file
                            grunt.file.copy(wiki_en_path, wiki_cn_path);
                            grunt.log.ok("update file: " + found[2]);
                        }
                    }
                }
                done(true);
            }else{
                done(false);
            }
        });
    });

    grunt.registerTask('update_en', 'update wiki-en folder by the original wiki from github', function(){
        var done = this.async();
        // checkout the official wiki
        exec('git clone ' + grunt.config.get('official_wiki_url') + ' tmp/', function(error, stdout, stderr){
            if (error) {
                grunt.log.warn('Warning: Could not clone the official wiki!');
                done(false);
            }
            if (grunt.file.exists('tmp/Home.md')){
                // confirm the wiki exists, then copy files to wiki-en
                grunt.task.run(['copy:en']);
            }
            done(true);
        });
    });

    grunt.registerTask('update', ['clean', 'update_en', 'update_cn', 'clean']);
};
