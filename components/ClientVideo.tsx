"use client";

import { useState, useEffect, useCallback, useMemo } from "react";

export function ClientVideo({ videoSrc }: { videoSrc: string }) {
	const [isLoaded, setIsLoaded] = useState(false);
	const [hasError, setHasError] = useState(false);

	const handleLoad = useCallback(() => setIsLoaded(true), []);
	const handleError = useCallback(() => setHasError(true), []);

	const videoProps = useMemo(
		() => ({
			className: `w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`,
			playsInline: true,
			muted: true,
			loop: true,
			autoPlay: true,
			preload: "auto" as const,
			onLoadedData: handleLoad,
			onError: handleError,
			src: videoSrc,
		}),
		[videoSrc, isLoaded, handleLoad, handleError]
	);

	useEffect(() => {
		const preloadVideo = new Promise((resolve, reject) => {
			const video = document.createElement("video");
			video.src = videoSrc;
			video.onloadeddata = resolve;
			video.onerror = reject;
		});

		preloadVideo.catch(() => setHasError(true));

		return () => {
			setIsLoaded(false);
			setHasError(false);
		};
	}, [videoSrc]);

	if (hasError) return null;

	return (
		<div className="absolute inset-0 w-full h-full">
			<video {...videoProps} />
		</div>
	);
}
