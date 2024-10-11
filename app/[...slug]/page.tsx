import { getPageBySlug } from "@/lib/sanity";
import { RenderBlock } from "@/components/RenderBlock";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: { slug: string[] } }) {
  const slug = params.slug.join('/');
  const page = await getPageBySlug(slug);

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.seo?.metaDescription,
  };
}

export default async function Page({ params }: { params: { slug: string[] } }) {
  const slug = params.slug.join('/');
  const page = await getPageBySlug(slug);

  if (!page) {
    notFound();
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">{page.title}</h1>
      {page.content && page.content.map((block, index) => (
        <RenderBlock key={index} block={block} />
      ))}
    </div>
  );
}