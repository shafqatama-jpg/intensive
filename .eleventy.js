module.exports = function (eleventyConfig) {
  // These 19 pages are plain HTML with no Eleventy front matter — passthrough
  // copy is the ONLY mechanism that gets them into the output, since "html" is
  // deliberately not in templateFormats below (the template engine never looks
  // at these files at all, so there is nothing for it to conflict with here).
  const staticPages = [
    "accessibility-statement.html",
    "booking-terms.html",
    "cancellation-policy.html",
    "complaints-procedure.html",
    "cookie-policy.html",
    "gdpr-policy.html",
    "index.html",
    "kingston-upon-thames.html",
    "morden.html",
    "new-malden.html",
    "payment-policy.html",
    "privacy-policy.html",
    "putney.html",
    "refund-policy.html",
    "resources.html",
    "surbiton.html",
    "terms-conditions.html",
    "tolworth.html",
    "website-disclaimer.html",
  ];
  staticPages.forEach((f) => eleventyConfig.addPassthroughCopy(f));

  const staticAssets = [
    "shared.css",
    "consent.js",
    "gallery-data.json",
    "hero-photo-optimized.jpg",
    "kings-logo-transparent.png",
    "favicon-32.png",
    "favicon-180.png",
    "gallery-1-man-pass.jpg",
    "gallery-2-woman-pass.jpg",
    "gallery-3-morden-2minors.jpg",
    "gallery-4-woman-cert.jpg",
    "gallery-5-morden-3minors.jpg",
    "robots.txt",
    "llms.txt",
  ];
  staticAssets.forEach((f) => eleventyConfig.addPassthroughCopy(f));
  eleventyConfig.addPassthroughCopy("admin");

  // All blog posts, newest first — filtered from Eleventy's own already-processed
  // template list (more reliable than a separate glob re-scan).
  eleventyConfig.addCollection("posts", (collectionApi) =>
    collectionApi
      .getAll()
      .filter((item) => item.inputPath && item.inputPath.includes("/_posts/"))
      .sort((a, b) => b.date - a.date)
  );

  return {
    dir: { input: ".", includes: "_includes", output: "_site" },
    templateFormats: ["md", "njk"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
