import type { Page } from "@/payload-types";

type LayoutType = NonNullable<Page["layout"]>;
type ContentBlock = Extract<LayoutType[number], { blockType: "content" }>;

export default function Content(props: ContentBlock) {
	const { content } = props;

	return (
		<section className="py-20">
			<div className="container px-4 mx-auto">
				<div className="max-w-4xl mx-auto prose prose-lg">
					{/* TODO: Add rich text renderer */}
					{JSON.stringify(content)}
				</div>
			</div>
		</section>
	);
}
