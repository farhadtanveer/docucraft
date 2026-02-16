import React from "react";
import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsByCategory } from "@/utils/doc-util";

export default async function CategoriesPage({ params }) {
  const { name } = await params;
  const allDocuments = getDocuments();
  const matchedDocs = getDocumentsByCategory(allDocuments, name);

  return <ContentDisplay id={matchedDocs[0].id} />;
}
