var gulp = require('gulp');
var git = require('git-rev-sync');

__workDir = __dirname;
__devTool = 'cheap-source-map';
__host = '127.0.0.1';
__port = 8090;
__gitHash = git.short();
__alias = {
    "assets":__workDir + "/src/common/assets/",
    "src":__workDir + "/src/"
};

require('@fabalous/runtime-web/config/gulp/RuntimeWeb.config')(gulp);
require('@fabalous/runtime-node/config/gulp/RuntimeNode.config')(gulp);

gulp.task('develop', ['runtime-web-watch', 'runtime-node-watch']);