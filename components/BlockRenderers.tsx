"use client";

import dynamic from "next/dynamic";
import { memo, useEffect } from "react";
import type { AccordionContent } from "@/types/payload";

const AccordionBlock = dynamic(
	() =>
		import("./blocks/AccordionBlock").then((mod) => ({
			default: memo(mod.default),
		})),
	{
		loading: () => <div className="h-32 bg-gray-100 animate-pulse" />,
		ssr: true,
	}
);

interface VideoRendererProps {
	videoRef: React.RefObject<HTMLVideoElement | null>;
	isMobile: boolean;
	video: {
		asset: {
			url: string;
		};
	};
}

interface CallToActionProps {
	heading: string;
	text: string;
	buttonText: string;
	buttonLink: string;
}

interface AccordionBlockProps {
	block: {
		items: Array<{
			_key: string;
			trigger: string;
			content: AccordionContent[];
		}>;
	};
}

export const VideoRenderer = memo(function VideoRenderer({ videoRef, isMobile, video }: VideoRendererProps) {
	useEffect(() => {
		const videoElement = videoRef.current;
		if (!videoElement || isMobile || !video.asset.url) return;

		const playVideo = async () => {
			try {
				await videoElement.play();
			} catch (error) {
				console.error("Error playing video:", error);
			}
		};

		playVideo();

		return () => {
			videoElement.pause();
		};
	}, [isMobile, videoRef, video.asset.url]);

	if (!video.asset.url) return null;

	return <video ref={videoRef} src={video.asset.url} className="w-full" muted playsInline loop preload="metadata" />;
});

export function CallToActionRenderer({ heading, text, buttonText, buttonLink }: CallToActionProps) {
	return (
		<div className="bg-blue-100 p-6 my-8 rounded-lg">
			<h2 className="text-2xl font-bold mb-4">{heading}</h2>
			<p className="mb-4">{text}</p>
			<a href={buttonLink} className="bg-blue-500 text-white px-4 py-2 rounded">
				{buttonText}
			</a>
		</div>
	);
}

export function AccordionRenderer({ block }: AccordionBlockProps) {
	return <AccordionBlock items={block.items} />;
}
