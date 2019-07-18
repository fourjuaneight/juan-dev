const htmlmin = require('html-minifier');

const htmlMinTransform = (value, outputPath) => {
  if (outputPath.indexOf('.html') > -1) {
    let minified = htmlmin.minify(value, {
      useShortDoctype: true,
      removeComments: true,
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true,
    });
    return minified;
  }
  return value;
}

module.exports = htmlMinTransform;