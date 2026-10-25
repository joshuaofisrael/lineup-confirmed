export default {
  eleventyComputed: {
    title(data) {
      const d = data.desk || {};
      if (d.slug === "nhl-starting-goalies") return "NHL Starting Goalies Tonight: Expected and Confirmed Starters";
      return d.name ? `${d.name} Today: Latest News and Updates` : "Topic";
    },
    summary(data) {
      return data.desk?.description || "";
    },
  },
};
