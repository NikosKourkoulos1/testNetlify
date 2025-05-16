module.exports = function(eleventyConfig) {
  // Passthrough copy for static assets (like CSS, images)
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("admin"); // We'll need this for Netlify CMS

  // Return your Object options:
  return {
    dir: {
      input: ".",      // Source files directory (root)
      includes: "_includes", // Layouts directory
      output: "_site"    // Build output directory
    },
    markdownTemplateEngine: "njk", // Process markdown files with Nunjucks
    htmlTemplateEngine: "njk",     // Process HTML files with Nunjucks
    dataTemplateEngine: "njk"      // Process data files with Nunjucks
  };
};