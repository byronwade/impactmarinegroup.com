import { headers } from "next/headers";
import Image from "next/image";
import { ClientVideo } from "@/components/ClientVideo";

export default async function HeroBackground() {
	const viewport = (await headers()).get("x-viewport") ?? "desktop";
	// Use a working video URL - make sure this URL is accessible
	const videoUrl = "/impactlogo.mp4";

	// Test the video URL before passing it
	const testVideoAvailability = async (url: string) => {
		try {
			const response = await fetch(url, { method: "HEAD" });
			return response.ok;
		} catch (error) {
			console.error("Error testing video availability:", error);
			return false;
		}
	};

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

	const isVideoAvailable = await testVideoAvailability(videoUrl);

	return (
		<div className="absolute inset-0 w-full h-full">
			<Image {...imageProps} />
			{isVideoAvailable && <ClientVideo videoSrc={videoUrl} />}
		</div>
	);
}
