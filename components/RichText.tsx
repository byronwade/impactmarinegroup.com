export type RichTextContent = Array<{
	type?: string;
	children?: Array<{
		text?: string;
		bold?: boolean;
		italic?: boolean;
		underline?: boolean;
		code?: boolean;
	}>;
}>;

interface RichTextProps {
	content: RichTextContent;
}

export function RichText({ content }: RichTextProps) {
	if (!content || !Array.isArray(content)) {
		return null;
	}

	return (
		<div className="prose prose-lg">
			{content.map((node, i) => {
				if (!node) return null;
				if (node.type === "paragraph") {
					return (
						<p key={i} className="mb-4">
							{node.children?.map((child, j) => {
								if (typeof child.text === "string") {
									let className = "";
									if (child.bold) className += " font-bold";
									if (child.italic) className += " italic";
									if (child.underline) className += " underline";
									if (child.code) className += " font-mono bg-gray-100 rounded px-1";

									return (
										<span key={j} className={className.trim()}>
											{child.text}
										</span>
									);
								}
								return null;
							})}
						</p>
					);
				}
				return null;
			})}
		</div>
	);
}
