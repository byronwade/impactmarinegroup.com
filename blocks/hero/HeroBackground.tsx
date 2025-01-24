"use client";

import { useEffect, useRef } from "react";
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

	useEffect(() => {
		if (videoRef.current && backgroundVideo?.url) {
			videoRef.current.play().catch((error) => {
				console.error("Error playing video:", error);
			});
		}
	}, [backgroundVideo]);

	return (
		<div className="absolute inset-0 w-full h-full">
			<div className="absolute inset-0 bg-gray-900" />
			<div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" style={{ zIndex: 2 }} />

			<div className="absolute inset-0 w-full h-full">
				{backgroundVideo?.url ?
					<video ref={videoRef} className="absolute right-0 w-2/3 h-full object-cover" autoPlay muted loop playsInline poster={backgroundImage?.url}>
						<source src={backgroundVideo.url} type="video/mp4" />
						{backgroundImage?.url && <Image src={backgroundImage.url} alt="Video fallback" fill className="object-cover" priority />}
					</video>
				: backgroundImage?.url ?
					<Image src={backgroundImage.url} alt="Hero background" priority fill className="absolute right-0 w-2/3 h-full object-cover" quality={75} />
				:	null}
			</div>

			<div className="absolute inset-0 bg-black/25" style={{ zIndex: 3 }} />
		</div>
	);
}
