import { headers } from "next/headers";
import Image from "next/image";

export default async function HeroBackground() {
	const viewport = (await headers()).get("x-viewport") ?? "desktop";
	const poster = "/boat.webp";
	const videoSrc = "/impactlogo.mp4";

	const imageProps = {
		src: poster,
		alt: "Impact Marine Group boat on water",
		fill: true,
		priority: true,
		sizes: "(max-width: 768px) 100vw, 50vw",
		className: "object-cover",
		quality: 75,
		loading: "eager",
		fetchPriority: "high",
	};

	if (viewport === "mobile") {
		return <Image {...imageProps} />;
	}

	return (
		<>
			<Image {...imageProps} />
			<video className="absolute top-0 left-0 w-full h-full object-cover" playsInline muted loop autoPlay preload="metadata">
				<source src={videoSrc} type="video/mp4" />
			</video>
		</>
	);
}
