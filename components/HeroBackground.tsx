import { headers } from "next/headers";
import Image from "next/image";
import { ClientVideo } from "@/components/ClientVideo";

export default async function HeroBackground() {
	const viewport = (await headers()).get("x-viewport") ?? "desktop";
	const videoUrl = "https://2gqfqtxkmitzixum.public.blob.vercel-storage.com/impactlogo-HV2Dx0Ahlp1CxDNLc9mT81i3QKal3X.mp4";

	const imageProps = {
		src: "/boat.webp",
		alt: "Impact Marine Group boat on water",
		priority: true,
		sizes: "100vw",
		className: "object-cover",
		quality: 75,
		loading: "eager",
		fetchPriority: "high",
		width: 1200,
		height: 675,
	};

	if (viewport === "mobile") {
		return (
			<>
				<Image {...imageProps} />
			</>
		);
	}

	return (
		<>
			<ClientVideo videoSrc={videoUrl} />
		</>
	);
}
