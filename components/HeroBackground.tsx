import { headers } from "next/headers";
import Image from "next/image";
import ClientVideo from "./ClientVideo";

export default async function HeroBackground() {
	const viewport = (await headers()).get("x-viewport") ?? "desktop";
	const poster = "/boat.webp";
	const videoSrc = "/impactlogo.mp4";

	const imageProps = {
		src: poster,
		alt: "Impact Marine Group boat on water",
		fill: true,
		priority: true,
		sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw",
		className: "object-cover",
		quality: 60,
		loading: "eager",
		fetchPriority: "high",
		width: 1920,
		height: 1080,
	};

	if (viewport === "mobile") {
		return <Image {...imageProps} />;
	}

	return (
		<>
			<Image {...imageProps} />
			<ClientVideo videoSrc={videoSrc} />
		</>
	);
}
