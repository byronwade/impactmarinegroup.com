"use client";

import { memo } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { AccordionContent as AccordionContentType } from "@/types/payload";

interface AccordionItem {
	_key: string;
	trigger: string;
	content: AccordionContentType[];
}

interface AccordionBlockProps {
	items: AccordionItem[];
}

const AccordionBlock = memo(function AccordionBlock({ items }: AccordionBlockProps) {
	if (!items?.length) return null;

	return (
		<Accordion type="single" collapsible className="w-full max-w-3xl mx-auto my-8">
			{items.map((item) => (
				<AccordionItem key={item._key} value={item._key}>
					<AccordionTrigger>{item.trigger}</AccordionTrigger>
					<AccordionContent>
						<div key={`${item._key}-content`} className="prose dark:prose-invert max-w-none">
							{item.content.map((block, index) => (
								<div key={index}>
									{block.children.map((child, childIndex) => (
										<p key={childIndex}>{child.text}</p>
									))}
								</div>
							))}
						</div>
					</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	);
});

export default AccordionBlock;
