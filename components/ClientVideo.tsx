"use client";

import { useState, useEffect } from "react";

export function ClientVideo({ videoSrc }: { videoSrc: string }) {
	const [isLoaded, setIsLoaded] = useState(false);
	const [hasError, setHasError] = useState(false);

	useEffect(() => {
		// Preload the video
		const video = document.createElement("video");
		video.src = videoSrc;
		video.onloadeddata = () => setIsLoaded(true);
		video.onerror = () => setHasError(true);
	}, [videoSrc]);

	if (hasError) return null;

	return (
		<div className="absolute inset-0 w-full h-full">
			<video
				className={`w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
				playsInline
				muted
				loop
				autoPlay
				preload="auto"
				onLoadedData={(e) => {
					setIsLoaded(true);
					e.currentTarget.play().catch(console.error);
				}}
				onError={(e) => {
					console.error("Video failed to load:", e);
					setHasError(true);
				}}
			>
				<source src={videoSrc} type="video/mp4" onError={() => setHasError(true)} />
			</video>
		</div>
	);
}
