import site from "../../_data/site.js";
import { isPendingPublication } from "../../../lib/publish-at.js";
import { isDraft } from "../../../lib/validate-posts.js";

const includeDrafts = process.env.ELEVENTY_ENV === "development";

function heldBack(data) {
  if (isDraft(data.draft) && !includeDrafts) return true;
  if (isPendingPublication(data) && !includeDrafts) return true;
  return false;
}

export default {
  layout: "layouts/article.njk",
  kind: "article",
  eleventyComputed: {
    author() {
      return site.author;
    },
    permalink(data) {
      if (heldBack(data)) return false;
      const file = String(data.page.inputPath).split("/").pop().replace(/\.md$/, "");
      return `/articles/${file}/`;
    },
    eleventyExcludeFromCollections(data) {
      return heldBack(data);
    },
  },
};
