import Image, { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function (eleventyConfig) {
  eleventyConfig.setServerOptions({
    watch: ['_site/**/*.css'],
  });
  eleventyConfig.addPassthroughCopy('/src/assets');
  eleventyConfig.addPassthroughCopy('./src/assets/js');

  eleventyConfig.addNunjucksAsyncShortcode("svgIcon", async filename => {
    const metadata = await Image(`./src/assets/${filename}`, {
      formats: ["svg"],
      dryRun: true,
    })
    return metadata.svg[0].buffer.toString()
  })
  return {
    dir: {
      input: 'src',
      data: "_data"
    },
  };
};
