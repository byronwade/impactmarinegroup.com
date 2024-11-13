import { getPageBlocks } from "@/actions/sanity";
import RenderBlock from "@/components/RenderBlock";
import type { Block } from "@/types/sanity";

interface PageProps {
	params: {
		page: string;
	};
}

export default async function Page({ params }: PageProps) {
	const blocks = await getPageBlocks(params.page);

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

export async function generateMetadata({ params }: PageProps) {
	const blocks = await getPageBlocks(params.page);

	return {
		title: blocks?.[0]?.title || "Impact Marine Group",
		description: "Welcome to Impact Marine Group",
	};
}
