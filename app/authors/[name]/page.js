import React from "react";
import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsByAuthor } from "@/utils/doc-util";

export default async function AuthorPage({ params }) {
  const { name } = await params;
  const allDocuments = getDocuments();
  const matchedDocs = getDocumentsByAuthor(allDocuments, name);

  return <ContentDisplay id={matchedDocs[0].id} />;
}
