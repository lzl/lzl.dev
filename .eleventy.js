const pluginRss = require("@11ty/eleventy-plugin-rss");
const { DateTime } = require("luxon");

const offsetHour = -8;

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPassthroughCopy("assets");

  eleventyConfig.addNunjucksFilter("pageDateTime", function(value) {
    return DateTime.fromJSDate(value).plus({ hours: offsetHour }).setZone('Asia/Shanghai').toString();
  });
  eleventyConfig.addNunjucksFilter("pageDate", function(value) {
    return DateTime.fromJSDate(value).plus({ hours: offsetHour }).setZone('Asia/Shanghai').toFormat("yyyy'年'L'月'd'日'");
  });
  eleventyConfig.addNunjucksFilter("feedDateTime", function(value) {
    return DateTime.fromJSDate(value).plus({ hours: offsetHour }).setZone('utc').toString();
  });
  eleventyConfig.addNunjucksFilter("feedLastUpdatedDate", collection => {
    if( !collection || !collection.length ) {
      throw new Error( "Collection is empty in feedLastUpdatedDate filter." );
    }
    return DateTime.fromJSDate(collection[ collection.length - 1 ].date).plus({ hours: offsetHour }).setZone('utc').toString();
  });
  eleventyConfig.addNunjucksFilter("format", function(value, format) {
    return DateTime.fromJSDate(value).plus({ hours: offsetHour }).setZone('utc').toFormat(String(format));
  });
  eleventyConfig.addNunjucksFilter("limit", function(value, limit) {
    return value.slice(0, limit);
  });
  eleventyConfig.addNunjucksFilter("strip", function(value) {
    return value.replace(/[\n\r]/g, '').replace(/\\/g, '\\\\').replace(/"/g, '\\"');
  });
};
