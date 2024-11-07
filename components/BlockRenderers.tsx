"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";

const AccordionBlock = dynamic(() => import("./blocks/AccordionBlock"), {
	loading: () => <div>Loading...</div>,
});

interface VideoRendererProps {
	videoRef: React.RefObject<HTMLVideoElement>;
	isMobile: boolean;
}

interface CallToActionProps {
	block: {
		heading?: string;
		text?: string;
		buttonText?: string;
		buttonLink?: string;
	};
}

interface AccordionBlockProps {
	block: {
		items: Array<{
			_key: string;
			trigger: string;
			content: unknown;
		}>;
	};
}

export function VideoRenderer({ videoRef, isMobile }: VideoRendererProps) {
	useEffect(() => {
		if (videoRef.current && !isMobile) {
			videoRef.current.play().catch((error: Error) => {
				console.error("Error attempting to play video:", error);
			});
		}
	}, [isMobile, videoRef]);

	return null;
}

export function CallToActionRenderer({ block }: CallToActionProps) {
	return (
		<div className="bg-blue-100 p-6 my-8 rounded-lg">
			<h2 className="text-2xl font-bold mb-4">{block.heading}</h2>
			<p className="mb-4">{block.text}</p>
			<a href={block.buttonLink} className="bg-blue-500 text-white px-4 py-2 rounded">
				{block.buttonText}
			</a>
		</div>
	);
}

export function AccordionRenderer({ block }: AccordionBlockProps) {
	//@ts-expect-error cant figure it out
	return <AccordionBlock block={block} />;
}
