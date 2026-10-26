export default {
  eleventyComputed: {
    title(data) {
      return data.tag || "Tag";
    },
    seoTitle(data) {
      return data.tag ? `${data.tag} News: Starting Goalie and Lineup Updates` : "Tag";
    },
    seoDescription(data) {
      return data.tag ? `Every Lineup Confirmed story on ${data.tag}: confirmed and expected starters, goalie decisions and lineup news, each linked to its source.` : "";
    },
    summary(data) {
      return data.tag ? `Published stories tagged ${data.tag}.` : "";
    },
  },
};
