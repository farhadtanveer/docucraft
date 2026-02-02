import fs from "fs";
import matter from "gray-matter";
import path from "path";

const postsDirectory = path.join(process.cwd(), "docs");

export function getDocuments() {
  //   console.log("Docs directory path:", postsDirectory);
  const fileNames = fs.readdirSync(postsDirectory);

  const allDocuments = fileNames.map((fileName) => {
    const id = fileName.replace("md", "");

    const fullPath = path.join(postsDirectory, fileName);

    const fileContent = fs.readFileSync(fullPath, "utf8");

    const matterResults = matter(fileContent);
    // console.log(matterResults);

    return {
      id,
      ...matterResults.data,
    };
  });

  return allDocuments.sort((a, b) => {
    if (a.order < b.order) {
      return 1;
    }
    return 0;
  });
}
