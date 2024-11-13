"use client";

import { memo } from "react";
import { PortableText } from "@portabletext/react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { AccordionItem as AccordionItemType } from "@/types/sanity";

interface AccordionBlockProps {
	items: AccordionItemType[];
}

const AccordionBlock = memo(function AccordionBlock({ items }: AccordionBlockProps) {
	if (!items?.length) return null;

	return (
		<Accordion type="single" collapsible className="w-full max-w-3xl mx-auto my-8">
			{items.map((item) => (
				<AccordionItem key={item._key} value={item._key}>
					<AccordionTrigger>{item.trigger}</AccordionTrigger>
					<AccordionContent>
						<div className="prose dark:prose-invert max-w-none">
							<PortableText value={item.content} />
						</div>
					</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	);
});

export default AccordionBlock;
