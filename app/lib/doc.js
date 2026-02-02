import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "docs");
console.log("Docs directory path:", postsDirectory);

export function getDocuments() {
  return fs.readdirSync(postsDirectory);
}
