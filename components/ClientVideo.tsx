"use client";

import { useState, useCallback, useMemo } from "react";

export function ClientVideo({ videoSrc }: { videoSrc: string }) {
	const [isLoaded, setIsLoaded] = useState(false);

	const handleLoad = useCallback(() => setIsLoaded(true), []);

	const videoProps = useMemo(
		() => ({
			className: `absolute transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`,
			style: {
				position: "absolute",
				right: "-300px",
				width: "calc(100vw + 400px)",
				height: "100%",
				objectFit: "cover" as const,
				objectPosition: "center left",
				transform: "scale(1.1)",
			},
			playsInline: true,
			muted: true,
			loop: true,
			autoPlay: true,
			preload: "metadata" as const,
			onLoadedData: handleLoad,
		}),
		[isLoaded, handleLoad]
	);

	return (
		<div className="absolute inset-0 w-full h-full overflow-hidden hidden md:block">
			<video {...videoProps}>
				<source src={videoSrc} type="video/mp4" />
			</video>
		</div>
	);
}
