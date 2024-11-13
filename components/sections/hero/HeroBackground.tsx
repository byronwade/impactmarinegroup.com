"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

interface HeroBackgroundProps {
	data?: {
		backgroundImage?: {
			asset?: {
				url?: string;
			};
		};
		backgroundVideo?: {
			asset?: {
				url?: string;
			};
		};
	};
}

export default function HeroBackground({ data }: HeroBackgroundProps) {
	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		const videoUrl = data?.backgroundVideo?.asset?.url;
		if (videoRef.current && videoUrl) {
			videoRef.current.play().catch((error) => {
				console.error("Error playing video:", error);
			});
		}
	}, [data]);

	if (!data) return null;

	const backgroundImageUrl = data?.backgroundImage?.asset?.url;
	const backgroundVideoUrl = data?.backgroundVideo?.asset?.url;

	return (
		<div className="absolute inset-0 w-full h-full">
			<div className="absolute inset-0 bg-gray-900" />

			<div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" style={{ zIndex: 2 }} />

			<div className="absolute inset-0 w-full h-full">
				{backgroundVideoUrl ?
					<video ref={videoRef} className="absolute right-0 w-2/3 h-full object-cover" autoPlay muted loop playsInline poster={backgroundImageUrl}>
						<source src={backgroundVideoUrl} type="video/mp4" />
						{backgroundImageUrl && <Image src={backgroundImageUrl} alt="Video fallback" fill className="object-cover" />}
					</video>
				: backgroundImageUrl ?
					<Image src={backgroundImageUrl} alt="Hero background" priority fill className="absolute right-0 w-2/3 h-full object-cover" quality={75} />
				:	null}
			</div>

			<div className="absolute inset-0 bg-black/25" style={{ zIndex: 3 }} />
		</div>
	);
}
