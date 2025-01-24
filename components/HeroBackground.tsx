/* eslint-disable jsx-a11y/alt-text */
import { headers } from "next/headers";
import Image from "next/image";
import { ClientVideo } from "@/components/ClientVideo";

export default async function HeroBackground() {
	const viewport = (await headers()).get("x-viewport") ?? "desktop";

	const imageProps = {
		src: "/boat.webp",
		alt: "Impact Marine Group boat on water",
		priority: true,
		sizes: "100vw",
		className: "object-cover",
		quality: 40,
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
			<ClientVideo videoSrc="/impactlogo.mp4" />
		</>
	);
}
