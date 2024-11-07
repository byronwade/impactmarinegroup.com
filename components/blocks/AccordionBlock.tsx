"use client";

import { PortableText } from "@portabletext/react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface AccordionContent {
	_type: string;
	children: Array<{
		_type: string;
		text: string;
		marks?: string[];
	}>;
	markDefs?: Array<{
		_type: string;
		_key: string;
		href: string;
	}>;
}

interface AccordionItem {
	_key: string;
	trigger: string;
	content: AccordionContent[];
}

interface AccordionBlockProps {
	items: AccordionItem[];
}

export default function AccordionBlock({ items }: AccordionBlockProps) {
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
}
