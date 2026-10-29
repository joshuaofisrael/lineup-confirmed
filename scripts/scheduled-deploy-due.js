import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { isDuePublication } from "../lib/publish-at.js";

const dir = path.resolve("src/content/posts");
const force = process.argv.includes("--force");
const due = [];

for (const name of fs.readdirSync(dir).filter((file) => file.endsWith(".md"))) {
  const parsed = matter(fs.readFileSync(path.join(dir, name), "utf8"));
  if (isDuePublication(parsed.data)) due.push(name);
}

if (force || due.length) {
  console.log(due.length ? `Due:\n${due.join("\n")}` : "Deploy forced.");
  process.exit(0);
}

console.log("No scheduled article is inside the publish window.");
process.exit(78);
