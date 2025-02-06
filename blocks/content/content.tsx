import { RichText, type RichTextContent } from "@/components/ui/rich-text";

interface ContentBlock {
	id: string;
	blockType: "content";
	content: RichTextContent;
}

export default function Content(props: ContentBlock) {
	const { content } = props;

	if (!content || !Array.isArray(content)) {
		return null;
	}

	return (
		<section className="py-20">
			<div className="container px-4 mx-auto">
				<div className="max-w-4xl mx-auto">
					<RichText content={content} />
				</div>
			</div>
		</section>
	);
}
