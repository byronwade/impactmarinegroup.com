import { getPageBySlug } from "@/lib/sanity";
import { RenderBlock } from "@/components/RenderBlock";
import { notFound } from "next/navigation";

export default async function Home() {
  const page = await getPageBySlug('/');

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