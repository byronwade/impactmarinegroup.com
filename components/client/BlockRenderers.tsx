"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";

const AccordionBlock = dynamic(() => import("../blocks/AccordionBlock"), {
	loading: () => <div>Loading...</div>,
});

export function VideoRenderer({ videoRef, isMobile }: { videoRef: React.RefObject<HTMLVideoElement>; isMobile: boolean }) {
	useEffect(() => {
		if (videoRef.current && !isMobile) {
			videoRef.current.play().catch((error) => {
				console.error("Error attempting to play video:", error);
			});
		}
	}, [isMobile]);

	return null;
}

export function CallToActionRenderer({ block }: { block: any }) {
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

export function AccordionRenderer({ block }: { block: any }) {
	return <AccordionBlock block={block} />;
}
