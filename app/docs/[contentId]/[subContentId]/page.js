import ContentDisplay from "@/components/ContentDisplay";

export default async function SubContentPage({ params }) {
  const { subContentId } = await params;

  return <ContentDisplay id={subContentId} />;
}
