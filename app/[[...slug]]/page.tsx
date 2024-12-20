import { getPageBlocks } from "@/actions/sanity";
import RenderBlock from "@/components/RenderBlock";
import type { Block } from "@/types/sanity";

interface PageProps {
	params: Promise<{
		slug?: string[];
	}>;
}

export default async function Page({ params }: PageProps) {
	// Wait for the entire params object
	const resolvedParams = await params;
	const slug = resolvedParams.slug?.length ? resolvedParams.slug.join("/") : "home";
	const blocks = await getPageBlocks(slug);

	if (!blocks?.length) {
		return <div>No content found</div>;
	}

	return (
		<div className="w-full">
			{blocks.map((block: Block) => (
				<RenderBlock key={block._key} block={block} />
			))}
		</div>
	);
}

// Update metadata generation to also handle async params
export async function generateMetadata({ params }: PageProps) {
	const resolvedParams = await params;
	const slug = resolvedParams.slug?.length ? resolvedParams.slug.join("/") : "home";
	const blocks = await getPageBlocks(slug);

	return {
		title: blocks?.[0]?.title || "Impact Marine Group",
		description: "Welcome to Impact Marine Group",
	};
}
