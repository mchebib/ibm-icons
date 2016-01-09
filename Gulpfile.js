var del = require("del"),
    gulp = require("gulp"),
    runSequence = require("run-sequence"),
    shell = require("gulp-shell"),
    svgmin = require("gulp-svgmin"),
    path = require("path");

gulp.task("clean", function() {
    return del([
        "dist/**/*"
    ]);
});

gulp.task("export", shell.task([
    "osascript lib/export.scpt "
        + path.resolve(__dirname, "lib/IllustratorSaveAsSvgs.jsx") + " "
        + path.resolve(__dirname, "dist") + " "
        + path.resolve(__dirname, "src") + " "
]));

gulp.task("svg", function() {
    return gulp.src("dist/**/*.svg")
        .pipe(svgmin())
        .pipe(gulp.dest("dist"));
});

gulp.task("default", ["clean", "export", "svg"]);



