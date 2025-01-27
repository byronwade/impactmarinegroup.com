"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface HeroBackgroundProps {
	backgroundImage?: {
		url: string;
	};
	backgroundVideo?: {
		url: string;
	};
}

export default function HeroBackground({ backgroundImage, backgroundVideo }: HeroBackgroundProps) {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [videoError, setVideoError] = useState<string | null>(null);
	const [videoLoaded, setVideoLoaded] = useState(false);

	useEffect(() => {
		if (!videoRef.current || !backgroundVideo?.url) return;

		const video = videoRef.current;
		console.log("Video element created:", video);
		console.log("Video URL:", backgroundVideo.url);
		console.log("Video readyState:", video.readyState);

		const handleCanPlay = () => {
			console.log("Video can play");
			setVideoLoaded(true);
			video.play().catch((error) => {
				console.error("Play error:", error);
			});
		};

		const handleError = (e: Event) => {
			const error = (e.target as HTMLVideoElement).error;
			console.error("Video error:", error?.message);
			setVideoError(error?.message || "Error loading video");
		};

		video.addEventListener("canplay", handleCanPlay);
		video.addEventListener("error", handleError);
		video.load(); // Force load the video

		return () => {
			video.removeEventListener("canplay", handleCanPlay);
			video.removeEventListener("error", handleError);
		};
	}, [backgroundVideo]);

	return (
		<div className="absolute inset-0 w-full h-full overflow-hidden">
			{/* Base dark background */}
			<div className="absolute inset-0 bg-gray-900" />

			{/* Media container */}
			<div className="absolute inset-0">
				{backgroundVideo?.url ?
					<div className="absolute top-0 left-[66.66%] w-full h-full">
						<div className="relative w-full h-full">
							<video ref={videoRef} className={`w-full h-full object-cover transition-opacity duration-500 ${videoLoaded ? "opacity-100" : "opacity-0"}`} autoPlay muted loop playsInline preload="auto">
								<source src={backgroundVideo.url} type="video/mp4" />
								{videoError && <div className="absolute inset-0 flex items-center justify-center text-white bg-black/50">{videoError}</div>}
							</video>
						</div>
					</div>
				: backgroundImage?.url ?
					<div className="absolute top-0 left-[66.66%] w-full h-full">
						<Image src={backgroundImage.url} alt="Hero background" priority fill className="object-cover" quality={75} />
					</div>
				:	null}
			</div>

			{/* Dark overlay for left side */}
			<div className="absolute inset-0 bg-black/80 w-[45%]" />

			{/* Gradient overlay for transition */}
			<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent translate-x-[35%]" />
		</div>
	);
}
