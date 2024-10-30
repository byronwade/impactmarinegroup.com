"use client";

import { useState, useEffect, useCallback, useMemo } from "react";

export function ClientVideo({ videoSrc }: { videoSrc: string }) {
	const [isLoaded, setIsLoaded] = useState(false);
	const [hasError, setHasError] = useState(false);

	const handleLoad = useCallback(() => setIsLoaded(true), []);
	const handleError = useCallback(() => {
		setHasError(true);
		console.warn = function () {}; // Temporarily disable console warnings
	}, []);

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
		const originalConsoleError = console.error;
		console.error = (...args) => {
			if (!args[0]?.includes?.(videoSrc)) {
				originalConsoleError.apply(console, args);
			}
		};

		const preloadVideo = new Promise((resolve, reject) => {
			const video = document.createElement("video");
			video.src = videoSrc;
			video.onloadeddata = resolve;
			video.onerror = reject;
		});

		preloadVideo.catch(() => setHasError(true));

		return () => {
			console.error = originalConsoleError; // Restore original console
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
