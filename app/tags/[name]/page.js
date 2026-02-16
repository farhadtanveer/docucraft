import React from "react";
import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsByTag } from "@/utils/doc-util";

export default async function TagsPage({ params }) {
  const { name } = await params;
  const allDocuments = getDocuments();
  const matchedDocs = getDocumentsByTag(allDocuments, name);

  return <ContentDisplay id={matchedDocs[0].id} />;
}
