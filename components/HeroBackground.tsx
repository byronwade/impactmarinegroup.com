import { headers } from "next/headers";
import Image from "next/image";
import { ClientVideo } from "@/components/ClientVideo";

export default async function HeroBackground() {
	const viewport = (await headers()).get("x-viewport") ?? "desktop";
	const videoUrl = "/impactlogo.mp4";

	const imageProps = {
		src: "/boat.webp",
		alt: "Impact Marine Group boat on water",
		priority: true,
		sizes: "100vw",
		className: "absolute inset-0 w-full h-full object-cover",
		quality: 50,
		loading: "eager",
		fetchPriority: "high",
		width: 1920,
		height: 1080,
	};

	if (viewport === "mobile") {
		return (
			<div className="absolute inset-0 w-full h-full">
				<Image {...imageProps} />
			</div>
		);
	}

	return (
		<div className="absolute inset-0 w-full h-full">
			<Image {...imageProps} />
			<ClientVideo videoSrc={videoUrl} />
		</div>
	);
}
