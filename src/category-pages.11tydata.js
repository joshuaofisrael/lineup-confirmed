export default {
  eleventyComputed: {
    title(data) {
      const d = data.desk || {};
      if (d.slug === "nhl-starting-goalies") return "NHL Starting Goalies Tonight: Expected and Confirmed Starters";
      return d.name ? `${d.name} Today: Latest News and Updates` : "Topic";
    },
    // Empty hubs (no published story yet) stay noindex and out of the sitemap/nav (AdSense low-value fix, 20 Nov 2026).
    noindex(data) {
      const d = data.desk || {};
      if (d.slug === "nhl-starting-goalies") return data.noindex;
      const posts = (data.collections && data.collections.posts) || [];
      return posts.some((p) => p.data.category === d.name) ? data.noindex : true;
    },
    summary(data) {
      return data.desk?.description || "";
    },
  },
};
