const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPassthroughCopy("assets");

  eleventyConfig.addNunjucksFilter("date", function(value) {
    const year = value.getFullYear();
    const month = value.getMonth() + 1;
    const day = value.getDate();
    return `${year}年${month}月${day}日`;
  });
  eleventyConfig.addNunjucksFilter("limit", function(value, limit) {
    return value.slice(0, limit);
  });
  eleventyConfig.addNunjucksFilter("strip", function(value) {
    return value.replace(/[\n\r]/g, '').replace(/\\/g, '\\\\').replace(/"/g, '\\"');
  });
};
