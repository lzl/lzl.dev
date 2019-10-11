const pluginRss = require("@11ty/eleventy-plugin-rss");
const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPassthroughCopy("assets");

  eleventyConfig.addNunjucksFilter("datetime", function(value, TZ) {
    return DateTime.fromJSDate(value).setZone(TZ).toString();
  });
  eleventyConfig.addNunjucksFilter("date", function(value, TZ) {
    return DateTime.fromJSDate(value).setZone(TZ).toFormat("yyyy'年'L'月'd'日'");
  });
  eleventyConfig.addNunjucksFilter("rssLastUpdatedDate", collection => {
    if( !collection || !collection.length ) {
      throw new Error( "Collection is empty in rssLastUpdatedDate filter." );
    }
    return DateTime.fromJSDate(collection[ collection.length - 1 ].date).setZone('utc').toString();
  });
  eleventyConfig.addNunjucksFilter("limit", function(value, limit) {
    return value.slice(0, limit);
  });
  eleventyConfig.addNunjucksFilter("strip", function(value) {
    return value.replace(/[\n\r]/g, '').replace(/\\/g, '\\\\').replace(/"/g, '\\"');
  });
};
