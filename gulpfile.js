//define gulp plugins
var gulp = require("gulp");
var jshint = require("gulp-jshint");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var mcss = require("gulp-mcss");
var mocha = require("gulp-mocha");
var util = require("gulp-util");
var qunit = require("gulp-qunit");

gulp.task("default", function(){
//This is where code for default task goes
});

//This is a sub task I teased out from the js tasks to create a JavaScript hint tool to help with coding.
gulp.task("hint", function(){
    gulp.src(["public/js/**/*.js", "!public/js/**/*.min.js"])
        .pipe(jshint())
        .pipe(jshint.reporter("default"))
});

//minifies and concats for load speed, the following deal only with the public folder and all subfolders.
gulp.task("bootstrap", function(){
    return gulp.src("public/bootstrap-filter-dropdown/**/*")
        .pipe(gulp.dest("build/public/bootstrap-filter-dropdown"))
});

gulp.task("css-to-build", function(){
    return gulp.src("public/css/**/*.min.css")
        .pipe(gulp.dest("build/public/css"))
});

gulp.task("css", ["css-to-build"], function(){
    return gulp.src(["public/css/**/*.css", "!public/css/**/*.min.css"])
        .pipe(mcss())
        .pipe(concat("main.css"))
        .pipe(gulp.dest("build/public/css"))
});

gulp.task("dist",function(){
    return gulp.src("public/dist/**/*")
        .pipe(gulp.dest("build/public/dist"))
});

gulp.task("font-awesome",function(){
    return gulp.src("public/font-awesome/**/*")
        .pipe(gulp.dest("build/public/font-awesome"))
});

gulp.task("fonts", function(){
    return gulp.src("public/fonts/**/*")
        .pipe(gulp.dest("build/public/fonts"))
});

gulp.task("img", function(){
    return gulp.src("public/img/**/*")
        .pipe(gulp.dest("build/public/img"))
});

gulp.task("js-to-build", function(){
    return gulp.src("public/js/**/*.min.js")
        .pipe(gulp.dest("build/public/js"))
});

gulp.task("js", ["hint", "js-to-build"], function(){
    return gulp.src(["public/js/**/*.js", "!public/js/**/*.min.js"])
        .pipe(uglify())
        .pipe(concat("app.js"))
        .pipe(gulp.dest("build/public/js"))
});

gulp.task("less", function(){
    return gulp.src("public/less/**/*")
        .pipe(gulp.dest("build/public/less"))
});

gulp.task("pages", function(){
    return gulp.src("public/pages/**/*")
        .pipe(gulp.dest("build/public/pages"))
});

gulp.task("templates", function(){
    return gulp.src("public/templates/**/*")
        .pipe(gulp.dest("build/public/templates"))
});

gulp.task("public-files", function(){
    return gulp.src(["public/bower.json", "public/index.html", "public/LICENSE", "public/README.md"])
        .pipe(gulp.dest("build/public"))
});

gulp.task("public", ["bootstrap", "css", "dist", "font-awesome", "fonts", "img", "js", "less", "pages", "templates", "public-files"]);

//This minifies and concats all files/folders not in public.
gulp.task("models", function(){
    return gulp.src("models/**/*")
        .pipe(uglify())
        .pipe(concat("Program.js"))
        .pipe(gulp.dest("build/models"))
});

gulp.task("server", function(){
    return gulp.src("server/**/*")
        .pipe(uglify())
        .pipe(concat("route.js"))
        .pipe(gulp.dest("build/server"))
});

gulp.task("dir-files", function(){
    return gulp.src(["handlebars.jquery.json", "package.json", "server.js"])
        .pipe(gulp.dest("build/"))
});

gulp.task("build", ["models", "public", "server", "dir-files"])

//loads mocha tests from test folder and runs them.
gulp.task("mocha-test", function(){
    return gulp.src(["test/**/*.js"], {read:false})
                .pipe(mocha({reporter: "spec"}))
                .on("error", util.log);
});

//loads qunit tests from test folder and runs them, commented until there is a functional test.
gulp.task("qunit-test", function(){
    return gulp.src("test/*.html")
                .pipe(qunit());
});

//runs all tests
gulp.task("tests", ["mocha-test", "qunit-test"]);

//hints for tests!
gulp.task("test-hint", function(){
    return gulp.src("test/**/*.js")
        .pipe(jshint())
        .pipe(jshint.reporter("default"))
});

//hints for the server!
gulp.task("server-hint", function(){
    return gulp.src(["server.js", "server/**/*.js"])
        .pipe(jshint())
        .pipe(jshint.reporter("default"))
});

//runs all hints
gulp.task("hints", ["hint", "test-hint", "server-hint"]);
