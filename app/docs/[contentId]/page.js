import ContentDisplay from "@/components/ContentDisplay";

export default async function ContentPage({ params }) {
  const { contentId } = await params;

  return <ContentDisplay id={contentId} />;
}
