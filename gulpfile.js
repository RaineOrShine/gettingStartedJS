(function() {
	'use strict';

	var jade = require('gulp-jade');

	gulp.task('default', function() {
		var YOUR_LOCALS = {};

		gulp.src('./*.jade')
			.pipe(jade({
				// locals: YOUR_LOCALS
			}))
			.pipe(gulp.dest('./'))
	});

})();