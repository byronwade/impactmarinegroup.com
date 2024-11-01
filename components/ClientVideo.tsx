"use client";

import { useState, useCallback, useMemo } from "react";

export function ClientVideo({ videoSrc }: { videoSrc: string }) {
	const [isLoaded, setIsLoaded] = useState(false);
	const [hasError, setHasError] = useState(false);

	const handleLoad = useCallback(() => setIsLoaded(true), []);
	const handleError = useCallback(() => setHasError(true), []);

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
			preload: "auto" as const,
			onLoadedData: handleLoad,
			onError: handleError,
		}),
		[isLoaded, handleLoad, handleError]
	);

	if (hasError) {
		return null;
	}

	return (
		<div className="absolute inset-0 w-full h-full overflow-hidden hidden md:block">
			<video {...videoProps}>
				<source src={videoSrc} type="video/mp4" />
				Your browser does not support the video tag.
			</video>

			<div
				className="absolute inset-y-0 left-0 w-[50%] z-10"
				style={{
					background: "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, transparent 100%)",
				}}
			/>
		</div>
	);
}
