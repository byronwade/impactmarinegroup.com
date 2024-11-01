"use client";

import { useState, useCallback } from "react";

export default function ClientVideo() {
	const [isLoaded, setIsLoaded] = useState(false);
	const [hasError, setHasError] = useState(false);

	const handleLoad = useCallback(() => setIsLoaded(true), []);
	const handleError = useCallback(() => setHasError(true), []);

	if (hasError) {
		return null;
	}

	return (
		<div className="absolute inset-0 w-full h-full overflow-hidden hidden md:block">
			<video
				className={`absolute transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
				style={{
					position: "absolute",
					right: "-300px",
					width: "calc(100vw + 400px)",
					height: "100%",
					objectFit: "cover" as const,
					objectPosition: "center left",
					transform: "scale(1.1)",
				}}
				playsInline
				muted
				loop
				autoPlay
				preload="auto"
				onLoadedData={handleLoad}
				onError={handleError}
			>
				<source src="/impactlogo.mp4" type="video/mp4" />
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
