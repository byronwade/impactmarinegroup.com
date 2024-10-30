import { headers } from "next/headers";
import Image from "next/image";
import { ClientVideo } from "@/components/ClientVideo";

export default async function HeroBackground() {
	const viewport = (await headers()).get("x-viewport") ?? "desktop";
	// Hardcode the URL for testing
	const videoUrl = "https://2gqfqtxkmitzixum.public.blob.vercel-storage.com/impactlogo-HV2Dx0Ahlp1CxDNLc9mT81i3QKal3X.mp4";

	const imageProps = {
		src: "/boat.webp",
		alt: "Impact Marine Group boat on water",
		priority: true,
		sizes: "100vw",
		className: "absolute inset-0 w-full h-full object-cover",
		quality: 75,
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
