task("default", ["lint"], function(){});

desc("Linting");
task("lint", [], function(){
    var lint = require("./build/lint/lint_runner.js");
    lint.validateFile("jakefile.js", {}, {});
});