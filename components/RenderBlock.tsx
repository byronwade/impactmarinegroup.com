'use client';

import React, { useRef, useEffect, useMemo } from "react";
import { PortableText } from "@portabletext/react";

// Define an interface for the block prop
export type Block = {
	_type: string;
	asset: {
		url: string;
		metadata: {
			dimensions: { width: number; height: number };
		};
	};
	alt?: string;
	heading?: string;
	text?: string;
	buttonLink?: string;
	buttonText?: string;
	imagePosition?: string;
	componentName?: string;
	props?: Record<string, unknown>;
	subheading?: string;
	image: {
		asset: {
			url: string;
			metadata: {
				dimensions: { width: number; height: number };
			};
		};
		alt?: string;
	};
};

export default function RenderBlock({ block }: { block: Block }) {
	const isMobile = useMemo(() => {
		if (typeof window === "undefined") return false;
		return /mobile/i.test(window.navigator.userAgent);
	}, []);
	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		if (videoRef.current && !isMobile) {
			videoRef.current.play().catch((error) => {
				console.error("Error attempting to play video:", error);
			});
		}
	}, [isMobile]);

	switch (block._type) {
		case "image":
			//return block.asset.url ? <Image src={getBlobUrl("/" + block.asset.url.split("/").pop())} alt={block.alt || ""} width={block.asset.metadata.dimensions.width} height={block.asset.metadata.dimensions.height} className="my-8" /> : null;
			return null;
		case "callToAction":
			return (
				<div className="bg-blue-100 p-6 my-8 rounded-lg">
					<h2 className="text-2xl font-bold mb-4">{block.heading}</h2>
					<p className="mb-4">{block.text}</p>
					<a href={block.buttonLink} className="bg-blue-500 text-white px-4 py-2 rounded">
						{block.buttonText}
					</a>
				</div>
			);
		case "textWithImage":
			return (
				<div className={`flex my-8 ${block.imagePosition === "left" ? "flex-row-reverse" : "flex-row"}`}>
					<div className="w-1/2 p-4">
						<h2 className="text-2xl font-bold mb-4">{block.heading}</h2>
						<p>{block.text}</p>
					</div>
					{/* <div className="w-1/2">
						<Image src={getBlobUrl("/" + block.image.asset.url.split("/").pop())} alt={block.image.alt || ""} width={block.image.asset.metadata.dimensions.width} height={block.image.asset.metadata.dimensions.height} className="object-cover w-full h-full" />
					</div> */}
				</div>
			);
		case "customComponent":
		default:
			return <PortableText value={block} />;
	}
}
